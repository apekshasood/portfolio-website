import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const { name, email, message } = formData
    if (!name || !email || !message) {
      alert('All fields are required')
      return
    }
    // Simulate form submission
    setIsSubmitted(true)
    console.log(formData)
  }

  // Define animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div
      id="contact"
      className="container mx-auto my-6"
      initial="hidden"
      animate="visible"
      variants={fadeInVariant}
    >
      <motion.div className="text-center" initial="hidden" animate="visible">
        <motion.h1
          className="text-4xl lg:text-6xl font-extrabold text-[#C5C4CA] py-12"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          {'<Contact Me />'}
        </motion.h1>
      </motion.div>
      <motion.div className="grid lg:grid-cols-12 gap-12">
        <motion.div
          className="col-span-5 flex justify-center items-start"
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <h1 className="text-4xl lg:text-6xl text-[#C5C4CA] font-extrabold">
            <span className="text-[#C652EE]">Get in</span> Touch
          </h1>
        </motion.div>
        <motion.div className="col-span-7">
          {isSubmitted && (
            <motion.p
              className="text-green-500 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank you! Your message has been sent.
            </motion.p>
          )}
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md lg:mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
          >
            <motion.div className="mb-10 relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#C652EE] bg-transparent transition-all duration-300"
              />
              <label
                htmlFor="name"
                className="absolute left-3 -top-4 text-[#C5C4CA] text-lg transition-all duration-300 transform scale-75 origin-[0_0] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:-left-0 peer-focus:text-[#C652EE] peer-focus:scale-100 peer-focus:font-bold"
              >
                Name
              </label>
            </motion.div>

            <motion.div className="mb-10 relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#C652EE] bg-transparent transition-all duration-300"
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-4 text-[#C5C4CA] text-lg transition-all duration-300 transform scale-75 origin-[0_0] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:-left-0 peer-focus:text-[#C652EE] peer-focus:scale-100 peer-focus:font-bold"
              >
                Email
              </label>
            </motion.div>

            <motion.div className="mb-6 relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#C652EE] bg-transparent transition-all duration-300"
              />
              <label
                htmlFor="message"
                className="absolute left-3 -top-4 text-[#C5C4CA] text-lg transition-all duration-300 transform scale-75 origin-[0_0] peer-placeholder-shown:scale-100 peer-placeholder-shown:top-2 peer-focus:-top-7 peer-focus:-left-0 peer-focus:text-[#C652EE] peer-focus:scale-100 peer-focus:font-bold"
              >
                Message
              </label>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 rounded-lg border-2 border-[#C652EE] bg-[#C652EE] text-white font-bold transition duration-300 transform hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              Send
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ContactMe
