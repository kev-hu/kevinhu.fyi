const WOO = [
  {
    name: "Workflow",
    question: "Which tools and processes will you have to reinvent?",
    consequence: "Miss it and people won't use it.",
  },
  {
    name: "Outcome",
    question: "What measurable metric improves?",
    consequence: "Miss it and you don't know if it's working.",
  },
  {
    name: "Owner",
    question: "Who will manage it after launch?",
    consequence: "Miss it and it dies after launch.",
  },
];

export default function HowIWork() {
  return (
    <section id="my-approach">
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
            margin: "0 0 12px 0",
            letterSpacing: "-0.02em",
          }}
        >
          My Approach
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
          AI fails when you can&rsquo;t answer three questions. I call them{" "}
          <strong style={{ color: "var(--color-foreground)", opacity: 1 }}>
            WOO
          </strong>
          .
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {WOO.map((step) => (
            <div
              key={step.name}
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
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  alignItems: "center",
                  backgroundColor: "var(--color-foreground)",
                  color: "#ffffff",
                  borderRadius: "var(--radius-button)",
                  padding: "6px 14px",
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {step.name}
              </div>

              {/* The diagnostic question — the headline */}
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "var(--color-foreground)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                  flexGrow: 1,
                }}
              >
                {step.question}
              </div>

              {/* The stake — the cost of missing it */}
              <div
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.875rem",
                  fontStyle: "italic",
                  color: "var(--color-foreground)",
                  opacity: 0.65,
                  lineHeight: 1.5,
                  paddingTop: "16px",
                  borderTop: "2px solid var(--color-foreground)",
                }}
              >
                {step.consequence}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "var(--color-foreground)",
            opacity: 0.7,
            margin: "32px 0 0 0",
            maxWidth: "720px",
          }}
        >
          Get all three right and it becomes obvious what to ship, how to
          prove it&rsquo;s working, and how to keep it alive.
        </p>
      </div>
    </section>
  );
}
