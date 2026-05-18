import type { CSSProperties } from "react";

const filterChipStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  padding: "7px 14px",
  border: "2px solid var(--color-foreground)",
  borderRadius: "100px",
  backgroundColor: "var(--color-foreground)",
  boxShadow: "var(--shadow-brutal-sm)",
  fontFamily: "var(--font-display), sans-serif",
  fontSize: "0.75rem",
  fontWeight: 700,
  color: "#ffffff",
  whiteSpace: "nowrap",
};

const filterLabelStyle: CSSProperties = {
  fontSize: "0.625rem",
  color: "rgba(255,255,255,0.55)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const tileEyebrowStyle: CSSProperties = {
  fontFamily: "var(--font-display), sans-serif",
  fontSize: "0.6875rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--color-foreground)",
  opacity: 0.5,
  margin: 0,
  marginBottom: 14,
};

const cardStyle: CSSProperties = {
  border: "2px solid var(--color-foreground)",
  borderRadius: "var(--radius-container)",
  backgroundColor: "var(--color-card)",
  boxShadow: "var(--shadow-brutal-sm)",
  padding: "20px 22px",
};

const FILTERS = [
  { label: "Region", value: "Northeast" },
  { label: "Entity", value: "S-Corp" },
  { label: "Program", value: "ERC" },
];

const REGION_ROWS = [
  { name: "Northeast", value: 54, pct: 100 },
  { name: "Central", value: 41, pct: 76 },
  { name: "Southeast", value: 33, pct: 61 },
  { name: "West", value: 29, pct: 54 },
  { name: "Mountain", value: 21, pct: 39 },
];

const TRAFFIC = ["#FF5F57", "#FEBC2E", "#28C840"];

export function PartnerDashboard() {
  return (
    <div style={{ margin: "32px 0" }}>
      <div
        style={{
          border: "2px solid var(--color-foreground)",
          borderRadius: "var(--radius-card)",
          boxShadow: "var(--shadow-brutal)",
          backgroundColor: "var(--color-card)",
          overflow: "hidden",
        }}
      >
        {/* Window chrome */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "11px 14px",
            borderBottom: "2px solid var(--color-foreground)",
            backgroundColor: "var(--color-foreground)",
          }}
        >
          <div style={{ display: "flex", gap: 7 }}>
            {TRAFFIC.map((c) => (
              <span
                key={c}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: c,
                  border: "1px solid rgba(0,0,0,0.4)",
                }}
              />
            ))}
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "monospace",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.85)",
              fontWeight: 500,
            }}
          >
            <span>partner-view</span>
            <span style={{ margin: "0 8px", color: "rgba(255,255,255,0.4)" }}>›</span>
            <span>northeast</span>
            <span style={{ margin: "0 8px", color: "rgba(255,255,255,0.4)" }}>›</span>
            <span>s-corp</span>
            <span style={{ margin: "0 8px", color: "rgba(255,255,255,0.4)" }}>›</span>
            <span style={{ color: "var(--color-primary)", fontWeight: 600 }}>erc</span>
          </div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "3px 9px",
              border: "1px dashed rgba(255,255,255,0.4)",
              borderRadius: 4,
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.625rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)",
              whiteSpace: "nowrap",
            }}
          >
            Example view
          </span>
        </div>

        {/* Canvas with dot-grid background */}
        <div
          style={{
            padding: "28px",
            backgroundColor: "var(--color-background)",
            backgroundImage:
              "radial-gradient(circle, rgba(20,20,20,0.12) 1px, transparent 1.2px)",
            backgroundSize: "18px 18px",
            backgroundPosition: "0 0",
          }}
        >
          {/* Filter pills floating on the canvas */}
          <div
            style={{
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 22,
            }}
          >
            {FILTERS.map((f) => (
              <span key={f.label} style={filterChipStyle}>
                <span style={filterLabelStyle}>{f.label}</span>
                <span style={{ color: "var(--color-primary)", fontWeight: 800 }}>{f.value}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.625rem" }}>▾</span>
              </span>
            ))}
          </div>

          {/* Two-card grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(220px, 0.9fr) minmax(280px, 1.4fr)",
              gap: 18,
              alignItems: "stretch",
            }}
          >
            {/* Hero metric card */}
            <div style={cardStyle}>
              <p style={tileEyebrowStyle}>Tax opportunity</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    color: "var(--color-foreground)",
                    lineHeight: 1,
                  }}
                >
                  $42.1M
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "var(--color-secondary)",
                    color: "var(--color-foreground)",
                    padding: "5px 11px",
                    borderRadius: "var(--radius-button)",
                    border: "2px solid var(--color-foreground)",
                    boxShadow: "var(--shadow-brutal-sm)",
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 800,
                    whiteSpace: "nowrap",
                  }}
                >
                  +38%
                </span>
              </div>
            </div>

            {/* Region bars card */}
            <div style={cardStyle}>
              <p style={tileEyebrowStyle}>Top regions ($M)</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {REGION_ROWS.map((r, i) => (
                  <RegionRow key={r.name} {...r} leader={i === 0} />
                ))}
              </div>
            </div>
          </div>
        </div>
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
        Each partner could filter their own view by region, entity type, and subsidy program.
        Central triage would have bottlenecked on day one — ninety offices needed ninety self-serve
        views.
      </p>
    </div>
  );
}

function RegionRow({
  name,
  value,
  pct,
  leader,
}: {
  name: string;
  value: number;
  pct: number;
  leader?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <span
        style={{
          width: 88,
          fontFamily: "monospace",
          fontSize: "0.8125rem",
          fontWeight: leader ? 700 : 600,
          color: "var(--color-foreground)",
          opacity: leader ? 1 : 0.7,
          flexShrink: 0,
        }}
      >
        {name}
      </span>
      <div
        style={{
          flex: 1,
          position: "relative",
          height: 14,
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
            width: `${pct}%`,
            backgroundColor: leader ? "var(--color-primary)" : "rgba(28,176,246,0.5)",
          }}
        />
      </div>
      <span
        style={{
          width: 52,
          textAlign: "right",
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "0.875rem",
          fontWeight: 800,
          color: "var(--color-foreground)",
          opacity: leader ? 1 : 0.75,
          fontVariantNumeric: "tabular-nums",
          flexShrink: 0,
        }}
      >
        ${value}M
      </span>
    </div>
  );
}
