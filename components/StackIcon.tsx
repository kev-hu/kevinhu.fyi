const ICON_DOMAINS: Record<string, string> = {
  vercel: "vercel.com",
  nextjs: "nextjs.org",
  claude: "claude.com",
  anthropic: "anthropic.com",
  markdown: "commonmark.org",
  obsidian: "obsidian.md",
  apify: "apify.com",
  bigquery: "cloud.google.com",
  launchd: "apple.com",
  mcp: "modelcontextprotocol.io",
};

export function StackIcon({ name }: { name: string }) {
  const domain = ICON_DOMAINS[name] ?? name;
  return (
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
      alt=""
      width={18}
      height={18}
      style={{
        display: "inline-block",
        width: "18px",
        height: "18px",
        margin: "0 6px 0 0",
        padding: 0,
        border: "none",
        borderRadius: "3px",
        boxShadow: "none",
        background: "transparent",
        verticalAlign: "middle",
        position: "relative",
        top: "-1px",
      }}
    />
  );
}
