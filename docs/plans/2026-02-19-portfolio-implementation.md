# kevinhu.fyi Portfolio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Use frontend-design:frontend-design skill when building components for high design quality.

**Goal:** Build a custom portfolio site for Kevin Hu with MDX-powered project case studies, a Duo/hog-inspired design system, and Vercel deployment.

**Architecture:** Next.js App Router with Tailwind CSS. MDX files in `content/projects/` provide structured project data (frontmatter) and case study content (body). Static generation at build time. Hybrid routing: single-page homepage + `/projects/[slug]` detail pages.

**Tech Stack:** Next.js 15, Tailwind CSS 4, TypeScript, MDX (via next-mdx-remote or @next/mdx), Google Fonts (Bricolage Grotesque + Plus Jakarta Sans), deployed on Vercel.

**Design doc:** `docs/plans/2026-02-19-portfolio-redesign-design.md`

---

### Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

**Step 1: Initialize Next.js with Tailwind**

Run:
```bash
cd /Users/kevinhu/Code/creator/kevinhu.fyi
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

Choose: App Router, no Turbopack, defaults for everything else.

**Step 2: Verify dev server starts**

Run: `npm run dev`
Expected: App loads at localhost:3000 with the default Next.js page.

**Step 3: Clean out default content**

Replace `app/page.tsx` with a minimal placeholder:

```tsx
export default function Home() {
  return (
    <main>
      <h1>kevinhu.fyi</h1>
    </main>
  );
}
```

Remove all default styles from `app/globals.css` except the Tailwind directives.

**Step 4: Commit**

```bash
git add -A
git commit -m "scaffold: initialize Next.js with Tailwind and TypeScript"
```

---

### Task 2: Design Tokens & Fonts

**Files:**
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`
- Modify: `app/layout.tsx`

**Step 1: Install Google Fonts**

In `app/layout.tsx`, import Bricolage Grotesque and Plus Jakarta Sans via `next/font/google`:

```tsx
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
```

Apply both font variables to the `<html>` or `<body>` element:
```tsx
<body className={`${display.variable} ${body.variable} font-body`}>
```

**Step 2: Configure Tailwind with design tokens**

In `tailwind.config.ts`, extend the theme:

```ts
theme: {
  extend: {
    fontFamily: {
      display: ["var(--font-display)", "sans-serif"],
      body: ["var(--font-body)", "sans-serif"],
    },
    colors: {
      background: "#FAF9F6",
      foreground: "#141414",
      primary: "#1CB0F6",
      "primary-hover": "#1490CC",
      secondary: "#22C55E",
      card: "#FFFFFF",
      muted: "#E5E5E5",
    },
    borderRadius: {
      card: "16px",
      container: "12px",
      button: "6px",
    },
    boxShadow: {
      brutal: "4px 4px 0px #141414",
      "brutal-sm": "2px 2px 0px #141414",
      "brutal-primary": "0 4px 0 #1490CC",
      "brutal-primary-hover": "0 2px 0 #1490CC",
      "brutal-gray": "0 4px 0 #C4C4C4",
      "brutal-gray-hover": "0 2px 0 #C4C4C4",
    },
  },
},
```

**Step 3: Set global styles in `app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-background text-foreground font-body;
  }

  h1, h2, h3, h4 {
    @apply font-display;
  }
}
```

**Step 4: Verify fonts render**

Update `app/page.tsx` to show both fonts:

```tsx
export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 py-12">
      <h1 className="text-[3rem] font-bold tracking-tight leading-tight">
        Hello, I'm Kevin
      </h1>
      <p className="text-lg mt-4">
        This paragraph uses Plus Jakarta Sans for body text.
      </p>
    </main>
  );
}
```

Run: `npm run dev` — verify Bricolage Grotesque on heading, Plus Jakarta Sans on paragraph.

**Step 5: Commit**

```bash
git add -A
git commit -m "style: add design tokens, fonts, and Tailwind theme"
```

---

### Task 3: Shared Button Component

**Files:**
- Create: `components/Button.tsx`

**Step 1: Build the Button component**

Implements the Duo-inspired tactile button with press-in effect:

```tsx
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type BaseProps = {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants = {
  primary:
    "bg-primary text-white border-2 border-foreground shadow-brutal-primary hover:shadow-brutal-primary-hover hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]",
  secondary:
    "bg-card text-foreground border-2 border-foreground shadow-brutal-gray hover:shadow-brutal-gray-hover hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]",
};

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-6 py-3 rounded-button font-display font-semibold text-sm transition-all duration-150 ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
```

**Step 2: Test visually**

Add buttons to `app/page.tsx` temporarily to verify press-in effect works:
```tsx
<Button>Book a Call</Button>
<Button variant="secondary">View Projects</Button>
```

Run: `npm run dev` — verify shadow compression + translateY on hover/click.

**Step 3: Commit**

```bash
git add components/Button.tsx
git commit -m "feat: add Button component with Duo-style press-in effect"
```

---

### Task 4: Nav Component

**Files:**
- Create: `components/Nav.tsx`
- Modify: `app/layout.tsx`

**Step 1: Build Nav**

Sticky top nav. Name/logo left, links right. Uses the Button component for the CTA.

```tsx
"use client";

import { useState } from "react";
import { Button } from "./Button";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b-2 border-muted">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-display font-bold text-lg">
          Kevin Hu
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#projects" className="font-body text-sm hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#about" className="font-body text-sm hover:text-primary transition-colors">
            About
          </a>
          <Button href="#contact" variant="primary">
            Book a Call
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* Simple hamburger icon — 3 lines */}
          <div className="space-y-1.5">
            <div className={`w-6 h-0.5 bg-foreground transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-foreground transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t-2 border-muted px-6 py-4 flex flex-col gap-4 bg-background">
          <a href="#projects" className="font-body text-sm" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#about" className="font-body text-sm" onClick={() => setMenuOpen(false)}>About</a>
          <Button href="#contact" variant="primary" onClick={() => setMenuOpen(false)}>Book a Call</Button>
        </div>
      )}
    </nav>
  );
}
```

**Step 2: Add Nav to root layout**

In `app/layout.tsx`, import and render `<Nav />` above `{children}`.

**Step 3: Verify**

Run: `npm run dev` — sticky nav visible, hamburger works on mobile viewport, links scroll smoothly.

**Step 4: Commit**

```bash
git add components/Nav.tsx app/layout.tsx
git commit -m "feat: add sticky Nav with mobile hamburger"
```

---

### Task 5: Footer Component

**Files:**
- Create: `components/Footer.tsx`
- Modify: `app/layout.tsx`

**Step 1: Build Footer**

Minimal footer with LinkedIn, email, domain.

```tsx
export function Footer() {
  return (
    <footer className="border-t-2 border-muted mt-24">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-sm text-foreground/60">
          Kevin Hu &middot; kevinhu.fyi
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/kevinhu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-foreground/60 hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:kevin@kevinhu.fyi"
            className="font-body text-sm text-foreground/60 hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Add Footer to root layout**

In `app/layout.tsx`, render `<Footer />` below `{children}`.

**Step 3: Verify and commit**

```bash
git add components/Footer.tsx app/layout.tsx
git commit -m "feat: add Footer component"
```

---

### Task 6: Hero Component

**Files:**
- Create: `components/Hero.tsx`
- Add: `public/images/headshot.png` (user must provide their illustrated headshot)

**Step 1: Build Hero**

Left: headline, bio, CTA button. Right: headshot image. Uses `next/image`.

Refer to the design doc for copy. The bio text from the current Notion page:
- "I'm an MBA who codes."
- "My background is in enterprise software, data analytics, and 0->1 products. After my MBA at UC BerkeleyHaas, I raised venture capital to build a platform for mentorship programs. Now, I'm building AI, advising startups, and creating content to promote AI literacy."

Use the Button component for "Book a Call" CTA.

**Step 2: Verify layout**

Run: `npm run dev` — hero renders with proper two-column layout on desktop, stacks on mobile. Headshot uses a placeholder until the real image is added.

**Step 3: Commit**

```bash
git add components/Hero.tsx public/images/
git commit -m "feat: add Hero component with headshot and CTA"
```

---

### Task 7: Skills Component

**Files:**
- Create: `components/Skills.tsx`

**Step 1: Build Skills**

A simple horizontal flex/grid of skill pills. Each pill: white bg, 2px border, rounded-button, bold text. No filters.

Skills list (from current portfolio): AirTable, n8n, Google Sheets, Google Analytics, Power BI, Lovable.dev, Notion, Alteryx.

Consider subtle icons next to each skill name if easily available, otherwise text pills are fine.

**Step 2: Verify and commit**

```bash
git add components/Skills.tsx
git commit -m "feat: add Skills pill grid component"
```

---

### Task 8: MDX Content System

**Files:**
- Create: `lib/projects.ts`
- Create: `content/projects/agent-factory.mdx` (one sample project)
- Modify: `package.json` (install dependencies)

**Step 1: Install MDX dependencies**

```bash
npm install gray-matter next-mdx-remote
```

`gray-matter` parses frontmatter. `next-mdx-remote` renders MDX in server components.

**Step 2: Create `lib/projects.ts`**

This module provides:
- `getProjects()` — returns all projects sorted by `order`, with frontmatter parsed
- `getProjectBySlug(slug)` — returns a single project with parsed MDX content
- `getProjectSlugs()` — returns all slugs for static path generation

TypeScript types for the project frontmatter:

```ts
export type ProjectMeta = {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  featured: boolean;
  order: number;
  tags: string[];
  thumbnail: string;
  metrics: { label: string; value: string }[];
};
```

Use `fs.readFileSync` + `path.join(process.cwd(), "content/projects")` to read MDX files. Parse frontmatter with `gray-matter`.

**Step 3: Create one sample project**

Create `content/projects/agent-factory.mdx` with the frontmatter structure from the design doc and placeholder case study body (Problem / Solution / Results sections).

**Step 4: Verify**

Create a temporary test in `app/page.tsx` that calls `getProjects()` and renders the title. Confirm it reads the MDX file.

**Step 5: Commit**

```bash
git add lib/projects.ts content/projects/agent-factory.mdx package.json package-lock.json
git commit -m "feat: add MDX content system with project parser"
```

---

### Task 9: ProjectCard Component

**Files:**
- Create: `components/ProjectCard.tsx`

**Step 1: Build ProjectCard**

Receives a `ProjectMeta` object. Renders:
- Thumbnail image (full width at top of card)
- Title (Bricolage Grotesque, bold)
- Subtitle
- 1-2 metric badges (green `#22C55E` background pills)
- Tags as small pills
- Links to `/projects/[slug]`

Card styling: white bg, 2px border, 16px radius, brutal shadow. Hover: subtle lift (`-translate-y-1`) + shadow deepens.

Consider the hog_ OS-window-style touch: a decorative macOS-style title bar at the top of each card with three colored dots (red/yellow/green) as a fun visual flourish.

**Step 2: Verify with sample data and commit**

```bash
git add components/ProjectCard.tsx
git commit -m "feat: add ProjectCard with OS-window style and hover effects"
```

---

### Task 10: ProjectGrid & Homepage Assembly

**Files:**
- Create: `components/ProjectGrid.tsx`
- Create: `components/ContactSection.tsx`
- Modify: `app/page.tsx`

**Step 1: Build ProjectGrid**

Takes an array of `ProjectMeta`, renders a 2-column CSS grid of `ProjectCard`s. Section title "Featured Work". "View All Projects" link at bottom if there are non-featured projects.

**Step 2: Build ContactSection**

"Let's Work Together" heading + Cal.com embed. Use an `<iframe>` or Cal.com's embed script. For now, use a placeholder with a "Book a Call" button linking to the user's Cal.com URL.

**Step 3: Assemble homepage**

Wire up `app/page.tsx`:

```tsx
import { getProjects } from "@/lib/projects";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ContactSection } from "@/components/ContactSection";

export default async function Home() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      <Hero />
      <Skills />
      <ProjectGrid projects={featured} />
      <ContactSection />
    </main>
  );
}
```

**Step 4: Verify full homepage flow**

Run: `npm run dev` — all sections render in order with proper spacing. Nav sticks, footer shows.

**Step 5: Commit**

```bash
git add components/ProjectGrid.tsx components/ContactSection.tsx app/page.tsx
git commit -m "feat: assemble homepage with all sections"
```

---

### Task 11: Project Detail Page

**Files:**
- Create: `app/projects/[slug]/page.tsx`
- Create: `components/TableOfContents.tsx`
- Create: `components/ProjectHeader.tsx`
- Create: `components/ProjectNavigation.tsx`

**Step 1: Build TableOfContents**

Client component. Receives an array of `{ id: string; text: string }` headings. Renders a sticky sidebar with links. Uses `IntersectionObserver` to highlight the active section on scroll. On mobile (below `lg` breakpoint), renders as a collapsible dropdown at the top instead.

Style with the hog_ explorer-sidebar feel: clean list with a subtle active indicator (left border or background highlight in primary color).

**Step 2: Build ProjectHeader**

Renders the project hero banner: title, subtitle, tags, metrics bar. Back link "← Back to all projects" linking to `/#projects`.

**Step 3: Build ProjectNavigation**

Previous/Next project links at the bottom of the page.

**Step 4: Build the detail page**

`app/projects/[slug]/page.tsx`:

- Use `generateStaticParams` to pre-generate all project pages from `getProjectSlugs()`
- Fetch project data with `getProjectBySlug(slug)`
- Render MDX body using `next-mdx-remote` (or `@next/mdx`)
- Extract h2 headings from the MDX content for the TOC
- Layout: `flex` container with sticky TOC on left, content on right

**Step 5: Verify**

Navigate to `/projects/agent-factory` — should show the full case study with working TOC sidebar. Scroll and confirm TOC highlights update.

**Step 6: Commit**

```bash
git add app/projects/ components/TableOfContents.tsx components/ProjectHeader.tsx components/ProjectNavigation.tsx
git commit -m "feat: add project detail page with sidebar TOC"
```

---

### Task 12: Content Migration — All Projects

**Files:**
- Create: `content/projects/cares-act-data.mdx`
- Create: `content/projects/public-sector-crm.mdx`
- Create: `content/projects/mentor-enrollment.mdx`
- Create: `content/projects/peer-mentorship.mdx`
- Create: `content/projects/cybersecurity-seo.mdx`
- Add: project thumbnail images to `public/images/projects/`

**Step 1: Create MDX files for each project**

Use the project info visible in the current Notion portfolio screenshot. Each file follows the established frontmatter structure. For the case study body, write placeholder Problem/Solution/Results sections based on visible info — the user will refine the copy later.

Projects to create (from the screenshot):
1. **Agent Factory** — already done in Task 8
2. **Public Sector CRM** — "APIs, Apps and Agencies: Transforming Public Sector Services" — launched CRM for govt agency with 2000+ employees
3. **CARES Act Data** — "$400M CARES Act Data Solution" — 20k accounts, $400M economic opportunity, 10k hours saved
4. **Mentor Enrollment** — "Automating Mentor Enrollment" at Big Brothers Big Sisters — 60-70 inquiries → 13 days, 70% of volunteers
5. **Peer Mentorship** — "Peer Mentoring at Scale" — UC Irvine matching platform, +20% retention, +40% completion
6. **Cybersecurity SEO** — "Scaling Cybersecurity SEO with AI" — 300+ vendor pages, 40% page 1 rankings, 500+ keywords

**Step 2: Verify all projects render on homepage and have working detail pages**

**Step 3: Commit**

```bash
git add content/projects/ public/images/projects/
git commit -m "content: add all 6 project case studies"
```

---

### Task 13: Responsive Polish & Final QA

**Files:**
- Modify: various component files as needed

**Step 1: Test all breakpoints**

Check at 375px (mobile), 768px (tablet), 1024px (small desktop), 1440px (large desktop):
- Nav hamburger works on mobile
- Hero stacks vertically on mobile
- Project grid goes to 1 column on mobile
- TOC sidebar collapses to dropdown on mobile/tablet
- All text is readable, nothing overflows

**Step 2: Add smooth scroll behavior**

In `globals.css`:
```css
html {
  scroll-behavior: smooth;
}
```

**Step 3: Add page metadata**

In `app/layout.tsx`, set proper `<title>`, `<meta description>`, and Open Graph tags. Also add per-project metadata using `generateMetadata` in the project detail page.

**Step 4: Commit**

```bash
git add -A
git commit -m "polish: responsive fixes, smooth scroll, metadata"
```

---

### Task 14: Vercel Deployment Setup

**Step 1: Verify build succeeds**

Run:
```bash
npm run build
```

Expected: Clean build with all static pages generated. No errors.

**Step 2: Deploy to Vercel**

```bash
npx vercel
```

Follow prompts to link to Vercel account and deploy.

**Step 3: Verify production URL works**

Check all pages, navigation, images load correctly on the deployed URL.

**Step 4: Commit any build fixes**

```bash
git add -A
git commit -m "deploy: vercel configuration and build fixes"
```

---

## Notes for the Implementing Agent

- **Images:** The user's headshot and project infographic images need to be manually placed in `public/images/`. Use placeholder images during development if originals aren't available.
- **Cal.com URL:** The user needs to provide their actual Cal.com or Calendly link. Use a placeholder `href` until then.
- **LinkedIn URL:** Confirm the exact LinkedIn profile URL with the user.
- **Copy refinement:** Project case study copy is placeholder — user will refine after the structure is in place.
- **Use `@frontend-design:frontend-design`** when building visual components for high design quality and distinctive styling. Don't settle for generic-looking output.
- **Design reference files:** Check `temp_inspiration/duo_tokens.md` and `temp_inspiration/hog_vibe.md` for interaction and layout patterns when implementing buttons, cards, and containers.
