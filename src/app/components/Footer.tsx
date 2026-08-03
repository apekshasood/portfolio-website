"use client";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/apeksha-sood/" },
  { label: "GitHub", href: "https://github.com/apekshasood" },
  { label: "Behance", href: "https://www.behance.net/apeksha13" },
  { label: "Email", href: "mailto:apekshasood.96@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono font-bold text-sm" style={{ color: "var(--text)" }}>
          apeksha<span style={{ color: "var(--accent)" }}>.sood</span>()
        </div>

        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              className="font-mono text-xs transition-colors duration-150"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>
              {s.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-xs" style={{ color: "var(--subtle)" }}>
          © {new Date().getFullYear()} Apeksha Sood
        </p>
      </div>
    </footer>
  );
}
