import Button from "@/components/Button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="px-6 lg:px-12">

        {/* ── Card ─────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: "var(--color-card)",
            border: "2px solid var(--color-foreground)",
            borderRadius: "var(--radius-card)",
            boxShadow: "var(--shadow-brutal)",
            padding: "clamp(40px, 6vw, 72px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle blue radial glow behind content */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(28,176,246,0.10) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
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
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--color-foreground)",
              opacity: 0.6,
              maxWidth: "480px",
              margin: 0,
            }}
          >
            Whether you&apos;re building something new, need a technical advisor,
            or just want to connect — grab 30 minutes on my calendar.
          </p>

          {/* CTA */}
          <div style={{ marginTop: "8px" }}>
            <Button
              href="https://calendly.com/kevinqinhu/30min"
              target="_blank"
              variant="primary"
            >
              Book a 30-min Call
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}