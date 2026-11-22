"use client";

import { Reveal, SectionHeading } from "./Reveal";

const jobs = [
  {
    company: "Saksoft Technologies Pvt. Ltd.",
    role: "UI Developer",
    location: "Pune",
    period: "Oct 2024 – Present",
    current: true,
    points: [
      "Lead frontend architecture initiatives across applications, ensuring performance, scalability and consistency.",
      "Built an AI-powered document-intelligence platform end to end — React + TypeScript front end with a Python/FastAPI backend on the cloud.",
      "Integrated LLM services through FastAPI endpoints, handling prompt orchestration, response handling and error/fallback states.",
      "Designed the conversational chat interface — token-by-token streaming responses, chat history, session state and source/citation rendering.",
      "Implemented SSO-based authentication & authorization with token handling, protected routes and session refresh.",
      "Built resilient document upload, storage and retrieval flows with progress, retry and failure recovery.",
      "Migrated a legacy Angular dashboard to a modern React stack; introduced Storybook as a shared design system and mentor junior developers.",
    ],
  },
  {
    company: "Gojoko Technology Pvt. Ltd.",
    role: "Frontend Developer",
    location: "Noida",
    period: "Oct 2022 – Oct 2024",
    current: false,
    points: [
      "Developed and maintained product websites and web apps in React.js, Next.js and Angular.",
      "Led development of Gojoko's new website in Next.js — a 30% gain in performance metrics and improved engagement.",
      "Built a Storybook-driven component library in an Nx monorepo, reducing duplication by ~35%.",
      "Architected the Nx monorepo structure, standardizing build and test pipelines.",
      "Worked on a credit-card product in React Native (−20% load times) and integrated GraphQL (−15% data-fetching times).",
    ],
  },
  {
    company: "Newgen Software Pvt. Ltd.",
    role: "Frontend Developer",
    location: "Noida",
    period: "Sept 2020 – Oct 2022",
    current: false,
    points: [
      "Led a major process re-engineering project in React.js and React Native — 25% higher process efficiency, 15% fewer communication errors.",
      "Implemented micro-frontend architecture with Webpack Module Federation, cutting build times by 20%.",
      "Established Storybook within the design system for reusable component documentation.",
      "Migrated 20+ legacy interfaces from JSP to Angular, cutting bug reports by 30%.",
      "Implemented a CI/CD pipeline, reducing time-to-deployment from 5 days to 2 hours; peer reviews cut post-deployment defects by 40%.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28" style={{ scrollMarginTop: 64, background: "var(--bg-2)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="03" label="Experience">
          Where I&apos;ve <span className="hl">built things.</span>
        </SectionHeading>

        <div className="flex flex-col">
          {jobs.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.12}>
              <div className="relative flex gap-6 sm:gap-8 pb-12">
                {/* Spine */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full mt-1.5 z-10"
                    style={{
                      background: job.current ? "var(--accent)" : "var(--surface)",
                      border: `2px solid ${job.current ? "var(--accent)" : "var(--line)"}`,
                      boxShadow: job.current ? "0 0 0 4px var(--accent-soft)" : "none",
                    }} />
                  {i < jobs.length - 1 && <div className="flex-1 w-px mt-2" style={{ background: "var(--line)" }} />}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md" style={{ background: "var(--surface-2)", color: "var(--muted)" }}>
                      {job.period}
                    </span>
                    <span className="font-mono text-xs" style={{ color: "var(--subtle)" }}>{job.location}</span>
                    {job.current && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide"
                        style={{ background: "var(--accent-soft)", color: "var(--accent)", border: "1px solid var(--accent)" }}>
                        Current
                      </span>
                    )}
                  </div>

                  <div className="rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1"
                    style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
                    <h3 className="font-display font-bold text-lg mb-0.5" style={{ color: "var(--text)" }}>{job.role}</h3>
                    <p className="text-sm font-semibold mb-5" style={{ color: "var(--accent)" }}>{job.company}</p>
                    <ul className="space-y-2.5">
                      {job.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm leading-relaxed">
                          <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                          <span style={{ color: "var(--muted)" }}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
