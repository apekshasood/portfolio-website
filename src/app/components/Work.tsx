"use client";

import { Reveal, SectionHeading } from "./Reveal";

type Project = {
  title: string;
  context: string;
  points: string[];
  role?: string;
  stack: string[];
  links?: { label: string; href: string }[];
  note?: string;
};

const projects: Project[] = [
  {
    title: "LLM documentation assistant",
    context: "Saksoft · Fortune 500 client · 2024 – now",
    points: [
      "Used by 500+ engineers across 3 business units.",
      "FastAPI backend with SSO (OAuth 2.0 / OIDC), role-based access and a citation proxy, on GCP Cloud Run and Cloud SQL.",
      "React client with SSE streaming, chat history, clickable citations and retry states.",
      "Expert review flow for answers.",
    ],
    role: "Led a team of 5: frontend architecture, API contracts, code reviews and release sign-off.",
    stack: ["React", "TypeScript", "FastAPI", "OAuth 2.0 / OIDC", "GCP"],
    note: "Client work — no public link",
  },
  {
    title: "ClauseOk — AI contract risk checker",
    context: "Personal project · live",
    points: [
      "Next.js front end, Express gateway and FastAPI engine, deployed on Vercel and Cloud Run.",
      "Async jobs with Supabase Postgres and Realtime.",
      "Every quoted clause is verified against the source PDF.",
    ],
    stack: ["Next.js", "Express", "FastAPI", "Supabase", "Cloud Run"],
    links: [
      { label: "Live app", href: "https://clauseok.vercel.app" },
      { label: "GitHub", href: "https://github.com/apekshasood/contract-risk-analyzer" },
    ],
  },
  {
    title: "US consumer credit-card app",
    context: "Gojoko · 2022 – 2024",
    points: [
      "React Native app, live on the App Store and Play Store, with staged rollout behind LaunchDarkly and Firebase flags.",
      "Built onboarding, payments and the gateway layer.",
      "Replaced 5–6 REST calls with one GraphQL query (Apollo, Codegen).",
      "Monitoring with Datadog and Sentry.",
    ],
    stack: ["React Native", "GraphQL", "Apollo", "LaunchDarkly", "Datadog"],
  },
  {
    title: "Shared component library",
    context: "Gojoko",
    points: [
      "Accessible component library in an Nx monorepo, documented in Storybook.",
      "Used across 4 products.",
    ],
    stack: ["React", "Nx", "Storybook", "Accessibility"],
  },
];

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
  </svg>
);

export default function Work() {
  return (
    <section id="work" className="py-20 lg:py-28" style={{ scrollMarginTop: 64 }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="01" label="Selected work">
          Things I&apos;ve <span className="hl">shipped.</span>
        </SectionHeading>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <article className="rounded-2xl border p-6 h-full flex flex-col transition-all duration-200 hover:-translate-y-1"
                style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
                <p className="font-mono text-xs mb-2" style={{ color: "var(--subtle)" }}>{p.context}</p>
                <h3 className="font-display font-bold text-lg mb-4" style={{ color: "var(--text)" }}>{p.title}</h3>

                <ul className="space-y-2.5 mb-4">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                      <span style={{ color: "var(--muted)" }}>{pt}</span>
                    </li>
                  ))}
                </ul>

                {p.role && (
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
                    <span className="font-semibold" style={{ color: "var(--text)" }}>My role: </span>{p.role}
                  </p>
                )}

                <div className="mt-auto pt-2">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map((t) => (
                      <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md"
                        style={{ background: "var(--surface-2)", color: "var(--muted)" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.links ? (
                    <div className="flex flex-wrap gap-4">
                      {p.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold hover:underline"
                          style={{ color: "var(--accent)" }}>
                          {l.label} <ArrowIcon />
                        </a>
                      ))}
                    </div>
                  ) : p.note ? (
                    <p className="font-mono text-xs" style={{ color: "var(--subtle)" }}>{p.note}</p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
