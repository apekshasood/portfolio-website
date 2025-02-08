'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SkillsContainer from '../sharedComponents/SkillContainer'

const webDevelopmentSkills = [
  { name: 'Figma', percent: 60 },
  { name: 'Photoshop', percent: 70 },
  { name: 'Adobe XD', percent: 80 },
  { name: 'Wireframing', percent: 70 },
  { name: 'Responsive Design', percent: 80 },
]

const frontendSkills = [
  { name: 'JavaScript', percent: 85 },
  { name: 'React', percent: 85 },
  { name: 'React Native', percent: 85 },
  { name: 'Angular', percent: 70 },
  { name: 'GraphQL', percent: 75 },
  { name: 'Redux', percent: 75 },
  { name: 'Tailwind CSS', percent: 80 },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div
      id="skills"
      ref={ref}
      className="py-16 lg:py-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('/images/Skill-bg.svg')` }}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-center text-4xl lg:text-6xl font-extrabold text-[#C5C4CA] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {'<Skills />'}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SkillsContainer
            webDevelopmentSkills={webDevelopmentSkills}
            frontendSkills={frontendSkills}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
