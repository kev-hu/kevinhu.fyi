# CONTINUE-2026-05-12 — Quantifind portfolio upgrade

Handoff doc for a fresh Claude Code session to pick up where 2026-05-12 left off.

## Why this work exists

Kevin is in process with **Quantifind** for an internal-AI-enablement role being scoped by co-founder **John Stockton**. After R3 on 2026-05-08, John replied to Kevin's thank-you with: *"Work samples / 'portfolio' would be great. I believe Adam (product head) is going to reach out for the next chat and we'll go from there."*

Adam emailed 2026-05-12 to schedule early next week. Kevin offered Tues 5/19 / Wed 5/20 / Thurs 5/21 PT, awaiting Adam's pick.

**Deliverable target:** upgraded portfolio in Adam's hands before the Adam call. Soft deadline **Sunday 2026-05-17 evening**.

## Decision: site IS the portfolio

Instead of producing a separate PDF/Doc, we're **upgrading kevinhu.fyi to be the portfolio**, plus one private Google Doc addendum ("First 90 Days") that's Quantifind-specific.

Reasoning: (a) demonstrates "I build continuously," not "I made a deck for you" — operator vs. consultant signal, (b) same upgrade serves Adam + the offsite team + future companies, (c) the MDX-from-repo architecture is itself the artifact John asked to see in the R3 call.

User decided 2026-05-12 to **iterate directly on `content/projects/`** rather than the parallel `/projects-v2/` route we scaffolded earlier. The `content/projects-v2/` folder was deleted.

**Cleanup thread:** `app/projects-test/` (3 files) and `lib/projects-test.ts` exist as orphan scaffold from the v2 attempt. Confirm with Kevin whether to delete or repurpose as a sandbox before any production deploy.

## What John actually wants — from the R3 transcript

Source: `career-camp/transcripts/raw/2026-05-07-quantifind-john-stockton-cleaned-v2.md`
Coaching summary: `career-camp/transcripts/summary/2026-05-07-quantifind-r3-aie.md`

**John's clone-list (lines 127–141 of the v2 transcript):**
- Admin/onboarding for AI tools (Claude Code, Codex, Windsurf) in a compliance-meeting way
- Token + cloud budget management — "don't be a stupid company that sets a bonfire of tokens"
- Internal dashboards / deployment surfaces for prototypes
- Skills sharing, modernizing the Confluence-era knowledge transfer
- Disciplined tool selection — "let's not let the tail wag the dog"
- Marketing the function internally (offsite session planned in Monterey next week)
- Feedback loops / "immune system" — 20% defensive attitude
- Education and QA work — *"things that you're not even generating code, you're just generating visibility on things that need to be fixed"*

**Quotable John-isms to weave into the pack (use 2–3 max, more is sycophantic):**
- *"Scale with AI"* (line 15)
- *"The same stuff you use to train humans should be the same stuff you use to train machines"* (line 137) — directly the Obsidian + skills.md philosophy
- *"20% attitude towards responsible development"* (line 153)
- *"Generating visibility on things that need to be fixed"* (line 145)

**Kevin's lines that landed and should be the portfolio spine:**
- *"Scaling the human decision-making instead of replacing it"* — John responded *"yeah, the parts that actually matter."* This is the single highest-resonance line. Should be the AI thesis spine.
- *"Redirect builder energy internally so I'm not starting over every time"* — the iron-sharpens-iron answer at lines 19–23. The Why-Quantifind answer.
- *"Metaphorical lessons.md in every project"* — landed at line 155.
- *Pushed back on John's give-fish framing* — Kevin disagreed with John in real-time at line 11 and John engaged thoughtfully. Founder-radar fit credibility already earned.

## What John literally said about the current site

Line 33 of v2 transcript: *"I saw your website and obviously you didn't have like the actual things, there was more kind of just summaries of each of the projects."*

Line 47: *"tell me a few levels deeper into the repo structure and how you actually code."*

**The portfolio email is John re-asking for the artifact he probed for in the call.**

## Site review — three structural problems

### 1. Site positions Kevin as advisor, not operator
- Hero: *"Now, I'm building AI, advising startups, and creating content to promote AI literacy."*
- ContactSection: *"need a technical advisor, or just want to connect — grab 30 minutes."*
- Implicit invitation: book a discovery call. Wrong frame for a full-time hire.

### 2. Most Quantifind-relevant case study is buried
- `cybersecurity-seo.mdx` has `featured: false`, `order: 6`. Not on the homepage.
- The Cyberse story is the headline AI-credibility piece for this entire interview process.
- And when found, it's thin: anonymized ("a cybersecurity marketplace"), missing the score compression diagnosis, missing weekly practitioner calibration, missing the *"agent's outputs were the PSEO content"* structural insight.

### 3. The thing John explicitly asked about doesn't exist
- No Personal AI Studio / How I Build case study.
- After the R3 call, John has no way to see Kevin's actual repo structure / Obsidian-as-IDE / multi-workspace architecture.
- Same applies to Adam.

## What's working on the site (don't touch)

- Domain, type system, neubrutalist visual identity — clean, not amateur
- **`cares-act-data.mdx` is the best-written case study** — real diagram, named the coordination problem (not the math), concrete scale numbers. Use as the quality bar for rewrites.
- MDX + frontmatter architecture is itself an "I build" proof point — referenceable inside the Personal AI Studio piece
- 5 case studies exist as a skeleton to build on

## Move list — priority order

### P0 — must do before Sunday 5/17

**A. Add `content/projects/personal-ai-studio.mdx`** — featured, `order: 1`. The literal artifact answer to John's #1 in-call question. Should include:
- Workspace architecture diagram (career-camp + content.main + databank + kj-skills as a multi-repo system)
- Real repo tree screenshot
- Obsidian-as-IDE in screenshots
- Explicit callback to *"same stuff you use to train humans should be the same stuff you use to train machines"* — kj-skills + MEMORY.md is literally this
- Lessons.md / feedback-loop as "immune system"
- Stack honestly: BigQuery, Vercel, ElevenLabs, Twilio, local LLMs for voice. **Note: Kevin has Azure certs + past Azure work — when he said "no cloud" in the R3 call he meant personal self-hosted projects only. Do NOT frame this as a "cloud gap" to disarm. Surface Azure where relevant.** See `career-camp/.../memory/user_cloud_background.md`.

**B. Rewrite `cybersecurity-seo.mdx` into "Cyberse — Eval Infrastructure"**, set `featured: true`, `order: 2`. Add the depth missing:
- The 5 rubric criteria
- Score compression diagnosis (3-4 range clustering)
- What 53% → 92% actually measures
- Weekly practitioner calibration cadence
- The *"agent's outputs were the PSEO content"* insight as the structural payoff
- Thesis line: *"I build evaluation infrastructure before launch, not after."*

**C. Fix hero copy in `components/Hero.tsx`.** Replace *"building AI, advising startups, and creating content to promote AI literacy"* with operator language. Suggested starting point:

> "I build AI tools and workflows for teams in regulated, high-stakes industries. Currently exploring full-time AI enablement and product roles."

**D. Fix `components/ContactSection.tsx` copy.** "technical advisor" → "next teammate." Soft-pivot to dual-purpose, not advisory-only.

**E. Reorder featured projects:**
- 1: Personal AI Studio (new)
- 2: Cyberse Eval Infra (rewritten)
- 3: CARES Act Data (RSM Innovation Lab — keep as-is, strongest existing piece)
- 4: Mentor Enrollment (BBBS voice agent — AI in trust-sensitive context, John-relevant)
- Drop `public-sector-crm` to non-featured

### P1 — high leverage if time allows

**F. Update Skills section in `components/Skills.tsx`.** Drop or de-emphasize: OpenClaw, Lovable, generic BI tools. Add: Anthropic/OpenAI APIs, MCP, eval rubrics, RAG/grounding, LLM observability, agent orchestration. Current list signals automator; target list signals AI product builder.

**G. Refresh `agent-factory.mdx`.** Weakest existing case study — too abstract. Either delete or add specifics: which 10+ agents, what they did, one concrete moment the eval framework caught something.

### P2 — optional

**H.** Loom embed inside Personal AI Studio page (5-min screen tour through `content.main` + `databank` + Obsidian-as-IDE). Highest signal-per-minute for John specifically.

**I.** Sticky line in nav or hero: *"Currently exploring AI enablement roles in the Bay Area."*

## The 90-day Google Doc (separate from site)

Quantifind-specific, **not on the site**. Structured around John's clone-list verbatim (admin/onboarding, budget mgmt, internal dashboards, skills sharing, immune system, internal marketing). This is the de-facto job spec Kevin is offering John — line 169 of v2 transcript: *"I haven't done the kind of, you know, job kit work — what are we actually looking for here? It's more discovering them."*

Stakes: this is the highest-leverage artifact in the entire send, because the role doesn't have a spec yet. Give it real estate equal to any single case study (1.5–2 pages).

## Send plan

**Email 1 — short ack, within 24h of John's note:**
> "Thanks — let me put together a couple pieces that show the actual things, not just the summaries. I'll send by Sunday evening."

**Email 2 — Sunday 5/17 evening, three links + one private doc:**
- `kevinhu.fyi/projects/personal-ai-studio` — *"the answer to your question about repo structure and how I actually build"*
- `kevinhu.fyi/projects/cybersecurity-seo` (or renamed slug) — *"the AI eval and calibration work I started telling you about"*
- `kevinhu.fyi/projects/cares-act-data` — *"the RSM Innovation Lab project — the closest shape to what you described"*
- Private Google Doc: *"First 90 Days at Quantifind"* — structured around John's clone-list

## Audience weighting

90/10 John / Adam. John is the primary reader; Adam reads it second through John's framing. Optimize for John, make sure nothing undermines for Adam. R3 v2 transcript line 167–169 makes John's primary-reader status explicit ("weird and on me and non-traditional," "you're one of the first people").

## Recruiting state to remember

- Salary discussed: 150–180, John non-committal ("for some things you can get away with much lower," upside on top)
- Location: John wants MWF in Palo Alto office. Kevin verbally agreed.
- Citizenship: yes.
- Timeline: "we're not trying to solve this with a stalling — we're starting." Adam call → other interviews → no offers yet from anyone else on John's side.

## What got done this session (2026-05-12)

- Read all Quantifind active/ context + R3 raw + R3 cleaned + R3 v2 + R3 summary
- Reviewed kevinhu.fyi site end-to-end (hero, skills, contact, all 7 case studies)
- Identified the 3 structural problems above
- Built the P0/P1/P2 move list
- Scaffolded a `/projects-v2/` parallel route — **abandoned by Kevin**, who decided to iterate on `/projects/` directly. Leftover orphans: `app/projects-test/`, `lib/projects-test.ts`. Confirm with Kevin whether to delete.
- Saved memory: `user_cloud_background.md` — Kevin has Azure certs + past Azure work; "no cloud" in R3 meant personal self-hosted only

## Source files for the next session to read

In `kevinhu.fyi`:
- `components/Hero.tsx` — to edit hero copy
- `components/ContactSection.tsx` — to edit CTA copy
- `components/Skills.tsx` — to update skill pills
- `content/projects/cybersecurity-seo.mdx` — to rewrite into Cyberse Eval Infra
- `content/projects/agent-factory.mdx` — to either delete or beef up
- `content/projects/cares-act-data.mdx` — reference quality bar (don't touch)
- `lib/projects.ts` — understand the frontmatter contract before adding new MDX

In `~/Code/workspaces/career-camp`:
- `transcripts/raw/2026-05-07-quantifind-john-stockton-cleaned-v2.md` — primary source for John's words
- `transcripts/summary/2026-05-07-quantifind-r3-aie.md` — coaching summary
- `active/quantifind/people/john-stockton.md` — bio + Calvin's intel
- `active/quantifind/rounds/r3-john-stockton.md` — full prep doc
- `active/quantifind/narrative.md` — narrative threads (note: R3 evolved the thesis past what's in here; use R3 language, not narrative.md frames)
- `active/quantifind/insider-intel.md` — Calvin's briefing
- `me/story-bank/*.md` — for Cyberse story depth when rewriting case study

## Open questions for next session

1. Personal AI Studio piece — start with **written + screenshots** or **written + Loom embed**?
2. Cyberse case study — is "Cyberse" name OK to use, or anonymize to "a cybersecurity AI startup"? Current `cybersecurity-seo.mdx` is anonymized. Memory `feedback_cyberse_not_cyberhaven.md` says Cyberse is the correct name; question is whether to name the employer publicly on the site.
3. Cleanup: delete `app/projects-test/` and `lib/projects-test.ts`?
4. Want a draft of Email 1 (the short ack to John) in this next session?
