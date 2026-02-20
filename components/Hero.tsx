import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        background:
          "radial-gradient(ellipse at 70% 50%, rgba(28, 176, 246, 0.06) 0%, transparent 60%)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
        className="px-6 lg:px-12 lg:py-[120px]"
      >
        {/* Two-column grid on lg+, single column on mobile */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">

          {/* ── Left column (~55%) ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:w-[55%]">

            {/* Eyebrow tag */}
            <span
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                fontFamily: "var(--font-display), sans-serif",
                color: "#ffffff",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: "var(--color-secondary)",
                borderRadius: "var(--radius-button)",
                padding: "5px 14px",
              }}
            >
              Portfolio
            </span>

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(2.75rem, 5vw, 3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "var(--color-foreground)",
                margin: 0,
              }}
            >
              Hello, I&apos;m Kevin 👋
            </h1>

            {/* Bio paragraph */}
            <p
              style={{
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.6,
                color: "var(--color-foreground)",
                opacity: 0.7,
                maxWidth: "560px",
                margin: 0,
              }}
            >
              My background is in enterprise software, data analytics, and 0→1
              products. After my MBA at UC Berkeley Haas, I raised venture
              capital to build a platform for mentorship programs. Now, I&apos;m
              building AI, advising startups, and creating content to promote AI
              literacy.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary" href="#contact">
                Book a Call
              </Button>
              <Button variant="secondary" href="#projects">
                View My Work
              </Button>
            </div>
          </div>

          {/* ── Right column (~45%) ────────────────────────────────────────── */}
          <div className="flex justify-center lg:justify-end lg:w-[45%] w-full">
            <Image
              src="/images/headshot.png"
              alt="Kevin Hu"
              width={400}
              height={400}
              className="hero-image-placeholder"
              style={{ borderRadius: "24px", width: "100%", height: "auto", maxWidth: "400px" }}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
