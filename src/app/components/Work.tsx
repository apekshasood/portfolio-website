"use client";

import { ReactNode, useEffect, useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { useLiveStatus } from "./useLiveStatus";
import { PROJECT_EVENT } from "./pipJump";

type Project = {
  id: string;
  title: string;
  context: string;
  frame: string;
  points: string[];
  role?: string;
  stack: string[];
  links?: { label: string; href: string }[];
  liveId?: string;
  visual: ReactNode;
};

const Chip = ({ children, strong = false }: { children: ReactNode; strong?: boolean }) => (
  <span
    className="font-mono text-[12px] px-2.5 py-2 rounded-lg whitespace-nowrap"
    style={
      strong
        ? { background: "var(--accent-soft)", border: "1px solid var(--accent)", color: "var(--accent)" }
        : { background: "var(--surface)", border: "1px solid var(--line)", color: "var(--text)" }
    }
  >
    {children}
  </span>
);

const Wire = ({ delay = 0 }: { delay?: number }) => (
  <span className="relative w-8 h-[2px] flex-shrink-0" style={{ background: "var(--line)" }} aria-hidden="true">
    <span className="packet" style={{ animationDelay: `${delay}s` }} />
  </span>
);

const Flow = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-wrap items-center justify-center gap-2.5">
    {steps.map((s, i) => (
      <span key={s} className="flex items-center gap-2.5">
        <Chip strong={i === steps.length - 1}>{s}</Chip>
        {i < steps.length - 1 && <Wire delay={i * 0.9} />}
      </span>
    ))}
  </div>
);

const projects: Project[] = [
  {
    id: "clauseok",
    title: "ClauseOk — AI contract risk checker",
    context: "Personal project · live",
    frame: "clauseok.vercel.app",
    points: [
      "Next.js front end, Express gateway and FastAPI engine on Vercel and Cloud Run.",
      "Async jobs with Supabase Postgres and Realtime.",
      "Every quoted clause is verified against the source PDF.",
    ],
    stack: ["Next.js", "Express", "FastAPI", "Supabase", "Cloud Run"],
    links: [
      { label: "Live app", href: "https://clauseok.vercel.app" },
      { label: "GitHub", href: "https://github.com/apekshasood/contract-risk-analyzer" },
    ],
    liveId: "clauseok",
    visual: <Flow steps={["PDF", "Express", "Supabase job", "FastAPI", "quote ✓ vs PDF"]} />,
  },
  {
    id: "convrt",
    title: "Convrt — CRM for small businesses",
    context: "Personal project · built solo · live",
    frame: "convrt.in",
    points: [
      "Built solo, frontend to database.",
      "A small business uses it to manage leads from Meta Ads and WhatsApp in one place.",
      "Claude API features that stream responses.",
    ],
    stack: ["Vite", "React", "Supabase", "Claude API", "Cloudflare Pages"],
    links: [{ label: "Live app", href: "https://convrt.in" }],
    liveId: "convrt",
    visual: <Flow steps={["Meta Ads leads", "WhatsApp", "one CRM", "Claude API, streamed"]} />,
  },
  {
    id: "llm",
    title: "LLM documentation assistant",
    context: "Saksoft · Fortune 500 client · 2024 – now",
    frame: "client work",
    points: [
      "Used by 500+ engineers across 3 business units.",
      "FastAPI backend with SSO (OAuth 2.0 / OIDC), role-based access and a citation proxy, on GCP Cloud Run and Cloud SQL.",
      "React client with SSE streaming, chat history, clickable citations and retry states.",
      "Expert review flow for answers.",
    ],
    role: "Led a team of 5: frontend architecture, API contracts, code reviews and release sign-off.",
    stack: ["React", "TypeScript", "FastAPI", "OAuth 2.0 / OIDC", "GCP"],
    visual: (
      <div className="flex flex-col items-center gap-3">
        <span className="font-display font-bold text-4xl" style={{ color: "var(--text)" }}>
          500<span style={{ color: "var(--accent)" }}>+</span> <span className="text-base font-medium" style={{ color: "var(--muted)" }}>engineers</span>
        </span>
        <div className="flex flex-wrap justify-center gap-2">
          {["SSO", "Role-based access", "Citation proxy", "SSE streaming", "Expert review"].map((c) => (
            <Chip key={c}>{c}</Chip>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "card",
    title: "US consumer credit-card app",
    context: "Gojoko · 2022 – 2024",
    frame: "App Store · Play Store",
    points: [
      "React Native, live on both stores, staged rollout behind LaunchDarkly and Firebase flags.",
      "Built onboarding, payments and the gateway layer.",
      "Replaced 5–6 REST calls with one GraphQL query (Apollo, Codegen).",
      "Monitoring with Datadog and Sentry.",
    ],
    stack: ["React Native", "GraphQL", "Apollo", "LaunchDarkly", "Datadog"],
    visual: (
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-1.5">
          {["profile", "balance", "statements", "…"].map((c) => (
            <span key={c} className="font-mono text-[11px] px-2 py-1 rounded" style={{ border: "1px dashed var(--line)", color: "var(--muted)" }}>
              GET /{c}
            </span>
          ))}
        </div>
        <Wire />
        <Chip strong>1 GraphQL query</Chip>
      </div>
    ),
  },
  {
    id: "library",
    title: "Shared component library",
    context: "Gojoko",
    frame: "Storybook",
    points: ["Accessible component library in an Nx monorepo, documented in Storybook.", "Used across 4 products."],
    stack: ["React", "Nx", "Storybook", "Accessibility"],
    visual: (
      <div className="flex flex-col items-center gap-3">
        <Chip strong>one library</Chip>
        <div className="grid grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((n) => (
            <span key={n} className="font-mono text-[11px] px-2.5 py-2 rounded-lg text-center" style={{ background: "var(--surface)", border: "1px solid var(--line)", color: "var(--muted)" }}>
              product {n}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export default function Work() {
  const [picked, setPicked] = useState(0);
  const live = useLiveStatus();
  const p = projects[picked];

  // Pip's citations can open a project here.
  useEffect(() => {
    const onPick = (e: Event) => {
      const i = projects.findIndex((x) => x.id === (e as CustomEvent<string>).detail);
      if (i >= 0) setPicked(i);
    };
    window.addEventListener(PROJECT_EVENT, onPick);
    return () => window.removeEventListener(PROJECT_EVENT, onPick);
  }, []);
  const status = p.liveId ? live?.find((r) => r.id === p.liveId) : undefined;

  return (
    <section id="work" className="py-20 lg:py-28" style={{ scrollMarginTop: 64 }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading index="01" label="Selected work">
          Things I&apos;ve <span className="hl">shipped.</span>
        </SectionHeading>

        <Reveal>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 items-start">
            <ul className="border-t" style={{ borderColor: "var(--line)" }} role="list">
              {projects.map((proj, i) => {
                const on = i === picked;
                return (
                  <li key={proj.id}>
                    <button
                      onClick={() => setPicked(i)}
                      aria-pressed={on}
                      className="w-full flex items-start gap-4 text-left px-4 py-5 border-b transition-colors"
                      style={{
                        borderColor: "var(--line)",
                        background: on ? "var(--accent-soft)" : "transparent",
                        boxShadow: on ? "inset 3px 0 0 var(--accent)" : "none",
                      }}
                    >
                      <span className="font-mono text-xs pt-1 w-7 flex-shrink-0" style={{ color: on ? "var(--accent)" : "var(--muted)" }}>
                        0{i + 1}
                      </span>
                      <span className="flex flex-col gap-1">
                        <span className="font-display font-semibold text-lg" style={{ color: "var(--text)" }}>{proj.title}</span>
                        <span className="text-sm" style={{ color: "var(--muted)" }}>{proj.context}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <article id="work-panel" key={p.id} className="lift rounded-2xl border overflow-hidden" style={{ background: "var(--surface)", borderColor: "var(--line)" }} aria-live="polite">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
                <span className="ml-3 font-mono text-xs" style={{ color: "var(--muted)" }}>{p.frame}</span>
                {p.liveId && (
                  <span className="ml-auto flex items-center gap-2 font-mono text-[11px]" style={{ color: status?.up ? "#2BB673" : "var(--muted)" }}>
                    <span className={status?.up ? "live-dot w-1.5 h-1.5 rounded-full" : "w-1.5 h-1.5 rounded-full"} style={{ background: status?.up ? "#3DDC97" : "var(--subtle)" }} />
                    {!live ? "checking…" : status?.up ? `up · ${status.ms} ms` : "no answer"}
                  </span>
                )}
              </div>

              <div className="min-h-[200px] px-6 py-10 grid place-items-center dot-grid" style={{ background: "var(--surface-2)" }}>
                {p.visual}
              </div>

              <div className="p-6 sm:p-7">
                <p className="font-mono text-xs mb-1.5" style={{ color: "var(--muted)" }}>{p.context}</p>
                <h3 className="font-display font-bold text-2xl tracking-[-0.02em] mb-4" style={{ color: "var(--text)" }}>{p.title}</h3>
                <ul className="space-y-2.5 mb-4">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-sm leading-relaxed">
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
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-md" style={{ background: "var(--surface-2)", color: "var(--muted)" }}>{t}</span>
                  ))}
                </div>
                {p.links ? (
                  <div className="flex flex-wrap gap-5">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="font-mono text-xs font-semibold hover:underline" style={{ color: "var(--accent)" }}>
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
                    {p.id === "llm" ? "Client work — no public link" : "Company work — no public link"}
                  </p>
                )}
              </div>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
