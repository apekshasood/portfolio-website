// Pip: the site's guide, a small chat bubble with a face.

export default function Pip({ size = 88 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" role="img" aria-label="Pip, the site's guide">
      <path d="M14 18 Q14 8 24 8 H72 Q82 8 82 18 V58 Q82 68 72 68 H44 L28 84 L30 68 H24 Q14 68 14 58 Z" fill="var(--accent)" />
      <path d="M20 20 Q20 14 26 14 H50" stroke="#ffffff" strokeOpacity="0.45" strokeWidth="4" strokeLinecap="round" fill="none" />
      <ellipse className="pip-eye" cx="38" cy="38" rx="6" ry="8" fill="#0B0E18" />
      <ellipse className="pip-eye" cx="58" cy="38" rx="6" ry="8" fill="#0B0E18" />
      <circle cx="40" cy="35" r="2" fill="#ffffff" />
      <circle cx="60" cy="35" r="2" fill="#ffffff" />
      <path d="M40 52 Q48 58 56 52" stroke="#0B0E18" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="28" cy="48" r="4" fill="#FF9DC8" opacity="0.7" />
      <circle cx="68" cy="48" r="4" fill="#FF9DC8" opacity="0.7" />
    </svg>
  );
}
