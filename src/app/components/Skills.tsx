'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SkillTitle from '../sharedComponents/SkillTitle'

const groups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React.js / Next.js', percent: 95 },
      { name: 'TypeScript / JavaScript', percent: 92 },
      { name: 'React Native', percent: 88 },
      { name: 'Angular', percent: 76 },
      { name: 'HTML5 / CSS3 / Tailwind', percent: 90 },
    ],
  },
  {
    label: 'State & Data',
    skills: [
      { name: 'Redux / Zustand', percent: 87 },
      { name: 'React Query (TanStack)', percent: 83 },
      { name: 'GraphQL', percent: 80 },
      { name: 'REST APIs / Axios', percent: 92 },
    ],
  },
  {
    label: 'Tooling & Arch',
    skills: [
      { name: 'Webpack / Vite', percent: 80 },
      { name: 'Micro-Frontends', percent: 82 },
      { name: 'CI/CD / GitHub Actions', percent: 82 },
      { name: 'Storybook', percent: 75 },
    ],
  },
  {
    label: 'Cloud & QA',
    skills: [
      { name: 'AWS (S3, Lambda, CloudFront)', percent: 75 },
      { name: 'Sentry / Datadog', percent: 78 },
      { name: 'Jest / React Testing Library', percent: 82 },
    ],
  },
]

const tags = [
  'React', 'Next.js', 'TypeScript', 'React Native', 'Angular',
  'GraphQL', 'Redux', 'Zustand', 'React Query', 'Tailwind CSS',
  'Webpack', 'Vite', 'Storybook', 'Jest', 'AWS', 'CI/CD',
  'Sentry', 'Datadog', 'WCAG 2.1', 'Micro-Frontends',
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-16 lg:py-24 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 opacity-30"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--accent), transparent)' }}
      />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: 'var(--accent)' }}>
            03 &mdash; Skills
          </p>
          <h2 className="text-4xl lg:text-5xl font-black" style={{ color: 'var(--text)' }}>
            What I <span className="gradient-text">work with.</span>
          </h2>
        </motion.div>

        {/* Skill bars grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-5 mb-8"
        >
          {groups.map((g) => (
            <div
              key={g.label}
              className="rounded-2xl border p-6"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <h3
                className="text-xs font-bold uppercase tracking-[0.15em] mb-5 pb-4 border-b"
                style={{ color: 'var(--accent)', borderColor: 'var(--border)' }}
              >
                {g.label}
              </h3>
              {g.skills.map((s) => (
                <SkillTitle key={s.name} name={s.name} percent={s.percent} />
              ))}
            </div>
          ))}
        </motion.div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl border p-6"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.15em] mb-5 text-center"
            style={{ color: 'var(--text-muted)' }}
          >
            Full Tech Stack
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-default"
                style={{
                  borderColor: 'var(--border)',
                  color: 'var(--text-muted)',
                  background: 'var(--surface-2)',
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
