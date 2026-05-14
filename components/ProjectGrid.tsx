import type { ProjectMeta } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Button from "@/components/Button";

export default function ProjectGrid({
  projects,
  showViewAll = false,
  heading = "Featured Work",
  description = "A selection of projects across AI, data, and operations",
  headingLevel = "h2",
}: {
  projects: ProjectMeta[];
  showViewAll?: boolean;
  heading?: string;
  description?: string;
  headingLevel?: "h1" | "h2";
}) {
  const [flagship, ...rest] = projects;
  const HeadingTag = headingLevel;

  return (
    <section
      id="projects"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="px-6 lg:px-12">

        {/* ── Section heading ─────────────────────────────────────────────── */}
        <div style={{ marginBottom: "48px" }}>
          <HeadingTag
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: headingLevel === "h1" ? "2.75rem" : "2.25rem",
              fontWeight: headingLevel === "h1" ? 800 : 700,
              color: "var(--color-foreground)",
              margin: "0 0 12px 0",
              lineHeight: 1.1,
              letterSpacing: headingLevel === "h1" ? "-0.02em" : "normal",
            }}
          >
            {heading}
          </HeadingTag>
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
            {description}
          </p>
        </div>

        {/* ── Projects grid: flagship spans 2 cols, rest fill ────────────── */}
        {projects.length > 0 && (
          <div className="project-grid">
            {flagship && <ProjectCard project={flagship} variant="flagship" />}
            {rest.map((p) => (
              <ProjectCard project={p} key={p.slug} />
            ))}
          </div>
        )}

        {/* ── View all link ────────────────────────────────────────────────── */}
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
