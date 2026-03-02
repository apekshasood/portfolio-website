'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cards = [
  { emoji: '⚡', title: 'Performance', desc: '20–40% load-time gains across 3 consecutive roles' },
  { emoji: '🧩', title: 'Architecture', desc: 'Micro-frontends with Webpack Module Federation' },
  { emoji: '📐', title: 'Design Systems', desc: 'Component libraries cutting dev time by 30%' },
  { emoji: '☁️', title: 'Cloud & DevOps', desc: 'AWS (S3, Lambda, CloudFront) + CI/CD pipelines' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function AboutMe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-16 lg:py-24 relative">
      {/* Subtle divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 opacity-30"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--accent)' }}>
            01 &mdash; About
          </p>
          <h2 className="text-4xl lg:text-5xl font-black" style={{ color: 'var(--text)' }}>
            Crafting experiences <span className="gradient-text">that perform.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Bio — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              I&apos;m a <span style={{ color: 'var(--text)', fontWeight: 700 }}>Senior Frontend Engineer</span> with 5+
              years of experience turning complex product requirements into clean, fast, accessible interfaces.
              My stack is centred on <span style={{ color: 'var(--accent)', fontWeight: 600 }}>React</span>,{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>TypeScript</span>,{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Next.js</span>, and{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>React Native</span>.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              I&apos;ve compressed release cycles from 5 days to 2 hours, built design systems adopted across entire
              organisations, and consistently shipped measurable performance improvements at every company I&apos;ve
              joined.
            </p>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              I care deeply about WCAG accessibility, Core Web Vitals, and the kind of engineering culture where
              peer reviews actually improve code quality.
            </p>

            {/* Quote */}
            <blockquote
              className="mt-6 pl-5 border-l-2 italic text-base"
              style={{ borderColor: 'var(--accent)', color: 'var(--text-subtle)' }}
            >
              &ldquo;Design is not just what it looks like and feels like. Design is how it works.&rdquo;
              <cite className="block not-italic mt-1 text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                — Steve Jobs
              </cite>
            </blockquote>
          </motion.div>

          {/* Highlight cards — 2 cols */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'show' : 'hidden'}
                whileHover={{ y: -6 }}
                className="rounded-2xl border p-5 flex flex-col gap-2 cursor-default"
                style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
              >
                <span className="text-2xl">{c.emoji}</span>
                <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>{c.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
