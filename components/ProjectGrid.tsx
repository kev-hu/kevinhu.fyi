import type { ProjectMeta } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProjectGrid({
  projects,
  showViewAll = false,
}: {
  projects: ProjectMeta[];
  showViewAll?: boolean;
}) {
  return (
    <section
      id="projects"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      {/* ── Centered content wrapper ─────────────────────────────────────── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="px-6 lg:px-12">

        {/* ── Section heading ──────────────────────────────────────────────── */}
        <div style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "2.25rem",
              fontWeight: 700,
              color: "var(--color-foreground)",
              margin: "0 0 12px 0",
              lineHeight: 1.15,
            }}
          >
            Featured Work
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "1rem",
              color: "var(--color-foreground)",
              opacity: 0.6,
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            A selection of projects across AI, data, and operations
          </p>
        </div>

        {/* ── Project grid ─────────────────────────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 520px), 1fr))",
            gap: "24px",
          }}
          className="project-grid"
        >
          {projects.map((p) => (
            <ProjectCard project={p} key={p.slug} />
          ))}
        </div>

        {/* ── View all link ─────────────────────────────────────────────────── */}
        {showViewAll && (
          <div
            style={{
              marginTop: "48px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button variant="secondary" href="/projects">
              View all projects →
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
