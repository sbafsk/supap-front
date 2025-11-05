# Current Development Priorities

> **AI Context**: This file contains current priorities only.
> For detailed status: see `progress.yaml`
> For project overview: see `../index.md`

## Active Priorities

### Brand assets & identity - 2025-11-07
- **Description**: Incorporate official SUPAP logo and colors; place optimized logo at `public/images/supap-logo.png` and verify usage in navbar/footer.
- **Assignee**: Comunicación / Dev
- **Dependencies**: Logo export (PNG/SVG), color tokens
- **Success Criteria**: Logo displays crisply on dark/light, correct favicon, consistent brand colors

### Content population (ES) - 2025-11-10
- **Description**: Replace placeholders across `app/` pages with approved Spanish copy sourced from `assets/docs/` (public-safe content only).
- **Assignee**: Contenidos / Dev
- **Dependencies**: Comunicación approval, privacy checks
- **Success Criteria**: All public pages updated, no confidential data exposed

### Accessibility & responsiveness QA - 2025-11-12
- **Description**: Audit against WCAG 2.1 AA; fix contrast, focus states, alt text; verify mobile/desktop.
- **Assignee**: QA / Dev
- **Dependencies**: Content population
- **Success Criteria**: Axe checks pass; keyboard-only nav works; images have alt text

## Upcoming Priorities

### Deployment to Vercel (preview → prod)
- **Target Date**: 2025-11-15
- **Prerequisites**: Environment variables finalized; build passes consistently

### CMS selection (blog/events)
- **Target Date**: 2025-11-20
- **Prerequisites**: Content model draft; stakeholder input

### Supabase setup (Auth/DB)
- **Target Date**: 2025-11-25
- **Prerequisites**: Data model and privacy review

## Priority Changes

- **2025-11-05**: Initial app scaffold and v0 integration completed; shifted focus to content, brand, and accessibility before backend.

## Notes

- Keep public content strictly non-confidential; cross-check with `standards/business-rules.md`.
- Add real images to `public/` referenced by `data/gallery-images.ts`.
- Risks: content delays; brand asset finalization; accessibility regressions.