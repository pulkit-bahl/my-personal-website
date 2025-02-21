"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            INTRODUCTION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-6xl font-bold mb-8 gradient-text"
          >
            About Me
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          <motion.div
            className="flex-1 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground">
              I'm a full-stack developer with a passion for creating elegant, efficient, and user-friendly web
              applications. With expertise in modern web technologies and a keen eye for design, I strive to build
              digital experiences that make a difference.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying a good book on software architecture and design patterns.
            </p>
          </motion.div>
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image src="/placeholder.svg" alt="Your Name" width={300} height={300} className="rounded-full shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

