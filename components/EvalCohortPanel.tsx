import type { CSSProperties } from "react";

type Row = { category: string; values: [number, number, number] };

const ROWS: Row[] = [
  { category: "Data security",            values: [2, 6, 14] },
  { category: "Endpoint security",        values: [7, 43, 38] },
  { category: "Governance, risk",         values: [5, 0, 13] },
  { category: "Identity security",        values: [0, 22, 15] },
  { category: "Network security",         values: [2, 9, 13] },
  { category: "Security automation",      values: [9, 6, 20] },
  { category: "Security awareness",       values: [2, 18, 9] },
  { category: "Third-party risk",         values: [0, 6, 23] },
  { category: "Vulnerability management", values: [2, 18, 24] },
  { category: "Incident response",        values: [32, 32, 26] },
  { category: "Managed security",         values: [24, 42, 36] },
  { category: "Penetration testing",      values: [10, 23, 19] },
];

const THRESHOLD = 10;

const PASSING: [number, number, number] = [0, 1, 2].map(
  (i) => ROWS.filter((r) => r.values[i] >= THRESHOLD).length,
) as [number, number, number];
const TOTAL = ROWS.length;

const COHORTS = [
  { id: "A", label: "Baseline — single global rubric" },
  { id: "B", label: "+ Rubric granularity — per-category criteria" },
  { id: "C", label: "+ Perplexity grounding — retrieval where coverage was thin" },
];

const BG = "#0E1117";
const TEXT = "#E5E7EB";
const MUTED = "rgba(255,255,255,0.5)";
const DIM = "rgba(255,255,255,0.4)";
const GREEN = "#22c55e";
const RED = "#f87171";
const BLUE = "#1CB0F6";

const GRID = "1.6fr 0.7fr 0.7fr 0.7fr";

type Tone = "red" | "green" | "neutral";

function tone(values: [number, number, number], idx: number): Tone {
  // Cohorts A and B: red if below threshold (compression).
  if (idx < 2 && values[idx] < THRESHOLD) return "red";
  if (idx === 2) {
    // Cohort C: red if still below threshold (regression).
    if (values[2] < THRESHOLD) return "red";
    // Cohort C: green if B was below threshold and C lifted above it.
    if (values[1] < THRESHOLD && values[2] > values[1]) return "green";
  }
  return "neutral";
}

const cellStyle = (t: Tone): CSSProperties => ({
  textAlign: "right",
  fontVariantNumeric: "tabular-nums",
  color: t === "red" ? RED : t === "green" ? GREEN : TEXT,
  fontWeight: t === "green" ? 600 : 400,
});

export function EvalCohortPanel() {
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
          cyberse-eval / cohorts.tsx
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
          <div
            style={{
              marginBottom: "20px",
              fontSize: "0.8125rem",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: BLUE, fontWeight: 700 }}>Score compression</span>
            <span style={{ color: MUTED }}>12 categories · 3 cohorts</span>
          </div>

          <div style={{ minWidth: 560 }}>
            {/* Header */}
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
              <span>Category</span>
              <span style={{ textAlign: "right" }}>Cohort A</span>
              <span style={{ textAlign: "right" }}>Cohort B</span>
              <span style={{ textAlign: "right" }}>Cohort C</span>
            </div>

            {/* Rows */}
            {ROWS.map((row) => (
              <div
                key={row.category}
                style={{
                  display: "grid",
                  gridTemplateColumns: GRID,
                  gap: "8px 24px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderBottom: "1px dashed rgba(255,255,255,0.06)",
                }}
              >
                <span style={{ color: TEXT }}>{row.category}</span>
                {[0, 1, 2].map((i) => (
                  <span key={i} style={cellStyle(tone(row.values, i))}>
                    {row.values[i]}%
                  </span>
                ))}
              </div>
            ))}

            {/* Composite trajectory */}
            <div
              style={{
                marginTop: "18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "0.875rem",
              }}
            >
              <span style={{ color: MUTED }}>Categories passing (≥ 10%)</span>
              <span style={{ fontVariantNumeric: "tabular-nums" }}>
                <span style={{ color: DIM }}>
                  {PASSING[0]}/{TOTAL}
                </span>
                <span style={{ color: DIM, margin: "0 10px" }}>→</span>
                <span style={{ color: TEXT }}>
                  {PASSING[1]}/{TOTAL}
                </span>
                <span style={{ color: DIM, margin: "0 10px" }}>→</span>
                <span style={{ color: GREEN, fontWeight: 700 }}>
                  {PASSING[2]}/{TOTAL}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cohort legend */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        {COHORTS.map((c) => (
          <div key={c.id} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span
              style={{
                flexShrink: 0,
                width: 22,
                height: 22,
                borderRadius: "50%",
                backgroundColor: "var(--color-foreground)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-display), sans-serif",
                fontWeight: 700,
                fontSize: "0.75rem",
                lineHeight: 1,
              }}
            >
              {c.id}
            </span>
            <p style={{ fontSize: "0.8125rem", lineHeight: 1.5, margin: 0 }}>{c.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
