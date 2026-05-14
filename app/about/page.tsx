import CredibilityBand from "@/components/CredibilityBand";
import WhatIBuild from "@/components/WhatIBuild";
import HowIWork from "@/components/HowIWork";
import Capabilities from "@/components/Capabilities";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "About | Kevin Hu",
};

export default function AboutPage() {
  return (
    <main>
      <section style={{ paddingTop: "60px", paddingBottom: "12px" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto" }}
          className="px-6 lg:px-12"
        >
          <h1
            style={{
              fontFamily: "var(--font-display), sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              margin: 0,
              marginBottom: 16,
              color: "var(--color-foreground)",
            }}
          >
            About
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              fontSize: "1.0625rem",
              lineHeight: 1.6,
              color: "var(--color-foreground)",
              opacity: 0.7,
              maxWidth: "640px",
              margin: 0,
            }}
          >
            A short tour of the work I&apos;ve shipped, the way I frame it, and
            the stack underneath.
          </p>
        </div>
      </section>

      <CredibilityBand />
      <WhatIBuild />
      <HowIWork />
      <Capabilities />
      <ContactSection />
    </main>
  );
}
