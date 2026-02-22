import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { extractHeadings } from "@/lib/extractHeadings";
import { TableOfContents } from "@/components/TableOfContents";
import { ProjectHeader } from "@/components/ProjectHeader";
import ProjectCTA from "@/components/ProjectCTA";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    return {
      title: project.title,
      description: project.description,
    };
  } catch {
    return { title: "Project | Kevin Hu" };
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let project;
  try {
    project = getProjectBySlug(slug);
  } catch {
    notFound();
  }

  const headings = extractHeadings(project.content);

  return (
    <div style={{ display: "flex", gap: "48px", padding: "48px 32px" }}>
      {/* Main article */}
      <article style={{ flex: 1, minWidth: 0 }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <ProjectHeader project={project} />
          <div className="prose-content" style={{ marginTop: "40px" }}>
            <MDXRemote
              source={project.content}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </div>
          <ProjectCTA />
        </div>
      </article>

      {/* Right TOC — desktop only */}
      <aside
        className="desktop-only"
        style={{ width: "240px", flexShrink: 0 }}
      >
        <div style={{ position: "sticky", top: "89px" }}>
          <TableOfContents headings={headings} />
        </div>
      </aside>
    </div>
  );
}
