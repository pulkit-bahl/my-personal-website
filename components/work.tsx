"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function Work() {
  const [selectedJob, setSelectedJob] = useState(0)

  const jobs = [
    {
      title: "IT Technician - Canada's Wonderland",
      company: "Canada's Wonderland",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-21%20at%2011.16.58-NG3cM5REz6HAntG5zHC5YAlC1wn9IK.png",
      period: "Jun. 2023 - Present",
      responsibilities: [
        "Provisioned Windows PCs with MDT, and deployed scripting via PowerShell and ConnectWise.",
        "Managed AD accounts to propagate ACLs and unified access across in-house apps, Exchange, and SharePoint.",
        "Configured Cisco CUCM, Unity, and Finesse for stable call routing and voicemail services.",
        "Handled switch patching and VLAN/routing via PUTTY & SecureCRT, ensuring stable network performance.",
        "Deployed Oracle POS/KDS/Debit solutions (EMC, Simphony), tracking updates in Jira & Confluence.",
      ],
    },
    {
      title: "System Support Specialist - Mackenzie Health",
      company: "Mackenzie Health",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-21%20at%2011.16.58-NG3cM5REz6HAntG5zHC5YAlC1wn9IK.png",
      period: "Previous Position",
      responsibilities: [
        "Managed system support operations",
        "Implemented healthcare IT solutions",
        "Provided technical support to medical staff",
      ],
    },
    {
      title: "Tech Sales Associate - Staples Canada",
      company: "Staples Canada (Co-op)",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-21%20at%2011.16.58-NG3cM5REz6HAntG5zHC5YAlC1wn9IK.png",
      period: "Previous Position",
      responsibilities: [
        "Assisted customers with technology purchases",
        "Provided technical support and recommendations",
        "Maintained product knowledge and sales targets",
      ],
    },
  ]

  return (
    <section id="work" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            MY PROFESSIONAL JOURNEY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-6xl font-bold mb-8 gradient-text"
          >
            Work Experience
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          {/* Jobs list */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {jobs.map((job, index) => (
              <div
                key={index}
                onClick={() => setSelectedJob(index)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  selectedJob === index
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={job.logo || "/placeholder.svg"}
                      alt={job.company}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className={`text-sm ${selectedJob === index ? "text-gray-100" : "text-muted-foreground"}`}>
                      {job.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Job details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold mb-2">{jobs[selectedJob].title}</h3>
            <p className="text-muted-foreground mb-2">{jobs[selectedJob].company}</p>
            <p className="text-blue-600 mb-6">{jobs[selectedJob].period}</p>
            <ul className="space-y-4">
              {jobs[selectedJob].responsibilities.map((responsibility, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="w-2 h-2 mt-2 mr-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                  <span className="text-gray-600">{responsibility}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

