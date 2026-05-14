import { Drilldown } from "@/components/Drilldown";
import {
  sectionStyle,
  sectionTitleStyle,
  sectionDescStyle,
  codeStyle,
} from "@/components/brand-kit/styles";

export function DataSections() {
  return (
    <>
      {/* ── Score Progression ─────────────────────────────────────── */}
      <section id="score-progression" className="brand-kit-section" style={sectionStyle}>
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
      <section id="hero-metric" className="brand-kit-section" style={sectionStyle}>
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
      <section id="metric-tile" className="brand-kit-section" style={sectionStyle}>
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
      <section id="delta-tile" className="brand-kit-section" style={sectionStyle}>
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
      <section id="sparkline-bar-row" className="brand-kit-section" style={{ ...sectionStyle, borderBottom: "none" }}>
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
      <section id="code-block" className="brand-kit-section" style={sectionStyle}>
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
      <section id="drilldown-card" className="brand-kit-section" style={sectionStyle}>
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
    </>
  );
}
