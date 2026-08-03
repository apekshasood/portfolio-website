"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <Reveal className="mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.18em] mb-3" style={{ color: "var(--accent)" }}>
        {index} — {label}
      </p>
      <h2 className="font-display font-bold tracking-[-0.03em]" style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", color: "var(--text)" }}>
        {children}
      </h2>
    </Reveal>
  );
}
