"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vue.js", "Redux"],
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      iconBg: "bg-blue-100",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Fastify"],
      icon: (
        <svg className="w-12 h-12 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      iconBg: "bg-green-100",
    },
    {
      category: "Database",
      items: ["MongoDB", "Mongoose"],
      icon: (
        <svg className="w-12 h-12 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 5C21 6.65685 17.4183 8 13 8C8.58172 8 5 6.65685 5 5M21 5C21 3.34315 17.4183 2 13 2C8.58172 2 5 3.34315 5 5M21 5V19C21 20.6569 17.4183 22 13 22C8.58172 22 5 20.6569 5 19V5M21 12C21 13.6569 17.4183 15 13 15C8.58172 15 5 13.6569 5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      iconBg: "bg-purple-100",
    },
    {
      category: "Performance",
      items: ["Optimization", "Caching"],
      icon: (
        <svg className="w-12 h-12 text-yellow-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13 10V3L4 14H11V21L20 10H13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      iconBg: "bg-yellow-100",
    },
  ]

  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            MY TECHNICAL PROFICIENCIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-6xl font-bold mb-8 gradient-text"
          >
            Skills & Expertise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-20 h-20 rounded-2xl ${skill.iconBg} flex items-center justify-center mb-6 mx-auto`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">{skill.category}</h3>
              <div className="text-center text-gray-600">{skill.items.join(", ")}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

