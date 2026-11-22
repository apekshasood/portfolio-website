"use client";

import { Reveal, SectionHeading } from "./Reveal";

const links = [
  { label: "Email", value: "apekshasood.96@gmail.com", href: "mailto:apekshasood.96@gmail.com" },
  { label: "Location", value: "Pune, India", href: null },
  { label: "LinkedIn", value: "in/apeksha-sood", href: "https://www.linkedin.com/in/apeksha-sood/" },
  { label: "GitHub", value: "github.com/apekshasood", href: "https://github.com/apekshasood" },
  { label: "Behance", value: "behance.net/apeksha13", href: "https://www.behance.net/apeksha13" },
  { label: "Resume", value: "Download PDF", href: "/resume/Apeksha_Sood_Resume.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28" style={{ scrollMarginTop: 64 }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="06" label="Contact">
          Let&apos;s build <span className="hl">something.</span>
        </SectionHeading>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <Reveal>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Open to full-stack and senior frontend roles. Remote, or relocation with visa sponsorship.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:apekshasood.96@gmail.com"
                className="font-display font-semibold text-sm px-6 py-3 rounded-[10px] text-white"
                style={{ background: "var(--accent)", boxShadow: "0 10px 26px var(--accent-soft)" }}>
                Email me →
              </a>
              <a href="/resume/Apeksha_Sood_Resume.pdf" target="_blank" rel="noreferrer"
                className="font-display font-semibold text-sm px-6 py-3 rounded-[10px]"
                style={{ background: "var(--surface)", border: "1px solid var(--line)", color: "var(--text)" }}>
                Download CV ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl border overflow-hidden" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
              {links.map((l, i) => {
                const inner = (
                  <div className="flex items-center justify-between px-6 py-4"
                    style={{ borderTop: i === 0 ? "none" : "1px solid var(--line)" }}>
                    <span className="font-mono text-xs uppercase tracking-[0.12em]" style={{ color: "var(--subtle)" }}>{l.label}</span>
                    <span className="text-sm font-medium" style={{ color: "var(--text)" }}>{l.value}</span>
                  </div>
                );
                return l.href ? (
                  <a key={l.label} href={l.href} target={l.href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer"
                    className="block transition-colors duration-150 hover:brightness-95"
                    style={{ background: "transparent" }}>
                    {inner}
                  </a>
                ) : (
                  <div key={l.label}>{inner}</div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
