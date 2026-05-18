import type { CSSProperties } from "react";

type Verdict = "pass" | "fail";

type CriterionRow = {
  label: string;
  optionA: { verdict: Verdict; note?: string };
  optionB: { verdict: Verdict; note?: string };
};

const ROWS: CriterionRow[] = [
  {
    label: "License costs",
    optionA: { verdict: "fail", note: "~$192K/yr" },
    optionB: { verdict: "pass", note: "~$40K/yr" },
  },
  {
    label: "Full CRM features for all users",
    optionA: { verdict: "pass" },
    optionB: { verdict: "fail", note: "Portals = scoped UI" },
  },
  {
    label: "Confidence & feasibility",
    optionA: { verdict: "pass", note: "known to work" },
    optionB: { verdict: "fail", note: "needed UI/workflow validation" },
  },
  {
    label: "Scales w/ org growth",
    optionA: { verdict: "fail", note: "linear $/seat" },
    optionB: { verdict: "pass", note: "Portals + SSO onboarding" },
  },
];

const SCORE_A = ROWS.filter((r) => r.optionA.verdict === "pass").length;
const SCORE_B = ROWS.filter((r) => r.optionB.verdict === "pass").length;
const TOTAL = ROWS.length;

const BG = "#0E1117";
const TEXT = "#E5E7EB";
const MUTED = "rgba(255,255,255,0.5)";
const DIM = "rgba(255,255,255,0.4)";
const GREEN = "#22c55e";
const RED = "#f87171";
const BLUE = "#1CB0F6";

const GRID = "1.6fr 0.9fr 0.9fr";

const markStyle = (verdict: Verdict): CSSProperties => ({
  color: verdict === "pass" ? GREEN : RED,
  fontWeight: 700,
  fontSize: "1.15rem",
  lineHeight: 1,
});

const noteStyle: CSSProperties = {
  fontSize: "0.75rem",
  color: DIM,
  marginTop: 4,
  lineHeight: 1.4,
};

export function LicensingDecision() {
  return (
    <div style={{ margin: "32px 0" }}>
      <div
        style={{
          border: "2px solid var(--color-foreground)",
          borderRadius: "var(--radius-card)",
          boxShadow: "var(--shadow-brutal)",
          backgroundColor: BG,
          overflow: "hidden",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            padding: "14px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            fontFamily: "monospace",
            fontSize: "0.8125rem",
            color: MUTED,
          }}
        >
          blink-licensing / decision.tsx
        </div>

        {/* Body */}
        <div
          style={{
            padding: "24px 28px",
            color: TEXT,
            fontFamily: "monospace",
            fontSize: "0.875rem",
            lineHeight: 1.7,
            overflowX: "auto",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <span style={{ color: BLUE, fontWeight: 700 }}>
              2,000 users, county budget — which licensing model?
            </span>
          </div>

          <div style={{ minWidth: 560 }}>
            {/* Column headers */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: GRID,
                gap: "8px 24px",
                color: MUTED,
                fontSize: "0.8125rem",
                paddingBottom: "12px",
                borderBottom: "1px dashed rgba(255,255,255,0.12)",
              }}
            >
              <span>Criterion</span>
              <div style={{ textAlign: "center" }}>
                <div>Option A</div>
                <div style={{ fontSize: "0.75rem", color: DIM, marginTop: 2 }}>
                  Standard licensing
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div>Option B</div>
                <div style={{ fontSize: "0.75rem", color: DIM, marginTop: 2 }}>
                  Tiered w/ Portals
                </div>
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((row) => (
              <div
                key={row.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: GRID,
                  gap: "8px 24px",
                  paddingTop: "14px",
                  paddingBottom: "14px",
                  borderBottom: "1px dashed rgba(255,255,255,0.06)",
                  alignItems: "start",
                }}
              >
                <span style={{ color: TEXT }}>{row.label}</span>
                <div style={{ textAlign: "center" }}>
                  <span style={markStyle(row.optionA.verdict)}>
                    {row.optionA.verdict === "pass" ? "✓" : "✗"}
                  </span>
                  {row.optionA.note && <div style={noteStyle}>{row.optionA.note}</div>}
                </div>
                <div style={{ textAlign: "center" }}>
                  <span style={markStyle(row.optionB.verdict)}>
                    {row.optionB.verdict === "pass" ? "✓" : "✗"}
                  </span>
                  {row.optionB.note && <div style={noteStyle}>{row.optionB.note}</div>}
                </div>
              </div>
            ))}

            {/* Score row */}
            <div
              style={{
                marginTop: "16px",
                display: "grid",
                gridTemplateColumns: GRID,
                gap: "8px 24px",
                paddingTop: "12px",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                fontSize: "0.9375rem",
              }}
            >
              <span style={{ color: MUTED }}>Criteria passed</span>
              <span
                style={{
                  textAlign: "center",
                  fontVariantNumeric: "tabular-nums",
                  color: TEXT,
                  fontWeight: 700,
                }}
              >
                {SCORE_A} / {TOTAL}
              </span>
              <span
                style={{
                  textAlign: "center",
                  fontVariantNumeric: "tabular-nums",
                  color: TEXT,
                  fontWeight: 700,
                }}
              >
                {SCORE_B} / {TOTAL}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p style={{ fontSize: "0.95rem", lineHeight: 1.6, marginTop: "20px", marginBottom: 0 }}>
        Went with Option B. The cost gap was too big to ignore, and the case manager workflow
        was narrow enough that Portals&rsquo; scoped UI fit. Validating that fit was real upfront work,
        but it cut licensing by ~$150K/yr.
      </p>
    </div>
  );
}
