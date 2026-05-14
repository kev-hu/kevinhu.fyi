import {
  sectionStyle,
  sectionTitleStyle,
  sectionDescStyle,
  tokenLabelStyle,
  tokenValueStyle,
  codeStyle,
} from "@/components/brand-kit/styles";

const colors = [
  { name: "Primary",       var: "--color-primary",       hex: "#1CB0F6", usage: "CTAs, links, interactive highlights" },
  { name: "Primary Hover", var: "--color-primary-hover", hex: "#1490CC", usage: "Hover/active state for primary elements" },
  { name: "Secondary",     var: "--color-secondary",     hex: "#22C55E", usage: "Accent badges, availability indicators" },
  { name: "Foreground",    var: "--color-foreground",    hex: "#141414", usage: "Text, borders, shadow offsets" },
  { name: "Background",    var: "--color-background",    hex: "#FAF9F6", usage: "Page background (warm off-white)" },
  { name: "Card",          var: "--color-card",          hex: "#FFFFFF", usage: "Card/surface backgrounds" },
  { name: "Muted",         var: "--color-muted",         hex: "#E5E5E5", usage: "Borders, dividers, secondary button outlines" },
];

const shadows = [
  { name: "Brutal",         var: "--shadow-brutal",         value: "4px 4px 0 #141414", usage: "Cards, prominent containers" },
  { name: "Brutal Small",   var: "--shadow-brutal-sm",      value: "2px 2px 0 #141414", usage: "Smaller elements, tags" },
  { name: "Brutal Primary", var: "--shadow-brutal-primary", value: "0 4px 0 #1490CC",   usage: "Primary buttons (resting state)" },
  { name: "Brutal Gray",    var: "--shadow-brutal-gray",    value: "0 4px 0 #C4C4C4",   usage: "Secondary buttons (resting state)" },
];

const radii = [
  { name: "Card",      var: "--radius-card",      value: "16px", usage: "Cards, buttons" },
  { name: "Container", var: "--radius-container", value: "12px", usage: "Inner containers, inputs" },
  { name: "Button",    var: "--radius-button",    value: "6px",  usage: "Small pills, skill tags" },
];

export function TokensSections() {
  return (
    <>
      {/* ── Colors ──────────────────────────────────────────────────────── */}
      <section id="colors" className="brand-kit-section" style={sectionStyle}>
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
      <section id="typography" className="brand-kit-section" style={sectionStyle}>
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
      <section id="shadows-borders" className="brand-kit-section" style={sectionStyle}>
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
      <section id="border-radius" className="brand-kit-section" style={sectionStyle}>
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
    </>
  );
}
