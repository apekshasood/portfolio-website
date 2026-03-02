'use client'

import Navbar from '@/app/components/Navbar'
import HomeSection from '@/app/components/HomeSection'
import AboutMe from '@/app/components/AboutMe'
import Experience from '@/app/components/Experience'
import Skills from '@/app/components/Skills'
import Blog from '@/app/components/Blog'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <HomeSection />
      <AboutMe />
      <Experience />
      <Skills />
      <Blog />
      <Footer />
    </main>
  )
}
