"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { sectionLabel } from "@/app/data/profile";

type Msg = { role: "user" | "assistant"; content: string; sources?: string[]; error?: boolean; streaming?: boolean };

const SUGGESTIONS = ["Has she led a team?", "Does she know FastAPI?", "What is ClauseOk?", "Is she open to relocation?"];

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

// The "Ask Pip" chat body. Used inside the hero card and the floating Pip panel.
export default function PipChat({ onBack, autoFocus = false }: { onBack?: () => void; autoFocus?: boolean }) {
  const inputId = useId();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

  // Stop any answer still streaming when the chat closes.
  useEffect(() => () => abortRef.current?.abort(), []);

  return (
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
        <label htmlFor={inputId} className="sr-only">
          Ask a question about Apeksha
        </label>
        <input
          id={inputId}
          autoFocus={autoFocus}
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
      {onBack && (
        <button onClick={onBack} className="mt-3 text-xs font-semibold" style={{ color: "var(--pc-muted)" }}>
          ‹ Back to the tour
        </button>
      )}
    </>
  );
}
