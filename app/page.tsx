import { getListedProjects } from "@/lib/projects";
import Hero from "@/components/Hero";
import ProjectsView from "@/components/ProjectsView";
import ContactSection from "@/components/ContactSection";

export default async function Home() {
  const projects = getListedProjects();

  return (
    <main>
      <Hero />
      <ProjectsView projects={projects} />
      <ContactSection />
    </main>
  );
}
