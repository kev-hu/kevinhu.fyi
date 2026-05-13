# Brand Kit TOC — Design Spec

**Date:** 2026-05-13  
**Status:** Approved

## Goal

Add a sticky, grouped table of contents sidebar to the brand-kit page so developers can quickly navigate 35+ sections, especially when referencing the page alongside an LLM prompt ("show me how to build a hero section on this site").

## Layout

Wrap brand-kit's existing `<main>` content in a 2-column flex container:

```
[ 220px sticky sidebar TOC ] [ flex-1 main content ]
```

- Sidebar: `width: 220px`, `flexShrink: 0`, child div uses `position: sticky; top: 89px`
- Main content: unchanged, `flex: 1`, `minWidth: 0`
- Sidebar hidden on mobile via `.desktop-only` class (consistent with project pages)
- Outer wrapper: `maxWidth: 1200px`, `margin: 0 auto`, `px-6 lg:px-12`

## New Component: `BrandKitTOC`

**File:** `components/BrandKitTOC.tsx` — client component (`"use client"`)

**Props:**
```ts
type TOCItem  = { id: string; text: string }
type TOCGroup = { label: string; items: TOCItem[] }
type Props    = { groups: TOCGroup[] }
```

**Scroll-spy behavior:** Same pattern as `TableOfContents` — `IntersectionObserver` + `window scroll` listener. Tracks which section heading is closest to top of viewport (within 120px threshold). Sets `activeId` state. Click links smooth-scroll to target and set `activeId` immediately.

**Visual structure:**
- Category label: small uppercase header (`0.6875rem`, `letterSpacing: 0.1em`, `opacity: 0.5`)
- Section links: same `.toc-link` / `.toc-link.active` CSS classes already defined in `globals.css`
- Groups separated by `marginTop: 20px`
- Sidebar container: `overflow-y: auto; max-height: calc(100vh - 120px)` so all 35 items are reachable

## Section IDs

Add `id` to every `<section>` in `app/brand-kit/page.tsx`. IDs:

| Section title | id |
|---|---|
| Colors | `colors` |
| Typography | `typography` |
| Shadows & Borders | `shadows-borders` |
| Border Radius | `border-radius` |
| Buttons | `buttons` |
| Cards | `cards` |
| Skill Pills | `skill-pills` |
| Layout Patterns | `layout-patterns` |
| Animated Hero Entrance | `animated-hero-entrance` |
| Counting Stats | `counting-stats` |
| Card Cascade | `card-cascade` |
| Floating Skill Badges | `floating-skill-badges` |
| Pulsing CTA Block | `pulsing-cta-block` |
| Marquee / Ticker | `marquee-ticker` |
| The Terminal Card | `terminal-card` |
| The Stat Wall | `stat-wall` |
| The Stack | `the-stack` |
| The Bridge Diagram | `bridge-diagram` |
| Marquee Strip (Enhanced) | `marquee-strip-enhanced` |
| The Window Card | `window-card` |
| The Headshot Split | `headshot-split` |
| The Availability Badge | `availability-badge` |
| The Quote Block | `quote-block` |
| The Split Comparison | `split-comparison` |
| The Social Card | `social-card` |
| The Architecture Diagram | `architecture-diagram` |
| The Annotated Screenshot | `annotated-screenshot` |
| The Process Timeline | `process-timeline` |
| The Score Progression | `score-progression` |
| The Hero Metric | `hero-metric` |
| The Metric Tile | `metric-tile` |
| The Delta Tile | `delta-tile` |
| Sparkline & Bar Row | `sparkline-bar-row` |
| Code Block (Markdown) | `code-block` |
| Drill-down Card (MDX) | `drilldown-card` |

## TOC Groups

Groups named to match natural LLM prompting vocabulary ("build me a hero section", "what data viz components exist"):

```ts
const TOC_GROUPS: TOCGroup[] = [
  {
    label: "Design Tokens",
    items: [
      { id: "colors",        text: "Colors" },
      { id: "typography",    text: "Typography" },
      { id: "shadows-borders", text: "Shadows & Borders" },
      { id: "border-radius", text: "Border Radius" },
    ],
  },
  {
    label: "Components",
    items: [
      { id: "buttons",         text: "Buttons" },
      { id: "cards",           text: "Cards" },
      { id: "skill-pills",     text: "Skill Pills" },
      { id: "layout-patterns", text: "Layout Patterns" },
    ],
  },
  {
    label: "Animations",
    items: [
      { id: "animated-hero-entrance", text: "Animated Hero Entrance" },
      { id: "counting-stats",         text: "Counting Stats" },
      { id: "card-cascade",           text: "Card Cascade" },
      { id: "floating-skill-badges",  text: "Floating Skill Badges" },
      { id: "pulsing-cta-block",      text: "Pulsing CTA Block" },
      { id: "marquee-ticker",         text: "Marquee / Ticker" },
    ],
  },
  {
    label: "Hero Sections",
    items: [
      { id: "terminal-card",        text: "Terminal Card" },
      { id: "stat-wall",            text: "Stat Wall" },
      { id: "the-stack",            text: "The Stack" },
      { id: "bridge-diagram",       text: "Bridge Diagram" },
      { id: "marquee-strip-enhanced", text: "Marquee Strip (Enhanced)" },
      { id: "window-card",          text: "Window Card" },
      { id: "headshot-split",       text: "Headshot Split" },
      { id: "availability-badge",   text: "Availability Badge" },
      { id: "quote-block",          text: "Quote Block" },
      { id: "split-comparison",     text: "Split Comparison" },
      { id: "social-card",          text: "Social Card" },
      { id: "architecture-diagram", text: "Architecture Diagram" },
      { id: "annotated-screenshot", text: "Annotated Screenshot" },
      { id: "process-timeline",     text: "Process Timeline" },
    ],
  },
  {
    label: "Data & Metrics",
    items: [
      { id: "score-progression",  text: "Score Progression" },
      { id: "hero-metric",        text: "Hero Metric" },
      { id: "metric-tile",        text: "Metric Tile" },
      { id: "delta-tile",         text: "Delta Tile" },
      { id: "sparkline-bar-row",  text: "Sparkline & Bar Row" },
      { id: "code-block",         text: "Code Block" },
      { id: "drilldown-card",     text: "Drill-down Card" },
    ],
  },
];
```

## Files Changed

1. `components/BrandKitTOC.tsx` — new client component
2. `app/brand-kit/page.tsx` — add section IDs, wrap in 2-col layout, import TOC

## Out of Scope

- Mobile TOC (brand-kit is a dev reference, desktop-only is fine)
- Modifying `TableOfContents` (single-use case doesn't warrant coupling)
- URL hash updates on scroll (nice-to-have, not needed)
