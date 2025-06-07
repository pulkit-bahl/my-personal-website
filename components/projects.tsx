"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

export default function Projects() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const projects = [
    {
      title: "Enterprise Cloud Migration",
      description:
        "A comprehensive solution for migrating large-scale enterprise systems to the cloud, optimizing performance and reducing costs.",
      customStyle: "bg-gradient-to-br from-blue-100 to-purple-100 p-8 flex items-center justify-center",
      liveLink: "#",
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      title: "AI-Powered Analytics Platform",
      description:
        "An advanced analytics platform leveraging artificial intelligence to provide deep insights and predictive analysis for businesses.",
      customStyle: "bg-gradient-to-br from-purple-100 to-blue-100 p-8 flex items-center justify-center",
      liveLink: "#",
      githubLink: "https://github.com/yourusername/project2",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="projects" className="pt-0 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            SHOWCASING WORK
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="fluid-subheading font-bold mb-8 gradient-text"
          >
            Projects Portfolio
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`relative h-48 w-full ${project.customStyle}`}>
                <div className="text-gray-600 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="text-4xl font-bold mb-2"
                  >
                    Project {index + 1}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                    className="text-lg opacity-75"
                  >
                    Coming Soon
                  </motion.div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  className="text-xl font-bold"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="text-gray-600"
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  className="flex space-x-4"
                >
                  <button
                    onClick={() => setIsDialogOpen(true)}
                    className="flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </button>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors duration-300"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Coming Soon!</DialogTitle>
          </DialogHeader>
          <div className="p-6 text-center">
            <p className="text-lg text-gray-600">
              We're working hard to bring this project live. Please check back later!
            </p>
            <div className="w-48 h-48 mx-auto mt-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-gray-600">
              <div className="text-2xl font-bold">Coming Soon</div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
