'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SkillTitleProps {
  name: string
  percent: number
}

function SkillTitle({ name, percent }: SkillTitleProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
          {name}
        </span>
        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
          {percent}%
        </span>
      </div>
      <div className="w-full h-2 rounded-full" style={{ background: 'var(--border)' }}>
        <motion.div
          className="h-2 rounded-full"
          style={{ background: 'var(--accent)' }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percent}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default SkillTitle
