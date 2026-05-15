export const BRAND_KIT_TABS = [
  { slug: "tokens",     label: "Design Tokens" },
  { slug: "components", label: "Components" },
  { slug: "content",    label: "Content" },
  { slug: "animations", label: "Animations" },
  { slug: "heroes",     label: "Hero Sections" },
  { slug: "data",       label: "Data & Metrics" },
] as const;

export type BrandKitTabSlug = (typeof BRAND_KIT_TABS)[number]["slug"];

export type TOCItem = { id: string; text: string };

export const TOC_ITEMS_BY_TAB: Record<BrandKitTabSlug, TOCItem[]> = {
  tokens: [
    { id: "colors",          text: "Colors" },
    { id: "typography",      text: "Typography" },
    { id: "shadows-borders", text: "Shadows & Borders" },
    { id: "border-radius",   text: "Border Radius" },
  ],
  components: [
    { id: "buttons",         text: "Buttons" },
    { id: "cards",           text: "Cards" },
    { id: "skill-pills",     text: "Skill Pills" },
    { id: "layout-patterns", text: "Layout Patterns" },
  ],
  content: [
    { id: "callouts",       text: "Callouts" },
    { id: "tables",         text: "Tables" },
  ],
  animations: [
    { id: "easing-curves",          text: "Easing Curves" },
    { id: "transition-recipes",     text: "Transition Recipes" },
    { id: "motion-principles",      text: "Motion Principles" },
    { id: "animated-hero-entrance", text: "Animated Hero Entrance" },
    { id: "counting-stats",         text: "Counting Stats" },
    { id: "card-cascade",           text: "Card Cascade" },
    { id: "floating-skill-badges",  text: "Floating Skill Badges" },
    { id: "pulsing-cta-block",      text: "Pulsing CTA Block" },
    { id: "marquee-ticker",         text: "Marquee / Ticker" },
  ],
  heroes: [
    { id: "terminal-card",          text: "Terminal Card" },
    { id: "stat-wall",              text: "Stat Wall" },
    { id: "the-stack",              text: "The Stack" },
    { id: "bridge-diagram",         text: "Bridge Diagram" },
    { id: "marquee-strip-enhanced", text: "Marquee Strip (Enhanced)" },
    { id: "window-card",            text: "Window Card" },
    { id: "headshot-split",         text: "Headshot Split" },
    { id: "availability-badge",     text: "Availability Badge" },
    { id: "quote-block",            text: "Quote Block" },
    { id: "split-comparison",       text: "Split Comparison" },
    { id: "social-card",            text: "Social Card" },
    { id: "architecture-diagram",   text: "Architecture Diagram" },
    { id: "annotated-screenshot",   text: "Annotated Screenshot" },
    { id: "process-timeline",       text: "Process Timeline" },
  ],
  data: [
    { id: "score-progression", text: "Score Progression" },
    { id: "hero-metric",       text: "Hero Metric" },
    { id: "metric-tile",       text: "Metric Tile" },
    { id: "delta-tile",        text: "Delta Tile" },
    { id: "sparkline-bar-row", text: "Sparkline & Bar Row" },
    { id: "code-block",        text: "Code Block" },
    { id: "drilldown-card",    text: "Drill-down Card" },
  ],
};
