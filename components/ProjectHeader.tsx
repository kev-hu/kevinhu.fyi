import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectHeader({ project }: { project: Project }) {
  const { title, subtitle, tags, metrics, thumbnail, clientLogo, overview, role, timeline, team, hideBanner } = project;
  const showCreditsRow = Boolean(role || timeline || team);

  return (
    <header>
      {/* Banner image */}
      {!hideBanner && thumbnail && (
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "3 / 1",
            borderRadius: "var(--radius-card)",
            border: "2px solid var(--color-foreground)",
            boxShadow: "var(--shadow-brutal)",
            overflow: "hidden",
            marginBottom: "32px",
          }}
        >
          <Image
            src={thumbnail}
            alt={`${title} banner`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      )}

      {/* Client logo — circle avatar above the title */}
      {clientLogo && (
        <div style={{ marginBottom: "20px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={clientLogo}
            alt={`${title} client logo`}
            width={64}
            height={64}
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              objectFit: "cover",
              backgroundColor: "var(--color-card)",
              display: "block",
            }}
          />
        </div>
      )}

      {/* Title */}
      <h1
        style={{
          fontFamily: "var(--font-display), sans-serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 800,
          color: "var(--color-foreground)",
          lineHeight: 1.1,
          margin: "0 0 24px 0",
        }}
      >
        {title}
      </h1>

      {/* Subtitle + overview hidden on the detail page — both still live in
          frontmatter for the homepage card and SEO metadata respectively. */}

      {/* Credits row — Role / Timeline / Team */}
      {showCreditsRow && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "24px",
            marginBottom: "28px",
            paddingTop: "20px",
            borderTop: "1px solid var(--color-muted)",
          }}
        >
          {role && <CreditsCell label="Role" value={role} />}
          {timeline && <CreditsCell label="Timeline" value={timeline} />}
          {team && <CreditsCell label="Team" value={team} />}
        </div>
      )}

      {/* Impact — one-line callout: pill eyebrow + inline stats, baseline aligned */}
      {metrics.length > 0 && (
        <div
          style={{
            padding: "14px 22px",
            backgroundColor: "rgba(34, 197, 94, 0.08)",
            border: "2px solid var(--color-foreground)",
            borderRadius: "var(--radius-container)",
            boxShadow: "var(--shadow-brutal-sm)",
            marginBottom: "28px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            columnGap: "16px",
            rowGap: "8px",
          }}
        >
          <span
            style={{
              backgroundColor: "rgba(34, 197, 94, 0.15)",
              border: "1px solid var(--color-secondary)",
              color: "#166534",
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "3px 12px",
              borderRadius: "100px",
              flexShrink: 0,
            }}
          >
            Impact
          </span>
          <span
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "1rem",
              color: "var(--color-foreground)",
              lineHeight: 1.5,
            }}
          >
            {metrics.map((metric, i) => (
              <span key={metric.label}>
                {i > 0 && (
                  <span
                    style={{
                      opacity: 0.25,
                      margin: "0 10px",
                    }}
                  >
                    ·
                  </span>
                )}
                <span
                  style={{
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: "1.0625rem",
                    fontWeight: 800,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {metric.value}
                </span>
                <span style={{ opacity: 0.75 }}> {metric.label}</span>
              </span>
            ))}
          </span>
        </div>
      )}

      {/* Capabilities — matches the Impact callout shape, blue tint to pair
          with the green Impact bubble. */}
      {tags.length > 0 && (
        <div
          style={{
            padding: "14px 22px",
            backgroundColor: "rgba(28, 176, 246, 0.08)",
            border: "2px solid var(--color-foreground)",
            borderRadius: "var(--radius-container)",
            boxShadow: "var(--shadow-brutal-sm)",
            marginBottom: "28px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            columnGap: "16px",
            rowGap: "8px",
          }}
        >
          <span
            style={{
              backgroundColor: "rgba(28, 176, 246, 0.15)",
              border: "1px solid var(--color-primary)",
              color: "#0369a1",
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "3px 12px",
              borderRadius: "100px",
              flexShrink: 0,
            }}
          >
            Capabilities
          </span>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "6px",
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: "var(--color-card)",
                  color: "var(--color-foreground)",
                  border: "1px solid rgba(20, 20, 20, 0.15)",
                  borderRadius: "var(--radius-button)",
                  padding: "4px 10px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

    </header>
  );
}

function CreditsCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.75rem",
          color: "rgba(20, 20, 20, 0.6)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontWeight: 600,
          marginBottom: "6px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.9375rem",
          color: "var(--color-foreground)",
          fontWeight: 500,
          lineHeight: 1.4,
        }}
      >
        {value}
      </div>
    </div>
  );
}
