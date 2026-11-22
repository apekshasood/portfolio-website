import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Work from "@/app/components/Work";
import Marquee from "@/app/components/Marquee";
import About from "@/app/components/About";
import Experience from "@/app/components/Experience";
import Skills from "@/app/components/Skills";
import Education from "@/app/components/Education";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Work />
      <Marquee />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
