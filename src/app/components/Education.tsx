"use client";

import { Reveal, SectionHeading } from "./Reveal";

const certs = [
  { name: "Certified React Developer", issuer: "Meta" },
  { name: "GraphQL", issuer: "Udemy" },
  { name: "Advanced JavaScript & TypeScript", issuer: "Udemy" },
];

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28" style={{ scrollMarginTop: 64, background: "var(--bg-2)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="05" label="Education & Certifications">
          Foundations &amp; <span className="hl">credentials.</span>
        </SectionHeading>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Education */}
          <Reveal>
            <div className="rounded-2xl border p-7 h-full" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
              <p className="font-mono text-xs uppercase tracking-[0.14em] mb-4" style={{ color: "var(--subtle)" }}>Education</p>
              <h3 className="font-display font-bold text-lg" style={{ color: "var(--text)" }}>B.Tech, Computer Science</h3>
              <p className="text-sm font-semibold mt-0.5" style={{ color: "var(--accent)" }}>Amity University, Noida</p>
              <div className="flex items-center gap-3 mt-3 font-mono text-xs" style={{ color: "var(--muted)" }}>
                <span>2016 – 2020</span>
                <span style={{ color: "var(--subtle)" }}>•</span>
                <span>85%</span>
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal delay={0.12}>
            <div className="rounded-2xl border p-7 h-full" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
              <p className="font-mono text-xs uppercase tracking-[0.14em] mb-4" style={{ color: "var(--subtle)" }}>Certifications</p>
              <ul className="space-y-3.5">
                {certs.map((c) => (
                  <li key={c.name} className="flex items-start gap-3">
                    <span className="mt-1 text-xs" style={{ color: "var(--accent)" }}>▹</span>
                    <div>
                      <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>{c.name}</p>
                      <p className="text-xs" style={{ color: "var(--muted)" }}>{c.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
