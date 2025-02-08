'use client'

import Tabs from '@/app/sharedComponents/Tab'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div id="experience" className="py-16 lg:py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-center text-4xl lg:text-6xl font-extrabold text-[#C5C4CA] mb-12">
          {'<Experience />'}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Tabs />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Experience
