# Brand Kit TOC — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a sticky, grouped sidebar table of contents to the brand-kit page so developers can navigate 35+ sections quickly.

**Architecture:** A new `BrandKitTOC` client component holds the grouped nav data and scroll-spy logic. `app/brand-kit/page.tsx` gains `id` attributes on every `<section>` and is wrapped in a 2-column flex layout (220px sidebar | main content). Reuses existing `.toc-link` / `.toc-link.active` CSS classes from `globals.css`.

**Tech Stack:** Next.js 15 App Router, TypeScript, React, Tailwind (`.desktop-only` class), inline styles (project convention)

---

### Task 1: Create `BrandKitTOC` client component

**Files:**
- Create: `components/BrandKitTOC.tsx`

- [ ] **Step 1: Create the component file**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

type TOCItem  = { id: string; text: string };
type TOCGroup = { label: string; items: TOCItem[] };

export function BrandKitTOC({ groups }: { groups: TOCGroup[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const allItems = groups.flatMap((g) => g.items);

  useEffect(() => {
    if (allItems.length === 0) return;

    const els: HTMLElement[] = [];
    for (const { id } of allItems) {
      const el = document.getElementById(id);
      if (el) els.push(el);
    }
    if (els.length === 0) return;

    const handle = () => {
      let best: HTMLElement | null = null;
      let bestDist = Infinity;
      for (const el of els) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          const dist = Math.abs(rect.top);
          if (dist < bestDist) { bestDist = dist; best = el; }
        }
      }
      setActiveId(best ? best.id : "");
    };

    observerRef.current = new IntersectionObserver(handle, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    });
    for (const el of els) observerRef.current.observe(el);
    window.addEventListener("scroll", handle, { passive: true });
    handle();

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handle);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <div
      style={{
        overflowY: "auto",
        maxHeight: "calc(100vh - 120px)",
        paddingRight: "8px",
      }}
    >
      {groups.map((group, i) => (
        <div key={group.label} style={{ marginTop: i === 0 ? 0 : 20 }}>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(20, 20, 20, 0.5)",
              margin: 0,
              marginBottom: "6px",
            }}
          >
            {group.label}
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {group.items.map(({ id, text }) => (
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
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Lint**

```bash
npm run lint
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add components/BrandKitTOC.tsx
git commit -m "feat(brand-kit): add BrandKitTOC client component"
```

---

### Task 2: Add `id` attributes to all sections in `page.tsx`

**Files:**
- Modify: `app/brand-kit/page.tsx`

The file is large (~5400 lines). Each change is adding `id="..."` to an existing `<section style={sectionStyle}>` tag. Use search-and-replace carefully — `sectionStyle` is shared so you must add the id to the correct section by finding the h2 that follows it.

- [ ] **Step 1: Add ids to Design Token sections**

Find and replace each of the following. The pattern is `<section style={sectionStyle}>` immediately before the matching `<h2>`.

Replace line ~223:
```tsx
// Before:
<section style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Colors</h2>

// After:
<section id="colors" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Colors</h2>
```

Replace line ~278:
```tsx
// Before:
<section style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Typography</h2>

// After:
<section id="typography" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Typography</h2>
```

Replace line ~461:
```tsx
// Before:
<section style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Shadows &amp; Borders</h2>

// After:
<section id="shadows-borders" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Shadows &amp; Borders</h2>
```

Replace line ~511:
```tsx
// Before:
<section style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Border Radius</h2>

// After:
<section id="border-radius" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Border Radius</h2>
```

- [ ] **Step 2: Add ids to Component sections**

```tsx
// Buttons (~551):
<section id="buttons" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Buttons</h2>

// Cards (~621):
<section id="cards" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Cards</h2>

// Skill Pills (~743):
<section id="skill-pills" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Skill Pills</h2>

// Layout Patterns (~797):
<section id="layout-patterns" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Layout Patterns</h2>
```

- [ ] **Step 3: Add ids to Animation sections**

```tsx
// Animated Hero Entrance (~891):
<section id="animated-hero-entrance" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Animated Hero Entrance</h2>

// Counting Stats (~963):
<section id="counting-stats" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Counting Stats</h2>

// Card Cascade (~1044):
<section id="card-cascade" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Card Cascade</h2>

// Floating Skill Badges (~1129):
<section id="floating-skill-badges" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Floating Skill Badges</h2>

// Pulsing CTA Block (~1196):
<section id="pulsing-cta-block" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Pulsing CTA Block</h2>

// Marquee / Ticker (~1296):
<section id="marquee-ticker" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Marquee / Ticker</h2>
```

- [ ] **Step 4: Add ids to Hero Section sections**

```tsx
// The Terminal Card (~1436):
<section id="terminal-card" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Terminal Card</h2>

// The Stat Wall (~1707):
<section id="stat-wall" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Stat Wall</h2>

// The Stack (~1872):
<section id="the-stack" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Stack</h2>

// The Bridge Diagram (~2077):
<section id="bridge-diagram" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Bridge Diagram</h2>

// Marquee Strip Enhanced (~2303):
<section id="marquee-strip-enhanced" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Marquee Strip (Enhanced)</h2>

// The Window Card (~2571):
<section id="window-card" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Window Card</h2>

// The Headshot Split (~2742):
<section id="headshot-split" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Headshot Split</h2>

// The Availability Badge (~2909):
<section id="availability-badge" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Availability Badge</h2>

// The Quote Block (~3131):
<section id="quote-block" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Quote Block</h2>

// The Split Comparison (~3282):
<section id="split-comparison" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Split Comparison</h2>

// The Social Card (~3481):
<section id="social-card" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Social Card</h2>

// The Architecture Diagram (~3705):
<section id="architecture-diagram" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Architecture Diagram</h2>

// The Annotated Screenshot (~3997):
<section id="annotated-screenshot" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Annotated Screenshot</h2>

// The Process Timeline (~4302):
<section id="process-timeline" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Process Timeline</h2>
```

- [ ] **Step 5: Add ids to Data & Metrics sections**

```tsx
// The Score Progression (~4460):
<section id="score-progression" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Score Progression</h2>

// The Hero Metric (~4682):
<section id="hero-metric" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Hero Metric</h2>

// The Metric Tile (~4777):
<section id="metric-tile" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Metric Tile</h2>

// The Delta Tile (~4997):
<section id="delta-tile" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>The Delta Tile</h2>

// Sparkline & Bar Row (~5146):
<section id="sparkline-bar-row" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Sparkline &amp; Bar Row</h2>

// Code Block (~5319):
<section id="code-block" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Code Block (Markdown)</h2>

// Drill-down Card (~5363):
<section id="drilldown-card" style={sectionStyle}>
  <h2 style={sectionTitleStyle}>Drill-down Card (MDX)</h2>
```

- [ ] **Step 6: Lint**

```bash
npm run lint
```

Expected: no errors

- [ ] **Step 7: Commit**

```bash
git add app/brand-kit/page.tsx
git commit -m "feat(brand-kit): add section ids for TOC anchors"
```

---

### Task 3: Wire up 2-column layout in `page.tsx`

**Files:**
- Modify: `app/brand-kit/page.tsx`

- [ ] **Step 1: Import `BrandKitTOC` and define the groups data**

At the top of the file, after the existing imports, add:

```tsx
import { BrandKitTOC } from "@/components/BrandKitTOC";

const TOC_GROUPS = [
  {
    label: "Design Tokens",
    items: [
      { id: "colors",           text: "Colors" },
      { id: "typography",       text: "Typography" },
      { id: "shadows-borders",  text: "Shadows & Borders" },
      { id: "border-radius",    text: "Border Radius" },
    ],
  },
  {
    label: "Components",
    items: [
      { id: "buttons",          text: "Buttons" },
      { id: "cards",            text: "Cards" },
      { id: "skill-pills",      text: "Skill Pills" },
      { id: "layout-patterns",  text: "Layout Patterns" },
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
  },
  {
    label: "Data & Metrics",
    items: [
      { id: "score-progression", text: "Score Progression" },
      { id: "hero-metric",       text: "Hero Metric" },
      { id: "metric-tile",       text: "Metric Tile" },
      { id: "delta-tile",        text: "Delta Tile" },
      { id: "sparkline-bar-row", text: "Sparkline & Bar Row" },
      { id: "code-block",        text: "Code Block" },
      { id: "drilldown-card",    text: "Drill-down Card" },
    ],
  },
];
```

- [ ] **Step 2: Wrap the page return in a 2-column layout**

In `BrandKitPage`, the current return is:

```tsx
return (
  <main>
    <div
      style={{ maxWidth: "1200px", margin: "0 auto" }}
      className="px-6 lg:px-12"
    >
      {/* ... all sections ... */}
    </div>
  </main>
);
```

Replace with:

```tsx
return (
  <main>
    <div
      style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "flex-start" }}
      className="px-6 lg:px-12"
    >
      {/* Sticky TOC sidebar — desktop only */}
      <aside className="desktop-only" style={{ width: "220px", flexShrink: 0 }}>
        <div style={{ position: "sticky", top: "89px" }}>
          <BrandKitTOC groups={TOC_GROUPS} />
        </div>
      </aside>

      {/* Main content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* ... all existing sections unchanged ... */}
      </div>
    </div>
  </main>
);
```

The existing inner `<div style={{ maxWidth: "1200px", ... }}>` becomes the outer flex container. All existing `<section>` elements move inside the new inner `<div style={{ flex: 1, minWidth: 0 }}>`.

- [ ] **Step 3: Lint**

```bash
npm run lint
```

Expected: no errors

- [ ] **Step 4: Start dev server and verify visually**

```bash
npm run dev
```

Open http://localhost:3000/brand-kit in a browser (1024px+ wide viewport).

Check:
- Left sidebar shows all 5 groups with section links
- Sidebar stays sticky as you scroll
- Clicking a link smooth-scrolls to the correct section
- Active link highlights as sections enter view
- Main content is not affected on mobile (sidebar hidden below 1024px)

- [ ] **Step 5: Commit**

```bash
git add app/brand-kit/page.tsx
git commit -m "feat(brand-kit): add sticky grouped TOC sidebar"
```
