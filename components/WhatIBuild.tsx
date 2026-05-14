const SYSTEMS = [
  {
    number: "01",
    title: "AI customers use",
    body: "Trust-critical agents where a wrong answer is a reputational event, not a churn risk.",
    examples: "BBBS · Cyberse",
  },
  {
    number: "02",
    title: "AI teams use",
    body: "Internal leverage tooling that compounds with use — workspaces, skill libraries, memory.",
    examples: "Personal AI Studio · Agent Factory",
  },
  {
    number: "03",
    title: "Systems orgs run on",
    body: "Cross-org rollouts where adoption is the bottleneck, not transformation.",
    examples: "CARES Act · LA County CRM",
  },
];

export default function WhatIBuild() {
  return (
    <section id="what-i-build">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "80px",
          paddingBottom: "40px",
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
          What I build
        </h2>
        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "var(--color-foreground)",
            opacity: 0.65,
            margin: "0 0 36px 0",
            maxWidth: "720px",
          }}
        >
          Three audiences, three different bars for what &ldquo;working&rdquo;
          means.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {SYSTEMS.map((system) => (
            <div
              key={system.number}
              style={{
                padding: "28px 26px",
                backgroundColor: "var(--color-card)",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-container)",
                boxShadow: "var(--shadow-brutal-sm)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "3rem",
                  fontWeight: 800,
                  color: "var(--color-primary)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  marginBottom: "20px",
                }}
              >
                {system.number}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--color-foreground)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                {system.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--color-foreground)",
                  opacity: 0.7,
                  lineHeight: 1.5,
                  marginBottom: "24px",
                  flexGrow: 1,
                }}
              >
                {system.body}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  color: "var(--color-foreground)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  paddingTop: "16px",
                  borderTop: "2px solid var(--color-foreground)",
                }}
              >
                {system.examples}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
