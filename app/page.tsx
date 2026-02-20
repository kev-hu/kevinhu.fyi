import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold" style={{ color: "var(--color-foreground)" }}>
        Hello, I'm Kevin
      </h1>
      <p className="text-lg mt-4" style={{ color: "var(--color-foreground)", opacity: 0.7 }}>
        This paragraph uses Plus Jakarta Sans for body text.
      </p>

      {/* Button component smoke-test */}
      <div className="mt-8 flex flex-wrap gap-4 items-center">
        {/* Primary variant — renders as <button> */}
        <Button variant="primary">Book a Call</Button>

        {/* Secondary variant — renders as <button> */}
        <Button variant="secondary">View Projects</Button>

        {/* Primary variant — renders as <a> */}
        <Button variant="primary" href="https://github.com/kevinhu" target="_blank" rel="noopener noreferrer">
          GitHub
        </Button>

        {/* Secondary variant — renders as <a> */}
        <Button variant="secondary" href="/projects">
          All Projects
        </Button>
      </div>
    </main>
  );
}
