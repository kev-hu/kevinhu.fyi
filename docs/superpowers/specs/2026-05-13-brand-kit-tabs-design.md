# Brand Kit Tabs — Design Spec

**Date:** 2026-05-13
**Status:** Approved
**Supersedes:** `2026-05-13-brand-kit-toc-design.md` (single-page TOC was too long to skim casually)

## Goal

Make `/brand-kit` feel like a casual reference you flip through. Replace the single 5,400-line page with five short, tabbed routes — one per category — each with a left sidebar TOC of just its own sections. Optimized for "I want to find a component or inspo and grab it."

## URL Structure

Five static subroutes, one per group:

| URL | Group | # sections |
|---|---|---|
| `/brand-kit/tokens` | Design Tokens | 4 |
| `/brand-kit/components` | Components | 4 |
| `/brand-kit/animations` | Animations | 6 |
| `/brand-kit/heroes` | Hero Sections | 14 |
| `/brand-kit/data` | Data & Metrics | 7 |

`/brand-kit` (no segment) issues a server redirect to `/brand-kit/tokens` so every page state has one canonical URL.

Within a route, anchor links work normally: `/brand-kit/heroes#terminal-card` jumps to the Terminal Card section. Cross-tab deep links (`/brand-kit/heroes#colors`) are not supported — Colors is only rendered on `/brand-kit/tokens`.

## Layout

`app/brand-kit/layout.tsx` provides shared chrome that wraps every subroute:

```
┌─────────────────────────────────────────────┐
│ Site Nav (65px, sticky, existing)           │
├─────────────────────────────────────────────┤
│ Tab bar (sticky, top: 65px, ~50px tall)     │
│ [Design Tokens] [Components] [Animations]…  │
├──────────────┬──────────────────────────────┤
│ Sidebar TOC  │ Active group's sections      │
│ (sticky)     │ (rendered by route page)     │
│ Colors       │                              │
│ Typography   │  <h2>Colors</h2>             │
│ Shadows…     │  …                           │
│ Border Rad…  │                              │
└──────────────┴──────────────────────────────┘
```

- Outer wrapper: `maxWidth: 1200px; margin: 0 auto; display: flex; gap: 48px`, `px-6 lg:px-12`
- Sidebar: `width: 220px; flexShrink: 0`, child uses `position: sticky; top: 145px` (65px nav + ~50px tab bar + 30px breathing room)
- Main: `flex: 1; minWidth: 0`
- Sidebar hidden on mobile (`.desktop-only`); tab bar stays visible on mobile as the primary nav

Scroll-to-top on tab switch is handled automatically by Next's `<Link>` default behavior.

## Components

### `components/brand-kit/styles.ts` (new)

Module exporting the shared `React.CSSProperties` constants that currently live at the top of `app/brand-kit/page.tsx`:
- `sectionStyle`, `sectionTitleStyle`, `sectionDescStyle`
- `tokenLabelStyle`, `tokenValueStyle`
- `codeStyle`

### `components/brand-kit/tabs.ts` (new)

Single source of truth for tab metadata:

```ts
export const BRAND_KIT_TABS = [
  { slug: "tokens",     label: "Design Tokens" },
  { slug: "components", label: "Components" },
  { slug: "animations", label: "Animations" },
  { slug: "heroes",     label: "Hero Sections" },
  { slug: "data",       label: "Data & Metrics" },
] as const;

export type BrandKitTabSlug = (typeof BRAND_KIT_TABS)[number]["slug"];
```

### `components/brand-kit/BrandKitTabs.tsx` (new, client)

Renders the 5 pills horizontally. Reads `usePathname()` to determine the active tab. Each pill is a `next/link` `<Link>` to `/brand-kit/${slug}` (default `scroll={true}` for top-of-page reset).

**Pill style (neubrutalist, matching the site):**
- Inactive: `background: #ffffff`, `color: #141414`, `border: 2px solid #141414`, `borderRadius: 6px`, `padding: 8px 16px`, `boxShadow: 2px 2px 0 #141414`
- Active: `background: var(--color-primary)` (#1CB0F6), `color: #ffffff`, `boxShadow: 2px 2px 0 #141414`
- Hover on inactive: `boxShadow: 4px 4px 0 #141414; transform: translate(-2px, -2px)`
- Active on press / `:active`: shadow collapses (`boxShadow: 0 0 0 #141414; transform: translate(2px, 2px)`)
- Font: `var(--font-body)`, `fontSize: 0.875rem`, `fontWeight: 600`
- Gap between pills: 8px

Pills wrap on narrow viewports; no horizontal scroll required (5 short labels fit comfortably down to ~600px).

### `components/brand-kit/BrandKitTOC.tsx` (modified)

Drop the grouped structure. New prop shape:

```ts
type TOCItem = { id: string; text: string };
type Props   = { items: TOCItem[] };
```

Behavior unchanged: `IntersectionObserver` + `window scroll` listener picks the section closest to the top of the viewport (within 120px), sets `activeId`, click links smooth-scroll and set `activeId` immediately. The visual structure becomes a single `<nav>` of `.toc-link` elements — no group labels, no group spacing.

Sidebar container retains `overflow-y: auto; max-height: calc(100vh - 165px); paddingRight: 8px` so the longest group (Heroes, 14 items) is still fully reachable.

### `components/brand-kit/{Tokens,Components,Animations,Hero,Data}Sections.tsx` (new)

Five pure-render components, each containing the JSX of its group's sections copy-pasted verbatim from the current `app/brand-kit/page.tsx`. Shared styles imported from `components/brand-kit/styles.ts`. Group-local module-scoped data (e.g. `colors`, `shadows`, `radii` arrays) moves into the component file that uses it.

Each section retains its existing `id` attribute (already in place from commit `2f0efeb`). No behavior changes inside any section — animations, marquees, interactive demos all work identically.

### `app/brand-kit/layout.tsx` (new)

Server component that renders the shared chrome and slots `{children}` into the main content area. Internal mapping `TOC_ITEMS_BY_TAB: Record<BrandKitTabSlug, TOCItem[]>` holds all five item lists. A small client wrapper reads `usePathname()` to derive the active slug and pass `items={TOC_ITEMS_BY_TAB[slug]}` to `BrandKitTOC`.

Layout owns the TOC data (rather than each route passing it down) because Next App Router doesn't have a clean route → layout data-passing channel. Trade-off: renaming a section requires updating both the JSX (`<h2>`) and `TOC_ITEMS_BY_TAB`. Acceptable for 35 items.

### `app/brand-kit/page.tsx` (replaced)

Becomes a 3-line redirect:

```tsx
import { redirect } from "next/navigation";
export default function Page() { redirect("/brand-kit/tokens"); }
```

### `app/brand-kit/{tokens,components,animations,heroes,data}/page.tsx` (new, ×5)

Each is ~5 lines: import the corresponding group component, render it.

```tsx
// app/brand-kit/heroes/page.tsx
import type { Metadata } from "next";
import { HeroSections } from "@/components/brand-kit/HeroSections";

export const metadata: Metadata = { title: "Hero Sections — Brand Kit" };

export default function Page() { return <HeroSections />; }
```

## Scroll Margin

`globals.css` already has `scroll-margin-top: 89px` on `.prose-content h2/h3`. Brand-kit section `h2`s aren't inside `.prose-content`, so smooth-scroll targets currently rely on the section's own padding. With the new sticky tab bar (~50px on top of the 65px nav), the offset becomes 145px. Add a rule:

```css
@layer components {
  .brand-kit-section {
    scroll-margin-top: 145px;
  }
}
```

Apply `className="brand-kit-section"` (or merge with existing className) on each `<section>` in the five group components, or add a global selector for `main > div > section` on brand-kit routes. Recommended: explicit `.brand-kit-section` class for clarity.

## Files Changed

**New:**
- `app/brand-kit/layout.tsx`
- `app/brand-kit/tokens/page.tsx`
- `app/brand-kit/components/page.tsx`
- `app/brand-kit/animations/page.tsx`
- `app/brand-kit/heroes/page.tsx`
- `app/brand-kit/data/page.tsx`
- `components/brand-kit/styles.ts`
- `components/brand-kit/tabs.ts`
- `components/brand-kit/BrandKitTabs.tsx`
- `components/brand-kit/TokensSections.tsx`
- `components/brand-kit/ComponentsSections.tsx`
- `components/brand-kit/AnimationsSections.tsx`
- `components/brand-kit/HeroSections.tsx`
- `components/brand-kit/DataSections.tsx`

**Modified:**
- `app/brand-kit/page.tsx` (now a 3-line redirect)
- `components/BrandKitTOC.tsx` (drop groups, accept flat `items[]`)
- `app/globals.css` (add `.brand-kit-section { scroll-margin-top: 145px }`)

**Unchanged but used:**
- `.toc-link` / `.toc-link.active` styles in `globals.css`
- All section ids from commit `2f0efeb`

## Out of Scope

- Mobile sidebar — tabs visible on mobile (primary nav), sidebar TOC hidden via `.desktop-only`
- Search / Cmd+K
- Cross-tab deep links (each route only renders its own sections)
- Hash → URL sync (scroll-spy updates the sidebar highlight but doesn't push `#section-id` to the URL bar — same as the previous spec)
- Animating between tabs (relying on native page transitions; smooth-scroll is on within-tab anchor clicks only)

## Migration Note

The previous TOC implementation (commits `c1aee25` → `67f7b07`) is partially preserved: section ids stay, `.toc-link` styles stay, the `BrandKitTOC` component is simplified rather than replaced. The single-page-with-sidebar layout in `app/brand-kit/page.tsx` is discarded in favor of the per-tab layout in `app/brand-kit/layout.tsx`.
