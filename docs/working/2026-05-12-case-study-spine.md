# Case study spine

Template guidance for portfolio case studies in `content/projects/`. Goal is operator-voice, not consultant-voice. The current site's 7 case studies use a flat Problem → Solution → Results template — that's the "summaries" signal John Stockton (Quantifind, 2026-05-07 R3) called out. This doc replaces it.

## Two spines, by piece type

### Spine A — "I shipped a thing" (most case studies)

Used for: Cyberse Eval Infra, CARES Act, BBBS Mentor Enrollment, Public Sector CRM, Agent Factory (if kept).

```
1. Hook scene          one paragraph, drops the reader into the moment of tension
2. The judgment call   1–2 paragraphs — the non-obvious decision I made
3. How it shipped      numbered list, one judgment per step (NOT a feature list)
4. What it proved      numbers + the structural insight (one sentence on why this compounds)
5. What I'd carry in   explicit forward-transfer to the next role/context
6. Drill-down          optional, below the fold — repo, snippets, screenshots
```

### Spine B — "How I work" (Personal AI Studio only)

Used for: Personal AI Studio. NOT a problem→solution piece — answers a different question, so it gets a different shape.

```
1. Thesis              one sentence — why I build this way
2. Architecture        diagram or repo tree screenshot + 3-paragraph explanation
3. Patterns            3–5 patterns, each ~150 words with a concrete example
4. Live examples       links + screenshots of the system running today
5. What's next         one paragraph on current iteration
```

## Spine A — section detail

### 1. Hook scene

Drop the reader into the actual moment of tension. Not "## The Problem." Name the *real* hard part, not the surface problem.

**Good** — opener of `cares-act-data.mdx`:
> "By April 2020, every RSM tax office in the country was racing to identify which of their clients qualified for CARES Act subsidies. They were all doing it manually. They were all doing it differently. They were all running out of time."

What's working: stakes, time pressure, dispersed-execution problem you can feel. Three parallel sentences land it.

**Bad** — opener of `public-sector-crm.mdx`:
> "A large government agency was operating with siloed data across multiple legacy systems."

No stakes, no scene, no human in frame.

### 2. The judgment call

The operator move. What was the non-obvious decision? What did I see that others didn't?

Reliable structure: *"X looks like the hard part. The actual hard part is Y."*

CARES Act:
> "Encoding the calc in software was the easy part. The actual project was getting 5 regional tax leaderships to agree on shared definitions, then convincing 90 offices to standardize their data inputs against those definitions — fast, before the relief window closed."

Cyberse rewrite:
> "The agent wasn't the gating constraint. Distribution was. So we collapsed distribution and product into the same artifact — every PSEO page was a deployed agent output, and every agent improvement compounded SEO rank."

**This section is non-negotiable.** Without it the piece reads execution-only, which is the consultant signal we're trying to avoid.

### 3. How it shipped

Numbered list. **One judgment per step**, not a feature list.

Each item = *what I did* + *why* + *what would have broken if I hadn't*.

Good — step 2 of CARES Act:
> "Built six pipeline branches in Alteryx, one per entity type, with regional carve-outs treated as parameters. A partnership's K-1 distributions look nothing like an S-corp's wage base, so a one-size-fits-all schema would have collapsed under its own exceptions. Six branches kept each entity-type's nuances intact."

Three pieces: action, reasoning, counterfactual.

Bad — `mentor-enrollment.mdx` "Key components" bullets describe artifacts (SMS automation, document collection flow, scheduling integration). Reader learns what exists but not what the judgment was.

### 4. What it proved

Two parts:
- **Numbers** — concrete scale (accounts, $, hours, % improvement, time-to-X)
- **Structural insight** — one sentence on *why this work compounds* vs. being one-off

CARES Act's insight is implicit in *"90 offices standardized on one shared calc instead of 90 parallel ones"* — tells you why this was platform-shaped, not custom.

Cyberse's headline insight: *"the agent's outputs were the PSEO content"* — distribution and product collapsed into one artifact.

**Avoid:** "and we created a replicable framework for digital transformation in public sector contexts." Consultant-speak. Transfer belongs in section 5, and should be specific.

### 5. What I'd carry into [next role / Quantifind]

Explicit transfer. NOT "what I learned" — that's passive, back-looking. Frame forward.

For Cyberse → Quantifind:
> "Internal AI tooling and customer-facing AI tooling tend to be treated as separate workstreams. The Cyberse pattern is to collapse them — every internal eval improvement becomes a customer-visible artifact improvement. At Quantifind this is the GraphiteQ summarization eval doubling as the internal benchmark."

For CARES Act → Quantifind:
> "The hard part of internal AI enablement at a 100-person company isn't building the tools. It's getting five functions to agree on shared definitions before the window closes. RSM at 1/100th the scale — mostly easier, except trust capital has to be earned from scratch."

This section makes a piece feel role-specific without being cringe.

### 6. Drill-down (optional)

For the tinkerer reader. Lets the piece scan in 2 min for Adam but go deep for John.

- Link to GitHub repo (or screenshot if private)
- Code snippet of a key abstraction
- Screenshot of the eval rubric or dashboard
- Architecture diagram

Use a `<details>` block or `## Drill-down:` heading so it's obviously skippable.

## Spine B — section detail

### 1. Thesis

One sentence at the top, italicized. The rest of the page is its proof.

Example: *"I treat my workflow as a product. Multi-workspace repos, skills as CLIs, lessons.md as immune system."*

### 2. Architecture

Diagram + repo-tree screenshot + 3 paragraphs.

Show career-camp + content.main + databank + kj-skills as a multi-repo system with how they talk to each other. Real `tree -L 2` screenshot. This is the literal answer to John's *"a few levels deeper into the repo structure"* — do not bury it.

### 3. Patterns

3–5 named patterns. Each = name + why it exists + one concrete example. ~150 words each.

Candidate patterns:
- **Repos as workspaces, not projects** — one repo per lane, not one per output
- **Skills as CLIs** — kj-skills as machine-callable internal tools (callback to John's *"same stuff you use to train humans should be the same stuff you use to train machines"*)
- **MEMORY.md as persistent context** — auto-memory across sessions
- **lessons.md as immune system** — what I learned the hard way, indexed by project
- **Obsidian as IDE** — dashboards, dataviewjs, markdown-as-database

### 4. Live examples

3–5 short examples of the system running today. Each = one screenshot + one sentence.

> "Here's the career-camp dashboard tracking 47 job postings + 4 active interviews."

Show, don't tell.

### 5. What's next

One paragraph. What I'm iterating on right now. Signals this is a live system, not a frozen portfolio piece.

## Cross-cutting style rules

- **Active voice.** *"I shipped X"* not *"X was shipped."*
- **No dramatic chapter titles** ("The Decision", "The Reckoning"). Operator audiences punish them.
- **No rule-of-three closers** ("It taught me to listen, to lead, to build."). Same reason.
- **One quote per piece, max.** Direct customer/colleague quote in section 4 or 5 lands hard if specific. Two dilutes both.
- **Numbers do not get round.** "10+ agents" reads estimated. "13 agents" reads remembered. If unknown, omit.
- **Tags should reflect skills, not categories.** Current tags lean category ("Government," "Nonprofits"). Operator readers scan skills ("eval rubrics," "agent orchestration"). Lean skills.
- **Frontmatter `metrics` field** — keep to 3 max. Pick the most specific. Avoid "Hours Saved: 10,000" if it's an estimate; prefer the exact unit you actually moved.

## Spine pilot — which piece to rewrite first

Recommend **CARES Act** as the spine pilot. It's already ~70% there (good hook, good judgment-call sentence, numbered shipping). What it needs: (a) the explicit Quantifind transfer paragraph in section 5, (b) a drill-down section, (c) tighten section 4's structural insight.

Once CARES Act is dialed, Cyberse + BBBS + Personal AI Studio pattern-match against it. Cheaper than designing the template and 3 pieces in parallel.

## Length & pacing

| Piece type | Target words | Read time | Notes |
|---|---|---|---|
| Spine A (most) | 600–900 | 3–4 min | Hook 50–80, Judgment 150–200, Shipped 250–400, Proved 100–150, Carry 100–150 |
| Spine A — Cyberse | 900–1100 | 5 min | Headline AI piece, earns more room |
| Spine B — Personal AI Studio | 800–1200 | 5–6 min | Centerpiece, plus screenshots/diagrams (don't count toward word target) |

Reference: current site case studies are 200–340 words. Too short for the depth we need. CARES Act (~340 words) reads close to right but actually needs ~600 to get judgment + carry-forward in.

Numbered "How it shipped" should have 4–6 steps, 60–80 words each. Fewer than 4 reads like there were no decisions; more than 6 reads like every micro-step got equal weight.

If a section is going short, that's a signal it's missing — not a signal to ship shorter. Especially the judgment call (section 2). If it's under 100 words you probably haven't named the non-obvious decision yet.

## Pitfalls to avoid in the writing

**Voice & framing**
- Don't open with "I" — too autobiographical. Open with the scene, the stakes, or the moment.
- Don't conflate scope and outcome. *"Launched a CRM"* is scope. *"Case resolution dropped from 9 days to same-day for 80% of cases"* is outcome. Frontmatter `metrics` should be outcome, never scope.
- Don't hedge with "helped" / "contributed to" / "was part of." Own it specifically or omit it.
- Don't write *"we"* when you mean *"I"* (or vice versa). Pick one per piece and stay consistent. Founder-grade audiences read voice-shifts as ducked accountability.
- Don't apologize for what you didn't do. ("This wasn't a full eval suite, but…") Just write what you did.

**Content moves to avoid**
- Don't bury the judgment call. Section 2 must land in the first 30 seconds of reading. If a skimmer can't find your decision, the piece reads as execution-only.
- Don't anonymize without a reason. *"A large government agency"* / *"a cybersecurity marketplace"* reads as NDA paranoia even when there's no NDA. Name the org unless legal says no.
- Don't list components when you mean decisions. *"Key components: SMS automation, document flow, scheduling integration"* is artifact-listing. *"Routed 70% of intake to SMS because the bottleneck was scheduling, not paperwork"* is a decision.
- Don't oversell metrics. "10x improvement" without baseline + measurement window reads inflated.
- Don't use future-tense closes. *"This sets us up for…"* / *"and we created a framework for…"* — section 5's transfer should be specific to the next role, not abstract framework-talk.
- Don't include the obvious. Every reader knows what a CRM is. Skip the explainer.

**Style smells (per project memory & operator-audience feedback)**
- No dramatic chapter titles ("The Decision", "The Reckoning").
- No rule-of-three closers ("It taught me to listen, to lead, to build.").
- No buzzwords: *synergize, leverage (as verb), holistic, scalable* (use *"X-able for N customers"* instead), *transformative*.
- No adjective piles. *"Innovative, scalable, transformative platform"* — pick one or none.
- No round numbers when exact ones exist. *"10+ agents"* reads estimated; *"13 agents"* reads remembered.

**Consistency checks before shipping**
- Frontmatter `metrics` numbers match body numbers exactly. No drift.
- Tags lean skills, not categories. ("Eval rubrics" > "Nonprofits".)
- One quote max per piece. Two dilutes both.
- Voice and tense consistent within the piece.

## What John was specifically looking for — and what's missing

From the R3 v2 transcript, John's *explicit* asks (his own words):
- *"A few levels deeper into the repo structure"* (line 47)
- *"How you actually code"* (line 47)
- *"The actual things"* vs *"just summaries of each of the projects"* (line 33)
- *"Where you're hosting or using skills"* (line 47)
- *"Solo stack — what you're doing"* (line 47)

From John's profile + clone-list + R3 signals (what a tinkerer-physicist hiring for internal AI enablement actually scans for):
- Implementation specificity, not industry vocabulary
- Trade-off literacy — *"capability vs security, speed vs governance, autonomy vs accountability"*
- Eval / observability infrastructure (he ran APIs against a fake customer to test if agents could use them — he wants to see eval evidence)
- "Scale judgment, don't replace it" worked through, not stated
- Internal vs external tooling judgment as a fork in stack/security choices
- Skills/CLIs as reusable internal tools (the *"train humans and machines on the same stuff"* line)
- Immune system / feedback loops (he named lessons.md-equivalent unprompted)
- Push-back-and-survive credibility — moments where Kevin overrode someone's framing and shipped

**What the current site has zero of:**
- A single screenshot of a repo tree, file structure, dashboard, or eval output
- A single code snippet
- A single eval rubric, scoring criteria, or measurement methodology
- A single trade-off sentence (*"chose X over Y because…"*)
- Any reference to skills / CLIs / reusable internal tools
- Any reference to MEMORY.md, lessons.md, or the feedback-loop / immune-system pattern
- The Cyberse AI eval work at any meaningful depth
- The Obsidian-as-IDE pattern (which John probed live in the call)
- The local-LLM / voice transcription stack
- The multi-workspace repo architecture
- The *"agent's outputs were the PSEO content"* insight
- Any acknowledgement of cost / token / latency trade-offs

**The pattern:** the site has narrative summaries; John reads for artifacts and trade-offs. Current pieces lead with outcome and treat process as bullets. The rewrite has to invert — lead with the *process* (judgment + how it shipped), let outcome land in section 4.

**The single highest-leverage fix:** every Spine A piece needs at least one screenshot or diagram in the body. The Personal AI Studio piece needs 3–5 (repo tree, workspace architecture, one dashboard, one CLI in action). Words alone won't close the "actual things" gap John named.

**Don't over-correct toward code dumps.** The audience is also Adam (CPO) on second read. Screenshots > raw code. Architecture diagrams > config files. A `<details>` drill-down can hold the heavier technical artifacts for John specifically.

## Audience reminder

Primary reader: John Stockton (Quantifind co-founder, tinkerer-physicist). Secondary: Adam (CPO). 90/10 weighting. Optimize section 6 (drill-down) for John specifically — he asked for "a few levels deeper into the repo structure" by name.
