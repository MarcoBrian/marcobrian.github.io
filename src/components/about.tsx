"use client"

import { motion } from "framer-motion"

const skills = [
  "Product Management",
  "Product Strategy",
  "Software Engineering",
  "UI/UX",
  "Data Analysis",
  "Web3 Development",
  "Solidity",
  "Smart Contract Development",
  "Protocol Design",
]

export function About() {
  return (
    <section id="about" className="px-6 py-24 bg-[var(--bg)]">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[var(--text)] mb-8">About</h2>

          <div className="space-y-8">
            <p className="text-lg text-[var(--text)] leading-relaxed">
            Hi, I'm Marco Widjaja, a Product Manager and Web3 builder passionate about DeFi and bringing the world on-chain. I graduated from University of Hong Kong with a Bachelor's degree in Computer Science (1st Class Honors).
            I worked at Shopee as a PM, where I led initiatives across user growth, authentication, and platform infrastructure. After 3.5+ years, I left to pursue a path of building, creating products at the intersection of DeFi and AI.
              </p>

              <p className="text-lg text-[var(--text)] leading-relaxed">
            Since then, I've built multiple projects recognized by ETHGlobal and Token2049, including 1Option, a decentralized options protocol, and MicroPay, a cross-chain micropayments framework for AI agents. I'm currently part of the Uniswap Hook Incubator (UHI7), exploring how composable DeFi can power the next generation of on-chain products and shape the future of money.
              </p>

            <p className="text-lg text-[var(--text)] leading-relaxed">
            Beyond tech, I co-run Mercury Sportswear, a golf apparel brand blending sport, design, and entrepreneurship.
            </p>

            <p className="text-lg text-[var(--text)] leading-relaxed">
            I build products with empathy for users and curiosity for what lies at the edge of innovation.
            </p>


            <div>
              <h3 className="text-xl font-bold text-[var(--text)] mb-4">Key Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center rounded-full bg-[var(--surface)] border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
