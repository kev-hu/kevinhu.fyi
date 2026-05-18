import type { ReactNode } from "react";

interface CardProps {
  title: string;
  eyebrow?: string;
  accent?: string;
  children: ReactNode;
}

export function Card({
  title,
  eyebrow,
  accent = "var(--color-primary)",
  children,
}: CardProps) {
  return (
    <div
      style={{
        margin: "1.75rem 0",
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
          background: accent,
        }}
      />
      <div style={{ padding: "28px 32px" }}>
        {eyebrow && (
          <div
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--color-foreground)",
              opacity: 0.55,
              marginBottom: "8px",
            }}
          >
            {eyebrow}
          </div>
        )}
        <h3
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "1.125rem",
            fontWeight: 700,
            letterSpacing: "-0.01em",
            margin: 0,
            marginBottom: "14px",
            color: "var(--color-foreground)",
          }}
        >
          {title}
        </h3>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
