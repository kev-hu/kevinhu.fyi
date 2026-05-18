import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectStatus = "active" | "unlisted" | "inactive";

export type ProjectMeta = {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  order: number;
  tags: string[];
  thumbnail: string;
  metrics: { label: string; value: string }[];
  status: ProjectStatus;
  role?: string;
  timeline?: string;
  team?: string;
  hideBanner?: boolean;
  clientLogo?: string;
  bannerBg?: string;
};

export type Project = ProjectMeta & {
  content: string; // raw MDX content string
};

const projectsDir = path.join(process.cwd(), "content", "projects");

function readProjectFile(slug: string): { data: ProjectMeta; content: string } {
  const filePath = path.join(projectsDir, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const meta = data as ProjectMeta;
  if (!meta.status) meta.status = "active";
  return { data: meta, content };
}

function allSlugs(): string[] {
  return fs
    .readdirSync(projectsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

// Slugs that should be statically built. Excludes `inactive` so those return 404.
export function getProjectSlugs(): string[] {
  return allSlugs().filter((slug) => {
    const { data } = readProjectFile(slug);
    return data.status !== "inactive";
  });
}

// All buildable projects (active + unlisted). Used by /projects/[slug] generation.
export function getProjects(): ProjectMeta[] {
  return getProjectSlugs()
    .map((slug) => readProjectFile(slug).data)
    .sort((a, b) => a.order - b.order);
}

// Only projects that should appear in nav surfaces (homepage grid, sidebar, redirect).
export function getListedProjects(): ProjectMeta[] {
  return getProjects().filter((p) => p.status === "active");
}

export function getProjectBySlug(slug: string): Project {
  const { data, content } = readProjectFile(slug);
  if (data.status === "inactive") {
    throw new Error(`Project "${slug}" is inactive`);
  }
  return { ...data, content };
}

// Pick the projects most similar to `slug` by tag overlap, padding with
// order-adjacent listed projects so the result always reaches `limit`.
export function getRelatedProjects(slug: string, limit = 2): ProjectMeta[] {
  const all = getListedProjects();
  const current = all.find((p) => p.slug === slug);
  if (!current) return [];

  const others = all.filter((p) => p.slug !== slug);
  const currentTags = new Set(current.tags);

  const ranked = others
    .map((p) => ({
      project: p,
      overlap: p.tags.filter((t) => currentTags.has(t)).length,
      distance: Math.abs(p.order - current.order),
    }))
    .sort(
      (a, b) =>
        b.overlap - a.overlap ||
        a.distance - b.distance ||
        a.project.order - b.project.order,
    );

  return ranked.slice(0, limit).map((entry) => entry.project);
}
