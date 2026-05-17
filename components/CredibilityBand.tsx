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
          paddingTop: "24px",
          paddingBottom: "24px",
        }}
        className="px-6 lg:px-12"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          {[HIGHLIGHTS.slice(0, 3), HIGHLIGHTS.slice(3)].map((row, ri) => (
            <div
              key={ri}
              style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}
            >
              {row.map((h) => (
                <div
                  key={`${h.role}-${h.org}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "6px 12px",
                    backgroundColor: "var(--color-card)",
                    border: "2px solid var(--color-foreground)",
                    borderRadius: "var(--radius-button)",
                    boxShadow: "var(--shadow-brutal-sm)",
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
                  <span
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--color-foreground)",
                      lineHeight: 1.3,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {h.role}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body), sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 400,
                      color: "var(--color-foreground)",
                      opacity: 0.6,
                      lineHeight: 1.3,
                      whiteSpace: "nowrap",
                    }}
                  >
                    · {h.org}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
