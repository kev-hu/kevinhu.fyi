import {
  sectionStyle,
  sectionTitleStyle,
  sectionDescStyle,
  tokenLabelStyle,
} from "@/components/brand-kit/styles";

type CalloutTone = "info" | "success" | "warning" | "note";

type EmojiCalloutVariant = {
  emoji: string;
  label: string;
  body: string;
  color: string;
  rotation: number;
};

const CALLOUT_TONES: Record<
  CalloutTone,
  { label: string; color: string; tint: string; icon: string }
> = {
  info:    { label: "Info",    color: "var(--color-primary)",   tint: "rgba(28,176,246,0.08)",  icon: "i" },
  success: { label: "Success", color: "var(--color-secondary)", tint: "rgba(34,197,94,0.10)",   icon: "✓" },
  warning: { label: "Warning", color: "#F59E0B",                tint: "rgba(245,158,11,0.10)",  icon: "!" },
  note:    { label: "Note",    color: "#6B7280",                tint: "rgba(107,114,128,0.08)", icon: "•" },
};

const EMOJI_CALLOUTS: EmojiCalloutVariant[] = [
  {
    emoji: "💡",
    label: "Tip",
    body: "Anchor the metric to a baseline before claiming impact. A 29-point activation lift lands harder when the reader sees the original 12% and the exact onboarding step that changed.",
    color: "var(--color-primary)",
    rotation: -3,
  },
  {
    emoji: "🎯",
    label: "Goal",
    body: "Reduce time-to-first-value under 3 minutes without adding another setup screen. We treated the first imported dataset as the activation moment and designed every empty state around getting users there.",
    color: "var(--color-primary)",
    rotation: 2,
  },
  {
    emoji: "🔥",
    label: "Hot take",
    body: "Most onboarding flows are apologies for unclear product surfaces. The work that moved activation was not a longer tour; it was making the dashboard empty state do the job the tour was failing to do.",
    color: "#EF4444",
    rotation: -2,
  },
  {
    emoji: "📌",
    label: "Pinned",
    body: "The team chose to keep CSV import as the primary path for v1 because it matched the sales motion. API setup stayed in the product, but it stopped blocking first-session activation.",
    color: "#6B7280",
    rotation: 3,
  },
  {
    emoji: "🚧",
    label: "Work in progress",
    body: "Retention data is still maturing. The first 6-week read shows stronger setup completion, but the 90-day cohort is the number that will decide whether this change belongs in the case study headline.",
    color: "#F59E0B",
    rotation: -1,
  },
  {
    emoji: "🧪",
    label: "Experiment",
    body: "We tested a version with the progress bar removed entirely. Completion stayed flat, but median setup time dropped by 18 seconds because users stopped pausing to interpret the remaining steps.",
    color: "var(--color-secondary)",
    rotation: 2,
  },
];

const DO_DONT_CALLOUTS: EmojiCalloutVariant[] = [
  {
    emoji: "✅",
    label: "Do",
    body: "Name the decision, the constraint, and the measured result. For example: moving import into the empty state took activation from 12% to 41% in six weeks.",
    color: "var(--color-secondary)",
    rotation: -2,
  },
  {
    emoji: "❌",
    label: "Don't",
    body: "Do not write around the metric with generic claims like improved UX or streamlined flow. If the number is not ready yet, say what is still being measured.",
    color: "#EF4444",
    rotation: 2,
  },
];

function Callout({
  tone,
  title,
  children,
}: {
  tone: CalloutTone;
  title: string;
  children: React.ReactNode;
}) {
  const t = CALLOUT_TONES[tone];
  return (
    <div
      style={{
        display: "flex",
        background: "var(--color-card)",
        border: "2px solid var(--color-foreground)",
        borderRadius: "var(--radius-card)",
        boxShadow: "var(--shadow-brutal)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "8px",
          flexShrink: 0,
          background: t.color,
          borderRight: "2px solid var(--color-foreground)",
        }}
      />
      <div style={{ padding: "20px 24px", flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "8px",
          }}
        >
          <span
            aria-hidden
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: t.tint,
              color: t.color,
              border: `2px solid ${t.color}`,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            {t.icon}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: t.color,
            }}
          >
            {t.label}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--color-foreground)",
            }}
          >
            — {title}
          </span>
        </div>
        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.9375rem",
            lineHeight: 1.65,
            color: "var(--color-foreground)",
            opacity: 0.85,
            margin: 0,
          }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}

function EmojiCallout({ callout }: { callout: EmojiCalloutVariant }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        gap: "18px",
        paddingTop: "6px",
        paddingBottom: "2px",
      }}
    >
      <span
        aria-hidden
        style={{
          width: "60px",
          height: "60px",
          flexShrink: 0,
          background: callout.color,
          border: "2px solid var(--color-foreground)",
          borderRadius: "12px",
          boxShadow: "3px 3px 0 var(--color-foreground)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.75rem",
          lineHeight: 1,
          transform: `rotate(${callout.rotation}deg)`,
          marginTop: "2px",
        }}
      >
        {callout.emoji}
      </span>
      <div
        style={{
          flex: 1,
          minWidth: 0,
          background: "var(--color-card)",
          border: "2px solid var(--color-foreground)",
          borderRadius: "var(--radius-card)",
          boxShadow: "var(--shadow-brutal)",
          padding: "16px 20px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "0.75rem",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: callout.color,
            margin: 0,
            marginBottom: "6px",
          }}
        >
          {callout.label}
        </p>
        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.9375rem",
            lineHeight: 1.6,
            color: "var(--color-foreground)",
            opacity: 0.88,
            margin: 0,
          }}
        >
          {callout.body}
        </p>
      </div>
    </div>
  );
}

const tableContainerStyle: React.CSSProperties = {
  border: "2px solid var(--color-foreground)",
  borderRadius: "var(--radius-card)",
  boxShadow: "var(--shadow-brutal)",
  background: "var(--color-card)",
  overflow: "hidden",
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.9375rem",
  color: "var(--color-foreground)",
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "14px 18px",
  fontFamily: "var(--font-display), sans-serif",
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#ffffff",
  background: "var(--color-foreground)",
  borderRight: "1px solid rgba(255,255,255,0.12)",
};

const tdStyle: React.CSSProperties = {
  padding: "14px 18px",
  borderTop: "1px solid var(--color-muted)",
  borderRight: "1px solid var(--color-muted)",
  verticalAlign: "top",
};

const numStyle: React.CSSProperties = {
  fontFamily: "var(--font-display), sans-serif",
  fontVariantNumeric: "tabular-nums",
  fontWeight: 700,
};

const codeMonoStyle: React.CSSProperties = {
  fontFamily: "monospace",
  fontSize: "0.8125rem",
  color: "var(--color-primary)",
  background: "rgba(28,176,246,0.08)",
  padding: "2px 6px",
  borderRadius: "4px",
};

export function ContentSections() {
  return (
    <>
      {/* ── Callouts ───────────────────────────────────────────────────────── */}
      <section id="callouts" className="brand-kit-section" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Callouts</h2>
        <p style={sectionDescStyle}>
          Boxed asides for use inside case-study MDX to flag context, results,
          gotchas, or sidebar notes. Four tones map to intent. The colored left
          bar is the brand neubrutalist signal — same offset shadow as cards.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Callout tone="info" title="Context">
            We started with a $0 marketing budget and a team of two. The goal
            wasn&apos;t scale — it was figuring out whether the wedge actually
            worked.
          </Callout>

          <Callout tone="success" title="Outcome">
            Activation jumped from 12% to 41% in six weeks. The single change
            that moved the needle: surfacing the &quot;import&quot; flow on the
            empty state instead of the dashboard.
          </Callout>

          <Callout tone="warning" title="Watch out">
            This pattern only works when retention is already healthy. If
            new-user churn is your problem, fixing onboarding here will paper
            over the real issue.
          </Callout>

          <Callout tone="note" title="Aside">
            We considered three other framings before landing on this one — see
            the appendix at the bottom of the case study for the discarded
            options and why they failed.
          </Callout>
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
          structure: 8px colored bar (left) + 2px black border + brutal shadow<br />
          tones: info → primary blue | success → secondary green | warning → #F59E0B | note → #6B7280<br />
          title row: icon chip + uppercase tone label + display-font title<br />
          usage: 1–3 sentences max — if it&apos;s longer, make it a paragraph
        </div>

        <div style={{ marginTop: "48px" }}>
          <h3
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "var(--color-foreground)",
              margin: 0,
              marginBottom: "8px",
            }}
          >
            Field Notes
          </h3>
          <p style={{ ...sectionDescStyle, marginBottom: "24px" }}>
          Inline stamps for case-study body copy. A chunky emoji sticker —
          slapped on slightly crooked — pins each note next to the paragraph
          it clarifies. Same brand palette as the boxed callouts above, more
          notebook-margin energy.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              maxWidth: "760px",
            }}
          >
            {EMOJI_CALLOUTS.map((callout) => (
              <EmojiCallout key={callout.label} callout={callout} />
            ))}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              {DO_DONT_CALLOUTS.map((callout) => (
                <div
                  key={callout.label}
                  style={{
                    flex: "1 1 280px",
                    minWidth: 0,
                  }}
                >
                  <EmojiCallout callout={callout} />
                </div>
              ))}
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
            • structure: 60px emoji stamp (solid color, 2px border, brutal shadow, rotated ±1–3°) + brutal white card<br />
            • palette: stamps inherit brand tokens — primary blue, secondary green, warning amber, neutral gray + one red for hot-takes / don&apos;ts<br />
            • variants: 💡 Tip | 🎯 Goal | 🔥 Hot take | 📌 Pinned | 🚧 Work in progress | 🧪 Experiment | ✅ Do / ❌ Don&apos;t<br />
            • use inline within MDX case-study sections, not in nav, heroes, or primary CTAs<br />
            • Do / Don&apos;t belongs side-by-side — the contrast is the whole point
          </div>
        </div>
      </section>

      {/* ── Tables ─────────────────────────────────────────────────────────── */}
      <section id="tables" className="brand-kit-section" style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Tables</h2>
        <p style={sectionDescStyle}>
          Two table flavors for case studies: a <strong>comparison table</strong>{" "}
          (before/after, option A vs B), and a <strong>data table</strong> for
          metric rows. Dark header bar, hairline row dividers, tabular numerals
          for any numeric column.
        </p>

        {/* Comparison table */}
        <div style={{ marginBottom: "32px" }}>
          <p style={{ ...tokenLabelStyle, marginBottom: "12px" }}>
            Comparison table — qualitative side-by-side
          </p>
          <div style={tableContainerStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={{ ...thStyle, width: "30%" }}>Aspect</th>
                  <th style={thStyle}>Before</th>
                  <th style={{ ...thStyle, borderRight: "none" }}>After</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 700 }}>Empty state</td>
                  <td style={tdStyle}>
                    Generic &quot;No data yet&quot; placeholder with no path
                    forward.
                  </td>
                  <td style={{ ...tdStyle, borderRight: "none" }}>
                    Single primary CTA: <span style={codeMonoStyle}>Import your data</span>.
                  </td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 700 }}>Onboarding length</td>
                  <td style={tdStyle}>6 steps, ~4 minutes median.</td>
                  <td style={{ ...tdStyle, borderRight: "none" }}>
                    2 steps, ~45 seconds median.
                  </td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 700, borderBottom: "none" }}>
                    Activation
                  </td>
                  <td style={{ ...tdStyle, borderBottom: "none" }}>12% in week 1.</td>
                  <td style={{ ...tdStyle, borderRight: "none", borderBottom: "none" }}>
                    41% in week 1.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Data table */}
        <div style={{ marginBottom: "24px" }}>
          <p style={{ ...tokenLabelStyle, marginBottom: "12px" }}>
            Data table — metric rows with tabular numerals
          </p>
          <div style={tableContainerStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={{ ...thStyle, width: "34%" }}>Metric</th>
                  <th style={{ ...thStyle, textAlign: "right" }}>Baseline</th>
                  <th style={{ ...thStyle, textAlign: "right" }}>After</th>
                  <th style={{ ...thStyle, textAlign: "right", borderRight: "none" }}>
                    Δ
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Activation rate",  before: "12%",   after: "41%",   delta: "+29 pp", up: true },
                  { label: "Time to first value", before: "4m 12s", after: "0m 45s", delta: "−82%",  up: true },
                  { label: "Day-7 retention",  before: "18%",   after: "29%",   delta: "+11 pp", up: true },
                  { label: "Support tickets / 100 signups", before: "9.4", after: "11.7", delta: "+24%", up: false },
                ].map((row, i, arr) => {
                  const last = i === arr.length - 1;
                  return (
                    <tr key={row.label}>
                      <td
                        style={{
                          ...tdStyle,
                          fontWeight: 700,
                          ...(last ? { borderBottom: "none" } : null),
                        }}
                      >
                        {row.label}
                      </td>
                      <td
                        style={{
                          ...tdStyle,
                          ...numStyle,
                          textAlign: "right",
                          opacity: 0.6,
                          ...(last ? { borderBottom: "none" } : null),
                        }}
                      >
                        {row.before}
                      </td>
                      <td
                        style={{
                          ...tdStyle,
                          ...numStyle,
                          textAlign: "right",
                          ...(last ? { borderBottom: "none" } : null),
                        }}
                      >
                        {row.after}
                      </td>
                      <td
                        style={{
                          ...tdStyle,
                          ...numStyle,
                          textAlign: "right",
                          borderRight: "none",
                          color: row.up ? "var(--color-secondary)" : "#F59E0B",
                          ...(last ? { borderBottom: "none" } : null),
                        }}
                      >
                        {row.delta}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div
          style={{
            padding: "16px",
            background: "rgba(28,176,246,0.04)",
            borderRadius: "var(--radius-button)",
            fontFamily: "monospace",
            fontSize: "0.8125rem",
            lineHeight: 1.8,
            color: "var(--color-foreground)",
          }}
        >
          container: 2px border + brutal shadow + 16px radius (overflow: hidden)<br />
          header: var(--color-foreground) bg, white text, display font uppercase 0.75rem<br />
          cells: 14px / 18px padding, hairline var(--color-muted) dividers<br />
          numbers: var(--font-display) + font-variant-numeric: tabular-nums (right-aligned)<br />
          first column: fontWeight 700 to anchor each row
        </div>
      </section>
    </>
  );
}
