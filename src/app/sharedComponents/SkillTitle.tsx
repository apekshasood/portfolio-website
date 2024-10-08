import React from 'react'
import { motion } from 'framer-motion' // Import Framer Motion

interface SkillTitleProps {
  name: string
  percent: number
}

function SkillTitle({ name, percent }: SkillTitleProps) {
  return (
    <div className="mb-4 py-3">
      <h3 className="text-md font-semibold text-[#C5C4CA]">{name}</h3>
      <div className="w-full bg-gray-200 rounded-lg mt-1">
        <motion.div
          className="bg-[#C652EE] text-xs leading-5 rounded-lg text-center text-white"
          initial={{ width: 0 }} // Start with a width of 0
          animate={{ width: `${percent}%` }} // Animate to the specified width
          transition={{ duration: 0.8 }} // Duration for the animation
          whileHover={{ scale: 1.05 }} // Scale effect on hover
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} // Center text
        >
          {percent}%
        </motion.div>
      </div>
    </div>
  )
}

export default SkillTitle
