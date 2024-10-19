import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

const AboutMe = () => {
  const refHeading = useRef(null)
  const refDescription = useRef(null)
  const refSkills = useRef(null)
  const refPhilosophy = useRef(null)

  const isHeadingInView = useInView(refHeading, { once: true })
  const isDescriptionInView = useInView(refDescription, { once: true })
  const isSkillsInView = useInView(refSkills, { once: true })
  const isPhilosophyInView = useInView(refPhilosophy, { once: true })

  return (
    <motion.section id="about" className="py-12">
      <div className="container mx-auto my-6">
        {/* Heading Animation */}
        <motion.h1
          ref={refHeading}
          className="text-center text-4xl lg:text-6xl font-extrabold text-[#C5C4CA] py-12"
          initial={{ opacity: 0, y: -50 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {'<About Me />'}
        </motion.h1>

        {/* Description Animation */}
        <motion.div
          ref={refDescription}
          className="border-l-8 border-[#C652EE] p-4 rounded-lg shadow-md mb-8 bg-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={isDescriptionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-lg text-[#C5C4CA]">
            Frontend Developer with 4 years of experience in creating responsive
            and user-friendly web and mobile applications using React, React
            Native, Angular, and GraphQL. Improved application performance by
            40% and reduced bugs by 70% to enhance overall user experience.
            Passionate about building dynamic web applications and user-friendly
            interfaces with a strong commitment to creating innovative solutions
            that enhance user experience and drive engagement.
          </p>
        </motion.div>

        {/* Skills & Technologies Animation */}
        <motion.div
          ref={refSkills}
          className="border-l-8 border-[#C652EE] p-4 rounded-lg shadow-md mb-8 bg-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold text-[#C652EE]">
            Skills & Technologies:
          </h2>
          <ul className="list-disc list-inside text-[#C5C4CA] mt-2">
            <li>🌐 HTML, CSS, JavaScript</li>
            <li>⚛️ React, React Native</li>
            <li>🔗 Angular</li>
            <li>📦 Redux, Context API</li>
            <li>🔍 GraphQL</li>
            <li>🌟 Tailwind CSS, Bootstrap</li>
            <li>☁️ Firebase, Node.js</li>
            <li>☁️ AWS (S3, Cloudfront, EC2, Lambda, Api Gateway)</li>
          </ul>
        </motion.div>

        {/* Philosophy Block Animation */}
        <motion.div
          ref={refPhilosophy}
          className="border-l-8 border-[#C652EE] p-4 rounded-lg shadow-md mb-8 bg-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={isPhilosophyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-[#C652EE]">My Philosophy:</h2>
          <blockquote className="italic text-[#C5C4CA]">
            "Design is not just what it looks like and feels like. Design is how
            it works."
          </blockquote>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutMe
