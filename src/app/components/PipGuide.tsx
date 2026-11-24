"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Pip from "./Pip";
import { sectionLabel } from "@/app/data/profile";
import { statusLine, useLiveStatus } from "./useLiveStatus";

type Stop = { text: string; live: [string, string] };
type Msg = { role: "user" | "assistant"; content: string; sources?: string[]; error?: boolean; streaming?: boolean };

const SUGGESTIONS = ["Has she led a team?", "Does she know FastAPI?", "What is ClauseOk?", "Is she open to relocation?"];

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

// Splits the model's trailing "SOURCES: a, b" line off the answer.
function splitSources(raw: string) {
  const m = raw.match(/\n?\s*SOURCES:\s*([^\n]*)\s*$/i);
  if (!m) return { text: raw.replace(/\n?\s*SOURCES?:?\s*$/i, ""), sources: [] as string[] };
  const sources = m[1]
    .split(",")
    .map((s) => s.trim().replace(/^\[|\]$/g, ""))
    .filter((s) => s && s.toLowerCase() !== "none" && sectionLabel(s));
  return { text: raw.slice(0, m.index).trim(), sources };
}

export default function PipGuide() {
  const [mode, setMode] = useState<"tour" | "chat" | "closed">("tour");
  const [stop, setStop] = useState(0);
  const [auto, setAuto] = useState(false);
  const [now, setNow] = useState<Date | null>(null);
  const live = useLiveStatus();

  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages]);

  async function ask(question: string) {
    const q = question.trim();
    if (!q || busy) return;
    const history = messages.filter((m) => !m.error).map(({ role, content }) => ({ role, content }));
    setMessages((m) => [...m, { role: "user", content: q }, { role: "assistant", content: "", streaming: true }]);
    setInput("");
    setBusy(true);
    const ac = new AbortController();
    abortRef.current = ac;
    let raw = "";
    const update = (patch: Partial<Msg>) =>
      setMessages((m) => {
        const copy = m.slice();
        copy[copy.length - 1] = { ...copy[copy.length - 1], ...patch };
        return copy;
      });
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, history }),
        signal: ac.signal,
      });
      if (!res.ok || !res.body) {
        const msg = (await res.text().catch(() => "")) || "Pip couldn't answer right now.";
        update({ content: msg, error: true, streaming: false });
        return;
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        raw += dec.decode(value, { stream: true });
        update({ content: splitSources(raw).text });
      }
      const { text, sources } = splitSources(raw);
      update({ content: text || "Sorry, I don't have an answer for that.", sources, streaming: false });
    } catch {
      if (ac.signal.aborted) update({ content: splitSources(raw).text || "Stopped.", streaming: false });
      else update({ content: "The connection dropped. Please try again.", error: true, streaming: false });
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    ask(input);
  }

  const lastUserQuestion = [...messages].reverse().find((m) => m.role === "user")?.content;

  if (mode === "closed") {
    return (
      <div className="flex justify-end">
        <button
          onClick={() => setMode("chat")}
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

      <section aria-label={mode === "tour" ? "Guided tour" : "Ask Pip about Apeksha"} className="pip-card rounded-[22px] p-5 sm:p-6">
        <div className="flex items-center justify-between mb-3 pl-6">
          <span className="text-sm">
            <b style={{ color: "var(--pc-accent)" }}>Pip</b>
            <span style={{ color: "var(--pc-muted)" }}>
              {mode === "tour" ? ` · Stop ${stop + 1} of ${stops.length}` : " · answers only from her resume"}
            </span>
          </span>
          <button
            aria-label="Close Pip"
            onClick={() => {
              abortRef.current?.abort();
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

        {mode === "tour" ? (
          <>
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
            <div className="flex gap-1 mb-4" aria-hidden="true">
              {stops.map((_, k) => (
                <span key={k} className="flex-1 h-[5px] rounded-full transition-colors" style={{ background: k <= stop ? "var(--pc-accent)" : "var(--pc-line)" }} />
              ))}
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
                onClick={() => (last ? setMode("chat") : setStop((s) => s + 1))}
                className="ml-auto whitespace-nowrap text-sm font-bold px-4 sm:px-5 py-2.5 rounded-full"
                style={{ background: "var(--pc-accent)", color: "var(--pc-on-accent)" }}
              >
                {last ? "Ask Pip ›" : "Next ›"}
              </button>
            </div>
          </>
        ) : (
          <>
            <div ref={listRef} className="flex flex-col gap-3 max-h-[300px] min-h-[120px] overflow-y-auto pr-1 mb-3" aria-live="polite">
              {messages.length === 0 && (
                <p className="text-[15px] leading-relaxed">Ask me anything about Apeksha&apos;s work. I only use her resume, and I show my sources.</p>
              )}
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="self-end max-w-[85%] text-sm leading-relaxed px-3.5 py-2.5 rounded-[14px_14px_4px_14px] " style={{ background: "var(--pc-accent)", color: "var(--pc-on-accent)" }}>
                    {m.content}
                  </div>
                ) : (
                  <div key={i} className="self-start max-w-[92%] text-sm leading-relaxed px-3.5 py-2.5 rounded-[14px_14px_14px_4px]" style={{ background: "var(--pc-soft)" }}>
                    {m.content || (m.streaming ? <span style={{ color: "var(--pc-muted)" }}>Thinking…</span> : null)}
                    {m.sources && m.sources.length > 0 && (
                      <span className="flex flex-wrap gap-1.5 mt-2">
                        {m.sources.map((s, k) => (
                          <span key={s} className="font-mono text-[11px] px-2 py-1 rounded-md" style={{ border: "1px solid var(--pc-line)", color: "var(--pc-accent)" }}>
                            [{k + 1}] {sectionLabel(s)}
                          </span>
                        ))}
                      </span>
                    )}
                    {m.error && i === messages.length - 1 && lastUserQuestion && (
                      <button
                        onClick={() => {
                          setMessages((all) => all.slice(0, -2));
                          ask(lastUserQuestion);
                        }}
                        className="block mt-2 text-xs font-semibold underline"
                        style={{ color: "var(--pc-accent)" }}
                      >
                        Try again
                      </button>
                    )}
                  </div>
                ),
              )}
            </div>
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => ask(s)} className="text-[13px] px-3 py-2 rounded-full" style={{ border: "1px solid var(--pc-line)", background: "var(--pc-btn)" }}>
                    {s}
                  </button>
                ))}
              </div>
            )}
            <form onSubmit={onSubmit} className="flex gap-2">
              <label htmlFor="ask-pip" className="sr-only">
                Ask a question about Apeksha
              </label>
              <input
                id="ask-pip"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={400}
                placeholder="Ask about her experience…"
                className="flex-1 min-w-0 text-sm px-3.5 py-3 rounded-xl outline-none focus:ring-2"
                style={{ background: "var(--pc-btn)", border: "1px solid var(--pc-line)", color: "inherit" }}
              />
              {busy ? (
                <button type="button" onClick={() => abortRef.current?.abort()} className="text-sm font-semibold px-4 rounded-xl" style={{ background: "var(--pc-btn)", border: "1px solid var(--pc-line)" }}>
                  Stop
                </button>
              ) : (
                <button type="submit" aria-label="Send question" className="w-12 h-12 rounded-xl grid place-items-center " style={{ background: "var(--pc-accent)", color: "var(--pc-on-accent)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </button>
              )}
            </form>
            <button onClick={() => { setStop(0); setMode("tour"); }} className="mt-3 text-xs font-semibold" style={{ color: "var(--pc-muted)" }}>
              ‹ Back to the tour
            </button>
          </>
        )}
      </section>
    </div>
  );
}
