const SKILLS = [
  "AirTable",
  "n8n",
  "Google Sheets",
  "Google Analytics",
  "Power BI",
  "Lovable.dev",
  "Notion",
  "Alteryx",
];

export default function Skills() {
  return (
    <section id="skills">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 24px",
        }}
        className="lg:px-12"
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
              key={skill}
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
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
