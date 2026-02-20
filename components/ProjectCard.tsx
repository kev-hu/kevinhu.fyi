import Link from "next/link";
import Image from "next/image";
import type { ProjectMeta } from "@/lib/projects";

// ─── Traffic-light dot colors (macOS style) ───────────────────────────────────
const TRAFFIC_LIGHTS = [
  { color: "#FF5F57", label: "close" },
  { color: "#FFBD2E", label: "minimize" },
  { color: "#28C840", label: "maximize" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  const { slug, title, subtitle, thumbnail, metrics, tags } = project;

  // Show at most 2 metrics and up to all tags
  const visibleMetrics = metrics.slice(0, 2);

  return (
    <Link
      href={`/projects/${slug}`}
      className="project-card"
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "var(--color-card)",
        border: "2px solid var(--color-foreground)",
        borderRadius: "var(--radius-card)",
        boxShadow: "var(--shadow-brutal)",
        overflow: "hidden",
        transition: "transform 200ms ease, box-shadow 200ms ease",
      }}
    >
      {/* ── OS-window title bar ─────────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: "var(--color-foreground)",
          height: "36px",
          display: "flex",
          alignItems: "center",
          paddingLeft: "12px",
          paddingRight: "16px",
          gap: "0",
          flexShrink: 0,
        }}
      >
        {/* Traffic lights */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {TRAFFIC_LIGHTS.map((dot) => (
            <span
              key={dot.label}
              aria-label={dot.label}
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: dot.color,
                flexShrink: 0,
              }}
            />
          ))}
        </div>

        {/* Project title in title bar */}
        <span
          style={{
            marginLeft: "auto",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: "0.75rem",
            color: "rgba(255, 255, 255, 0.75)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "60%",
            userSelect: "none",
          }}
        >
          {title}
        </span>
      </div>

      {/* ── Thumbnail area ──────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          backgroundColor: "var(--color-muted)",
        }}
      >
        {/* TODO: replace with actual project thumbnails */}
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`${title} thumbnail`}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          /* Placeholder when no thumbnail is provided */
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--color-muted)",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.875rem",
              color: "var(--color-foreground)",
              opacity: 0.4,
              userSelect: "none",
            }}
          >
            [ no thumbnail ]
          </div>
        )}
      </div>

      {/* ── Card body ───────────────────────────────────────────────────── */}
      <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--color-foreground)",
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>

        {/* Subtitle — max 2 lines */}
        <p
          className="line-clamp-2"
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.875rem",
            color: "var(--color-foreground)",
            opacity: 0.7,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </p>

        {/* Metrics row */}
        {visibleMetrics.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {visibleMetrics.map((metric) => (
              <span
                key={metric.label}
                style={{
                  backgroundColor: "var(--color-secondary)",
                  color: "#ffffff",
                  borderRadius: "var(--radius-button)",
                  padding: "4px 10px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  whiteSpace: "nowrap",
                }}
              >
                <strong style={{ fontWeight: 700 }}>{metric.value}</strong>
                <span style={{ fontWeight: 400, opacity: 0.85 }}>{metric.label}</span>
              </span>
            ))}
          </div>
        )}

        {/* Tags row */}
        {tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
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

      </div>
    </Link>
  );
}
