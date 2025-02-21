import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Work from "@/components/work"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Awards from "@/components/awards"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-20">
        <Hero />
        <About />
        <Work />
        <Education />
        <Skills />
        <Awards />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

