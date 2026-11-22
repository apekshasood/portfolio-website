"use client";

import { Reveal, SectionHeading } from "./Reveal";

const cards = [
  { emoji: "🤖", title: "AI / LLM Products", desc: "Document intelligence, streaming chat UI, prompt orchestration & fallback handling" },
  { emoji: "⚡", title: "Performance", desc: "Up to 40% faster load times and 70% fewer bugs across roles" },
  { emoji: "🧩", title: "Architecture", desc: "Micro-frontends with Module Federation, Nx monorepos" },
  { emoji: "📐", title: "Design Systems", desc: "Storybook component libraries adopted across whole teams" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28" style={{ scrollMarginTop: 64 }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="02" label="About">
          A frontend engineer who&apos;s <span className="hl">comfortable across the stack.</span>
        </SectionHeading>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <Reveal delay={0.1} className="lg:col-span-3 space-y-5">
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              I&apos;m a <span style={{ color: "var(--text)", fontWeight: 700 }}>frontend engineer</span> with 5.8 years building
              scalable, responsive web and mobile applications in{" "}
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>React</span>,{" "}
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>React Native</span>,{" "}
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>Angular</span> and{" "}
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>TypeScript</span>.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              As a UI Developer at Saksoft I now work across the full stack on an AI/LLM-powered enterprise platform —
              a React front end paired with a Python/FastAPI backend on the cloud. I&apos;ve built the conversational
              chat experience (token-by-token streaming, chat history, source citations), wired up SSO auth flows, and
              shipped resilient document upload &amp; retrieval pipelines.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
              Across three companies I&apos;ve led Angular-to-React migrations, architected Storybook component libraries
              and micro-frontends, and consistently shipped measurable performance and quality gains — improving app
              performance by up to 40% and reducing bugs by 70%. I like owning features end to end and partnering closely
              with backend, ML and product teams.
            </p>

            <blockquote className="mt-6 pl-5 border-l-2 italic text-base" style={{ borderColor: "var(--accent)", color: "var(--subtle)" }}>
              &ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;
              <cite className="block not-italic mt-1 text-sm font-semibold" style={{ color: "var(--accent)" }}>— Steve Jobs</cite>
            </blockquote>
          </Reveal>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={0.15 + i * 0.08}>
                <div className="rounded-2xl border p-5 h-full flex flex-col gap-2 transition-transform duration-200 hover:-translate-y-1.5"
                  style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
                  <span className="text-2xl">{c.emoji}</span>
                  <p className="font-display font-bold text-sm" style={{ color: "var(--text)" }}>{c.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
