"use client";

import { useEffect, useRef, useState } from "react";

type TOCItem  = { id: string; text: string };
type TOCGroup = { label: string; items: TOCItem[] };

export function BrandKitTOC({ groups }: { groups: TOCGroup[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const allItems = groups.flatMap((g) => g.items);

  useEffect(() => {
    if (allItems.length === 0) return;

    const els: HTMLElement[] = [];
    for (const { id } of allItems) {
      const el = document.getElementById(id);
      if (el) els.push(el);
    }
    if (els.length === 0) return;

    const handle = () => {
      let best: HTMLElement | null = null;
      let bestDist = Infinity;
      for (const el of els) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          const dist = Math.abs(rect.top);
          if (dist < bestDist) { bestDist = dist; best = el; }
        }
      }
      setActiveId(best ? best.id : "");
    };

    observerRef.current = new IntersectionObserver(handle, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    });
    for (const el of els) observerRef.current.observe(el);
    window.addEventListener("scroll", handle, { passive: true });
    handle();

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handle);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <div
      style={{
        overflowY: "auto",
        maxHeight: "calc(100vh - 120px)",
        paddingRight: "8px",
      }}
    >
      {groups.map((group, i) => (
        <div key={group.label} style={{ marginTop: i === 0 ? 0 : 20 }}>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "rgba(20, 20, 20, 0.5)",
              margin: 0,
              marginBottom: "6px",
            }}
          >
            {group.label}
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {group.items.map(({ id, text }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`toc-link${activeId === id ? " active" : ""}`}
                style={{
                  fontFamily: "var(--font-body), sans-serif",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  padding: "3px 0",
                  display: "block",
                  transition: "color 150ms ease",
                  lineHeight: 1.4,
                }}
              >
                {text}
              </a>
            ))}
          </nav>
        </div>
      ))}
    </div>
  );
}
