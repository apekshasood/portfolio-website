"use client";

import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  { label: "Languages & Frameworks", skills: ["TypeScript", "JavaScript (ES6+)", "React", "React Native", "Angular", "HTML5", "CSS3", "Tailwind CSS", "SCSS"] },
  { label: "AI & Full Stack", skills: ["LLM Service Integration", "Conversational / Chatbot UI", "Streaming Responses", "Document Q&A Pipelines", "SSO & OAuth 2.0"] },
  { label: "Component Systems", skills: ["Storybook", "Figma-to-Component Handoff", "Micro-Frontend Architecture", "Module Federation"] },
  { label: "Monorepo & Build", skills: ["Nx Monorepo", "Webpack Module Federation", "Vite", "CI/CD Pipelines", "Docker"] },
  { label: "State Management", skills: ["Redux / Redux Toolkit", "Zustand", "Context API"] },
  { label: "Backend & Data", skills: ["Python (FastAPI)", "Node.js", "GraphQL", "RESTful APIs", "MySQL"] },
  { label: "Cloud & Tools", skills: ["AWS (S3, CloudFront, EC2, Lambda, API Gateway)", "GCP (Cloud Storage, IAM, SSO)", "Git"] },
  { label: "Practices", skills: ["Agile", "Test-Driven Development", "Code Review", "Performance & Cross-Browser Optimization", "AI-assisted Dev (Copilot, Cursor, Claude)"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28" style={{ scrollMarginTop: 64 }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="04" label="Skills">
          What I <span className="hl">work with.</span>
        </SectionHeading>

        <div className="grid sm:grid-cols-2 gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.06}>
              <div className="rounded-2xl border p-6 h-full" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.14em] mb-4 pb-3 border-b"
                  style={{ color: "var(--accent)", borderColor: "var(--line)" }}>
                  {g.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-lg border transition-transform duration-150 hover:-translate-y-0.5"
                      style={{ borderColor: "var(--line)", color: "var(--muted)", background: "var(--surface-2)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
