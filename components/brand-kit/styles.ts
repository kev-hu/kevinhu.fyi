import type { CSSProperties } from "react";

export const sectionStyle: CSSProperties = {
  paddingTop: "56px",
  paddingBottom: "56px",
  borderBottom: "1px solid var(--color-muted)",
};

export const sectionTitleStyle: CSSProperties = {
  fontFamily: "var(--font-display), sans-serif",
  fontSize: "1.5rem",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: "var(--color-foreground)",
  margin: 0,
  marginBottom: "8px",
};

export const sectionDescStyle: CSSProperties = {
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.9375rem",
  lineHeight: 1.6,
  color: "var(--color-foreground)",
  opacity: 0.6,
  margin: 0,
  marginBottom: "32px",
  maxWidth: "640px",
};

export const tokenLabelStyle: CSSProperties = {
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.8125rem",
  color: "var(--color-foreground)",
  opacity: 0.5,
  margin: 0,
};

export const tokenValueStyle: CSSProperties = {
  fontFamily: "var(--font-body), sans-serif",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "var(--color-foreground)",
  margin: 0,
};

export const codeStyle: CSSProperties = {
  fontFamily: "monospace",
  fontSize: "0.8125rem",
  color: "var(--color-primary)",
  background: "rgba(28,176,246,0.08)",
  padding: "2px 6px",
  borderRadius: "4px",
};
