"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ProjectMeta } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

type View = "grid" | "table";

const STORAGE_KEY = "projects-view";
const VIEW_EVENT = "projects-view-change";

const subscribeToView = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener(VIEW_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(VIEW_EVENT, callback);
  };
};

const getViewSnapshot = (): View => {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "table" ? "table" : "grid";
};

const getViewServerSnapshot = (): View => "grid";

// Detect when client-side hydration is complete so we can read localStorage
// without a flash of the server-rendered default view.
const subscribeNoop = () => () => {};
const getHydratedSnapshot = () => true;
const getHydratedServerSnapshot = () => false;

export default function ProjectsView({
  projects,
  heading = "Projects",
  description = "AI, data, and platforms — consulting, startups, and enterprise.",
}: {
  projects: ProjectMeta[];
  heading?: string;
  description?: string;
}) {
  const view = useSyncExternalStore(
    subscribeToView,
    getViewSnapshot,
    getViewServerSnapshot,
  );

  const hydrated = useSyncExternalStore(
    subscribeNoop,
    getHydratedSnapshot,
    getHydratedServerSnapshot,
  );

  const updateView = (next: View) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event(VIEW_EVENT));
  };

  const [flagship, ...rest] = projects;

  return (
    <section
      id="projects"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="px-6 lg:px-12">

        {/* ── Heading + toggle row ──────────────────────────────────────── */}
        <div
          style={{
            marginBottom: "48px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div style={{ flex: "1 1 360px", minWidth: 0 }}>
            <h1
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "2.75rem",
                fontWeight: 800,
                color: "var(--color-foreground)",
                margin: "0 0 12px 0",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {heading}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "1rem",
                color: "var(--color-foreground)",
                opacity: 0.6,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              {description}
            </p>
          </div>

          <ViewToggle view={view} onChange={updateView} />
        </div>

        {/* ── Body ──────────────────────────────────────────────────────── */}
        {projects.length > 0 && (
          !hydrated ? (
            <ProjectsSkeleton count={Math.min(projects.length, 6)} />
          ) : view === "grid" ? (
            <div className="project-grid">
              {projects.map((p) => (
                <ProjectCard project={p} key={p.slug} />
              ))}
            </div>
          ) : (
            <ProjectTable projects={projects} />
          )
        )}
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// View toggle (segmented control)
// ───────────────────────────────────────────────────────────────────────────

function ViewToggle({
  view,
  onChange,
}: {
  view: View;
  onChange: (next: View) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Toggle project view"
      style={{
        display: "inline-flex",
        backgroundColor: "var(--color-card)",
        border: "2px solid var(--color-foreground)",
        borderRadius: "var(--radius-button)",
        boxShadow: "var(--shadow-brutal-sm)",
        padding: "3px",
        gap: "3px",
        flexShrink: 0,
      }}
    >
      <ToggleButton
        active={view === "grid"}
        onClick={() => onChange("grid")}
        label="Grid"
        icon={<GridIcon />}
      />
      <ToggleButton
        active={view === "table"}
        onClick={() => onChange("table")}
        label="Table"
        icon={<TableIcon />}
      />
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "8px 14px",
        fontFamily: "var(--font-display), sans-serif",
        fontSize: "0.8125rem",
        fontWeight: 700,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        lineHeight: 1,
        cursor: "pointer",
        border: "none",
        borderRadius: "4px",
        backgroundColor: active ? "var(--color-foreground)" : "transparent",
        color: active ? "var(--color-card)" : "var(--color-foreground)",
        transition: "background-color 120ms ease, color 120ms ease",
      }}
    >
      {icon}
      {label}
    </button>
  );
}

function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="5.5" height="5.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9" y="1.5" width="5.5" height="5.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="1.5" y="9" width="5.5" height="5.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9" y="9" width="5.5" height="5.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Skeleton — shown during the brief window between hydration and reading
// localStorage, so users with a saved "table" preference don't see the grid
// flash first.
// ───────────────────────────────────────────────────────────────────────────

function ProjectsSkeleton({ count }: { count: number }) {
  return (
    <div
      aria-hidden="true"
      style={{ display: "flex", flexDirection: "column", gap: "12px" }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="projects-skeleton-row"
          style={{
            height: "72px",
            backgroundColor: "var(--color-muted)",
            border: "2px solid var(--color-foreground)",
            borderRadius: "var(--radius-card)",
            boxShadow: "var(--shadow-brutal-sm)",
          }}
        />
      ))}
    </div>
  );
}

function TableIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="13" height="11" stroke="currentColor" strokeWidth="1.6" />
      <line x1="1.5" y1="6.5" x2="14.5" y2="6.5" stroke="currentColor" strokeWidth="1.6" />
      <line x1="1.5" y1="10" x2="14.5" y2="10" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Project table
// ───────────────────────────────────────────────────────────────────────────

function ProjectTable({ projects }: { projects: ProjectMeta[] }) {
  return (
    <div
      style={{
        border: "2px solid var(--color-foreground)",
        borderRadius: "var(--radius-card)",
        boxShadow: "var(--shadow-brutal)",
        backgroundColor: "var(--color-card)",
        overflow: "hidden",
      }}
    >
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.875rem",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "var(--color-muted)",
                borderBottom: "2px solid var(--color-foreground)",
              }}
            >
              <Th>Project</Th>
              <Th>Overview</Th>
              <Th>Tags</Th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, i) => (
              <ProjectRow project={p} isLast={i === projects.length - 1} key={p.slug} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "12px 16px",
        fontFamily: "var(--font-display), sans-serif",
        fontSize: "0.75rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--color-foreground)",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </th>
  );
}

function ProjectRow({
  project,
  isLast,
}: {
  project: ProjectMeta;
  isLast: boolean;
}) {
  const { slug, title, subtitle, tags, clientLogo } = project;
  const router = useRouter();
  const href = `/projects/${slug}`;

  // Whole row is clickable, but defer to the real <a> for modified clicks
  // (cmd/ctrl/shift, middle-click) and for clicks that land on a nested link.
  const handleRowClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if ((e.target as HTMLElement).closest("a")) return;
    router.push(href);
  };

  const cellStyle: React.CSSProperties = {
    padding: "16px",
    borderBottom: isLast ? "none" : "1px solid var(--color-muted)",
    verticalAlign: "top",
  };

  return (
    <tr className="project-row" onClick={handleRowClick} style={{ cursor: "pointer" }}>
      <td style={{ ...cellStyle, minWidth: "240px" }}>
        <Link
          href={`/projects/${slug}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          {clientLogo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={clientLogo}
              alt=""
              width={24}
              height={24}
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                objectFit: "cover",
                backgroundColor: "var(--color-background)",
                border: "1px solid var(--color-muted)",
                flexShrink: 0,
              }}
            />
          ) : (
            <span
              aria-hidden="true"
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "var(--color-muted)",
                flexShrink: 0,
              }}
            />
          )}
          <span
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--color-foreground)",
              lineHeight: 1.25,
            }}
          >
            {title}
          </span>
        </Link>
      </td>

      <td style={{ ...cellStyle, minWidth: "280px", maxWidth: "420px" }}>
        <span
          style={{
            color: "var(--color-foreground)",
            opacity: 0.75,
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </span>
      </td>

      <td style={{ ...cellStyle, minWidth: "240px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                backgroundColor: "var(--color-muted)",
                color: "var(--color-foreground)",
                borderRadius: "var(--radius-button)",
                padding: "3px 8px",
                fontSize: "0.6875rem",
                fontWeight: 500,
                whiteSpace: "nowrap",
                lineHeight: 1.3,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
    </tr>
  );
}
