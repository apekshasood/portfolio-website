// The only facts "Ask Pip" may use. Keep this in sync with the resume.
// Each section has an id so answers can cite it as a source chip.

export type ProfileSection = { id: string; label: string; text: string };

export const profileSections: ProfileSection[] = [
  {
    id: "summary",
    label: "Summary",
    text:
      "Apeksha Sood is a full-stack engineer in Pune, India, with 6 years of experience shipping production web apps on React/TypeScript front ends and Python (FastAPI) or Node.js backends. She uses Claude Code and GitHub Copilot daily.",
  },
  {
    id: "saksoft-llm",
    label: "Saksoft · LLM assistant",
    text:
      "Full Stack Developer at Saksoft Technologies, Pune (Oct 2024 – present). Built and owns an LLM documentation assistant for a Fortune 500 industrial client, used by 500+ engineers across 3 business units. Backend: FastAPI services with SSO (OAuth 2.0 / OIDC), role-based access and a citation proxy on GCP Cloud Run and Cloud SQL. Frontend: React/TypeScript client with Server-Sent Events streaming, conversation history and clickable source citations. Made streaming reliable end to end: upstream timeouts and outages surface as clear retry states, traced through structured logs, health checks and pytest coverage. Built a review workflow where subject-matter experts mark answers as verified. Built live voice input: browser audio streamed over WebSockets to a speech-to-text service with real-time transcription. Led the five-person team on this build: frontend architecture, task breakdown, code reviews for two junior developers, API contracts with backend, and release sign-off.",
  },
  {
    id: "saksoft-other",
    label: "Saksoft · other client work",
    text:
      "At Saksoft she also deployed service images with Docker and Kubernetes on a follow-on client project, delivered in about 2 weeks; migrated a monitoring dashboard covering 5 sites from Angular to React, tested with Jest, React Testing Library and Playwright; built configuration-driven React front ends for a credit-bureau client (one codebase for several regional entities, themed from Adobe CMS) and co-built its shared Storybook component library; added Recurly payments with hosted fields; built a Razorpay checkout flow, added i18n with a language switcher, and released features behind LaunchDarkly and Firebase feature flags; shipped two React Native apps for a credit union, live on the App Store and Play Store: a loan app (multi-step form, EMI calculator, e-signing) and a credit card app (card freeze, payments, push notifications, biometric login).",
  },
  {
    id: "gojoko",
    label: "Gojoko",
    text:
      "Frontend Developer at Gojoko Technology, Noida (Oct 2022 – Sep 2024). Built a consumer credit-card app in React Native for the US market, released on the App Store and Play Store through a staged rollout (friends-and-family beta, then public) with features behind LaunchDarkly and Firebase flags; built the onboarding flow, in-app payment flow and gateway integration. Replaced 5–6 separate REST calls on the profile screen with a single GraphQL query using Apollo Client and GraphQL Code Generator, and applied the same approach to other screens. Set up monitoring with Datadog and Sentry. Built a shared, accessible component library from scratch in an Nx monorepo with Storybook, used across 4 customer-facing products. Delivered a Next.js marketing site and an Angular + Tailwind product site on AWS S3, CloudFront and Lambda.",
  },
  {
    id: "newgen",
    label: "Newgen",
    text:
      "Frontend Developer at Newgen Software, Noida (Sep 2020 – Oct 2022). Built Node.js (Express) backend features for a form builder and migrated 20+ legacy JSP screens to Angular for a public-sector bank's live banking workflow. Introduced micro-frontends with Webpack Module Federation and set up the CI/CD release pipeline.",
  },
  {
    id: "clauseok",
    label: "ClauseOk",
    text:
      "ClauseOk (personal project, live at clauseok.vercel.app, code at github.com/apekshasood/contract-risk-analyzer): an AI contract risk checker. Next.js front end, Express gateway and FastAPI engine on Vercel and Cloud Run; async jobs with Supabase Postgres and Realtime. It audits contract PDFs for risky and missing clauses, and every quoted clause is verified against the PDF text.",
  },
  {
    id: "convrt",
    label: "Convrt",
    text:
      "Convrt (personal project, live at convrt.in): a CRM for small businesses, built solo from frontend to database with Vite + React, Supabase, the Claude API and Cloudflare Pages. A small business uses it to manage leads from Meta Ads and WhatsApp in one place, with Claude API features that stream responses.",
  },
  {
    id: "skills",
    label: "Skills",
    text:
      "Backend: Python (FastAPI), Node.js (Express), REST APIs, PostgreSQL, Supabase, OAuth 2.0 / OIDC SSO, role-based access control, structured logging, pytest. AI / LLM: LLM application integration, response streaming (SSE), source citations, speech-to-text over WebSockets, Claude API. Frontend: React, TypeScript, JavaScript, Next.js, React Native, Angular, Tailwind CSS, accessibility. State and data: Redux, Zustand, Apollo Client, GraphQL, WebSockets. Cloud and DevOps: GCP (Cloud Run, Cloud SQL), AWS (S3, CloudFront, Lambda), Docker, Kubernetes, CI/CD, Datadog, Sentry. Architecture and testing: Nx monorepo, Storybook, micro-frontends, Vite, i18n, feature flags, Jest, React Testing Library, Playwright.",
  },
  {
    id: "education",
    label: "Education",
    text: "B.Tech in Computer Science, Amity University, Noida (2016–2020). Meta Certified React Developer.",
  },
  {
    id: "availability",
    label: "Availability",
    text:
      "Open to full-stack and senior frontend roles: remote, or relocation with visa sponsorship. Contact: apekshasood.96@gmail.com, linkedin.com/in/apeksha-sood, github.com/apekshasood.",
  },
];

export const sectionLabel = (id: string) =>
  profileSections.find((s) => s.id === id)?.label;
