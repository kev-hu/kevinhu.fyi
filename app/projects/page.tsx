import { redirect } from "next/navigation";
import { getProjects } from "@/lib/projects";

export default function ProjectsPage() {
  const projects = getProjects();
  const first = projects[0];
  redirect(`/projects/${first.slug}`);
}
