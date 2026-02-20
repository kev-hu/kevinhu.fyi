import { getProjectBySlug, getProjectSlugs, getProjects } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { extractHeadings } from "@/lib/extractHeadings";
import { TableOfContents } from "@/components/TableOfContents";
import { ProjectHeader } from "@/components/ProjectHeader";
import { ProjectNavigation } from "@/components/ProjectNavigation";
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
      title: `${project.title} | Kevin Hu`,
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

  const allProjects = getProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : undefined;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : undefined;

  const headings = extractHeadings(project.content);

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "48px 24px",
      }}
      className="project-page-container"
    >
      <ProjectHeader project={project} />

      <div className="project-body">
        {/* Sidebar TOC — desktop only */}
        <aside className="project-toc-sidebar">
          <div className="project-toc-sticky">
            <TableOfContents headings={headings} />
          </div>
        </aside>

        {/* Main content */}
        <div className="project-main">
          {/* Mobile TOC */}
          <div className="project-toc-mobile">
            <TableOfContents headings={headings} isMobile />
          </div>

          {/* MDX content */}
          <article className="prose-content">
            <MDXRemote
              source={project.content}
              options={{
                mdxOptions: {
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </article>
        </div>
      </div>

      <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
    </div>
  );
}
