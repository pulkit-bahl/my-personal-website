"use client"

import { motion } from "framer-motion"
import { Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  const certifications = [
    {
      title: "AWS Solutions Architect - Professional",
      organization: "Amazon Web Services (AWS)",
      date: "Sept 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SA%20Pro%20Cert-bTpBnXy7zA2jWfszn0Yysona5MNhtq.png",
      verificationUrl: "https://www.credly.com/badges/ab6f4a57-9752-46aa-8387-8bd01b9337b1/linked_in_profile",
    },
    {
      title: "AWS Data Engineer - Associate",
      organization: "Amazon Web Services (AWS)",
      date: "Dec 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AWS%20Data%20Engineer-Y74A5r23fvyjImSWHgwXnEyeZZw3x7.png",
      verificationUrl: "https://www.credly.com/badges/f804db7a-6ea0-4e17-a281-0bd72a682a6e/linked_in_profile",
    },
    {
      title: "AWS AI Practitioner - Early Adopter",
      organization: "Amazon Web Services (AWS)",
      date: "Oct 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AWS%20AI%20Practitioner-or2SWS8AAPn2kKKE9skPobvK2FC1zq.png",
      verificationUrl: "https://www.credly.com/badges/2d3e2c0f-506b-4512-b01b-784e1dd88ba7/linked_in_profile",
    },
    {
      title: "AWS Certified Security - Specialty",
      organization: "Amazon Web Services (AWS)",
      date: "May 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AWS%20Security%20Cert-9lYixwWxzfKpiaUpOERdPGMZy6Z0A4.png",
      verificationUrl: "https://www.credly.com/badges/1dffda34-805a-44d1-b106-eb412d9879bb/linked_in_profile",
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (isMobile) {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth
        const clientWidth = containerRef.current.clientWidth
        const currentScroll = containerRef.current.scrollLeft
        const itemWidth = scrollWidth / certifications.length
        let nextScrollPosition = currentScroll + itemWidth

        if (nextScrollPosition >= scrollWidth) {
          nextScrollPosition = 0
        }

        containerRef.current.scrollTo({
          left: nextScrollPosition,
          behavior: "smooth",
        })

        setActiveIndex((prevIndex) => (prevIndex + 1) % certifications.length)
      }
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length)
    }
  }

  const prevSlide = () => {
    if (isMobile) {
      if (containerRef.current) {
        const scrollWidth = containerRef.current.scrollWidth
        const clientWidth = containerRef.current.clientWidth
        const currentScroll = containerRef.current.scrollLeft
        const itemWidth = scrollWidth / certifications.length
        let prevScrollPosition = currentScroll - itemWidth

        if (prevScrollPosition < 0) {
          prevScrollPosition = scrollWidth - clientWidth
        }

        containerRef.current.scrollTo({
          left: prevScrollPosition,
          behavior: "smooth",
        })

        setActiveIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length)
      }
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length)
    }
  }

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollLeft
      const itemWidth = containerRef.current.scrollWidth / certifications.length
      const newIndex = Math.round(scrollPosition / itemWidth) % certifications.length
      setActiveIndex(newIndex)
    }
  }

  const renderCertification = (cert: any, index: number) => (
    <div key={index} className={`w-full md:w-1/3 flex-shrink-0 px-4 ${isMobile ? "snap-center" : ""}`}>
      <Card className="h-full flex flex-col">
        <CardHeader className="flex-grow">
          <div className="w-32 h-32 mb-4 mx-auto relative">
            <Image src={cert.image || "/placeholder.svg"} alt={cert.title} layout="fill" objectFit="contain" />
          </div>
          <CardTitle className="text-xl text-center">{cert.title}</CardTitle>
          <CardDescription className="text-center">{cert.organization}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-end">
          <div className="space-y-4">
            <div className="flex items-center justify-center text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{cert.date}</span>
            </div>
            <div className="flex justify-center">
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-purple-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Verify Certificate</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <section id="certifications" className="pt-0 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            PROFESSIONAL CREDENTIALS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="fluid-text gradient-text mb-8"
          >
            Featured Certifications
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {isMobile ? (
            <div className="relative">
              <div
                ref={containerRef}
                className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory relative pb-8"
                onScroll={handleScroll}
              >
                {certifications.map((cert, index) => renderCertification(cert, index))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-4">
                {certifications.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="relative flex flex-col items-center">
              <div className="flex mb-8">
                {[0, 1, 2].map((offset) => {
                  const index = (currentIndex + offset) % certifications.length
                  return renderCertification(certifications[index], index)
                })}
              </div>
              <div className="flex justify-center space-x-2">
                {certifications.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          <button
            onClick={prevSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isMobile ? "left-2 z-10" : "-left-4"
            }`}
            aria-label="Previous certification"
          >
            <ChevronLeft className={`${isMobile ? "h-4 w-4" : "h-6 w-6"}`} />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isMobile ? "right-2 z-10" : "-right-4"
            }`}
            aria-label="Next certification"
          >
            <ChevronRight className={`${isMobile ? "h-4 w-4" : "h-6 w-6"}`} />
          </button>
        </div>
      </div>
    </section>
  )
}
