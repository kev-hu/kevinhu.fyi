# Banner Components Specification

> Five rich, animated banner components for the `/brand-kit` page on kevinhu.fyi.
> Each spec is implementation-ready: pixel values, hex colors, exact CSS properties, keyframe definitions, and responsive behavior.

**Date:** 2026-02-28
**Target file:** `app/brand-kit/page.tsx` (append to existing page) or individual component files in `components/banners/`
**CSS additions:** `app/globals.css` under `@layer components`

---

## Shared Conventions (inherited from codebase)

These apply to ALL five banners and should not be re-stated per component:

| Token | Value |
|---|---|
| `--color-primary` | `#1CB0F6` |
| `--color-primary-hover` | `#1490CC` |
| `--color-secondary` | `#22C55E` |
| `--color-foreground` | `#141414` |
| `--color-background` | `#FAF9F6` |
| `--color-card` | `#FFFFFF` |
| `--color-muted` | `#E5E5E5` |
| `--font-display` | `var(--font-bricolage)` (Bricolage Grotesque) |
| `--font-body` | `var(--font-jakarta)` (Plus Jakarta Sans) |
| `--shadow-brutal` | `4px 4px 0 #141414` |
| `--shadow-brutal-sm` | `2px 2px 0 #141414` |
| `--shadow-brutal-primary` | `0 4px 0 #1490CC` |
| `--radius-card` | `16px` |
| `--radius-container` | `12px` |
| `--radius-button` | `6px` |
| Standard border | `2px solid var(--color-foreground)` |
| Section container | `max-width: 1200px; margin: 0 auto; padding: 0 24px` (mobile), `0 48px` (lg) |
| Styling pattern | Layout/spacing/color via inline `style` props; interactive states via CSS classes in `globals.css`; responsive via Tailwind utilities or `.desktop-only` |

---

## Component 1: The Terminal Card

A neubrutalist macOS-style terminal window that types out a tagline with a blinking cursor. Floating skill badges orbit around it.

### 1.1 Layout

```
Outer wrapper:
  position: relative
  width: 100%
  padding: 48px 0 (vertical breathing room for floating badges)
  display: flex
  justify-content: center
  align-items: center
  min-height: 400px (desktop), 320px (mobile)

Terminal window:
  position: relative
  z-index: 1
  width: 100%
  max-width: 560px
  background: var(--color-card)
  border: 2px solid var(--color-foreground)
  border-radius: var(--radius-card)
  box-shadow: var(--shadow-brutal)
  overflow: hidden

Floating badges:
  position: absolute (relative to outer wrapper)
  z-index: 0
  scattered around terminal at fixed positions
```

### 1.2 Elements

#### Title Bar
```css
height: 44px
background: var(--color-foreground)  /* #141414 */
display: flex
align-items: center
padding: 0 16px
gap: 0
border-bottom: none (contained within border-radius overflow: hidden)
```

**Traffic-light dots** (3 circles, left-aligned):
```css
/* Container */
display: flex
align-items: center
gap: 8px

/* Each dot */
width: 12px
height: 12px
border-radius: 50%
flex-shrink: 0

/* Colors (left to right) */
dot-1: background-color: #FF5F57  /* close - red */
dot-2: background-color: #FFBD2E  /* minimize - yellow */
dot-3: background-color: #28C840  /* maximize - green */
```

**Window title** (right of dots, pushed to center with flex):
```css
flex: 1
text-align: center
font-family: var(--font-body), sans-serif
font-size: 0.8125rem  /* 13px */
font-weight: 500
color: rgba(255, 255, 255, 0.5)
user-select: none
letter-spacing: 0.02em
```
Text content: `"kevin@portfolio ~ %"`

#### Terminal Body
```css
background: #1a1a2e  /* dark navy, not pure black - gives depth */
padding: 28px 24px
min-height: 160px
display: flex
flex-direction: column
gap: 12px
```

**Prompt line** (static, always visible):
```css
font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace
font-size: 0.9375rem  /* 15px */
line-height: 1.6
color: rgba(255, 255, 255, 0.5)
```
Text content: `"$ echo $TAGLINE"`

**Output line** (typed out character by character):
```css
font-family: var(--font-display), sans-serif
font-size: 1.5rem  /* 24px */
font-weight: 700
letter-spacing: -0.02em
line-height: 1.3
color: #FFFFFF
overflow: hidden
white-space: nowrap
border-right: 3px solid var(--color-primary)  /* blinking cursor */
```
Text content: `"MBA who codes."` (typed out)

**Cursor blink** (on the border-right of the output line):
```css
/* The cursor is the border-right on the output line */
border-right: 3px solid var(--color-primary)
```

**Secondary output line** (appears after typing completes):
```css
font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace
font-size: 0.8125rem
color: var(--color-secondary)  /* #22C55E - green, like terminal success */
opacity: 0  /* fades in after typing */
```
Text content: `"// ready to ship"`

#### Floating Skill Badges (6 badges positioned absolutely)

Each badge:
```css
position: absolute
background: var(--color-card)
border: 2px solid var(--color-foreground)
border-radius: var(--radius-button)  /* 6px */
box-shadow: var(--shadow-brutal-sm)  /* 2px 2px 0 #141414 */
padding: 8px 14px
font-family: var(--font-body), sans-serif
font-size: 0.8125rem  /* 13px */
font-weight: 600
color: var(--color-foreground)
white-space: nowrap
display: inline-flex
align-items: center
gap: 6px
```

**Badge positions (desktop):**
| Badge | Content | top | left/right |
|---|---|---|---|
| 1 | "React" | 12% | left: 2% |
| 2 | "AI / ML" | 8% | right: 5% |
| 3 | "TypeScript" | 45% | left: -2% |
| 4 | "Next.js" | 78% | left: 8% |
| 5 | "Python" | 50% | right: 0% |
| 6 | "Supabase" | 82% | right: 6% |

### 1.3 Animation

#### Typing animation (CSS-only via `@keyframes` + `steps()`)
```css
@keyframes typing-terminal {
  0%        { width: 0; }
  2%        { width: 0; }
  40%       { width: 14ch; }   /* "MBA who codes." = 14 chars */
  100%      { width: 14ch; }
}

@keyframes blink-cursor {
  0%, 100%  { border-color: var(--color-primary); }
  50%       { border-color: transparent; }
}

@keyframes fade-in-ready {
  0%, 45%   { opacity: 0; transform: translateY(4px); }
  55%, 85%  { opacity: 1; transform: translateY(0); }
  95%, 100% { opacity: 0; transform: translateY(0); }
}

/* Applied to output line */
.terminal-type-line {
  animation:
    typing-terminal 8s steps(14) infinite,
    blink-cursor 0.8s step-end infinite;
}

/* Applied to secondary line */
.terminal-ready-line {
  animation: fade-in-ready 8s ease infinite;
}
```

#### Floating badge bob (reuse existing float-badge, add new ones for more variety)
```css
/* Reuse existing motion-float-1 through motion-float-7 classes */
/* Badges use the existing float-badge keyframe: translateY(0 -> -10px -> 0) */
/* Assign each badge a different motion-float-N class for organic stagger */
```

**Timing summary:**
- Typing: 8s total loop, `steps(14)` easing for typewriter effect
- Cursor blink: 0.8s infinite, `step-end`
- Ready line fade: 8s total, appears at 45%, fades at 95%
- Badge float: 2.6s-3.6s per badge, ease-in-out, staggered delays 0.1s-1.2s

### 1.4 Responsive (< 768px)

```
Terminal window:
  max-width: 100% (fills container)

Floating badges:
  display: none  /* Hide on mobile - terminal fills width, no room */
  Use .desktop-only class on the badge container

Terminal body:
  padding: 20px 16px

Output line:
  font-size: 1.25rem  /* slightly smaller */

Outer wrapper:
  min-height: auto
  padding: 24px 0
```

### 1.5 Code Structure Hint

- **Client component required:** YES (`"use client"`) - the typing animation uses CSS animations that need `steps()` easing, which works fine in CSS. However, if we want the typing to restart on scroll into view, we would need `IntersectionObserver`. For the looping version (no scroll trigger), a pure server component with CSS-only animation is fine.
- **Recommended approach:** Server component. All animations are CSS-only via classes defined in `globals.css`.
- **New CSS classes needed in `globals.css`:** `.terminal-type-line`, `.terminal-ready-line` (keyframes + animation assignment)
- **Component name:** `BannerTerminalCard` or inline in `brand-kit/page.tsx`

---

## Component 2: The Stat Wall

Inverted blue background section with a 2x2 grid of counting stat cards. Bold numbers with a "counting up" CSS animation. Availability badge anchored top-right.

### 2.1 Layout

```
Outer container (full-width blue block):
  width: 100%
  background: var(--color-primary)  /* #1CB0F6 */
  border: 2px solid var(--color-foreground)
  border-radius: var(--radius-card)  /* 16px */
  box-shadow: var(--shadow-brutal)
  overflow: hidden
  padding: 48px 40px  (desktop)
  padding: 32px 20px  (mobile)
  position: relative

Inner layout:
  display: grid
  grid-template-columns: 1fr 1fr  /* 2 columns */
  gap: 20px
  max-width: 560px  /* constrain grid width, center it */
  margin: 0 auto

Header row (above grid):
  display: flex
  justify-content: space-between
  align-items: flex-start
  margin-bottom: 32px
  max-width: 560px
  margin-left: auto
  margin-right: auto
```

### 2.2 Elements

#### Header (left side)
```css
/* Eyebrow */
font-family: var(--font-display), sans-serif
font-size: 0.8125rem
font-weight: 700
letter-spacing: 0.06em
text-transform: uppercase
color: rgba(255, 255, 255, 0.6)
margin-bottom: 8px
```
Text: `"Impact at a Glance"`

```css
/* Title */
font-family: var(--font-display), sans-serif
font-size: clamp(1.5rem, 3vw, 2rem)
font-weight: 800
letter-spacing: -0.03em
line-height: 1.1
color: #FFFFFF
margin: 0
```
Text: `"Results That Ship"`

#### Availability Badge (top-right)
```css
display: inline-flex
align-items: center
gap: 8px
background: rgba(255, 255, 255, 0.15)
border: 2px solid rgba(255, 255, 255, 0.3)
border-radius: 100px  /* full pill */
padding: 6px 16px
font-family: var(--font-body), sans-serif
font-size: 0.75rem
font-weight: 700
letter-spacing: 0.04em
color: #FFFFFF
white-space: nowrap
```

**Pulsing dot inside badge:**
```css
width: 8px
height: 8px
border-radius: 50%
background: var(--color-secondary)  /* #22C55E */
/* Reuse existing .availability-dot class for pulse animation */
```
Text: `"Available Now"`

#### Stat Cards (4 cards in 2x2 grid)

Each card:
```css
background: #FFFFFF
border: 2px solid var(--color-foreground)
border-radius: var(--radius-container)  /* 12px */
box-shadow: var(--shadow-brutal-sm)  /* 2px 2px 0 #141414 */
padding: 24px 20px
text-align: center
```

**Stat number:**
```css
font-family: var(--font-display), sans-serif
font-size: 2.5rem  /* 40px */
font-weight: 800
letter-spacing: -0.03em
line-height: 1
color: var(--color-primary)  /* #1CB0F6 */
margin: 0
margin-bottom: 6px
```

**Stat label:**
```css
font-family: var(--font-body), sans-serif
font-size: 0.8125rem  /* 13px */
font-weight: 500
color: var(--color-foreground)
opacity: 0.6
margin: 0
line-height: 1.3
```

**Stat data:**
| Card | Number | Label |
|---|---|---|
| 1 | "50+" | "Projects Shipped" |
| 2 | "10x" | "Faster Delivery" |
| 3 | "99%" | "Client Retention" |
| 4 | "4+" | "Industries Served" |

### 2.3 Animation

#### Card entrance (staggered pop-in)
Reuse existing `pop-in` keyframe from `globals.css`:
```css
/* Already defined in globals.css */
@keyframes pop-in {
  0%, 8%    { opacity: 0; transform: scale(0.7); }
  18%, 72%  { opacity: 1; transform: scale(1); }
  85%, 100% { opacity: 0; transform: scale(0.95); }
}

/* Apply to each card */
.stat-wall-card-1 { animation: pop-in 6s ease infinite; }
.stat-wall-card-2 { animation: pop-in 6s ease 0.2s infinite; }
.stat-wall-card-3 { animation: pop-in 6s ease 0.4s infinite; }
.stat-wall-card-4 { animation: pop-in 6s ease 0.6s infinite; }
```

#### Number count-up
Reuse existing count keyframes from `globals.css`:
```css
/* Already defined: count-50, count-10, count-99, count-4 */
/* Apply via CSS content on a ::after pseudo-element, OR simply display static values */
/* Recommendation: Use the static number values and rely on the pop-in entrance for motion. */
/* The existing count keyframes use content property which requires ::after — complex for inline React. */
/* Simpler approach: static numbers + pop-in scale animation = sufficient visual impact. */
```

#### Availability dot pulse
```css
/* Reuse existing .availability-dot class */
animation: pulse-dot 2s ease-in-out infinite
/* scale(1 -> 0.75 -> 1) + opacity(1 -> 0.5 -> 1) */
```

### 2.4 Responsive (< 768px)

```
Outer container:
  padding: 32px 20px

Grid:
  grid-template-columns: 1fr 1fr  /* stays 2x2 on mobile */
  gap: 12px

Header row:
  flex-direction: column
  align-items: flex-start
  gap: 12px

Availability badge:
  align-self: flex-start (stacks below title on mobile)

Stat number:
  font-size: 2rem  /* 32px, slightly smaller */

Stat card padding:
  padding: 20px 16px
```

### 2.5 Code Structure Hint

- **Client component required:** NO. Pure CSS animations, server component is fine.
- **New CSS classes needed:** `.stat-wall-card-1` through `.stat-wall-card-4` (or reuse `.motion-stat-1` through `.motion-stat-4` which are already defined)
- **Recommendation:** Reuse the existing `.motion-stat-1` through `.motion-stat-4` classes directly. No new CSS needed.
- **Component name:** `BannerStatWall` or inline in `brand-kit/page.tsx`

---

## Component 3: The Stack

Cascading project cards arranged diagonally with overlap and slight rotation. Creates a "fanned deck" or "spread hand of cards" effect showing depth of work.

### 3.1 Layout

```
Outer container:
  width: 100%
  background: var(--color-background)  /* #FAF9F6 - default recipe */
  border: 2px solid var(--color-foreground)
  border-radius: var(--radius-card)
  box-shadow: var(--shadow-brutal)
  padding: 48px 40px (desktop)
  padding: 32px 20px (mobile)
  position: relative
  overflow: hidden  /* clip cards that extend beyond container */

Card stack area:
  position: relative
  height: 340px (desktop), 280px (mobile)
  width: 100%
  max-width: 600px
  margin: 0 auto
```

### 3.2 Elements

#### Section Header (above the stack)
```css
/* Eyebrow */
font-family: var(--font-display), sans-serif
font-size: 0.8125rem
font-weight: 700
letter-spacing: 0.06em
text-transform: uppercase
color: var(--color-primary)
margin-bottom: 8px
```
Text: `"Portfolio"`

```css
/* Title */
font-family: var(--font-display), sans-serif
font-size: clamp(1.5rem, 3vw, 2rem)
font-weight: 800
letter-spacing: -0.03em
line-height: 1.1
color: var(--color-foreground)
margin: 0
margin-bottom: 32px
```
Text: `"Depth of Work"`

#### Stacked Cards (3 cards, each positioned absolutely within the stack area)

Each card is a simplified project card:
```css
position: absolute
width: 300px (desktop), 240px (mobile)
background: var(--color-card)
border: 2px solid var(--color-foreground)
border-radius: var(--radius-card)
box-shadow: var(--shadow-brutal)
overflow: hidden
```

**Card inner structure:**

Title bar (identical to ProjectCard):
```css
height: 36px
background: var(--color-foreground)
display: flex
align-items: center
padding: 0 12px
gap: 8px

/* Traffic light dots: same as ProjectCard */
/* 12px circles, #FF5F57, #FFBD2E, #28C840 */
```

Thumbnail area:
```css
height: 120px (desktop), 100px (mobile)
background: <varies per card, see below>
```

Card body:
```css
padding: 16px
```

Card title text:
```css
font-family: var(--font-display), sans-serif
font-size: 1rem
font-weight: 700
color: var(--color-foreground)
margin: 0
margin-bottom: 4px
```

Card subtitle text:
```css
font-family: var(--font-body), sans-serif
font-size: 0.8125rem
color: var(--color-foreground)
opacity: 0.6
margin: 0
```

**Card stack positions and rotations (desktop):**

| Card | z-index | top | left | rotate | Thumbnail BG | Title | Subtitle |
|---|---|---|---|---|---|---|---|
| Back (3) | 1 | 20px | 40px | -4deg | `var(--color-muted)` | "Data Pipeline" | "ETL automation" |
| Middle (2) | 2 | 30px | calc(50% - 150px) | 0deg | `rgba(28, 176, 246, 0.12)` | "AI Platform" | "ML-powered insights" |
| Front (1) | 3 | 10px | calc(100% - 340px) | 3deg | `rgba(34, 197, 94, 0.12)` | "Growth Engine" | "0-to-1 product" |

Each card has a colored accent bar at the top of the thumbnail area:
```css
/* Thin bar inside thumbnail, at top */
position: absolute
top: 0
left: 0
right: 0
height: 4px

Card 1 (front): background: var(--color-secondary)  /* green */
Card 2 (middle): background: var(--color-primary)    /* blue */
Card 3 (back): background: #F59E0B                   /* amber */
```

### 3.3 Animation

#### Cascade entrance (staggered slide-in from right with rotation)

Reuse existing `cascade-in` keyframe:
```css
/* Already defined in globals.css */
@keyframes cascade-in {
  0%, 5%    { opacity: 0; transform: translateX(120px) rotate(4deg); }
  20%, 70%  { opacity: 1; transform: translateX(0) rotate(0deg); }
  85%, 100% { opacity: 0; transform: translateX(-20px) rotate(-1deg); }
}
```

Apply with modified final transforms that include the card's resting rotation:
```css
/* New keyframes that land at the correct rotation */
@keyframes stack-cascade-back {
  0%, 5%    { opacity: 0; transform: translateX(120px) rotate(8deg); }
  20%, 70%  { opacity: 1; transform: translateX(0) rotate(-4deg); }
  85%, 100% { opacity: 0; transform: translateX(-20px) rotate(-5deg); }
}

@keyframes stack-cascade-mid {
  0%, 5%    { opacity: 0; transform: translateX(120px) rotate(4deg); }
  20%, 70%  { opacity: 1; transform: translateX(0) rotate(0deg); }
  85%, 100% { opacity: 0; transform: translateX(-20px) rotate(-1deg); }
}

@keyframes stack-cascade-front {
  0%, 5%    { opacity: 0; transform: translateX(120px) rotate(0deg); }
  20%, 70%  { opacity: 1; transform: translateX(0) rotate(3deg); }
  85%, 100% { opacity: 0; transform: translateX(-20px) rotate(2deg); }
}

.stack-card-back  { animation: stack-cascade-back 7s ease infinite; }
.stack-card-mid   { animation: stack-cascade-mid 7s ease 0.3s infinite; }
.stack-card-front { animation: stack-cascade-front 7s ease 0.6s infinite; }
```

**Timing:**
- 7s total loop (slightly longer to let the spread breathe)
- Stagger: 0s, 0.3s, 0.6s
- Easing: `ease`

### 3.4 Responsive (< 768px)

```
Card stack area:
  height: 280px

All cards:
  width: 220px

Card positions (mobile) - tighter spread, less rotation:
  Back:   top: 30px, left: 10px, rotate: -2deg
  Middle: top: 35px, left: calc(50% - 110px), rotate: 0deg
  Front:  top: 15px, left: calc(100% - 230px), rotate: 2deg

Thumbnail height: 90px

Card title: font-size: 0.875rem
Card subtitle: font-size: 0.75rem
```

**Alternative mobile layout:** If cards overlap too much on small screens (< 480px), switch to a vertical stack:
```css
@media (max-width: 480px) {
  /* Stack vertically with small overlap */
  Card stack area: height: auto
  Cards: position: relative (not absolute)
  Each card: margin-top: -24px (overlap), rotate: 0
  First card: margin-top: 0
}
```

### 3.5 Code Structure Hint

- **Client component required:** NO. Pure CSS animations, server component is fine.
- **New CSS classes needed:** `.stack-card-back`, `.stack-card-mid`, `.stack-card-front` with corresponding `@keyframes` in `globals.css`
- **Alternative:** Could reuse `.motion-card-1/2/3` from existing cascade-in animations if resting rotation is applied via inline `style` and the animation just handles entrance opacity/translateX.
- **Component name:** `BannerStack` or inline in `brand-kit/page.tsx`

---

## Component 4: The Bridge Diagram

Visualizes the "business/engineering bridge" concept. Green business-side pills on the left, blue tech-side pills on the right, with animated connector lines meeting at a center node.

### 4.1 Layout

```
Outer container:
  width: 100%
  background: var(--color-card)  /* #FFFFFF */
  border: 2px solid var(--color-foreground)
  border-radius: var(--radius-card)
  box-shadow: var(--shadow-brutal)
  padding: 48px 32px (desktop)
  padding: 32px 20px (mobile)
  position: relative
  overflow: hidden

Diagram area:
  display: flex
  align-items: center
  justify-content: center
  gap: 0  /* pills and center are positioned in a flex row */
  width: 100%
  max-width: 720px
  margin: 0 auto
  min-height: 280px (desktop), 240px (mobile)
  position: relative
```

**Three-column flex structure:**
```
Left column (business pills):
  flex: 1
  display: flex
  flex-direction: column
  align-items: flex-end  /* pills right-aligned toward center */
  gap: 12px

Center node:
  flex-shrink: 0
  width: 80px
  display: flex
  align-items: center
  justify-content: center

Right column (tech pills):
  flex: 1
  display: flex
  flex-direction: column
  align-items: flex-start  /* pills left-aligned toward center */
  gap: 12px
```

### 4.2 Elements

#### Section Header (above diagram)
```css
text-align: center
margin-bottom: 40px
```

Eyebrow:
```css
font-family: var(--font-display), sans-serif
font-size: 0.8125rem
font-weight: 700
letter-spacing: 0.06em
text-transform: uppercase
color: var(--color-secondary)
margin-bottom: 8px
```
Text: `"The Bridge"`

Title:
```css
font-family: var(--font-display), sans-serif
font-size: clamp(1.5rem, 3vw, 2rem)
font-weight: 800
letter-spacing: -0.03em
line-height: 1.1
color: var(--color-foreground)
margin: 0
```
Text: `"Business Meets Engineering"`

#### Business Pills (left side, 4 pills)

Each pill:
```css
display: inline-flex
align-items: center
gap: 8px
background: rgba(34, 197, 94, 0.1)  /* green tint */
border: 2px solid var(--color-secondary)  /* #22C55E */
border-radius: 100px  /* full pill */
padding: 10px 20px
font-family: var(--font-body), sans-serif
font-size: 0.875rem
font-weight: 600
color: #15803d  /* dark green text */
white-space: nowrap
```

**Pill icon (left of text):** Small circle indicator
```css
width: 8px
height: 8px
border-radius: 50%
background: var(--color-secondary)
flex-shrink: 0
```

**Business pill content:**
| # | Text |
|---|---|
| 1 | "Product Strategy" |
| 2 | "Market Research" |
| 3 | "Business Models" |
| 4 | "Growth & GTM" |

#### Tech Pills (right side, 4 pills)

Each pill:
```css
display: inline-flex
align-items: center
gap: 8px
background: rgba(28, 176, 246, 0.1)  /* blue tint */
border: 2px solid var(--color-primary)  /* #1CB0F6 */
border-radius: 100px
padding: 10px 20px
font-family: var(--font-body), sans-serif
font-size: 0.875rem
font-weight: 600
color: #0369a1  /* dark blue text */
white-space: nowrap
```

**Pill icon:** Same 8px circle but blue
```css
background: var(--color-primary)
```

**Tech pill content:**
| # | Text |
|---|---|
| 1 | "Full-Stack Dev" |
| 2 | "AI / ML" |
| 3 | "Data Pipelines" |
| 4 | "System Design" |

#### Center Node

```css
width: 56px
height: 56px
border-radius: 50%
background: var(--color-foreground)  /* #141414 */
border: 2px solid var(--color-foreground)
box-shadow: var(--shadow-brutal-sm)
display: flex
align-items: center
justify-content: center
position: relative
z-index: 2
```

**Icon inside center node** (use a simple code/bridge symbol via SVG or Unicode):
```
Character: "K" (for Kevin)
font-family: var(--font-display), sans-serif
font-size: 1.25rem
font-weight: 800
color: #FFFFFF
```

Or alternatively, use a small bridge/link icon SVG:
```html
<!-- Simple link icon -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        stroke="white" stroke-width="2" stroke-linecap="round"/>
  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
```

#### Connector Lines (SVG overlay)

The connector lines run horizontally from each pill to the center node. Implemented as an absolutely-positioned SVG behind the pills.

```css
/* SVG container */
position: absolute
inset: 0
z-index: 0
pointer-events: none
```

**Line style:**
```css
stroke: var(--color-muted)  /* #E5E5E5 */
stroke-width: 2
stroke-dasharray: 6 4  /* dashed line */
fill: none
```

There are 8 lines total (4 from left pills to center, 4 from center to right pills). Each line is a simple horizontal `<line>` SVG element connecting the pill's edge to the center circle.

**Implementation note:** Because exact positions depend on rendered layout, the simplest approach is to use 8 short horizontal lines with approximate y-positions, or use CSS pseudo-elements (`::after`) on each pill as a simpler alternative:

```css
/* Alternative: CSS lines via ::after on each pill */
.bridge-pill-left::after {
  content: '';
  position: absolute;
  right: -40px;  /* extends toward center */
  top: 50%;
  width: 32px;
  height: 0;
  border-top: 2px dashed var(--color-muted);
}

.bridge-pill-right::before {
  content: '';
  position: absolute;
  left: -40px;
  top: 50%;
  width: 32px;
  height: 0;
  border-top: 2px dashed var(--color-muted);
}
```

Each pill needs `position: relative` for this to work.

### 4.3 Animation

#### Pill entrance (staggered fade-in from sides)
```css
@keyframes bridge-enter-left {
  0%, 5%    { opacity: 0; transform: translateX(-30px); }
  15%, 72%  { opacity: 1; transform: translateX(0); }
  85%, 100% { opacity: 0; transform: translateX(-10px); }
}

@keyframes bridge-enter-right {
  0%, 5%    { opacity: 0; transform: translateX(30px); }
  15%, 72%  { opacity: 1; transform: translateX(0); }
  85%, 100% { opacity: 0; transform: translateX(10px); }
}

@keyframes bridge-center-pulse {
  0%, 10%   { opacity: 0; transform: scale(0.5); }
  20%, 75%  { opacity: 1; transform: scale(1); }
  85%, 100% { opacity: 0; transform: scale(0.9); }
}

/* Left pills - staggered */
.bridge-left-1 { animation: bridge-enter-left 7s ease infinite; }
.bridge-left-2 { animation: bridge-enter-left 7s ease 0.15s infinite; }
.bridge-left-3 { animation: bridge-enter-left 7s ease 0.3s infinite; }
.bridge-left-4 { animation: bridge-enter-left 7s ease 0.45s infinite; }

/* Right pills - staggered, slightly later to create left-then-right sequence */
.bridge-right-1 { animation: bridge-enter-right 7s ease 0.5s infinite; }
.bridge-right-2 { animation: bridge-enter-right 7s ease 0.65s infinite; }
.bridge-right-3 { animation: bridge-enter-right 7s ease 0.8s infinite; }
.bridge-right-4 { animation: bridge-enter-right 7s ease 0.95s infinite; }

/* Center node - appears after both sides */
.bridge-center { animation: bridge-center-pulse 7s ease 0.6s infinite; }
```

#### Line draw-in (optional enhancement)
```css
@keyframes dash-draw {
  0%, 12%   { stroke-dashoffset: 40; opacity: 0; }
  25%, 72%  { stroke-dashoffset: 0; opacity: 1; }
  85%, 100% { stroke-dashoffset: 0; opacity: 0; }
}

/* Apply to SVG lines with stroke-dasharray: 40 */
.bridge-line {
  stroke-dasharray: 40;
  animation: dash-draw 7s ease infinite;
}
```

**Timing:** 7s total loop, easing: `ease`

### 4.4 Responsive (< 768px)

On mobile, the horizontal layout is too wide. Switch to a vertical layout:

```
Diagram area:
  flex-direction: column
  align-items: center
  gap: 16px

Left column (business pills):
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  align-items: center

Right column (tech pills):
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  align-items: center

Center node:
  margin: 8px 0
  /* Connector lines hidden on mobile */

Pill styles (mobile):
  padding: 8px 14px
  font-size: 0.8125rem

Connector lines:
  display: none on mobile

Section header margin-bottom: 24px
```

The pseudo-element connector lines (`::after`/`::before`) should be hidden on mobile:
```css
@media (max-width: 767px) {
  .bridge-pill-left::after,
  .bridge-pill-right::before {
    display: none;
  }
}
```

### 4.5 Code Structure Hint

- **Client component required:** NO. All CSS animation. Server component is fine.
- **New CSS classes needed:** `.bridge-left-1` through `.bridge-left-4`, `.bridge-right-1` through `.bridge-right-4`, `.bridge-center`, `.bridge-pill-left`, `.bridge-pill-right`, `.bridge-line`
- **SVG connector lines:** If using SVG, include inline `<svg>` in the JSX. If using CSS pseudo-elements, define `.bridge-pill-left::after` and `.bridge-pill-right::before` in `globals.css`.
- **Component name:** `BannerBridgeDiagram` or inline in `brand-kit/page.tsx`

---

## Component 5: The Marquee Strip (Enhanced)

Full-width scrolling ticker on primary blue background. Thicker than the existing marquee in the brand-kit page. Interspersed skill badges (pill-styled) between text keywords. Dual-layer effect with a second row scrolling in reverse.

### 5.1 Layout

```
Outer container (full-bleed):
  width: 100%
  background: var(--color-primary)  /* #1CB0F6 */
  border: 2px solid var(--color-foreground)
  border-radius: var(--radius-card)  /* 16px */
  box-shadow: var(--shadow-brutal)
  overflow: hidden
  padding: 0  /* no padding - marquee runs edge to edge */
  position: relative

Marquee row 1:
  padding: 20px 0
  border-bottom: 2px solid rgba(255, 255, 255, 0.15)
  overflow: hidden

Marquee row 2:
  padding: 20px 0
  overflow: hidden

Track (inside each row):
  display: flex
  gap: 32px
  white-space: nowrap
  width: max-content
  align-items: center
```

### 5.2 Elements

#### Row 1 Track Content (scrolls left)

The track consists of **text keywords** and **badge pills** in alternating pattern. The entire track is duplicated (2 copies) for seamless loop.

**Text keyword style:**
```css
font-family: var(--font-display), sans-serif
font-size: 1.5rem  /* 24px - bigger than existing 1.25rem marquee */
font-weight: 700
letter-spacing: 0.02em
text-transform: uppercase
color: #FFFFFF
flex-shrink: 0
```

**Badge pill style (interspersed between keywords):**
```css
display: inline-flex
align-items: center
gap: 6px
background: rgba(255, 255, 255, 0.15)
border: 2px solid rgba(255, 255, 255, 0.3)
border-radius: 100px  /* full pill */
padding: 6px 16px
font-family: var(--font-body), sans-serif
font-size: 0.8125rem  /* 13px */
font-weight: 600
color: #FFFFFF
white-space: nowrap
flex-shrink: 0
```

**Dot separator style (between items):**
```css
font-size: 0.625rem  /* 10px */
color: rgba(255, 255, 255, 0.3)
flex-shrink: 0
```
Character: `"*"` (asterisk, bolder than the existing dot separator)

**Row 1 content sequence (one copy):**
```
"Strategy" * [React badge] * "Design" * [AI / ML badge] * "Engineering" * [Next.js badge] * "Product" * [TypeScript badge] * "Ship Faster" *
```

Where `*` is the dot separator and `[X badge]` is a pill-styled badge.

Badge content list for Row 1:
| Badge text |
|---|
| "React" |
| "AI / ML" |
| "Next.js" |
| "TypeScript" |

#### Row 2 Track Content (scrolls right - reverse direction)

Same structure, different content:

**Row 2 content sequence (one copy):**
```
"Analytics" * [Python badge] * "Growth" * [Supabase badge] * "Automation" * [n8n badge] * "Startups" * [BigQuery badge] * "Build Fast" *
```

Badge content list for Row 2:
| Badge text |
|---|
| "Python" |
| "Supabase" |
| "n8n" |
| "BigQuery" |

### 5.3 Animation

#### Row 1: Scroll left (continuous)
```css
/* Reuse existing marquee-scroll keyframe */
@keyframes marquee-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-enhanced-row-1 {
  animation: marquee-scroll 25s linear infinite;
}
```

#### Row 2: Scroll right (reverse, slightly different speed)
```css
@keyframes marquee-scroll-reverse {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.marquee-enhanced-row-2 {
  animation: marquee-scroll-reverse 30s linear infinite;
}
```

The different speeds (25s vs 30s) create a subtle desynchronization that prevents visual monotony.

**Timing:**
- Row 1: 25s linear infinite (left scroll)
- Row 2: 30s linear infinite (right scroll)
- No pausing, no easing, pure continuous motion

### 5.4 Responsive (< 768px)

```
Text keywords:
  font-size: 1.125rem  /* 18px, scaled down from 24px */

Badge pills:
  padding: 4px 12px
  font-size: 0.75rem

Marquee row padding:
  padding: 14px 0  /* slightly thinner rows */

Gap between items:
  gap: 24px (down from 32px)
```

The marquee naturally works at any width because of the translateX(-50%) seamless loop pattern. No layout changes needed.

### 5.5 Code Structure Hint

- **Client component required:** NO. Pure CSS animation, server component is fine.
- **New CSS classes needed:** `.marquee-enhanced-row-1`, `.marquee-enhanced-row-2`, and `@keyframes marquee-scroll-reverse` in `globals.css`.
- **Note:** The existing `@keyframes marquee-scroll` and `.motion-marquee-track` can be reused for Row 1. Only the reverse keyframe is new.
- **Seamless loop technique:** Each row contains 2 identical copies of the content. `translateX(-50%)` shifts exactly one copy's width, creating the illusion of infinite scroll.
- **Component name:** `BannerMarqueeStrip` or inline in `brand-kit/page.tsx`

---

## Summary of New CSS Required in `globals.css`

All new keyframes and classes should be added under `@layer components` in `app/globals.css`, alongside the existing brand-kit motion classes.

### New Keyframes

```css
/* Terminal Card */
@keyframes typing-terminal {
  0%        { width: 0; }
  2%        { width: 0; }
  40%       { width: 14ch; }
  100%      { width: 14ch; }
}

@keyframes blink-cursor {
  0%, 100%  { border-color: #1CB0F6; }
  50%       { border-color: transparent; }
}

@keyframes fade-in-ready {
  0%, 45%   { opacity: 0; transform: translateY(4px); }
  55%, 85%  { opacity: 1; transform: translateY(0); }
  95%, 100% { opacity: 0; transform: translateY(0); }
}

/* The Stack */
@keyframes stack-cascade-back {
  0%, 5%    { opacity: 0; transform: translateX(120px) rotate(8deg); }
  20%, 70%  { opacity: 1; transform: translateX(0) rotate(-4deg); }
  85%, 100% { opacity: 0; transform: translateX(-20px) rotate(-5deg); }
}

@keyframes stack-cascade-mid {
  0%, 5%    { opacity: 0; transform: translateX(120px) rotate(4deg); }
  20%, 70%  { opacity: 1; transform: translateX(0) rotate(0deg); }
  85%, 100% { opacity: 0; transform: translateX(-20px) rotate(-1deg); }
}

@keyframes stack-cascade-front {
  0%, 5%    { opacity: 0; transform: translateX(120px) rotate(0deg); }
  20%, 70%  { opacity: 1; transform: translateX(0) rotate(3deg); }
  85%, 100% { opacity: 0; transform: translateX(-20px) rotate(2deg); }
}

/* Bridge Diagram */
@keyframes bridge-enter-left {
  0%, 5%    { opacity: 0; transform: translateX(-30px); }
  15%, 72%  { opacity: 1; transform: translateX(0); }
  85%, 100% { opacity: 0; transform: translateX(-10px); }
}

@keyframes bridge-enter-right {
  0%, 5%    { opacity: 0; transform: translateX(30px); }
  15%, 72%  { opacity: 1; transform: translateX(0); }
  85%, 100% { opacity: 0; transform: translateX(10px); }
}

@keyframes bridge-center-pulse {
  0%, 10%   { opacity: 0; transform: scale(0.5); }
  20%, 75%  { opacity: 1; transform: scale(1); }
  85%, 100% { opacity: 0; transform: scale(0.9); }
}

@keyframes dash-draw {
  0%, 12%   { stroke-dashoffset: 40; opacity: 0; }
  25%, 72%  { stroke-dashoffset: 0; opacity: 1; }
  85%, 100% { stroke-dashoffset: 0; opacity: 0; }
}

/* Marquee Strip (reverse only - forward already exists) */
@keyframes marquee-scroll-reverse {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
```

### New Classes

```css
/* Terminal Card */
.terminal-type-line {
  animation: typing-terminal 8s steps(14) infinite, blink-cursor 0.8s step-end infinite;
}
.terminal-ready-line {
  animation: fade-in-ready 8s ease infinite;
}

/* The Stack */
.stack-card-back  { animation: stack-cascade-back 7s ease infinite; }
.stack-card-mid   { animation: stack-cascade-mid 7s ease 0.3s infinite; }
.stack-card-front { animation: stack-cascade-front 7s ease 0.6s infinite; }

/* Bridge Diagram */
.bridge-left-1 { animation: bridge-enter-left 7s ease infinite; }
.bridge-left-2 { animation: bridge-enter-left 7s ease 0.15s infinite; }
.bridge-left-3 { animation: bridge-enter-left 7s ease 0.3s infinite; }
.bridge-left-4 { animation: bridge-enter-left 7s ease 0.45s infinite; }
.bridge-right-1 { animation: bridge-enter-right 7s ease 0.5s infinite; }
.bridge-right-2 { animation: bridge-enter-right 7s ease 0.65s infinite; }
.bridge-right-3 { animation: bridge-enter-right 7s ease 0.8s infinite; }
.bridge-right-4 { animation: bridge-enter-right 7s ease 0.95s infinite; }
.bridge-center { animation: bridge-center-pulse 7s ease 0.6s infinite; }
.bridge-line { stroke-dasharray: 40; animation: dash-draw 7s ease infinite; }
.bridge-pill-left { position: relative; }
.bridge-pill-right { position: relative; }
.bridge-pill-left::after {
  content: '';
  position: absolute;
  right: -40px;
  top: 50%;
  width: 32px;
  height: 0;
  border-top: 2px dashed #E5E5E5;
}
.bridge-pill-right::before {
  content: '';
  position: absolute;
  left: -40px;
  top: 50%;
  width: 32px;
  height: 0;
  border-top: 2px dashed #E5E5E5;
}
@media (max-width: 767px) {
  .bridge-pill-left::after,
  .bridge-pill-right::before {
    display: none;
  }
}

/* Marquee Strip (enhanced) */
.marquee-enhanced-row-1 { animation: marquee-scroll 25s linear infinite; }
.marquee-enhanced-row-2 { animation: marquee-scroll-reverse 30s linear infinite; }
```

### Reused Existing Classes (no changes needed)

- `.motion-float-1` through `.motion-float-7` (floating badges in Terminal Card)
- `.motion-stat-1` through `.motion-stat-4` (stat card entrance in Stat Wall)
- `.availability-dot` (pulsing green dot in Stat Wall)
- `.motion-marquee-track` / `@keyframes marquee-scroll` (base marquee scroll)

---

## Implementation Order (recommended)

1. **Marquee Strip** -- simplest, extends existing pattern, good warm-up
2. **Stat Wall** -- mostly reuses existing stat animation classes
3. **Terminal Card** -- new typing animation but self-contained
4. **The Stack** -- requires absolute positioning precision
5. **Bridge Diagram** -- most elements, connector lines add complexity

---

## Color Recipe per Banner

| Banner | Recipe | Background | Card/Element | Text | Accent |
|---|---|---|---|---|---|
| Terminal Card | Default | `#FAF9F6` | `#FFFFFF` / `#1a1a2e` (terminal body) | `#141414` / `#FFFFFF` (terminal) | `#1CB0F6` cursor, `#22C55E` ready line |
| Stat Wall | Inverted | `#1CB0F6` | `#FFFFFF` cards | `#FFFFFF` header / `#141414` card text | `#22C55E` availability dot |
| The Stack | Default | `#FAF9F6` | `#FFFFFF` cards | `#141414` | `#1CB0F6` eyebrow, multi-color accent bars |
| Bridge Diagram | Default | `#FFFFFF` | Green pills / Blue pills | `#141414` / `#15803d` / `#0369a1` | `#22C55E` + `#1CB0F6` dual accent |
| Marquee Strip | Inverted | `#1CB0F6` | Semi-transparent white badges | `#FFFFFF` | Badge border `rgba(255,255,255,0.3)` |
