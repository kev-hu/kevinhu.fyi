import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";

type ProjectNavigationProps = {
  prevProject?: ProjectMeta;
  nextProject?: ProjectMeta;
};

export function ProjectNavigation({
  prevProject,
  nextProject,
}: ProjectNavigationProps) {
  if (!prevProject && !nextProject) return null;

  return (
    <div style={{ marginTop: "64px" }}>
      {/* Separator */}
      <div
        style={{
          height: "2px",
          backgroundColor: "var(--color-muted)",
          marginBottom: "32px",
        }}
      />

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        {/* Previous */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {prevProject && (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="project-nav-card"
              style={{
                display: "block",
                textDecoration: "none",
                backgroundColor: "var(--color-card)",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-container)",
                padding: "16px 20px",
                boxShadow: "var(--shadow-brutal-sm)",
                transition: "transform 200ms ease, box-shadow 200ms ease",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--color-foreground)",
                  opacity: 0.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                ← Previous
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--color-foreground)",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {prevProject.title}
              </div>
            </Link>
          )}
        </div>

        {/* Next */}
        <div style={{ flex: 1, minWidth: 0, textAlign: "right" }}>
          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="project-nav-card"
              style={{
                display: "block",
                textDecoration: "none",
                backgroundColor: "var(--color-card)",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-container)",
                padding: "16px 20px",
                boxShadow: "var(--shadow-brutal-sm)",
                transition: "transform 200ms ease, box-shadow 200ms ease",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--color-foreground)",
                  opacity: 0.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
                Next →
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--color-foreground)",
                  lineHeight: 1.3,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {nextProject.title}
              </div>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
