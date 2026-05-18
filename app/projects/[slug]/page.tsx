import { getProjectBySlug, getProjectSlugs, getRelatedProjects, getListedProjects } from "@/lib/projects";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { extractHeadings } from "@/lib/extractHeadings";
import { TableOfContents } from "@/components/TableOfContents";
import { ProjectHeader } from "@/components/ProjectHeader";
import { RelatedProjects } from "@/components/RelatedProjects";
import { Drilldown } from "@/components/Drilldown";
import { Card } from "@/components/Card";
import { EvalCohortPanel } from "@/components/EvalCohortPanel";
import { LicensingDecision } from "@/components/LicensingDecision";
import { PipelineBranches } from "@/components/PipelineBranches";
import { PartnerDashboard } from "@/components/PartnerDashboard";
import { StackIcon } from "@/components/StackIcon";
import { ImageWithLink } from "@/components/ImageWithLink";
import { notFound } from "next/navigation";

function MdxImg({ src, alt }: { src?: string; alt?: string }) {
  if (!src) return null;
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "block", cursor: "zoom-in" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt ?? ""} style={{ maxWidth: "100%", height: "auto" }} />
    </a>
  );
}

function MdxLink({ href, children }: { href?: string; children?: React.ReactNode }) {
  if (!href) return <>{children}</>;
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{
        color: "var(--color-primary)",
        fontWeight: 600,
        textDecoration: "underline",
        textDecorationThickness: "2px",
        textUnderlineOffset: "3px",
      }}
    >
      {children}
    </a>
  );
}

const mdxComponents = { Drilldown, Card, EvalCohortPanel, LicensingDecision, PipelineBranches, PartnerDashboard, StackIcon, ImageWithLink, img: MdxImg, a: MdxLink };

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
  const switcherProjects = getListedProjects().map((p) => ({
    slug: p.slug,
    title: p.title,
  }));

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
            <TableOfContents
              headings={headings}
              projects={switcherProjects}
              currentSlug={slug}
            />
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
                  remarkPlugins: [remarkGfm],
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
