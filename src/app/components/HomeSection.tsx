import React, { useRef } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

const HomeSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleDownloadCV = () => {
    window.open('.../public/resume/ResumeApekshaSood.pdf', '_blank')
  }

  const handleHireMe = () => {
    window.location.href = 'mailto:apekshasood03@gmail.com'
  }

  const iconVariants = {
    hover: { scale: 1.2 },
  }

  const dotsVariants = {
    loop: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
      },
    },
  }

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:ml-20"
    >
      <motion.div
        animate={
          isInView
            ? {
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ['20%', '20%', '50%', '50%', '20%'],
              }
            : {}
        }
        className="hidden col-span-12 lg:col-span-5 lg:flex lg:justify-end pr-0 order-last"
      >
        <Image
          src="/images/Home.svg"
          alt="An illustration representing home"
          width={600}
          height={600}
        />
      </motion.div>
      <div className="lg:hidden col-span-12 flex justify-center pr-0">
        <Image
          src="/images/Mobile-Home.svg"
          alt="Mobile view of home illustration"
          width={400}
          height={400}
        />
      </div>
      <div className="col-span-12 lg:col-span-7 flex flex-col justify-center items-center lg:items-start pl-5 lg:pl-0 ">
        <h1 className="text-white mb-4 text-3xl lg:text-6xl font-extrabold text-center lg:text-left whitespace-nowrap">
          Hi There{' '}
          <motion.span
            className="inline-block text-[#C652EE]"
            variants={dotsVariants}
            initial="loop"
            animate="loop"
          >
            ...
          </motion.span>
        </h1>
        <h1 className="text-white mb-4 text-3xl lg:text-6xl md:text-4xl font-extrabold text-center lg:text-left">
          I&apos;m{' '}
          <span className="text-[#A07DD4] whitespace-nowrap">
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'Web Designer',
                1000,
                'App Developer',
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </span>
        </h1>
        <h3 className="text-[#C5C4CA] text-center lg:text-left">
          Passionate about building dynamic web applications and user-friendly
          interfaces using React, Angular, GraphQL, and more.
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full sm:w-auto px-6 py-2 rounded-lg border-2 border-[#C652EE] bg-[#C652EE]"
          >
            Download CV
          </motion.button>
          <motion.button
            onClick={handleHireMe}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-full sm:w-auto px-6 py-2 rounded-lg text-[#C5C4CA] border-2 border-[#C652EE]"
          >
            Hire Me
          </motion.button>
        </div>
        <div className="pt-12">
          <div className="hidden lg:block">
            <h1 className="text-[#8172B7]">|</h1>
            <h1 className="text-[#8172B7] py-2">|</h1>
            <h1 className="text-[#8172B7]">|</h1>
          </div>
          <div className="flex place-content-start lg:flex-col flex-row lg:space-y-4 lg:space-x-0 space-x-10 py-2">
            <Link
              href="https://www.linkedin.com/in/apeksha-sood/"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div variants={iconVariants} whileHover="hover">
                <Image
                  src="/images/LinkedIn-Icon.svg"
                  alt="LinkedIn Icon"
                  width={20}
                  height={20}
                />
              </motion.div>
            </Link>
            <Link
              href="https://www.behance.net/apeksha13"
              target="_blank"
              rel="noreferrer"
            >
              <motion.div variants={iconVariants} whileHover="hover">
                <Image
                  src="/images/Behance-Icon.svg"
                  alt="Behance Icon"
                  width={20}
                  height={20}
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default HomeSection
