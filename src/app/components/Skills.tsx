import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion' // Importing Framer Motion
import SkillsContainer from '../sharedComponents/SkillContainer'

const webDevelopmentSkills = [
  { name: 'Figma', percent: 60 },
  { name: 'Photoshop', percent: 70 },
  { name: 'Adobe XD', percent: 80 },
  { name: 'Wireframing', percent: 70 },
  { name: 'Responsive Designing', percent: 80 },
  // Add more skills as needed
]

const frontendSkills = [
  { name: 'HTML', percent: 90 },
  { name: 'CSS', percent: 90 },
  { name: 'React Native', percent: 85 },
  { name: 'React', percent: 85 },
  { name: 'Angular', percent: 65 },
  { name: 'GraphQL', percent: 75 },
  { name: 'Tailwind', percent: 75 },
  // Add more skills as needed
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div
      id="skills"
      ref={ref}
      className="container mx-auto my-6 bg-cover bg-center py-4"
      style={{ backgroundImage: `url('/images/Skill-bg.svg')`, opacity: 0.8 }}
    >
      <div className="items-center">
        <motion.h1
          className="text-center text-4xl lg:text-6xl font-extrabold text-[#C5C4CA] py-12"
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
