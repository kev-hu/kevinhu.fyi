export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-5xl font-bold" style={{ color: "var(--color-foreground)" }}>
        Hello, I'm Kevin
      </h1>
      <p className="text-lg mt-4" style={{ color: "var(--color-foreground)", opacity: 0.7 }}>
        This paragraph uses Plus Jakarta Sans for body text.
      </p>
      <div className="mt-6 flex gap-4">
        <button
          className="px-6 py-3 font-semibold text-white rounded-[6px]"
          style={{
            backgroundColor: "var(--color-primary)",
            boxShadow: "var(--shadow-brutal-primary)",
          }}
        >
          Book a Call
        </button>
        <button
          className="px-6 py-3 font-semibold rounded-[6px]"
          style={{
            backgroundColor: "var(--color-card)",
            border: "2px solid var(--color-foreground)",
            boxShadow: "var(--shadow-brutal-gray)",
          }}
        >
          View Projects
        </button>
      </div>
    </main>
  );
}
