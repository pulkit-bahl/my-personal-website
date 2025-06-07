"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function Work() {
  const [selectedJob, setSelectedJob] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const jobs = [
    {
      title: "Solutions Architect",
      company: "Amazon (AWS)",
      location: "Dublin, Ireland",
      period: "Sept 2022 - Present",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0836.PNG-5ZeHEM6ZlKaIteIQhNC5Rj20O26EVw.jpeg",
      logoStyle: { objectFit: "cover", objectPosition: "center 40%" },
      abstract:
        "I help businesses in the UK & Ireland unlock the full potential of the cloud—optimizing performance, cutting costs, and driving innovation through AI and data analytics. With a strong background in cloud architecture, data engineering, and AI/ML, I've led high-impact transformations across industries, from scaling data pipelines to automating workflows with AI.",
      achievements: [
        {
          title: "Cloud Transformation & Cost Optimization",
          description:
            "Worked with AWS customers to design and implement scalable, high-performance cloud solutions. My strategies have led to 25% faster system performance and 20% reduction in operational costs, empowering companies to scale efficiently.",
        },
        {
          title: "Data Engineering & Analytics",
          description:
            "Built robust, scalable data pipelines using key AWS Analytics services like: Amazon Redshift & Glue, integrating diverse data sources for advanced analytics. By designing strong data governance frameworks, I ensure security, compliance, while achieving 40% faster data processing.",
        },
        {
          title: "AI & Intelligent Automation",
          description:
            "Specialize in AI-driven document processing, using Amazon Bedrock and GenAI to automate workflows, reducing manual effort by 60% and accelerating data extraction & analysis.",
        },
        {
          title: "Technical Leadership & Enablement",
          description:
            "Led technical workshops, hackathons, and hands-on training—empowering customers to build Proof of Concepts (POCs) and MVPs in Generative AI, Cloud, and Data Analytics.",
        },
      ],
    },
    {
      title: "Junior Data Analyst",
      company: "Infosys",
      location: "Pune & Mysore, India",
      period: "Jul 2019 - Aug 2021",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0837.jpg-xzfVKT2pJ1zXttsCBMOZbK9yab1KGo.jpeg",
      logoStyle: { objectFit: "cover", objectPosition: "center 35%" },
      abstract:
        "At Infosys, I streamlined IT operations, automated workflows, and optimized database processes—helping reduce manual workloads and improve efficiency for a Fortune 500 pharmaceutical company.",
      achievements: [
        {
          title: "Automated Report Creation",
          description: "Saved 90+ hours/month by automating repetitive reporting tasks.",
        },
        {
          title: "Data-Driven Dashboards",
          description:
            "Built dynamic dashboards using Excel, Tableau & SQL, reducing manual reporting by 12 hours/week.",
        },
        {
          title: "Proactive System Monitoring",
          description:
            "Developed email-trigger alerts for high CPU utilization, preventing system failures and reducing workload by 10%.",
        },
        {
          title: "Root Cause & Performance Analysis",
          description:
            "Conducted in-depth SWOT & Root Cause Analysis, leading to faster issue resolution and improved system reliability.",
        },
      ],
    },
    {
      title: "Web Development Intern",
      company: "NEC",
      location: "Delhi, India",
      period: "Jan 2018 - Feb 2018",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/png-clipart-nec-corporation-of-america-logo-company-lenovo-logo-miscellaneous-blue-Photoroom-XNsTuWDmZU8dCoVEfsU9YCPZl3LU7w.png",
      logoStyle: { objectFit: "cover", objectPosition: "center center", transform: "scale(1.2)" },
      abstract:
        "At NEC, I worked on front-end web development to improve internal applications, increasing employee engagement and usability.",
      achievements: [
        {
          title: "UI/UX Optimization",
          description:
            "Enhanced the front-end experience using HTML, CSS, JavaScript, and C#.Net, resulting in a 25% increase in employee engagement.",
        },
        {
          title: "Cross-Browser Consistency",
          description:
            "Standardized website presentation across Chrome, Safari, and other browsers, improving accessibility.",
        },
        {
          title: "WordPress Development",
          description: "Designed and refined WordPress-based websites, ensuring better structure and usability.",
        },
      ],
    },
  ]

  useEffect(() => {
    // Force a re-render after initial mount to trigger animations
    setSelectedJob(selectedJob)
  }, [selectedJob]) // Added selectedJob to the dependency array

  return (
    <section id="work" className="pt-0 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            PROFESSIONAL JOURNEY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="fluid-subheading font-bold mb-8 gradient-text"
          >
            Work Experience
          </motion.h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid md:grid-cols-[300px_1fr] gap-8"
        >
          {/* Job List */}
          <motion.div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                onClick={() => setSelectedJob(index)}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-4 border ${
                  selectedJob === index
                    ? "border-blue-600 bg-blue-50"
                    : "border-transparent hover:border-gray-200 hover:bg-gray-50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-white ${
                    selectedJob === index ? "ring-2 ring-blue-600" : "border border-gray-200"
                  }`}
                >
                  <Image
                    src={job.logo || "/placeholder.svg"}
                    alt={job.company}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain p-1"
                    style={{
                      ...(job.logoStyle as any),
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold truncate ${selectedJob === index ? "text-blue-600" : ""}`}>
                    {job.title}
                  </h3>
                  <p className="text-sm truncate text-muted-foreground">{job.company}</p>
                </div>
                <ChevronRight
                  className={`w-5 h-5 ${selectedJob === index ? "text-blue-600" : "text-muted-foreground"}`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Job Details */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedJob}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{jobs[selectedJob].title}</h3>
                <p className="text-xl text-blue-600">{jobs[selectedJob].company}</p>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-2" />
                  {jobs[selectedJob].location}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-5 h-5 mr-2" />
                  {jobs[selectedJob].period}
                </div>
              </div>

              <p className="text-gray-600 mb-8">{jobs[selectedJob].abstract}</p>

              <div className="space-y-6">
                {jobs[selectedJob].achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * idx }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
