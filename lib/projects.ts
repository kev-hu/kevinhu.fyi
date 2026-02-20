import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectMeta = {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  featured: boolean;
  order: number;
  tags: string[];
  thumbnail: string;
  metrics: { label: string; value: string }[];
};

export type Project = ProjectMeta & {
  content: string; // raw MDX content string
};

const projectsDir = path.join(process.cwd(), "content", "projects");

export function getProjectSlugs(): string[] {
  const files = fs.readdirSync(projectsDir);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjects(): ProjectMeta[] {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => {
    const filePath = path.join(projectsDir, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return data as ProjectMeta;
  });
  return projects.sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project {
  const filePath = path.join(projectsDir, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    ...(data as ProjectMeta),
    content,
  };
}
