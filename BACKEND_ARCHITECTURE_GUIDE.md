# SUPAP Backend Architecture Guide
## Spring Boot + PostgreSQL + REST API

---

## Table of Contents
1. [Overview](#overview)
2. [Technology Stack](#technology-stack)
3. [Database Schema](#database-schema)
4. [Entity Models](#entity-models)
5. [API Endpoints](#api-endpoints)
6. [Security & Authentication](#security--authentication)
7. [Database Configuration](#database-configuration)
8. [Project Structure](#project-structure)
9. [Implementation Roadmap](#implementation-roadmap)

---

## Overview

This backend supports the **SUPAP** (Sociedad Uruguaya de Psicoterapias Asistidas con Psicodélicos) platform, which serves two primary purposes:

1. **Current**: Organization website with events, services, team info, and memberships
2. **Future**: **Aula Virtual** - A Learning Management System (LMS) for courses and professional training

The architecture is designed to scale from a content-driven website to a full-featured educational platform with user management, course delivery, and payment processing.

---

## Technology Stack

### Core Framework
- **Spring Boot 3.x** (latest stable)
- **Java 17+** (LTS version)
- **Maven** or **Gradle** (build tool)

### Database
- **PostgreSQL 15+** (primary database)
- **Spring Data JPA** (ORM)
- **Hibernate** (JPA implementation)
- **Flyway** or **Liquibase** (database migrations)

### Security
- **Spring Security 6.x**
- **JWT (JSON Web Tokens)** for stateless authentication
- **BCrypt** for password hashing
- **OAuth2** (optional, for social login)

### Additional Libraries
- **Lombok** (reduce boilerplate)
- **MapStruct** (DTO mapping)
- **Bean Validation** (JSR-380)
- **Springdoc OpenAPI** (API documentation - Swagger)
- **Spring Boot Actuator** (monitoring)

### External Services (Future)
- **Stripe/MercadoPago** (payments)
- **AWS S3/Cloudinary** (file storage)
- **SendGrid/AWS SES** (email service)

---

## Database Schema

### Schema Overview

```
supap_db
├── Core Entities (Current)
│   ├── users
│   ├── roles
│   ├── events
│   ├── event_speakers
│   ├── services
│   ├── team_members
│   ├── team_commissions
│   ├── milestones
│   ├── partnerships
│   ├── newsletter_subscriptions
│   └── contact_messages
│
└── LMS Entities (Aula Virtual - Future)
    ├── courses
    ├── course_modules
    ├── lessons
    ├── enrollments
    ├── student_progress
    ├── assignments
    ├── submissions
    ├── assessments
    ├── grades
    ├── certificates
    ├── payments
    └── payment_transactions
```

### Relationships Diagram

```
User ──< Enrollment >── Course
  │         │              │
  │         │              └──< Module ──< Lesson
  │         │
  │         └──< StudentProgress
  │         └──< Submission
  │         └──< Grade
  │         └──< Certificate
  │
  └──< Payment
  └──< NewsletterSubscription
  └──< ContactMessage

Event ──< EventSpeaker

TeamMember >── TeamCommission

Course ──< Assignment
       ──< Assessment
```

---

## Entity Models

### 1. User Management

#### User Entity
```java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password; // BCrypt hashed

    private String firstName;
    private String lastName;
    private String phone;

    @Enumerated(EnumType.STRING)
    private UserType userType; // VISITOR, MEMBER, STUDENT, INSTRUCTOR, ADMIN

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles;

    private LocalDateTime membershipStartDate;
    private LocalDateTime membershipEndDate;
    private Boolean active = true;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}

enum UserType {
    VISITOR,      // Non-member, can register for events
    MEMBER,       // Paid SUPAP member, free event access
    STUDENT,      // Enrolled in courses
    INSTRUCTOR,   // Teaching courses
    ADMIN         // Platform administrator
}
```

#### Role Entity
```java
@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(unique = true, nullable = false)
    private RoleName name;

    private String description;
}

enum RoleName {
    ROLE_USER,
    ROLE_MEMBER,
    ROLE_STUDENT,
    ROLE_INSTRUCTOR,
    ROLE_ADMIN,
    ROLE_SUPER_ADMIN
}
```

### 2. Events Module

#### Event Entity
```java
@Entity
@Table(name = "events")
public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    private EventType eventType; // CONVERSATORIO, TALLER, SEMINARIO, CONFERENCIA

    private LocalDateTime eventDate;
    private String eventTime; // e.g., "10:00 - 13:00"

    @Enumerated(EnumType.STRING)
    private LocationType locationType; // VIRTUAL, PRESENCIAL, HIBRIDO

    private String location;
    private String meetingUrl; // For virtual events

    private Integer capacity;
    private Integer registeredCount = 0;

    @Column(columnDefinition = "TEXT")
    private String pricing; // JSON or structured text

    // Pricing structure
    private BigDecimal priceMember = BigDecimal.ZERO;
    private BigDecimal priceNonMember;
    private BigDecimal priceStudent;
    private BigDecimal priceInternational;

    @Enumerated(EnumType.STRING)
    private EventStatus status; // DRAFT, PUBLISHED, CANCELLED, COMPLETED

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    private List<EventSpeaker> speakers;

    @OneToMany(mappedBy = "event")
    private List<EventRegistration> registrations;

    private String imageUrl;
    private Boolean featured = false;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}

enum EventType {
    CONVERSATORIO,
    TALLER,
    SEMINARIO,
    CONFERENCIA
}

enum LocationType {
    VIRTUAL,
    PRESENCIAL,
    HIBRIDO
}

enum EventStatus {
    DRAFT,
    PUBLISHED,
    CANCELLED,
    COMPLETED
}
```

#### EventSpeaker Entity
```java
@Entity
@Table(name = "event_speakers")
public class EventSpeaker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    private String name;
    private String title; // e.g., "Lic.", "Dr."
    private String bio;
    private String photoUrl;

    @Column(name = "display_order")
    private Integer order = 0;
}
```

#### EventRegistration Entity
```java
@Entity
@Table(name = "event_registrations")
public class EventRegistration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "event_id", nullable = false)
    private Event event;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user; // Nullable for guest registrations

    private String email;
    private String firstName;
    private String lastName;
    private String phone;

    @Enumerated(EnumType.STRING)
    private RegistrationType registrationType; // MEMBER, NON_MEMBER, STUDENT, INTERNATIONAL

    private BigDecimal amountPaid;

    @Enumerated(EnumType.STRING)
    private RegistrationStatus status; // PENDING, CONFIRMED, CANCELLED

    private String confirmationCode;

    @CreationTimestamp
    private LocalDateTime registeredAt;
}

enum RegistrationType {
    MEMBER,
    NON_MEMBER,
    STUDENT,
    INTERNATIONAL
}

enum RegistrationStatus {
    PENDING,
    CONFIRMED,
    CANCELLED,
    ATTENDED
}
```

### 3. Services Module

#### Service Entity
```java
@Entity
@Table(name = "services")
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String iconName; // e.g., "BookOpen", "FileText"

    @ElementCollection
    @CollectionTable(name = "service_details",
        joinColumns = @JoinColumn(name = "service_id"))
    @Column(name = "detail")
    private List<String> details;

    @Column(name = "display_order")
    private Integer order = 0;

    private Boolean active = true;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
```

### 4. Team Module

#### TeamMember Entity
```java
@Entity
@Table(name = "team_members")
public class TeamMember {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String title; // e.g., "Lic.", "Dr."
    private String position; // e.g., "Presidente", "Secretario"

    @ManyToOne
    @JoinColumn(name = "commission_id")
    private TeamCommission commission;

    @Enumerated(EnumType.STRING)
    private MemberRole role; // TITULAR, SUPLENTE

    @Column(columnDefinition = "TEXT")
    private String bio;

    private String photoUrl;
    private String email;
    private String linkedin;

    @Column(name = "display_order")
    private Integer order = 0;

    private Boolean active = true;
}

enum MemberRole {
    TITULAR,
    SUPLENTE
}
```

#### TeamCommission Entity
```java
@Entity
@Table(name = "team_commissions")
public class TeamCommission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String iconName;
    private String colorGradient;
    private String iconColor;

    @OneToMany(mappedBy = "commission")
    private List<TeamMember> members;

    @Column(name = "display_order")
    private Integer order = 0;

    private Boolean active = true;
}
```

### 5. Organization Info

#### Milestone Entity
```java
@Entity
@Table(name = "milestones")
public class Milestone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String year;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "display_order")
    private Integer order = 0;
}
```

#### Partnership Entity
```java
@Entity
@Table(name = "partnerships")
public class Partnership {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private PartnershipCategory category;

    private String organizationName;
    private String logoUrl;
    private String websiteUrl;

    @Column(name = "display_order")
    private Integer order = 0;

    private Boolean active = true;
}

enum PartnershipCategory {
    REGULATORY_AUTHORITY,  // Autoridades Regulatorias
    INTERNATIONAL_NETWORK, // Redes Internacionales
    UNIVERSITY,            // Universidades Asociadas
    RESEARCH_PARTNER       // Socios de Investigación
}
```

### 6. Contact & Newsletter

#### NewsletterSubscription Entity
```java
@Entity
@Table(name = "newsletter_subscriptions")
public class NewsletterSubscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    private String firstName;
    private String lastName;

    @Enumerated(EnumType.STRING)
    private SubscriptionStatus status; // ACTIVE, UNSUBSCRIBED

    @CreationTimestamp
    private LocalDateTime subscribedAt;

    private LocalDateTime unsubscribedAt;

    private String confirmationToken;
    private Boolean confirmed = false;
}

enum SubscriptionStatus {
    PENDING,
    ACTIVE,
    UNSUBSCRIBED
}
```

#### ContactMessage Entity
```java
@Entity
@Table(name = "contact_messages")
public class ContactMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(nullable = false)
    private String email;

    private String phone;
    private String subject;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String message;

    @Enumerated(EnumType.STRING)
    private MessageStatus status; // NEW, READ, RESPONDED, ARCHIVED

    @CreationTimestamp
    private LocalDateTime createdAt;

    private LocalDateTime respondedAt;
    private String responseNotes;
}

enum MessageStatus {
    NEW,
    READ,
    RESPONDED,
    ARCHIVED
}
```

---

## 7. Aula Virtual (LMS Module - Future)

### Course Entity
```java
@Entity
@Table(name = "courses")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(unique = true)
    private String slug;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(columnDefinition = "TEXT")
    private String objectives;

    @Column(columnDefinition = "TEXT")
    private String prerequisites;

    @ManyToOne
    @JoinColumn(name = "instructor_id")
    private User instructor;

    private String thumbnailUrl;
    private String previewVideoUrl;

    @Enumerated(EnumType.STRING)
    private CourseLevel level; // BEGINNER, INTERMEDIATE, ADVANCED

    @Enumerated(EnumType.STRING)
    private CourseStatus status; // DRAFT, PUBLISHED, ARCHIVED

    private Integer durationHours;
    private BigDecimal price;

    // Membership pricing
    private BigDecimal memberPrice;
    private BigDecimal regularPrice;

    private Integer maxStudents;
    private Integer enrolledCount = 0;

    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    @OrderBy("order ASC")
    private List<CourseModule> modules;

    @OneToMany(mappedBy = "course")
    private List<Enrollment> enrollments;

    private LocalDateTime startDate;
    private LocalDateTime endDate;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
}

enum CourseLevel {
    BEGINNER,
    INTERMEDIATE,
    ADVANCED,
    EXPERT
}

enum CourseStatus {
    DRAFT,
    PUBLISHED,
    ARCHIVED
}
```

### CourseModule Entity
```java
@Entity
@Table(name = "course_modules")
public class CourseModule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @OneToMany(mappedBy = "module", cascade = CascadeType.ALL)
    @OrderBy("order ASC")
    private List<Lesson> lessons;

    @Column(name = "display_order")
    private Integer order = 0;

    private Integer durationMinutes;
}
```

### Lesson Entity
```java
@Entity
@Table(name = "lessons")
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "module_id", nullable = false)
    private CourseModule module;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    @Enumerated(EnumType.STRING)
    private LessonType type; // VIDEO, TEXT, QUIZ, ASSIGNMENT, RESOURCE

    private String videoUrl;
    private Integer videoDuration; // seconds

    @Column(columnDefinition = "TEXT")
    private String resourceUrls; // JSON array

    @Column(name = "display_order")
    private Integer order = 0;

    private Boolean isFree = false; // Preview lesson
}

enum LessonType {
    VIDEO,
    TEXT,
    QUIZ,
    ASSIGNMENT,
    RESOURCE,
    LIVE_SESSION
}
```

### Enrollment Entity
```java
@Entity
@Table(name = "enrollments")
public class Enrollment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    private Course course;

    @Enumerated(EnumType.STRING)
    private EnrollmentStatus status; // ACTIVE, COMPLETED, DROPPED, EXPIRED

    private LocalDateTime enrolledAt;
    private LocalDateTime completedAt;
    private LocalDateTime expiresAt;

    private Integer progressPercentage = 0;

    @OneToMany(mappedBy = "enrollment")
    private List<StudentProgress> progress;

    @ManyToOne
    @JoinColumn(name = "payment_id")
    private Payment payment;
}

enum EnrollmentStatus {
    PENDING_PAYMENT,
    ACTIVE,
    COMPLETED,
    DROPPED,
    EXPIRED
}
```

### StudentProgress Entity
```java
@Entity
@Table(name = "student_progress")
public class StudentProgress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "enrollment_id", nullable = false)
    private Enrollment enrollment;

    @ManyToOne
    @JoinColumn(name = "lesson_id", nullable = false)
    private Lesson lesson;

    private Boolean completed = false;
    private Integer videoProgress; // seconds watched

    @CreationTimestamp
    private LocalDateTime startedAt;

    private LocalDateTime completedAt;

    @UpdateTimestamp
    private LocalDateTime lastAccessedAt;
}
```

### Assignment Entity
```java
@Entity
@Table(name = "assignments")
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "lesson_id")
    private Lesson lesson;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String instructions;

    private LocalDateTime dueDate;
    private Integer maxScore;

    @OneToMany(mappedBy = "assignment")
    private List<Submission> submissions;
}
```

### Submission Entity
```java
@Entity
@Table(name = "submissions")
public class Submission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "assignment_id", nullable = false)
    private Assignment assignment;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(columnDefinition = "TEXT")
    private String content;

    private String fileUrl;

    @Enumerated(EnumType.STRING)
    private SubmissionStatus status; // DRAFT, SUBMITTED, GRADED

    @CreationTimestamp
    private LocalDateTime submittedAt;

    private Integer score;

    @Column(columnDefinition = "TEXT")
    private String feedback;

    private LocalDateTime gradedAt;

    @ManyToOne
    @JoinColumn(name = "graded_by")
    private User gradedBy;
}

enum SubmissionStatus {
    DRAFT,
    SUBMITTED,
    GRADED,
    RETURNED
}
```

### Assessment Entity (Quiz)
```java
@Entity
@Table(name = "assessments")
public class Assessment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "lesson_id")
    private Lesson lesson;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String questions; // JSON structure

    private Integer timeLimit; // minutes
    private Integer passingScore;
    private Integer maxAttempts;

    @OneToMany(mappedBy = "assessment")
    private List<AssessmentAttempt> attempts;
}
```

### AssessmentAttempt Entity
```java
@Entity
@Table(name = "assessment_attempts")
public class AssessmentAttempt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "assessment_id", nullable = false)
    private Assessment assessment;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(columnDefinition = "TEXT")
    private String answers; // JSON

    private Integer score;
    private Boolean passed;

    @CreationTimestamp
    private LocalDateTime startedAt;

    private LocalDateTime completedAt;
    private Integer attemptNumber;
}
```

### Certificate Entity
```java
@Entity
@Table(name = "certificates")
public class Certificate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "enrollment_id", nullable = false)
    private Enrollment enrollment;

    @Column(unique = true, nullable = false)
    private String certificateNumber;

    private String certificateUrl;

    @CreationTimestamp
    private LocalDateTime issuedAt;

    private LocalDateTime expiresAt; // Optional, for renewals

    @Enumerated(EnumType.STRING)
    private CertificateStatus status; // ACTIVE, REVOKED, EXPIRED
}

enum CertificateStatus {
    ACTIVE,
    REVOKED,
    EXPIRED
}
```

### Payment Entity
```java
@Entity
@Table(name = "payments")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Enumerated(EnumType.STRING)
    private PaymentType type; // COURSE, EVENT, MEMBERSHIP

    // Polymorphic relationship
    private Long referenceId; // Course ID, Event ID, etc.
    private String referenceType; // "COURSE", "EVENT", "MEMBERSHIP"

    private BigDecimal amount;
    private String currency = "UYU";

    @Enumerated(EnumType.STRING)
    private PaymentMethod method; // CREDIT_CARD, BANK_TRANSFER, CASH, MERCADOPAGO

    @Enumerated(EnumType.STRING)
    private PaymentStatus status; // PENDING, COMPLETED, FAILED, REFUNDED

    private String transactionId;
    private String receiptUrl;

    @CreationTimestamp
    private LocalDateTime createdAt;

    private LocalDateTime completedAt;
}

enum PaymentType {
    COURSE,
    EVENT,
    MEMBERSHIP,
    DONATION
}

enum PaymentMethod {
    CREDIT_CARD,
    DEBIT_CARD,
    BANK_TRANSFER,
    CASH,
    MERCADOPAGO,
    STRIPE
}

enum PaymentStatus {
    PENDING,
    PROCESSING,
    COMPLETED,
    FAILED,
    REFUNDED,
    CANCELLED
}
```

---

## API Endpoints

### Base URL
```
https://api.supap.uy/api/v1
```

### Authentication Endpoints

#### POST /auth/register
Register a new user
```json
Request:
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "Juan",
  "lastName": "Pérez",
  "phone": "+598 99 123 456"
}

Response: 201 Created
{
  "id": 1,
  "email": "user@example.com",
  "firstName": "Juan",
  "lastName": "Pérez",
  "userType": "VISITOR",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### POST /auth/login
Authenticate user
```json
Request:
{
  "email": "user@example.com",
  "password": "SecurePass123!"
}

Response: 200 OK
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "type": "Bearer",
  "id": 1,
  "email": "user@example.com",
  "roles": ["ROLE_USER"]
}
```

#### POST /auth/refresh
Refresh JWT token
```json
Request:
{
  "refreshToken": "refresh_token_here"
}

Response: 200 OK
{
  "token": "new_access_token",
  "refreshToken": "new_refresh_token"
}
```

#### POST /auth/forgot-password
Request password reset
```json
Request:
{
  "email": "user@example.com"
}

Response: 200 OK
{
  "message": "Password reset email sent"
}
```

---

### Event Endpoints

#### GET /events
List all events (public)
```
Query Parameters:
- page: int (default: 0)
- size: int (default: 10)
- status: PUBLISHED | CANCELLED | COMPLETED
- type: CONVERSATORIO | TALLER | SEMINARIO | CONFERENCIA
- upcoming: boolean
- featured: boolean

Response: 200 OK
{
  "content": [
    {
      "id": 1,
      "title": "Conversatorio sobre Microdosis de Psilocibes",
      "description": "...",
      "eventType": "CONVERSATORIO",
      "eventDate": "2025-08-16T10:00:00",
      "eventTime": "10:00 - 13:00",
      "locationType": "VIRTUAL",
      "location": "Virtual",
      "capacity": 150,
      "registeredCount": 45,
      "priceMember": 0,
      "priceNonMember": 800,
      "priceStudent": 500,
      "speakers": [
        {
          "id": 1,
          "name": "Cecilia Morelli",
          "title": "Lic.",
          "photoUrl": "..."
        }
      ],
      "imageUrl": "...",
      "status": "PUBLISHED"
    }
  ],
  "totalElements": 50,
  "totalPages": 5,
  "number": 0
}
```

#### GET /events/{id}
Get single event
```
Response: 200 OK
{
  "id": 1,
  "title": "...",
  "description": "...",
  ...
}
```

#### POST /events (Admin only)
Create new event
```json
Request: (Requires ROLE_ADMIN)
{
  "title": "New Event",
  "description": "...",
  "eventType": "TALLER",
  "eventDate": "2025-12-01T14:00:00",
  "eventTime": "14:00 - 18:00",
  "locationType": "PRESENCIAL",
  "location": "Sala SUPAP",
  "capacity": 30,
  "priceMember": 0,
  "priceNonMember": 1200,
  "priceStudent": 600,
  "speakers": [
    {
      "name": "Fernando López",
      "title": "Dr.",
      "bio": "..."
    }
  ]
}

Response: 201 Created
```

#### PUT /events/{id} (Admin only)
Update event

#### DELETE /events/{id} (Admin only)
Delete event

---

### Event Registration Endpoints

#### POST /events/{id}/register
Register for an event
```json
Request:
{
  "firstName": "María",
  "lastName": "García",
  "email": "maria@example.com",
  "phone": "+598 99 234 567",
  "registrationType": "NON_MEMBER"
}

Response: 201 Created
{
  "id": 1,
  "confirmationCode": "EVT-20250816-A3F2",
  "event": { ... },
  "registrationType": "NON_MEMBER",
  "amountPaid": 800,
  "status": "PENDING"
}
```

#### GET /registrations/my
Get current user's registrations
```
Response: 200 OK
[
  {
    "id": 1,
    "event": { ... },
    "registrationType": "MEMBER",
    "status": "CONFIRMED",
    "registeredAt": "2025-07-01T10:30:00"
  }
]
```

#### GET /events/{id}/registrations (Admin only)
Get all registrations for an event

---

### Services Endpoints

#### GET /services
List all active services
```
Response: 200 OK
[
  {
    "id": 1,
    "title": "Formación Profesional",
    "description": "...",
    "iconName": "BookOpen",
    "details": [
      "Cursos teóricos y prácticos",
      "Certificación profesional"
    ],
    "order": 1
  }
]
```

#### GET /services/{id}
Get single service

#### POST /services (Admin only)
Create service

#### PUT /services/{id} (Admin only)
Update service

#### DELETE /services/{id} (Admin only)
Delete service

---

### Team Endpoints

#### GET /team/commissions
List all commissions
```
Response: 200 OK
[
  {
    "id": 1,
    "name": "Comisión Directiva",
    "description": "...",
    "iconName": "Users",
    "members": [
      {
        "id": 1,
        "firstName": "Juan",
        "lastName": "Pérez",
        "title": "Dr.",
        "position": "Presidente",
        "role": "TITULAR",
        "photoUrl": "..."
      }
    ]
  }
]
```

#### GET /team/members
List all team members

#### GET /team/members/{id}
Get single member

---

### Organization Info Endpoints

#### GET /organization/milestones
List milestones

#### GET /organization/partnerships
List partnerships

#### GET /organization/values
Get organization values

---

### Newsletter Endpoints

#### POST /newsletter/subscribe
Subscribe to newsletter
```json
Request:
{
  "email": "user@example.com",
  "firstName": "Ana",
  "lastName": "Rodríguez"
}

Response: 201 Created
{
  "message": "Subscription successful. Please check your email to confirm.",
  "email": "user@example.com"
}
```

#### GET /newsletter/confirm/{token}
Confirm subscription via email token

#### POST /newsletter/unsubscribe
Unsubscribe from newsletter

---

### Contact Endpoints

#### POST /contact
Submit contact message
```json
Request:
{
  "name": "Carlos Martínez",
  "email": "carlos@example.com",
  "phone": "+598 99 345 678",
  "subject": "Consulta sobre cursos",
  "message": "Me gustaría saber más sobre los cursos disponibles..."
}

Response: 201 Created
{
  "id": 1,
  "status": "NEW",
  "createdAt": "2025-11-24T15:30:00"
}
```

#### GET /contact/messages (Admin only)
List all contact messages

---

### Course Endpoints (Aula Virtual)

#### GET /courses
List all published courses
```
Query Parameters:
- page, size
- level: BEGINNER | INTERMEDIATE | ADVANCED
- instructor: long
- minPrice, maxPrice: decimal

Response: 200 OK
{
  "content": [
    {
      "id": 1,
      "title": "Introducción a Psicoterapias Asistidas",
      "slug": "introduccion-psicoterapias-asistidas",
      "description": "...",
      "instructor": {
        "id": 2,
        "firstName": "Fernando",
        "lastName": "López"
      },
      "thumbnailUrl": "...",
      "level": "BEGINNER",
      "durationHours": 40,
      "memberPrice": 5000,
      "regularPrice": 7500,
      "enrolledCount": 120,
      "rating": 4.8
    }
  ]
}
```

#### GET /courses/{slug}
Get course details

#### GET /courses/{id}/modules
Get course curriculum

#### POST /courses (Admin/Instructor only)
Create new course

#### PUT /courses/{id} (Admin/Instructor only)
Update course

---

### Enrollment Endpoints

#### POST /courses/{id}/enroll
Enroll in a course
```json
Request: (Authenticated)
{
  "paymentMethod": "CREDIT_CARD"
}

Response: 201 Created
{
  "id": 1,
  "course": { ... },
  "status": "PENDING_PAYMENT",
  "enrolledAt": "2025-11-24T16:00:00",
  "payment": {
    "id": 1,
    "amount": 5000,
    "status": "PENDING"
  }
}
```

#### GET /enrollments/my
Get current user's enrollments

#### GET /courses/{id}/progress
Get course progress for current user

#### POST /lessons/{id}/complete
Mark lesson as completed

---

### Assignment Endpoints

#### GET /assignments/{id}
Get assignment details

#### POST /assignments/{id}/submit
Submit assignment
```json
Request:
{
  "content": "My assignment submission...",
  "fileUrl": "https://..."
}

Response: 201 Created
```

#### GET /submissions/my
Get user's submissions

#### POST /submissions/{id}/grade (Instructor only)
Grade a submission

---

### Assessment Endpoints

#### GET /assessments/{id}
Get quiz/assessment

#### POST /assessments/{id}/attempt
Start assessment attempt

#### POST /assessments/{id}/submit
Submit assessment answers

---

### Certificate Endpoints

#### GET /certificates/my
Get user's certificates

#### GET /certificates/{certificateNumber}
Verify certificate (public)

---

### Payment Endpoints

#### POST /payments
Create payment
```json
Request:
{
  "type": "COURSE",
  "referenceId": 1,
  "amount": 5000,
  "method": "CREDIT_CARD"
}

Response: 201 Created
{
  "id": 1,
  "transactionId": "TXN-20251124-A3F2",
  "amount": 5000,
  "status": "PENDING",
  "checkoutUrl": "https://payment-gateway.com/checkout/..."
}
```

#### GET /payments/my
Get user's payment history

#### POST /payments/{id}/confirm
Confirm payment (webhook from payment provider)

---

## Security & Authentication

### JWT Authentication Flow

1. **User Registration/Login**
   - User provides credentials
   - Backend validates and generates JWT access token + refresh token
   - Access token expires in 1 hour, refresh token in 7 days

2. **Token Structure**
```json
{
  "sub": "user@example.com",
  "userId": 1,
  "roles": ["ROLE_USER", "ROLE_MEMBER"],
  "iat": 1700000000,
  "exp": 1700003600
}
```

3. **Authorization Header**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Security Configuration

#### application.yml
```yaml
jwt:
  secret: ${JWT_SECRET:your-secret-key-change-this}
  expiration: 3600000 # 1 hour in ms
  refresh-expiration: 604800000 # 7 days in ms

spring:
  security:
    cors:
      allowed-origins:
        - http://localhost:3000
        - https://supap.uy
      allowed-methods:
        - GET
        - POST
        - PUT
        - DELETE
        - OPTIONS
      allowed-headers:
        - Authorization
        - Content-Type
      allow-credentials: true
```

#### SecurityConfig.java
```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(auth -> auth
                // Public endpoints
                .requestMatchers("/api/v1/auth/**").permitAll()
                .requestMatchers("/api/v1/events/**").permitAll()
                .requestMatchers("/api/v1/services/**").permitAll()
                .requestMatchers("/api/v1/team/**").permitAll()
                .requestMatchers("/api/v1/organization/**").permitAll()
                .requestMatchers("/api/v1/newsletter/subscribe").permitAll()
                .requestMatchers("/api/v1/contact").permitAll()
                .requestMatchers("/api/v1/courses").permitAll()
                .requestMatchers("/api/v1/courses/{slug}").permitAll()
                .requestMatchers("/api/v1/certificates/{number}").permitAll()

                // Authenticated endpoints
                .requestMatchers("/api/v1/enrollments/**").authenticated()
                .requestMatchers("/api/v1/payments/my").authenticated()
                .requestMatchers("/api/v1/registrations/my").authenticated()

                // Admin endpoints
                .requestMatchers("/api/v1/admin/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.POST, "/api/v1/events").hasRole("ADMIN")
                .requestMatchers(HttpMethod.PUT, "/api/v1/events/**").hasRole("ADMIN")
                .requestMatchers(HttpMethod.DELETE, "/api/v1/events/**").hasRole("ADMIN")

                // Instructor endpoints
                .requestMatchers("/api/v1/courses/*/manage").hasAnyRole("INSTRUCTOR", "ADMIN")

                .anyRequest().authenticated()
            )
            .addFilterBefore(jwtAuthenticationFilter(),
                UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }
}
```

### Role-Based Access Control (RBAC)

| Role | Permissions |
|------|------------|
| **ROLE_USER** | View public content, register for events |
| **ROLE_MEMBER** | All USER + free event access, member pricing |
| **ROLE_STUDENT** | All MEMBER + course access, submit assignments |
| **ROLE_INSTRUCTOR** | All STUDENT + manage own courses, grade assignments |
| **ROLE_ADMIN** | All permissions, manage all content |

### Input Validation

Use Bean Validation annotations:
```java
public class EventRegistrationRequest {
    @NotBlank(message = "First name is required")
    @Size(min = 2, max = 50)
    private String firstName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @Pattern(regexp = "^\\+?[0-9]{8,15}$", message = "Invalid phone number")
    private String phone;
}
```

### Security Best Practices

1. **Password Policy**
   - Minimum 8 characters
   - At least 1 uppercase, 1 lowercase, 1 number, 1 special char
   - BCrypt with strength 12

2. **Rate Limiting**
   - Implement with Bucket4j or Spring Cloud Gateway
   - 100 requests/minute per IP
   - 20 login attempts/hour per email

3. **HTTPS Only**
   - Force HTTPS in production
   - HSTS headers enabled

4. **SQL Injection Prevention**
   - Use JPA/Hibernate parameterized queries
   - Never concatenate user input into SQL

5. **XSS Prevention**
   - Sanitize all user inputs
   - Set Content-Security-Policy headers

6. **CSRF Protection**
   - Disabled for stateless JWT API
   - Enable for any session-based flows

---

## Database Configuration

### application.yml (Development)
```yaml
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/supap_db
    username: ${DB_USERNAME:supap_user}
    password: ${DB_PASSWORD:secure_password}
    driver-class-name: org.postgresql.Driver

  jpa:
    hibernate:
      ddl-auto: validate # Use Flyway for migrations
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
        format_sql: true
        show_sql: false
        jdbc:
          lob:
            non_contextual_creation: true

  flyway:
    enabled: true
    baseline-on-migrate: true
    locations: classpath:db/migration

server:
  port: 8080

logging:
  level:
    org.springframework.security: DEBUG
    com.supap: DEBUG
```

### application-prod.yml (Production)
```yaml
spring:
  datasource:
    url: ${DATABASE_URL}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    hikari:
      maximum-pool-size: 10
      minimum-idle: 5
      connection-timeout: 30000

  jpa:
    hibernate:
      ddl-auto: validate
    properties:
      hibernate:
        show_sql: false

  flyway:
    enabled: true

server:
  port: ${PORT:8080}
  ssl:
    enabled: true

logging:
  level:
    com.supap: INFO
```

### Database Migration (Flyway)

#### V1__initial_schema.sql
```sql
-- Users and Roles
CREATE TABLE roles (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    user_type VARCHAR(20) NOT NULL,
    membership_start_date TIMESTAMP,
    membership_end_date TIMESTAMP,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_roles (
    user_id BIGINT REFERENCES users(id) ON DELETE CASCADE,
    role_id BIGINT REFERENCES roles(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, role_id)
);

-- Events
CREATE TABLE events (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    event_type VARCHAR(50) NOT NULL,
    event_date TIMESTAMP NOT NULL,
    event_time VARCHAR(50),
    location_type VARCHAR(20) NOT NULL,
    location VARCHAR(255),
    meeting_url VARCHAR(500),
    capacity INTEGER,
    registered_count INTEGER DEFAULT 0,
    pricing TEXT,
    price_member DECIMAL(10, 2) DEFAULT 0,
    price_non_member DECIMAL(10, 2),
    price_student DECIMAL(10, 2),
    price_international DECIMAL(10, 2),
    status VARCHAR(20) NOT NULL,
    image_url VARCHAR(500),
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_events_date ON events(event_date);
CREATE INDEX idx_events_status ON events(status);

-- Continue with other tables...
```

### Connection Pooling (HikariCP)

HikariCP is the default in Spring Boot. Configuration:
```yaml
spring:
  datasource:
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000
      pool-name: SupapHikariPool
```

### Database Indexes

Key indexes for performance:
```sql
-- Events
CREATE INDEX idx_events_date_status ON events(event_date, status);
CREATE INDEX idx_events_type ON events(event_type);

-- Users
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_type ON users(user_type);

-- Enrollments
CREATE INDEX idx_enrollments_user ON enrollments(user_id);
CREATE INDEX idx_enrollments_course ON enrollments(course_id);
CREATE INDEX idx_enrollments_status ON enrollments(status);

-- Student Progress
CREATE INDEX idx_progress_enrollment ON student_progress(enrollment_id);
CREATE INDEX idx_progress_lesson ON student_progress(lesson_id);
```

---

## Project Structure

```
supap-backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── supap/
│   │   │           ├── SupapApplication.java
│   │   │           │
│   │   │           ├── config/
│   │   │           │   ├── SecurityConfig.java
│   │   │           │   ├── JwtConfig.java
│   │   │           │   ├── CorsConfig.java
│   │   │           │   └── OpenApiConfig.java
│   │   │           │
│   │   │           ├── controller/
│   │   │           │   ├── AuthController.java
│   │   │           │   ├── EventController.java
│   │   │           │   ├── ServiceController.java
│   │   │           │   ├── TeamController.java
│   │   │           │   ├── ContactController.java
│   │   │           │   ├── NewsletterController.java
│   │   │           │   ├── CourseController.java
│   │   │           │   ├── EnrollmentController.java
│   │   │           │   ├── AssignmentController.java
│   │   │           │   └── PaymentController.java
│   │   │           │
│   │   │           ├── dto/
│   │   │           │   ├── request/
│   │   │           │   │   ├── LoginRequest.java
│   │   │           │   │   ├── RegisterRequest.java
│   │   │           │   │   ├── EventRequest.java
│   │   │           │   │   └── EnrollmentRequest.java
│   │   │           │   └── response/
│   │   │           │       ├── JwtResponse.java
│   │   │           │       ├── EventResponse.java
│   │   │           │       └── CourseResponse.java
│   │   │           │
│   │   │           ├── entity/
│   │   │           │   ├── User.java
│   │   │           │   ├── Role.java
│   │   │           │   ├── Event.java
│   │   │           │   ├── EventSpeaker.java
│   │   │           │   ├── EventRegistration.java
│   │   │           │   ├── Service.java
│   │   │           │   ├── TeamMember.java
│   │   │           │   ├── TeamCommission.java
│   │   │           │   ├── Course.java
│   │   │           │   ├── Enrollment.java
│   │   │           │   └── Payment.java
│   │   │           │
│   │   │           ├── repository/
│   │   │           │   ├── UserRepository.java
│   │   │           │   ├── RoleRepository.java
│   │   │           │   ├── EventRepository.java
│   │   │           │   ├── CourseRepository.java
│   │   │           │   └── EnrollmentRepository.java
│   │   │           │
│   │   │           ├── service/
│   │   │           │   ├── AuthService.java
│   │   │           │   ├── UserService.java
│   │   │           │   ├── EventService.java
│   │   │           │   ├── CourseService.java
│   │   │           │   ├── EnrollmentService.java
│   │   │           │   ├── PaymentService.java
│   │   │           │   └── EmailService.java
│   │   │           │
│   │   │           ├── security/
│   │   │           │   ├── JwtTokenProvider.java
│   │   │           │   ├── JwtAuthenticationFilter.java
│   │   │           │   └── UserDetailsServiceImpl.java
│   │   │           │
│   │   │           ├── exception/
│   │   │           │   ├── GlobalExceptionHandler.java
│   │   │           │   ├── ResourceNotFoundException.java
│   │   │           │   ├── BadRequestException.java
│   │   │           │   └── UnauthorizedException.java
│   │   │           │
│   │   │           └── util/
│   │   │               ├── DateUtils.java
│   │   │               └── ValidationUtils.java
│   │   │
│   │   └── resources/
│   │       ├── application.yml
│   │       ├── application-dev.yml
│   │       ├── application-prod.yml
│   │       └── db/
│   │           └── migration/
│   │               ├── V1__initial_schema.sql
│   │               ├── V2__add_courses_tables.sql
│   │               └── V3__add_payment_tables.sql
│   │
│   └── test/
│       └── java/
│           └── com/
│               └── supap/
│                   ├── controller/
│                   ├── service/
│                   └── repository/
│
├── .gitignore
├── pom.xml (or build.gradle)
├── README.md
└── docker-compose.yml
```

---

## Implementation Roadmap

### Phase 1: Core Backend Setup (Week 1-2)
- [ ] Initialize Spring Boot project
- [ ] Configure PostgreSQL connection
- [ ] Set up Flyway migrations
- [ ] Implement User & Role entities
- [ ] Implement JWT authentication
- [ ] Create basic CRUD for Users
- [ ] Set up Spring Security

### Phase 2: Events Module (Week 3)
- [ ] Event entity & repository
- [ ] EventSpeaker entity
- [ ] Event CRUD endpoints
- [ ] Event registration functionality
- [ ] Email notifications for registrations

### Phase 3: Content Management (Week 4)
- [ ] Services CRUD
- [ ] Team & Commissions CRUD
- [ ] Organization info (milestones, partnerships)
- [ ] Newsletter subscription
- [ ] Contact form

### Phase 4: Aula Virtual - Courses (Week 5-6)
- [ ] Course entity & module structure
- [ ] Lesson entity with different types
- [ ] Course CRUD endpoints
- [ ] Course enrollment system
- [ ] Student progress tracking

### Phase 5: Assessments & Assignments (Week 7)
- [ ] Assignment entity & submission
- [ ] Assessment/Quiz entity
- [ ] Grading system
- [ ] Assignment file upload (AWS S3)

### Phase 6: Payments Integration (Week 8)
- [ ] Payment entity
- [ ] MercadoPago integration
- [ ] Payment webhooks
- [ ] Receipt generation
- [ ] Refund handling

### Phase 7: Certificates (Week 9)
- [ ] Certificate generation
- [ ] PDF certificate creation
- [ ] Certificate verification endpoint
- [ ] Email delivery

### Phase 8: Testing & Documentation (Week 10)
- [ ] Unit tests (80%+ coverage)
- [ ] Integration tests
- [ ] API documentation (Swagger)
- [ ] Deployment scripts
- [ ] Performance testing

### Phase 9: Production Deployment (Week 11)
- [ ] Set up production database
- [ ] Configure CI/CD pipeline
- [ ] Deploy to production server
- [ ] Set up monitoring (Actuator + Prometheus)
- [ ] Configure backups

---

## Additional Considerations

### Email Service Integration
Use **SendGrid** or **AWS SES** for:
- Registration confirmations
- Event registration confirmations
- Password resets
- Course enrollment confirmations
- Certificate delivery
- Newsletter campaigns

### File Storage
Use **AWS S3** or **Cloudinary** for:
- Event images
- Speaker photos
- Team member photos
- Course thumbnails
- Assignment submissions
- Certificate PDFs
- Resource files (videos, documents)

### Caching Strategy
Implement **Redis** for:
- Course catalog caching
- Event listings
- User session management
- Rate limiting

### Monitoring & Logging
- **Spring Boot Actuator** for health checks
- **Prometheus + Grafana** for metrics
- **ELK Stack** (Elasticsearch, Logstash, Kibana) for logs
- **Sentry** for error tracking

### Performance Optimization
- Implement pagination for all list endpoints
- Use DTO projections to reduce data transfer
- Lazy loading for relationships
- Database query optimization
- CDN for static assets

### Backup Strategy
- Daily automated PostgreSQL backups
- Point-in-time recovery enabled
- File storage backups (S3 versioning)
- Disaster recovery plan

---

## Getting Started

### Prerequisites
```bash
- Java 17+
- Maven 3.8+
- PostgreSQL 15+
- Docker (optional)
```

### Local Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/supap/backend.git
cd backend
```

2. **Set up PostgreSQL**
```bash
# Using Docker
docker run --name supap-postgres \
  -e POSTGRES_DB=supap_db \
  -e POSTGRES_USER=supap_user \
  -e POSTGRES_PASSWORD=secure_password \
  -p 5432:5432 -d postgres:15
```

3. **Configure environment variables**
```bash
export DB_USERNAME=supap_user
export DB_PASSWORD=secure_password
export JWT_SECRET=your-super-secret-key-change-this-in-production
```

4. **Run the application**
```bash
mvn spring-boot:run
```

5. **Access Swagger UI**
```
http://localhost:8080/swagger-ui.html
```

---

## Conclusion

This guide provides a comprehensive blueprint for the SUPAP backend architecture. The design is scalable, secure, and ready to support both the current organizational website and the future Aula Virtual LMS platform.

**Key Strengths:**
- Modular, extensible architecture
- Comprehensive security with JWT + Spring Security
- RESTful API design with clear separation of concerns
- Database schema optimized for relational data
- Clear roadmap for implementation

**Next Steps:**
1. Review and approve this architecture
2. Set up the development environment
3. Begin Phase 1 implementation
4. Iterate based on feedback

For questions or clarifications, contact the development team.

---

**Document Version:** 1.0
**Last Updated:** 2025-11-24
**Author:** Claude Code Assistant
