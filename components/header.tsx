"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

function useBodyScrollLock() {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  const lockScroll = () => {
    document.body.style.overflow = "hidden"
  }

  const unlockScroll = () => {
    document.body.style.overflow = "visible"
  }

  return [lockScroll, unlockScroll]
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [lockScroll, unlockScroll] = useBodyScrollLock()

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleOrientationChange = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false)
        unlockScroll()
      }
    }

    window.addEventListener("orientationchange", handleOrientationChange)
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange)
    }
  }, [isMenuOpen, unlockScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      unlockScroll()
    } else {
      setIsMenuOpen(true)
      lockScroll()
    }
    // Force a re-render to ensure the menu state is updated
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"))
    }, 0)
  }

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    unlockScroll()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Height of the fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
  }

  const menuItems = [
    { href: "about", label: "About" },
    { href: "work", label: "Work" },
    { href: "education", label: "Education" },
    { href: "skills", label: "Skills" },
    { href: "awards", label: "Awards" },
    { href: "certifications", label: "Certs" },
    { href: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const header = document.querySelector("header")
    if (header) {
      const headerHeight = header.offsetHeight
      document.body.style.paddingTop = `${headerHeight}px`
    }
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          hasScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200/50"
            : "bg-white border-b border-border/40"
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button
              onClick={scrollToTop}
              className="font-bold text-lg transition-colors md:hover:text-blue-600 mobile-logo"
            >
              Pulkit Bahl
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden touch-manipulation"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[100] overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute inset-0 bg-white overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-4">
                  <button onClick={toggleMenu} className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none">
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <nav className="flex-1 px-6 pb-6">
                  <ul className="space-y-6">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <button
                          onClick={() => scrollToSection(item.href)}
                          className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors mobile-menu-item"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
