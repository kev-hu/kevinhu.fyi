import { getProjectBySlug, getProjectSlugs, getRelatedProjects } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { extractHeadings } from "@/lib/extractHeadings";
import { TableOfContents } from "@/components/TableOfContents";
import { ProjectHeader } from "@/components/ProjectHeader";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Drilldown } from "@/components/Drilldown";
import { EvalCohortPanel } from "@/components/EvalCohortPanel";
import { notFound } from "next/navigation";

const mdxComponents = { Drilldown, EvalCohortPanel };

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
  const related = getRelatedProjects(slug, 2);

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        paddingTop: "48px",
        paddingBottom: "48px",
      }}
      className="px-6 lg:px-12"
    >
      <div style={{ display: "flex", gap: "48px" }}>
        {/* Left TOC — sticky, desktop only */}
        <aside
          className="desktop-only"
          style={{ width: "220px", flexShrink: 0 }}
        >
          <div style={{ position: "sticky", top: "89px" }}>
            <TableOfContents headings={headings} />
          </div>
        </aside>

        {/* Main article */}
        <article style={{ flex: 1, minWidth: 0, maxWidth: "800px" }}>
          <ProjectHeader project={project} />
          <div className="prose-content" style={{ marginTop: "72px" }}>
            <MDXRemote
              source={project.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </div>
          <RelatedProjects projects={related} />
        </article>
      </div>
    </div>
  );
}
