# Prompt: BLINK architecture diagram

Use this prompt with an LLM (Claude, ChatGPT, etc.) to generate an architecture diagram for the BLINK case study at `content/projects/blink-cosd-crm.mdx`. The diagram will be embedded in the case study and in the drilldown section to give John Stockton (Quantifind co-founder, primary reader) a "few levels deeper" view of the system architecture.

---

## The prompt

I'm working on a portfolio case study for an enterprise CRM engagement I led at RSM Consulting for the County of San Diego, called B-LINK. I need an architecture diagram that conveys the technical and architectural decisions in one image. Please generate this as an **Excalidraw-compatible diagram** (either as Excalidraw JSON I can import, or as an ASCII/Mermaid sketch I can recreate manually in Excalidraw).

### Context (so you understand what the diagram represents)

- B-LINK was a cross-agency CRM serving three County of San Diego agencies on **one shared Microsoft Dynamics 365 CE tenant** — about 2,000 case managers handling benefits eligibility and fraud adjudication
- Three agencies were the primary tenants — including In-Home Supportive Services (IHSS) and Bureau of Public Assistance Investigations (BPAI)
- The system handled cross-agency document routing for fraud-adjudication workflows, so federation across three separate tenants wasn't an option — the workflow required one shared tenant with role-based partitioning
- We integrated with state-government databases like CMIPs via Azure Functions for eligibility data lookups
- The doc-management workflow used a custom Adobe Sign integration (the SaaS path with PandaDoc/DocuSign was blocked by the county's approved-vendor list)
- We used D365 Portals for the bulk of users (~2,000) to keep per-seat licensing cost from ballooning — standard CRM licensing would have been ~$192K/year vs ~$40K/year for Portals, saving ~$150K/year. Portals users authenticated via SAML/SSO as external users with scoped access
- Power BI sat on top for reporting, with agency-scoped views respecting the same role partitioning as the tenant

### What the diagram needs to show (required elements)

1. **One shared D365 CE tenant** at the center, with three agency lanes flowing into it (label them: Agency 1 / Agency 2 / Agency 3, or use IHSS / BPAI / Agency 3 if those are recognizable). Show role-based partitioning visually (different colors or zones for each agency's data inside the tenant).
2. **Two distinct user populations** entering the tenant:
   - **D365 standard users** (smaller box — case workers, investigators, administrators with full CRM access)
   - **D365 Portals users** (larger box, ~2,000 — labeled as "external users via SAML/SSO with scoped access")
3. **Adobe Sign integration** as a separate component showing it's a custom integration, not a vendor swap-in. Bonus if you can hint at the integration challenges (tamper-invalidation on signed documents, secure handoff to government storage, surfacing signed documents back in CRM).
4. **Azure Functions** as the integration layer between D365 and external systems — show retry/audit logic if you can fit it.
5. **State systems** (CMIPs and others) as external boxes that Azure Functions talks to.
6. **Power BI** as a reporting layer on top, with agency-scoped views.

### Visual hierarchy guidance

- D365 CE tenant should be the visual center / largest element — it's the thing everything connects to
- Use **distinct visual treatment for the two user populations** — the Portals decision is one of the main architectural moves the diagram should make visible at a glance
- Adobe Sign should look like an *integration*, not a standalone product — show the bidirectional flow between it and D365
- Three agency lanes should be visually parallel but distinct (different colors or shapes)
- Azure Functions → state systems should look like pipework, not part of the CRM proper

### Style

- **Excalidraw aesthetic** — hand-drawn, slightly imperfect, friendly. Not corporate stiff. Not architecture-diagram dense.
- **Limited color palette** — three agency colors max, plus a neutral for infrastructure
- **Labels short** — 2-4 words per box. The diagram has to be readable in 5 seconds.
- **No icons/logos** unless you can find clean Excalidraw-style ones for D365, Azure, Power BI, Adobe Sign — otherwise use plain rectangles with text

### What to leave out

- Internal D365 entity model details (no tables / fields / relationships)
- The migration cutover (separate concern, not part of steady-state architecture)
- Specific Azure Function names or trigger types (just "Azure Functions" as a layer)
- Any user-interface mockups
- Training / change-management infrastructure
- The waterfall-to-sprints process decision (this is a *process* story, not a system story)
- Specific dollar figures (those live in the case study body, not the diagram)

### Output format I'd prefer

Option A (best): Excalidraw JSON I can paste directly into excalidraw.com and tweak
Option B: A clean ASCII/box-and-arrow sketch I can recreate manually in Excalidraw
Option C: Mermaid syntax I can render and then redraw in Excalidraw style

### One sanity check

Before you generate, ask me any of these if you're unsure:
- Do I want the third agency named or generic?
- Do I want CMIPs specifically called out or just "State systems"?
- Should the diagram show *runtime* architecture or *deployment* architecture? (I want runtime — what the system does, not how it's hosted.)
- Should anything be redacted for a public portfolio? (Yes — no real case data, no actual user counts inside individual agencies, no real document examples. The 2,000 total and three-agency split are public-record fine.)
