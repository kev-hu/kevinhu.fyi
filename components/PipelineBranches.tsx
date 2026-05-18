import type { CSSProperties } from "react";

const pillBadgeStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "rgba(28,176,246,0.12)",
  border: "1px solid var(--color-primary)",
  color: "#0369a1",
  fontFamily: "var(--font-display), sans-serif",
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  padding: "4px 12px",
  borderRadius: "100px",
};

const captionStyle: CSSProperties = {
  marginLeft: 12,
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "var(--color-foreground)",
  opacity: 0.75,
};

const BRANCHES = [
  "Partnerships",
  "S-Corps",
  "C-Corps",
  "Sole Proprietorships",
  "LLCs",
  "Trusts",
];

const SCHEMA_FIELDS = [
  { name: "account_id", type: "string" },
  { name: "entity_type", type: "string" },
  { name: "qualifies", type: "bool" },
  { name: "subsidy_program", type: "string" },
  { name: "opportunity_size", type: "money" },
];

export function PipelineBranches() {
  return (
    <div style={{ margin: "32px 0" }}>
      <div
        style={{
          border: "2px solid var(--color-foreground)",
          borderRadius: "var(--radius-card)",
          boxShadow: "var(--shadow-brutal)",
          backgroundColor: "var(--color-card)",
          padding: "32px",
        }}
      >
        <div style={{ marginBottom: 20, display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          <span style={pillBadgeStyle}>Alteryx Pipeline</span>
          <span style={captionStyle}>six branches → one schema</span>
        </div>

        <BranchesToSchema />
      </div>

      <p
        style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.9375rem",
          lineHeight: 1.6,
          marginTop: 16,
          marginBottom: 0,
          color: "var(--color-foreground)",
          opacity: 0.7,
        }}
      >
        Each branch came from one entity-type spreadsheet. A separate mapping document handled
        state-by-state wrinkles so the branches stayed aligned with how the tax leaders read the
        rules.
      </p>
    </div>
  );
}

function BranchesToSchema() {
  const ROW_H = 38;
  const N = BRANCHES.length;
  const HEIGHT = ROW_H * N;
  const MIDPOINT = HEIGHT / 2;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(140px, 1fr) 90px minmax(180px, 1.2fr)",
        alignItems: "stretch",
        gap: 0,
      }}
    >
      {/* Branches column */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {BRANCHES.map((b) => (
          <div
            key={b}
            style={{
              height: ROW_H,
              display: "flex",
              alignItems: "center",
              gap: 12,
              paddingRight: 6,
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 3,
                backgroundColor: "var(--color-primary)",
                border: "1.5px solid var(--color-foreground)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-foreground)",
              }}
            >
              {b}
            </span>
          </div>
        ))}
      </div>

      {/* Convergence SVG */}
      <div style={{ position: "relative", minHeight: HEIGHT }}>
        <svg
          viewBox={`0 0 90 ${HEIGHT}`}
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%", display: "block" }}
          aria-hidden
        >
          {BRANCHES.map((_, i) => {
            const y = ROW_H * i + ROW_H / 2;
            return (
              <path
                key={i}
                d={`M 0 ${y} C 30 ${y}, 60 ${MIDPOINT}, 90 ${MIDPOINT}`}
                stroke="var(--color-foreground)"
                strokeWidth={2.25}
                fill="none"
                strokeLinecap="round"
              />
            );
          })}
          <circle
            cx={90}
            cy={MIDPOINT}
            r={9}
            fill="var(--color-secondary)"
            stroke="var(--color-foreground)"
            strokeWidth={2.5}
          />
        </svg>
      </div>

      {/* Output schema */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
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
            marginBottom: 10,
          }}
        >
          Output Schema
        </p>
        <div
          style={{
            width: "100%",
            border: "2px solid var(--color-foreground)",
            borderRadius: "var(--radius-container)",
            backgroundColor: "var(--color-card)",
            boxShadow: "var(--shadow-brutal-sm)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: 6,
              backgroundColor: "var(--color-secondary)",
              borderBottom: "2px solid var(--color-foreground)",
            }}
          />
          <div style={{ padding: "14px 16px" }}>
            {SCHEMA_FIELDS.map((f, i) => (
              <div
                key={f.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontFamily: "monospace",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--color-foreground)",
                  padding: "6px 0",
                  borderBottom:
                    i < SCHEMA_FIELDS.length - 1 ? "1px dashed var(--color-muted)" : "none",
                }}
              >
                <span>{f.name}</span>
                <span
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "var(--color-primary)",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {f.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
