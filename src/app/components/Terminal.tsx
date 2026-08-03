"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Terminal() {
  const command = "./hire_me.sh  # available now";
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const start = setTimeout(function type() {
      if (i <= command.length) {
        setTyped(command.slice(0, i));
        i++;
        setTimeout(type, 55);
      }
    }, 1400);
    return () => clearTimeout(start);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-[520px] rounded-[14px] overflow-hidden"
      style={{
        background: "var(--term-bg)",
        border: "1px solid var(--term-line)",
        boxShadow: "0 30px 70px rgba(0,0,0,0.45)",
      }}
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "var(--term-line)", background: "var(--term-bar)" }}>
        <span className="w-[11px] h-[11px] rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-[11px] h-[11px] rounded-full" style={{ background: "#ffbd2e" }} />
        <span className="w-[11px] h-[11px] rounded-full" style={{ background: "#28c840" }} />
        <span className="ml-2 font-mono text-xs" style={{ color: "#6b7488" }}>~ apeksha — zsh</span>
      </div>

      {/* Body */}
      <div className="p-[18px] font-mono text-[13px] leading-[1.95]" style={{ color: "#cbd3e6", minHeight: 250 }}>
        <div><span style={{ color: "var(--accent-2)" }}>➜</span> <span style={{ color: "#5a6472" }}>whoami</span></div>
        <div style={{ color: "#8b93b0" }}>Frontend Engineer · UI Developer @ Saksoft</div>
        <br />
        <div><span style={{ color: "var(--accent-2)" }}>➜</span> <span style={{ color: "#5a6472" }}>cat stack.json</span></div>
        <div><span style={{ color: "#89ddff" }}>{"{"}</span></div>
        <div>&nbsp;&nbsp;<span style={{ color: "#ffcb6b" }}>&quot;frontend&quot;</span>: [<span style={{ color: "#c3e88d" }}>&quot;React&quot;</span>, <span style={{ color: "#c3e88d" }}>&quot;Next.js&quot;</span>, <span style={{ color: "#c3e88d" }}>&quot;React Native&quot;</span>],</div>
        <div>&nbsp;&nbsp;<span style={{ color: "#ffcb6b" }}>&quot;backend&quot;</span>: [<span style={{ color: "#c3e88d" }}>&quot;Python/FastAPI&quot;</span>, <span style={{ color: "#c3e88d" }}>&quot;Node&quot;</span>, <span style={{ color: "#c3e88d" }}>&quot;GraphQL&quot;</span>],</div>
        <div>&nbsp;&nbsp;<span style={{ color: "#ffcb6b" }}>&quot;ai&quot;</span>: [<span style={{ color: "#c3e88d" }}>&quot;LLM APIs&quot;</span>, <span style={{ color: "#c3e88d" }}>&quot;streaming UI&quot;</span>, <span style={{ color: "#c3e88d" }}>&quot;doc Q&amp;A&quot;</span>],</div>
        <div>&nbsp;&nbsp;<span style={{ color: "#ffcb6b" }}>&quot;cloud&quot;</span>: [<span style={{ color: "#c3e88d" }}>&quot;AWS&quot;</span>, <span style={{ color: "#c3e88d" }}>&quot;GCP&quot;</span>, <span style={{ color: "#c3e88d" }}>&quot;Docker&quot;</span>]</div>
        <div><span style={{ color: "#89ddff" }}>{"}"}</span></div>
        <br />
        <div>
          <span style={{ color: "var(--accent-2)" }}>➜</span>{" "}
          <span className="typed-caret">{typed}</span>
        </div>
      </div>
    </motion.div>
  );
}
