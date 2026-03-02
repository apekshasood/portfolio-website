'use client'

import { motion } from 'framer-motion'

const lines: { tokens: { text: string; color: string }[] }[] = [
  {
    tokens: [
      { text: 'const ', color: 'var(--code-keyword)' },
      { text: 'developer', color: 'var(--code-const)' },
      { text: ' = {', color: 'var(--code-punct)' },
    ],
  },
  {
    tokens: [
      { text: '  name', color: 'var(--code-prop)' },
      { text: ': ', color: 'var(--code-punct)' },
      { text: '"Apeksha Sood"', color: 'var(--code-string)' },
      { text: ',', color: 'var(--code-punct)' },
    ],
  },
  {
    tokens: [
      { text: '  role', color: 'var(--code-prop)' },
      { text: ': ', color: 'var(--code-punct)' },
      { text: '"Senior Frontend Engineer"', color: 'var(--code-string)' },
      { text: ',', color: 'var(--code-punct)' },
    ],
  },
  {
    tokens: [
      { text: '  experience', color: 'var(--code-prop)' },
      { text: ': ', color: 'var(--code-punct)' },
      { text: '5', color: 'var(--code-number)' },
      { text: ',  ', color: 'var(--code-punct)' },
      { text: '// years', color: 'var(--code-comment)' },
    ],
  },
  { tokens: [] },
  {
    tokens: [
      { text: '  stack', color: 'var(--code-prop)' },
      { text: ': [', color: 'var(--code-punct)' },
    ],
  },
  {
    tokens: [
      { text: '    ', color: '' },
      { text: '"React"', color: 'var(--code-string)' },
      { text: ', ', color: 'var(--code-punct)' },
      { text: '"Next.js"', color: 'var(--code-string)' },
      { text: ',', color: 'var(--code-punct)' },
    ],
  },
  {
    tokens: [
      { text: '    ', color: '' },
      { text: '"TypeScript"', color: 'var(--code-string)' },
      { text: ', ', color: 'var(--code-punct)' },
      { text: '"React Native"', color: 'var(--code-string)' },
    ],
  },
  {
    tokens: [{ text: '  ],', color: 'var(--code-punct)' }],
  },
  { tokens: [] },
  {
    tokens: [
      { text: '  performance', color: 'var(--code-prop)' },
      { text: ': ', color: 'var(--code-punct)' },
      { text: '"+40%"', color: 'var(--code-string)' },
      { text: ',', color: 'var(--code-punct)' },
    ],
  },
  {
    tokens: [
      { text: '  available', color: 'var(--code-prop)' },
      { text: ': ', color: 'var(--code-punct)' },
      { text: 'true', color: 'var(--code-bool)' },
      { text: ',  ', color: 'var(--code-punct)' },
      { text: '// hire me 🚀', color: 'var(--code-comment)' },
    ],
  },
  {
    tokens: [{ text: '}', color: 'var(--code-punct)' }],
  },
]

export default function CodeEditor() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="w-full max-w-[480px] rounded-2xl overflow-hidden shadow-2xl"
      style={{
        background: 'var(--code-bg)',
        border: '1px solid var(--code-border)',
        boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px var(--code-border)',
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: 'var(--code-border)', background: '#191936' }}
      >
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <div
          className="ml-4 px-3 py-0.5 rounded-md text-xs"
          style={{
            background: '#121230',
            color: '#7B7FA8',
            fontFamily: 'monospace',
          }}
        >
          developer.ts
        </div>
      </div>

      {/* Code area */}
      <div className="p-5 overflow-x-auto" style={{ fontFamily: "'Fira Code', 'Cascadia Code', 'Courier New', monospace", fontSize: '0.82rem', lineHeight: '1.75' }}>
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className="flex gap-4"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.06, duration: 0.3 }}
          >
            {/* Line number */}
            <span
              className="select-none w-5 text-right flex-shrink-0 text-xs"
              style={{ color: '#44427A', paddingTop: '1px' }}
            >
              {i + 1}
            </span>

            {/* Tokens */}
            <span>
              {line.tokens.length === 0 ? (
                <span>&nbsp;</span>
              ) : (
                line.tokens.map((token, j) => (
                  <span key={j} style={{ color: token.color || '#ABB2BF' }}>
                    {token.text}
                  </span>
                ))
              )}
              {/* Blinking cursor on last line */}
              {i === lines.length - 1 && (
                <span
                  className="inline-block w-[2px] h-[14px] ml-0.5 align-middle cursor-blink"
                  style={{ background: '#A78BFA' }}
                />
              )}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Status bar */}
      <div
        className="flex items-center justify-between px-4 py-1.5 text-xs"
        style={{
          background: '#6D28D9',
          color: 'rgba(255,255,255,0.85)',
          fontFamily: 'monospace',
        }}
      >
        <span>TypeScript</span>
        <span className="flex items-center gap-1">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#28C840] cursor-blink"
          />
          ready
        </span>
        <span>UTF-8</span>
      </div>
    </motion.div>
  )
}
