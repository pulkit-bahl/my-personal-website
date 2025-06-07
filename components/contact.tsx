"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Linkedin } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      label: "Email",
      value: "Pulkitbahl11@gmail.com",
    },
    {
      icon: <Linkedin className="h-6 w-6 text-blue-600" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/pulkit-bahl/",
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      label: "Location",
      value: "Dublin, Ireland",
    },
  ]

  return (
    <section id="contact" className="pt-0 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-muted-foreground uppercase tracking-wider mb-2"
          >
            GET IN TOUCH
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="fluid-subheading font-bold mb-8 gradient-text"
          >
            Contact
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-lg p-4 sm:p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative flex items-center space-x-4 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-sm font-medium text-muted-foreground">{item.label}</h3>
                    <p className="font-semibold responsive-contact-text truncate">{item.value}</p>
                  </div>
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10"
                      aria-label={`${item.label}: ${item.value}`}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
