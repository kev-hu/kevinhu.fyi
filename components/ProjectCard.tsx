import Link from "next/link";
import Image from "next/image";
import type { ProjectMeta } from "@/lib/projects";

type Variant = "default" | "flagship";

export default function ProjectCard({
  project,
  variant = "default",
}: {
  project: ProjectMeta;
  variant?: Variant;
}) {
  const { slug, title, subtitle, thumbnail, clientLogo, bannerBg } = project;
  const isFlagship = variant === "flagship";
  const hasBannerBg = Boolean(bannerBg);

  return (
    <Link
      href={`/projects/${slug}`}
      scroll={true}
      className={`project-card${isFlagship ? " project-card-flagship" : ""}`}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "var(--color-card)",
        border: "2px solid var(--color-foreground)",
        borderRadius: "var(--radius-card)",
        boxShadow: "var(--shadow-brutal)",
        overflow: "hidden",
        transition: "transform 200ms ease, box-shadow 200ms ease",
      }}
    >
      {/* ── Mini banner (thumbnail placeholder) ─────────────────────────── */}
      <div
        className="project-banner"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: isFlagship ? "6 / 1" : "21 / 7",
          backgroundColor: bannerBg ?? "var(--color-muted)",
          borderBottom: "2px solid var(--color-foreground)",
          flexShrink: 0,
        }}
      >
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={`${title} preview`}
            fill
            style={{
              objectFit: hasBannerBg ? "contain" : "cover",
              padding: hasBannerBg ? "16px" : 0,
            }}
          />
        )}

        {clientLogo && !hasBannerBg && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={clientLogo}
            alt=""
            width={44}
            height={44}
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              width: 44,
              height: 44,
              borderRadius: "50%",
              objectFit: "cover",
              backgroundColor: "var(--color-card)",
              border: "2px solid var(--color-foreground)",
              boxShadow: "var(--shadow-brutal-sm)",
            }}
          />
        )}
      </div>

      {/* ── Card body ──────────────────────────────────────────────────── */}
      <div
        style={{
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          flexGrow: 1,
        }}
      >
        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--color-foreground)",
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          {title}
        </h3>

        {/* Subtitle (brand-kit secondary text: 0.875rem, opacity 0.6) */}
        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.875rem",
            color: "var(--color-foreground)",
            opacity: 0.6,
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>

      </div>
    </Link>
  );
}
