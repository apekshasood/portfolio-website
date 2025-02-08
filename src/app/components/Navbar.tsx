'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'HOME', to: 'home' },
    { name: 'ABOUT', to: 'about' },
    { name: 'EXPERIENCE', to: 'experience' },
    { name: 'SKILLS', to: 'skills' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#21242E] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Image src="/images/Logo.svg" alt="Logo" width={150} height={50} />

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer text-[#C5C4CA] font-bold hover:text-[#C652EE] transition-colors duration-300"
                activeClass="text-[#C652EE]"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#21242E] shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 text-[#C5C4CA] font-bold hover:text-[#C652EE] transition-colors duration-300"
                  activeClass="text-[#C652EE]"
                  onClick={toggleMenu}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
