const SKILLS = [
  { name: "AirTable",         domain: "airtable.com" },
  { name: "n8n",              domain: "n8n.io" },
  { name: "Google Sheets",    domain: "sheets.google.com" },
  { name: "Google Analytics", domain: "https://analytics.google.com" },
  { name: "Power BI",         domain: "microsoft.com" },
  { name: "Lovable.dev",      domain: "lovable.dev" },
  { name: "Notion",           domain: "notion.so" },
  { name: "Alteryx",          domain: "alteryx.com" },
  { name: "Cursor",           domain: "cursor.com" },
  { name: "Claude Code",      domain: "claude.ai" },
  { name: "Supabase",         domain: "supabase.com" },
  { name: "BigQuery",         domain: "cloud.google.com" },
  { name: "Postman",          domain: "postman.com" },
  { name: "GitHub",           domain: "github.com" },
  { name: "OpenClaw", domain: "openclaw.ai" },
  { name: "Jira",     domain: "atlassian.com" },
];

export default function Skills() {
  return (
    <section id="skills">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
        className="px-6 lg:px-12"
      >
        <h2
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontSize: "1.875rem",
            fontWeight: 700,
            color: "var(--color-foreground)",
            margin: "0 0 32px 0",
          }}
        >
          Skills
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {SKILLS.map((skill) => (
            <span
              key={skill.name}
              className="skill-pill"
              style={{
                backgroundColor: "var(--color-card)",
                border: "2px solid var(--color-muted)",
                borderRadius: "var(--radius-button)",
                padding: "8px 16px",
                fontFamily: "var(--font-body), sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "var(--color-foreground)",
                cursor: "default",
                transition: "border-color 0.15s ease, color 0.15s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://www.google.com/s2/favicons?domain=${skill.domain}&sz=32`}
                alt=""
                width={16}
                height={16}
                style={{ borderRadius: 2, flexShrink: 0 }}
              />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
