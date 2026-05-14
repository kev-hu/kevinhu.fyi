# Brand Kit Tabs Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor `/brand-kit` from a 5,400-line single page into five tabbed subroutes (`/brand-kit/{tokens,components,animations,heroes,data}`), each with a left sidebar TOC scoped to its own sections.

**Architecture:** A shared `app/brand-kit/layout.tsx` owns the page header, sticky tab bar, and left sidebar TOC. Each subroute's `page.tsx` renders one group component (`TokensSections`, `ComponentsSections`, etc.). Shared styles and tab config live in `components/brand-kit/`. The existing `BrandKitTOC` is simplified to accept a flat `items[]` prop.

**Tech Stack:** Next.js 15 App Router, TypeScript, React, Tailwind v4 (`.desktop-only` class), inline styles (project convention). No test suite — verification is `npm run lint` + manual browser checks.

**Reference spec:** `docs/superpowers/specs/2026-05-13-brand-kit-tabs-design.md`

**Note on section extraction:** The original `app/brand-kit/page.tsx` contains both anchored sections (with `id="..."`) and non-anchored "intro banner" sections between groups (e.g. "Motion Reference", "Banner Components", "Phase 1", "Content Templates", "Case Study Components"). **Drop all non-anchored intro banners** — the tab pills and page header replace them. Only sections with `id="..."` move into the group components.

---

### Task 1: Extract shared styles into `components/brand-kit/styles.ts`

**Files:**
- Create: `components/brand-kit/styles.ts`

- [ ] **Step 1: Create the file**

```ts
import type { CSSProperties } from "react";

export const sectionStyle: CSSProperties = {
  paddingTop: "56px",
  paddingBottom: "56px",
  borderBottom: "1px solid var(--color-muted)",
};

export const sectionTitleStyle: CSSProperties = {
  fontFamily: "var(--font-display), sans-serif",
  fontSize: "1.5rem",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: "var(--color-foreground)",
  margin: 0,
  marginBottom: "8px",
};

export const sectionDescStyle: CSSProperties = {
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.9375rem",
  lineHeight: 1.6,
  color: "var(--color-foreground)",
  opacity: 0.6,
  margin: 0,
  marginBottom: "32px",
  maxWidth: "640px",
};

export const tokenLabelStyle: CSSProperties = {
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.8125rem",
  color: "var(--color-foreground)",
  opacity: 0.5,
  margin: 0,
};

export const tokenValueStyle: CSSProperties = {
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "var(--color-foreground)",
  margin: 0,
};

export const codeStyle: CSSProperties = {
  fontFamily: "monospace",
  fontSize: "0.8125rem",
  color: "var(--color-primary)",
  background: "rgba(28,176,246,0.08)",
  padding: "2px 6px",
  borderRadius: "4px",
};
```

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/brand-kit/styles.ts
git commit -m "feat(brand-kit): extract shared section styles"
```

---

### Task 2: Create `components/brand-kit/tabs.ts`

**Files:**
- Create: `components/brand-kit/tabs.ts`

- [ ] **Step 1: Create the file**

```ts
export const BRAND_KIT_TABS = [
  { slug: "tokens",     label: "Design Tokens" },
  { slug: "components", label: "Components" },
  { slug: "animations", label: "Animations" },
  { slug: "heroes",     label: "Hero Sections" },
  { slug: "data",       label: "Data & Metrics" },
] as const;

export type BrandKitTabSlug = (typeof BRAND_KIT_TABS)[number]["slug"];

export type TOCItem = { id: string; text: string };

export const TOC_ITEMS_BY_TAB: Record<BrandKitTabSlug, TOCItem[]> = {
  tokens: [
    { id: "colors",          text: "Colors" },
    { id: "typography",      text: "Typography" },
    { id: "shadows-borders", text: "Shadows & Borders" },
    { id: "border-radius",   text: "Border Radius" },
  ],
  components: [
    { id: "buttons",         text: "Buttons" },
    { id: "cards",           text: "Cards" },
    { id: "skill-pills",     text: "Skill Pills" },
    { id: "layout-patterns", text: "Layout Patterns" },
  ],
  animations: [
    { id: "animated-hero-entrance", text: "Animated Hero Entrance" },
    { id: "counting-stats",         text: "Counting Stats" },
    { id: "card-cascade",           text: "Card Cascade" },
    { id: "floating-skill-badges",  text: "Floating Skill Badges" },
    { id: "pulsing-cta-block",      text: "Pulsing CTA Block" },
    { id: "marquee-ticker",         text: "Marquee / Ticker" },
  ],
  heroes: [
    { id: "terminal-card",          text: "Terminal Card" },
    { id: "stat-wall",              text: "Stat Wall" },
    { id: "the-stack",              text: "The Stack" },
    { id: "bridge-diagram",         text: "Bridge Diagram" },
    { id: "marquee-strip-enhanced", text: "Marquee Strip (Enhanced)" },
    { id: "window-card",            text: "Window Card" },
    { id: "headshot-split",         text: "Headshot Split" },
    { id: "availability-badge",     text: "Availability Badge" },
    { id: "quote-block",            text: "Quote Block" },
    { id: "split-comparison",       text: "Split Comparison" },
    { id: "social-card",            text: "Social Card" },
    { id: "architecture-diagram",   text: "Architecture Diagram" },
    { id: "annotated-screenshot",   text: "Annotated Screenshot" },
    { id: "process-timeline",       text: "Process Timeline" },
  ],
  data: [
    { id: "score-progression", text: "Score Progression" },
    { id: "hero-metric",       text: "Hero Metric" },
    { id: "metric-tile",       text: "Metric Tile" },
    { id: "delta-tile",        text: "Delta Tile" },
    { id: "sparkline-bar-row", text: "Sparkline & Bar Row" },
    { id: "code-block",        text: "Code Block" },
    { id: "drilldown-card",    text: "Drill-down Card" },
  ],
};
```

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/brand-kit/tabs.ts
git commit -m "feat(brand-kit): add tabs config and TOC items map"
```

---

### Task 3: Simplify `BrandKitTOC` to accept flat `items[]`

**Files:**
- Modify: `components/BrandKitTOC.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

import type { TOCItem } from "@/components/brand-kit/tabs";

export function BrandKitTOC({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const els: HTMLElement[] = [];
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) els.push(el);
    }
    if (els.length === 0) return;

    const handle = () => {
      let best: HTMLElement | null = null;
      let bestDist = Infinity;
      for (const el of els) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160) {
          const dist = Math.abs(rect.top);
          if (dist < bestDist) {
            bestDist = dist;
            best = el;
          }
        }
      }
      setActiveId(best ? best.id : "");
    };

    observerRef.current = new IntersectionObserver(handle, {
      rootMargin: "-145px 0px -60% 0px",
      threshold: 0,
    });
    for (const el of els) observerRef.current.observe(el);
    window.addEventListener("scroll", handle, { passive: true });
    handle();

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handle);
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <div
      style={{
        overflowY: "auto",
        maxHeight: "calc(100vh - 165px)",
        paddingRight: "8px",
      }}
    >
      <nav
        aria-label="Brand kit sections"
        style={{ display: "flex", flexDirection: "column", gap: "2px" }}
      >
        {items.map(({ id, text }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleClick(e, id)}
            className={`toc-link${activeId === id ? " active" : ""}`}
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "3px 0",
              display: "block",
              transition: "color 150ms ease",
              lineHeight: 1.4,
            }}
          >
            {text}
          </a>
        ))}
      </nav>
    </div>
  );
}
```

Note: `rootMargin` top is now `-145px` (was `-80px`) to account for the new sticky tab bar; the "near top" threshold is `160px` (was `120px`) for the same reason.

- [ ] **Step 2: Lint**

`app/brand-kit/page.tsx` still imports the old `groups` prop shape. Lint will fail until Task 12 replaces that file. Skip lint here.

- [ ] **Step 3: Commit**

```bash
git add components/BrandKitTOC.tsx
git commit -m "refactor(brand-kit): simplify TOC to flat items[] prop"
```

---

### Task 4: Create `BrandKitTabs` client component

**Files:**
- Create: `components/brand-kit/BrandKitTabs.tsx`

- [ ] **Step 1: Create the file**

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BRAND_KIT_TABS } from "@/components/brand-kit/tabs";

export function BrandKitTabs() {
  const pathname = usePathname();
  const activeSlug = pathname?.split("/")[2] ?? "tokens";

  return (
    <div
      style={{
        position: "sticky",
        top: "65px",
        zIndex: 40,
        background: "var(--color-background)",
        borderBottom: "1px solid var(--color-muted)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "12px",
          paddingBottom: "12px",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
        className="px-6 lg:px-12"
      >
        {BRAND_KIT_TABS.map(({ slug, label }) => {
          const isActive = activeSlug === slug;
          return (
            <Link
              key={slug}
              href={`/brand-kit/${slug}`}
              className={`brand-kit-tab${isActive ? " active" : ""}`}
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                padding: "8px 16px",
                borderRadius: "6px",
                border: "2px solid #141414",
                background: isActive ? "var(--color-primary)" : "#ffffff",
                color: isActive ? "#ffffff" : "#141414",
                boxShadow: "2px 2px 0 #141414",
                textDecoration: "none",
                transition: "transform 120ms ease, box-shadow 120ms ease",
                display: "inline-block",
              }}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Add hover and active-press styles to `app/globals.css`**

Find the `@layer components` block in `app/globals.css`. Add (anywhere within the block):

```css
.brand-kit-tab:hover {
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0 #141414;
}

.brand-kit-tab:active {
  transform: translate(2px, 2px);
  box-shadow: 0 0 0 #141414;
}
```

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/brand-kit/BrandKitTabs.tsx app/globals.css
git commit -m "feat(brand-kit): add BrandKitTabs sticky tab bar"
```

---

### Task 5: Create `TokensSections` (Colors, Typography, Shadows & Borders, Border Radius)

**Files:**
- Create: `components/brand-kit/TokensSections.tsx`

This component contains **4 sections** with ids `colors`, `typography`, `shadows-borders`, `border-radius`, plus the `colors`, `shadows`, and `radii` data arrays currently at the top of `page.tsx`.

- [ ] **Step 1: Create the file with imports and data**

```tsx
import {
  sectionStyle,
  sectionTitleStyle,
  sectionDescStyle,
  tokenLabelStyle,
  tokenValueStyle,
  codeStyle,
} from "@/components/brand-kit/styles";

const colors = [
  { name: "Primary",       var: "--color-primary",       hex: "#1CB0F6", usage: "CTAs, links, interactive highlights" },
  { name: "Primary Hover", var: "--color-primary-hover", hex: "#1490CC", usage: "Hover/active state for primary elements" },
  { name: "Secondary",     var: "--color-secondary",     hex: "#22C55E", usage: "Accent badges, availability indicators" },
  { name: "Foreground",    var: "--color-foreground",    hex: "#141414", usage: "Text, borders, shadow offsets" },
  { name: "Background",    var: "--color-background",    hex: "#FAF9F6", usage: "Page background (warm off-white)" },
  { name: "Card",          var: "--color-card",          hex: "#FFFFFF", usage: "Card/surface backgrounds" },
  { name: "Muted",         var: "--color-muted",         hex: "#E5E5E5", usage: "Borders, dividers, secondary button outlines" },
];

const shadows = [
  { name: "Brutal",         var: "--shadow-brutal",         value: "4px 4px 0 #141414", usage: "Cards, prominent containers" },
  { name: "Brutal Small",   var: "--shadow-brutal-sm",      value: "2px 2px 0 #141414", usage: "Smaller elements, tags" },
  { name: "Brutal Primary", var: "--shadow-brutal-primary", value: "0 4px 0 #1490CC",   usage: "Primary buttons (resting state)" },
  { name: "Brutal Gray",    var: "--shadow-brutal-gray",    value: "0 4px 0 #C4C4C4",   usage: "Secondary buttons (resting state)" },
];

const radii = [
  { name: "Card",      var: "--radius-card",      value: "16px", usage: "Cards, buttons" },
  { name: "Container", var: "--radius-container", value: "12px", usage: "Inner containers, inputs" },
  { name: "Button",    var: "--radius-button",    value: "6px",  usage: "Small pills, skill tags" },
];

export function TokensSections() {
  return (
    <>
      {/* JSX inserted in step 2 */}
    </>
  );
}
```

- [ ] **Step 2: Insert the section JSX**

Open `app/brand-kit/page.tsx` and copy the JSX for these line ranges into the `<>...</>` fragment of `TokensSections`, in order:

- Lines **296–348** — `<section id="colors" ...>...</section>`
- Lines **351–531** — `<section id="typography" ...>...</section>`
- Lines **534–581** — `<section id="shadows-borders" ...>...</section>`
- Lines **584–621** — `<section id="border-radius" ...>...</section>`

For each `<section>`, change `style={sectionStyle}` to `className="brand-kit-section" style={sectionStyle}` so the new scroll-margin class applies. (Same for any section that uses `{ ...sectionStyle, borderBottom: "none" }` — keep the inline style and just add the className.)

Indentation: the original JSX is indented 8 spaces (inside the page's outer wrappers). Reduce by 6 spaces so it sits inside the new component's `<>` fragment at 6-space indent (matching component body convention).

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Expected: no errors. If `react/no-unescaped-entities` fires, the original page already uses `&amp;` / `&apos;` — preserve those exactly.

- [ ] **Step 4: Commit**

```bash
git add components/brand-kit/TokensSections.tsx
git commit -m "feat(brand-kit): add TokensSections component"
```

---

### Task 6: Create `ComponentsSections` (Buttons, Cards, Skill Pills, Layout Patterns)

**Files:**
- Create: `components/brand-kit/ComponentsSections.tsx`

This component contains **4 sections** with ids `buttons`, `cards`, `skill-pills`, `layout-patterns`. The Buttons section imports the `Button` component.

- [ ] **Step 1: Create the file scaffold**

```tsx
import Button from "@/components/Button";
import {
  sectionStyle,
  sectionTitleStyle,
  sectionDescStyle,
  codeStyle,
} from "@/components/brand-kit/styles";

export function ComponentsSections() {
  return (
    <>
      {/* JSX inserted in step 2 */}
    </>
  );
}
```

- [ ] **Step 2: Insert the section JSX**

Copy these line ranges from `app/brand-kit/page.tsx` into the fragment, in order:

- Lines **624–691** — `<section id="buttons" ...>`
- Lines **694–813** — `<section id="cards" ...>`
- Lines **816–867** — `<section id="skill-pills" ...>`
- Lines **870–919** — `<section id="layout-patterns" ...>`

Add `className="brand-kit-section"` to each `<section>` as in Task 5.

**Do not** copy lines 921–961 — that is the unanchored "Motion Reference" intro banner, which is dropped per the design.

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/brand-kit/ComponentsSections.tsx
git commit -m "feat(brand-kit): add ComponentsSections component"
```

---

### Task 7: Create `AnimationsSections` (6 sections)

**Files:**
- Create: `components/brand-kit/AnimationsSections.tsx`

- [ ] **Step 1: Create the file scaffold**

```tsx
import {
  sectionStyle,
  sectionTitleStyle,
  sectionDescStyle,
  codeStyle,
} from "@/components/brand-kit/styles";

export function AnimationsSections() {
  return (
    <>
      {/* JSX inserted in step 2 */}
    </>
  );
}
```

- [ ] **Step 2: Insert the section JSX**

Copy these line ranges from `app/brand-kit/page.tsx`:

- Lines **964–1033** — `<section id="animated-hero-entrance" ...>`
- Lines **1036–1114** — `<section id="counting-stats" ...>`
- Lines **1117–1199** — `<section id="card-cascade" ...>`
- Lines **1202–1266** — `<section id="floating-skill-badges" ...>`
- Lines **1269–1366** — `<section id="pulsing-cta-block" ...>`
- Lines **1369–1464** — `<section id="marquee-ticker" ...>`

Add `className="brand-kit-section"` to each. **Do not** copy lines 1466–1506 ("Banner Components" intro banner).

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/brand-kit/AnimationsSections.tsx
git commit -m "feat(brand-kit): add AnimationsSections component"
```

---

### Task 8: Create `HeroSections` (14 sections)

**Files:**
- Create: `components/brand-kit/HeroSections.tsx`

This is the largest component (~3,000 lines). Contains 14 anchored sections and **three unanchored intro banners** to drop: "Phase 1" (~2604–2640), "Content Templates" (~3162–3200), and "Case Study Components" (~3734–3774).

- [ ] **Step 1: Create the file scaffold**

```tsx
import {
  sectionStyle,
  sectionTitleStyle,
  sectionDescStyle,
  codeStyle,
} from "@/components/brand-kit/styles";

export function HeroSections() {
  return (
    <>
      {/* JSX inserted in step 2 */}
    </>
  );
}
```

- [ ] **Step 2: Insert the section JSX**

Copy these line ranges from `app/brand-kit/page.tsx`, in order:

- Lines **1509–1776** — `<section id="terminal-card" ...>`
- Lines **1779–1941** — `<section id="stat-wall" ...>`
- Lines **1944–2146** — `<section id="the-stack" ...>`
- Lines **2149–2372** — `<section id="bridge-diagram" ...>`
- Lines **2375–2598** — `<section id="marquee-strip-enhanced" ...>`
- Lines **2643–2811** — `<section id="window-card" ...>`
- Lines **2814–2978** — `<section id="headshot-split" ...>`
- Lines **2981–3158** — `<section id="availability-badge" ...>`
- Lines **3203–3351** — `<section id="quote-block" ...>`
- Lines **3354–3550** — `<section id="split-comparison" ...>`
- Lines **3553–3732** — `<section id="social-card" ...>` (uses `{ ...sectionStyle, borderBottom: "none" }`)
- Lines **3777–4066** — `<section id="architecture-diagram" ...>`
- Lines **4069–4371** — `<section id="annotated-screenshot" ...>`
- Lines **4374–4529** — `<section id="process-timeline" ...>`

Add `className="brand-kit-section"` to each section. **Do not** copy the unanchored intro banners:
- Lines 2600–2640 ("Phase 1 / Site Components" banner)
- Lines 3160–3200 ("Content Templates / Content Creation Components" banner)
- Lines 3734–3774 ("Case Study Components" banner)

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/brand-kit/HeroSections.tsx
git commit -m "feat(brand-kit): add HeroSections component"
```

---

### Task 9: Create `DataSections` (7 sections)

**Files:**
- Create: `components/brand-kit/DataSections.tsx`

This component includes the Drilldown section, which imports `Drilldown` from `@/components/Drilldown`.

- [ ] **Step 1: Create the file scaffold**

```tsx
import { Drilldown } from "@/components/Drilldown";
import {
  sectionStyle,
  sectionTitleStyle,
  sectionDescStyle,
  codeStyle,
} from "@/components/brand-kit/styles";

export function DataSections() {
  return (
    <>
      {/* JSX inserted in step 2 */}
    </>
  );
}
```

- [ ] **Step 2: Insert the section JSX**

Copy these line ranges from `app/brand-kit/page.tsx`:

- Lines **4532–4751** — `<section id="score-progression" ...>`
- Lines **4754–4846** — `<section id="hero-metric" ...>`
- Lines **4849–5066** — `<section id="metric-tile" ...>`
- Lines **5069–5215** — `<section id="delta-tile" ...>`
- Lines **5218–5388** — `<section id="sparkline-bar-row" ...>` (uses `{ ...sectionStyle, borderBottom: "none" }`)
- Lines **5391–5432** — `<section id="code-block" ...>`
- Lines **5435–5486** — `<section id="drilldown-card" ...>`

Add `className="brand-kit-section"` to each.

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add components/brand-kit/DataSections.tsx
git commit -m "feat(brand-kit): add DataSections component"
```

---

### Task 10: Add `.brand-kit-section` scroll-margin rule

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add the CSS rule**

Find the existing `.prose-content h2, .prose-content h3 { scroll-margin-top: 89px; ... }` rule in `app/globals.css`. Below it (still inside `@layer components`), add:

```css
.brand-kit-section {
  scroll-margin-top: 145px;
}
```

The 145px offset = 65px main nav + ~50px sticky tab bar + ~30px breathing room.

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat(brand-kit): add scroll-margin for brand-kit sections"
```

---

### Task 11: Create `BrandKitSidebar` client wrapper

**Files:**
- Create: `components/brand-kit/BrandKitSidebar.tsx`

This wrapper reads the active slug from `usePathname()` and passes the matching items array to `BrandKitTOC`. Needed because `layout.tsx` is a server component and can't call `usePathname()` directly.

- [ ] **Step 1: Create the file**

```tsx
"use client";

import { usePathname } from "next/navigation";

import { BrandKitTOC } from "@/components/BrandKitTOC";
import { TOC_ITEMS_BY_TAB, type BrandKitTabSlug } from "@/components/brand-kit/tabs";

const VALID_SLUGS = new Set<BrandKitTabSlug>(["tokens", "components", "animations", "heroes", "data"]);

function getSlug(pathname: string | null): BrandKitTabSlug {
  const segment = pathname?.split("/")[2];
  return segment && VALID_SLUGS.has(segment as BrandKitTabSlug)
    ? (segment as BrandKitTabSlug)
    : "tokens";
}

export function BrandKitSidebar() {
  const pathname = usePathname();
  const slug = getSlug(pathname);
  return <BrandKitTOC items={TOC_ITEMS_BY_TAB[slug]} />;
}
```

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add components/brand-kit/BrandKitSidebar.tsx
git commit -m "feat(brand-kit): add BrandKitSidebar client wrapper"
```

---

### Task 12: Create `app/brand-kit/layout.tsx`

**Files:**
- Create: `app/brand-kit/layout.tsx`

This layout wraps all `/brand-kit/*` routes with the page header, sticky tab bar, and left sidebar TOC.

- [ ] **Step 1: Create the file**

```tsx
import type { ReactNode } from "react";

import { BrandKitTabs } from "@/components/brand-kit/BrandKitTabs";
import { BrandKitSidebar } from "@/components/brand-kit/BrandKitSidebar";

export default function BrandKitLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        className="px-6 lg:px-12"
      >
        <section
          style={{
            paddingTop: "clamp(80px, 10vw, 120px)",
            paddingBottom: "32px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "var(--color-secondary)",
              color: "#ffffff",
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "var(--radius-button)",
              marginBottom: "16px",
            }}
          >
            Design Reference
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-foreground)",
              margin: 0,
              marginBottom: "16px",
            }}
          >
            Brand Kit
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "var(--color-foreground)",
              opacity: 0.6,
              margin: 0,
              maxWidth: "640px",
            }}
          >
            Neubrutalist design system for kevinhu.fyi. Bold borders, offset
            shadows, vivid blue accents, warm off-white canvas. Playful yet
            professional. Use these tokens and patterns to create on-brand
            assets.
          </p>
        </section>
      </div>

      <BrandKitTabs />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "48px",
          alignItems: "flex-start",
        }}
        className="px-6 lg:px-12"
      >
        <aside className="desktop-only" style={{ width: "220px", flexShrink: 0 }}>
          <div style={{ position: "sticky", top: "145px" }}>
            <BrandKitSidebar />
          </div>
        </aside>

        <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
      </div>
    </main>
  );
}
```

- [ ] **Step 2: Lint**

Lint will still fail on `app/brand-kit/page.tsx` (old `groups` prop). Skip lint here.

- [ ] **Step 3: Commit**

```bash
git add app/brand-kit/layout.tsx
git commit -m "feat(brand-kit): add shared layout with header, tabs, sidebar"
```

---

### Task 13: Create five route `page.tsx` files

**Files:**
- Create: `app/brand-kit/tokens/page.tsx`
- Create: `app/brand-kit/components/page.tsx`
- Create: `app/brand-kit/animations/page.tsx`
- Create: `app/brand-kit/heroes/page.tsx`
- Create: `app/brand-kit/data/page.tsx`

- [ ] **Step 1: Create `app/brand-kit/tokens/page.tsx`**

```tsx
import type { Metadata } from "next";

import { TokensSections } from "@/components/brand-kit/TokensSections";

export const metadata: Metadata = {
  title: "Design Tokens — Brand Kit",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <TokensSections />;
}
```

- [ ] **Step 2: Create `app/brand-kit/components/page.tsx`**

```tsx
import type { Metadata } from "next";

import { ComponentsSections } from "@/components/brand-kit/ComponentsSections";

export const metadata: Metadata = {
  title: "Components — Brand Kit",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ComponentsSections />;
}
```

- [ ] **Step 3: Create `app/brand-kit/animations/page.tsx`**

```tsx
import type { Metadata } from "next";

import { AnimationsSections } from "@/components/brand-kit/AnimationsSections";

export const metadata: Metadata = {
  title: "Animations — Brand Kit",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AnimationsSections />;
}
```

- [ ] **Step 4: Create `app/brand-kit/heroes/page.tsx`**

```tsx
import type { Metadata } from "next";

import { HeroSections } from "@/components/brand-kit/HeroSections";

export const metadata: Metadata = {
  title: "Hero Sections — Brand Kit",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <HeroSections />;
}
```

- [ ] **Step 5: Create `app/brand-kit/data/page.tsx`**

```tsx
import type { Metadata } from "next";

import { DataSections } from "@/components/brand-kit/DataSections";

export const metadata: Metadata = {
  title: "Data & Metrics — Brand Kit",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <DataSections />;
}
```

- [ ] **Step 6: Lint**

Still fails on the legacy `app/brand-kit/page.tsx`. Skip.

- [ ] **Step 7: Commit**

```bash
git add app/brand-kit/tokens/page.tsx app/brand-kit/components/page.tsx app/brand-kit/animations/page.tsx app/brand-kit/heroes/page.tsx app/brand-kit/data/page.tsx
git commit -m "feat(brand-kit): add five tab route pages"
```

---

### Task 14: Replace `app/brand-kit/page.tsx` with redirect

**Files:**
- Modify: `app/brand-kit/page.tsx` (full replacement)

- [ ] **Step 1: Overwrite the file**

```tsx
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/brand-kit/tokens");
}
```

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: no errors. (All references to the old `groups` prop and removed data constants are now gone.)

- [ ] **Step 3: Commit**

```bash
git add app/brand-kit/page.tsx
git commit -m "refactor(brand-kit): redirect /brand-kit to /brand-kit/tokens"
```

---

### Task 15: Verify in browser

**Files:** none (manual verification)

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Verify routing and redirects**

Open the following URLs in a browser (viewport ≥ 1024px):

1. `http://localhost:3000/brand-kit` — should immediately redirect to `/brand-kit/tokens`
2. `http://localhost:3000/brand-kit/tokens` — Colors section visible, "Design Tokens" tab active (primary blue)
3. `http://localhost:3000/brand-kit/components` — Buttons section visible, "Components" tab active
4. `http://localhost:3000/brand-kit/animations` — Animated Hero Entrance visible, "Animations" tab active
5. `http://localhost:3000/brand-kit/heroes` — Terminal Card visible, "Hero Sections" tab active
6. `http://localhost:3000/brand-kit/data` — Score Progression visible, "Data & Metrics" tab active

- [ ] **Step 3: Verify tab interactions**

- Click each tab pill → URL updates, content swaps, scroll resets to top
- Hover an inactive tab → shadow grows (4px), tab nudges up-left
- Press an active tab → shadow collapses momentarily
- Scroll down → tab bar pins below the main site nav (no overlap, no jump)

- [ ] **Step 4: Verify sidebar TOC**

On `/brand-kit/heroes` (14 items, the longest list):
- Sidebar shows only Hero Sections items (no group label header above)
- Sidebar is sticky at `top: 145px`
- Sidebar scrolls independently if all 14 items don't fit (`max-height: calc(100vh - 165px)`)
- Click a TOC link → smooth scrolls to that section, link highlights as active
- Scroll the page → active link updates as sections cross the threshold
- Each section is offset by ~145px from the top of the viewport when scrolled into view (no overlap with tab bar)

- [ ] **Step 5: Verify mobile (viewport < 1024px)**

- Sidebar hidden via `.desktop-only`
- Tab bar still visible and functional
- Page header and section content reflow naturally
- Tab pills wrap to multiple rows if needed (5 pills, narrow screen)

- [ ] **Step 6: Verify intro banners are gone**

The original page had four "intro banner" sections that the design dropped. Confirm none of these appear on any tab:
- "Motion Reference / Animation & Motion"
- "Banner Components / Rich Banners"
- "Phase 1 / Site Components"
- "Content Templates / Content Creation Components"
- "Case Study Components"

- [ ] **Step 7: Production build**

```bash
npm run build
```

Expected: build succeeds, all five static routes generate (`/brand-kit/{tokens,components,animations,heroes,data}`).

- [ ] **Step 8: Final commit (if any cleanup was needed during verification)**

If steps 2–7 surface bugs that needed inline fixes, commit them with a message describing what was fixed. Otherwise this step is a no-op.

---

## Verification Summary

After all tasks: 5 routes, 1 redirect, 35 anchored sections preserved (each on its proper tab), 5 intro banners removed, lint clean, production build green, sidebar TOC + sticky tabs work on desktop, tabs alone work on mobile.
