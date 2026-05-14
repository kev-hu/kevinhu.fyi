import type { ReactNode } from "react";

interface DrilldownProps {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}

export function Drilldown({
  title,
  eyebrow = "Drill-down",
  children,
}: DrilldownProps) {
  return (
    <aside
      style={{
        margin: "2.5rem 0",
        padding: "28px 32px",
        background: "var(--color-card)",
        border: "2px solid var(--color-foreground)",
        borderRadius: "var(--radius-card)",
        boxShadow: "var(--shadow-brutal-sm)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          backgroundColor: "var(--color-primary)",
          color: "#ffffff",
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "5px 12px",
          borderRadius: "var(--radius-button)",
          marginBottom: "14px",
        }}
      >
        {eyebrow}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "1.125rem",
          fontWeight: 700,
          letterSpacing: "-0.01em",
          margin: 0,
          marginBottom: "16px",
          color: "var(--color-foreground)",
        }}
      >
        {title}
      </h3>
      <div className="drilldown-body">{children}</div>
    </aside>
  );
}
