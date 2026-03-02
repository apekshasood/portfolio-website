'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TabProps {
  label: string
  subtitle: string
  isActive: boolean
  onClick: () => void
}

function Tab({ label, subtitle, isActive, onClick }: TabProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ x: 4 }}
      className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
        isActive ? 'border-l-4' : ''
      }`}
      style={{
        background: isActive
          ? 'color-mix(in srgb, var(--accent) 10%, transparent)'
          : 'transparent',
        borderColor: isActive ? 'var(--accent)' : 'var(--border)',
        borderLeftColor: isActive ? 'var(--accent)' : undefined,
      }}
    >
      <p
        className="font-bold text-sm"
        style={{ color: isActive ? 'var(--accent)' : 'var(--text)' }}
      >
        {label}
      </p>
      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
        {subtitle}
      </p>
    </motion.button>
  )
}

interface TabContentProps {
  heading: string
  company: string
  yoe: string
  description: string[]
}

function TabContent({ heading, company, yoe, description }: TabContentProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={company}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="p-6 rounded-2xl border h-full"
        style={{
          background: 'var(--surface)',
          borderColor: 'var(--border)',
        }}
      >
        <h3
          className="text-xl font-extrabold mb-1"
          style={{ color: 'var(--accent)' }}
        >
          {heading}
        </h3>
        <p className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>
          {company}
        </p>
        <span
          className="inline-block text-xs px-3 py-1 rounded-full font-medium mb-5"
          style={{
            background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
            color: 'var(--accent)',
          }}
        >
          {yoe}
        </span>
        <ul className="space-y-3">
          {description.map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              <span
                className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  )
}

const tabs = [
  {
    id: 1,
    label: 'Saksoft Pvt. Ltd.',
    subtitle: 'Senior Frontend Engineer',
    heading: 'Senior Frontend Engineer',
    company: 'Saksoft Pvt. Ltd.',
    yoe: 'Oct 2024 – Present',
    description: [
      'Leading frontend architecture for enterprise-grade SaaS products using React, TypeScript, and Next.js.',
      'Building and maintaining a shared component library (Design System) that reduced feature development time by 30%.',
      'Implemented advanced performance patterns (code splitting, lazy loading, memoization) achieving 40% faster load times.',
      'Driving adoption of Micro-Frontend architecture using Webpack Module Federation for 4 independent teams.',
      'Set up Sentry & Datadog monitoring, reducing MTTR by 50% through proactive error tracking.',
    ],
  },
  {
    id: 2,
    label: 'Gojoko Technology',
    subtitle: 'Frontend Engineer',
    heading: 'Frontend Engineer',
    company: 'Gojoko Technology Pvt. Ltd.',
    yoe: 'Oct 2022 – Sep 2024',
    description: [
      'Developed and maintained product websites and web apps using React.js, Next.js, and Angular, improving performance by 25%.',
      "Led development of Gojoko's new website with Next.js SSR/ISR, achieving 30% improvement in Core Web Vitals.",
      'Delivered a React Native credit card app, reducing load times by 20% and boosting user retention.',
      'Integrated GraphQL for efficient data management, cutting data-fetching times by 15%.',
      'Collaborated with cross-functional teams to optimize for speed and scalability, increasing dev efficiency by 25%.',
    ],
  },
  {
    id: 3,
    label: 'Newgen Software',
    subtitle: 'Frontend Engineer',
    heading: 'Frontend Engineer',
    company: 'Newgen Software Pvt. Ltd.',
    yoe: 'Sep 2020 – Oct 2022',
    description: [
      'Led process re-engineering in React.js and React Native, improving service efficiency by 25% and reducing errors by 15%.',
      'Implemented Micro-Frontend architecture with Webpack Module Federation for improved build and deploy flexibility.',
      'Developed an SPA with React, Redux, and TypeScript that became the primary internal resource portal.',
      'Compressed release cycle from 5 days to 2 hours by implementing CI/CD pipelines.',
      'Championed peer reviews and code quality standards, reducing production bugs significantly.',
    ],
  },
]

function Tabs() {
  const [activeTab, setActiveTab] = useState<number>(1)
  const active = tabs.find((t) => t.id === activeTab)!

  return (
    <div className="grid md:grid-cols-12 gap-6">
      <div className="md:col-span-4 flex flex-col gap-3">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            subtitle={tab.subtitle}
            isActive={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
      <div className="md:col-span-8">
        <TabContent {...active} />
      </div>
    </div>
  )
}

export default Tabs
