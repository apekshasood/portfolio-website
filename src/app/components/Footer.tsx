'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'

const socials = [
  { href: 'mailto:apekshasood03@gmail.com', icon: '/images/Email-Icon.svg', label: 'Email', external: false },
  { href: 'https://www.linkedin.com/in/apeksha-sood/', icon: '/images/LinkedIn-Icon.svg', label: 'LinkedIn', external: true },
  { href: 'https://github.com/apekshasood', icon: '/images/Git-Icon.svg', label: 'GitHub', external: true },
  { href: 'https://www.behance.net/apeksha13', icon: '/images/Behance-Icon.svg', label: 'Behance', external: true },
]

const nav = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Skills', to: 'skills' },
  { name: 'Blog', to: 'blog' },
]

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-black gradient-text">AS.</span>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Senior Frontend Engineer building fast, accessible, scalable web &amp; mobile products.
            </p>
            <p className="mt-3 text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
              apekshasood03@gmail.com
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: 'var(--text-subtle)' }}
            >
              Navigation
            </p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <ScrollLink
                    to={item.to}
                    smooth
                    offset={-64}
                    duration={500}
                    className="text-sm cursor-pointer transition-colors duration-200"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    {item.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: 'var(--text-subtle)' }}
            >
              Connect
            </p>
            <div className="flex gap-3 flex-wrap">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noreferrer' : undefined}
                  aria-label={s.label}
                  className="p-2.5 rounded-lg border transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-glow)]"
                  style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}
                >
                  <Image src={s.icon} alt={`${s.label} icon`} width={18} height={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
            © {new Date().getFullYear()} Apeksha Sood. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'var(--text-subtle)' }}>
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
