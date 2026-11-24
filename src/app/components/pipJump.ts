"use client";

// Where each citation in Pip's answers leads on the page.
// anchor = element id to scroll to; project = which Selected work item to open.
const targets: Record<string, { anchor: string; project?: string }> = {
  summary: { anchor: "home" },
  "saksoft-llm": { anchor: "work", project: "llm" },
  "saksoft-other": { anchor: "exp-saksoft" },
  gojoko: { anchor: "exp-gojoko" },
  newgen: { anchor: "exp-newgen" },
  clauseok: { anchor: "work", project: "clauseok" },
  convrt: { anchor: "work", project: "convrt" },
  skills: { anchor: "skills" },
  education: { anchor: "education" },
  availability: { anchor: "contact" },
};

export const PROJECT_EVENT = "pip:select-project";
export const POINT_EVENT = "pip:point";

// Scrolls to the part of the site a citation comes from, makes it glow,
// and tells floating Pip to go and point at it.
export function jumpTo(sourceId: string) {
  const t = targets[sourceId];
  if (!t) return;
  if (t.project) window.dispatchEvent(new CustomEvent(PROJECT_EVENT, { detail: t.project }));
  const el = document.getElementById(t.anchor);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  const glow = (t.project && document.getElementById("work-panel")) || el;
  glow.classList.remove("pip-highlight");
  void glow.offsetWidth; // restart the animation
  glow.classList.add("pip-highlight");
  setTimeout(() => glow.classList.remove("pip-highlight"), 2600);
  window.dispatchEvent(new CustomEvent(POINT_EVENT, { detail: glow.id }));
}
