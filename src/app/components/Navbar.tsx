import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50">
      {/* Main Navbar */}
      <div className="flex items-center justify-between p-6 bg-[#21242E]">
        <Image src="/images/Logo.svg" alt="Home" width={150} height={150} />

        {/* Hamburger for mobile */}
        <div className="block md:hidden" onClick={toggleMenu}>
          <svg
            className="w-8 h-8 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-10">
          <ScrollLink
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer text-[#C5C4CA] font-bold hover:text-[#C652EE]"
            activeClass="text-[#C652EE]"
          >
            HOME
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer text-[#C5C4CA] font-bold hover:text-[#C652EE]"
            activeClass="text-[#C652EE]"
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer text-[#C5C4CA] font-bold hover:text-[#C652EE]"
            activeClass="text-[#C652EE]"
          >
            EXPERIENCE
          </ScrollLink>
          <ScrollLink
            to="skills"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer text-[#C5C4CA] font-bold hover:text-[#C652EE]"
            activeClass="text-[#C652EE]"
          >
            SKILLS
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer text-[#C5C4CA] font-bold hover:text-[#C652EE]"
            activeClass="text-[#C652EE]"
          >
            CONTACT
          </ScrollLink>
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed inset-0 bg-[#21242E] transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <div className="flex items-center justify-between p-6">
          <Image src="/images/Logo.svg" alt="Home" width={150} height={150} />
          <svg
            className="w-8 h-8 cursor-pointer text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col items-center space-y-8 mt-12 text-lg font-semibold text-white">
          <ScrollLink
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            activeClass="text-[#C652EE]"
            onClick={toggleMenu}
          >
            HOME
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            activeClass="text-[#C652EE]"
            onClick={toggleMenu}
          >
            ABOUT
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            activeClass="text-[#C652EE]"
            onClick={toggleMenu}
          >
            EXPERIENCE
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
            activeClass="text-[#C652EE]"
            onClick={toggleMenu}
          >
            CONTACT
          </ScrollLink>
        </ul>
      </div>

      {/* Background Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  )
}

export default Navbar
