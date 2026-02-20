export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "2px solid var(--color-muted)",
        marginTop: "96px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px 24px",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
        className="flex-col items-center md:flex-row md:justify-between md:items-center"
      >
        {/* Left: identity */}
        <span
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.875rem",
            color: "rgba(20, 20, 20, 0.6)",
          }}
        >
          Kevin Hu · kevinhu.fyi
        </span>

        {/* Right: external links */}
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a
            href="https://www.linkedin.com/in/kevinhu88/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.875rem",
              color: "rgba(20, 20, 20, 0.6)",
              textDecoration: "none",
              transition: "color 150ms",
            }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:kevin@kevinhu.fyi"
            className="footer-link"
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.875rem",
              color: "rgba(20, 20, 20, 0.6)",
              textDecoration: "none",
              transition: "color 150ms",
            }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
