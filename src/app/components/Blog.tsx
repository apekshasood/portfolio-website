'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const POST_URL = 'https://www.linkedin.com/in/apeksha-sood/recent-activity/articles/'

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="blog" className="py-16 lg:py-24 relative">
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
            04 &mdash; Blog
          </p>
          <h2 className="text-4xl lg:text-5xl font-black" style={{ color: 'var(--text)' }}>
            Thoughts &amp; <span className="gradient-text">articles.</span>
          </h2>
        </motion.div>

        {/* Single featured post */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <Link href={POST_URL} target="_blank" rel="noreferrer" className="block group">
            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl border p-8 lg:p-10 transition-all duration-200 group-hover:border-[var(--accent)]"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Icon block */}
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent)' }}
                >
                  🤖
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide"
                      style={{
                        background: 'var(--accent-glow)',
                        color: 'var(--accent)',
                        border: '1px solid var(--accent)',
                      }}
                    >
                      AI & Developer Tools
                    </span>
                    <span className="text-xs font-medium" style={{ color: 'var(--text-subtle)' }}>
                      2026
                    </span>
                  </div>

                  <h3
                    className="text-xl lg:text-2xl font-black leading-snug mb-3 group-hover:underline decoration-[var(--accent)] underline-offset-4"
                    style={{ color: 'var(--text)' }}
                  >
                    AI Tools for Developers in 2026
                  </h3>

                  <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
                    A hands-on look at the AI tools reshaping how frontend developers write, review, and ship code in 2026 —
                    from intelligent code assistants to AI-driven design-to-code pipelines. What actually works, what doesn&apos;t,
                    and how I&apos;ve integrated them into my daily workflow.
                  </p>

                  <span
                    className="inline-flex items-center gap-2 text-sm font-bold"
                    style={{ color: 'var(--accent)' }}
                  >
                    Read on LinkedIn
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
