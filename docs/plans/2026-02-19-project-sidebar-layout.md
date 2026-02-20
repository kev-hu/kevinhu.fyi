# Project Sidebar Layout Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the current project detail page with a 3-column documentation-hub layout: persistent left sidebar (all projects), center MDX content with YAML header, right sticky TOC.

**Architecture:** Add `app/projects/layout.tsx` (server component) that fetches all projects and renders the left sidebar + content area wrapper. The `[slug]/page.tsx` renders the inner content: article + right TOC as a flex row. This gives true sidebar persistence across navigations (Next.js App Router layout guarantee) while keeping the TOC co-located with the content that generates it.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind v4 (CSS custom properties), `gray-matter` (YAML frontmatter), `next-mdx-remote` (MDX), `rehype-slug` (heading IDs)

---

## DOM Structure (end state)

```
<body>
  <Nav />                              ← sticky, ~64px, global layout
  <div.projects-layout>                ← flex row, from projects/layout.tsx
    <aside.projects-sidebar>           ← 256px, border-right, sticky scroll
      <ProjectSidebar />               ← client component, usePathname()
    </aside>
    <div.projects-content-area>        ← flex: 1, min-width: 0
      <div.project-page-inner>         ← flex row, from [slug]/page.tsx
        <article.project-article>      ← flex: 1, prose content
          <ProjectHeader />            ← title, subtitle, tags, metrics
          <MDXRemote />               ← MDX prose
        </article>
        <aside.project-toc-right>      ← 240px, desktop only, sticky
          <TableOfContents />
        </aside>
      </div>
    </div>
  </div>
  <Footer />                           ← global layout
</body>
```

---

## Task 1: Create `ProjectSidebar` client component

**Files:**
- Create: `components/ProjectSidebar.tsx`

**Step 1: Create the file**

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ProjectMeta } from "@/lib/projects";

export function ProjectSidebar({ projects }: { projects: ProjectMeta[] }) {
  const pathname = usePathname();

  return (
    <nav style={{ padding: "24px 0" }}>
      <div
        style={{
          padding: "0 20px 16px",
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-foreground)",
          opacity: 0.45,
        }}
      >
        Projects
      </div>
      {projects.map((project) => {
        const isActive = pathname === `/projects/${project.slug}`;
        return (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="sidebar-item"
            style={{
              display: "block",
              padding: "8px 20px",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.875rem",
              fontWeight: isActive ? 700 : 500,
              color: isActive ? "var(--color-primary)" : "var(--color-foreground)",
              textDecoration: "none",
              borderLeft: isActive
                ? "3px solid var(--color-primary)"
                : "3px solid transparent",
              backgroundColor: isActive ? "rgba(28, 176, 246, 0.06)" : "transparent",
              transition: "color 150ms, background-color 150ms, border-color 150ms",
              lineHeight: 1.4,
            }}
          >
            {project.title}
          </Link>
        );
      })}
    </nav>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors for this file

**Step 3: Commit**

```bash
git add components/ProjectSidebar.tsx
git commit -m "feat: add ProjectSidebar client component with active-item highlighting"
```

---

## Task 2: Create `app/projects/layout.tsx`

**Files:**
- Create: `app/projects/layout.tsx`

**Step 1: Create the layout**

```tsx
import { getProjects } from "@/lib/projects";
import { ProjectSidebar } from "@/components/ProjectSidebar";

export default async function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = getProjects();

  return (
    <div className="projects-layout">
      <aside className="projects-sidebar">
        <div className="projects-sidebar-sticky">
          <ProjectSidebar projects={projects} />
        </div>
      </aside>
      <div className="projects-content-area">
        {children}
      </div>
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add app/projects/layout.tsx
git commit -m "feat: add projects layout with persistent left sidebar"
```

---

## Task 3: Add CSS for the 3-column layout

**Files:**
- Modify: `app/globals.css`

**Step 1: Replace the existing project page layout CSS block**

Find this section in `globals.css` (starts around line 105):
```css
/* Project page layout */
.project-body {
  margin-top: 48px;
  display: flex;
  gap: 48px;
}
.project-toc-sidebar {
  display: none;
  width: 256px;
  flex-shrink: 0;
}
.project-toc-sticky {
  position: sticky;
  top: 96px;
}
.project-main {
  flex: 1;
  min-width: 0;
}
.project-toc-mobile {
  display: block;
  margin-bottom: 32px;
}

@media (min-width: 1024px) {
  .project-page-container {
    padding-left: 48px;
    padding-right: 48px;
  }
  .project-toc-sidebar {
    display: block;
  }
  .project-toc-mobile {
    display: none;
  }
}
```

Replace the entire block (and the `.project-page-container` media query) with:

```css
/* ── Projects layout (left sidebar + content + right TOC) ── */
.projects-layout {
  display: flex;
  min-height: calc(100vh - 65px);
  border-top: 2px solid var(--color-muted);
}
.projects-sidebar {
  display: none;
  width: 256px;
  flex-shrink: 0;
  border-right: 2px solid var(--color-muted);
}
.projects-sidebar-sticky {
  position: sticky;
  top: 65px;
  height: calc(100vh - 65px);
  overflow-y: auto;
}
.projects-content-area {
  flex: 1;
  min-width: 0;
}

/* Project page inner: article + right TOC */
.project-page-inner {
  display: flex;
  gap: 48px;
  padding: 48px 32px;
  max-width: 1100px;
}
.project-article {
  flex: 1;
  min-width: 0;
}
.project-toc-right {
  display: none;
  width: 240px;
  flex-shrink: 0;
}
.project-toc-sticky {
  position: sticky;
  top: 89px;
}

/* Sidebar hover */
.sidebar-item:hover {
  color: var(--color-primary);
  background-color: rgba(28, 176, 246, 0.04);
}

@media (min-width: 1024px) {
  .projects-sidebar {
    display: block;
  }
  .project-toc-right {
    display: block;
  }
}
```

Note: `65px` is the sticky nav height (~64px). Adjust if it measures differently.

**Step 2: Verify build**

Run: `npm run build`
Expected: compiles with no errors (existing page will still work, just using new class names after Task 4)

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "style: add 3-column projects layout CSS"
```

---

## Task 4: Rewrite `app/projects/[slug]/page.tsx`

**Files:**
- Modify: `app/projects/[slug]/page.tsx`

**Step 1: Rewrite the page component**

Replace the entire file with:

```tsx
import { getProjectBySlug, getProjectSlugs, getProjects } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { extractHeadings } from "@/lib/extractHeadings";
import { TableOfContents } from "@/components/TableOfContents";
import { ProjectHeader } from "@/components/ProjectHeader";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    return {
      title: project.title,
      description: project.description,
    };
  } catch {
    return { title: "Project | Kevin Hu" };
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project;
  try {
    project = getProjectBySlug(slug);
  } catch {
    notFound();
  }

  const headings = extractHeadings(project.content);

  return (
    <div className="project-page-inner">
      {/* Main article */}
      <article className="project-article">
        <ProjectHeader project={project} />
        <div className="prose-content" style={{ marginTop: "40px" }}>
          <MDXRemote
            source={project.content}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeSlug],
              },
            }}
          />
        </div>
      </article>

      {/* Right TOC — desktop only */}
      <aside className="project-toc-right">
        <div className="project-toc-sticky">
          <TableOfContents headings={headings} />
        </div>
      </aside>
    </div>
  );
}
```

**Step 2: Verify build**

Run: `npm run build`
Expected: clean build, no TypeScript errors

**Step 3: Verify in browser**

Run: `npm run dev`
Navigate to any `/projects/[slug]` URL. Verify:
- Left sidebar visible on desktop (≥1024px), hidden on mobile
- Active project highlighted in sidebar with blue border + text
- Center shows title, subtitle, tags, metrics, then MDX prose
- Right TOC visible on desktop, hidden on mobile
- Clicking a different project in sidebar navigates and updates active item

**Step 4: Commit**

```bash
git add app/projects/[slug]/page.tsx
git commit -m "feat: redesign project detail page with 3-column docs-hub layout"
```

---

## Task 5: Clean up removed layout class references

**Files:**
- Modify: `app/globals.css` (verify no orphaned classes)

The old classes `.project-body`, `.project-toc-sidebar`, `.project-toc-mobile`, `.project-main`, `.project-page-container` are no longer used. They were replaced in Task 3. Confirm they are gone from the CSS and no component references them.

**Step 1: Search for orphaned class references**

Search for `.project-body`, `.project-toc-sidebar`, `.project-toc-mobile`, `.project-main`, `.project-page-container` in all files under `app/` and `components/`. None should be found (they were removed in Task 3 and 4).

**Step 2: Commit cleanup if any orphans found**

```bash
git add -A
git commit -m "chore: remove unused project layout class references"
```

---

## Task 6: Final QA pass

**Step 1: Production build**

Run: `npm run build`
Expected: exits 0, no TypeScript errors, no missing imports

**Step 2: Check mobile**

Run `npm run dev`, resize browser to <1024px. Verify:
- Left sidebar hidden
- Right TOC hidden
- Content readable full-width
- No horizontal scroll

**Step 3: Check sidebar scrolling**

Navigate to a project. Scroll the main content past the fold. Verify the sidebar stays fixed (sticky) and scrolls independently if it has many items.

**Step 4: Check nav highlight**

Click two different projects in the sidebar. Verify the active highlight moves correctly on each navigation.

**Step 5: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: QA fixes for project sidebar layout"
```
