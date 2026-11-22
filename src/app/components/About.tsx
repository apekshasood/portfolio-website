"use client";

import { Reveal, SectionHeading } from "./Reveal";

const iconProps = {
  width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true,
};

// Simple line icons, drawn in the accent colour.
const SparkIcon = () => (
  <svg {...iconProps}><path d="M12 3v4M12 17v4M3 12h4M17 12h4" /><path d="M12 8.5l1.2 2.3 2.3 1.2-2.3 1.2L12 15.5l-1.2-2.3L8.5 12l2.3-1.2z" /></svg>
);
const GaugeIcon = () => (
  <svg {...iconProps}><path d="M4.5 17a8.5 8.5 0 1 1 15 0" /><path d="M12 13l4-4" /><circle cx="12" cy="13" r="1" /></svg>
);
const LayersIcon = () => (
  <svg {...iconProps}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></svg>
);
const GridIcon = () => (
  <svg {...iconProps}><rect x="3.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.5" /></svg>
);

const cards = [
  { Icon: SparkIcon, title: "AI / LLM Products", desc: "Document intelligence, streaming chat UI, prompt orchestration & fallback handling" },
  { Icon: GaugeIcon, title: "Performance", desc: "Fewer round trips with GraphQL, streaming responses, retry and failure states" },
  { Icon: LayersIcon, title: "Architecture", desc: "Micro-frontends with Module Federation, Nx monorepos" },
  { Icon: GridIcon, title: "Design Systems", desc: "Storybook component libraries adopted across whole teams" },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28" style={{ scrollMarginTop: 64 }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="02" label="About">
          A full-stack engineer with <span className="hl">a frontend core.</span>
        </SectionHeading>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <Reveal delay={0.1} className="lg:col-span-3 space-y-5">
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              I&apos;m a <span style={{ color: "var(--text)", fontWeight: 700 }}>full-stack engineer</span> with 6 years building
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
              Across three companies I&apos;ve led Angular-to-React migrations and architected Storybook component
              libraries and micro-frontends. I like owning features end to end and partnering closely with backend, ML
              and product teams.
            </p>
          </Reveal>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={0.15 + i * 0.08}>
                <div className="rounded-2xl border p-5 h-full flex flex-col gap-2 transition-transform duration-200 hover:-translate-y-1.5"
                  style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
                  <span style={{ color: "var(--accent)" }}><c.Icon /></span>
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
