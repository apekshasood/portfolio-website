"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";

const navItems = [
  { name: "~/work", to: "work" },
  { name: "~/about", to: "about" },
  { name: "~/experience", to: "experience" },
  { name: "~/skills", to: "skills" },
  { name: "~/education", to: "education" },
  { name: "~/contact", to: "contact" },
];

const SunIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--bg) 80%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <a href="#home" className="font-mono font-bold text-[15px] select-none" style={{ color: "var(--text)" }}>
          apeksha<span style={{ color: "var(--accent)" }}>.sood</span>()
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              className="font-mono text-[12.5px] px-3 py-2 rounded-lg transition-colors duration-200"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.background = "var(--surface-2)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "transparent"; }}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="grid place-items-center w-[38px] h-[38px] rounded-[9px]"
            style={{ background: "var(--surface-2)", border: "1px solid var(--line)", color: "var(--muted)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </motion.button>

          <motion.a
            href="/resume/Apeksha_Sood_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -1 }}
            className="hidden sm:inline-block font-display font-semibold text-[13px] px-4 py-[9px] rounded-[9px] text-white"
            style={{ background: "var(--accent)" }}
          >
            Resume ↗
          </motion.a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden grid place-items-center w-[38px] h-[38px] rounded-[9px]"
            style={{ background: "var(--surface-2)", border: "1px solid var(--line)", color: "var(--text)" }}
            aria-label="Toggle menu"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
          <div className="px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.to}
                href={`#${item.to}`}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm px-3 py-2.5 rounded-lg"
                style={{ color: "var(--muted)" }}
              >
                {item.name}
              </a>
            ))}
            <a
              href="/resume/Apeksha_Sood_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-2 font-display font-semibold text-sm px-4 py-2.5 rounded-lg text-white text-center"
              style={{ background: "var(--accent)" }}
            >
              Resume ↗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
