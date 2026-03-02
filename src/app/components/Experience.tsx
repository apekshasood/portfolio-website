'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const jobs = [
  {
    company: 'Saksoft Pvt. Ltd.',
    role: 'Senior Frontend Engineer',
    period: 'Oct 2024 – Present',
    current: true,
    points: [
      'Leading frontend architecture for enterprise SaaS products with React, TypeScript & Next.js.',
      'Built a shared Design System that reduced feature development time by 30%.',
      'Achieved 40% faster load times via code splitting, lazy loading & memoisation.',
      'Introduced Micro-Frontend architecture (Webpack Module Federation) across 4 teams.',
      'Set up Sentry & Datadog observability, cutting MTTR by 50%.',
    ],
  },
  {
    company: 'Gojoko Technology Pvt. Ltd.',
    role: 'Frontend Engineer',
    period: 'Oct 2022 – Sep 2024',
    current: false,
    points: [
      "Led Gojoko's website rebuild in Next.js — 30% Core Web Vitals improvement.",
      'Delivered a React Native credit card app, reducing load times by 20%.',
      'Integrated GraphQL cutting data-fetching times by 15%.',
      'Improved site performance by 25% through cross-functional optimisation.',
    ],
  },
  {
    company: 'Newgen Software Pvt. Ltd.',
    role: 'Frontend Engineer',
    period: 'Sep 2020 – Oct 2022',
    current: false,
    points: [
      'Led process re-engineering in React.js & React Native, boosting service efficiency by 25%.',
      'Implemented Micro-Frontend architecture with Webpack Module Federation.',
      'Shipped an SPA (React + Redux + TypeScript) that became the primary internal portal.',
      'Compressed release cycle from 5 days to 2 hours with CI/CD pipelines.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-16 lg:py-24 relative">
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
            02 &mdash; Experience
          </p>
          <h2 className="text-4xl lg:text-5xl font-black" style={{ color: 'var(--text)' }}>
            Where I&apos;ve <span className="gradient-text">built things.</span>
          </h2>
        </motion.div>

        {/* Timeline entries */}
        <div className="flex flex-col gap-0">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative flex gap-8 pb-12"
            >
              {/* Timeline spine + dot */}
              <div className="flex flex-col items-center flex-shrink-0">
                {/* Dot */}
                <div
                  className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0 z-10"
                  style={{
                    background: job.current ? 'var(--accent)' : 'var(--surface)',
                    border: `2px solid ${job.current ? 'var(--accent)' : 'var(--border)'}`,
                    boxShadow: job.current ? '0 0 0 4px var(--accent-glow)' : 'none',
                  }}
                />
                {/* Connecting line (hidden on last item) */}
                {i < jobs.length - 1 && (
                  <div
                    className="flex-1 w-px mt-2"
                    style={{ background: 'var(--border)' }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md"
                    style={{ background: 'var(--surface-2)', color: 'var(--text-muted)' }}
                  >
                    {job.period}
                  </span>
                  {job.current && (
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide"
                      style={{
                        background: 'var(--accent-glow)',
                        color: 'var(--accent)',
                        border: '1px solid var(--accent)',
                      }}
                    >
                      Current
                    </span>
                  )}
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4, borderColor: 'var(--accent)' }}
                  className="rounded-2xl border p-6 transition-all duration-200"
                  style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                >
                  <h3 className="font-black text-lg mb-0.5" style={{ color: 'var(--text)' }}>
                    {job.role}
                  </h3>
                  <p className="text-sm font-semibold mb-5" style={{ color: 'var(--accent)' }}>
                    {job.company}
                  </p>
                  <ul className="space-y-2.5">
                    {job.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm leading-relaxed">
                        <span
                          className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--accent)' }}
                        />
                        <span style={{ color: 'var(--text-muted)' }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
