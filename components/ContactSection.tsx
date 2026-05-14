import Button from "@/components/Button";

const STACK = [
  { name: "Claude Code", domain: "claude.ai" },
  { name: "OpenAI API", domain: "openai.com" },
  { name: "MCP servers", domain: "modelcontextprotocol.io" },
  { name: "RAG", domain: "anthropic.com" },
  { name: "Evals", domain: "anthropic.com" },
  { name: "ElevenLabs", domain: "elevenlabs.io" },
  { name: "Vapi", domain: "vapi.ai" },
  { name: "BigQuery", domain: "cloud.google.com" },
  { name: "Alteryx", domain: "alteryx.com" },
  { name: "Python", domain: "python.org" },
  { name: "n8n", domain: "n8n.io" },
  { name: "Vercel", domain: "vercel.com" },
  { name: "Cursor", domain: "cursor.com" },
  { name: "GitHub", domain: "github.com" },
  { name: "Supabase", domain: "supabase.com" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        paddingTop: "40px",
        paddingBottom: "60px",
      }}
      className="lg:pt-[60px] lg:pb-[80px]"
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }} className="px-6 lg:px-12">
        <div
          style={{
            gridTemplateColumns: "2fr 1fr",
            alignItems: "stretch",
          }}
          className="flex flex-col gap-4 md:grid md:gap-5"
        >
          {/* CTA banner — slots 1-2 */}
          <div
            style={{
              background: "var(--color-card)",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              padding: "clamp(28px, 4vw, 40px)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "flex-start",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
                fontWeight: 800,
                letterSpacing: "-0.01em",
                lineHeight: 1.2,
                color: "var(--color-foreground)",
                margin: 0,
              }}
            >
              Currently exploring AI enablement and product roles in the SF Bay Area.
            </h2>

            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "1rem",
                lineHeight: 1.6,
                color: "var(--color-foreground)",
                opacity: 0.65,
                margin: 0,
                maxWidth: "640px",
              }}
            >
              I help teams turn ambiguous AI needs into internal tools, agents,
              dashboards, and adoption systems people actually use.
            </p>

            <div
              style={{
                marginTop: "8px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <Button
                href="https://calendly.com/kevinqinhu/30min"
                target="_blank"
                variant="primary"
              >
                Book a 30-min Call
              </Button>
              <IconLink
                href="https://www.linkedin.com/in/kevinqinhu/"
                label="LinkedIn"
                external
              >
                <LinkedInIcon />
              </IconLink>
              <IconLink href="mailto:kevinqinhu@gmail.com" label="Email">
                <EmailIcon />
              </IconLink>
            </div>
          </div>

          {/* Stack card — slot 3 */}
          <div
            style={{
              background: "var(--color-card)",
              border: "2px solid var(--color-foreground)",
              borderRadius: "var(--radius-card)",
              boxShadow: "var(--shadow-brutal)",
              padding: "clamp(20px, 3vw, 28px)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: "var(--color-primary)",
                color: "#ffffff",
                borderRadius: "var(--radius-button)",
                padding: "4px 10px",
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                alignSelf: "flex-start",
              }}
            >
              Stack
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {STACK.map((item) => (
                <span
                  key={item.name}
                  style={{
                    backgroundColor: "var(--color-background)",
                    border: "2px solid var(--color-muted)",
                    borderRadius: "var(--radius-button)",
                    padding: "5px 10px",
                    fontFamily: "var(--font-body), sans-serif",
                    fontWeight: 500,
                    fontSize: "0.8125rem",
                    color: "var(--color-foreground)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${item.domain}&sz=32`}
                    alt=""
                    width={14}
                    height={14}
                    style={{ borderRadius: 2, flexShrink: 0 }}
                  />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      data-btn-secondary
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        backgroundColor: "var(--color-card)",
        color: "var(--color-foreground)",
        border: "2px solid var(--color-foreground)",
        borderRadius: "var(--radius-button)",
        boxShadow: "var(--shadow-brutal-gray)",
        transition: "transform 120ms ease, box-shadow 120ms ease",
      }}
    >
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
