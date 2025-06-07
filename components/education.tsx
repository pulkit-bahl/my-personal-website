"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { GraduationCap, BookOpen } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      degree: "Master of Science (MSc), Business Analytics",
      school: "University College Cork (UCC)",
      shortName: "UCC",
      location: "Cork, Ireland",
      period: "2021 - 2022",
      grade: "Distinction",
      details: [
        "Courses undertaken: Data Analysis, Prescriptive Analysis, Descriptive and Predictive Analysis, Data Visualisation, Python and R Programming, Cloud Computing, Design Thinking, Business Data Strategy and Management, Information Systems Project Planning.",
      ],
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UCC%20Logo-Sj2l2S63HLd2aQf9CJ5sdp5CjDnIbk.png",
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
    },
    {
      degree: "Bachelors of Computer Applications (BCA)",
      school: "Guru Gobind Singh Indraprastha University (GGSIPU)",
      shortName: "GGSIPU",
      location: "New Delhi, India",
      period: "2016 - 2019",
      grade: "Distinction",
      details: [
        "Courses undertaken: Mathematics, Data Structure, Database Management System (DBMS), Software Engineering, Data Warehouse and Data Mining, Java, Object Oriented Programming Languages, Linux, Operating System, Mobile Computing.",
      ],
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GGSIPU%20Logo-PS9haugxtCfSWm9wIjzT2fwzCartaa.png",
      icon: <BookOpen className="w-5 h-5 text-purple-600" />,
    },
  ]

  return (
    <section id="education" className="pt-0 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            ACADEMIC JOURNEY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="fluid-subheading font-bold mb-8 gradient-text"
          >
            Education
          </motion.h2>
        </div>

        <div className="relative">
          {/* Timeline layout - different for mobile and desktop */}
          <div className="md:hidden absolute left-[20px] top-[24px] bottom-[24px] w-px bg-gradient-to-b from-blue-300 to-purple-300"></div>
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-300 to-purple-300"></div>

          {/* Education items */}
          <div className="space-y-12 md:space-y-24">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-start md:items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline dot - different position for mobile and desktop */}
                <div
                  className={`
                    absolute w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full 
                    flex items-center justify-center z-10
                    md:left-1/2 md:transform md:-translate-x-1/2
                    left-[20px] top-[40px] transform -translate-x-1/2
                  `}
                >
                  {item.icon}
                </div>

                {/* Content card - different position and width for mobile and desktop */}
                <div
                  className={`
                    bg-white rounded-lg p-6 shadow-lg border border-gray-100 
                    hover:shadow-xl transition-shadow duration-300
                    ml-12 w-[calc(100%-3rem)]
                    md:ml-0 md:w-[calc(50%-2rem)] 
                    ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}
                  `}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <Image src={item.logo || "/placeholder.svg"} alt={item.school} fill className="object-contain" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{item.degree}</h3>
                      <p className="text-muted-foreground mb-1">{item.school}</p>
                      <p className="text-muted-foreground mb-2">{item.location}</p>
                    </div>
                  </div>
                  <p className="text-blue-600 mb-2">{item.period}</p>
                  <p className="text-green-600 mb-4">Grade: {item.grade}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
