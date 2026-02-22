import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectHeader({ project }: { project: Project }) {
  const { title, subtitle, tags, metrics, thumbnail } = project;

  return (
    <header>
      {/* Banner image */}
      {thumbnail && (
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3 / 1",
            borderRadius: "var(--radius-card)",
            border: "2px solid var(--color-foreground)",
            boxShadow: "var(--shadow-brutal)",
            overflow: "hidden",
            marginBottom: "32px",
          }}
        >
          <Image
            src={thumbnail}
            alt={`${title} banner`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      )}

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

      {/* Metrics */}
      {metrics.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              style={{
                flex: "1 1 120px",
                minWidth: "100px",
                padding: "16px 20px",
                backgroundColor: "var(--color-card)",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-container)",
                boxShadow: "var(--shadow-brutal-sm)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "1.75rem",
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
                  fontSize: "0.6875rem",
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
          ))}
        </div>
      )}
    </header>
  );
}
