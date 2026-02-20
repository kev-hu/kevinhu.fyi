import Link from "next/link";
import type { Project } from "@/lib/projects";

export function ProjectHeader({ project }: { project: Project }) {
  const { title, subtitle, tags, metrics } = project;

  return (
    <header>
      {/* Back link */}
      <Link
        href="/#projects"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.875rem",
          color: "var(--color-primary)",
          textDecoration: "none",
          marginBottom: "24px",
        }}
        className="back-link"
      >
        ← Back to all projects
      </Link>

      {/* Title */}
      <h1
        style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 800,
          color: "var(--color-foreground)",
          lineHeight: 1.1,
          margin: "0 0 12px 0",
        }}
      >
        {title}
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "1.25rem",
          color: "var(--color-foreground)",
          opacity: 0.65,
          margin: "0 0 20px 0",
          lineHeight: 1.5,
        }}
      >
        {subtitle}
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "28px",
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: "var(--color-muted)",
                color: "var(--color-foreground)",
                borderRadius: "var(--radius-button)",
                padding: "4px 10px",
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Metrics bar */}
      {metrics.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0",
            padding: "20px 24px",
            backgroundColor: "var(--color-card)",
            border: "2px solid var(--color-foreground)",
            borderRadius: "var(--radius-card)",
            boxShadow: "var(--shadow-brutal-sm)",
          }}
        >
          {metrics.map((metric, idx) => (
            <div
              key={metric.label}
              style={{
                display: "flex",
                alignItems: "center",
                flex: "1 1 auto",
              }}
            >
              <div style={{ textAlign: "center", padding: "0 24px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--color-secondary)",
                    lineHeight: 1.1,
                  }}
                >
                  {metric.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--color-foreground)",
                    opacity: 0.6,
                    marginTop: "4px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 500,
                  }}
                >
                  {metric.label}
                </div>
              </div>

              {/* Vertical divider (not after last item) */}
              {idx < metrics.length - 1 && (
                <div
                  style={{
                    width: "1px",
                    height: "40px",
                    backgroundColor: "var(--color-muted)",
                    flexShrink: 0,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
