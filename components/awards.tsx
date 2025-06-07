"use client"

import { Calendar, ExternalLink, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion } from "framer-motion"

export default function Awards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const awards = [
    {
      title: "Rookie Of The Year 2024",
      organization: "Amazon (AWS)",
      team: "AWS Solutions Architecture Team UKI",
      date: "Nov 2024",
      description: "Awarded for outstanding performance as a new team member in the AWS UKI SMB SA Team.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1633.jpg-Z84OHhBSKPyBKwjtcFlrIOC1KC4HoF.jpeg",
      link: "https://www.linkedin.com/posts/pulkit-bahl_aws-cloudcomputing-technology-activity-7289230829803683840-vYvN?utm_source=share&utm_medium=member_desktop&rcm=ACoAACS98dwBIXFMbxovaJ_m1CgNUaWu-C2Q_Qw",
    },
    {
      title: "Most Memorable Lightning Talk 2023",
      organization: "Amazon (AWS)",
      team: "AWS Tech U Cohort",
      date: "March 2023",
      description: "Recognized for delivering most impactful and memorable talk/presentation.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4186_Original%20(1).jpg-wn5ANF0ej9dPnMpkon9iwFXqJlVrhU.jpeg",
      link: "https://www.linkedin.com/posts/pulkit-bahl_dataanalytics-activity-7040050483314487296-9dgB?utm_source=share&utm_medium=member_desktop&rcm=ACoAACS98dwBIXFMbxovaJ_m1CgNUaWu-C2Q_Qw",
    },
    {
      title: "Passed 8/12 AWS Certifications",
      organization: "Amazon (AWS)",
      team: "",
      date: "Dec 2024",
      description: "Achieved 8 out of 12 AWS Certifications within just 2.5 years.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2428(1).jpg-Al7ZsNpchFTe3DyxjMQybuUnmtbzEF.jpeg",
      link: "https://www.linkedin.com/in/pulkit-bahl/details/certifications/",
    },
    {
      title: "Published Research Paper",
      organization: "BCA, GGSIPU",
      team: "",
      date: "March 2019",
      description: "Secured 3rd Position & Cash Prize for presenting research paper on 'Mobile OS: Case Study of iOS'.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6509_Original%20(1).jpg-ZwRxszuCioz0FeRqZEBMsBtG2P4MpR.jpeg",
      link: "https://www.linkedin.com/in/pulkit-bahl/details/publications/",
    },
  ]

  return (
    <section id="awards" className="pt-0 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            RECOGNITION & ACCOMPLISHMENTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="fluid-subheading font-bold mb-8 gradient-text"
          >
            Awards & Achievements
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div
                  className="w-full md:w-1/3 aspect-square relative rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage(award.image)}
                >
                  <Image
                    src={award.image || "/placeholder.svg"}
                    alt={award.title}
                    layout="fill"
                    objectFit={award.title === "Most Memorable Lightning Talk 2023" ? "contain" : "cover"}
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      award.title === "Most Memorable Lightning Talk 2023" ? "p-2 bg-gray-50" : ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to enlarge
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{award.title}</h3>
                  <p className="text-blue-600 mb-1">{award.organization}</p>
                  {award.team && <p className="text-gray-600 mb-2">{award.team}</p>}
                  <div className="flex items-center text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{award.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{award.description}</p>
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-purple-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span>View on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
          <div className="relative w-full h-[90vh]">
            {selectedImage && (
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Award detail"
                layout="fill"
                objectFit="contain"
                className="bg-black/90"
              />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
