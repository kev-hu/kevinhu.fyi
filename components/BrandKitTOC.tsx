"use client";

import { useEffect, useRef, useState } from "react";

import type { TOCItem } from "@/components/brand-kit/tabs";

export function BrandKitTOC({ items }: { items: TOCItem[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const lockedRef = useRef<boolean>(false);
  const lockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const els: HTMLElement[] = [];
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) els.push(el);
    }
    if (els.length === 0) return;

    const handle = () => {
      if (lockedRef.current) return;
      let best: HTMLElement | null = null;
      let bestDist = Infinity;
      for (const el of els) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 160) {
          const dist = Math.abs(rect.top);
          if (dist < bestDist) {
            bestDist = dist;
            best = el;
          }
        }
      }
      setActiveId(best ? best.id : "");
    };

    observerRef.current = new IntersectionObserver(handle, {
      rootMargin: "-145px 0px -60% 0px",
      threshold: 0,
    });
    for (const el of els) observerRef.current.observe(el);
    window.addEventListener("scroll", handle, { passive: true });
    handle();

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handle);
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    lockedRef.current = true;
    if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);
    lockTimeoutRef.current = setTimeout(() => {
      lockedRef.current = false;
    }, 800);
    setActiveId(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Brand kit sections"
      style={{ display: "flex", flexDirection: "column", gap: "4px" }}
    >
      {items.map(({ id, text }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => handleClick(e, id)}
          className={`toc-link${activeId === id ? " active" : ""}`}
          style={{
            fontFamily: "var(--font-body), sans-serif",
            fontSize: "1rem",
            textDecoration: "none",
            padding: "4px 0",
            display: "block",
            transition: "color 150ms ease",
            lineHeight: 1.45,
          }}
        >
          {text}
        </a>
      ))}
    </nav>
  );
}
