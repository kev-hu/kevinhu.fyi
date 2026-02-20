"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ProjectMeta } from "@/lib/projects";

export function ProjectSidebar({ projects }: { projects: ProjectMeta[] }) {
  const pathname = usePathname();

  return (
    <nav style={{ padding: "24px 0" }}>
      <div
        style={{
          padding: "0 20px 16px",
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--color-foreground)",
          opacity: 0.45,
        }}
      >
        Projects
      </div>
      {projects.map((project) => {
        const isActive = pathname === `/projects/${project.slug}`;
        return (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="sidebar-item"
            style={{
              display: "block",
              padding: "8px 20px",
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.875rem",
              fontWeight: isActive ? 700 : 500,
              color: isActive ? "var(--color-primary)" : "var(--color-foreground)",
              textDecoration: "none",
              borderLeft: isActive
                ? "3px solid var(--color-primary)"
                : "3px solid transparent",
              backgroundColor: isActive ? "rgba(28, 176, 246, 0.06)" : "transparent",
              transition: "color 150ms, background-color 150ms, border-color 150ms",
              lineHeight: 1.4,
            }}
          >
            {project.title}
          </Link>
        );
      })}
    </nav>
  );
}
