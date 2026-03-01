# Brand Kit Motion Showcase Design

## Goal
Add 6 animated/motion sections to the brand-kit page to serve as visual vocabulary for AI video tools. Each section demonstrates a brand-native motion pattern with pure CSS animations.

## Decisions
- **Approach:** Pure CSS animations (no JS libraries), keep as server component
- **Location:** New sections appended after existing static reference, under an "Animation & Motion" divider
- **Animation style:** Looping CSS keyframes so patterns replay continuously
- **File changes:** `app/brand-kit/page.tsx` (new sections) + `app/globals.css` (new keyframes)

## New Sections

### 1. Animated Hero Entrance
- Title slides up with staggered fade-in (title → subtitle → CTA button)
- Uses `@keyframes slide-fade-in` with `animation-delay` for stagger
- Loops on ~5s cycle (animate in, hold, fade out, reset)

### 2. Counting Stats
- 3-4 KPI cards with CSS counter animation (0 → final value)
- Cards pop in with staggered scale+fade (`@keyframes pop-in`)
- Numbers animate via CSS `@property` counter or stepped keyframes
- Example stats: "50+ Projects", "10x Faster", "99% Uptime"

### 3. Card Cascade
- 3 project-style cards slide in from the right with staggered timing
- Fan into position with slight rotation offset
- Uses `@keyframes cascade-in` with per-card delays

### 4. Floating Skill Badges
- Skill pills float/bob with subtle movement at different speeds
- Each pill has unique `animation-duration` and `animation-delay` for organic feel
- Uses `@keyframes float` with translateY oscillation

### 5. Pulsing CTA Block
- CTA card with rhythmic border glow (`@keyframes border-pulse`)
- Availability dot pulses (reuse existing `pulse-dot`)
- Button has subtle bounce animation

### 6. Marquee / Ticker
- Horizontal scrolling strip of brand keywords in display font
- Uses `@keyframes marquee-scroll` with translateX
- Duplicated content for seamless loop
