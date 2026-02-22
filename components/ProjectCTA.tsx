import Button from "./Button";

export default function ProjectCTA() {
  return (
    <div
      id="project-cta"
      style={{
        marginTop: "64px",
        paddingTop: "48px",
        borderTop: "2px solid var(--color-muted)",
      }}
    >
      <div
        style={{
          background: "var(--color-card)",
          border: "2px solid var(--color-foreground)",
          borderRadius: "var(--radius-card)",
          boxShadow: "var(--shadow-brutal)",
          padding: "40px 32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Blue radial glow from top */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% -10%, rgba(28,176,246,0.14) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* "Available" badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            backgroundColor: "rgba(34,197,94,0.12)",
            border: "1.5px solid rgba(34,197,94,0.5)",
            borderRadius: "100px",
            padding: "5px 14px",
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.04em",
            color: "#15803d",
          }}
        >
          {/* Pulsing green dot */}
          <span
            className="availability-dot"
            style={{
              display: "inline-block",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "var(--color-secondary)",
              flexShrink: 0,
            }}
          />
          Available for projects
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "clamp(1.375rem, 3vw, 1.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            color: "var(--color-foreground)",
            margin: 0,
          }}
        >
          Let&apos;s Work Together
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.9375rem",
            lineHeight: 1.6,
            color: "var(--color-foreground)",
            opacity: 0.6,
            maxWidth: "340px",
            margin: 0,
          }}
        >
          Got a project in mind? Grab 30 minutes on my calendar.
        </p>

        {/* CTA */}
        <div style={{ marginTop: "4px" }}>
          <Button
            href="https://calendly.com/kevinqinhu/30min"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Book a 30-min Call
          </Button>
        </div>
      </div>
    </div>
  );
}
