"use client";

import { motion } from "framer-motion";
import Terminal from "./Terminal";

const stats = [
  { value: "6", unit: " years", label: "experience" },
  { value: "500", unit: "+", label: "users on the AI assistant I lead" },
  { value: "2", unit: "", label: "apps live on the App Store and Play Store" },
];

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative dot-grid overflow-hidden"
      style={{ scrollMarginTop: 64 }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full blur-[120px] opacity-[0.16]" style={{ background: "var(--accent)" }} />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full blur-[120px] opacity-[0.10]" style={{ background: "var(--accent-2)" }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-16 min-h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
        {/* Left */}
        <div>
          <motion.div custom={0} variants={rise} initial="hidden" animate="show"
            className="inline-flex items-center gap-2 font-mono text-xs px-3.5 py-[7px] rounded-full mb-6"
            style={{ color: "var(--accent)", border: "1px solid var(--line)", background: "var(--accent-soft)" }}>
            <span className="w-1.5 h-1.5 rounded-full blink" style={{ background: "var(--accent)" }} />
            open_to_work = true
          </motion.div>

          <motion.h1 custom={1} variants={rise} initial="hidden" animate="show"
            className="font-display font-bold leading-[1.03] tracking-[-0.035em] mb-5"
            style={{ fontSize: "clamp(2.5rem, 5.4vw, 4.3rem)", color: "var(--text)" }}>
            Apeksha Sood —<br /><span className="hl">Full-stack Engineer</span>
          </motion.h1>

          <motion.p custom={2} variants={rise} initial="hidden" animate="show"
            className="font-display font-semibold text-xl sm:text-2xl leading-[1.35] tracking-[-0.01em] max-w-[34ch] mb-4" style={{ color: "var(--text)" }}>
            I build production web apps, and the backends and AI features behind them.
          </motion.p>

          <motion.p custom={3} variants={rise} initial="hidden" animate="show"
            className="text-base leading-[1.7] max-w-[56ch] mb-3" style={{ color: "var(--muted)" }}>
            <strong style={{ color: "var(--text)" }}>6 years</strong> shipping React and TypeScript front ends with Node.js and
            FastAPI backends, for fintech, banking and enterprise clients.
          </motion.p>

          <motion.p custom={3} variants={rise} initial="hidden" animate="show"
            className="text-sm leading-[1.7] max-w-[56ch] mb-7" style={{ color: "var(--muted)" }}>
            <span className="font-mono text-xs font-semibold mr-2 px-2 py-0.5 rounded-md" style={{ color: "var(--accent)", background: "var(--accent-soft)" }}>Now</span>
            Leading the build of an LLM documentation assistant used by{" "}
            <strong style={{ color: "var(--text)" }}>500+ engineers</strong> at a Fortune 500 client.
          </motion.p>

          <motion.div custom={4} variants={rise} initial="hidden" animate="show" className="flex flex-wrap gap-3">
            <motion.a href="/resume/Apeksha_Sood_Resume.pdf" target="_blank" rel="noreferrer"
              whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
              className="font-display font-semibold text-sm px-6 py-3 rounded-[10px] text-white"
              style={{ background: "var(--accent)", boxShadow: "0 10px 26px var(--accent-soft)" }}>
              Download CV →
            </motion.a>
            <motion.a href="#contact" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
              className="font-display font-semibold text-sm px-6 py-3 rounded-[10px]"
              style={{ background: "var(--surface)", border: "1px solid var(--line)", color: "var(--text)" }}>
              Let&apos;s talk ↗
            </motion.a>
          </motion.div>

          <motion.div custom={5} variants={rise} initial="hidden" animate="show" className="flex flex-wrap gap-x-8 gap-y-5 mt-9">
            {stats.map((s) => (
              <div key={s.label} className="max-w-[170px]">
                <div className="font-display font-bold text-[25px]" style={{ color: "var(--text)" }}>
                  {s.value}<span style={{ color: "var(--accent)" }}>{s.unit}</span>
                </div>
                <div className="font-mono text-[11px] leading-snug mt-0.5" style={{ color: "var(--subtle)" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end lg:self-end lg:pb-4">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
