# Next pieces + 90-day doc — drafts and outlines

Working notes covering three open threads for the Quantifind send (target Sunday 2026-05-17 evening):

1. **BBBS rewrite** as the third AI piece on the site
2. **Image-placeholder pass** across the remaining featured case studies
3. **90-day Google Doc** — the off-site closer structured around John's clone-list

Personal AI Studio and Cyberse are already rewritten in `content/projects/`. CARES Act stays as the quality bar; the rest of this doc is what closes the gap.

---

## 1. BBBS rewrite — Spine A outline

### Open question to resolve first

Source material disagrees about which BBBS project this is.

| Source | Stack | Headline number |
|---|---|---|
| Current `mentor-enrollment.mdx` (live on site) | SMS automation, n8n workflows | "70% of enrollment handled, 13 days → near-instant" |
| `career-camp/me/story-bank/bbbs-voice-agent.md` (ready status) | **Voice agent** — ElevenLabs + OpenAI + Twilio | "13 days → 15 minutes, projected 200+ additional youth/yr" |

These look like two different implementations of the same problem — possibly an SMS v1 that later got replaced or augmented with a voice agent for the older-volunteer cohort. Story-bank's voice-agent version is dramatically more John-relevant (voice in a trust-sensitive nonprofit context, real telephony stack, AI-in-mission-critical).

**Recommendation:** rewrite as the voice agent version. If both shipped, frame as *"first SMS, then voice when SMS missed the older-volunteer cohort"* — that's a stronger story than either alone (sees a gap in v1, ships a different surface for the right segment). Need Kevin's call: SMS-only, voice-only, or both-in-sequence?

### Frontmatter (proposed)

```yaml
title: "BBBS — Voice Agent in a Trust-Sensitive Context"
slug: "mentor-enrollment"   # keep existing slug for stability
status: active
subtitle: "13 days → 15 minutes · voice-first for the cohort SMS couldn't reach"
description: "Big Brothers Big Sisters' enrollment bottleneck wasn't volume — it was that the older-volunteer cohort that drove the most inbound calls didn't want SMS. Built a voice agent on ElevenLabs + OpenAI + Twilio that handled qualification and scheduling on first contact, collapsing a 13-day phone-tag cycle into a single call."
featured: true
order: 4
tags: ["AI Voice Agent", "ElevenLabs", "Twilio", "OpenAI", "Trust-Sensitive AI"]
thumbnail: /images/projects/mentor-enrollment.png
metrics:
  - label: "Time to First Contact"
    value: "13d → 15m"
  - label: "Inbound Channel Fit"
    value: "Voice"
  - label: "Annual Youth Impact"
    value: "+200"
```

### Body — Spine A beats

**1. Hook scene.** BBBS is the largest mentorship nonprofit in the US; recruiting mentors is their single biggest expense; the enrollment team was so understaffed that interested volunteers waited 13 days of phone tag before anyone called them back. Most of those volunteers were older. Most of those older volunteers preferred phone over digital. Every day of delay was an attrition surface.

**2. The judgment call.** The bottleneck looked like throughput — too many inquiries, not enough staff. The actual bottleneck was *channel-cohort mismatch*: the segment driving the most inquiries (older volunteers) preferred the channel the org had least capacity in (live phone). A bigger SMS pipeline would have left that cohort behind. The move was to meet them on the channel they were already calling on.

**3. How it shipped.** 4–6 numbered steps, each with action + reasoning + counterfactual. Candidate sequence:

   - **Got close to the actual users first.** Asked the Chief Program Officer for a direct line to the enrollment team. Sat in on inquiry calls before designing anything. The older-volunteer cohort pattern surfaced in week one and reshaped the whole spec — would not have surfaced from a Slack summary.
   - **Picked voice over SMS for the right cohort.** SMS automation was the obvious AI-era answer. For BBBS's volume profile it would have missed the most expensive-to-acquire segment. The trade-off framing: easier-to-build (SMS) vs. fit-for-cohort (voice). Voice won.
   - **Stack: ElevenLabs + OpenAI + Twilio.** Each picked deliberately. ElevenLabs for voice that didn't pattern-match "robocall" (the failure mode that kills first-touch with older callers). OpenAI for the dialogue layer. Twilio for the telephony surface and routing. Trust-sensitive context — every component needed defensible failure modes.
   - **Designed the agent for graceful handoff, not full autonomy.** Qualification questions and scheduling ran end-to-end automated. Anything outside the happy path (complex case, ambiguous response, hint of distress) escalated to a human-staffed line. The agent's job was to take 80% of the load off the team, not to replace the 20% that mattered.
   - **Closed the loop with the enrollment team.** Weekly check-ins with the team that was being augmented, not just the CPO who approved the project. Adjusted the qualification flow based on what they were having to manually correct.

**4. What it proved.**
   - Time-to-first-contact: 13 days → 15 minutes.
   - Enrollment team capacity unlocked without adding headcount.
   - Trust earned with the customer — they agreed to publish the work as a case study (rare for a trust-sensitive nonprofit).
   - Projected ~200 additional youth matched annually as a direct second-order effect.
   - **Structural insight:** when channel and cohort align, you don't need to grow capacity — you reroute the bottleneck. Most "scale with AI" projects pick a channel and squeeze; the higher-leverage move is to pick the channel that fits the segment driving the load.

**5. What carries forward.** Trust-sensitive AI in regulated/mission-critical contexts has a different ROI shape than general-purpose AI. The metric isn't requests served; it's *which requests you can let the agent take fully, and which need clean escalation paths*. In compliance / risk / financial workflows, that decision is the entire architecture. Same shape: define the happy path the agent owns, design the escalation surface for everything else, measure on both.

**6. Drill-down `<details>`** — voice agent specifics:
   - First-touch script structure (open → qualify → schedule → handoff)
   - Failure-mode handling (ambiguous input, off-script questions, escalation triggers)
   - Why ElevenLabs over alternatives (latency, voice naturalness, cost ceiling)
   - What the human-in-loop dashboard showed the enrollment team

### Image placeholders (planned in this rewrite)

| Slot | Path | What it shows |
|---|---|---|
| After judgment-call section | `/images/projects/mentor-enrollment-cohort-channel.png` | Inbound volume by age cohort × preferred channel — surfaces the cohort-channel mismatch visually |
| Inside step 3 (stack) | `/images/projects/mentor-enrollment-architecture.png` | ElevenLabs → OpenAI → Twilio call flow, with escalation branch |
| Inside step 4 (proof) | `/images/projects/mentor-enrollment-call-flow.png` | Before/after timeline — 13-day phone tag vs. 15-min single call |

### Word count target

~700–900 (Spine A standard, slightly under Cyberse since this is the third piece not the headline).

---

## 4. Image-placeholder pass across remaining featured pieces

After the reshuffle, the featured set is:

1. Personal AI Studio (Spine B — 5 image slots already in place)
2. Cyberse Eval Infrastructure (Spine A — 3 image slots already in place)
3. CARES Act Data (Spine A — 1 diagram already in place, needs 1–2 more)
4. BBBS Voice Agent (Spine A — 3 image slots planned in the rewrite above)

Non-featured (no image work needed unless we change status):
- Public Sector CRM, Peer Mentorship, Agent Factory

### CARES Act — image slot additions

Already has the *"From tax codes to targeted relief — Dig, Translate, Size"* diagram in section 3. Spine doc bar = at least one inline image per Spine A piece, so technically met. But for parity with Cyberse (3 inline) and to deepen John signal, add two more:

| Slot | Path | What it shows |
|---|---|---|
| Inside step 2 (six pipeline branches) | `/images/projects/cares-act-data-pipeline-branches.png` | Alteryx workflow diagram — six entity-type branches converging into shared output schema |
| Inside step 4 (Power BI dashboards) | `/images/projects/cares-act-data-dashboard.png` | Screenshot of the Power BI dashboard tax partners actually used, by region × entity × subsidy |

Captions should name the judgment the image reveals, not just describe the artifact (per spine doc).

### Cross-piece image conventions to lock in

- **File path pattern:** `/images/projects/<slug>-<descriptor>.png`
- **MDX markdown:** `![alt — descriptive](path)` followed by `*italic caption naming the judgment, not just the artifact*`
- **Aspect ratio:** keep wide (16:9 or 16:10) — the prose-content column on `/projects/[slug]` is ~800px; tall portrait images break the read rhythm
- **Charts > screenshots > diagrams** for John specifically — eval evidence (distributions, before/after, dashboards) over UI screenshots over decorative diagrams

### Capture order priority (if Kevin makes only a few)

The minimum-viable set for the Sunday send, ranked by John-impact:

1. **Cyberse score distribution before/after** — single highest-signal artifact. Eval evidence is what John probed for in R3.
2. **Personal AI Studio workspace tree** (just a clean `tree -L 2 ~/Code` terminal screenshot)
3. **Personal AI Studio career-camp dashboard** (the Dataview surface)
4. **BBBS architecture diagram** (telephony stack with escalation branch — Excalidraw fine)
5. **Cyberse PSEO page** screenshot of a live vendor page
6. **CARES Act dashboard** screenshot

Skip the rest if time-constrained. The first three buy ~80% of the visual credibility.

---

## 5. 90-day Google Doc — "First 90 Days at Quantifind"

The actual closer in the Sunday send. Not on the site. Quantifind-specific. Structured around John's clone-list verbatim so John reads his own words shaped into a plan. Per handoff: *"the highest-leverage artifact in the entire send, because the role doesn't have a spec yet."* Length budget: 1.5–2 pages (~800–1200 words).

### Framing paragraph (top)

One short open. Something like:

> *You said you don't have the role scoped yet. Here's how I'd scope it. This isn't a deck — it's the working version of a 90-day plan I'd run with you. Treat it like a PR for the role spec, not a pitch.*

Tone: presumptive but un-defensive. The point is to do the role-shaping work John said he hadn't done, not to claim the role.

### Structure — three phases × John's clone-list

Use a 30/60/90 spine where each phase pulls items from the clone-list, ordered by leverage. This shows John you understood the list as a system, not a wish-list.

#### Days 1–30 · *Listen, baseline, and stop the bonfire*

Goals: understand the current state, set the metrics nobody's measuring yet, prevent the most expensive failure modes from compounding.

- **Tool admin and onboarding audit.** Who's using Claude Code, Codex, Windsurf today? Which are paid out of which budget, with what access controls, against what compliance posture (CMMC, SOC2, the GraphiteQ customer asks)? Output: one-page current state + a 30-day prioritized fix list.
- **Token + cloud budget baseline.** Pull current spend across providers, per workflow, per team. Forecast next 90 days at current trajectory. Identify the top three runaway risks. *Don't be a stupid company that sets a bonfire of tokens* — first month is about turning the lights on, not optimizing.
- **One-on-ones with the actual users.** Engineering, data science, delivery, compliance. Not to evangelize — to find the workflows where AI is already silently embedded and where the failure modes are landing. The immune-system reporting line starts here.
- **First skill library check-in.** What knowledge already lives in Confluence / README / scattered Slack? What would be the first three skills worth porting to a shared format that humans and machines both read?
- **Establish the visibility surface.** A simple dashboard for AI tool usage, spend, and quality signals. Not a vanity dashboard — a what-needs-fixing-this-week dashboard. *"Generating visibility on things that need to be fixed,"* in John's words.

#### Days 31–60 · *Ship the first internal wins*

Goals: convert the audit into shipped tooling. Pick the highest-leverage two or three items and ship clean versions.

- **First-pass admin/onboarding flow** for AI tools, runnable as a compliance-meeting handoff. Access, training, acceptable-use, observability — all wired into the same flow so a new hire crosses the line once.
- **Token budget guardrails** with per-team or per-workflow soft limits and visibility into burn rate. Not gatekeeping — instrumentation.
- **Skill library v1.** Three to five high-traffic skills migrated to a shared, version-controlled format. Picked from the day-1 audit, not invented. (Reference Personal AI Studio piece as the working version of this pattern.)
- **First evaluation surface for one customer-facing AI feature.** GraphiteQ summarization is the obvious candidate — internal eval doubles as the customer-facing benchmark. Same pattern as Cyberse.
- **Lessons file equivalent at the function level.** Not a wiki page — a defect-tracking discipline. Failures get logged, patterns get promoted to skills or guardrails.

#### Days 61–90 · *Make it compounding, market it internally*

Goals: the function starts paying back faster than it costs. Internal marketing — *not* "we built AI stuff," but *here's the budget we saved, here's the eval we shipped, here's the next thing*.

- **Internal marketing surface.** Office hours, a weekly digest, a slot at the Monterey-style offsite. Whatever cadence John already has, AI enablement gets a recurring seat. The audience is engineering and delivery, not leadership.
- **Cross-team shared skill.** One skill that started in one team and demonstrably accelerated another. Concrete enough to name in the digest.
- **Feedback loop closed end-to-end.** Failure logged → lesson captured → skill or guardrail updated → re-run against the failure. One full cycle visible.
- **First quarterly review.** What got shipped, what got retired, what the next 90 days look like. Same shape every quarter after.

### Cross-cutting commitments

A short list of stances, not deliverables — the operating principles John would hire for, surfaced as commitments so they're falsifiable:

- **Capability vs. security as a negotiation, not a stance.** Each AI tool decision gets a written trade-off note, not a yes/no. (John's framing in R3.)
- **20% defensive attitude.** Every shipped AI feature has a named failure mode and a named mitigation. Defensive review is not a separate function; it's built into shipping.
- **Tool selection: tail does not wag the dog.** New tools earn their slot by retiring an old one or solving a problem the current stack genuinely can't. Default to fewer tools, not more.
- **Train humans and machines on the same artifacts.** Skills, runbooks, post-mortems all live in formats both can read. Documentation budget and tooling budget merge.
- **Visibility before optimization.** Dashboards land before features. You can't optimize what you can't see.

### Closing paragraph

Short, operator-toned. Something like:

> *None of this is the role spec — it's a draft of one. The point of the next conversation isn't to ratify it; it's to find out where you'd cross out the third bullet and write something better. That's the function I'd want to run, and that's the function I'd want to run alongside.*

Echoes John's *"we're not trying to solve this with a stalling — we're starting"* without quoting him at himself.

### Tone rules for the doc

- John reads first, Adam reads second through John. Optimize for John; don't actively undermine for Adam.
- One Stockton quote max in the body. (Already used in Personal AI Studio — pick a different one here, or skip and let the structure speak.)
- Use *"I"* throughout. This is a job sample, not a position paper.
- Specifics over jargon. Name the tool, the metric, the team, the cadence. *"Token budget guardrails"* alone is hand-wave; *"per-workflow soft limits with weekly burn-rate visibility"* is specific.
- No bullet-counting tics ("3 things, 5 priorities"). Use the shape that fits.

---

## Send-plan placement reminder

Sunday 2026-05-17 evening email to John (cc/separate to Adam if appropriate):

- `kevinhu.fyi/projects/personal-ai-studio` — *the answer to your question about repo structure and how I actually build*
- `kevinhu.fyi/projects/cybersecurity-seo` — *the AI eval and calibration work I started telling you about* (slug stays generic per spine doc; title says Cyberse)
- `kevinhu.fyi/projects/mentor-enrollment` — *closest shape to the trust-sensitive AI workflows GraphiteQ is heading toward*
- Private Google Doc: *First 90 Days at Quantifind* — the role draft

CARES Act doesn't go in the email — lives on the site for a second-read scan but doesn't earn a link in the first send (it's the pre-AI piece; depth is for the AI work).

---

## Open questions before drafting the actual pieces

1. **BBBS canonical version** — SMS, voice agent, or both-in-sequence? See top of section 1.
2. **GraphiteQ naming in the 90-day doc** — fine to name explicitly (it's the role context), or keep abstract?
3. **Image capture timeline** — Kevin captures vs. Claude-generated mockups vs. ASCII placeholders? Sunday deadline implies "do the top three by Friday, everything else can be placeholders."
4. **Should CARES Act go in the send email at all?** Above plan drops it from the email but keeps it on-site. Alt: include as a fourth link with framing *"and the pre-AI piece that shows the coordination muscle"* — sends the message that depth pre-dates AI, but lengthens the email.
