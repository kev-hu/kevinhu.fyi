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
  const { slug, title, subtitle, thumbnail, metrics, tags, clientLogo, bannerBg } = project;
  const isFlagship = variant === "flagship";
  const hasBannerBg = Boolean(bannerBg);

  const chips =
    metrics && metrics.length > 0
      ? metrics.map((m) => `${m.value} ${m.label}`)
      : tags.slice(0, 3);

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
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`${title} preview`}
            fill
            style={{
              objectFit: hasBannerBg ? "contain" : "cover",
              padding: hasBannerBg ? "16px" : 0,
            }}
          />
        ) : (
          <svg
            viewBox="0 0 800 280"
            preserveAspectRatio="xMidYMid slice"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={`bg-${slug}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#E9D5FF" />
                <stop offset="1" stopColor="#A855F7" />
              </linearGradient>
              <filter id={`shadow-${slug}`} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#1a1033" floodOpacity="0.18" />
              </filter>
            </defs>
            <rect width="800" height="280" fill={`url(#bg-${slug})`} />
            <g filter={`url(#shadow-${slug})`}>
              <rect x="80" y="90" width="320" height="56" rx="28" fill="rgba(255,255,255,0.65)" />
              <rect x="340" y="160" width="240" height="48" rx="24" fill="rgba(255,255,255,0.55)" />
              <circle cx="660" cy="110" r="38" fill="rgba(255,255,255,0.85)" />
            </g>
          </svg>
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

        {/* Proof chips */}
        {chips.length > 0 && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
              marginTop: "2px",
            }}
          >
            {chips.map((chip) => (
              <span
                key={chip}
                style={{
                  backgroundColor: "var(--color-muted)",
                  color: "var(--color-foreground)",
                  borderRadius: "var(--radius-button)",
                  padding: "4px 10px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  lineHeight: 1.4,
                }}
              >
                {chip}
              </span>
            ))}
          </div>
        )}

      </div>
    </Link>
  );
}
