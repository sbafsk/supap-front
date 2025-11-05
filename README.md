# SUPAP - Institutional Website

Public-facing website for SUPAP (Sociedad Uruguaya de Psicoterapias Asistidas por Psicodélicos y Enteógenos) - Uruguayan Society of Psychedelic and Entheogen-Assisted Psychotherapies.

## Development & Getting Started

**For complete project development information, start with `docs/index.md`**

This root README provides quick setup instructions. For comprehensive development information including:
- Current project status and progress
- Development standards and guidelines
- Business requirements and roadmap
- MCP integration setup
- Technical implementation details

**→ Go to `docs/index.md` for the complete picture**

## About SUPAP

SUPAP is an interdisciplinary civil association approved by the Ministry of Education and Culture (MEC) and the Ministry of Public Health (MSP) in Uruguay, dedicated to research, training, and dissemination in psychedelic-assisted psychotherapies.

### Mission
To systematize psychotherapeutic interventions focused on integrating experiences that people have with psychedelics and entheogens into their daily lives, from a perspective of human rights, public health, and harm reduction.

### Key Objectives
- Unite professionals, facilitators, and guides interested in psychedelic-assisted psychotherapy
- Promote scientific knowledge and best practices
- Provide training and capacity building
- Deconstruct social stigma around psychedelic use
- Generate inputs for public mental health policy development
- Protect life and health through harm reduction strategies

## Tech Stack (To be defined)

- **Frontend**: Next.js + TypeScript
- **Styling**: TailwindCSS
- **Backend**: Supabase / Firebase
- **API**: REST
- **State Management**: React Query + Zustand
- **Forms**: React Hook Form + Zod
- **Testing**: Vitest + Playwright
- **Package Manager**: yarn
- **Deployment**: Vercel

## Quick Start

### Prerequisites
- Node.js 18+ (or your runtime version)
- [Yarn | npm | pnpm]
- [Your Backend Requirements]

### 1. Clone and Install
```bash
git clone <repository-url>
cd supap
yarn install
```

### 2. Environment Setup
```bash
cp env.example .env.local
```

Fill in your environment variables:
```env
# SUPAP Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=SUPAP
NEXT_PUBLIC_ORGANIZATION_EMAIL=supap.secretaria@gmail.com
NEXT_PUBLIC_ORGANIZATION_WEBSITE=https://supap.uy
# Add backend and API configuration as needed
```

### 3. Development
```bash
# Start development server
[yarn|npm|pnpm] dev

# Run tests
[yarn|npm|pnpm] test

# Run E2E tests
[yarn|npm|pnpm] test:e2e

# Type checking
[yarn|npm|pnpm] type-check

# Linting and formatting
[yarn|npm|pnpm] lint
[yarn|npm|pnpm] format
```

## Project Structure

```
supap/
├── .ai/                    # AI-specific configuration
├── assets/                 # Organization documentation
│   └── docs/              # SUPAP organizational docs
├── docs/                   # Project documentation
│   ├── status/            # Current state only
│   ├── architecture/      # Technical implementation
│   └── guides/            # How-to documentation
├── standards/              # Development standards
├── app/                   # Next.js App Router pages
├── components/            # React components
├── lib/                   # Utilities and configurations
├── __tests__/            # Test files
└── public/               # Static assets
```

## Website Purpose

This is a **public-facing website** designed to:
- Promote SUPAP's mission and values
- Engage with the public about psychedelic-assisted psychotherapy
- Provide information about activities and events
- Facilitate membership and participation
- Share educational content and resources
- **Note**: Sensitive organizational information in `assets/docs/` will NOT be public

## Key Features (Planned)

- **Home/About**: Organization mission, vision, and history
- **Activities**: Events, workshops, study groups, clinical symposiums
- **Membership**: Information about becoming a member
- **Resources**: Educational materials, publications, research
- **Events Calendar**: Upcoming activities and registration
- **Contact**: Multiple contact points for different purposes
- **Blog/News**: Updates and announcements

## Available Scripts

```bash
# Development
yarn dev              # Start development server
yarn build            # Build for production
yarn start            # Start production server

# Testing
yarn test             # Run unit tests
yarn test:ci          # Run tests with coverage
yarn test:e2e         # Run E2E tests

# Code Quality
yarn lint             # Run ESLint
yarn format           # Format with Prettier
yarn type-check       # TypeScript type checking
```

## Deployment

[Describe your deployment strategy]

## Documentation Structure

**Complete documentation is organized in the `/docs` folder**

### Quick Navigation
- `docs/index.md` - Start here
- `docs/status/progress.yaml` - Current status
- `docs/architecture/overview.md` - Architecture
- `docs/guides/setup.md` - Environment setup
- `docs/templates/` - Templates (API docs, tutorials, workflow diagram, terminology)
- `docs/_working/` - Working notes, research findings, review checklist
- `docs/session-management/` - Session notes and resumption checklist

### For AI Assistants & Developers
- `.claude/` - Documentation commands and output style
- `standards/` - Development standards and patterns
- `.ai/` - AI-specific configuration and context

See `advanced_ia_doc_workflow.md` and `development_efficiency_optimization_guide.md` at repo root for the full workflow.

## AI Development Assistance

### MCP Integration
We use Model Context Protocol (MCP) to enhance AI development assistance with 2-server setup (docs + standards).

**→ See `docs/index.md` for complete MCP setup and testing instructions**

## Contributing

1. Follow coding standards in `standards/coding.md`
2. Write tests for new features
3. Use conventional commit messages
4. Create feature branches from `dev`
5. Submit pull requests for review
6. Update documentation when making changes

**→ See `docs/guides/setup.md` for development workflow**

## License

[Your License]

---

**Built with ❤️ for SUPAP Community**

## Contact

- **Website**: https://supap.uy
- **Email**: supap.secretaria@gmail.com
- **Instagram**: @supap.uy
- **Commission Emails**: See `assets/docs/comisiones.md` for specific commission contacts

---

## Documentation Status

- **Last Updated**: 2025-11-03
- **Phase**: Initial Planning - Documentation Setup
- **Documentation**: ✅ **CONSOLIDATED** - Single source of truth in `docs/index.md`
- **MCP Integration**: ✅ Ready for implementation
- **Next Steps**: Define technical stack and begin implementation planning

**📚 For complete documentation, start with `docs/index.md`**

---

## Quick Start

1. Read this file for project overview and SUPAP context
2. Review `assets/docs/` for organizational information (not public)
3. Go to `docs/index.md` for complete technical documentation
4. Check `docs/status/progress.yaml` for current status
5. Follow `docs/guides/setup.md` for development workflow



