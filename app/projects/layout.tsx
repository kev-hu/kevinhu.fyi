import { getProjects } from "@/lib/projects";
import { ProjectSidebar } from "@/components/ProjectSidebar";

export default async function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = getProjects();

  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 65px)" }}>
      <aside
        className="desktop-only"
        style={{
          width: "256px",
          flexShrink: 0,
          borderRight: "2px solid var(--color-muted)",
        }}
      >
        <div
          style={{
            position: "sticky",
            top: "65px",
            height: "calc(100vh - 65px)",
            overflowY: "auto",
          }}
        >
          <ProjectSidebar projects={projects} />
        </div>
      </aside>
      <div style={{ flex: 1, minWidth: 0 }}>
        {children}
      </div>
    </div>
  );
}
