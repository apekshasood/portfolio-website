'use client'

import AboutMe from "@/app/components/AboutMe";
import Experience from "@/app/components/Experience";
import HomeSection from "@/app/components/HomeSection";
import Navbar from "@/app/components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#21242E] p-12 lg:p-0">
    <Navbar />
     <HomeSection />
     <AboutMe />
     <Experience />
     <Skills />
     {/* <ContactMe /> */}
     <Footer />
    </main>
  );
}
