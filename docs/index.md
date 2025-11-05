# SUPAP Website - Project Overview

> **AI Context**: This is the single source of truth for project overview.
> For current status: see `docs/status/progress.yaml`
> For implementation details: see `docs/architecture/overview.md`
> For organizational information: see `assets/docs/` (CONFIDENTIAL - not for public display)

## Project Overview

SUPAP Website is a public-facing institutional website for the Sociedad Uruguaya de Psicoterapias Asistidas por Psicodélicos y Enteógenos (Uruguayan Society of Psychedelic and Entheogen-Assisted Psychotherapies), built with modern web technologies and following AI-friendly development architecture principles.

### Mission Statement
To create an accessible, informative, and engaging online platform that promotes SUPAP's mission, connects with the public, facilitates participation, and destigmatizes psychedelic-assisted psychotherapy through education and community building.

### Target Audience
- **General Public**: Individuals interested in learning about psychedelic-assisted psychotherapy
- **Prospective Members**: Professionals considering joining SUPAP
- **Current Members**: Accessing information about activities and events
- **Researchers & Academics**: Seeking evidence-based information
- **Mental Health Professionals**: Looking for training and networking opportunities
- **Media & Journalists**: Gathering information about SUPAP's work

## Quick Start

1. **Setup**: See `docs/guides/setup.md` for environment setup
2. **Status**: Check `docs/status/progress.yaml` for current progress
3. **Architecture**: Review `docs/architecture/overview.md` for technical details
4. **Standards**: Follow `standards/coding.md` for development guidelines

## Tech Stack (Proposed)

- **Frontend**: Next.js 14+ with App Router + TypeScript
- **Styling**: TailwindCSS with responsive design
- **Backend**: Supabase (PostgreSQL + Auth + Storage) or Firebase
- **API**: REST API / Next.js API Routes
- **Database**: PostgreSQL (via Supabase) or Firestore
- **Authentication**: Supabase Auth or Firebase Auth (for member area)
- **Deployment**: Vercel
- **CMS**: Sanity.io or Contentful (for blog/events)
- **Email**: SendGrid or Resend
- **Analytics**: Google Analytics / Vercel Analytics
- **Testing**: Vitest + React Testing Library + Playwright
- **Monitoring**: Vercel Analytics + Sentry

## Project Structure

```
supap/
├── .ai/                    # AI-specific configuration
│   ├── context.yaml       # Master context file
│   ├── mcp-config.json    # MCP server configuration
│   └── agent-instructions.md # AI behavior guidelines
├── assets/                 # Organization documentation (CONFIDENTIAL)
│   └── docs/              # SUPAP organizational documents
│       ├── dossier.md     # Organization objectives & activities
│       ├── socios.md      # Member demographics & analysis
│       ├── estatutos.md   # Bylaws & legal structure
│       ├── presentacion.md # Institutional presentation
│       ├── directiva.md   # Board & fiscal commission
│       └── comisiones.md  # Working commissions
├── docs/                   # Project documentation
│   ├── index.md           # This file - single entry point
│   ├── status/            # Current state only
│   │   ├── progress.yaml  # Machine-readable status
│   │   └── priorities.md  # Current priorities only
│   ├── architecture/      # Technical implementation
│   │   ├── overview.md    # System architecture
│   │   ├── database.md    # Data model
│   │   └── api.md         # API specifications
│   └── guides/            # How-to documentation
│       ├── setup.md       # Environment setup
│       └── deployment.md  # Deployment processes
├── standards/              # Immutable standards
│   ├── coding.md          # Code conventions
│   ├── patterns.md        # Architectural patterns
│   └── business-rules.md  # Domain logic
├── app/                   # Next.js App Router pages
├── components/            # React components
├── lib/                   # Utilities and configurations
└── public/               # Static assets
```

## Current Status

- **Phase**: Initial Planning - Documentation Setup
- **Completion**: 5%
- **Last Updated**: 2025-11-03
- **Next Priority**: Define website architecture and features

### Recent Achievements
- ✅ Documented SUPAP organization structure and mission
- ✅ Analyzed member demographics and professional composition
- ✅ Identified target audiences and website objectives
- ✅ Updated boilerplate documentation with SUPAP context

### Current Focus
- 🔄 Finalizing technical stack selection
- 🔄 Defining website features and user flows
- 🔄 Planning information architecture
- 🔄 Establishing business rules and content requirements

## Key Features

### Core Features (Phase 1 - MVP)
- **Home/About Page**: Organization mission, vision, history, and impact
- **Activities Section**: Information about study groups, clinical symposiums, workshops, and events
- **Membership Information**: How to join, benefits, and member categories
- **Contact Page**: Multiple contact points for different commissions and purposes
- **Responsive Design**: Mobile-first, accessible design for all devices

### Planned Features (Phase 2)
- **Events Calendar**: Dynamic calendar with upcoming activities and registration
- **Blog/News Section**: Updates, announcements, and educational content
- **Resources Library**: Publications, research papers, and educational materials
- **Member Portal**: Protected area for members to access exclusive content
- **Newsletter Subscription**: Email list management for updates

### Future Features (Phase 3+)
- **Event Registration System**: Online registration and payment for courses/events
- **Member Directory**: Searchable directory of professionals (privacy-controlled)
- **Discussion Forum**: Community space for members to interact
- **Multilingual Support**: English version for international reach
- **Integration with External Platforms**: Calendar sync, social media feeds

## Architecture Highlights

### Design Principles
- **Accessibility First**: WCAG 2.1 AA compliance for inclusive access
- **Information Clarity**: Clear communication of complex topics for diverse audiences
- **Privacy by Design**: Sensitive organizational data never exposed publicly
- **Progressive Disclosure**: Information layers from high-level to implementation details
- **Single Source of Truth**: Each piece of information exists in exactly one location
- **AI-First Design**: Structure optimized for AI agent consumption
- **Machine-Readable Data**: Status and progress in structured formats

### Key Architectural Decisions
1. **Separation of Public/Private Content**: Organizational documents in `assets/docs/` are confidential and never exposed in the public website
2. **Headless CMS for Dynamic Content**: Events, blog posts, and news managed through CMS for non-technical editors
3. **Static Generation with ISR**: Use Next.js ISR for performance while keeping content fresh
4. **Multilingual-Ready Architecture**: Structure prepared for future i18n implementation
5. **Privacy-First Member Features**: Member portal separated from public site with proper authentication

### Technology Choices
- **Next.js**: Server-side rendering, static generation, and excellent SEO capabilities
- **TailwindCSS**: Rapid development with consistent, accessible design system
- **Supabase/Firebase**: Complete backend solution with auth, database, and storage
- **Headless CMS**: Content management for non-technical team members
- **Vercel**: Optimal Next.js deployment with edge network performance

## Development Workflow

### Getting Started
1. **Clone Repository**: `git clone [repository-url]`
2. **Install Dependencies**: `yarn install`
3. **Environment Setup**: Follow `docs/guides/setup.md`
4. **Start Development**: `yarn dev`

### Development Standards
- **Code Style**: Follow `standards/coding.md`
- **Testing**: Maintain [target]% test coverage
- **Documentation**: Update docs when making changes
- **Code Review**: All changes require review

### Available Scripts
```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn test         # Run tests
yarn lint         # Code linting
yarn type-check   # TypeScript checking
```

## AI Development Assistance

### MCP Integration
This project uses Model Context Protocol (MCP) for enhanced AI development assistance:

- **Documentation Server**: Access to all project documentation
- **Standards Server**: Access to coding standards and patterns
- **Context Loading**: Automatic context injection for AI agents

### AI Context Files
- **Master Context**: `.ai/context.yaml` - Project metadata and status
- **Agent Instructions**: `.ai/agent-instructions.md` - AI behavior guidelines
- **MCP Configuration**: `.ai/mcp-config.json` - Server setup

### AI-Friendly Features
- **Single Source of Truth**: No duplicate information across files
- **Machine-Readable Status**: YAML-based progress tracking
- **Context Injection**: AI instructions embedded in relevant sections
- **Progressive Disclosure**: Information organized by detail level

## Performance & Quality

### Performance Targets
- **Load Time**: [Target load time]
- **Response Time**: [Target response time]
- **Uptime**: [Target uptime percentage]
- **Concurrent Users**: [Target concurrent users]

### Quality Metrics
- **Test Coverage**: [Target coverage percentage]
- **Code Quality**: [Quality metrics]
- **Security**: [Security standards]
- **Accessibility**: [Accessibility standards]

## Security Considerations

### Authentication & Authorization
- **[Auth Method]**: [Description]
- **Role-Based Access**: [RBAC implementation]
- **Session Management**: [Session handling]

### Data Protection
- **Input Validation**: [Validation strategy]
- **Data Encryption**: [Encryption approach]
- **Secure Communication**: [Security measures]

### Compliance
- **[Compliance Standard 1]**: [Implementation]
- **[Compliance Standard 2]**: [Implementation]

## Deployment & Infrastructure

### Environments
- **Development**: [Dev environment setup]
- **Staging**: [Staging environment setup]
- **Production**: [Production environment setup]

### Deployment Strategy
- **CI/CD Pipeline**: [Pipeline description]
- **Rollback Strategy**: [Rollback approach]
- **Monitoring**: [Monitoring setup]

### Infrastructure
- **Hosting**: [Hosting platform]
- **CDN**: [CDN setup]
- **Database**: [Database hosting]
- **Storage**: [Storage solution]

## Monitoring & Observability

### Application Monitoring
- **Performance Metrics**: [Performance monitoring]
- **Error Tracking**: [Error tracking setup]
- **User Analytics**: [Analytics implementation]

### Infrastructure Monitoring
- **System Metrics**: [System monitoring]
- **Database Monitoring**: [Database monitoring]
- **API Monitoring**: [API monitoring]

### Alerting
- **Critical Alerts**: [Critical alerting setup]
- **Performance Alerts**: [Performance alerting]
- **Security Alerts**: [Security alerting]

## Business Context

### SUPAP Organization
- **Full Name**: Sociedad Uruguaya de Psicoterapias Asistidas por Psicodélicos y Enteógenos
- **Approval**: Ministry of Education and Culture (MEC) & Ministry of Public Health (MSP)
- **Founded**: February 14, 2023
- **Members**: ~76 members (63% female, primarily psychologists aged 41-45)
- **Location**: Primarily Montevideo, Uruguay
- **Approach**: Interdisciplinary (Psychology, Medicine, Social Work, Law, Nursing, etc.)

### Stakeholders
- **Executive Board (Comisión Directiva)**: Strategic direction and overall management
- **Communication Commission**: Internal/external communications, social media, PR
- **Academic Commission**: Training programs, scientific activities, knowledge systematization
- **Harm Reduction & Safety Commission**: Safe practices, risk reduction
- **Legal, Ethics & Best Practices Commission**: Regulatory compliance, ethical guidelines
- **Events Commission**: Event organization and logistics
- **Publications Commission**: Research publications, library development
- **Members**: Professionals who will use the website for information and participation
- **General Public**: Primary target for education and engagement

### Success Metrics
- **Public Engagement**: Website traffic, social media reach, newsletter subscriptions
- **Member Growth**: New membership applications and conversions
- **Event Participation**: Registration and attendance for activities
- **Information Access**: Resource downloads, publication views
- **SEO Performance**: Search rankings for relevant psychedelic therapy keywords

### Constraints
- **Timeline**: Iterative development - start simple, iterate based on feedback
- **Budget**: Limited budget typical of non-profit organizations
- **Resources**: Volunteer-driven with potential external development support
- **Content**: Must balance scientific rigor with accessibility for general public
- **Privacy**: Strict separation of confidential organizational data from public content
- **Technical**: Must be maintainable by non-technical team members (hence CMS)

## Related Documentation

### Core Documentation
- [Current Status](status/progress.yaml) - Machine-readable project status
- [System Architecture](architecture/overview.md) - Technical architecture details
- [Setup Guide](guides/setup.md) - Environment setup instructions
- [Coding Standards](../standards/coding.md) - Development guidelines

### Additional Resources
- [API Documentation](architecture/api.md) - API specifications
- [Database Schema](architecture/database.md) - Data model details
- [Deployment Guide](guides/deployment.md) - Deployment instructions
- [Business Rules](../standards/business-rules.md) - Domain logic

## Getting Help

### For Developers
- Start with this file for project overview
- Check status files for current progress
- Refer to specific guides for implementation details
- Follow coding standards for development

### For AI Assistants
- Load `.ai/context.yaml` first for project context
- Check `docs/status/progress.yaml` for current status
- Refer to `standards/coding.md` for code generation
- Use context injection patterns for consistency

### For Stakeholders
- Review this overview for project understanding
- Check status files for progress updates
- Refer to business context for project goals
- Contact development team for specific questions

## Contributing

### Development Process
1. **Fork Repository**: Create your own copy
2. **Create Branch**: Use feature branch naming
3. **Follow Standards**: Adhere to coding standards
4. **Write Tests**: Maintain test coverage
5. **Update Documentation**: Keep docs current
6. **Submit PR**: Request code review

### Documentation Updates
- **Single Source of Truth**: Update information in one place only
- **Context Injection**: Add AI instructions where relevant
- **Machine-Readable**: Use structured formats for status data
- **Progressive Disclosure**: Organize by detail level

---

**This documentation follows AI-friendly architecture principles with single source of truth, machine-readable data, and context injection patterns for optimal AI development assistance.**