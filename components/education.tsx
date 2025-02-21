"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Education() {
  const educationData = [
    {
      degree: "Honours Computer Science (H. BSc)",
      school: "Ontario Tech University, Oshawa, ON",
      period: "2022 - Present",
      details: [
        "Courses undertaken: Data Structures and Algorithms, OOP, REST API, Software Design, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, PostgreSQL.",
      ],
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-21%20at%2011.10.15-ccsXh2lYacYFTOLMjFuA565hZCfrjt.png", // Replace with actual university logo
      align: "left",
    },
    {
      degree: "High School",
      school: "Richmond Hill High School, ON",
      period: "2018-2022",
      details: ["Ontario Scholar", "12th Grade: 96%"],
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-21%20at%2011.10.15-ccsXh2lYacYFTOLMjFuA565hZCfrjt.png", // Replace with actual school logo
      align: "right",
    },
  ]

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            WHAT I HAVE STUDIED SO FAR
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-6xl font-bold mb-8 gradient-text"
          >
            Education.
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {/* Education items */}
          <div className="space-y-24">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${item.align === "left" ? "justify-start" : "justify-end"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center z-10">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Image
                      src={item.logo || "/placeholder.svg"}
                      alt={item.school}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                </div>

                {/* Content card */}
                <div className={`w-[calc(50%-2rem)] ${item.align === "right" ? "ml-auto" : "mr-auto"}`}>
                  <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.degree}</h3>
                    <p className="text-muted-foreground mb-2">{item.school}</p>
                    <p className="text-blue-600 mb-4">{item.period}</p>
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

