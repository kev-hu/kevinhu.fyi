"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BRAND_KIT_TABS } from "@/components/brand-kit/tabs";

export function BrandKitTabs() {
  const pathname = usePathname();
  const activeSlug = pathname?.split("/")[2] ?? "tokens";

  return (
    <div
      style={{
        position: "sticky",
        top: "65px",
        zIndex: 40,
        background: "var(--color-background)",
        borderBottom: "1px solid var(--color-muted)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "12px",
          paddingBottom: "12px",
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
        className="px-6 lg:px-12"
      >
        {BRAND_KIT_TABS.map(({ slug, label }) => {
          const isActive = activeSlug === slug;
          return (
            <Link
              key={slug}
              href={`/brand-kit/${slug}`}
              className={`brand-kit-tab${isActive ? " active" : ""}`}
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                padding: "8px 16px",
                borderRadius: "6px",
                border: "2px solid #141414",
                background: isActive ? "var(--color-primary)" : "#ffffff",
                color: isActive ? "#ffffff" : "#141414",
                boxShadow: "2px 2px 0 #141414",
                textDecoration: "none",
                transition: "transform 120ms ease, box-shadow 120ms ease",
                display: "inline-block",
              }}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
