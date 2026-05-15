type Highlight = {
  role: string;
  org: string;
  domain: string;
  logo?: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    role: "Supervisor (2nd hire)",
    org: "RSM's Innovation Lab",
    domain: "rsmus.com",
  },
  {
    role: "Co-founder, Product & Eng",
    org: "Firstly",
    domain: "firstly.com",
    logo: "/images/logos/firstly.jpg",
  },
  { role: "Product Manager", org: "DocuSign", domain: "docusign.com" },
  {
    role: "Azure ML Instructor",
    org: "Pluralsight",
    domain: "pluralsight.com",
  },
  { role: "MBA", org: "Berkeley Haas", domain: "haas.berkeley.edu" },
];

export default function CredibilityBand() {
  return (
    <section>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
        className="px-6 lg:px-12"
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {HIGHLIGHTS.map((h) => (
            <div
              key={`${h.role}-${h.org}`}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                padding: "12px 16px",
                backgroundColor: "var(--color-card)",
                border: "2px solid var(--color-foreground)",
                borderRadius: "var(--radius-button)",
                boxShadow: "var(--shadow-brutal-sm)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--color-foreground)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                {h.role}
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--color-foreground)",
                  opacity: 0.7,
                  lineHeight: 1.3,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    h.logo ??
                    `https://www.google.com/s2/favicons?domain=${h.domain}&sz=64`
                  }
                  alt=""
                  width={14}
                  height={14}
                  style={{ borderRadius: 2, flexShrink: 0 }}
                />
                {h.org}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
