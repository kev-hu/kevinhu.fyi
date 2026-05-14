import Button from "@/components/Button";
import {
  sectionStyle,
  sectionTitleStyle,
  sectionDescStyle,
  tokenLabelStyle,
} from "@/components/brand-kit/styles";

export function HeroSections() {
  return (
    <>
        {/* ── Banner 1: The Terminal Card ────────────────────────────────── */}
        <section id="terminal-card" className="brand-kit-section" style={sectionStyle}>
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
        <section id="stat-wall" className="brand-kit-section" style={sectionStyle}>
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
        <section id="the-stack" className="brand-kit-section" style={sectionStyle}>
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
        <section id="bridge-diagram" className="brand-kit-section" style={sectionStyle}>
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
        <section id="marquee-strip-enhanced" className="brand-kit-section" style={sectionStyle}>
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

        {/* ── Component 1: The Window Card ─────────────────────────────── */}
        <section id="window-card" className="brand-kit-section" style={sectionStyle}>
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
        <section id="headshot-split" className="brand-kit-section" style={sectionStyle}>
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
        <section id="availability-badge" className="brand-kit-section" style={sectionStyle}>
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

        {/* ── The Quote Block ────────────────────────────────────────────── */}
        <section id="quote-block" className="brand-kit-section" style={sectionStyle}>
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
        <section id="split-comparison" className="brand-kit-section" style={sectionStyle}>
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
        <section id="social-card" className="brand-kit-section" style={{ ...sectionStyle, borderBottom: "none" }}>
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

        {/* ── Architecture Diagram ────────────────────────────────── */}
        <section id="architecture-diagram" className="brand-kit-section" style={sectionStyle}>
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
        <section id="annotated-screenshot" className="brand-kit-section" style={sectionStyle}>
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
        <section id="process-timeline" className="brand-kit-section" style={sectionStyle}>
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
    </>
  );
}
