'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion, useInView } from 'framer-motion'
import CodeEditor from './CodeEditor'

const socials = [
  { href: 'https://www.linkedin.com/in/apeksha-sood/', icon: '/images/LinkedIn-Icon.svg', label: 'LinkedIn' },
  { href: 'https://github.com/apekshasood', icon: '/images/Git-Icon.svg', label: 'GitHub' },
  { href: 'https://www.behance.net/apeksha13', icon: '/images/Behance-Icon.svg', label: 'Behance' },
]

const stats = [
  { value: '5+', label: 'Years' },
  { value: '40%', label: 'Perf ↑' },
  { value: '3', label: 'Companies' },
  { value: '2h', label: 'Deploy' },
]

export default function HomeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[calc(100vh-64px)] flex items-center dot-grid overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[130px] opacity-[0.15]"
        style={{ background: 'var(--accent)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.08]"
        style={{ background: 'var(--accent-2)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Status pill */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7 border"
            style={{
              borderColor: 'var(--accent)',
              color: 'var(--accent)',
              background: 'var(--accent-glow)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: 'var(--accent)' }}
            />
            Open to opportunities
          </div>

          {/* Name */}
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-4">
            <span style={{ color: 'var(--text)' }}>Hi, I&apos;m{' '}</span>
            <span className="gradient-text">Apeksha</span>
          </h1>

          {/* Animated role */}
          <div
            className="text-xl lg:text-2xl font-semibold mb-5 min-h-[2rem]"
            style={{ color: 'var(--text-muted)' }}
          >
            <TypeAnimation
              sequence={[
                'Senior Frontend Engineer',
                2000,
                'React & TypeScript Expert',
                2000,
                'React Native Developer',
                2000,
                'Performance Optimizer',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Bio */}
          <p
            className="text-base lg:text-lg leading-relaxed max-w-md mb-9"
            style={{ color: 'var(--text-muted)' }}
          >
            5+ years building scalable web &amp; mobile apps at Saksoft, Gojoko &amp; Newgen.
            Consistent{' '}
            <strong style={{ color: 'var(--text)' }}>20–40% performance gains</strong>{' '}
            with React, TypeScript &amp; Next.js.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-9 justify-center lg:justify-start">
            <motion.a
              href="/resume/ApekshaSood_Resume26.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-xl text-sm font-bold text-white"
              style={{
                background: 'linear-gradient(130deg, var(--accent) 0%, var(--accent-2) 100%)',
                boxShadow: '0 8px 28px var(--accent-glow)',
              }}
            >
              Download CV
            </motion.a>
            <motion.a
              href="mailto:apekshasood03@gmail.com"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-xl text-sm font-bold border"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--text)',
                background: 'var(--surface)',
              }}
            >
              Hire Me ↗
            </motion.a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ y: -3, scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex p-2.5 rounded-lg border transition-all duration-200"
                  style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                >
                  <Image src={s.icon} alt={s.label} width={18} height={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Code editor + stats */}
        <div className="flex flex-col items-center gap-6">
          <CodeEditor />

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="grid grid-cols-4 gap-3 w-full max-w-[480px]"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center py-3 rounded-xl border"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <span className="text-lg font-black gradient-text">{s.value}</span>
                <span
                  className="text-[11px] mt-0.5 font-medium"
                  style={{ color: 'var(--text-subtle)' }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
