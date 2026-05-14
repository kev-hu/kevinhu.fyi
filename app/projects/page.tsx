import { getListedProjects } from "@/lib/projects";
import ProjectsView from "@/components/ProjectsView";

export const metadata = {
  title: "Projects | Kevin Hu",
};

export default function ProjectsPage() {
  const projects = getListedProjects();

  return (
    <main>
      <ProjectsView projects={projects} />
    </main>
  );
}
