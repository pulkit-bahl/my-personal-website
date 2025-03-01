"use client"

import { motion } from "framer-motion"
import { Calendar, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"
import { useState, useRef } from "react"

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

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

  const totalSlides = certifications.length
  const slidesToShow = 3

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  const visibleCertifications = [...Array(slidesToShow)].map(
    (_, index) => certifications[(currentIndex + index) % totalSlides],
  )

  return (
    <section id="certifications" className="py-16 bg-white">
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
            className="text-6xl font-bold mb-8 gradient-text"
          >
            Featured Certifications
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden">
            <div ref={containerRef} className="flex transition-transform duration-300 ease-in-out">
              {visibleCertifications.map((cert, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4">
                  <Card className="h-full flex flex-col">
                    <CardHeader className="flex-grow">
                      <div className="w-32 h-32 mb-4 mx-auto relative">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          layout="fill"
                          objectFit="contain"
                        />
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
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous certification"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next certification"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

