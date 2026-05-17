import { getListedProjects } from "@/lib/projects";
import Hero from "@/components/Hero";
import CredibilityBand from "@/components/CredibilityBand";
import ProjectsView from "@/components/ProjectsView";
import ContactSection from "@/components/ContactSection";

export default async function Home() {
  const projects = getListedProjects();

  return (
    <main>
      <Hero />
      <CredibilityBand />
      <ProjectsView projects={projects} />
      <ContactSection />
    </main>
  );
}
