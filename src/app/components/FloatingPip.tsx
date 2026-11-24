"use client";

import { useEffect, useState } from "react";
import Pip from "./Pip";
import PipChat from "./PipChat";
import { chime, say, setSoundOn, soundOn } from "./pipSound";

// Pip in the bottom-right corner. Appears once the visitor scrolls past the hero;
// a click plays a chime, Pip says hello, and the chat opens.
export default function FloatingPip() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const [sound, setSound] = useState(true);

  useEffect(() => {
    setSound(soundOn());
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Show the "Need help?" bubble for a few seconds the first time Pip appears.
  useEffect(() => {
    if (!visible || open) return;
    let seen = false;
    try {
      seen = sessionStorage.getItem("pip-hint") === "1";
    } catch {}
    if (seen) return;
    setHint(true);
    try {
      sessionStorage.setItem("pip-hint", "1");
    } catch {}
    const t = setTimeout(() => setHint(false), 6000);
    return () => clearTimeout(t);
  }, [visible, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function openChat() {
    setOpen(true);
    setHint(false);
    chime();
    setTimeout(() => say("Hi! How can I help you?"), 250);
  }

  function toggleSound() {
    const next = !sound;
    setSound(next);
    setSoundOn(next);
    if (next) chime();
  }

  if (!visible && !open) return null;

  return (
    <div className="fixed z-50 right-4 bottom-4 sm:right-6 sm:bottom-6 flex flex-col items-end gap-3">
      {open && (
        <section
          role="dialog"
          aria-label="Ask Pip about Apeksha"
          className="pip-card pip-pop rounded-[22px] p-5 w-[min(380px,calc(100vw-2rem))]"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="flex items-center gap-2 text-sm">
              <Pip size={32} />
              <span>
                <b style={{ color: "var(--pc-accent)" }}>Pip</b>
                <span style={{ color: "var(--pc-muted)" }}> · answers only from her resume</span>
              </span>
            </span>
            <span className="flex gap-1.5">
              <button
                onClick={toggleSound}
                aria-label={sound ? "Mute Pip" : "Unmute Pip"}
                aria-pressed={!sound}
                className="w-10 h-10 rounded-full grid place-items-center"
                style={{ background: "var(--pc-btn)", border: "1px solid var(--pc-line)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M11 5L6 9H3v6h3l5 4z" />
                  {sound ? <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" /> : <path d="M22 9l-6 6M16 9l6 6" />}
                </svg>
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close Pip"
                className="w-10 h-10 rounded-full grid place-items-center"
                style={{ background: "var(--pc-btn)", border: "1px solid var(--pc-line)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </svg>
              </button>
            </span>
          </div>
          <PipChat autoFocus />
        </section>
      )}

      {!open && (
        <div className="flex items-end gap-2">
          {hint && (
            <span className="pip-card pip-pop rounded-2xl rounded-br-sm px-4 py-2.5 text-sm font-semibold mb-6">
              Need help? Ask me!
            </span>
          )}
          <button onClick={openChat} aria-label="Ask Pip about Apeksha" className="pip-pop rounded-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)]">
            <span className="pip-bob block">
              <Pip size={72} />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
