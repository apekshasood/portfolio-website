import SkillTitle from './SkillTitle'
import { motion } from 'framer-motion'

interface Skill {
  name: string
  percent: number
}

interface SkillsContainerProps {
  webDevelopmentSkills: Skill[]
  frontendSkills: Skill[]
}

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skillItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function SkillsContainer({
  webDevelopmentSkills,
  frontendSkills,
}: SkillsContainerProps) {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-8"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-[#C652EE]">
          Web Development
        </h2>
        {webDevelopmentSkills.map((skill, index) => (
          <motion.div key={`webdev-${index}`} variants={skillItem}>
            <SkillTitle name={skill.name} percent={skill.percent} />
          </motion.div>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-[#C652EE]">Frontend</h2>
        {frontendSkills.map((skill, index) => (
          <motion.div key={`frontend-${index}`} variants={skillItem}>
            <SkillTitle name={skill.name} percent={skill.percent} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillsContainer
