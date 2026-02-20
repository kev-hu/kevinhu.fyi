"use client";

import { useEffect, useRef, useState } from "react";
import type { Heading } from "@/lib/extractHeadings";

type TOCProps = {
  headings: Heading[];
  isMobile?: boolean;
};

export function TableOfContents({ headings, isMobile = false }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    // Track which headings are currently visible / have been scrolled past
    const headingElements: HTMLElement[] = [];
    for (const { id } of headings) {
      const el = document.getElementById(id);
      if (el) headingElements.push(el);
    }

    if (headingElements.length === 0) return;

    const handleIntersection = () => {
      // Find the heading closest to the top of the viewport that is still in or above the viewport
      let best: HTMLElement | null = null;
      let bestTop = Infinity;

      for (const el of headingElements) {
        const rect = el.getBoundingClientRect();
        // Consider headings that have crossed the top (rect.top <= threshold)
        // or are approaching (within upper 40% of viewport)
        if (rect.top <= 120) {
          const distance = Math.abs(rect.top);
          if (distance < bestTop) {
            bestTop = distance;
            best = el;
          }
        }
      }

      if (best) {
        setActiveId((best as HTMLElement).id);
      } else if (headingElements.length > 0) {
        // Nothing scrolled past top yet — nothing active or first heading
        setActiveId("");
      }
    };

    observerRef.current = new IntersectionObserver(
      () => {
        handleIntersection();
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    // Also update on scroll for smooth tracking
    const onScroll = () => {
      handleIntersection();
    };

    for (const el of headingElements) {
      observerRef.current.observe(el);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial call
    handleIntersection();

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
    if (isMobile) setIsOpen(false);
  };

  const linkList = (
    <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {headings.map(({ id, text, level }) => {
        const isActive = activeId === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleLinkClick(e, id)}
            className={`toc-link${isActive ? " active" : ""}`}
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.875rem",
              textDecoration: "none",
              padding: "4px 8px",
              paddingLeft: level === 3 ? "20px" : "8px",
              display: "block",
              borderRadius: "4px",
              transition: "color 150ms ease, border-left-color 150ms ease",
              color: isActive
                ? "var(--color-primary)"
                : "rgba(20, 20, 20, 0.7)",
              borderLeft: isActive
                ? "2px solid var(--color-primary)"
                : "2px solid transparent",
              lineHeight: 1.4,
            }}
          >
            {text}
          </a>
        );
      })}
    </nav>
  );

  // ── Mobile: collapsible dropdown ────────────────────────────────────────────
  if (isMobile) {
    return (
      <div
        style={{
          border: "2px solid var(--color-foreground)",
          borderRadius: "var(--radius-container)",
          overflow: "hidden",
          backgroundColor: "var(--color-card)",
        }}
      >
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "0.75rem",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "rgba(20, 20, 20, 0.6)",
          }}
        >
          <span>Table of Contents</span>
          <span
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 200ms ease",
              display: "inline-block",
            }}
          >
            ▾
          </span>
        </button>

        {isOpen && (
          <div
            style={{
              padding: "8px 8px 12px",
              borderTop: "1px solid var(--color-muted)",
            }}
          >
            {linkList}
          </div>
        )}
      </div>
    );
  }

  // ── Desktop: static sidebar list ────────────────────────────────────────────
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "rgba(20, 20, 20, 0.5)",
          marginBottom: "12px",
          marginTop: 0,
        }}
      >
        Contents
      </p>
      {linkList}
    </div>
  );
}
