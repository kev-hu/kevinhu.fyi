"use client";

import { useState } from "react";
import Button from "./Button";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(250, 249, 246, 0.9)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "2px solid var(--color-muted)",
      }}
    >
      {/* Main nav row */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left: wordmark */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 700,
            fontSize: "1.125rem",
            color: "var(--color-foreground)",
            textDecoration: "none",
            lineHeight: 1,
          }}
        >
          Kevin Hu
        </a>

        {/* Right: desktop links (hidden below md) */}
        <nav className="hidden md:flex" style={{ alignItems: "center", gap: "32px" }}>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link"
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--color-foreground)",
                textDecoration: "none",
                transition: "color 150ms",
              }}
            >
              {label}
            </a>
          ))}

          <Button href="#contact" variant="primary" className="text-sm px-4 py-2">
            Book a Call
          </Button>
        </nav>

        {/* Right: hamburger button (visible below md) */}
        <button
          type="button"
          className="md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "36px",
            height: "36px",
            background: "none",
            border: "none",
            cursor: "pointer",
            gap: "5px",
            padding: "4px",
          }}
        >
          {/* Three lines that animate to X */}
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "var(--color-foreground)",
              borderRadius: "2px",
              transition: "transform 250ms, opacity 250ms",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "var(--color-foreground)",
              borderRadius: "2px",
              transition: "opacity 250ms",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "var(--color-foreground)",
              borderRadius: "2px",
              transition: "transform 250ms, opacity 250ms",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        id="mobile-menu"
        className="md:hidden"
        style={{
          overflow: "hidden",
          maxHeight: menuOpen ? "300px" : "0",
          transition: "max-height 250ms ease",
          borderTop: menuOpen ? "1px solid var(--color-muted)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "12px 24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                color: "var(--color-foreground)",
                textDecoration: "none",
                transition: "color 150ms",
              }}
            >
              {label}
            </a>
          ))}

          <div>
            <Button
              href="#contact"
              variant="primary"
              className="text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
