"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="py-0 md:py-0 pt-4 md:pt-0 flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-heading hero-title mt-1"
      >
        Hi there, I'm{" "}
        <span className="relative inline-block">
          <span className="relative">Pulkit Bahl</span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left"
          />
        </span>
        !
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed mt-1"
      >
        I'm a{" "}
        <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Solutions Architect
        </span>
        ,{" "}
        <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          AI & Data Enthusiast
        </span>
        , & an{" "}
        <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Award-Winning Speaker
        </span>
        , helping businesses drive innovation & apply emerging tech.
      </motion.p>
    </section>
  )
}
