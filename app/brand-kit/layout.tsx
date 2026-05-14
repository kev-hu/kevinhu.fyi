import type { ReactNode } from "react";

import { BrandKitTabs } from "@/components/brand-kit/BrandKitTabs";
import { BrandKitSidebar } from "@/components/brand-kit/BrandKitSidebar";

export default function BrandKitLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        className="px-6 lg:px-12"
      >
        <section
          style={{
            paddingTop: "clamp(80px, 10vw, 120px)",
            paddingBottom: "32px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "var(--color-secondary)",
              color: "#ffffff",
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: "var(--radius-button)",
              marginBottom: "16px",
            }}
          >
            Design Reference
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "var(--color-foreground)",
              margin: 0,
              marginBottom: "16px",
            }}
          >
            Brand Kit
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "var(--color-foreground)",
              opacity: 0.6,
              margin: 0,
              maxWidth: "640px",
            }}
          >
            Neubrutalist design system for kevinhu.fyi. Bold borders, offset
            shadows, vivid blue accents, warm off-white canvas. Playful yet
            professional. Use these tokens and patterns to create on-brand
            assets.
          </p>
        </section>
      </div>

      <BrandKitTabs />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "48px",
          alignItems: "flex-start",
        }}
        className="px-6 lg:px-12"
      >
        <aside className="desktop-only" style={{ width: "220px", flexShrink: 0 }}>
          <div style={{ position: "sticky", top: "145px" }}>
            <BrandKitSidebar />
          </div>
        </aside>

        <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
      </div>
    </main>
  );
}
