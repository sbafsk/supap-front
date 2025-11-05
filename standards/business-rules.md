# Business Rules & Domain Logic

> **AI Context**: This is the single source of truth for business rules.
> For current status: see `../docs/status/progress.yaml`
> For system overview: see `../docs/architecture/overview.md`
> For organizational context: see `../assets/docs/` (CONFIDENTIAL)

## Business Rules Overview

SUPAP Website implements specific business rules to ensure data integrity, privacy protection, accessibility, and compliance with organizational requirements for a public-facing institutional website of a healthcare-related non-profit organization.

## Core Business Rules

### Content Privacy & Confidentiality

#### Confidential Information Protection
- **Organizational Documents**: Files in `assets/docs/` are STRICTLY CONFIDENTIAL and must NEVER be exposed publicly
- **Member Information**: Personal data from `assets/docs/socios.md` (names, IDs, demographics) is PRIVATE
- **Board Member Details**: Full names and ID numbers from `directiva.md` are INTERNAL ONLY
- **Commission Member Info**: Personal contact details and member listings are CONFIDENTIAL
- **Public-Facing Content**: Only approved, anonymized, aggregate information for public display

#### Approved Public Information
- **Mission & Values**: General organizational objectives and mission (from estatutos/dossier)
- **Activities**: Types of activities offered (study groups, symposiums, workshops)
- **Membership Types**: General categories and benefits (NOT member lists or personal data)
- **Contact Information**: Official organizational emails only (supap.secretaria@gmail.com, supap.uy, @supap.uy)
- **General Statistics**: Anonymized, aggregate data only (e.g., "interdisciplinary organization")

### User Management (Member Portal - Future Phase)

#### Member Registration
- **Professional Validation**: Must verify professional credentials as per estatutos Article 6
- **Age Requirement**: Must be 18+ years old (legal adult in Uruguay)
- **Email Validation**: Must be unique and verified
- **Professional Background**: Requirement for university studies in social/health areas OR recognized trajectory

#### Member Authentication
- **Session Duration**: 24 hours for regular members, 7 days for "remember me"
- **Failed Login Attempts**: Account locked after 5 failed attempts for 30 minutes
- **Password Reset**: Token expires after 1 hour
- **Role-Based Access**: Different access levels for members, board, and commission members

### Data Validation Rules

#### Input Validation
- **Contact Forms**:
  - Names: 2-100 characters
  - Email: Valid email format
  - Subject: 5-200 characters
  - Message: 10-2000 characters
  - Phone (optional): Valid Uruguayan phone format (+598)
- **Event Registration**:
  - Professional ID (Cédula): Valid Uruguayan ID format
  - Professional credentials: Required documents/certifications
- **Newsletter Subscription**:
  - Email: Valid format, unique in database
  - Preferences: Optional interest categories

#### Data Sanitization
- **HTML Content**: Strip all HTML tags from user input (forms, comments)
- **File Uploads**:
  - Allowed types: PDF, DOCX, JPG, PNG only
  - Maximum size: 5MB per file
  - Virus scanning required
- **SQL Injection**: Use parameterized queries only (enforced by ORM)
- **XSS Prevention**: Encode all user input before rendering

### Content Management Rules

#### Public Content Publication
- **Content Review**: All public content must be reviewed by Communication Commission
- **Scientific Accuracy**: Educational content must be evidence-based and reviewed
- **Language**: Primary language Spanish (Uruguayan), prepared for future English translation
- **Accessibility**: All content must meet WCAG 2.1 AA standards
- **Image Alt Text**: Required for all images
- **PDF Accessibility**: Documents must be tagged and accessible

#### Event & Activity Publication
- **Event Information**: Must include date, time, location, description, target audience
- **Registration Requirements**: Clear indication if registration required
- **Capacity Limits**: If applicable, must be specified
- **Commission Ownership**: Each event linked to responsible commission
- **Member-Only Events**: Clearly marked if restricted to members

### Business Logic Rules

#### Membership Application Rules
- **Application Process**: Online form → Communication Commission review → Board approval
- **Member Categories** (per estatutos Article 4):
  - Founding members: Original founders + those who joined within 30 days
  - Active members: 1+ year membership with regular obligations fulfilled
  - Honorary members: Designated by General Assembly for merits/services
  - Subscriber members: Admitted but haven't yet met active member requirements
- **Membership Benefits**: Access by category as defined in estatutos Article 7
- **Annual Fee**: Set by Executive Board (Article 3a), payment required for active status
- **Member Rights**: Vary by category (voting rights, service access, etc.)

#### Event Registration Rules
- **Registration Workflow**:
  1. Browse event → Check eligibility → Register → Confirmation email
  2. For paid events: Registration → Payment → Confirmation
- **Capacity Management**: First-come-first-served until capacity reached
- **Waitlist**: Automatically enabled when event reaches capacity
- **Cancellation Policy**: Defined per event, typically 48-72 hours notice
- **Member Priority**: Members may get priority registration for certain events

#### Content Publication Workflow
- **Draft → Commission Review → Communication Commission Approval → Published**
- **Urgent Updates**: Communication Commission can publish directly with post-review
- **Content Archival**: Events automatically archived 30 days after occurrence
- **Content Updates**: All updates require same approval process

## Domain-Specific Rules

### Healthcare & Psychotherapy Context Rules

#### Ethical & Professional Standards
- **Evidence-Based Content**: All clinical/therapeutic information must be scientifically supported
- **Harm Reduction Focus**: Content must prioritize safety and risk reduction
- **Non-Prescriptive**: Website cannot provide medical advice or prescribe treatments
- **Professional Disclaimer**: Clear disclaimers that information is educational, not medical advice
- **Age-Appropriate Content**: Some content may require age verification (18+)
- **Trigger Warnings**: Appropriate warnings for sensitive mental health topics
- **Crisis Resources**: Always provide mental health crisis resources and hotlines

#### Regulatory Compliance
- **Uruguay Health Regulations**: Comply with MSP (Ministry of Public Health) guidelines
- **Professional Standards**: Align with professional psychology/medical associations
- **Substance Regulations**: Respect Uruguay's regulations on controlled substances
- **Educational Purpose**: Clear positioning as educational/professional organization, not treatment provider

### Commission-Based Content Management

#### Commission Responsibilities
```typescript
interface CommissionContent {
  commission: 'academic' | 'communication' | 'events' | 'harm_reduction' | 'legal_ethics' | 'publications' | 'research';
  contentTypes: string[];
  approvalRequired: boolean;
  publishingRights: 'full' | 'review_only' | 'suggest_only';
}

const commissionRules = {
  'communication': {
    contentTypes: ['news', 'social_media', 'press_releases'],
    approvalRequired: false, // Can publish directly
    publishingRights: 'full'
  },
  'academic': {
    contentTypes: ['courses', 'workshops', 'study_groups', 'scientific_activities'],
    approvalRequired: true, // Requires communication commission approval
    publishingRights: 'suggest_only'
  },
  'events': {
    contentTypes: ['events', 'conferences', 'symposiums'],
    approvalRequired: true,
    publishingRights: 'suggest_only'
  },
  'publications': {
    contentTypes: ['research', 'articles', 'publications'],
    approvalRequired: true,
    publishingRights: 'review_only'
  }
};
```

#### Validation Logic
```typescript
const validateBusinessProcess = (process: BusinessProcess): ValidationResult => {
  const errors: string[] = [];
  
  // Check required fields
  const required = businessRules.requiredFields[process.step] || [];
  required.forEach(field => {
    if (!process[field]) {
      errors.push(`${field} is required for ${process.step} step`);
    }
  });
  
  // Check valid transitions
  const currentStep = process.step;
  const allowedTransitions = businessRules.transitions[currentStep] || [];
  if (process.nextStep && !allowedTransitions.includes(process.nextStep)) {
    errors.push(`Invalid transition from ${currentStep} to ${process.nextStep}`);
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
```

### [Domain 2] Rules

#### Pricing Rules
```typescript
interface PricingRule {
  basePrice: number;
  discountPercentage: number;
  minimumQuantity: number;
  maximumDiscount: number;
}

const calculatePrice = (rule: PricingRule, quantity: number): number => {
  let finalPrice = rule.basePrice * quantity;
  
  // Apply quantity discount
  if (quantity >= rule.minimumQuantity) {
    const discount = (rule.discountPercentage / 100) * finalPrice;
    const maxDiscount = (rule.maximumDiscount / 100) * finalPrice;
    finalPrice -= Math.min(discount, maxDiscount);
  }
  
  return Math.max(finalPrice, 0); // Ensure non-negative price
};
```

## Compliance Rules

### Data Privacy

#### Uruguay Data Protection Law (Ley 18.331)
- **Personal Data Definition**: Any information relating to identified or identifiable individuals
- **Data Retention**: Personal data retained only as long as necessary for stated purpose
- **Right to Erasure**: Users can request complete data deletion (Article 13)
- **Right to Access**: Users can request access to their personal data (Article 12)
- **Data Portability**: Users can request their data in structured format
- **Consent Management**: Explicit, informed consent required for data processing
- **Purpose Limitation**: Data used only for stated, legitimate purposes
- **Data Minimization**: Collect only data necessary for stated purposes

#### GDPR Compliance (for international visitors)
- **Territorial Scope**: Applied when processing data of EU residents
- **Legal Basis**: Legitimate interest for organizational activities, consent for marketing
- **Privacy Policy**: Clear, accessible privacy policy in Spanish (and English if available)
- **Cookie Consent**: Required for non-essential cookies
- **Data Transfer**: Appropriate safeguards if data transferred outside Uruguay/EU

#### Data Security
- **Encryption**: All sensitive data (passwords, personal info) encrypted at rest and in transit
- **Access Logging**: All admin/member data access logged with user, timestamp, action
- **Audit Trail**: Complete audit trail for all data modifications
- **Data Classification**:
  - Public: Website content, published events
  - Confidential: Member information, applications
  - Restricted: Financial data, board communications
  - Strictly Confidential: Medical/health data (if any collected)

### Regulatory Compliance

#### Accessibility Standards
- **WCAG 2.1 Level AA**: Website must meet international accessibility standards
- **Uruguay Accessibility Law**: Comply with national accessibility requirements
- **Screen Reader Compatibility**: All content accessible via screen readers
- **Keyboard Navigation**: Full functionality available via keyboard
- **Color Contrast**: Minimum 4.5:1 ratio for normal text, 3:1 for large text
- **Alternative Text**: All images, charts, and media with descriptive alt text

#### Healthcare Communication Standards
- **MSP Guidelines**: Follow Ministry of Public Health communication guidelines
- **Professional Ethics**: Align with psychology and medical ethics codes
- **Informed Consent**: Clear language about services and limitations
- **Disclaimers**: Appropriate disclaimers for educational vs. clinical content

#### Legal Requirements
- **Data Localization**: Member data stored in Uruguay or approved jurisdictions
- **Reporting Requirements**: Annual reports as per estatutos requirements
- **Incident Response**: Immediate notification for data breaches (per Ley 18.331)
- **Terms of Service**: Clear ToS and Privacy Policy in Spanish
- **Intellectual Property**: Proper attribution and copyright notices

## Workflow Rules

### Approval Workflows

#### Multi-Level Approval
```typescript
interface ApprovalWorkflow {
  levels: ApprovalLevel[];
  currentLevel: number;
  status: 'pending' | 'approved' | 'rejected';
}

interface ApprovalLevel {
  level: number;
  approverRole: string;
  required: boolean;
  autoApprove: boolean;
}

const processApproval = (workflow: ApprovalWorkflow, decision: 'approve' | 'reject'): ApprovalWorkflow => {
  if (decision === 'reject') {
    return { ...workflow, status: 'rejected' };
  }
  
  const nextLevel = workflow.currentLevel + 1;
  if (nextLevel >= workflow.levels.length) {
    return { ...workflow, status: 'approved' };
  }
  
  return { ...workflow, currentLevel: nextLevel };
};
```

### Business Process Automation

#### Trigger Rules
- **Time-based**: Automatic actions at specific times
- **Event-based**: Actions triggered by specific events
- **Condition-based**: Actions when conditions are met

#### Action Rules
- **Notifications**: Automatic email/SMS notifications
- **Status Updates**: Automatic status changes
- **Data Processing**: Automatic data transformations

## Exception Handling

### Business Exceptions

#### Custom Exception Types
```typescript
class BusinessRuleViolation extends Error {
  constructor(
    message: string,
    public rule: string,
    public context: Record<string, any>
  ) {
    super(message);
    this.name = 'BusinessRuleViolation';
  }
}

class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public value: any
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}
```

#### Exception Handling Strategy
```typescript
const handleBusinessException = (error: Error): void => {
  if (error instanceof BusinessRuleViolation) {
    // Log business rule violation
    logger.warn('Business rule violated', {
      rule: error.rule,
      context: error.context
    });
    
    // Notify relevant stakeholders
    notifyStakeholders(error);
  } else if (error instanceof ValidationError) {
    // Handle validation errors
    logger.error('Validation failed', {
      field: error.field,
      value: error.value
    });
  } else {
    // Handle unexpected errors
    logger.error('Unexpected error', { error: error.message });
  }
};
```

## Rule Enforcement

### Implementation Methods

#### Database Constraints
```sql
-- Example: Ensure positive prices
ALTER TABLE products ADD CONSTRAINT positive_price CHECK (price > 0);

-- Example: Ensure unique emails
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);

-- Example: Ensure valid status transitions
ALTER TABLE orders ADD CONSTRAINT valid_status_transition 
CHECK (status IN ('pending', 'processing', 'shipped', 'delivered'));
```

#### Application-Level Validation
```typescript
const validateBusinessRules = (data: any): ValidationResult => {
  const errors: string[] = [];
  
  // Apply business rules
  if (data.price && data.price <= 0) {
    errors.push('Price must be positive');
  }
  
  if (data.email && !isValidEmail(data.email)) {
    errors.push('Invalid email format');
  }
  
  // Apply domain-specific rules
  if (data.type === 'premium' && data.price < 100) {
    errors.push('Premium items must cost at least $100');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
```

### Monitoring & Auditing

#### Rule Compliance Monitoring
- **Real-time Validation**: Validate rules on every operation
- **Compliance Reports**: Regular reports on rule compliance
- **Exception Tracking**: Track and analyze rule violations
- **Performance Impact**: Monitor rule enforcement performance

#### Audit Trail
- **Rule Changes**: Track all business rule modifications
- **Violation History**: Maintain history of rule violations
- **Compliance History**: Track compliance over time
- **User Actions**: Log all user actions for audit purposes

## Related Documentation

- [Project Overview](../docs/index.md)
- [System Architecture](../docs/architecture/overview.md)
- [Current Status](../docs/status/progress.yaml)
- [Coding Standards](coding.md)
- [Architectural Patterns](patterns.md)