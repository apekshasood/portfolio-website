import Tabs from '@/app/sharedComponents/Tab'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Experience = () => {
  // Create a ref for the section
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) // Animation triggers once when it comes into view

  return (
    <div id="experience" className="container mx-auto my-6">
      <motion.div
        ref={ref} // Attach the ref to the container
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="items-center"
      >
        {/* Heading */}
        <h1 className="text-center text-4xl lg:text-6xl font-extrabold text-[#C5C4CA] py-12">
          {'<Experience />'}
        </h1>

        {/* Tabs */}
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}} // Animate the Tabs component when in view
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Tabs />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Experience
