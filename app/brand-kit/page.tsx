import type { Metadata } from "next";
import Button from "@/components/Button";
import { Drilldown } from "@/components/Drilldown";
import { BrandKitTOC } from "@/components/BrandKitTOC";

export const metadata: Metadata = {
  title: "Brand Kit",
  description:
    "Design tokens, typography, and component patterns for kevinhu.fyi",
  robots: { index: false, follow: false },
};

/* ─── Token data ─────────────────────────────────────────────────────────────── */

const colors = [
  {
    name: "Primary",
    var: "--color-primary",
    hex: "#1CB0F6",
    usage: "CTAs, links, interactive highlights",
  },
  {
    name: "Primary Hover",
    var: "--color-primary-hover",
    hex: "#1490CC",
    usage: "Hover/active state for primary elements",
  },
  {
    name: "Secondary",
    var: "--color-secondary",
    hex: "#22C55E",
    usage: "Accent badges, availability indicators",
  },
  {
    name: "Foreground",
    var: "--color-foreground",
    hex: "#141414",
    usage: "Text, borders, shadow offsets",
  },
  {
    name: "Background",
    var: "--color-background",
    hex: "#FAF9F6",
    usage: "Page background (warm off-white)",
  },
  {
    name: "Card",
    var: "--color-card",
    hex: "#FFFFFF",
    usage: "Card/surface backgrounds",
  },
  {
    name: "Muted",
    var: "--color-muted",
    hex: "#E5E5E5",
    usage: "Borders, dividers, secondary button outlines",
  },
];

const shadows = [
  {
    name: "Brutal",
    var: "--shadow-brutal",
    value: "4px 4px 0 #141414",
    usage: "Cards, prominent containers",
  },
  {
    name: "Brutal Small",
    var: "--shadow-brutal-sm",
    value: "2px 2px 0 #141414",
    usage: "Smaller elements, tags",
  },
  {
    name: "Brutal Primary",
    var: "--shadow-brutal-primary",
    value: "0 4px 0 #1490CC",
    usage: "Primary buttons (resting state)",
  },
  {
    name: "Brutal Gray",
    var: "--shadow-brutal-gray",
    value: "0 4px 0 #C4C4C4",
    usage: "Secondary buttons (resting state)",
  },
];

const radii = [
  { name: "Card", var: "--radius-card", value: "16px", usage: "Cards, buttons" },
  {
    name: "Container",
    var: "--radius-container",
    value: "12px",
    usage: "Inner containers, inputs",
  },
  {
    name: "Button",
    var: "--radius-button",
    value: "6px",
    usage: "Small pills, skill tags",
  },
];

/* ─── Shared section styles ──────────────────────────────────────────────────── */

const sectionStyle: React.CSSProperties = {
  paddingTop: "56px",
  paddingBottom: "56px",
  borderBottom: "1px solid var(--color-muted)",
};

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-display), sans-serif",
  fontSize: "1.5rem",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: "var(--color-foreground)",
  margin: 0,
  marginBottom: "8px",
};

const sectionDescStyle: React.CSSProperties = {
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.9375rem",
  lineHeight: 1.6,
  color: "var(--color-foreground)",
  opacity: 0.6,
  margin: 0,
  marginBottom: "32px",
  maxWidth: "640px",
};

const tokenLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.8125rem",
  color: "var(--color-foreground)",
  opacity: 0.5,
  margin: 0,
};

const tokenValueStyle: React.CSSProperties = {
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "var(--color-foreground)",
  margin: 0,
};

const codeStyle: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: "0.8125rem",
  color: "var(--color-primary)",
  background: "rgba(28,176,246,0.08)",
  padding: "2px 6px",
  borderRadius: "4px",
};

/* ─── Page ───────────────────────────────────────────────────────────────────── */

const TOC_GROUPS = [
  {
    label: "Design Tokens",
    items: [
      { id: "colors",           text: "Colors" },
      { id: "typography",       text: "Typography" },
      { id: "shadows-borders",  text: "Shadows & Borders" },
      { id: "border-radius",    text: "Border Radius" },
    ],
  },
  {
    label: "Components",
    items: [
      { id: "buttons",          text: "Buttons" },
      { id: "cards",            text: "Cards" },
      { id: "skill-pills",      text: "Skill Pills" },
      { id: "layout-patterns",  text: "Layout Patterns" },
    ],
  },
  {
    label: "Animations",
    items: [
      { id: "animated-hero-entrance", text: "Animated Hero Entrance" },
      { id: "counting-stats",         text: "Counting Stats" },
      { id: "card-cascade",           text: "Card Cascade" },
      { id: "floating-skill-badges",  text: "Floating Skill Badges" },
      { id: "pulsing-cta-block",      text: "Pulsing CTA Block" },
      { id: "marquee-ticker",         text: "Marquee / Ticker" },
    ],
  },
  {
    label: "Hero Sections",
    items: [
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
  },
  {
    label: "Data & Metrics",
    items: [
      { id: "score-progression", text: "Score Progression" },
      { id: "hero-metric",       text: "Hero Metric" },
      { id: "metric-tile",       text: "Metric Tile" },
      { id: "delta-tile",        text: "Delta Tile" },
      { id: "sparkline-bar-row", text: "Sparkline & Bar Row" },
      { id: "code-block",        text: "Code Block" },
      { id: "drilldown-card",    text: "Drill-down Card" },
    ],
  },
];

export default function BrandKitPage() {
  return (
    <main>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "48px", alignItems: "flex-start" }}
        className="px-6 lg:px-12"
      >
        {/* Sticky TOC sidebar — desktop only */}
        <aside className="desktop-only" style={{ width: "220px", flexShrink: 0 }}>
          <div style={{ position: "sticky", top: "89px" }}>
            <BrandKitTOC groups={TOC_GROUPS} />
          </div>
        </aside>

        {/* Main content */}
        <div style={{ flex: 1, minWidth: 0 }}>
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <section
          style={{
            paddingTop: "clamp(80px, 10vw, 120px)",
            paddingBottom: "56px",
            borderBottom: "1px solid var(--color-muted)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "var(--color-secondary)",
              color: "#ffffff",
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "var(--radius-button)",
              marginBottom: "16px",
            }}
          >
            Design Reference
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-foreground)",
              margin: 0,
              marginBottom: "16px",
            }}
          >
            Brand Kit
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "var(--color-foreground)",
              opacity: 0.6,
              margin: 0,
              maxWidth: "640px",
            }}
          >
            Neubrutalist design system for kevinhu.fyi. Bold borders, offset
            shadows, vivid blue accents, warm off-white canvas. Playful yet
            professional. Use these tokens and patterns to create on-brand
            assets.
          </p>
        </section>

        {/* ── Colors ──────────────────────────────────────────────────────── */}
        <section id="colors" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Colors</h2>
          <p style={sectionDescStyle}>
            Seven core colors. Primary blue is the dominant accent. Foreground
            black doubles as border/shadow color. Background is a warm
            off-white, not pure white.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {colors.map((c) => (
              <div
                key={c.var}
                style={{
                  background: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-container)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "80px",
                    background: c.hex,
                    borderBottom: "2px solid var(--color-foreground)",
                  }}
                />
                <div style={{ padding: "12px 14px" }}>
                  <p style={tokenValueStyle}>{c.name}</p>
                  <p style={{ ...tokenLabelStyle, marginTop: "4px" }}>
                    <span style={codeStyle}>{c.hex}</span>
                  </p>
                  <p style={{ ...tokenLabelStyle, marginTop: "4px" }}>
                    <span style={codeStyle}>{c.var}</span>
                  </p>
                  <p
                    style={{
                      ...tokenLabelStyle,
                      marginTop: "6px",
                      fontSize: "0.75rem",
                    }}
                  >
                    {c.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Typography ──────────────────────────────────────────────────── */}
        <section id="typography" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Typography</h2>
          <p style={sectionDescStyle}>
            Two Google Fonts. Bricolage Grotesque for headings/display —
            bold, tight tracking, high impact. Plus Jakarta Sans for body
            text — clean, readable, friendly.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {/* Display font */}
            <div>
              <p style={tokenLabelStyle}>
                Display &mdash; <span style={codeStyle}>Bricolage Grotesque</span>{" "}
                via <span style={codeStyle}>--font-display</span>
              </p>
              <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div>
                  <p style={tokenLabelStyle}>h1 &mdash; clamp(2rem, 5vw, 3rem) / weight 800 / tracking -0.03em</p>
                  <p
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "clamp(2rem, 5vw, 3rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      lineHeight: 1.1,
                      color: "var(--color-foreground)",
                      margin: 0,
                    }}
                  >
                    The quick brown fox
                  </p>
                </div>
                <div>
                  <p style={tokenLabelStyle}>h2 &mdash; 1.5rem / weight 700 / tracking -0.02em</p>
                  <p
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      lineHeight: 1.15,
                      color: "var(--color-foreground)",
                      margin: 0,
                    }}
                  >
                    The quick brown fox jumps over
                  </p>
                </div>
                <div>
                  <p style={tokenLabelStyle}>h3 &mdash; 1.25rem / weight 600</p>
                  <p
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      color: "var(--color-foreground)",
                      margin: 0,
                    }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
                <div>
                  <p style={tokenLabelStyle}>Button text &mdash; 0.9375rem / weight 700 / tracking 0.03em / uppercase</p>
                  <p
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      letterSpacing: "0.03em",
                      textTransform: "uppercase",
                      color: "var(--color-foreground)",
                      margin: 0,
                    }}
                  >
                    Book a Call
                  </p>
                </div>
              </div>
            </div>

            {/* Body font */}
            <div>
              <p style={tokenLabelStyle}>
                Body &mdash; <span style={codeStyle}>Plus Jakarta Sans</span>{" "}
                via <span style={codeStyle}>--font-body</span>
              </p>
              <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div>
                  <p style={tokenLabelStyle}>Body &mdash; 1.0625rem / weight 400 / line-height 1.7</p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "1.0625rem",
                      fontWeight: 400,
                      lineHeight: 1.7,
                      color: "var(--color-foreground)",
                      margin: 0,
                    }}
                  >
                    Whether you&apos;re building something new, need a technical
                    advisor, or just want to connect — I help founders and teams
                    ship products faster with AI.
                  </p>
                </div>
                <div>
                  <p style={tokenLabelStyle}>Small / caption &mdash; 0.875rem / weight 500</p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      color: "var(--color-foreground)",
                      margin: 0,
                    }}
                  >
                    MBA who codes. Enterprise software, data analytics, and 0→1 products.
                  </p>
                </div>
                <div>
                  <p style={tokenLabelStyle}>Secondary text &mdash; same sizes, opacity 0.6</p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "1.0625rem",
                      fontWeight: 400,
                      lineHeight: 1.7,
                      color: "var(--color-foreground)",
                      opacity: 0.6,
                      margin: 0,
                    }}
                  >
                    This is how secondary/muted text appears — same font, reduced
                    opacity to 0.6 for visual hierarchy.
                  </p>
                </div>
              </div>
            </div>

            {/* Eyebrow */}
            <div>
              <p style={tokenLabelStyle}>Eyebrow / Badge</p>
              <div style={{ marginTop: "12px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--color-secondary)",
                    color: "#ffffff",
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    borderRadius: "var(--radius-button)",
                  }}
                >
                  Available for Work
                </span>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--color-primary)",
                    color: "#ffffff",
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "5px 14px",
                    borderRadius: "var(--radius-button)",
                  }}
                >
                  Case Study
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Shadows & Borders ───────────────────────────────────────────── */}
        <section id="shadows-borders" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Shadows &amp; Borders</h2>
          <p style={sectionDescStyle}>
            Neubrutalist offset shadows — hard edges, no blur, solid color.
            Standard border: 2px solid foreground (#141414). All containers use
            this border + one of these shadow tokens.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {shadows.map((s) => (
              <div key={s.var} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div
                  style={{
                    height: "80px",
                    background: "var(--color-card)",
                    border: "2px solid var(--color-foreground)",
                    borderRadius: "var(--radius-container)",
                    boxShadow: s.value,
                  }}
                />
                <div>
                  <p style={tokenValueStyle}>{s.name}</p>
                  <p style={{ ...tokenLabelStyle, marginTop: "2px" }}>
                    <span style={codeStyle}>{s.value}</span>
                  </p>
                  <p style={{ ...tokenLabelStyle, marginTop: "2px" }}>
                    <span style={codeStyle}>{s.var}</span>
                  </p>
                  <p
                    style={{
                      ...tokenLabelStyle,
                      marginTop: "4px",
                      fontSize: "0.75rem",
                    }}
                  >
                    {s.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Border Radius ───────────────────────────────────────────────── */}
        <section id="border-radius" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Border Radius</h2>
          <p style={sectionDescStyle}>
            Three radius tokens. Cards and buttons use 16px. Inner containers
            use 12px. Small pills and tags use 6px.
          </p>

          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {radii.map((r) => (
              <div key={r.var} style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    background: "var(--color-primary)",
                    borderRadius: r.value,
                    border: "2px solid var(--color-foreground)",
                  }}
                />
                <div style={{ textAlign: "center" }}>
                  <p style={tokenValueStyle}>{r.value}</p>
                  <p style={{ ...tokenLabelStyle, marginTop: "2px" }}>
                    <span style={codeStyle}>{r.var}</span>
                  </p>
                  <p
                    style={{
                      ...tokenLabelStyle,
                      marginTop: "4px",
                      fontSize: "0.75rem",
                    }}
                  >
                    {r.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Buttons ─────────────────────────────────────────────────────── */}
        <section id="buttons" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Buttons</h2>
          <p style={sectionDescStyle}>
            Two variants with a &quot;press-in&quot; interaction: on hover the
            button shifts down 2px and shadow shrinks; on active it shifts down
            4px and shadow disappears. Text is uppercase display font.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Primary */}
            <div>
              <p style={{ ...tokenLabelStyle, marginBottom: "12px" }}>
                Primary &mdash; blue background, white text, primary shadow
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                <Button variant="primary">Primary Button</Button>
              </div>
              <div
                style={{
                  marginTop: "16px",
                  padding: "16px",
                  background: "rgba(28,176,246,0.04)",
                  borderRadius: "var(--radius-button)",
                  fontFamily: "monospace",
                  fontSize: "0.8125rem",
                  lineHeight: 1.8,
                  color: "var(--color-foreground)",
                }}
              >
                background: #1CB0F6 | color: #FFFFFF | border: none<br />
                border-radius: 16px | padding: 14px 24px<br />
                box-shadow: 0 4px 0 #1490CC (resting)<br />
                font: Bricolage Grotesque 700 0.9375rem uppercase tracking 0.03em<br />
                hover: translateY(2px), shadow → 0 2px 0 #1490CC<br />
                active: translateY(4px), shadow → none
              </div>
            </div>

            {/* Secondary */}
            <div>
              <p style={{ ...tokenLabelStyle, marginBottom: "12px" }}>
                Secondary &mdash; white background, blue text, gray border &amp; shadow
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                <Button variant="secondary">Secondary Button</Button>
              </div>
              <div
                style={{
                  marginTop: "16px",
                  padding: "16px",
                  background: "rgba(28,176,246,0.04)",
                  borderRadius: "var(--radius-button)",
                  fontFamily: "monospace",
                  fontSize: "0.8125rem",
                  lineHeight: 1.8,
                  color: "var(--color-foreground)",
                }}
              >
                background: #FFFFFF | color: #1CB0F6 | border: 2px solid #E5E5E5<br />
                border-radius: 16px | padding: 14px 24px<br />
                box-shadow: 0 4px 0 #E5E5E5 (resting)<br />
                font: Bricolage Grotesque 700 0.9375rem uppercase tracking 0.03em<br />
                hover: translateY(2px), shadow → 0 2px 0 #E5E5E5<br />
                active: translateY(4px), shadow → none
              </div>
            </div>
          </div>
        </section>

        {/* ── Cards ───────────────────────────────────────────────────────── */}
        <section id="cards" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Cards</h2>
          <p style={sectionDescStyle}>
            Neubrutalist cards: white background, 2px black border, offset
            shadow, 16px radius. Interactive cards lift on hover (translateY
            -4px, shadow grows to 6px 6px).
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Standard card */}
            <div>
              <p style={{ ...tokenLabelStyle, marginBottom: "12px" }}>Standard card</p>
              <div
                style={{
                  background: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-brutal)",
                  padding: "32px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    margin: 0,
                    marginBottom: "8px",
                  }}
                >
                  Card Title
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "var(--color-foreground)",
                    opacity: 0.6,
                    margin: 0,
                  }}
                >
                  Card body text with secondary opacity. Uses Plus Jakarta Sans
                  at 0.9375rem.
                </p>
              </div>
            </div>

            {/* Card with colored header */}
            <div>
              <p style={{ ...tokenLabelStyle, marginBottom: "12px" }}>Card with color header</p>
              <div
                style={{
                  background: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-brutal)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    background: "var(--color-primary)",
                  }}
                />
                <div style={{ padding: "32px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      margin: 0,
                      marginBottom: "8px",
                    }}
                  >
                    Featured Card
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                      color: "var(--color-foreground)",
                      opacity: 0.6,
                      margin: 0,
                    }}
                  >
                    A thin primary-blue bar at the top adds emphasis without
                    overwhelming the layout.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "24px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            background: var(--color-card) | border: 2px solid #141414<br />
            border-radius: 16px | box-shadow: 4px 4px 0 #141414<br />
            hover (interactive): translateY(-4px), shadow → 6px 6px 0 #141414<br />
            transition: all 0.15s ease
          </div>
        </section>

        {/* ── Skill Pills ─────────────────────────────────────────────────── */}
        <section id="skill-pills" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Skill Pills</h2>
          <p style={sectionDescStyle}>
            Small tags used to list skills/technologies. White background, muted
            border, 6px radius. On hover, border and text turn primary blue.
          </p>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["React", "TypeScript", "Next.js", "Tailwind CSS", "Python"].map(
              (skill) => (
                <span
                  key={skill}
                  className="skill-pill"
                  style={{
                    backgroundColor: "var(--color-card)",
                    border: "2px solid var(--color-muted)",
                    borderRadius: "var(--radius-button)",
                    padding: "8px 16px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-foreground)",
                    transition: "border-color 0.15s ease, color 0.15s ease",
                    cursor: "default",
                  }}
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            background: #FFFFFF | border: 2px solid #E5E5E5 | border-radius: 6px<br />
            padding: 8px 16px | font: Plus Jakarta Sans 500 0.875rem<br />
            hover: border-color → #1CB0F6, color → #1CB0F6
          </div>
        </section>

        {/* ── Layout ──────────────────────────────────────────────────────── */}
        <section id="layout-patterns" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Layout Patterns</h2>
          <p style={sectionDescStyle}>
            Standard section layout used across the site. Desktop-first
            container with responsive horizontal padding.
          </p>

          <div
            style={{
              padding: "24px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-container)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 2,
              color: "var(--color-foreground)",
            }}
          >
            <strong style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "0.9375rem" }}>
              Section container
            </strong>
            <br />
            max-width: 1200px | margin: 0 auto<br />
            padding-x: 24px (mobile) → 48px (desktop, lg breakpoint)<br />
            padding-y: 80px top and bottom<br />
            <br />
            <strong style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "0.9375rem" }}>
              Nav bar
            </strong>
            <br />
            position: sticky | height: 65px | backdrop-filter: blur(8px)<br />
            background: rgba(250,249,246,0.85) | border-bottom: 1px solid #e5e5e5<br />
            <br />
            <strong style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "0.9375rem" }}>
              Responsive breakpoints
            </strong>
            <br />
            Mobile-first | lg (1024px) for layout shifts<br />
            Use clamp() for fluid typography and spacing<br />
            <br />
            <strong style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "0.9375rem" }}>
              Interaction defaults
            </strong>
            <br />
            transition: all 0.1s–0.15s ease<br />
            links: color change to #1CB0F6 on hover<br />
            cards: translateY(-4px) + shadow grow on hover<br />
            buttons: press-in (translateY down + shadow shrink)
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            ANIMATION & MOTION SHOWCASE
            ═══════════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionStyle, borderBottom: "none", paddingBottom: "24px" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "var(--radius-button)",
              marginBottom: "16px",
            }}
          >
            Motion Reference
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-foreground)",
              margin: 0,
              marginBottom: "12px",
            }}
          >
            Animation &amp; Motion
          </h2>
          <p style={sectionDescStyle}>
            Live, looping CSS animations that demonstrate brand-native motion
            patterns. Use these as visual vocabulary for animated content,
            videos, and interactive designs.
          </p>
        </section>

        {/* ── 1. Animated Hero Entrance ────────────────────────────────────── */}
        <section id="animated-hero-entrance" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Animated Hero Entrance</h2>
          <p style={sectionDescStyle}>
            Staggered slide-up + fade. Title enters first, subtitle follows,
            then the CTA button lands. The canonical &quot;intro slide&quot;
            treatment. Loops every 5 seconds.
          </p>

          <div
            style={{
              background: "var(--color-card)",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              padding: "48px 32px",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <h3
              className="motion-hero-title"
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--color-foreground)",
                margin: 0,
                marginBottom: "12px",
              }}
            >
              Ship Products Faster
            </h3>
            <p
              className="motion-hero-subtitle"
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "var(--color-foreground)",
                opacity: 0.6,
                margin: 0,
                marginBottom: "24px",
              }}
            >
              MBA who codes. Enterprise software, data analytics, and 0→1 products.
            </p>
            <div className="motion-hero-cta" style={{ display: "inline-block" }}>
              <Button variant="primary">Book a Call</Button>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            animation: slide-fade-in 5s ease infinite<br />
            stagger: 0s → 0.3s → 0.6s per element<br />
            motion: translateY(24px → 0 → -8px) + opacity fade
          </div>
        </section>

        {/* ── 2. Counting Stats ────────────────────────────────────────────── */}
        <section id="counting-stats" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Counting Stats</h2>
          <p style={sectionDescStyle}>
            KPI cards pop in with staggered scale, numbers tick up from zero.
            Perfect for results slides, impact showcases, and metric
            highlights. Loops every 6 seconds.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "20px",
            }}
          >
            {[
              { label: "Projects Shipped", value: "50+", cls: "motion-stat-1" },
              { label: "Faster Delivery", value: "10x", cls: "motion-stat-2" },
              { label: "Client Retention", value: "99%", cls: "motion-stat-3" },
              { label: "Industries", value: "4+", cls: "motion-stat-4" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={stat.cls}
                style={{
                  background: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-brutal-sm)",
                  padding: "28px 20px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "2rem",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "var(--color-primary)",
                    margin: 0,
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--color-foreground)",
                    opacity: 0.6,
                    margin: 0,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            animation: pop-in 6s ease infinite<br />
            stagger: 0s → 0.25s → 0.5s → 0.75s<br />
            motion: scale(0.7 → 1 → 0.95) + opacity fade
          </div>
        </section>

        {/* ── 3. Card Cascade ──────────────────────────────────────────────── */}
        <section id="card-cascade" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Card Cascade</h2>
          <p style={sectionDescStyle}>
            Project cards slide in from the right with slight rotation, fanning
            into position. Great for showcasing features, portfolio items, or
            step-by-step flows. Loops every 6 seconds.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              { title: "Strategy", desc: "Research, planning, and product roadmaps", cls: "motion-card-1", color: "var(--color-primary)" },
              { title: "Design", desc: "UI/UX, prototyping, and design systems", cls: "motion-card-2", color: "var(--color-secondary)" },
              { title: "Engineering", desc: "Full-stack development and deployment", cls: "motion-card-3", color: "#F59E0B" },
            ].map((card) => (
              <div
                key={card.title}
                className={card.cls}
                style={{
                  background: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-brutal)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "8px",
                    background: card.color,
                  }}
                />
                <div style={{ padding: "28px 24px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      margin: 0,
                      marginBottom: "8px",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                      color: "var(--color-foreground)",
                      opacity: 0.6,
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            animation: cascade-in 6s ease infinite<br />
            stagger: 0s → 0.3s → 0.6s<br />
            motion: translateX(120px → 0 → -20px) + rotate(4deg → 0 → -1deg) + opacity
          </div>
        </section>

        {/* ── 4. Floating Skill Badges ─────────────────────────────────────── */}
        <section id="floating-skill-badges" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Floating Skill Badges</h2>
          <p style={sectionDescStyle}>
            Skill pills bob at different speeds and phases, creating an organic,
            alive feel. Like a tag cloud with personality. Each badge has unique
            timing for natural movement.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "24px 0",
            }}
          >
            {[
              { label: "React", cls: "motion-float-1" },
              { label: "TypeScript", cls: "motion-float-2" },
              { label: "Next.js", cls: "motion-float-3" },
              { label: "Python", cls: "motion-float-4" },
              { label: "AI / ML", cls: "motion-float-5" },
              { label: "Tailwind", cls: "motion-float-6" },
              { label: "Node.js", cls: "motion-float-7" },
            ].map((skill) => (
              <span
                key={skill.label}
                className={skill.cls}
                style={{
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-button)",
                  boxShadow: "var(--shadow-brutal-sm)",
                  padding: "10px 20px",
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--color-foreground)",
                }}
              >
                {skill.label}
              </span>
            ))}
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            animation: float-badge [2.6s–3.6s] ease-in-out infinite<br />
            per-badge delays: 0.1s–1.2s for organic stagger<br />
            motion: translateY(0 → -10px → 0)
          </div>
        </section>

        {/* ── 5. Pulsing CTA Block ─────────────────────────────────────────── */}
        <section id="pulsing-cta-block" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Pulsing CTA Block</h2>
          <p style={sectionDescStyle}>
            Attention-grabbing call-to-action with a rhythmic border glow,
            pulsing availability indicator, and subtly bouncing button.
            Designed to draw the eye without being obnoxious.
          </p>

          <div
            className="motion-cta-card"
            style={{
              background: "var(--color-card)",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              padding: "40px 32px",
              textAlign: "center",
              maxWidth: "480px",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <span
                className="availability-dot"
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-secondary)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--color-secondary)",
                }}
              >
                Available for Work
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "1.5rem",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "var(--color-foreground)",
                margin: 0,
                marginBottom: "8px",
              }}
            >
              Let&apos;s Build Something
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.6,
                color: "var(--color-foreground)",
                opacity: 0.6,
                margin: 0,
                marginBottom: "24px",
              }}
            >
              From strategy to shipping — I help founders and teams move faster.
            </p>
            <div className="motion-cta-btn" style={{ display: "inline-block" }}>
              <Button variant="primary">Book a Call</Button>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            card: border-glow 2.5s ease-in-out infinite (shadow pulse 0→6px blue)<br />
            dot: pulse-dot 2s ease-in-out infinite (scale + opacity)<br />
            button: bounce-subtle 2s ease-in-out infinite (translateY 0 → -4px)
          </div>
        </section>

        {/* ── 6. Marquee / Ticker ──────────────────────────────────────────── */}
        <section id="marquee-ticker" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Marquee / Ticker</h2>
          <p style={sectionDescStyle}>
            Horizontal scrolling strip of brand keywords. Classic video
            lower-third energy. Seamless loop via duplicated content. Runs
            continuously at a steady pace.
          </p>

          <div
            style={{
              background: "var(--color-foreground)",
              borderRadius: "var(--radius-container)",
              padding: "20px 0",
              overflow: "hidden",
            }}
          >
            <div
              className="motion-marquee-track"
              style={{
                display: "flex",
                gap: "48px",
                whiteSpace: "nowrap",
                width: "max-content",
              }}
            >
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  style={{
                    display: "flex",
                    gap: "48px",
                    alignItems: "center",
                  }}
                >
                  {[
                    "Strategy",
                    "●",
                    "Design",
                    "●",
                    "Engineering",
                    "●",
                    "AI / ML",
                    "●",
                    "React",
                    "●",
                    "Next.js",
                    "●",
                    "TypeScript",
                    "●",
                    "Product",
                    "●",
                    "Ship Faster",
                    "●",
                  ].map((word, i) => (
                    <span
                      key={`${copy}-${i}`}
                      style={{
                        fontFamily:
                          word === "●"
                            ? "inherit"
                            : "var(--font-display), sans-serif",
                        fontSize: word === "●" ? "0.5rem" : "1.25rem",
                        fontWeight: 700,
                        letterSpacing: word === "●" ? "0" : "0.02em",
                        textTransform: word === "●" ? "none" : "uppercase",
                        color:
                          word === "●"
                            ? "rgba(255,255,255,0.3)"
                            : "#ffffff",
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            animation: marquee-scroll 20s linear infinite<br />
            motion: translateX(0 → -50%) on duplicated track<br />
            dark background (#141414) with white text for contrast punch
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            BANNER COMPONENTS
            ═══════════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionStyle, borderBottom: "none", paddingBottom: "24px" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "var(--color-secondary)",
              color: "#ffffff",
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "var(--radius-button)",
              marginBottom: "16px",
            }}
          >
            Banner Components
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-foreground)",
              margin: 0,
              marginBottom: "12px",
            }}
          >
            Rich Banners
          </h2>
          <p style={sectionDescStyle}>
            Composable, self-contained banner blocks that combine motion,
            layout, and brand tokens into hero-ready sections. Drop these
            into decks, landing pages, or social assets.
          </p>
        </section>

        {/* ── Banner 1: The Terminal Card ────────────────────────────────── */}
        <section id="terminal-card" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Terminal Card</h2>
          <p style={sectionDescStyle}>
            A macOS-style terminal window with typing animation and floating
            skill badges. The tagline types itself in, followed by a fading
            status line. Loops every 8 seconds.
          </p>

          <div
            style={{
              background: "var(--color-background)",
              borderRadius: "var(--radius-card)",
              minHeight: "400px",
              padding: "48px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Floating skill badges — desktop only */}
            <div className="desktop-only">
              <span
                className="motion-float-1"
                style={{
                  position: "absolute",
                  top: "24px",
                  left: "40px",
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-button)",
                  boxShadow: "var(--shadow-brutal-sm)",
                  padding: "8px 14px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-foreground)",
                }}
              >
                React
              </span>
              <span
                className="motion-float-2"
                style={{
                  position: "absolute",
                  top: "80px",
                  right: "24px",
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-button)",
                  boxShadow: "var(--shadow-brutal-sm)",
                  padding: "8px 14px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-foreground)",
                }}
              >
                AI/ML
              </span>
              <span
                className="motion-float-3"
                style={{
                  position: "absolute",
                  bottom: "80px",
                  left: "20px",
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-button)",
                  boxShadow: "var(--shadow-brutal-sm)",
                  padding: "8px 14px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-foreground)",
                }}
              >
                TypeScript
              </span>
              <span
                className="motion-float-4"
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "120px",
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-button)",
                  boxShadow: "var(--shadow-brutal-sm)",
                  padding: "8px 14px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-foreground)",
                }}
              >
                Next.js
              </span>
              <span
                className="motion-float-5"
                style={{
                  position: "absolute",
                  bottom: "24px",
                  right: "40px",
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-button)",
                  boxShadow: "var(--shadow-brutal-sm)",
                  padding: "8px 14px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-foreground)",
                }}
              >
                Python
              </span>
              <span
                className="motion-float-6"
                style={{
                  position: "absolute",
                  bottom: "32px",
                  left: "100px",
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-button)",
                  boxShadow: "var(--shadow-brutal-sm)",
                  padding: "8px 14px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--color-foreground)",
                }}
              >
                Supabase
              </span>
            </div>

            {/* Terminal window */}
            <div
              style={{
                maxWidth: "560px",
                width: "100%",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-card)",
                boxShadow: "var(--shadow-brutal)",
                overflow: "hidden",
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Title bar */}
              <div
                style={{
                  height: "44px",
                  backgroundColor: "#141414",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "#FF5F57",
                    }}
                  />
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "#FFBD2E",
                    }}
                  />
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "#28C840",
                    }}
                  />
                </div>
                <span
                  style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontFamily: "monospace",
                    fontSize: "0.8125rem",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  kevin@portfolio ~ %
                </span>
              </div>

              {/* Terminal body */}
              <div
                style={{
                  backgroundColor: "#1a1a2e",
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                    margin: 0,
                    marginBottom: "12px",
                  }}
                >
                  $ echo $TAGLINE
                </p>
                <p
                  className="terminal-type-line"
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    margin: 0,
                    marginBottom: "16px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    borderRight: "2px solid #1CB0F6",
                  }}
                >
                  MBA who codes.
                </p>
                <p
                  className="terminal-ready-line"
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.8125rem",
                    color: "#22C55E",
                    margin: 0,
                  }}
                >
                  {"//"} ready to ship
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            typing: typing-terminal 8s steps(14) infinite + blink-cursor 0.8s step-end infinite<br />
            ready line: fade-in-ready 8s ease infinite (delayed appearance)<br />
            floating badges: float-badge [2.6s-3.6s] ease-in-out infinite
          </div>
        </section>

        {/* ── Banner 2: The Stat Wall ────────────────────────────────────── */}
        <section id="stat-wall" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Stat Wall</h2>
          <p style={sectionDescStyle}>
            Bold blue banner with staggered stat cards. Impact metrics pop in
            one by one with an availability indicator pulsing in the corner.
            Perfect for results showcases and pitch decks.
          </p>

          <div
            style={{
              backgroundColor: "#1CB0F6",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              padding: "48px 40px",
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "32px",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                    marginBottom: "8px",
                  }}
                >
                  Impact at a Glance
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Results That Ship
                </h3>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "100px",
                  padding: "8px 16px",
                }}
              >
                <span
                  className="availability-dot"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-secondary)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "#ffffff",
                  }}
                >
                  Available Now
                </span>
              </div>
            </div>

            {/* 2x2 stat grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              {[
                { value: "50+", label: "Projects Shipped", cls: "motion-stat-1" },
                { value: "10x", label: "Faster Delivery", cls: "motion-stat-2" },
                { value: "99%", label: "Client Retention", cls: "motion-stat-3" },
                { value: "4+", label: "Industries Served", cls: "motion-stat-4" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className={stat.cls}
                  style={{
                    backgroundColor: "var(--color-card)",
                    border: "2px solid var(--color-foreground)",
                    borderRadius: "var(--radius-container)",
                    boxShadow: "var(--shadow-brutal-sm)",
                    padding: "24px 20px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      color: "var(--color-primary)",
                      margin: 0,
                      marginBottom: "4px",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      color: "var(--color-foreground)",
                      opacity: 0.6,
                      margin: 0,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            container: #1CB0F6 bg, 2px black border, brutal shadow<br />
            stats: pop-in 6s ease infinite, stagger 0s → 0.25s → 0.5s → 0.75s<br />
            availability: pulse-dot 2s ease-in-out infinite
          </div>
        </section>

        {/* ── Banner 3: The Stack ────────────────────────────────────────── */}
        <section id="the-stack" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Stack</h2>
          <p style={sectionDescStyle}>
            Three mini project cards cascade in from the right with staggered
            rotation, fanning into a layered stack. Demonstrates depth of
            portfolio work. Loops every 7 seconds.
          </p>

          <div
            style={{
              backgroundColor: "#FAF9F6",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              padding: "48px 40px",
            }}
          >
            {/* Header */}
            <p
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                margin: 0,
                marginBottom: "8px",
              }}
            >
              Portfolio
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "1.5rem",
                fontWeight: 800,
                color: "var(--color-foreground)",
                margin: 0,
                marginBottom: "32px",
              }}
            >
              Depth of Work
            </h3>

            {/* Stack area */}
            <div
              style={{
                position: "relative",
                height: "340px",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {/* Back card */}
              <div
                className="stack-card-back"
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "40px",
                  width: "300px",
                  zIndex: 1,
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-brutal)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "36px",
                    backgroundColor: "#141414",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    gap: "6px",
                  }}
                >
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FF5F57" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#28C840" }} />
                </div>
                <div style={{ height: "120px", backgroundColor: "#FFFBEB", position: "relative" }}>
                  <div style={{ height: "4px", backgroundColor: "#F59E0B" }} />
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "1rem", fontWeight: 700, margin: 0, marginBottom: "4px" }}>
                    Data Pipeline
                  </p>
                  <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.8125rem", color: "var(--color-foreground)", opacity: 0.6, margin: 0 }}>
                    ETL automation
                  </p>
                </div>
              </div>

              {/* Middle card */}
              <div
                className="stack-card-mid"
                style={{
                  position: "absolute",
                  top: "30px",
                  left: "calc(50% - 150px)",
                  width: "300px",
                  zIndex: 2,
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-brutal)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "36px",
                    backgroundColor: "#141414",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    gap: "6px",
                  }}
                >
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FF5F57" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#28C840" }} />
                </div>
                <div style={{ height: "120px", backgroundColor: "#EFF6FF", position: "relative" }}>
                  <div style={{ height: "4px", backgroundColor: "#1CB0F6" }} />
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "1rem", fontWeight: 700, margin: 0, marginBottom: "4px" }}>
                    AI Platform
                  </p>
                  <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.8125rem", color: "var(--color-foreground)", opacity: 0.6, margin: 0 }}>
                    ML-powered insights
                  </p>
                </div>
              </div>

              {/* Front card */}
              <div
                className="stack-card-front"
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "calc(100% - 340px)",
                  width: "300px",
                  zIndex: 3,
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-brutal)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "36px",
                    backgroundColor: "#141414",
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px",
                    gap: "6px",
                  }}
                >
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FF5F57" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
                  <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#28C840" }} />
                </div>
                <div style={{ height: "120px", backgroundColor: "#F0FDF4", position: "relative" }}>
                  <div style={{ height: "4px", backgroundColor: "#22C55E" }} />
                </div>
                <div style={{ padding: "16px" }}>
                  <p style={{ fontFamily: "var(--font-display), sans-serif", fontSize: "1rem", fontWeight: 700, margin: 0, marginBottom: "4px" }}>
                    Growth Engine
                  </p>
                  <p style={{ fontFamily: "var(--font-body), sans-serif", fontSize: "0.8125rem", color: "var(--color-foreground)", opacity: 0.6, margin: 0 }}>
                    0-to-1 product
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            back: stack-cascade-back 7s ease infinite<br />
            mid: stack-cascade-mid 7s ease 0.3s infinite<br />
            front: stack-cascade-front 7s ease 0.6s infinite<br />
            motion: translateX(120px → 0 → -20px) + rotate stagger
          </div>
        </section>

        {/* ── Banner 4: The Bridge Diagram ───────────────────────────────── */}
        <section id="bridge-diagram" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Bridge Diagram</h2>
          <p style={sectionDescStyle}>
            Business skills enter from the left, engineering skills from the
            right, converging on a central node. Visualizes the
            &quot;MBA who codes&quot; positioning. Loops every 7 seconds.
          </p>

          <div
            style={{
              backgroundColor: "var(--color-card)",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              padding: "48px 32px",
            }}
          >
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <p
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--color-secondary)",
                  margin: 0,
                  marginBottom: "8px",
                }}
              >
                The Bridge
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  color: "var(--color-foreground)",
                  margin: 0,
                }}
              >
                Business Meets Engineering
              </h3>
            </div>

            {/* Three-column layout */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "40px",
                maxWidth: "720px",
                margin: "0 auto",
                flexWrap: "wrap",
              }}
            >
              {/* Left column — business skills */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "flex-end",
                }}
              >
                {[
                  { label: "Product Strategy", cls: "bridge-left-1" },
                  { label: "Market Research", cls: "bridge-left-2" },
                  { label: "Business Models", cls: "bridge-left-3" },
                  { label: "Growth & GTM", cls: "bridge-left-4" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`bridge-pill-left ${item.cls}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      backgroundColor: "rgba(34,197,94,0.1)",
                      border: "1px solid var(--color-secondary)",
                      borderRadius: "100px",
                      padding: "10px 20px",
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-secondary)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#15803d",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Center node */}
              <div
                className="bridge-center"
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "#141414",
                  boxShadow: "var(--shadow-brutal-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "#ffffff",
                  }}
                >
                  K
                </span>
              </div>

              {/* Right column — engineering skills */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                {[
                  { label: "Full-Stack Dev", cls: "bridge-right-1" },
                  { label: "AI / ML", cls: "bridge-right-2" },
                  { label: "Data Pipelines", cls: "bridge-right-3" },
                  { label: "System Design", cls: "bridge-right-4" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`bridge-pill-right ${item.cls}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      backgroundColor: "rgba(28,176,246,0.1)",
                      border: "1px solid var(--color-primary)",
                      borderRadius: "100px",
                      padding: "10px 20px",
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#0369a1",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.9375rem",
                color: "var(--color-foreground)",
                opacity: 0.6,
                textAlign: "center",
                margin: 0,
                marginTop: "40px",
              }}
            >
              MBA who codes. Bridging strategy and engineering.
            </p>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            left pills: bridge-enter-left 7s ease, stagger 0s → 0.15s → 0.3s → 0.45s<br />
            right pills: bridge-enter-right 7s ease, stagger 0.5s → 0.65s → 0.8s → 0.95s<br />
            center: bridge-center-pulse 7s ease 0.6s infinite<br />
            connector lines: 2px dashed #E5E5E5 via ::after / ::before pseudo-elements
          </div>
        </section>

        {/* ── Banner 5: The Marquee Strip (Enhanced) ─────────────────────── */}
        <section id="marquee-strip-enhanced" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Marquee Strip (Enhanced)</h2>
          <p style={sectionDescStyle}>
            Two-row marquee with opposing scroll directions. Text keywords
            interspersed with badge pills on a bold blue background. Row 1
            scrolls left, row 2 scrolls right.
          </p>

          <div
            style={{
              backgroundColor: "#1CB0F6",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              overflow: "hidden",
            }}
          >
            {/* Row 1 — scrolls left */}
            <div style={{ padding: "20px 0", overflow: "hidden" }}>
              <div
                className="marquee-enhanced-row-1"
                style={{
                  display: "flex",
                  gap: "24px",
                  whiteSpace: "nowrap",
                  width: "max-content",
                  alignItems: "center",
                }}
              >
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    style={{
                      display: "flex",
                      gap: "24px",
                      alignItems: "center",
                    }}
                  >
                    {[
                      { type: "text", content: "Strategy" },
                      { type: "sep" },
                      { type: "badge", content: "React" },
                      { type: "sep" },
                      { type: "text", content: "Design" },
                      { type: "sep" },
                      { type: "badge", content: "AI / ML" },
                      { type: "sep" },
                      { type: "text", content: "Engineering" },
                      { type: "sep" },
                      { type: "badge", content: "Next.js" },
                      { type: "sep" },
                      { type: "text", content: "Product" },
                      { type: "sep" },
                      { type: "badge", content: "TypeScript" },
                      { type: "sep" },
                      { type: "text", content: "Ship Faster" },
                      { type: "sep" },
                    ].map((item, i) => {
                      if (item.type === "sep") {
                        return (
                          <span
                            key={`${copy}-sep-${i}`}
                            style={{
                              fontSize: "0.625rem",
                              color: "rgba(255,255,255,0.3)",
                            }}
                          >
                            *
                          </span>
                        );
                      }
                      if (item.type === "badge") {
                        return (
                          <span
                            key={`${copy}-badge-${i}`}
                            style={{
                              backgroundColor: "rgba(255,255,255,0.15)",
                              border: "1px solid rgba(255,255,255,0.3)",
                              borderRadius: "100px",
                              padding: "6px 16px",
                              fontFamily: "var(--font-body), sans-serif",
                              fontSize: "0.8125rem",
                              fontWeight: 600,
                              color: "#ffffff",
                            }}
                          >
                            {item.content}
                          </span>
                        );
                      }
                      return (
                        <span
                          key={`${copy}-text-${i}`}
                          style={{
                            fontFamily: "var(--font-display), sans-serif",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            color: "#ffffff",
                          }}
                        >
                          {item.content}
                        </span>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "2px", backgroundColor: "rgba(255,255,255,0.15)" }} />

            {/* Row 2 — scrolls right */}
            <div style={{ padding: "20px 0", overflow: "hidden" }}>
              <div
                className="marquee-enhanced-row-2"
                style={{
                  display: "flex",
                  gap: "24px",
                  whiteSpace: "nowrap",
                  width: "max-content",
                  alignItems: "center",
                }}
              >
                {[0, 1].map((copy) => (
                  <div
                    key={copy}
                    style={{
                      display: "flex",
                      gap: "24px",
                      alignItems: "center",
                    }}
                  >
                    {[
                      { type: "text", content: "Analytics" },
                      { type: "sep" },
                      { type: "badge", content: "Python" },
                      { type: "sep" },
                      { type: "text", content: "Growth" },
                      { type: "sep" },
                      { type: "badge", content: "Supabase" },
                      { type: "sep" },
                      { type: "text", content: "Automation" },
                      { type: "sep" },
                      { type: "badge", content: "n8n" },
                      { type: "sep" },
                      { type: "text", content: "Startups" },
                      { type: "sep" },
                      { type: "badge", content: "BigQuery" },
                      { type: "sep" },
                      { type: "text", content: "Build Fast" },
                      { type: "sep" },
                    ].map((item, i) => {
                      if (item.type === "sep") {
                        return (
                          <span
                            key={`${copy}-sep-${i}`}
                            style={{
                              fontSize: "0.625rem",
                              color: "rgba(255,255,255,0.3)",
                            }}
                          >
                            *
                          </span>
                        );
                      }
                      if (item.type === "badge") {
                        return (
                          <span
                            key={`${copy}-badge-${i}`}
                            style={{
                              backgroundColor: "rgba(255,255,255,0.15)",
                              border: "1px solid rgba(255,255,255,0.3)",
                              borderRadius: "100px",
                              padding: "6px 16px",
                              fontFamily: "var(--font-body), sans-serif",
                              fontSize: "0.8125rem",
                              fontWeight: 600,
                              color: "#ffffff",
                            }}
                          >
                            {item.content}
                          </span>
                        );
                      }
                      return (
                        <span
                          key={`${copy}-text-${i}`}
                          style={{
                            fontFamily: "var(--font-display), sans-serif",
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            color: "#ffffff",
                          }}
                        >
                          {item.content}
                        </span>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            row 1: marquee-scroll 25s linear infinite (left)<br />
            row 2: marquee-scroll-reverse 30s linear infinite (right)<br />
            blue background (#1CB0F6) with white text + semi-transparent badge pills
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            SITE COMPONENTS (PHASE 1)
            ═══════════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionStyle, borderBottom: "none", paddingBottom: "24px" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#F59E0B",
              color: "#ffffff",
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "var(--radius-button)",
              marginBottom: "16px",
            }}
          >
            Phase 1
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-foreground)",
              margin: 0,
              marginBottom: "12px",
            }}
          >
            Site Components
          </h2>
          <p style={sectionDescStyle}>
            Full-fidelity replicas of the site&apos;s key UI moments, animated
            as looping CSS showcases. These are the building blocks visitors
            actually see and interact with.
          </p>
        </section>

        {/* ── Component 1: The Window Card ─────────────────────────────── */}
        <section id="window-card" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Window Card</h2>
          <p style={sectionDescStyle}>
            The homepage&apos;s macOS-style project card — the site&apos;s most
            distinctive visual element. Traffic-light dots, thumbnail with
            accent bar, tags. Full entrance animation loops every 7 seconds.
          </p>

          <div
            style={{
              padding: "48px 24px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="window-card-enter"
              style={{
                maxWidth: "400px",
                width: "100%",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-card)",
                boxShadow: "var(--shadow-brutal)",
                overflow: "hidden",
                backgroundColor: "var(--color-card)",
              }}
            >
              {/* Title bar */}
              <div
                style={{
                  height: "36px",
                  backgroundColor: "#141414",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 12px",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", gap: "6px" }}>
                  <span
                    className="window-dot-1"
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#FF5F57",
                    }}
                  />
                  <span
                    className="window-dot-2"
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#FFBD2E",
                    }}
                  />
                  <span
                    className="window-dot-3"
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "#28C840",
                    }}
                  />
                </div>
                <span
                  style={{
                    position: "absolute",
                    right: "12px",
                    fontFamily: "monospace",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  project-demo.tsx
                </span>
              </div>

              {/* Thumbnail */}
              <div
                className="window-thumb-reveal"
                style={{
                  height: "200px",
                  backgroundColor: "rgba(28,176,246,0.08)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    height: "4px",
                    backgroundColor: "var(--color-primary)",
                  }}
                />
              </div>

              {/* Body */}
              <div className="window-body-reveal" style={{ padding: "20px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "var(--color-foreground)",
                    margin: 0,
                  }}
                >
                  AI Growth Platform
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.8125rem",
                    color: "var(--color-foreground)",
                    opacity: 0.6,
                    margin: 0,
                    marginTop: "4px",
                  }}
                >
                  ML-powered analytics for early-stage startups
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginTop: "12px",
                  }}
                >
                  {["React", "Python", "BigQuery", "Next.js"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: "0.6875rem",
                        fontWeight: 500,
                        color: "var(--color-foreground)",
                        border: "1px solid var(--color-muted)",
                        borderRadius: "6px",
                        padding: "4px 10px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            card: window-card-enter 7s ease infinite (translateY 40px → 0 → -12px)<br />
            dots: window-dot-pop 7s ease, stagger 0.1s → 0.2s → 0.3s (scale 0 → 1)<br />
            thumbnail: window-thumb-reveal 7s ease 0.3s (scale 1.05 → 1)<br />
            body: window-body-reveal 7s ease 0.4s (translateY 12px → 0)
          </div>
        </section>

        {/* ── Component 2: The Headshot Split ──────────────────────────── */}
        <section id="headshot-split" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Headshot Split</h2>
          <p style={sectionDescStyle}>
            The hero section&apos;s two-column layout — the personal brand
            introduction moment. Left column text staggers in, headshot scales
            up, background glow fades in. Loops every 8 seconds.
          </p>

          <div
            style={{
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              overflow: "hidden",
              padding: "48px 40px",
              backgroundColor: "var(--color-card)",
              position: "relative",
            }}
          >
            {/* Background glow */}
            <div
              className="hero-split-badge"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse at 60% 50%, rgba(28,176,246,0.06), transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                display: "flex",
                gap: "40px",
                flexWrap: "wrap",
                position: "relative",
              }}
            >
              {/* Left column */}
              <div style={{ flex: "1.2", minWidth: "280px" }}>
                <div className="hero-split-badge">
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: "#22C55E",
                      color: "#ffffff",
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      padding: "5px 14px",
                      borderRadius: "6px",
                    }}
                  >
                    Available for Work
                  </span>
                </div>

                <h3
                  className="hero-split-headline"
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "var(--color-foreground)",
                    margin: 0,
                    marginTop: "16px",
                  }}
                >
                  Hello, I&apos;m Kevin{" "}
                  <span role="img" aria-label="wave">
                    {"👋"}
                  </span>
                </h3>

                <p
                  className="hero-split-desc"
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "1.0625rem",
                    fontWeight: 400,
                    color: "var(--color-foreground)",
                    opacity: 0.6,
                    lineHeight: 1.7,
                    margin: 0,
                    marginTop: "12px",
                    maxWidth: "480px",
                  }}
                >
                  MBA who codes. I help founders and teams ship products faster
                  with AI, from strategy to production.
                </p>

                <div
                  className="hero-split-buttons"
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "24px",
                  }}
                >
                  <Button variant="primary">Book a Call</Button>
                  <Button variant="secondary">View Work</Button>
                </div>
              </div>

              {/* Right column */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "200px",
                }}
              >
                <div
                  className="hero-split-photo"
                  style={{
                    width: "240px",
                    height: "240px",
                    borderRadius: "50%",
                    backgroundColor: "#E5E5E5",
                    border: "3px solid var(--color-foreground)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "4rem",
                      fontWeight: 800,
                      color: "var(--color-primary)",
                    }}
                  >
                    KH
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            text: hero-split-in 8s ease, stagger 0s → 0.2s → 0.4s → 0.6s<br />
            photo: hero-split-photo-in 8s ease 0.3s (scale 0.85 → 1)<br />
            bg glow: radial-gradient rgba(28,176,246,0.06) fades in with badge<br />
            responsive: flex-wrap, photo order -1 on mobile (160px)
          </div>
        </section>

        {/* ── Component 3: The Availability Badge ─────────────────────── */}
        <section id="availability-badge" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Availability Badge</h2>
          <p style={sectionDescStyle}>
            The green pill with pulsing dot — a standalone animated
            micro-component shown in three size variants. Badge expands from
            center, dot pulses after reveal. Loops every 5 seconds.
          </p>

          <div
            style={{
              display: "flex",
              gap: "32px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              padding: "48px 24px",
            }}
          >
            {/* Small variant */}
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  ...tokenLabelStyle,
                  marginBottom: "16px",
                  fontSize: "0.75rem",
                }}
              >
                Small
              </p>
              <div
                className="avail-badge-enter"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  backgroundColor: "rgba(34,197,94,0.12)",
                  border: "1.5px solid #22C55E",
                  borderRadius: "100px",
                  padding: "6px 14px",
                }}
              >
                <span
                  className="availability-dot"
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#22C55E",
                    display: "inline-block",
                  }}
                />
                <span
                  className="avail-badge-text"
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#15803d",
                  }}
                >
                  Available for Projects
                </span>
              </div>
            </div>

            {/* Default variant */}
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  ...tokenLabelStyle,
                  marginBottom: "16px",
                  fontSize: "0.75rem",
                }}
              >
                Default
              </p>
              <div
                className="avail-badge-enter"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "rgba(34,197,94,0.12)",
                  border: "1.5px solid #22C55E",
                  borderRadius: "100px",
                  padding: "8px 20px",
                }}
              >
                <span
                  className="availability-dot"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#22C55E",
                    display: "inline-block",
                  }}
                />
                <span
                  className="avail-badge-text"
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "#15803d",
                  }}
                >
                  Available for Projects
                </span>
              </div>
            </div>

            {/* Large variant */}
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  ...tokenLabelStyle,
                  marginBottom: "16px",
                  fontSize: "0.75rem",
                }}
              >
                Large
              </p>
              <div
                className="avail-badge-enter"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  backgroundColor: "rgba(34,197,94,0.12)",
                  border: "1.5px solid #22C55E",
                  borderRadius: "100px",
                  padding: "10px 24px",
                }}
              >
                <span
                  className="availability-dot"
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#22C55E",
                    display: "inline-block",
                  }}
                />
                <span
                  className="avail-badge-text"
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    color: "#15803d",
                  }}
                >
                  Available for Projects
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            pill: avail-badge-enter 5s ease infinite (scaleX 0 → 1 from center)<br />
            dot: pulse-dot 2s ease-in-out infinite (begins after pill expand)<br />
            text: avail-badge-text-in 5s ease infinite (200ms delayed fade)<br />
            variants: small (6px 14px), default (8px 20px), large (10px 24px)
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            CONTENT TEMPLATES
            ═══════════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionStyle, borderBottom: "none", paddingBottom: "24px" }}>
          <div
            style={{
              display: "inline-block",
              backgroundColor: "var(--color-primary)",
              color: "#ffffff",
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "var(--radius-button)",
              marginBottom: "16px",
            }}
          >
            Content Templates
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-foreground)",
              margin: 0,
              marginBottom: "12px",
            }}
          >
            Content Creation Components
          </h2>
          <p style={sectionDescStyle}>
            Content-ready templates for social posts, pitch decks, and
            video thumbnails. Each component is fully animated and uses
            brand tokens for a consistent visual identity.
          </p>
        </section>

        {/* ── The Quote Block ────────────────────────────────────────────── */}
        <section id="quote-block" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Quote Block</h2>
          <p style={sectionDescStyle}>
            A testimonial pull-quote card with an oversized decorative quotation
            mark, animated entrance, and drawing horizontal rule. Attribution
            slides up last. Loops every 8 seconds.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "48px 0",
            }}
          >
            <div
              style={{
                maxWidth: "560px",
                width: "100%",
                background: "var(--color-card)",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-card)",
                boxShadow: "var(--shadow-brutal)",
                padding: "40px 36px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Large decorative quote mark */}
              <span
                className="quote-mark-enter"
                style={{
                  position: "absolute",
                  top: "24px",
                  left: "28px",
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "5rem",
                  fontWeight: 800,
                  color: "#1CB0F6",
                  lineHeight: 1,
                  opacity: 0.15,
                  zIndex: 0,
                }}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                className="quote-text-enter"
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: "var(--color-foreground)",
                  position: "relative",
                  zIndex: 1,
                  paddingTop: "32px",
                  margin: 0,
                }}
              >
                Kevin helped us ship our AI-powered CRM in 8 weeks &mdash; what
                we estimated would take 6 months. His ability to bridge business
                strategy and engineering execution is rare.
              </p>

              {/* Horizontal rule */}
              <div
                className="quote-rule-draw"
                style={{
                  height: "2px",
                  background: "var(--color-muted)",
                  margin: "24px 0",
                }}
              />

              {/* Attribution row */}
              <div
                className="quote-attr-enter"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "#E5E5E5",
                    border: "2px solid var(--color-foreground)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--color-foreground)",
                  }}
                >
                  SL
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "0.9375rem",
                      fontWeight: 700,
                      color: "var(--color-foreground)",
                    }}
                  >
                    Sarah Lin
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 400,
                      color: "var(--color-foreground)",
                      opacity: 0.5,
                    }}
                  >
                    CTO, ScaleAI Ventures
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            animation: quote-mark-in / quote-text-in / quote-rule-draw / quote-attr-in<br />
            duration: 8s ease infinite (looping)<br />
            motion: quote mark scales 0&rarr;1 with rotation, text fades in, rule draws left&rarr;right, attribution slides up
          </div>
        </section>

        {/* ── The Split Comparison ───────────────────────────────────────── */}
        <section id="split-comparison" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Split Comparison</h2>
          <p style={sectionDescStyle}>
            A side-by-side Problem / Solution card with color-coded header bars,
            staggered bullet reveals, and sliding panel entrances. Responsive:
            stacks vertically on mobile. Loops every 7 seconds.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "48px 0",
            }}
          >
            <div
              style={{
                maxWidth: "640px",
                width: "100%",
                background: "var(--color-card)",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-card)",
                boxShadow: "var(--shadow-brutal)",
                overflow: "hidden",
              }}
            >
              <div
                className="split-responsive-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                }}
              >
                {/* Left panel — Problem */}
                <div
                  className="split-left-enter split-left-panel"
                  style={{
                    borderRight: "2px solid var(--color-muted)",
                  }}
                >
                  <div
                    className="split-bar-fill"
                    style={{
                      height: "6px",
                      backgroundColor: "#FF5F57",
                      transformOrigin: "left",
                    }}
                  />
                  <div style={{ padding: "28px 24px" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#FF5F57",
                        marginBottom: "12px",
                      }}
                    >
                      Problem
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        color: "var(--color-foreground)",
                      }}
                    >
                      The Challenge
                    </div>
                    <div style={{ marginTop: "16px" }}>
                      {["Manual data entry across 3 systems", "6-month estimated timeline", "No real-time analytics"].map(
                        (text, i) => (
                          <div
                            key={i}
                            className={`split-bullet-${i + 1}`}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "10px",
                              marginBottom: "10px",
                              fontFamily: "var(--font-body), sans-serif",
                              fontSize: "0.875rem",
                              color: "var(--color-foreground)",
                              opacity: 0.6,
                            }}
                          >
                            <span
                              style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                backgroundColor: "#FF5F57",
                                flexShrink: 0,
                                marginTop: "7px",
                              }}
                            />
                            {text}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                {/* Right panel — Solution */}
                <div className="split-right-enter">
                  <div
                    className="split-bar-fill"
                    style={{
                      height: "6px",
                      backgroundColor: "#22C55E",
                      transformOrigin: "left",
                    }}
                  />
                  <div style={{ padding: "28px 24px" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#22C55E",
                        marginBottom: "12px",
                      }}
                    >
                      Solution
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: "1.125rem",
                        fontWeight: 700,
                        color: "var(--color-foreground)",
                      }}
                    >
                      The Result
                    </div>
                    <div style={{ marginTop: "16px" }}>
                      {["Automated pipeline, zero manual input", "Shipped in 8 weeks", "Real-time dashboard with alerts"].map(
                        (text, i) => (
                          <div
                            key={i}
                            className={`split-bullet-${i + 4}`}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "10px",
                              marginBottom: "10px",
                              fontFamily: "var(--font-body), sans-serif",
                              fontSize: "0.875rem",
                              color: "var(--color-foreground)",
                              opacity: 0.6,
                            }}
                          >
                            <span
                              style={{
                                width: "6px",
                                height: "6px",
                                borderRadius: "50%",
                                backgroundColor: "#22C55E",
                                flexShrink: 0,
                                marginTop: "7px",
                              }}
                            />
                            {text}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            animation: split-enter-left / split-enter-right / split-bar-fill / split-bullet-in<br />
            duration: 7s ease infinite (looping)<br />
            motion: panels slide in from sides, bars fill horizontally, bullets stagger 150ms<br />
            responsive: stacks to single column below 768px
          </div>
        </section>

        {/* ── The Social Card ────────────────────────────────────────────── */}
        <section id="social-card" style={{ ...sectionStyle, borderBottom: "none" }}>
          <h2 style={sectionTitleStyle}>The Social Card</h2>
          <p style={sectionDescStyle}>
            A 1200&times;630 social media post template (half-size preview) with a
            blue/off-white split. Blue zone slides down, white zone slides up,
            then content fades in with staggered timing. Loops every 7 seconds.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "48px 0",
            }}
          >
            <div
              style={{
                aspectRatio: "1200 / 630",
                maxWidth: "600px",
                width: "100%",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-card)",
                boxShadow: "var(--shadow-brutal)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Top zone — Blue (40%) */}
              <div
                className="social-blue-enter"
                style={{
                  flex: "0 0 40%",
                  backgroundColor: "#1CB0F6",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <span
                  className="social-content-1"
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.7)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                  }}
                >
                  KEVIN HU
                </span>
                <span
                  className="social-content-2"
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                    marginTop: "8px",
                  }}
                >
                  50+ Projects Shipped with AI
                </span>
              </div>

              {/* Bottom zone — Off-white (60%) */}
              <div
                className="social-white-enter"
                style={{
                  flex: "0 0 60%",
                  backgroundColor: "#FAF9F6",
                  padding: "28px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  className="social-content-3"
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    color: "var(--color-foreground)",
                    opacity: 0.7,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  From enterprise platforms to AI agents &mdash; I help teams ship
                  products that matter.
                </p>

                {/* Skill pills */}
                <div
                  className="social-content-4"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "16px",
                  }}
                >
                  {["React", "AI/ML", "Next.js", "Python"].map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        color: "var(--color-foreground)",
                        border: "1px solid var(--color-muted)",
                        backgroundColor: "var(--color-card)",
                        padding: "4px 10px",
                        borderRadius: "var(--radius-button)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Availability badge */}
                <div
                  className="social-content-5"
                  style={{
                    marginTop: "16px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    alignSelf: "flex-start",
                    backgroundColor: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    borderRadius: "9999px",
                    padding: "6px 14px",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#22C55E",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#15803d",
                    }}
                  >
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            animation: social-slide-down / social-slide-up / social-content-in<br />
            duration: 7s ease infinite (looping)<br />
            motion: blue zone slides from top, white zone slides from bottom, content staggers 0.2s&rarr;1.0s<br />
            aspect-ratio: 1200/630 (standard OG image size, rendered at half scale)
          </div>
        </section>

        {/* ── Section divider: Case Study Components ─────────────── */}
        <section
          style={{ ...sectionStyle, borderBottom: "none", paddingBottom: "24px" }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "var(--color-foreground)",
              color: "#ffffff",
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "var(--radius-button)",
              marginBottom: "16px",
            }}
          >
            Case Study Components
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "2rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--color-foreground)",
              margin: 0,
              marginBottom: "12px",
            }}
          >
            For project pages
          </h2>
          <p style={{ ...sectionDescStyle, marginBottom: 0 }}>
            Components designed for case-study narratives: system
            architectures, annotated screenshots, process timelines, and data
            viz primitives. Placeholder content drawn from real projects so
            the specimens read the way they&apos;ll read on the page.
          </p>
        </section>

        {/* ── Architecture Diagram ────────────────────────────────── */}
        <section id="architecture-diagram" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Architecture Diagram</h2>
          <p style={sectionDescStyle}>
            Three-tier &quot;sources &rarr; shared brain &rarr; surfaces&quot; flow.
            Sized to sit inside MDX prose. Demo shows the Personal AI Studio
            multi-repo workspace.
          </p>

          <div
            style={{
              backgroundColor: "var(--color-card)",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              padding: "40px 28px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <p
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-primary)",
                  margin: 0,
                  marginBottom: "6px",
                }}
              >
                Personal AI Studio
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  color: "var(--color-foreground)",
                  margin: 0,
                }}
              >
                Multi-repo workspace
              </h3>
            </div>

            {/* Tier 1 — sources */}
            <p
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-foreground)",
                opacity: 0.5,
                margin: 0,
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Sources
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
              }}
            >
              {[
                { name: "career-camp", desc: "Transcripts, role prep" },
                { name: "content.main", desc: "Scripts, drafts, posts" },
                { name: "databank", desc: "Personal data, exports" },
              ].map((n) => (
                <div
                  key={n.name}
                  style={{
                    border: "1.5px solid var(--color-secondary)",
                    borderRadius: "var(--radius-container)",
                    backgroundColor: "rgba(34,197,94,0.06)",
                    padding: "12px 14px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "#15803d",
                      margin: 0,
                      marginBottom: "2px",
                    }}
                  >
                    {n.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.75rem",
                      color: "var(--color-foreground)",
                      opacity: 0.6,
                      margin: 0,
                    }}
                  >
                    {n.desc}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                margin: "10px 0",
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "var(--color-foreground)",
                    opacity: 0.4,
                    fontSize: "1.25rem",
                    lineHeight: 1,
                  }}
                >
                  &darr;
                </div>
              ))}
            </div>

            {/* Tier 2 — hub */}
            <p
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-foreground)",
                opacity: 0.5,
                margin: 0,
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Shared brain
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-container)",
                  backgroundColor: "var(--color-foreground)",
                  color: "#ffffff",
                  padding: "14px 24px",
                  maxWidth: "360px",
                  textAlign: "center",
                  boxShadow: "var(--shadow-brutal-sm)",
                }}
              >
                <p
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    margin: 0,
                    marginBottom: "2px",
                  }}
                >
                  kj-skills
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.75rem",
                    opacity: 0.7,
                    margin: 0,
                  }}
                >
                  Skills, lessons.md, MEMORY.md — shared across all repos
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
                maxWidth: "480px",
                margin: "10px auto",
              }}
            >
              {[0, 1].map((i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "var(--color-foreground)",
                    opacity: 0.4,
                    fontSize: "1.25rem",
                    lineHeight: 1,
                  }}
                >
                  &darr;
                </div>
              ))}
            </div>

            {/* Tier 3 — surfaces */}
            <p
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-foreground)",
                opacity: 0.5,
                margin: 0,
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Surfaces
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              {[
                {
                  name: "kevinhu.fyi",
                  desc: "Public portfolio + MDX case studies",
                },
                {
                  name: "Obsidian-as-IDE",
                  desc: "Daily working vault",
                },
              ].map((n) => (
                <div
                  key={n.name}
                  style={{
                    border: "1.5px solid var(--color-primary)",
                    borderRadius: "var(--radius-container)",
                    backgroundColor: "rgba(28,176,246,0.06)",
                    padding: "12px 14px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "#0369a1",
                      margin: 0,
                      marginBottom: "2px",
                    }}
                  >
                    {n.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.75rem",
                      color: "var(--color-foreground)",
                      opacity: 0.6,
                      margin: 0,
                    }}
                  >
                    {n.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Annotated Screenshot ──────────────────────────────────── */}
        <section id="annotated-screenshot" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Annotated Screenshot</h2>
          <p style={sectionDescStyle}>
            Mock UI panel with numbered callouts and a key below. For
            tour-style explanations — &quot;here&apos;s what the eval
            dashboard looks like, here&apos;s what each piece does.&quot;
            Swap the mocked panel for a real screenshot in production.
          </p>

          <div
            style={{
              backgroundColor: "var(--color-card)",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              padding: "32px",
            }}
          >
            {/* Screenshot panel */}
            <div
              style={{
                position: "relative",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-container)",
                backgroundColor: "#0E1116",
                overflow: "hidden",
                marginBottom: "24px",
              }}
            >
              {/* Title bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 14px",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#ff5f57",
                  }}
                />
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#febc2e",
                  }}
                />
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: "#28c840",
                  }}
                />
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.5)",
                    marginLeft: "8px",
                  }}
                >
                  cyberse-eval / dashboard.tsx
                </span>
              </div>

              {/* Body — mocked rubric table */}
              <div
                style={{
                  padding: "24px 28px",
                  color: "#E5E7EB",
                  fontFamily: "monospace",
                  fontSize: "0.8125rem",
                  lineHeight: 1.7,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ color: "#1CB0F6", fontWeight: 700 }}>
                    Run #143
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>
                    2026-05-09 · 24 prompts · GPT-4o
                  </span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 0.5fr 0.5fr 0.7fr",
                    gap: "8px 16px",
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.75rem",
                    paddingBottom: "8px",
                    borderBottom: "1px dashed rgba(255,255,255,0.15)",
                  }}
                >
                  <span>Criterion</span>
                  <span>Old</span>
                  <span>New</span>
                  <span>Δ</span>
                </div>
                {[
                  { c: "Threat-model accuracy", a: "3.2", b: "4.6", d: "+1.4" },
                  { c: "Citation grounding", a: "2.9", b: "4.4", d: "+1.5" },
                  { c: "Practitioner tone", a: "3.4", b: "4.1", d: "+0.7" },
                  { c: "Scope adherence", a: "3.1", b: "4.5", d: "+1.4" },
                  { c: "No-hallucination", a: "3.0", b: "4.7", d: "+1.7" },
                ].map((r) => (
                  <div
                    key={r.c}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.4fr 0.5fr 0.5fr 0.7fr",
                      gap: "8px 16px",
                      paddingTop: "8px",
                      paddingBottom: "8px",
                      borderBottom: "1px dashed rgba(255,255,255,0.08)",
                    }}
                  >
                    <span>{r.c}</span>
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>
                      {r.a}
                    </span>
                    <span style={{ color: "#22c55e" }}>{r.b}</span>
                    <span style={{ color: "#22c55e" }}>{r.d}</span>
                  </div>
                ))}
                <div
                  style={{
                    marginTop: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>
                    Composite
                  </span>
                  <span style={{ color: "#22c55e", fontWeight: 700 }}>
                    53% → 92%
                  </span>
                </div>
              </div>

              {/* Callouts */}
              <span
                style={{
                  position: "absolute",
                  top: 48,
                  right: 24,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: "#1CB0F6",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 800,
                  fontSize: "0.875rem",
                  boxShadow:
                    "0 0 0 3px #0E1116, 0 0 0 4px #ffffff",
                }}
              >
                1
              </span>
              <span
                style={{
                  position: "absolute",
                  top: 102,
                  right: 24,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: "#1CB0F6",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 800,
                  fontSize: "0.875rem",
                  boxShadow:
                    "0 0 0 3px #0E1116, 0 0 0 4px #ffffff",
                }}
              >
                2
              </span>
              <span
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 24,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: "#1CB0F6",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 800,
                  fontSize: "0.875rem",
                  boxShadow:
                    "0 0 0 3px #0E1116, 0 0 0 4px #ffffff",
                }}
              >
                3
              </span>
            </div>

            {/* Key */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                {
                  n: 1,
                  t: "Run metadata",
                  d: "Date, prompt count, model. Lets reviewers slice by week or by model without opening the file.",
                },
                {
                  n: 2,
                  t: "Calibration delta",
                  d: "Side-by-side scoring vs. last week. Reviewer attention goes here when triaging regressions.",
                },
                {
                  n: 3,
                  t: "Composite payoff",
                  d: "Single headline number. Everything above is how it moved — this is what the room remembers.",
                },
              ].map((item) => (
                <div key={item.n} style={{ display: "flex", gap: "10px" }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      backgroundColor: "var(--color-foreground)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display), sans-serif",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                    }}
                  >
                    {item.n}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: "var(--color-foreground)",
                        margin: 0,
                        marginBottom: "2px",
                      }}
                    >
                      {item.t}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: "0.8125rem",
                        lineHeight: 1.5,
                        color: "var(--color-foreground)",
                        opacity: 0.6,
                        margin: 0,
                      }}
                    >
                      {item.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process Timeline ──────────────────────────────────────── */}
        <section id="process-timeline" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Process Timeline</h2>
          <p style={sectionDescStyle}>
            Vertical timeline for case-study process arcs. Phase markers
            connect via a left rule; the final step uses the secondary color
            to indicate ship/payoff.
          </p>

          <div
            style={{
              backgroundColor: "var(--color-card)",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              padding: "40px 32px",
            }}
          >
            <div style={{ position: "relative", paddingLeft: "60px" }}>
              <div
                style={{
                  position: "absolute",
                  left: 22,
                  top: 22,
                  bottom: 22,
                  width: 2,
                  backgroundColor: "var(--color-foreground)",
                  opacity: 0.15,
                }}
              />

              {[
                {
                  n: 1,
                  phase: "Discover",
                  title: "Score rubric with practitioners",
                  desc: "Sat with four security analysts and listed every implicit grading dimension. Pulled out the five that mattered.",
                  duration: "Week 1",
                },
                {
                  n: 2,
                  phase: "Design",
                  title: "Calibration loop",
                  desc: "Weekly side-by-side: agent output vs. analyst output. Track where they disagree, ask why.",
                  duration: "Weeks 2–3",
                },
                {
                  n: 3,
                  phase: "Build",
                  title: "Eval-in-the-loop",
                  desc: "Wrapped scoring into the agent's hot path. Outputs below threshold get retried with revised context.",
                  duration: "Weeks 4–6",
                },
                {
                  n: 4,
                  phase: "Ship",
                  title: "Composite 53% → 92%",
                  desc: "Six weeks of calibration. Threat-model accuracy and no-hallucination drove most of the lift.",
                  duration: "Week 7",
                },
              ].map((step, idx, arr) => {
                const isLast = idx === arr.length - 1;
                return (
                  <div
                    key={step.n}
                    style={{
                      position: "relative",
                      marginBottom: isLast ? 0 : "28px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: -60,
                        top: 0,
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        backgroundColor: isLast
                          ? "var(--color-secondary)"
                          : "var(--color-foreground)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: "1.125rem",
                        fontWeight: 800,
                        border: "2px solid var(--color-foreground)",
                        boxShadow: "var(--shadow-brutal-sm)",
                      }}
                    >
                      {step.n}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "10px",
                        marginBottom: "4px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display), sans-serif",
                          fontSize: "0.6875rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "var(--color-primary)",
                        }}
                      >
                        {step.phase}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body), sans-serif",
                          fontSize: "0.75rem",
                          color: "var(--color-foreground)",
                          opacity: 0.4,
                        }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: "1.0625rem",
                        fontWeight: 700,
                        color: "var(--color-foreground)",
                        margin: 0,
                        marginBottom: "4px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body), sans-serif",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        color: "var(--color-foreground)",
                        opacity: 0.75,
                        margin: 0,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Score Progression ─────────────────────────────────────── */}
        <section id="score-progression" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Score Progression</h2>
          <p style={sectionDescStyle}>
            Before/after horizontal bar with a calibration threshold marker.
            Big delta badge top-right. Use for payoff numbers like the
            Cyberse eval composite.
          </p>

          <div
            style={{
              backgroundColor: "var(--color-card)",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              padding: "40px 32px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "32px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--color-primary)",
                    margin: 0,
                    marginBottom: "6px",
                  }}
                >
                  Composite eval score
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 800,
                    color: "var(--color-foreground)",
                    margin: 0,
                  }}
                >
                  Six weeks of calibration
                </h3>
              </div>
              <div
                style={{
                  backgroundColor: "var(--color-secondary)",
                  color: "#ffffff",
                  padding: "10px 18px",
                  borderRadius: "var(--radius-button)",
                  border: "2px solid var(--color-foreground)",
                  boxShadow: "var(--shadow-brutal-sm)",
                  fontFamily: "var(--font-display), sans-serif",
                  fontWeight: 800,
                  fontSize: "1.125rem",
                  letterSpacing: "-0.01em",
                }}
              >
                +39 pts
              </div>
            </div>

            {/* Initial bar */}
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--color-foreground)",
                    opacity: 0.6,
                  }}
                >
                  Initial — week 1
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "var(--color-foreground)",
                  }}
                >
                  53%
                </span>
              </div>
              <div
                style={{
                  position: "relative",
                  height: "20px",
                  backgroundColor: "var(--color-muted)",
                  borderRadius: "100px",
                  overflow: "hidden",
                  border: "1.5px solid var(--color-foreground)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "53%",
                    backgroundColor: "rgba(28,176,246,0.4)",
                  }}
                />
              </div>
            </div>

            {/* After bar */}
            <div style={{ marginBottom: "8px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--color-foreground)",
                    opacity: 0.6,
                  }}
                >
                  After calibration — week 7
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "1rem",
                    fontWeight: 800,
                    color: "var(--color-secondary)",
                  }}
                >
                  92%
                </span>
              </div>
              <div
                style={{
                  position: "relative",
                  height: "20px",
                  backgroundColor: "var(--color-muted)",
                  borderRadius: "100px",
                  overflow: "hidden",
                  border: "1.5px solid var(--color-foreground)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "92%",
                    backgroundColor: "var(--color-secondary)",
                  }}
                />
              </div>
            </div>

            {/* Threshold scale */}
            <div
              style={{
                position: "relative",
                marginTop: "16px",
                paddingTop: "16px",
                borderTop: "1px dashed var(--color-muted)",
                height: "44px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "80%",
                  top: 0,
                  bottom: "16px",
                  borderLeft: "2px dashed var(--color-foreground)",
                  opacity: 0.4,
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "80%",
                  bottom: 0,
                  transform: "translateX(-50%)",
                  fontFamily: "monospace",
                  fontSize: "0.6875rem",
                  color: "var(--color-foreground)",
                  opacity: 0.6,
                  whiteSpace: "nowrap",
                }}
              >
                practitioner threshold · 80%
              </span>
            </div>
          </div>
        </section>

        {/* ── Hero Metric ───────────────────────────────────────────── */}
        <section id="hero-metric" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Hero Metric</h2>
          <p style={sectionDescStyle}>
            Single oversized tile for the one defining payoff of a case
            study. Use at most one per page, above the fold, when there&apos;s
            a number worth the room. Pairs well with a Process Timeline
            beneath.
          </p>

          <div
            style={{
              backgroundColor: "var(--color-card)",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              padding: "clamp(32px, 5vw, 56px) clamp(28px, 4vw, 48px)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                backgroundColor: "rgba(28,176,246,0.12)",
                border: "1px solid var(--color-primary)",
                color: "#0369a1",
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: "100px",
                marginBottom: "20px",
              }}
            >
              Composite eval score
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "clamp(3.5rem, 8vw, 5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: "var(--color-foreground)",
                  lineHeight: 1,
                }}
              >
                92%
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  backgroundColor: "var(--color-secondary)",
                  color: "#ffffff",
                  padding: "8px 16px",
                  borderRadius: "var(--radius-button)",
                  border: "2px solid var(--color-foreground)",
                  boxShadow: "var(--shadow-brutal-sm)",
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 800,
                }}
              >
                +39 pts
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                color: "var(--color-foreground)",
                opacity: 0.75,
                margin: 0,
                maxWidth: "560px",
              }}
            >
              Six weeks of weekly practitioner calibration. Threat-model
              accuracy and no-hallucination drove most of the lift.
            </p>
          </div>
        </section>

        {/* ── Metric Tile (w/ optional sparkline) ───────────────────── */}
        <section id="metric-tile" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Metric Tile</h2>
          <p style={sectionDescStyle}>
            KPI tile: big number, label, optional delta indicator, optional
            mini-bar sparkline. Drop a row of two or three above the fold for
            quick payoff scanning. The sparkline is only honest when you have
            real time-series data — most snapshot metrics should render
            without it.
          </p>

          {/* Variant A — basic (no sparkline) */}
          <p
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-foreground)",
              opacity: 0.5,
              margin: 0,
              marginBottom: "10px",
            }}
          >
            Variant A — basic (snapshot metrics)
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            {[
              { value: "$200M", label: "Economic opportunity unlocked", delta: undefined },
              { value: "20,000", label: "Accounts identified", delta: undefined },
              { value: "10,000", label: "Hours saved", delta: undefined },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-brutal)",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "8px",
                    marginBottom: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "2.25rem",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "var(--color-foreground)",
                      lineHeight: 1,
                    }}
                  >
                    {m.value}
                  </span>
                  {m.delta && (
                    <span
                      style={{
                        fontFamily: "var(--font-display), sans-serif",
                        fontSize: "0.8125rem",
                        fontWeight: 700,
                        color: "var(--color-secondary)",
                      }}
                    >
                      {m.delta}
                    </span>
                  )}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--color-foreground)",
                    opacity: 0.6,
                    margin: 0,
                  }}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Variant B — with sparkline */}
          <p
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-foreground)",
              opacity: 0.5,
              margin: 0,
              marginBottom: "10px",
            }}
          >
            Variant B — with sparkline (time-series only)
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                value: "92%",
                label: "Composite eval score",
                delta: "+39 pts",
                bars: [3, 4, 4, 5, 6, 7, 9],
              },
              {
                value: "5.2k",
                label: "Weekly practitioner reviews",
                delta: "+18%",
                bars: [4, 5, 5, 6, 6, 7, 8],
              },
              {
                value: "1.4s",
                label: "Median agent latency",
                delta: "−0.6s",
                bars: [8, 7, 6, 6, 5, 5, 4],
              },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-brutal)",
                  padding: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "8px",
                    marginBottom: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "2.25rem",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "var(--color-foreground)",
                      lineHeight: 1,
                    }}
                  >
                    {m.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "var(--color-secondary)",
                    }}
                  >
                    {m.delta}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--color-foreground)",
                    opacity: 0.6,
                    margin: 0,
                    marginBottom: "16px",
                  }}
                >
                  {m.label}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "3px",
                    height: "28px",
                  }}
                >
                  {m.bars.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: `${(h / 10) * 100}%`,
                        backgroundColor: "var(--color-primary)",
                        opacity: 0.3 + (i / m.bars.length) * 0.65,
                        borderRadius: "2px",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Delta Tile (before → after) ───────────────────────────── */}
        <section id="delta-tile" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>The Delta Tile</h2>
          <p style={sectionDescStyle}>
            Before → after pair with an explicit delta badge. For metrics
            where the <em>movement</em> is the story: a time-to-qualification
            cut, an eval score lift, a latency drop. Replaces strings like
            &quot;13d → 15m&quot; with two clearly weighted values.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                eyebrow: "Time to qualification",
                before: "13d",
                after: "15m",
                delta: "1,248× faster",
                caption: "BBBS Mentor Enrollment voice agent — first reply turnaround before vs. after.",
              },
              {
                eyebrow: "Composite eval score",
                before: "53%",
                after: "92%",
                delta: "+39 pts",
                caption: "Cyberse eval composite after six weeks of practitioner calibration.",
              },
              {
                eyebrow: "Rubric range",
                before: "60",
                after: "90",
                delta: "+30",
                caption: "Vendor page score range pre- and post-rubric rewrite.",
              },
            ].map((d) => (
              <div
                key={d.eyebrow}
                style={{
                  backgroundColor: "var(--color-card)",
                  border: "2px solid var(--color-foreground)",
                  borderRadius: "var(--radius-card)",
                  boxShadow: "var(--shadow-brutal)",
                  padding: "28px 24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-foreground)",
                    opacity: 0.5,
                    margin: 0,
                    marginBottom: "16px",
                  }}
                >
                  {d.eyebrow}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "14px",
                    marginBottom: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "2rem",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "var(--color-foreground)",
                      opacity: 0.4,
                      lineHeight: 1,
                      textDecoration: "line-through",
                      textDecorationThickness: "2px",
                      textDecorationColor: "rgba(20,20,20,0.3)",
                    }}
                  >
                    {d.before}
                  </span>
                  <span
                    style={{
                      color: "var(--color-foreground)",
                      opacity: 0.4,
                      fontSize: "1.5rem",
                      lineHeight: 1,
                    }}
                  >
                    →
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display), sans-serif",
                      fontSize: "2.5rem",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "var(--color-foreground)",
                      lineHeight: 1,
                    }}
                  >
                    {d.after}
                  </span>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "var(--color-secondary)",
                    color: "#ffffff",
                    padding: "4px 12px",
                    borderRadius: "var(--radius-button)",
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 800,
                    marginBottom: "14px",
                  }}
                >
                  {d.delta}
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.8125rem",
                    lineHeight: 1.5,
                    color: "var(--color-foreground)",
                    opacity: 0.6,
                    margin: 0,
                  }}
                >
                  {d.caption}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Sparkline & Bar Row ───────────────────────────────────── */}
        <section id="sparkline-bar-row" style={{ ...sectionStyle, borderBottom: "none" }}>
          <h2 style={sectionTitleStyle}>Sparkline &amp; Bar Row</h2>
          <p style={sectionDescStyle}>
            Bare data viz primitives. Sparkline renders as an SVG polyline
            with a terminal marker; bar row as flex divs. For inline use:
            inside paragraphs, beside a stat, or composed into a larger
            tile.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "16px",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--color-card)",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-card)",
                boxShadow: "var(--shadow-brutal)",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-foreground)",
                  opacity: 0.5,
                  margin: 0,
                  marginBottom: "8px",
                }}
              >
                Sparkline
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "var(--color-foreground)",
                  }}
                >
                  92%
                </span>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.75rem",
                    color: "var(--color-foreground)",
                    opacity: 0.5,
                  }}
                >
                  last 7 weeks
                </span>
              </div>
              <svg
                viewBox="0 0 200 60"
                width="100%"
                height="60"
                preserveAspectRatio="none"
                style={{ display: "block" }}
              >
                <polyline
                  points="0,48 33,42 66,36 100,30 133,20 166,12 200,6"
                  fill="none"
                  stroke="#1CB0F6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="198"
                  cy="6"
                  r="3.5"
                  fill="#1CB0F6"
                  stroke="#141414"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div
              style={{
                backgroundColor: "var(--color-card)",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-card)",
                boxShadow: "var(--shadow-brutal)",
                padding: "24px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-foreground)",
                  opacity: 0.5,
                  margin: 0,
                  marginBottom: "8px",
                }}
              >
                Bar Row
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "var(--color-foreground)",
                  }}
                >
                  24
                </span>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "0.75rem",
                    color: "var(--color-foreground)",
                    opacity: 0.5,
                  }}
                >
                  prompts in run #143
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "4px",
                  height: "60px",
                }}
              >
                {[4, 6, 3, 8, 5, 9, 7, 5, 8, 6, 9, 7].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${(h / 10) * 100}%`,
                      backgroundColor: "var(--color-foreground)",
                      borderRadius: "2px",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Code blocks in prose ──────────────────────────────────── */}
        <section id="code-block" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Code Block (Markdown)</h2>
          <p style={sectionDescStyle}>
            Any standard Markdown <code style={codeStyle}>```</code> code fence
            inside a case study renders as a dark monospace block with the
            same brutal border + shadow as cards. No custom component
            required — just write the fence.
          </p>

          <div className="prose-content">
            <pre>
{`~/Code/
├── infra/
│   └── kj-skills/        # Claude Code plugin — shared skills
├── workspaces/
│   ├── career-camp/      # interview prep + R&D
│   ├── content.main/     # scripts, drafts, brands
│   └── databank/         # analytics + ETL
└── products/
    └── kevinhu.fyi/      # this portfolio site`}
            </pre>
          </div>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            {"```text"}<br />
            {"~/Code/"}<br />
            {"├── infra/"}<br />
            {"..."}<br />
            {"```"}
          </div>
        </section>

        {/* ── Drilldown Card (MDX component) ────────────────────────── */}
        <section id="drilldown-card" style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Drill-down Card (MDX)</h2>
          <p style={sectionDescStyle}>
            Always-visible card for the optional &quot;deeper context&quot;
            section at the bottom of a case study. Replaces the native
            <code style={codeStyle}>&lt;details&gt;</code> toggle so the content is
            scannable without a click. Eyebrow signals it&apos;s a sidecar to the
            main narrative.
          </p>

          <Drilldown title="How the rubric work was structured">
            <ul>
              <li>
                <strong>Per-category rubrics.</strong> One rubric per solution
                category, owned by domain experts. Each rubric expressed the
                criteria buyers use inside that category — not a global
                &quot;is this vendor good&quot; question.
              </li>
              <li>
                <strong>Citation-mandatory scoring.</strong> The agent could
                not return a score without a source. The retrieval surface
                was the eval surface.
              </li>
              <li>
                <strong>Compression as the failure signal.</strong> Score
                distribution per category was the canonical health metric. If
                a category compressed, the rubric was wrong before the agent
                was.
              </li>
            </ul>
          </Drilldown>

          <div
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "rgba(28,176,246,0.04)",
              borderRadius: "var(--radius-button)",
              fontFamily: "monospace",
              fontSize: "0.8125rem",
              lineHeight: 1.8,
              color: "var(--color-foreground)",
            }}
          >
            {"<Drilldown title=\"How the rubric work was structured\">"}<br />
            {""}<br />
            {"- **Per-category rubrics.** One rubric per ..."}<br />
            {"- **Citation-mandatory scoring.** The agent could ..."}<br />
            {""}<br />
            {"</Drilldown>"}
          </div>
        </section>
        </div>
      </div>
    </main>
  );
}
