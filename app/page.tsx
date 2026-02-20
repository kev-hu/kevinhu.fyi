import { getProjects } from "@/lib/projects";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import ProjectGrid from "@/components/ProjectGrid";
import ContactSection from "@/components/ContactSection";

export default async function Home() {
  const projects = await getProjects();
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      <Hero />
      <Skills />
      <ProjectGrid projects={featured} showViewAll={projects.length > featured.length} />
      <ContactSection />
    </main>
  );
}
