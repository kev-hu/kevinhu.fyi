# Brand Kit Page Design

## Goal
Create `/brand-kit` — a styled reference page documenting kevinhu.fyi's design tokens and visual patterns. Primary use case: share with LLMs to produce on-brand visual/web assets.

## Decisions
- **Approach:** Single server component at `app/brand-kit/page.tsx`
- **Style:** Styled reference using the site's own design system (not plain doc)
- **Visibility:** Unlisted — no nav or footer links
- **Scope:** Visual/web assets only (no voice/tone)

## Sections
1. **Header** — Title + brand identity summary (neubrutalist, bold, playful-professional)
2. **Colors** — Swatch grid with hex, CSS variable name, and usage notes
3. **Typography** — Font families with rendered samples at heading/body sizes
4. **Shadows & Borders** — Live shadow examples + border pattern docs
5. **Border Radius** — Three radius tokens with visual examples
6. **Buttons** — Primary/secondary with interaction state descriptions
7. **Cards** — Neubrutalist card example with hover-lift docs
8. **Layout** — Standard section pattern (max-width, centering, padding)

## Implementation
Single file: `app/brand-kit/page.tsx`. Follows existing styling conventions (inline styles for tokens, Tailwind for responsive, CSS classes for interactions). No new components or dependencies needed.
