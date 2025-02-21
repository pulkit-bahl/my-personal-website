"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const roles = [
    "Solutions Architect",
    "Tech Evangelist",
    "Analytics & AI Enthusiast",
    "Award winning Speaker",
    "Creator",
  ]
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-8 font-heading"
      >
        Hey there, I'm{" "}
        <span className="relative inline-block">
          Pulkit Bahl
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400"></span>
          <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-70"></span>
        </span>
        !
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl flex items-center justify-center gap-2 flex-wrap"
      >
        <span>I'm a</span>
        <span className="text-blue-600 font-semibold min-w-[200px]">{roles[currentRole]}</span>
        <span className="flex items-center gap-2">
          - welcome to my personal website, I built with love <Heart className="h-5 w-5 text-red-500 animate-pulse" />
        </span>
      </motion.div>
    </section>
  )
}

