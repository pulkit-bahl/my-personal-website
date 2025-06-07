"use client"

import { motion, useAnimation } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function Skills() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const skills = [
    {
      category: "Cloud Architecture & Solution Design",
      items: [
        "AWS Services, Infrastructure & Best Practices",
        "Architecture Design Principles",
        "Cloud Adoption Journey",
      ],
      icon: (
        <svg className="w-12 h-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M8 4V20" stroke="currentColor" strokeWidth="2" />
          <path d="M16 4V20" stroke="currentColor" strokeWidth="2" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      iconBg: "bg-blue-100",
    },
    {
      category: "Data Analytics & AI",
      items: [
        "Data Warehousing & ETL",
        "Database Technologies (SQL, NoSQL)",
        "Data Governance & Security",
        "Generative AI Services & Concepts",
      ],
      icon: (
        <svg className="w-12 h-12 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 4C7.58172 4 4 5.79086 4 8C4 10.2091 7.58172 12 12 12C16.4183 12 20 10.2091 20 8C20 5.79086 16.4183 4 12 4Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 8V16C4 18.2091 7.58172 20 12 20C16.4183 20 20 18.2091 20 16V8"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M4 12V16M12 12V20M20 12V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      iconBg: "bg-purple-100",
    },
    {
      category: "DevOps & Automation",
      items: ["CI/CD (GitHub, Terraform)", "Infrastructure as Code (IaC)", "DevOps Methodologies & Dev Pipelines"],
      icon: (
        <svg className="w-12 h-12 text-green-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 4V20M12 4L8 8M12 4L16 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12H20M4 12L8 8M4 12L8 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12L16 8M20 12L16 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      iconBg: "bg-green-100",
    },
    {
      category: "Migration & Modernization",
      items: ["Cloud Migration & Modernization Strategies & Methodologies", "Hybrid Cloud Configurations"],
      icon: (
        <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17 8L12 3M12 3L7 8M12 3V16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M20 21H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      iconBg: "bg-orange-100",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="skills" className="pt-0 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            TECHNICAL PROFICIENCIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="fluid-subheading font-bold mb-8 gradient-text"
          >
            Skills & Expertise
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-20 h-20 rounded-2xl ${skill.iconBg} flex items-center justify-center mb-6 mx-auto`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
