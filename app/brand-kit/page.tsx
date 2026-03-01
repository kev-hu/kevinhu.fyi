import type { Metadata } from "next";
import Button from "@/components/Button";

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

export default function BrandKitPage() {
  return (
    <main>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        className="px-6 lg:px-12"
      >
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
        <section style={sectionStyle}>
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
        <section style={sectionStyle}>
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
        <section style={sectionStyle}>
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
        <section style={sectionStyle}>
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
        <section style={sectionStyle}>
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
        <section style={sectionStyle}>
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
        <section style={sectionStyle}>
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
        <section style={{ ...sectionStyle, borderBottom: "none" }}>
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
      </div>
    </main>
  );
}
