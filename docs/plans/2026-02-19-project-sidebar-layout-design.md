# Design: Project Sidebar Layout

Date: 2026-02-19

## Overview

Replace the current project detail page with a documentation-hub style layout: a persistent left sidebar listing all projects, a center content area with YAML header info and MDX prose, and a right-side Table of Contents.

## Layout

3-column layout at `/projects/[slug]`:

| Column | Width | Contents |
|--------|-------|----------|
| Left sidebar | 256px, sticky | Flat project list, active item highlighted |
| Center content | flex (min-width: 0) | YAML header block + MDX prose |
| Right TOC | 240px, sticky | Existing `<TableOfContents>` component |

Mobile: both sidebars hidden, center content only with a back link.

## Architecture

Use `app/projects/layout.tsx` (Next.js App Router layout) so the sidebar persists across navigations without remounting.

- `app/projects/layout.tsx` — server component, fetches all projects, renders 3-column shell with left sidebar and right TOC slot via children prop pattern
- `components/ProjectSidebar.tsx` — client component (needs `usePathname()` for active highlighting), receives project list as props
- `app/projects/[slug]/page.tsx` — unchanged slug resolution, but simplified: just renders `<ProjectHeader>` + MDX prose (no TOC, no ProjectNavigation — sidebar replaces these)
- `components/TableOfContents.tsx` — moves into right column of layout (desktop only)

## Left Sidebar

- Lists all projects flat, sorted by `order` field
- Each item: project `title` (one line, truncated if needed)
- Active item: green left border + green text (`var(--color-primary)`)
- Sticky, top-aligned
- On mobile: hidden (or collapsible — start with hidden for simplicity)

## Center Content

Top block (from YAML frontmatter):
- `title` as `<h1>`
- `subtitle` as lead paragraph
- `tags` as pill chips
- `metrics` as the existing metrics bar

Below: MDX prose (existing `prose-content` styles)

Remove: `<ProjectNavigation>` (prev/next cards) — sidebar handles browsing.

## Right TOC Sidebar

- Existing `<TableOfContents>` component, unchanged
- Desktop only (hidden on mobile)
- Sticky

## Files Changed

- `app/projects/layout.tsx` — new
- `components/ProjectSidebar.tsx` — new
- `app/projects/[slug]/page.tsx` — simplified (remove ProjectNavigation, remove TOC; layout handles those)
- `app/globals.css` — add 3-column layout styles, sidebar styles
- Remove `components/ProjectNavigation.tsx` or leave unused
