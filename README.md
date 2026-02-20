# kevinhu.fyi

Personal portfolio site for Kevin Hu. Built to showcase project case studies and drive consulting/advisory conversations.

Live at [kevinhu.fyi](https://kevinhu.fyi).

<table><tr><td>

![Demo](public/demo.png)

</td></tr></table>

## Stack

- **Next.js 16** (App Router, statically generated)
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **MDX** for project case studies (`content/projects/`)
- Deployed on **Vercel**

## Dev

```bash
npm install
npm run dev    # localhost:3000
npm run build  # production build
npm run lint
```

## Adding a Project

Create a new `.mdx` file in `content/projects/` with this frontmatter:

```mdx
---
title: "Project Title"
slug: "project-slug"
subtitle: "One-line description"
description: "Meta description"
featured: true
order: 7
tags: ["Tag1", "Tag2"]
thumbnail: "/images/projects/project-slug.png"
metrics:
  - label: "Key Metric"
    value: "Result"
---

## The Problem
...
```

Then drop the thumbnail in `public/images/projects/`. No other config needed — the page generates automatically.
