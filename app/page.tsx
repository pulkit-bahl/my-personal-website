import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Work from "@/components/work"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Awards from "@/components/awards"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-8">
        <Hero />
        <About />
        <Work />
        <Education />
        <Skills />
        <Awards />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
