"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

export default function Awards() {
  const awards = [
    {
      title: "Best Innovative Project",
      organization: "Tech Conference 2022",
      year: "2022",
      description: "Awarded for developing a groundbreaking AI-powered solution.",
    },
    {
      title: "Outstanding Contribution",
      organization: "Company Name",
      year: "2021",
      description: "Recognized for exceptional performance and dedication to project success.",
    },
  ]

  return (
    <section id="awards" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            RECOGNITION AND ACCOMPLISHMENTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-6xl font-bold mb-8 gradient-text"
          >
            Awards & Achievements
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white mr-4">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{award.title}</h3>
                  <p className="text-muted-foreground">{award.organization}</p>
                </div>
              </div>
              <p className="text-blue-600 mb-2">{award.year}</p>
              <p className="text-gray-600">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

