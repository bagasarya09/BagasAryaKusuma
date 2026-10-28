import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

import Hero from "../components/sections/Hero"
import About from "../components/sections/About"
import Skills from "../components/sections/Skills"
import Portfolio from "../components/sections/Portfolio"
import Contact from "../components/sections/Contact"
import Experience from "../components/sections/Experience"

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}