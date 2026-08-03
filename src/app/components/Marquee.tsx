"use client";

const items = [
  "React", "TypeScript", "Next.js", "Python / FastAPI", "React Native",
  "LLM Integration", "Nx Monorepo", "Module Federation", "Storybook",
  "AWS", "GCP", "GraphQL", "Redux / Zustand", "Docker", "CI/CD",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden marquee-mask border-y"
      style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}
    >
      <div className="marquee-track py-3.5">
        {row.map((t, i) => (
          <span key={i} className="inline-flex items-center font-mono text-sm" style={{ color: "var(--muted)" }}>
            {t}
            <span className="mx-10 text-[8px]" style={{ color: "var(--accent)" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
