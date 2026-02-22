# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (uses Turbopack)
npm run build    # Production build (required before deploy)
npm run lint     # ESLint
npm run start    # Serve production build locally
```

No test suite. Lint with `npm run lint` before committing.

## Architecture

**Stack:** Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript, deployed to Vercel. All pages statically generated at build time — no server-side rendering, no database.

### Content System

Projects live as MDX files in `content/projects/`. Each file has YAML frontmatter (title, slug, subtitle, description, featured, order, tags, thumbnail, metrics array) plus a markdown case study body.

`lib/projects.ts` provides three functions consumed throughout the app:
- `getProjectSlugs()` — reads filenames from `content/projects/`
- `getProjects()` — parses all frontmatter, returns sorted `ProjectMeta[]` (sorted by `order` ascending)
- `getProjectBySlug(slug)` — returns full `Project` including raw MDX content string

Adding a project = create `.mdx` in `content/projects/` + add thumbnail to `public/images/projects/`. The `featured` flag controls homepage display; `order` controls sort.

### Routing

- `/` — Homepage (`app/page.tsx`): Hero → Skills → featured ProjectGrid → ContactSection
- `/projects` — Redirects immediately to the first project by `order` (no index/list page)
- `/projects/[slug]` — Project detail, statically generated from MDX via `next-mdx-remote/rsc`

### Project Detail Layout (3-column docs-hub pattern)

`app/projects/layout.tsx` wraps all `/projects/*` routes with a left sidebar (`ProjectSidebar` — client component using `usePathname` for active state). The individual page renders a right-side TOC (`TableOfContents`). Both sidebars are hidden on mobile via the `.desktop-only` CSS class.

Headings for the TOC are extracted from raw MDX content by `lib/extractHeadings.ts` (regex-based, h2/h3 only). `rehype-slug` ensures rendered heading IDs match.

### Nav Context-Awareness

`Nav` is a client component that receives all `projects` from the root layout. It adapts based on `usePathname()`:
- On homepage: shows anchor links (`#projects`, `#about`) + "Book a Call" → `#contact`
- On `/projects/*`: hides anchor links; "Book a Call" → `#project-cta`; mobile drawer shows project list instead of nav links

### Styling

Tailwind v4 with `@theme` block in `globals.css` defining all design tokens. **No `tailwind.config.ts`** — configuration is CSS-first.

Design system tokens (all in `globals.css`):
- Fonts: `--font-display` (Bricolage Grotesque), `--font-body` (Plus Jakarta Sans)
- Colors: `--color-primary` (#1CB0F6), `--color-primary-hover` (#1490cc), `--color-secondary` (#22c55e), `--color-background` (#FAF9F6), `--color-foreground` (#141414), `--color-card` (#ffffff), `--color-muted` (#e5e5e5)
- Shadows: `--shadow-brutal` (4px 4px 0 #141414), `--shadow-brutal-sm`, `--shadow-brutal-primary`, `--shadow-brutal-gray` — neubrutalist offset style
- Radius: `--radius-card` (16px), `--radius-container` (12px), `--radius-button` (6px)

**Styling pattern:** Layout, spacing, and color properties are applied via inline `style` props directly on elements. Interactive states (hover, active, focus) and named utility classes are defined in `globals.css` `@layer components`. Tailwind utility classes are used for responsive visibility (e.g. `hidden md:flex`).

Buttons use data attributes (`[data-btn-primary]`, `[data-btn-secondary]`) for press-in interaction styles defined in `globals.css`.

**`.desktop-only` class:** Use this instead of `hidden lg:block` — the Tailwind utility has a dev/prod discrepancy between Turbopack and webpack/PostCSS. `.desktop-only` in `globals.css` is the safe alternative.

**`scroll-margin-top: 89px`** is hardcoded on `.prose-content h2/h3` to offset the sticky nav (65px height + 24px padding).

### Font Loading

Fonts declared in `app/layout.tsx` via `next/font/google`, injected as CSS variables (`--font-bricolage`, `--font-jakarta`) on the `<html>` element. The `@theme` block maps these to semantic names.
