"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const experiences = [
  {
    company: "Web3 Builder",
    position: "Self-Employed",
    duration: "April 2025 - Present",
    description: "Building products at the intersection of DeFi and AI",
    logo: "/option.png",
  },
  {
    company: "Shopee",
    position: "Product Manager",
    duration: "Aug 2021 - April 2025",
    description: "Regional Product Manager spearheading global user account and identity products at Shopee, delivering authentication, fraud-prevention, and ad-integration projects that improved conversion, security, and operational efficiency across 10+ markets.",
    logo: "/shopee.jpg",
  },
  {
    company: "Gense",
    position: "Software Engineer Intern",
    duration: "June 2020 - August 2020",
    description: "Software & Algorithms for Medical Imaging",
    logo: "/gense.jpeg",
  },
  {
    company: "Tokopedia",
    position: "Software Engineer Intern",
    duration: "2019",
    description: "Building Recommendation System for Tokopedia's e-commerce platform",
    logo: "/tokopedia.png",
  },
]

export function WorkExperience() {
  return (
    <section className="px-6 py-24 bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[var(--text)] mb-4">Work Experience</h2>
          <p className="text-[var(--muted-text)] text-lg mb-12 leading-relaxed">
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-3 top-6 bottom-6 w-px bg-[var(--border)] hidden md:block" />

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative flex gap-6 items-center"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex relative z-10 h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 -mr-2">
                  </div>

                  {/* Content card */}
                  <div className="flex-1 rounded-2xl bg-white border border-[var(--border)] p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <Image
                        src={experience.logo || "/placeholder.svg"}
                        alt={`${experience.company} logo`}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-lg object-contain"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-xl font-bold text-[var(--text)]">{experience.company}</h3>
                          <span className="text-sm text-[var(--muted-text)] font-mono">{experience.duration}</span>
                        </div>
                        <p className="text-[var(--muted-text)] mb-2 font-medium">
                          {experience.position}
                        </p>
                        <p className="text-[var(--muted-text)] text-sm leading-relaxed">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
