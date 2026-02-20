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
          padding: "80px 24px",
        }}
        className="lg:py-[120px] lg:px-12"
      >
        {/* Two-column grid on lg+, single column on mobile */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">

          {/* ── Left column (~55%) ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-6 lg:w-[55%]">

            {/* Eyebrow label */}
            <span
              style={{
                fontFamily: "var(--font-body), sans-serif",
                color: "var(--color-primary)",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                opacity: 0.9,
              }}
            >
              MBA who codes
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
            {/*
              Placeholder for the illustrated headshot.
              Replace this <div> with <Image> once /public/images/headshot.png exists:

              import Image from "next/image";
              <Image
                src="/images/headshot.png"
                alt="Kevin Hu"
                width={400}
                height={400}
                style={{ borderRadius: "24px" }}
                priority
              />
            */}
            <div
              className="hero-image-placeholder"
              style={{
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "1 / 1",
                background: "var(--color-muted)",
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-foreground)",
                opacity: 0.4,
                fontFamily: "var(--font-body), sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 500,
                userSelect: "none",
              }}
            >
              [ headshot ]
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
