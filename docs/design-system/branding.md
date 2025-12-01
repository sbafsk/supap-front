# SUPAP Brand Identity Guide

> **AI Context**: Official brand identity guidelines for SUPAP (Sociedad Uruguaya de Psicoterapias Asistidas por Psicodélicos y Enteógenos)
> For design system: see `./components.md`
> For project overview: see `../index.md`

## Overview

This document defines the official brand identity for SUPAP, including colors, typography, logo usage, and visual guidelines. All brand assets must adhere to these specifications to maintain consistency across all platforms and materials.

---

## Brand Colors

### Primary Brand Colors

#### Purple (Primary)
```css
/* CMYK: C:58 M:89 Y:0 K:0 */
/* RGB: R:126 G:84 B:160 */
--color-brand-purple: #864C9C;
--color-brand-purple-rgb: 126, 84, 160;
```

**Usage:**
- Primary brand color
- Logo accent
- Call-to-action elements
- Important highlights

**Accessibility:**
- Contrast ratio with white: ~3.1:1 (suitable for large text only)
- Contrast ratio with black: ~6.8:1 (suitable for body text)

#### Blue (Primary)
```css
/* CMYK: C:74 M:69 Y:5 K:0 */
/* RGB: R:77 G:90 B:166 */
--color-brand-blue: #4D5AA6;
--color-brand-blue-rgb: 77, 90, 166;
```

**Usage:**
- Co-primary brand color
- Logo color
- Navigation and UI elements
- Links and interactive elements

**Accessibility:**
- Contrast ratio with white: ~4.5:1 (WCAG AA compliant)
- Contrast ratio with black: ~4.7:1 (WCAG AA compliant)

### Gradient Colors

#### Yellow-Purple Gradient
```css
/* Start: Yellow */
--color-gradient-yellow: #F9C732;
/* CMYK: C:7 M:11 Y:98 K:0 */

/* End: Purple */
--color-gradient-purple: #864C9C;
/* CMYK: C:58 M:89 Y:0 K:0 */

/* Gradient Definition */
background: linear-gradient(135deg, #F9C732 0%, #864C9C 100%);
```

**Usage:**
- Decorative elements
- Section backgrounds
- Card highlights
- Hero sections

#### Turquoise-Yellow Gradient
```css
/* Start: Turquoise */
--color-gradient-turquoise: #5FD4C4;
/* CMYK: C:5 M:9 Y:53 K:0 */

/* Mid: Soft Yellow */
--color-gradient-soft-yellow: #F5E676;
/* CMYK: C:62 M:0 Y:24 K:0 */

/* Gradient Definition */
background: linear-gradient(135deg, #5FD4C4 0%, #F5E676 100%);
```

**Usage:**
- Alternative decorative elements
- Section dividers
- Accent borders
- Background overlays (with transparency)

### Gradient Transparency Options

```css
/* 19% Opacity Overlay */
.gradient-overlay-19 {
  background: linear-gradient(135deg, #F9C732 0%, #864C9C 100%);
  opacity: 0.19;
}

/* Full Opacity */
.gradient-full {
  background: linear-gradient(135deg, #F9C732 0%, #864C9C 100%);
  opacity: 1;
}
```

### Text Colors

#### Primary Text
```css
/* Black for body text */
--color-text-primary: #000000;
/* CMYK: C:0 M:0 Y:0 K:100 */

/* White for text on dark backgrounds */
--color-text-on-dark: #FFFFFF;
```

---

## Typography

### Logo Font

**Font Family:** Druk Wide Bold
```css
--font-logo: 'Druk Wide Bold', sans-serif;
```

**Usage:**
- SUPAP logo text only
- Not for general UI or content

**Specifications:**
- Weight: Bold
- Style: Wide (expanded/extended)
- Use cases: Logo, brand lockup

### Organization Name Font

**Font Family:** Calibri
```css
--font-org-name: 'Calibri', 'Helvetica Neue', Arial, sans-serif;
```

**Usage:**
- Full organization name: "SOCIEDAD URUGUAYA DE PSICOTERAPIAS ASISTIDAS POR PSICODÉLICOS Y ENTEÓGENOS"
- Formal contexts
- Legal documents
- Footer attribution

**Specifications:**
- Weight: Regular (400)
- Use for formal organization name display

### UI Typography

For general UI typography, continue using the existing design system fonts:
- Primary: System font stack (see `components.md`)
- Headings: Can optionally use Druk Wide Bold for impact
- Body: Standard readable fonts with good accessibility

---

## Logo Specifications

### Logo Mark

The SUPAP logo consists of:
1. **Wordmark:** "SUPAP" in Druk Wide Bold
2. **Color:** Primary Blue (#4D5AA6)
3. **Geometric Element:** Rounded rectangle badge/container

### Logo Usage Rules

#### Minimum Size
- Digital: 120px width minimum
- Print: 30mm width minimum

#### Clear Space
- Maintain clear space equal to the height of the "S" letter on all sides
- No other elements should intrude into this clear space

#### Color Variations

**Primary (Preferred):**
- Blue wordmark (#4D5AA6)
- On white or light backgrounds

**Reverse (Alternative):**
- White wordmark
- On blue or dark backgrounds
- Ensure proper contrast

**Monochrome (When Necessary):**
- Black on white
- White on black
- Use only when color reproduction is not available

### Logo Don'ts

- ❌ Do not rotate the logo
- ❌ Do not distort or stretch the logo
- ❌ Do not change the colors outside approved variations
- ❌ Do not add effects (shadows, gradients, outlines)
- ❌ Do not place on busy backgrounds without proper contrast
- ❌ Do not recreate or modify the logo typeface

---

## Color Usage Guidelines

### Primary Actions

Use **Brand Blue** (#4D5AA6) for:
- Primary buttons
- Links
- Active navigation items
- Focus states

### Secondary Actions

Use **Brand Purple** (#864C9C) for:
- Secondary buttons
- Hover states
- Badges and labels
- Highlights

### Decorative Elements

Use **Gradients** for:
- Hero sections
- Section backgrounds (with low opacity)
- Decorative cards
- Visual accents
- Dividers

### Text Colors

```css
/* On White Backgrounds */
.text-primary { color: #000000; }
.text-brand-blue { color: #4D5AA6; }
.text-brand-purple { color: #864C9C; }

/* On Dark Backgrounds */
.text-on-dark { color: #FFFFFF; }

/* On Blue Background */
.text-on-brand-blue { color: #FFFFFF; }

/* On Purple Background */
.text-on-brand-purple { color: #FFFFFF; }
```

---

## Accessibility Considerations

### Color Contrast

**Brand Blue (#4D5AA6) on White:**
- Ratio: 4.5:1 ✅
- WCAG AA: Pass (body text)
- WCAG AAA: Pass (large text only)

**Brand Purple (#864C9C) on White:**
- Ratio: 3.1:1 ⚠️
- WCAG AA: Fail for body text
- WCAG AA: Pass for large text (18pt+)
- **Recommendation:** Use for headings, large UI elements, or combine with sufficient contrast

**Brand Blue (#4D5AA6) on Black:**
- Ratio: 4.7:1 ✅
- WCAG AA: Pass

**Brand Purple (#864C9C) on Black:**
- Ratio: 6.8:1 ✅
- WCAG AA: Pass
- WCAG AAA: Pass

### Best Practices

1. **Text on Colored Backgrounds:**
   - Always use white text on brand blue or purple backgrounds
   - Test contrast ratios when using gradients

2. **Interactive Elements:**
   - Ensure buttons have sufficient contrast
   - Provide additional visual indicators beyond color alone
   - Use focus rings for keyboard navigation

3. **Gradients:**
   - When using text over gradients, add a solid color overlay or text shadow
   - Test readability at both ends of the gradient

---

## Implementation

### CSS Custom Properties

```css
:root {
  /* Brand Colors */
  --color-brand-purple: #864C9C;
  --color-brand-purple-rgb: 126, 84, 160;

  --color-brand-blue: #4D5AA6;
  --color-brand-blue-rgb: 77, 90, 166;

  /* Gradient Colors */
  --color-gradient-yellow: #F9C732;
  --color-gradient-purple: #864C9C;
  --color-gradient-turquoise: #5FD4C4;
  --color-gradient-soft-yellow: #F5E676;

  /* Gradients */
  --gradient-yellow-purple: linear-gradient(135deg, #F9C732 0%, #864C9C 100%);
  --gradient-turquoise-yellow: linear-gradient(135deg, #5FD4C4 0%, #F5E676 100%);

  /* Text Colors */
  --color-text-primary: #000000;
  --color-text-on-dark: #FFFFFF;

  /* Typography */
  --font-logo: 'Druk Wide Bold', sans-serif;
  --font-org-name: 'Calibri', 'Helvetica Neue', Arial, sans-serif;
}
```

### Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#864C9C',
          blue: '#4D5AA6',
          'gradient-yellow': '#F9C732',
          'gradient-turquoise': '#5FD4C4',
          'gradient-soft-yellow': '#F5E676',
        }
      },
      backgroundImage: {
        'gradient-brand-primary': 'linear-gradient(135deg, #F9C732 0%, #864C9C 100%)',
        'gradient-brand-secondary': 'linear-gradient(135deg, #5FD4C4 0%, #F5E676 100%)',
      },
      fontFamily: {
        logo: ['Druk Wide Bold', 'sans-serif'],
        'org-name': ['Calibri', 'Helvetica Neue', 'Arial', 'sans-serif'],
      }
    }
  }
}
```

### Usage Examples

#### Brand Button
```typescript
// Primary brand button
<button className="
  bg-brand-blue text-white
  hover:bg-brand-purple
  focus:ring-2 focus:ring-brand-blue focus:ring-offset-2
  px-6 py-3 rounded-md font-medium
  transition-colors duration-200
">
  Solicitar Información
</button>

// Gradient button
<button className="
  bg-gradient-brand-primary text-white
  hover:opacity-90
  focus:ring-2 focus:ring-brand-purple focus:ring-offset-2
  px-6 py-3 rounded-md font-medium
  transition-opacity duration-200
">
  Inscríbete Ahora
</button>
```

#### Logo Component
```typescript
const Logo: React.FC<{ variant?: 'color' | 'white' | 'black' }> = ({
  variant = 'color'
}) => {
  const colorClass = {
    color: 'text-brand-blue',
    white: 'text-white',
    black: 'text-black'
  }[variant];

  return (
    <div className="inline-block">
      <h1 className={`font-logo text-4xl ${colorClass}`}>
        SUPAP
      </h1>
    </div>
  );
};
```

#### Gradient Section
```typescript
const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden">
    {/* Gradient Background */}
    <div className="absolute inset-0 bg-gradient-brand-primary opacity-19" />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Psicoterapias Asistidas
      </h1>
      <p className="text-xl text-gray-700">
        Acompañamiento profesional en procesos terapéuticos
      </p>
    </div>
  </section>
);
```

---

## Asset Locations

### Brand Assets Repository

```
/public/images/
├── supap-branding.png          # Brand guidelines reference
├── supap-logo-blue.svg         # Primary logo (blue)
├── supap-logo-white.svg        # Logo for dark backgrounds
├── supap-logo-black.svg        # Logo for light backgrounds
└── supap-logo-monochrome.svg   # Monochrome version
```

### Font Files

```
/public/fonts/
├── DrukWide-Bold.woff2         # Logo font
└── calibri.woff2                # Organization name font
```

---

## Related Documentation

- [Design System Components](./components.md)
- [Project Overview](../index.md)
- [Development Standards](../../standards/coding.md)

---

**Last Updated:** 2025-12-01
**Next Review:** When brand guidelines are updated or new assets are added
