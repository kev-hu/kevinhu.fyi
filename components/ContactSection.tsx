import Button from "@/components/Button";

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "clamp(24px, 4vw, 48px)",
        paddingRight: "clamp(24px, 4vw, 48px)",
      }}
    >
      {/* ── Centered content wrapper ─────────────────────────────────────── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* ── Section heading ──────────────────────────────────────────────── */}
        <div style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "2.25rem",
              fontWeight: 700,
              color: "var(--color-foreground)",
              margin: "0 0 12px 0",
              lineHeight: 1.15,
            }}
          >
            Let&apos;s Work Together
          </h2>
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
            If you&apos;re interested in working with me, book a time that works for you.
          </p>
        </div>

        {/* ── Cal.com embed placeholder ──────────────────────────────────────
            TODO: Replace with Cal.com embed script
        ────────────────────────────────────────────────────────────────────── */}
        <div
          style={{
            background: "var(--color-card)",
            border: "2px solid var(--color-foreground)",
            borderRadius: "var(--radius-card)",
            boxShadow: "var(--shadow-brutal)",
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            textAlign: "center",
          }}
        >
          <span
            aria-hidden="true"
            style={{ fontSize: "3rem", lineHeight: 1 }}
          >
            📅
          </span>

          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "1rem",
              color: "var(--color-foreground)",
              opacity: 0.75,
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Book a call via Cal.com
          </p>

          <Button
            href="https://cal.com/kevinhu"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Open Calendar
          </Button>
        </div>

      </div>
    </section>
  );
}
