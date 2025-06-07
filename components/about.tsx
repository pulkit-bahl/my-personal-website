"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useState, useEffect } from "react"
import { X } from "lucide-react"

export default function About() {
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section id="about" className="pt-2 pb-8 md:pt-4 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            INTRODUCTION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="fluid-subheading font-bold mb-8 gradient-text"
          >
            About Me
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-12">
          <div className="w-full md:hidden mb-4">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 group mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                <div
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-white cursor-pointer transform transition-transform duration-300 group-hover:scale-105"
                  onClick={() => setIsImageOpen(true)}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullSizeRender%20(2).jpg-H44KCsOWpMlqfWQBKqXJ7Ndk1riTLy.jpeg"
                    alt="Pulkit Bahl"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Full Image
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="flex-1 space-y-3 md:space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.2 : 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
              I'm a cloud solutions architect with a specialization in Analytics & Data Analytics, currently working at
              Amazon (AWS). With 4+ years in the tech industry, I've helped businesses design scalable, data-driven
              architectures and explore the latest in AI & GenAI space. Beyond cloud strategy, I'm building hands-on
              expertise in Data Engineering, combining my passion for analytics with real-world implementation.
            </p>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
              I also enjoy content creation, sharing insights on Cloud, AI, and Data Analytics on LinkedIn. As a
              speaker, I've organized and led multiple hackathons, enablement sessions, and technical workshops to
              empower teams with cutting-edge solutions.
            </p>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
              On a personal front, when I'm not diving into tech, you can find me deep into personal finance space
              (analyzing stocks & crypto currencies), listening to a self-improvement audiobook, or planning my next
              travel!
            </p>
          </motion.div>
          <div className="hidden md:block">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
                <div
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-white cursor-pointer transform transition-transform duration-300 group-hover:scale-105"
                  onClick={() => setIsImageOpen(true)}
                >
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullSizeRender%20(2).jpg-H44KCsOWpMlqfWQBKqXJ7Ndk1riTLy.jpeg"
                    alt="Pulkit Bahl"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Full Image
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
          <div className="relative w-full h-[90vh]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullSizeRender%20(2).jpg-H44KCsOWpMlqfWQBKqXJ7Ndk1riTLy.jpeg"
              alt="Pulkit Bahl"
              layout="fill"
              objectFit="contain"
              className="bg-black/90"
            />
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
