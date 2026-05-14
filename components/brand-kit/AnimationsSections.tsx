import Button from "@/components/Button";
import {
  sectionStyle,
  sectionTitleStyle,
  sectionDescStyle,
} from "@/components/brand-kit/styles";

export function AnimationsSections() {
  return (
    <>
      {/* ── 1. Animated Hero Entrance ────────────────────────────────────── */}
      <section id="animated-hero-entrance" className="brand-kit-section" style={sectionStyle}>
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
      <section id="counting-stats" className="brand-kit-section" style={sectionStyle}>
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
      <section id="card-cascade" className="brand-kit-section" style={sectionStyle}>
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
      <section id="floating-skill-badges" className="brand-kit-section" style={sectionStyle}>
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
      <section id="pulsing-cta-block" className="brand-kit-section" style={sectionStyle}>
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
      <section id="marquee-ticker" className="brand-kit-section" style={sectionStyle}>
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
    </>
  );
}
