"use client";

import { motion } from "framer-motion";
import Terminal from "./Terminal";

const stats = [
  { value: "5.8", unit: "y", label: "experience" },
  { value: "40", unit: "%", label: "faster apps" },
  { value: "70", unit: "%", label: "fewer bugs" },
  { value: "3", unit: "", label: "companies" },
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

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-16 min-h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 items-center">
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
            Building web products,<br />end to end.<br />Including the <span className="hl">AI parts.</span>
          </motion.h1>

          <motion.p custom={2} variants={rise} initial="hidden" animate="show"
            className="text-base leading-[1.7] max-w-[52ch] mb-2.5" style={{ color: "var(--muted)" }}>
            Frontend engineer with <strong style={{ color: "var(--text)" }}>5.8 years</strong> building web &amp; mobile apps in
            React, React Native &amp; Angular. Currently a <strong style={{ color: "var(--text)" }}>UI Developer at Saksoft</strong>,
            where I work across the full stack on an <span style={{ color: "var(--accent)", fontWeight: 600 }}>AI/LLM platform</span> —
            React front end, Python/FastAPI backend.
          </motion.p>

          <motion.p custom={3} variants={rise} initial="hidden" animate="show"
            className="text-base leading-[1.7] max-w-[52ch] mb-6" style={{ color: "var(--muted)" }}>
            Track record: <strong style={{ color: "var(--text)" }}>up to 40% faster performance</strong>,{" "}
            <strong style={{ color: "var(--text)" }}>70% fewer bugs</strong>, releases cut from 5 days to 2 hours.
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

          <motion.div custom={5} variants={rise} initial="hidden" animate="show" className="flex flex-wrap gap-7 mt-9">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-[25px]" style={{ color: "var(--text)" }}>
                  {s.value}<span style={{ color: "var(--accent)" }}>{s.unit}</span>
                </div>
                <div className="font-mono text-[11px] mt-0.5" style={{ color: "var(--subtle)" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <Terminal />
        </div>
      </div>
    </section>
  );
}
