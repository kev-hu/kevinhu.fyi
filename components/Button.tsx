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
    hover: {
      boxShadow: "var(--shadow-brutal-primary-hover)",
      transform: "translateY(2px)",
    },
    active: {
      boxShadow: "none",
      transform: "translateY(4px)",
    },
  },
  secondary: {
    base: {
      backgroundColor: "var(--color-card)",
      color: "var(--color-foreground)",
      border: "2px solid var(--color-foreground)",
      boxShadow: "var(--shadow-brutal-gray)",
    },
    hover: {
      boxShadow: "var(--shadow-brutal-gray-hover)",
      transform: "translateY(2px)",
    },
    active: {
      boxShadow: "none",
      transform: "translateY(4px)",
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
    // Hover state via Tailwind group / pseudo — we use CSS custom property tricks
    // via a data-attribute approach so pure CSS handles the press-in.
    "group",
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

  // We inject the hover/active states via a <style> tag scoped to a unique
  // data attribute so we stay purely declarative without a JS event handler.
  // This avoids the limitations of Tailwind's inability to interpolate arbitrary
  // CSS variable values inside pseudo-class utilities in all v4 configurations.
  const dataAttr = `data-btn-${variant}`;

  const pseudoCSS = `
[${dataAttr}]:hover {
  box-shadow: ${styles.hover.boxShadow};
  transform: ${styles.hover.transform};
}
[${dataAttr}]:active {
  box-shadow: ${styles.active.boxShadow};
  transform: ${styles.active.transform};
}
`.trim();

  const styleTag = (
    <style
      // Use dangerouslySetInnerHTML so React doesn't escape the CSS
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: pseudoCSS }}
    />
  );

  const dataProps = { [dataAttr]: "" };

  if (props.href !== undefined) {
    const { href, ...anchorRest } =
      props as ButtonBaseProps &
        React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

    return (
      <>
        {styleTag}
        <a
          href={href}
          className={sharedClassName}
          style={baseStyle}
          {...dataProps}
          {...anchorRest}
        >
          {children}
        </a>
      </>
    );
  }

  const { ...buttonRest } =
    props as ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <>
      {styleTag}
      <button
        type="button"
        className={sharedClassName}
        style={baseStyle}
        {...dataProps}
        {...buttonRest}
      >
        {children}
      </button>
    </>
  );
}
