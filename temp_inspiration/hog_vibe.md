You are implementing a A charming macOS-inspired design system for technical products, featuring glassmorphism, windowed containers, and an explorer-style sidebar.

## Colors
- muted: #6B6560
- primary: #F9A526
- background: #EEEBE4
- foreground: #1D1B1A

## Typography
- h1: {"fontSize":"2.25rem","fontWeight":"700","lineHeight":"1.2","letterSpacing":"-0.02em"}
- body: {"fontSize":"14px","fontWeight":"400","lineHeight":"1.5"}
- hero: {"fontSize":"2.25rem","fontWeight":"800","lineHeight":"1.1","letterSpacing":"-0.03em"}
- fontBody: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif
- fontDisplay: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif

## Layout Rules
- Desktop Canvas: A full-viewport background with subtle radial gradients (primary at top-left, purple at top-right, green bottom-center) on a neutral warm beige base.
- The Three-Column Grid: A 1200px max-width container with three distinct sections: a 240px left sidebar for navigation, a flexible center for 'windows', and a 260-300px right sidebar for widgets.
- Sticky Utilities: Navigation bars and sidebars use sticky positioning to remain accessible during scroll, with balanced top offsets (12px for nav, 86px for sidebars).
- Windowing Paradigm: Main content is encapsulated in 'Windows' featuring macOS-style title bars, traffic light icons, and clear borders.
- Responsive Stacking: Below 1050px, the grid collapses to a single column. The left sidebar becomes a horizontal scroller, and the right sidebar moves below the main content.
- Micro-Elevation: Interactive items like buttons and cards use thin borders (1px) and small shadows, with subtle 1px translate transforms on hover.

## Key Patterns
- Desktop Titlebar Nav: Sticky navigation bar with a glassmorphism effect, logo, and hierarchical call-to-action buttons.
- OS Window Container: A window-like container that mimics a macOS application interface, including traffic light controls and a titlebar pill.
- AI Coach Chat: A floating AI chat interface with message bubbles and quick-action chips.
- Explorer Sidebar: Side navigation rail mimicking a file explorer or desktop directory.

## Do
- OS-style window containers for content blocks
- Glassmorphic sticky navigation bars
- File explorer-style sidebar navigation
- High-contrast primary action buttons with glowing shadows
- Extensive use of functional badges and monospaced snippets
- Neutral warm-beige palette with vibrant status colors

## Don't
- A flat, minimalist corporate design
- High-contrast dark mode (currently light-centric)
- Full-screen immersive background photography
- Heavy material design shadows
- Brutalist or raw aesthetic
- Traditional bootstrap-style spacing