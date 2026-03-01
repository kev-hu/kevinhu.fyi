# Brand Philosophy & Banner Component Concepts

**For:** kevinhu.fyi
**Author:** Design Thinking analysis
**Date:** 2026-02-28
**Audience:** UX/UI designers creating rich banners, social assets, video thumbnails, and page headers

---

## 1. Brand Essence

### The Core Tension: Engineered Playfulness

Kevin's brand lives at an unusual intersection: **serious technical capability delivered with approachable, almost toylike confidence**. This is not a typical developer portfolio (dark mode, monospace, minimalist). It's not a typical MBA portfolio (corporate blue, stock photos, safe). It's a third thing: a builder's workshop rendered in primary colors with thick outlines and satisfying mechanical interactions.

The neubrutalist style is the key signal. Neubrutalism says: "I know the rules of polished design, and I'm deliberately choosing something bolder." It communicates confidence without pretension. The hard black outlines, offset shadows, and flat bright colors feel like technical blueprints made joyful — like LEGO instruction manuals or Duolingo's UI confidence.

### Brand Position in One Line

> **"The builder who makes complex things feel simple and fun to work with."**

This applies to Kevin's work (turning messy enterprise systems into clean platforms) and to his brand itself (turning a dense resume into an inviting, explorable site).

### Three Personality Axes

| Axis | Kevin's Position | What it means for design |
|---|---|---|
| **Serious ←→ Playful** | 65% playful | Bold colors, press-in buttons, emoji in headlines. But never silly — the work speaks for itself. |
| **Corporate ←→ Indie** | 70% indie | Warm off-white instead of sterile white. Handcrafted feel. But structured enough for enterprise clients to take seriously. |
| **Minimal ←→ Maximal** | 55% maximal | More elements than a minimalist brand (badges, pills, traffic-light dots, thick borders). But each element earns its place — no decoration without function. |

### Brand Mantra (Internal)

**"Build it. Ship it. Make it look like it was fun."**

This is Kevin's working mode: real engineering, real business outcomes, but presented with the energy of someone who genuinely enjoys the craft.

---

## 2. Visual Metaphors

These are the recurring conceptual images that should infuse banner designs. Not every banner uses every metaphor, but they all pull from this shared vocabulary.

### 2a. The Workshop Bench

Kevin's brand is a **builder's workbench**, not a gallery. Things are in progress. Tools are visible. The craft is on display, not hidden behind polish.

- **Visual cues:** Thick black outlines (like technical drawings), card components that look like material objects you can pick up, grid/alignment that suggests precision
- **Use when:** Showing skills, process, capabilities

### 2b. The Launchpad

Kevin takes things from **0 to 1**. The launchpad metaphor captures the moment of ignition — the transition from idea to shipped product.

- **Visual cues:** Upward motion (slide-up animations), the green "go" accent color, countdown-style number reveals, the `0→1` notation he already uses
- **Use when:** Announcing launches, showing results, CTAs

### 2c. The Bridge / Connector

Kevin explicitly bridges business and engineering, legacy and modern, strategy and execution. He connects disconnected things.

- **Visual cues:** API-connector-style lines between elements, the CRM project's "three systems unified" story, elements snapping together like puzzle pieces or LEGO bricks
- **Use when:** Showing cross-functional skills, integration work, consulting positioning

### 2d. The Command Line with a Smile

Code aesthetics made warm and inviting. Not the hacker-dark-terminal cliche, but the idea of **typed precision** combined with bright, welcoming color.

- **Visual cues:** Monospace text for key stats or sluglines layered on top of the warm off-white background, the macOS traffic-light dots already on project cards, terminal-window chrome as a framing device
- **Use when:** Technical credibility moments, code-related content, "MBA who codes" positioning

### 2e. Stacked Building Blocks

Modular components that combine into larger systems — literally the way Kevin builds (components, agents, platforms).

- **Visual cues:** Cards stacking or cascading, layered rectangles with offset shadows, the existing cascade-in animation, badge/pill elements that tile and combine
- **Use when:** Showing breadth (skills, tools, projects), portfolio overviews

---

## 3. Banner Component Concepts

### Banner A: "The Terminal Card"

**Concept:** A neubrutalist terminal window that types out a punchy statement, surrounded by floating skill badges.

**Visual Description:**
- Full-width warm off-white (#FAF9F6) background
- Center: A large card with a black (#141414) macOS-style title bar (traffic-light dots on the left, "kevinhu.fyi" in the title bar text)
- Inside the card: White (#FFFFFF) body with a typing animation that spells out a tagline in Bricolage Grotesque, 800 weight. Example lines:
  - `> MBA who codes.`
  - `> Building AI, shipping products.`
  - `> 0 → 1, on repeat.`
- Below the tagline: A blinking cursor block in primary blue (#1CB0F6)
- Around the card: 5-7 floating skill/tool badges (the existing pill style — white background, 2px muted border, 6px radius, favicon + label) gently bobbing at different rhythms
- Bottom-right corner of the card: A small "Book a Call" button in primary blue with the characteristic bottom-shadow

**Motion:**
- Card enters with the cascade-in animation (slide from right, slight rotation, settle)
- Text types character by character at ~60ms intervals, with a 400ms pause between lines
- Skill badges fade in staggered (200ms apart) after the card settles, then begin their float-badge bob
- Cursor blinks at 530ms intervals (standard terminal cadence)

**Where to use:** YouTube/video intro bumper (5-second version), LinkedIn banner (static frame grab), Twitter/X header, conference talk title slides

**Why it fits:** Combines the "command line with a smile" metaphor with the builder's workbench. The terminal aesthetic signals technical credibility while the warm colors, floating badges, and playful typing animation keep it from feeling cold. The traffic-light dots directly reference the existing project card pattern, creating visual continuity.

---

### Banner B: "The Stat Wall"

**Concept:** A bold grid of oversized numbers that count up, each inside its own neubrutalist card, with a headline anchoring the composition.

**Visual Description:**
- Background: Solid primary blue (#1CB0F6) — the one banner that inverts the color scheme for maximum impact
- Top-left: "Kevin Hu" wordmark in white, Bricolage Grotesque, 700 weight
- Center: 2x2 grid of stat cards, each with:
  - White (#FFFFFF) background
  - 2px black border + 4px 4px 0 black brutal shadow
  - Large number in Bricolage Grotesque, 800 weight, foreground black (#141414): e.g., "50+", "10+", "$2M", "2K+"
  - Small label underneath in Plus Jakarta Sans, 500 weight, 70% opacity: "Projects Delivered", "AI Agents Built", "Revenue Generated", "Employees Served"
- Bottom-right: A green (#22C55E) eyebrow pill reading "AVAILABLE FOR PROJECTS" with the pulsing availability dot

**Motion:**
- Stat cards pop in with the existing pop-in animation (scale from 0.7, staggered 250ms apart)
- Numbers count up using the stepped-ticker keyframe pattern (0 → target in ~1.5s)
- Availability pill slides up from below after all stats are in, with the pulsing dot animation

**Where to use:** LinkedIn featured section banner, portfolio overview slide, proposal cover page, social media "by the numbers" post

**Why it fits:** The inverted blue background is a power move — it says "pay attention." The counting numbers add dynamism and credibility simultaneously. The neubrutalist cards maintain brand consistency even on the inverted background. The availability pill is a clear CTA that says "I'm not just showing off, I'm open for business."

---

### Banner C: "The Stack"

**Concept:** Project cards cascading diagonally from top-left to bottom-right, overlapping with visible depth, creating a sense of a rich body of work.

**Visual Description:**
- Background: Warm off-white (#FAF9F6) with a subtle radial gradient of primary blue at ~6% opacity centered behind the stack (matching the existing hero gradient)
- 3-4 project cards, each at the full ProjectCard fidelity (traffic-light title bar, thumbnail area with actual project screenshots, title, subtitle, tag pills), but scaled to ~70% size
- Cards are arranged in a cascading diagonal: each offset ~40px right and ~60px down from the previous, with later cards overlapping earlier ones
- The frontmost card (bottom-right) has a slight 2-degree clockwise rotation to break the grid and add energy
- Above the stack: Headline in Bricolage Grotesque, 800 weight: "Featured Work" or a custom title
- Below the stack: A secondary button ("View all projects →") in the existing secondary button style

**Motion:**
- Cards cascade in from the right with the existing cascade-in animation (translateX(120px) rotate(4deg) → settled position), staggered 300ms apart
- On hover (web version): hovered card lifts with the project-card hover (translateY -4px, shadow grows to 6px 6px)
- Static version: The slight rotation on the front card and the overlapping depth create dynamism without animation

**Where to use:** Portfolio section of the homepage (potential future enhancement), case study PDF covers, LinkedIn carousel first slide, Notion portfolio embed

**Why it fits:** This is literally how Kevin presents his work — as a collection of well-crafted components. The cascading stack metaphor echoes the "stacked building blocks" visual language. The traffic-light title bars on each card create a rhythmic pattern that's instantly recognizable as the Kevin Hu brand. The overlap and rotation add the 55%-maximal energy without becoming chaotic.

---

### Banner D: "The Bridge Diagram"

**Concept:** A stylized connector diagram showing Kevin as the link between business concepts (left side) and technical tools (right side), rendered in the neubrutalist card style.

**Visual Description:**
- Background: White (#FFFFFF) card surface, contained in a large neubrutalist card (2px black border, brutal shadow)
- Left column: 3-4 rounded pill badges in secondary green (#22C55E) background with white text, listing business capabilities: "Strategy", "0→1 Products", "Growth", "Analytics"
- Right column: 3-4 rounded pill badges in primary blue (#1CB0F6) background with white text, listing technical tools: "React/Next.js", "Python/AI", "APIs", "Agents"
- Center: A bold wordmark "Kevin Hu" or a simple avatar/icon, with thin black connector lines running from each left pill to the center, and from the center to each right pill
- The connector lines have small animated dots traveling along them (like data flowing through a pipeline)
- Below the diagram: Tagline in Plus Jakarta Sans, 60% opacity: "MBA who codes. Bridging strategy and engineering."

**Motion:**
- Pills slide in from their respective sides (left pills from left, right pills from right), staggered
- Connector lines draw themselves from center outward (SVG stroke-dashoffset animation)
- Small dots begin traveling the connector paths once lines are drawn
- The traveling dots use primary blue on the right side and secondary green on the left side

**Where to use:** About page hero, consulting pitch decks, conference talk "about me" slide, LinkedIn about section banner

**Why it fits:** This directly visualizes Kevin's core differentiator — the business/engineering bridge. The connector/pipeline aesthetic references his actual work (API integrations, agent orchestration, data pipelines). The two-color system (green for business, blue for technical) maps perfectly to the existing palette. The animated data dots add life without being distracting.

---

### Banner E: "The Marquee Strip"

**Concept:** A bold, full-width horizontal ticker strip that scrolls key phrases and skill badges, bookended by thick black borders — like a stock ticker or news chyron for personal branding.

**Visual Description:**
- Full viewport width, fixed height (~80px)
- Top and bottom: 2px solid black borders
- Background: Primary blue (#1CB0F6)
- Content: A continuously scrolling horizontal track containing alternating elements:
  - Text phrases in Bricolage Grotesque, 700 weight, white, uppercase: "MBA WHO CODES", "AI BUILDER", "0→1 PRODUCTS", "SHIP FASTER"
  - Small separator diamonds (◆) or vertical bars in white at 50% opacity between phrases
  - Occasional skill badges (white background pill with black text and tool favicon) interspersed
- The track is duplicated (standard infinite marquee technique) so scrolling is seamless

**Motion:**
- Continuous left-to-right scroll at a steady pace (~20s full cycle, matching the existing marquee-scroll keyframe)
- Speed is deliberate and readable, not frantic
- On hover (web): scroll pauses (CSS `animation-play-state: paused`)

**Where to use:** Section divider on the homepage or brand-kit page, video lower-third or intro strip, email signature banner, social media story/reel background element, livestream overlay

**Why it fits:** The marquee is already in the brand-kit motion library, so this extends an existing pattern into a full component. The stock-ticker aesthetic aligns with the "builder" energy — it implies constant activity, shipping, momentum. The blue background with white text is the highest-contrast combination in the palette, making it impossible to ignore. And the continuous motion creates ambient energy even when the viewer's attention is elsewhere.

---

## 4. Motion Philosophy

### The Governing Principle: "Mechanical Confidence"

Motion on kevinhu.fyi should feel like a **well-made machine** — precise, satisfying, purposeful. Not organic and floaty (that's a wellness brand). Not frantic and particle-heavy (that's a gaming brand). Think: the satisfying click of a mechanical keyboard, the snap of LEGO bricks connecting, the decisive flip of a switch.

### Motion Rules

**1. Entrances are confident, not shy.**
Elements arrive with intention. Slide-up, pop-in, cascade — they all have a clear origin and destination. No slow fades from nowhere. The element knows where it belongs and gets there quickly.

- Enter duration: 300-500ms (never over 600ms)
- Easing: `ease` or `ease-out` (never `linear` for entrances — that feels robotic, not mechanical)
- Stagger between siblings: 150-300ms (enough to read the sequence, not so much that it feels sluggish)

**2. Idle motion is subtle and grounded.**
Floating badges, pulsing dots, and breathing glows are the ambient hum of the workshop. They indicate life without demanding attention.

- Amplitude: Small (4-10px translate, 0.75-1.0 scale range)
- Duration: 2-4 seconds per cycle
- Easing: `ease-in-out` (smooth, breathing rhythm)

**3. Interactions are tactile and immediate.**
The press-in button pattern is the signature. When you click, you feel resistance. The element moves down, the shadow compresses. This is not a flat digital surface — it's a physical interface.

- Hover response: < 150ms
- Click/press: Instant (the `translateY(2px)` + shadow reduction happens on the same frame as the input)
- Release: Snap back, don't ease back

**4. Exits are quick and clean.**
Don't linger. When something leaves, it goes. Slight upward drift + fade is the standard exit. No elaborate departure animations.

- Exit duration: 200-300ms (faster than entrance)
- Direction: Up and out (reinforces the upward/launch energy)

**5. Scrolling animations are one-shot.**
Elements animate in once as the user scrolls to them. They do not replay, reverse, or reset. The page builds itself as you scroll, like a blueprint being drawn.

### Motion Don'ts

- No bounce easing (too cartoon, undermines the "mechanical" feel)
- No parallax scrolling (overused, adds complexity without brand value)
- No 3D transforms or perspective tilts (the brand is deliberately flat/2D)
- No particle effects or confetti (too whimsical, not builder-like)
- No loading spinners that rotate — use a pulsing bar or stepped progress indicator instead

---

## 5. Do's and Don'ts

### DO

- **Use thick, visible borders.** The 2px black border is the brand's structural signature. It makes every element feel intentional and defined. When in doubt, add a border.
- **Let the blue do the talking.** #1CB0F6 is the hero color. Use it for the single most important element in any composition. One blue thing per visual hierarchy level.
- **Keep backgrounds warm.** #FAF9F6 is not white. It's warm, papery, approachable. Using pure white as the page background would lose this quality. (Cards can be pure white — they sit on top of the warm surface.)
- **Use the offset shadow on everything that deserves depth.** Cards, buttons, featured elements. The 4px 4px 0 #141414 shadow is the brand's depth language. It says "this is a thing you can interact with."
- **Show the tools.** Favicons, tool names, technology badges — Kevin's brand is transparent about what it's built with. Never be vague when you can be specific.
- **Use uppercase + tight tracking for labels and CTAs.** The eyebrow tags and button text use `text-transform: uppercase` with `letter-spacing: 0.03-0.06em`. This is a consistent typographic signal for "actionable" or "categorical" text.
- **Put stats front and center.** Numbers are credibility. "+20% retention", "$2M revenue", "10+ agents" — these deserve prominent, oversized treatment. Use Bricolage Grotesque at heavy weight for stat numbers.
- **Use green sparingly and specifically.** #22C55E is the accent, not a co-primary. Reserve it for: availability indicators, success states, and the occasional eyebrow badge. It should feel like a signal light, not a theme color.
- **Maintain the card metaphor.** Almost everything in the brand is "on a card" — projects, CTAs, stats. Cards have the brutal border + shadow + radius. This containment creates visual rhythm and makes the brand feel modular and organized.

### DON'T

- **Don't use gradients as backgrounds.** The brand aesthetic is flat color with hard edges. Gradients are allowed only as subtle, near-invisible radial glows behind focal points (like the hero section's blue glow at 6% opacity). Never as a visible color transition.
- **Don't use thin or light font weights.** The lightest weight in the system is 500 (medium) for body text. Display text is always 700-800. The brand is bold, not delicate.
- **Don't center everything.** The existing layout is left-aligned with clear hierarchy. Centered text is reserved for single-element CTAs (like the "Let's Work Together" card). Headlines, body text, and lists are left-aligned.
- **Don't use stock photography.** Screenshots, diagrams, icons, and the headshot are fine. Generic stock photos would undermine the handcrafted, specific energy of the brand.
- **Don't use rounded/pill shapes for cards.** The 16px radius is generous but not circular. Cards should feel like rectangles with softened corners, not capsules or circles. (Pills are for tags and small badges only.)
- **Don't make shadows soft or blurred.** The offset shadows are hard-edged (0 blur radius). Adding blur would shift the aesthetic from neubrutalist to generic material design.
- **Don't animate everything.** If every element on screen is moving, nothing is moving. The floating badges and pulsing dots work because they exist in contrast to static structural elements. Keep the ratio at roughly 70% static / 30% animated.
- **Don't use red, orange, or purple.** The palette is tight: blue, green, black, off-white, white, gray. The traffic-light dots on project cards are the only exception (and they're a specific UI metaphor, not brand colors). Introducing warm accent colors would clash with the cool-primary palette.
- **Don't drop the black.** #141414 is the skeleton of the brand. Borders, shadows, text — they all depend on this near-black. Going to a softer gray for structural elements (borders, shadows) would collapse the neubrutalist character into something generic.
- **Don't use decorative illustration or mascots.** The brand's visual interest comes from its structural design language (cards, shadows, type, color blocks), not from illustrative content. No characters, no hand-drawn doodles, no abstract art fills.

---

## 6. Quick-Reference: Brand Signature Checklist

When evaluating whether a visual asset "feels like Kevin Hu's brand," check for these signals. An on-brand piece should hit at least 4 of 6:

| # | Signal | How to spot it |
|---|---|---|
| 1 | **Black offset shadow** | At least one element has a hard 4px 4px 0 #141414 shadow |
| 2 | **Primary blue focal point** | #1CB0F6 is used for the single most important interactive or attention-grabbing element |
| 3 | **Warm, not sterile** | Background is #FAF9F6 or similarly warm; nothing feels clinical |
| 4 | **Thick black borders** | At least one container has a 2px solid #141414 border |
| 5 | **Bold display type** | Headline text is in a heavy grotesque (700-800 weight), tight tracking |
| 6 | **Visible craft** | Technology badges, tool names, stats, or process details are shown, not hidden |

If a banner or asset hits all 6, it's unmistakably Kevin Hu. If it hits 0-2, it could be anyone's brand.

---

## 7. Color Usage Recipes

For designers who want quick starting points:

**"The Default" (most banners/content)**
- Background: #FAF9F6
- Card: #FFFFFF with 2px #141414 border + shadow
- Headline: #141414 in Bricolage Grotesque
- Accent: #1CB0F6 on one CTA or highlight
- Body: #141414 at 70% opacity in Plus Jakarta Sans

**"The Inverted" (high-impact moments)**
- Background: #1CB0F6
- Card: #FFFFFF with 2px #141414 border + shadow
- Headline: #FFFFFF
- Accent: #22C55E on badges
- Body: #FFFFFF at 85% opacity

**"The Dark" (video intros, overlays)**
- Background: #141414
- Card: #FFFFFF with no extra border (it stands out by contrast)
- Headline: #FFFFFF or #1CB0F6
- Accent: #22C55E for status indicators
- Body: #FFFFFF at 70% opacity

---

## 8. Typography Quick Reference

| Role | Font | Weight | Size (desktop) | Tracking | Case |
|---|---|---|---|---|---|
| Page headline | Bricolage Grotesque | 800 | 3-3.5rem (clamp) | -0.03em | Sentence |
| Section heading | Bricolage Grotesque | 700 | 2.25rem | -0.02em | Sentence |
| Card title | Bricolage Grotesque | 700 | 1.25rem | default | Sentence |
| Button / CTA | Bricolage Grotesque | 700 | 0.9375rem | 0.03em | UPPERCASE |
| Eyebrow / label | Bricolage Grotesque | 700 | 0.8125rem | 0.06em | UPPERCASE |
| Body text | Plus Jakarta Sans | 500 | 1.0625rem | default | Sentence |
| Tag / pill | Plus Jakarta Sans | 500-600 | 0.75-0.875rem | default | Sentence |
| Stat number | Bricolage Grotesque | 800 | 2-4rem | -0.02em | N/A |

---

*This document is a creative brief, not a constraint list. The best branded assets will take these principles and push them somewhere unexpected — while still feeling unmistakably like Kevin Hu's workshop.*
