import type { ReactNode } from "react";

type Variant = "default" | "github";

type Props = {
  src: string;
  alt: string;
  href: string;
  label?: ReactNode;
  variant?: Variant;
  marginBottom?: string;
};

const variantStyles: Record<Variant, { bg: string; fg: string; icon?: ReactNode }> = {
  default: {
    bg: "var(--color-card)",
    fg: "var(--color-foreground)",
  },
  github: {
    bg: "#24292e",
    fg: "#ffffff",
    icon: (
      <svg
        viewBox="0 0 16 16"
        width="14"
        height="14"
        fill="currentColor"
        aria-hidden="true"
        style={{ display: "block" }}
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
};

export function ImageWithLink({
  src,
  alt,
  href,
  label = "View on GitHub",
  variant = "default",
  marginBottom = "2.5rem",
}: Props) {
  const { bg, fg, icon } = variantStyles[variant];

  return (
    <div style={{ position: "relative", marginBottom }}>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", cursor: "zoom-in" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
        />
      </a>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          backgroundColor: bg,
          color: fg,
          border: "2px solid var(--color-foreground)",
          borderRadius: "var(--radius-button)",
          boxShadow: "var(--shadow-brutal-sm)",
          padding: "6px 12px",
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.8125rem",
          fontWeight: 600,
          textDecoration: "none",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          zIndex: 2,
        }}
      >
        {icon}
        {label}
      </a>
    </div>
  );
}
