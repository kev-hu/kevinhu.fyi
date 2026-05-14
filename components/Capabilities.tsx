type Capability = { name: string; domain: string };

const CATEGORIES: { title: string; items: Capability[] }[] = [
  {
    title: "AI infrastructure",
    items: [
      { name: "Claude / Claude Code", domain: "claude.ai" },
      { name: "OpenAI API", domain: "openai.com" },
      { name: "MCP servers", domain: "modelcontextprotocol.io" },
      { name: "Zep / Graphiti", domain: "getzep.com" },
      { name: "Eval rubrics", domain: "anthropic.com" },
      { name: "RAG / Tool-use", domain: "anthropic.com" },
    ],
  },
  {
    title: "Production AI stacks",
    items: [
      { name: "ElevenLabs", domain: "elevenlabs.io" },
      { name: "Vapi", domain: "vapi.ai" },
      { name: "Deepgram", domain: "deepgram.com" },
      { name: "Twilio", domain: "twilio.com" },
      { name: "Vercel", domain: "vercel.com" },
      { name: "Supabase", domain: "supabase.com" },
    ],
  },
  {
    title: "Data engineering",
    items: [
      { name: "BigQuery", domain: "cloud.google.com" },
      { name: "Alteryx", domain: "alteryx.com" },
      { name: "Power BI", domain: "powerbi.microsoft.com" },
      { name: "Postman / APIs", domain: "postman.com" },
    ],
  },
  {
    title: "Workflow & tooling",
    items: [
      { name: "Cursor", domain: "cursor.com" },
      { name: "Obsidian", domain: "obsidian.md" },
      { name: "GitHub", domain: "github.com" },
      { name: "Skills-as-CLIs", domain: "github.com" },
    ],
  },
];

export default function Capabilities() {
  return (
    <section id="built-with">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
        className="px-6 lg:px-12"
      >
        <h2
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "1.875rem",
            fontWeight: 700,
            color: "var(--color-foreground)",
            margin: "0 0 12px 0",
          }}
        >
          Built with
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "var(--color-foreground)",
            opacity: 0.65,
            margin: "0 0 32px 0",
            maxWidth: "720px",
          }}
        >
          The stack behind the work above. Short on purpose — fewer tools,
          used deeply, beats a wall of logos.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              style={{
                padding: "20px 22px",
                backgroundColor: "var(--color-card)",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-container)",
                boxShadow: "var(--shadow-brutal-sm)",
              }}
            >
              <div
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
                  marginBottom: "16px",
                }}
              >
                {category.title}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {category.items.map((item) => (
                  <span
                    key={item.name}
                    className="skill-pill"
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
          ))}
        </div>
      </div>
    </section>
  );
}
