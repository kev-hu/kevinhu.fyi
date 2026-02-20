import React from "react";

// ─── Variant styles ──────────────────────────────────────────────────────────

const variantStyles = {
  primary: {
    base: {
      backgroundColor: "var(--color-primary)",
      color: "#ffffff",
      border: "2px solid var(--color-foreground)",
      boxShadow: "var(--shadow-brutal-primary)",
    },
  },
  secondary: {
    base: {
      backgroundColor: "var(--color-card)",
      color: "var(--color-foreground)",
      border: "2px solid var(--color-foreground)",
      boxShadow: "var(--shadow-brutal-gray)",
    },
  },
} as const;

// ─── Types ───────────────────────────────────────────────────────────────────

type Variant = keyof typeof variantStyles;

type ButtonBaseProps = {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
};

// Polymorphic: renders <a> when `href` is supplied, <button> otherwise.
type ButtonProps =
  | (ButtonBaseProps &
      Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
        href?: undefined;
      })
  | (ButtonBaseProps &
      Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
        href: string;
      });

// ─── Component ───────────────────────────────────────────────────────────────

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const styles = variantStyles[variant];

  // Shared className: layout, spacing, typography, transition.
  // Custom tokens (colors, shadows, radius) are applied via inline style.
  const sharedClassName = [
    // Layout
    "inline-flex items-center justify-center",
    // Spacing
    "px-6 py-3",
    // Typography
    "text-base font-bold leading-none",
    // Transition (150 ms on all properties)
    "transition-all duration-150",
    // Cursor
    "cursor-pointer select-none",
    // Remove default outline; we rely on the border for focus-visible
    "outline-none",
    // Focus-visible ring for keyboard accessibility
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const baseStyle: React.CSSProperties = {
    // Custom tokens that Tailwind v4 can't resolve without explicit mapping
    borderRadius: "var(--radius-button)",
    fontFamily: "var(--font-display), sans-serif",
    // Spread variant-specific base styles
    ...styles.base,
  };

  // Hover/active pseudo-class styles are defined in app/globals.css via
  // data-attribute selectors ([data-btn-primary], [data-btn-secondary]).
  const dataProps = { [`data-btn-${variant}`]: "" };

  if (props.href !== undefined) {
    const { href, ...anchorRest } =
      props as ButtonBaseProps &
        React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

    return (
      <a
        href={href}
        className={sharedClassName}
        style={baseStyle}
        {...dataProps}
        {...anchorRest}
      >
        {children}
      </a>
    );
  }

  const { ...buttonRest } =
    props as ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type="button"
      className={sharedClassName}
      style={baseStyle}
      {...dataProps}
      {...buttonRest}
    >
      {children}
    </button>
  );
}
