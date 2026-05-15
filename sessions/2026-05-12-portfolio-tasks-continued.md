# CONTINUE — kevinhu.fyi portfolio for the Quantifind send

Handoff doc for the next session. Picks up from 2026-05-12 evening. Target send to John Stockton (Quantifind co-founder): **Sunday 2026-05-17 evening**. Audience is John (primary) and Adam (CPO, secondary read). For the underlying spec, see `docs/working/2026-05-12-case-study-spine.md` (canonical) and `docs/working/2026-05-12-next-pieces-and-90day.md` (working notes — partially stale, see "Stale docs" below).

## Where things stand

### What's shipped

**Information architecture:**

- New frontmatter fields: `status` (`active` / `unlisted` / `inactive`), `eyebrow`, `role`
- New `lib/projects.ts` helpers: `getListedProjects()`, `getRelatedProjects(slug, limit)`
- `ProjectHeader.tsx` renders eyebrow + role above title
- `RelatedProjects.tsx` (new) — auto-generated tag-overlap strip at bottom of each `/projects/[slug]`
- `app/projects/[slug]/page.tsx` builds via `getProjectSlugs()` (excludes `inactive`); `app/page.tsx`, `app/layout.tsx`, `app/projects/layout.tsx`, `app/projects/page.tsx` all use `getListedProjects()`

**Homepage flow (new order):** `Hero → WhatIBuild → ProjectGrid → Capabilities → ContactSection`

- `Hero.tsx` — green availability pill *"Open to full-time roles"* with pulsing dot. Bio rewritten to lead with *"I help teams work with AI where work already happens"* (WOO doc's own line).
- `WhatIBuild.tsx` (new) — 4 system archetypes between Hero and Featured: AI eval infrastructure · Voice & telephony AI · AI workflow systems · Data + cross-org coordination
- `Capabilities.tsx` (new, replaces `Skills.tsx`) — 4 categorized buckets: AI infrastructure / Production AI stacks / Data engineering / Workflow & tooling. Pill headers were user-customized to filled primary-color chips.
- `ContactSection.tsx` — centered, max-width 720px (fixed the banner-ad proportions). Green availability pill + headline + WOO-anchored subtitle (*"I work on AI where work already happens — …"*) + single Book-a-Call CTA. User customized the pill to be filled primary-color rather than text-only.

**Case studies (post-rewrites):**

| Order | Slug | Status | Spine | Notes |
|---|---|---|---|---|
| 1 | `personal-ai-studio` | active, featured | B (thesis → evidence) | New — multi-repo workspace, 5 named patterns, drill-down with `tree` output, 5 image slots |
| 2 | `cybersecurity-seo` | active, featured | A | Rewritten as *"Cyberse — Eval Infrastructure"* — eval rubrics, score 60→90 decompression, 3 image slots, drill-down |
| 2 | `public-sector-crm` | active, featured | — | **Conflict: order 2 collides with Cyberse.** Still using old `## The Problem / ## The Solution / ## The Results` shape. Should drop from featured or rewrite. |
| 3 | `cares-act-data` | active, featured | A | Spine doc quality bar. 3 inline images now (added pipeline-branches + dashboard slots). |
| 4 | `mentor-enrollment` | active, featured | A | **Re-rewritten** to WOO-canonical SMS + killed-voice version. WOO breakdown is the first body section. Links to `vapi-voice-agent` GitHub repo in "What I'd do differently." |
| 5 | `peer-mentorship` | active, not featured | — | Still old shape. Untouched. |
| 1 | `agent-factory` | **inactive** | — | Returns 404. User marked inactive. |
| 99 | `cares-act-data-old` | **unlisted** | — | Reachable by URL only. |

**Positioning thread (WOO):** *"AI where work already happens"* now appears in Hero bio → BBBS case study (WOO scoping section) → CTA subtitle. Three coordinated touchpoints.

### Settings / config

- `.claude/settings.local.json` — added `/Users/kevinhu/Code/workspaces/career-camp` as `additionalDirectories` so interview prep / story-bank is readable from this session
- `CLAUDE.md` — added "Related repos" section explaining the career-camp link
- Old `CONTINUE-2026-05-12.md` superseded by this file. Still on disk as a historical record; don't act from it.

## What's next (prioritized)

### P0 — must do before Sunday 5/17

1. **Resolve order conflict.** `public-sector-crm` and `cybersecurity-seo` are both `order: 2`. Decision needed: drop `public-sector-crm` from featured (handoff's original recommendation) OR rewrite it Spine A and assign a new order. Quick path: set `featured: false`, leave `order: 2` for Cyberse.
2. **Update `WhatIBuild.tsx` card 2.** Currently *"Voice & telephony AI · Agents in trust-sensitive contexts"* — body still implies voice-first. Per the new BBBS canonical, change eyebrow to *"Voice & SMS agents"* and body to mention channel-fit and variant-testing. One-paragraph edit.
3. **Write zep-mcp case study.** Confirmed: yes, Spine A, new featured piece. The strongest John-specific signal not yet on the site — knowledge graphs are John's R3 unprompted topic, 11 stars + 5 forks = third-party validation, the *"burned it down and rewrote it"* narrative ships the immune-system pattern as a public artifact. Suggested order: insert at 2, shift Cyberse to 3, CARES to 4, BBBS to 5. Length ~800 words. Source: `gh api repos/kev-hu/zep-mcp/readme` — README is operator-toned already; can lift much of the narrative.
4. **Draft the 90-day Google Doc** — *"First 90 Days at Quantifind."* Outline already in `docs/working/2026-05-12-next-pieces-and-90day.md` §5. Structured around John's clone-list (admin/onboarding, token budget, internal dashboards, skills sharing, immune system, internal marketing). Length 800–1200 words. This is the actual closer; not on the site.
5. **Image capture.** ~17 placeholder image paths across the featured pieces will render broken-image icons until PNGs land. Priority order from working doc §4 — Cyberse score distribution is the highest John-signal artifact. Minimum-viable set for Sunday: top 3–5 from that list.

### P1 — high value if time allows

6. **Re-rewrite `public-sector-crm` Spine A** if it's staying featured. Currently old "Problem / Solution / Results" shape. Less urgent if it's getting unfeatured.
7. **Stale-doc cleanup.** `docs/working/2026-05-12-next-pieces-and-90day.md` §1 (BBBS outline) still pre-dates the WOO resolution. Either update to match shipped version, or add a header noting it's superseded.
8. **Headshot / Hero image** — verify `/images/headshot.png` exists and reads well at the new layout.
9. **Send-email draft.** Working doc has the outline; first-pass copy needed before Sunday.

### P2 — optional

10. **Loom embed in Personal AI Studio** — 5-min walkthrough of `content.main` + `databank` + Obsidian-as-IDE. Highest signal-per-minute artifact for John specifically.
11. **`/projects` index page** — currently redirects to first project. Could become a tag-filtered grid (already have tag overlap logic in `getRelatedProjects` worth reusing).
12. **Image-placeholder pass on `peer-mentorship`** if it's staying live.

## Parallel session notes — homepage card + badge polish

Logged separately because this ran in a different agent context at the same time as the work above. Focus was visual/IA polish on the homepage, not new case-study content. Build + lint pass clean.

### Shipped this session

- **`ProjectCard` redesign.** Dropped the OS-window title bar + traffic lights. New shape: thin banner (`21/7` default, `32/9` flagship aspect) → eyebrow badge → title → 1-sentence subtitle → proof chips (built from `metrics` as `${value} ${label}`) → role line + arrow. Per the LLM brief from earlier this session: less "colorful thumbnail," more "credible case-study preview."
- **`ProjectGrid` — flagship + smaller cards.** First featured project (lowest `order`) renders full-width as flagship; rest flow into a `minmax(360px)` auto-fit grid (so 3-up on wide desktop, not 2-up). Currently `personal-ai-studio` is the flagship by virtue of `order: 1`. If you want CARES or Cyberse leading instead, swap orders.
- **Subtitle voice migration.** Moved all subtitles from the dense `metric · metric · insight` shape (which duplicated the proof chips) into noun-phrase 1-liners that describe *what was built*. Files touched: `cares-act-data`, `personal-ai-studio`, `cybersecurity-seo`, `agent-factory` (inactive but updated for consistency), `public-sector-crm`, `peer-mentorship`. The dense data still lives in `metrics` and renders as stat cards on the detail page.
- **Brand-kit badge unification.** Applied the brand-kit `Eyebrow / Badge` spec (solid fill, white display-font text, `var(--radius-button)`, padding `5px 12px–14px`, no border, no shadow) to:
  - ProjectCard eyebrows (`--color-primary`)
  - `Capabilities` category titles (`--color-primary`) — was thin blue uppercase text, now a proper filled pill
  - Hero "Open to full-time roles" (`--color-secondary`) — was green text + external dot, now a green pill with the pulsing white dot inside
  - ContactSection "Open to full-time roles" — same treatment
- **Card chip style aligned to brand-kit Window Card spec.** `1px solid var(--color-muted)`, `6px` radius (rounded rect, not full pill), weight 500. Lighter, more "tech tag" feel — closer to the Window Card reference in `/brand-kit`.
- **Frontmatter additions.** `eyebrow` + `role` filled out across all 7 projects (was already on the type per the main session; I added the values).

### Still pending from this session

1. **`mentor-enrollment` subtitle.** Still in the old dense-metric format (`"70% inbound calls cut · 13 days → 15 minutes · voice variant tested, then killed"`). The file was rewritten mid-session to the SMS + killed-voice canonical, which made my earlier "voice agent" draft factually wrong. Two drafts in noun-phrase shape sitting in the conversation; user hadn't picked one yet:
   - *"A tool-calling SMS agent for mentor enrollment qualification and scheduling, with a voice variant tested and killed by the data."*
   - *"An SMS agent handling qualification, routing, and scheduling for mentor enrollment — voice variant tested and killed."*
2. **Browser eyes on the homepage.** Not done. Build is clean, but card layout, chip wrapping at mid widths, and the new badges' contrast haven't been verified visually. Cheapest next step.
3. **`ProjectHeader` eyebrow.** Detail-page header still renders the eyebrow as bare blue uppercase text — inconsistent with the homepage badges now. Should get the same brand-kit `Eyebrow / Badge` treatment for site-wide coherence.
4. **Real banner illustrations.** The LLM design brief asked for abstract system diagrams as the thin banner visuals (e.g. CARES: regional inputs → calculator → Power BI dashboard; Cyberse: scraped pages → RAG/eval → score → marketplace listing). Currently still the placeholder PNG thumbnails. This is the bigger creative lift the brief asked for — likely SVG node-and-arrow diagrams with one shared visual grammar across all cards.

### Cross-check vs. existing doc

- The "Key decisions" line says *"CTA / Hero pill is filled primary-color."* As-shipped, the Hero and Contact pills use `--color-secondary` (green), and the Capabilities pills use `--color-primary` (blue). Could be that "primary-color" was used loosely to mean "a brand fill color," or could be a doc/code drift from an earlier state. Worth a 30-second user confirmation that the current green-availability + blue-category split is correct.
- The "What's shipped" section says `ProjectHeader.tsx` renders eyebrow + role above title — true. But the eyebrow there is still bare colored text, not the badge treatment now used everywhere else. See pending item #3.

## Stale docs

- `CONTINUE-2026-05-12.md` (old) — **superseded by this file.** Earlier handoff doc, written before the current session. Key details that have changed: BBBS canonical is now SMS + killed voice (not voice-only), Personal AI Studio uses Spine B (not Spine A), Cyberse is rewritten and live as the canonical name, status field exists, RelatedProjects + WhatIBuild + Capabilities now exist. Spine doc supersedes it; this CONTINUE supersedes both for current state.
- `docs/working/2026-05-12-next-pieces-and-90day.md` — §1 (BBBS outline) is pre-WOO and stale; §4 (image plan) and §5 (90-day Google Doc outline) are still load-bearing. Don't read §1 as source-of-truth; read the actual `mentor-enrollment.mdx` instead.

## Key decisions to remember

- **Spine doc beats CONTINUE for case study shape.** `docs/working/2026-05-12-case-study-spine.md` is canonical: Spine A (most pieces) = Hook → Judgment → Shipped → Proved → Carries → optional Drill-down. Spine B (Personal AI Studio only) = Thesis → Architecture → Patterns → Live examples → What's next.
- **BBBS canonical = SMS + killed voice.** Per `~/Documents/BRAIN/Frameworks/fw-woo.md`. Voice was tested in parallel and killed when the data showed it spiked call volume from frustrated users. The kill move is the operator signal, not the channel choice.
- **WOO is the positioning thread.** Hero → BBBS case study → CTA. Don't fragment it.
- **Cyberse named explicitly in body, slug stays `cybersecurity-seo`.** User chose option A in the earlier question — named in writing — but slug stayed for stability and link-preview anonymity.
- **vapi-voice-agent is an inline link from BBBS, not a separate case study.** Combined "voice + telephony" piece was rejected — depth-per-project beats breadth narrative for John.
- **zep-mcp is YES but not yet written.** Strongest single piece left to add. 11 stars + 5 forks, knowledge graph terrain, John-relevant.
- **GraphiteQ stays unnamed** in public case studies. Reader projects the relevance; we don't write competitor product names on the public site.
- **CTA / Hero pill is filled primary-color** (user customization after the initial green-text version). Don't revert to text-only.
- **Public-facing positioning is hire-me-framed, not consultant-framed.** "Open to full-time roles" / "exploring full-time AI enablement and product roles." Avoid "advisor," "consultant," "for hire," "workflow you want to turn into a system."

## Send plan (target Sunday 5/17 evening)

Email to John with 3–4 links + 1 private doc:

- `kevinhu.fyi/projects/personal-ai-studio` — *"the answer to your question about repo structure and how I actually build"*
- `kevinhu.fyi/projects/cybersecurity-seo` — *"the AI eval and calibration work I started telling you about"* (named Cyberse in the body)
- `kevinhu.fyi/projects/mentor-enrollment` — *"the SMS agent + the voice variant I killed when the data said to"*
- (optional, if zep-mcp ships in time) `kevinhu.fyi/projects/zep-mcp` — *"open-source MCP for knowledge-graph memory"*
- Private Google Doc: *First 90 Days at Quantifind*

CARES Act stays on-site for second-read scan but isn't in the email — the AI pieces lead.

## Source files to read for context (next session)

- This file
- `docs/working/2026-05-12-case-study-spine.md` (case study templates)
- `docs/working/2026-05-12-next-pieces-and-90day.md` (working notes — §1 stale, §4–§5 current)
- `~/Documents/BRAIN/Frameworks/fw-woo.md` (WOO framework, source of positioning thread)
- `~/Code/workspaces/career-camp/transcripts/raw/2026-05-07-quantifind-john-stockton-cleaned-v2.md` (R3 transcript)
- `~/Code/workspaces/career-camp/active/quantifind/` (Quantifind context — JD, people, rounds, narrative)
- For zep-mcp: `gh api repos/kev-hu/zep-mcp/readme | jq -r .content | base64 -d`
- For vapi: `gh api repos/kev-hu/vapi-voice-agent/readme | jq -r .content | base64 -d`
