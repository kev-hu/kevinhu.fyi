# Quantifind portfolio send — strategy

Working doc for the post-R3 follow-up to John Stockton (Quantifind, AI Enablement, 2026-05-07). John said yes to receiving more work samples / an updated portfolio after flagging that the current site is "just summaries of each of the projects." This doc lays out what to send, in what shape, and why each piece earns its slot.

Companion to `2026-05-12-case-study-spine.md` (which is about the *template* for portfolio pieces). This doc is about the *send* itself — what John specifically needs to see to convert.

## Framing shift

Don't think of this as "send more work samples." Think of it as **sending the artifact John wishes existed when he was assessing me**. He saw summaries, not the actual things. The asymmetric move isn't more summaries — it's letting him see how I work.

This send is a function-head's pitch deck disguised as a portfolio:

1. Here's how I think this function should work — POV one-pager
2. Here's what I've actually built that proves I can run it — 3 lead case studies
3. Here's the texture of how I work — Loom + breadcrumbs

## John's priorities (from the R3 transcript)

The things he said he wants to do but can't get to. Everything I send should map back to one of these.

1. **Compliance-aware tool rollout + admin hygiene** — turn AI on without information leakage
2. **Cost discipline across tokens + cloud + tool churn** — "let's find that nice middle ground"
3. **Internal dashboards + knowledge sharing** — "where is the dashboard going to see what the freshness is and all the data sources?" + replace old Confluence
4. **Immune system / feedback loops** — "20% attitude toward responsible development"
5. **Independent data pipelines / data resilience** — "huge thing for us right now"
6. **Disciplined tool adoption** — "let's not let the tail wag the dog"
7. **Internal marketing of AI + this role** — the Monterey offsite is the kickoff

The first four are the load-bearing ones. The rest are upstream/downstream of those.

## What to send, in priority order

### Lead 1 — AI Enablement Operating Model (one-pager POV)

The thing John doesn't have a model for yet. He described the tasks but not the target state. I have one.

The arc:
- **Tool-agnostic.** Skills are the artifact; Claude/Codex/whatever is the runtime
- **Context as the literacy.** What gets taught isn't tools — it's how to package context, what levers exist, where to escalate
- **Skills as code assets.** Versioned, evaluated, distributed — same lifecycle as software
- **Feedback loops at the org level.** Lessons from one team flow back into a shared library
- **COE evolution path.** From helpdesk → curated library → measured distribution → company-wide capability

This operationalizes his "the same stuff you use to train humans should be the same stuff you use to train machines" line. Most candidates don't show up with a target-state model. This one does.

Closing line on the page, to keep it humble: *"This is the direction; the actual shape depends on what's already in place at Quantifind."*

Format: one page, bullet structure, no preamble.

### Lead 2 — career-camp Loom walkthrough

3–5 min. Pick career-camp itself as the subject because it's literally an AI enablement system I built for myself.

Structure:
- 30 sec: "Here's a repo I use to run my own interview prep — small version of the enablement system I'd build for non-engineers at Quantifind"
- 90 sec: Repo structure tour — segmented workspaces, data bank pattern, scheduled jobs, MCPs
- 90 sec: One end-to-end flow — job postings pipeline running and surfacing in a dashboard
- 30 sec: One real lessons.md or memory file as a literal immune-system example (callback to his "20%" point)
- 30 sec: What I'd build differently for Quantifind given compliance constraints

Don't script it. Talk through it the way I talk. He liked my voice in the room.

This addresses every depth gap from the call simultaneously: stack question, repo structure, "how you actually code," and the immune-system thread.

### Lead 3 — BBBS / Firstly case study (already exists, needs the spine treatment)

Real client, real metric (13 days → 15 min), real non-technical user base. The cleanest analog to "AI for internal customers."

Use Spine A from `2026-05-12-case-study-spine.md`. Hook scene first, not "## The Problem."

Maps to: compliance-aware tool rollout for non-technical users (priority 1).

### Support 1 — BRAIN data pipeline + synthesis layer

The independent scrapers (LinkedIn, YouTube, Reddit) → BigQuery → trend synthesis stack. Frame as a **pattern**, not as Quantifind-relevance.

Risk: overclaiming domain transfer. I do trend synthesis on content; Quantifind does OSINT screening on people/orgs. The *mechanics* translate (independent scraping + synthesis layer); the *domain* doesn't.

Land it with one humble sentence: *"Different domain than Quantifind's OSINT work, same architectural shape — independent pipelines + a synthesis layer that handles freshness and gap detection."*

Maps to: data resilience priority (5).

### Support 2 — Cyberse scoring loop / eval infra

Direct callback to the immune-system framing. Production AI scoring with feedback loops. Pull the eval infra piece (already exists per case-study-spine doc).

Maps to: immune system (4).

### Support 3 — An evaluation/scoring example

Pull one concrete artifact from the content-score-hooks or title-scoring work. Even a screenshot of an output. Maps to John's implicit ROI question ("are we wasting money on tokens, are we getting value?").

Most enablement candidates don't have evals in their portfolio. Including one is differentiating.

Maps to: cost discipline (2) and disciplined tool adoption (6).

### Breadcrumbs (mention, don't lead)

- **/interview-prep agent.** I built this last week, for this interview. Meta-flex: shows same-day shipping when I spot a gap, and that I dogfood my own enablement work on myself. One line in the Loom, not a project page. Risk if I lead with it: reads as too self-referential.
- **Cross-tool MCP orchestration.** Pick one flow (e.g., Krisp meeting → coaching summary → dashboard) and show it as a 30-sec diagram or screenshot. Maps to "helping the product team help themselves."
- **Excalidraw diagrams.** One clean visual of an AI workflow. Operator hiring managers respond to clear visuals; this also feeds the "make AI legible to non-technical users" angle.
- **One real lessons.md.** Pulled from career-camp BRAIN or Firstly. Concrete artifact of the immune-system pattern, not theoretical.

## What NOT to add

- **Personal coaching / Kristie work.** Irrelevant to John. Risks "is he committed to a full-time role?"
- **Content-creator business as a primary project.** Same risk. Keep it as a stack/breadth callout, not a lead.
- **Long writeups.** Make the portfolio scannable. The Loom carries depth.
- **A deck.** He doesn't have time and I'm not selling. I'm showing.
- **Anything that tries to fix every gap from the call.** Pick the three that matter (technical depth, code visibility, immune-system proof) and let those speak.

## The cloud-experience fix

Important: I have Azure certs and professional Azure work. In the R3 call I said "no cloud" referring to *personal* projects. Don't correct it head-on — that looks like I was BSing. Instead, on a Stack/Infra page (or in the Loom in passing):

> "My personal stack leans Vercel + BigQuery because I'm optimizing for prototyping speed. Professionally I'm Azure-certified and shipped on Azure at [past role] — happy to go deeper on cloud architecture in a follow-up."

Rehabs it naturally without drawing a red circle around it.

## Project → priority mapping (the synthesis I'm doing for him)

Each project page should explicitly label which of John's priorities it maps to. Don't make him do the work.

| Project | John's priority |
|---|---|
| career-camp (Loom) | Dashboards + knowledge sharing (3), immune system (4) |
| BBBS / Firstly | Compliance-aware rollout for non-technical users (1) |
| Cyberse scoring loop | Immune system (4) |
| BRAIN pipelines | Data resilience (5) |
| Job postings pipeline | Cost discipline + automation (2) |
| Evaluation artifact | Cost discipline (2), disciplined tool adoption (6) |

## The email

Three parts. Short.

> John —
>
> Quick follow-up on what we discussed. Updated kevinhu.fyi/projects so each one has the actual artifact instead of just a summary. Three I'd point you at first:
>
> – **BBBS** (mentor enrollment, 13 days → 15 min) — closest analog to "AI for internal customers"
> – **career-camp** — the meta-example, an AI enablement system I built for myself, closest to the dashboards / knowledge-sharing piece you described
> – **Cyberse scoring loop** — the immune-system piece, since I haven't stopped thinking about that framing
>
> Also recorded a 4-min walkthrough of career-camp end-to-end so you can see how I actually code/structure repos: [Loom link]. And attached a one-pager on how I'd think about the function shape long-term — happy to throw it out if it's not useful.
>
> Have a great offsite — talk soon.
>
> Kevin

No "thank you for your time." No preamble. Operator tone matches his.

## Sequencing

The portfolio send goes first. The 90-day "First 90 Days at Quantifind" memo (from `2026-05-12-coaching-strategy.md` or wherever that ends up) is the *next* shot, after round 2 or as a momentum-stall recovery. Two shots, not one. Don't overwhelm.

## Lift estimate

- POV one-pager: 60 min
- Loom: 60 min (one take + light editing)
- Portfolio refresh per Spine A: 3–4 hours if screenshots/copy are roughed in
- Stack page + Azure mention: 30 min
- BRAIN pattern writeup: 45 min
- Evaluation artifact: 30 min
- Email: 5 min

Total ~6–7 hours. Highest-ROI work this week for this process.

## Success criteria

- John watches the Loom (or at least the first 90 sec)
- He forwards the one-pager or quotes from it to Calvin / training team / whoever he wants me to meet next
- Next conversation gets scheduled within 2 weeks of the offsite ending
- Comp conversation moves to *his* anchor, not mine

## Open questions

- Should the Loom be public link or unlisted? Unlisted is safer for the career-camp tour since it shows real interview prep work; public is fine if I scrub identifying interview details.
- Should the POV one-pager live on the site (e.g., `/perspectives/ai-enablement-operating-model`) or only as an attachment? Site = signals it's a real POV I stand behind. Attachment = lower commitment, easier to iterate.
- Is BBBS shareable as a case study given Firstly client confidentiality? Need to check what's safe to publish vs. only walk through verbally.
