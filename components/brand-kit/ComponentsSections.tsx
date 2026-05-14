import Button from "@/components/Button";
import {
  sectionStyle,
  sectionTitleStyle,
  sectionDescStyle,
  tokenLabelStyle,
} from "@/components/brand-kit/styles";

export function ComponentsSections() {
  return (
    <>
      {/* ── Buttons ─────────────────────────────────────────────────────── */}
      <section id="buttons" className="brand-kit-section" style={sectionStyle}>
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
      <section id="cards" className="brand-kit-section" style={sectionStyle}>
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
      <section id="skill-pills" className="brand-kit-section" style={sectionStyle}>
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
      <section id="layout-patterns" className="brand-kit-section" style={sectionStyle}>
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
    </>
  );
}
