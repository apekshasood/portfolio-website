"use client";

import { useEffect, useState } from "react";
import Pip from "./Pip";
import PipChat from "./PipChat";
import { chime, say } from "./pipSound";
import { statusLine, useLiveStatus } from "./useLiveStatus";

type Stop = { text: string; live: [string, string] };


function puneNow(now: Date) {
  const time = now.toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", timeZone: "Asia/Kolkata" });
  const hour = Number(now.toLocaleString("en-GB", { hour: "2-digit", hour12: false, timeZone: "Asia/Kolkata" }));
  const mood =
    hour >= 9 && hour < 19
      ? "She's probably shipping something."
      : hour >= 19 && hour < 23
        ? "Evening: probably on a side project."
        : "Probably asleep. Leave a message and she'll reply.";
  return { time, mood };
}

export default function PipGuide() {
  const [mode, setMode] = useState<"tour" | "chat" | "closed">("tour");
  const [stop, setStop] = useState(0);
  const [auto, setAuto] = useState(false);
  const [now, setNow] = useState<Date | null>(null);
  const live = useLiveStatus();


  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);

  const pune = now ? puneNow(now) : null;
  const stops: Stop[] = [
    {
      text: "Hi, I'm Pip, Apeksha's guide! She builds web apps, and the backends and AI features behind them.",
      live: [pune ? `It's ${pune.time} in Pune right now.` : "Checking the time in Pune…", pune?.mood ?? ""],
    },
    {
      text: "Right now she leads the build of an LLM documentation assistant at a Fortune 500 client.",
      live: ["500+ engineers use it,", "across 3 business units."],
    },
    {
      text: "ClauseOk is her contract risk checker. Every quoted clause is checked against the PDF.",
      live: [statusLine(live, "clauseok", "ClauseOk"), "Try it: clauseok.vercel.app"],
    },
    {
      text: "Convrt is a CRM she built solo, from frontend to database. A real small business uses it.",
      live: [statusLine(live, "convrt", "Convrt"), "convrt.in"],
    },
    {
      text: "Want to know more? Ask me anything about her work. I only answer from her resume, with sources.",
      live: ["Open to full-stack and senior frontend roles.", "Remote, or relocation with visa sponsorship."],
    },
  ];
  const last = stop === stops.length - 1;

  useEffect(() => {
    if (!auto || mode !== "tour") return;
    if (last) {
      setAuto(false);
      return;
    }
    const t = setTimeout(() => setStop((s) => s + 1), 4500);
    return () => clearTimeout(t);
  }, [auto, stop, last, mode]);



  if (mode === "closed") {
    return (
      <div className="flex justify-end">
        <button
          onClick={() => { setMode("chat"); chime(); setTimeout(() => say("Hi! How can I help you?"), 250); }}
          className="flex items-center gap-2 font-display font-semibold text-sm pl-2 pr-5 py-2 rounded-full"
          style={{ background: "var(--accent)", color: "#0B0E18" }}
        >
          <Pip size={40} /> Ask Pip about Apeksha
        </button>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[440px] pt-8 pl-10">
      <div className="pip-bob absolute left-0 top-0 z-10">
        <Pip size={84} />
      </div>

      <section aria-label="Pip, Apeksha's guide" className="pip-card rounded-[22px] p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2 mb-4 pl-6">
          <div role="tablist" aria-label="Pip" className="flex p-1 rounded-full" style={{ background: "var(--pc-soft)", border: "1px solid var(--pc-line)" }}>
            {([
              ["tour", "Guide"],
              ["chat", "Ask Pip"],
            ] as const).map(([id, label]) => (
              <button
                key={id}
                role="tab"
                aria-selected={mode === id}
                onClick={() => {
                  if (id === "chat" && mode !== "chat") { chime(); setTimeout(() => say("Hi! How can I help you?"), 250); }
                  setAuto(false);
                  setMode(id);
                }}
                className="whitespace-nowrap text-[13px] font-semibold px-3.5 py-1.5 rounded-full transition-colors"
                style={mode === id ? { background: "var(--pc-accent)", color: "var(--pc-on-accent)" } : { color: "var(--pc-muted)" }}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            aria-label="Close Pip"
            onClick={() => {
              setAuto(false);
              setMode("closed");
            }}
            className="w-11 h-11 rounded-full grid place-items-center"
            style={{ background: "var(--pc-btn)", border: "1px solid var(--pc-line)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12" />
              <path d="M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div role="tabpanel" hidden={mode !== "tour"}>
            <p className="text-[15.5px] leading-relaxed mb-4 min-h-[3.2em]" aria-live="polite">
              {stops[stop].text}
            </p>
            <div className="rounded-2xl px-4 py-3 mb-4 text-sm leading-relaxed" style={{ background: "var(--pc-soft)" }}>
              <span className="flex items-center gap-2 font-semibold mb-1" style={{ color: "var(--pc-live)" }}>
                <span className="live-dot w-2 h-2 rounded-full" style={{ background: "var(--pc-live)" }} />
                Live
              </span>
              <span className="block">{stops[stop].live[0]}</span>
              <span className="block" style={{ color: "var(--pc-muted)" }}>
                {stops[stop].live[1]}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-1 gap-1" aria-hidden="true">
                {stops.map((_, k) => (
                  <span key={k} className="flex-1 h-[5px] rounded-full transition-colors" style={{ background: k <= stop ? "var(--pc-accent)" : "var(--pc-line)" }} />
                ))}
              </div>
              <span className="text-xs whitespace-nowrap" style={{ color: "var(--pc-muted)" }}>
                {stop + 1} of {stops.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setStop((s) => Math.max(0, s - 1))}
                disabled={stop === 0}
                className="whitespace-nowrap text-sm font-semibold px-3 sm:px-4 py-2.5 rounded-full disabled:opacity-40"
                style={{ background: "var(--pc-btn)", border: "1px solid var(--pc-line)" }}
              >
                ‹ Back
              </button>
              <button
                onClick={() => setAuto((a) => !a)}
                className="whitespace-nowrap text-sm font-semibold px-3 sm:px-4 py-2.5 rounded-full"
                style={{ background: "var(--pc-btn)", border: "1px solid var(--pc-line)" }}
              >
                {auto ? "❚❚ Pause" : "▶ Auto-play"}
              </button>
              <button
                onClick={() => { if (last) { setMode("chat"); chime(); setTimeout(() => say("Hi! How can I help you?"), 250); } else setStop((s) => s + 1); }}
                className="ml-auto whitespace-nowrap text-sm font-bold px-4 sm:px-5 py-2.5 rounded-full"
                style={{ background: "var(--pc-accent)", color: "var(--pc-on-accent)" }}
              >
                {last ? "Ask Pip ›" : "Next ›"}
              </button>
            </div>
        </div>
        <div role="tabpanel" hidden={mode !== "chat"}>
          <PipChat />
        </div>
      </section>
    </div>
  );
}
