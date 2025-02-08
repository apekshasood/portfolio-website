'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

const AboutMe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      id="about"
      className="py-16 lg:py-32"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-center text-4xl lg:text-6xl font-extrabold text-[#C5C4CA] mb-12"
          variants={itemVariants}
        >
          {'<About Me />'}
        </motion.h1>

        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 mb-8"
          variants={itemVariants}
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

        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6 mb-8"
          variants={itemVariants}
        >
          <h2 className="text-xl font-bold text-[#C652EE] mb-4">
            Skills & Technologies:
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[#C5C4CA]">
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

        <motion.div
          className="bg-gray-800 rounded-lg shadow-md p-6"
          variants={itemVariants}
        >
          <h2 className="text-xl font-bold text-[#C652EE] mb-4">
            My Philosophy:
          </h2>
          <blockquote className="italic text-[#C5C4CA] text-lg">
            "Design is not just what it looks like and feels like. Design is how
            it works."
          </blockquote>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutMe
