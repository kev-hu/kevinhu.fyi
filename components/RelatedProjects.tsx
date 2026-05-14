import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";

export function RelatedProjects({ projects }: { projects: ProjectMeta[] }) {
  if (projects.length === 0) return null;

  return (
    <section
      style={{
        marginTop: "64px",
        paddingTop: "32px",
        borderTop: "2px solid var(--color-muted)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.75rem",
          fontWeight: 600,
          color: "var(--color-foreground)",
          opacity: 0.6,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "16px",
        }}
      >
        Related
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 16px",
              backgroundColor: "var(--color-card)",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-container)",
              boxShadow: "var(--shadow-brutal-sm)",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {project.clientLogo && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.clientLogo}
                alt=""
                width={40}
                height={40}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  backgroundColor: "var(--color-background)",
                  flexShrink: 0,
                }}
              />
            )}
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "1.0625rem",
                  fontWeight: 700,
                  color: "var(--color-foreground)",
                  lineHeight: 1.25,
                  marginBottom: "2px",
                }}
              >
                {project.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.8125rem",
                  color: "var(--color-foreground)",
                  opacity: 0.65,
                  lineHeight: 1.4,
                }}
              >
                {project.subtitle}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
