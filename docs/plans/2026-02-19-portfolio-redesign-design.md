# Portfolio Redesign: kevinhu.fyi

## Overview

Rebuild Kevin Hu's portfolio from a Notion page into a custom Next.js site. Primary goal: showcase projects with rich case studies. Secondary: drive calls/contact. Deployed on Vercel.

## Architecture

- **Stack:** Next.js (App Router) + Tailwind CSS, deployed on Vercel
- **Content:** MDX files with frontmatter for projects — no database, no CMS
- **Routing:** Hybrid single-page homepage + `/projects/[slug]` detail pages
- **Static generation:** All pages built at build time

### Project Structure

```
kevinhu.fyi/
├── app/
│   ├── layout.tsx              # Root layout (nav, footer, fonts)
│   ├── page.tsx                # Homepage
│   └── projects/
│       └── [slug]/
│           └── page.tsx        # Project detail page
├── content/
│   └── projects/
│       ├── agent-factory.mdx
│       ├── cares-act-data.mdx
│       ├── public-sector-crm.mdx
│       ├── mentor-enrollment.mdx
│       ├── peer-mentorship.mdx
│       └── cybersecurity-seo.mdx
├── components/
│   ├── Hero.tsx
│   ├── Skills.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   ├── ContactSection.tsx
│   ├── Nav.tsx
│   └── Footer.tsx
├── lib/
│   └── projects.ts             # MDX parsing + frontmatter helpers
├── public/
│   └── images/
│       ├── headshot.png
│       └── projects/
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Content System (MDX)

Each project is a `.mdx` file in `content/projects/`:

```mdx
---
title: "Agent Factory"
slug: "agent-factory"
subtitle: "Create, Orchestrate, and Evaluate Agents"
description: "Working with AI where work already happens"
featured: true
order: 1
tags: ["AI", "Notion", "Agents"]
thumbnail: "/images/projects/agent-factory-thumb.png"
metrics:
  - label: "Key Result"
    value: "some metric"
---

## The Problem
...

## The Solution
...

## The Results
...
```

- Frontmatter holds card-level data (title, description, tags, thumbnail, metrics, featured flag, sort order)
- Body holds the full case study in markdown with embedded images
- `featured` flag controls homepage grid vs. "all projects"
- `metrics` array for key numbers on cards
- Adding a new project = create `.mdx` file + drop images in `/public`

## Design System

### Inspiration

A mashup of three reference systems:
- **Duolingo (duo_):** Cohesive bold color identity, tactile button physics with bottom shadows and press-in effects, bouncy micro-interactions. Primary inspiration for color strategy and interaction design.
- **Hedgehog OS (hog_):** Techy-yet-clean aesthetic, warm beige canvas, OS-window-style containers, explorer sidebar pattern. Inspiration for layout containers and the warm technical feel.
- **Neubrutalist (neu_):** Typography pairing (Bricolage Grotesque + Plus Jakarta Sans), bold borders, solid offset shadows. Inspiration for type and border treatment.

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#FAF9F6` | Warm cream page canvas |
| Foreground | `#141414` | Primary text |
| Primary | `#1CB0F6` | CTAs, links, active states, brand identity |
| Secondary | `#22C55E` | Success states, metrics highlights, secondary CTAs |
| Card | `#FFFFFF` | Card surfaces |
| Muted/border | `#E5E5E5` | Borders, dividers, disabled states |

No alternating pastel section backgrounds. Visual rhythm comes from layout, typography, and spacing.

### Typography

- **Display:** `'Bricolage Grotesque', sans-serif` — headings, hero, project titles
- **Body:** `'Plus Jakarta Sans', sans-serif` — paragraphs, UI text
- Hero: 3rem / 700 / -0.02em letter-spacing
- H1: 2.25rem / 700 / -0.02em
- H2: 1.875rem / 600
- Body: 1rem / 400 / 1.6 line-height

### Borders & Shapes

- 2px solid borders on cards and buttons
- Radius: 16px (cards/large), 12px (containers), 6px (buttons/badges)
- Solid offset shadows: `4px 4px 0px #141414` (standard), `0 4px 0 #1490CC` (primary button bottom)
- No blurry drop shadows

### Buttons & Interactions

- **Primary button:** `#1CB0F6` fill, 2px dark border, solid bottom shadow `0 4px 0 #1490CC`
- **Secondary button:** white fill, 2px border, gray bottom shadow
- **Press-in effect:** hover/click compresses shadow to `0 2px 0` + `translateY(2px)`
- 150ms transitions for micro-interactions

### Responsive

- Desktop: 2-column project grid, sidebar TOC on detail pages
- Tablet: 2-column grid, TOC collapses to top dropdown
- Mobile: single column, TOC as collapsible dropdown, nav becomes hamburger

## Page Layouts

### Homepage

Top to bottom:

1. **Sticky Nav** — Name/logo left, links right: "Projects", "About", "Book a Call". Subtle, doesn't compete with content.
2. **Hero** — Left: headline ("Hello, I'm Kevin"), short bio, "Book a Call" button. Right: illustrated headshot. Generous breathing room.
3. **Skills** — Simple horizontal grid of skill icons/pills. No filters, no categories. Clean "tech stack" strip.
4. **Projects** — "Featured Work" with 2-column card grid. Each card: thumbnail, title, subtitle, 1-2 metric badges, tags. Hover: subtle lift + shadow. Cards link to `/projects/[slug]`. "All Projects" link at bottom.
5. **Contact** — "Let's Work Together" heading + embedded Cal.com/Calendly scheduling widget.
6. **Footer** — LinkedIn, email, domain. Minimal.

### Project Detail Page (`/projects/[slug]`)

- **Layout:** Sticky sidebar TOC (left, ~30%) + content area (right, ~70%)
- **Hero banner:** project title, subtitle, tags, key metrics bar
- **Thumbnail/infographic** displayed prominently
- **Case study body:** rendered from MDX — Problem, Solution, Results with embedded screenshots
- **Sidebar TOC:** auto-generated from h2 headings, highlights active section on scroll, collapses to dropdown on mobile
- **Back link:** "Back to all projects" at top
- **Prev/Next navigation** at bottom

## Techy Touches (from hog_ inspiration)

- OS-window-style containers for project cards or content sections (macOS title bar with traffic light dots as decorative element)
- Explorer-style sidebar feel on project detail pages
- Warm radial gradient subtle background treatment on canvas
