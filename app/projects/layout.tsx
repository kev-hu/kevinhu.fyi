import { getProjects } from "@/lib/projects";
import { ProjectSidebar } from "@/components/ProjectSidebar";

export default async function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = getProjects();

  return (
    <div className="projects-layout">
      <aside className="projects-sidebar">
        <div className="projects-sidebar-sticky">
          <ProjectSidebar projects={projects} />
        </div>
      </aside>
      <div className="projects-content-area">
        {children}
      </div>
    </div>
  );
}
