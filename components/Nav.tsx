"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "./Button";
import type { ProjectMeta } from "@/lib/projects";

export default function Nav({ projects = [] }: { projects?: ProjectMeta[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isProjectDetail = pathname.startsWith("/projects/");

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
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
            paddingTop: "16px",
            paddingBottom: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="px-6 lg:px-12"
        >
          {/* Left: wordmark */}
          <Link
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
          </Link>

          {/* Right: desktop links (hidden below md, hidden on project detail pages) */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: "32px" }}>
            {!isProjectDetail && navLinks.map(({ label, href }) => (
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

            <Button href={isProjectDetail ? "#project-cta" : "#contact"} variant="primary" className="text-sm px-4 py-2">
              Book a Call
            </Button>
          </nav>

          {/* Right: hamburger button (visible below md) */}
          <div className="md:hidden">
            <button
              type="button"
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
        </div>
      </header>

      {/* Mobile drawer: backdrop — outside <header> to avoid backdrop-filter containment */}
      <div
        className="md:hidden"
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.35)",
          zIndex: 40,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 250ms ease",
        }}
      />

      {/* Mobile drawer: panel — outside <header> to avoid backdrop-filter containment */}
      <div
        id="mobile-menu"
        className="md:hidden"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "280px",
          zIndex: 60,
          backgroundColor: "var(--color-background)",
          borderLeft: "2px solid var(--color-muted)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 250ms ease",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Drawer header: CTA + close button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            padding: "14px 20px",
            borderBottom: "2px solid var(--color-muted)",
            flexShrink: 0,
          }}
        >
          <Button
            href={isProjectDetail ? "#project-cta" : "#contact"}
            variant="primary"
            className="text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Book a Call
          </Button>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              flexShrink: 0,
              background: "none",
              border: "2px solid var(--color-muted)",
              borderRadius: "var(--radius-button)",
              cursor: "pointer",
              color: "var(--color-foreground)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Drawer content */}
        <div
          className="px-5"
          style={{
            flex: 1,
            overflowY: "auto",
            paddingTop: "20px",
            paddingBottom: "32px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
        {isProjectDetail ? (
          <>
            <div
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-foreground)",
                opacity: 0.45,
                paddingBottom: "8px",
              }}
            >
              Projects
            </div>
            {projects.map((project) => {
              const isActive = pathname === `/projects/${project.slug}`;
              return (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "8px 12px",
                    fontFamily: "var(--font-body), sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "var(--color-primary)" : "var(--color-foreground)",
                    textDecoration: "none",
                    borderLeft: isActive
                      ? "3px solid var(--color-primary)"
                      : "3px solid transparent",
                    backgroundColor: isActive ? "rgba(28, 176, 246, 0.06)" : "transparent",
                    borderRadius: "4px",
                    transition: "color 150ms, background-color 150ms, border-color 150ms",
                  }}
                >
                  {project.title}
                </Link>
              );
            })}
          </>
        ) : (
          <>
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
                  padding: "8px 0",
                }}
              >
                {label}
              </a>
            ))}
          </>
        )}
        </div>
      </div>
    </>
  );
}
