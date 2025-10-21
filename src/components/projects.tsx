"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { GitHubLogo } from "@/components/github-logo"

const projects = [
  {
    name: "1Option",
    description: `A decentralized, permissionless protocol for options built on the 1inch Limit Order Protocol. 
    🏆 Winner of Top 7 Projects on ETHGlobal Hackathon Unite DeFi + 🏆 2nd Place in 1Inch Limit Order Protocol Track.`,
    tags: ["Solidity", "1inch", "Options", "ETHGlobal"],
    demo: "https://github.com/MarcoBrian/1Option-Protocol",
  },
  {
    name: "MicroPay",
    description: `A cross-chain micropayment aggregation system that
     collects x402 micropayments to perform batched cross-chain payouts. 
    🏆 Winner of Top 5 Projects on Token2049 Origins Hackathon + 
    🏆 Winner of Polkadot Ecosystem Prize.`,
    tags: ["Polkadot", "Cross-chain", "AI", "x402", "Hyperbridge", "Token2049"],
    demo: "https://github.com/X402-Universal/X402-Universal/tree/main",
  },
  {
    name: "StackFi",
    description: "StackFi is a non-custodial, oracle-secured, decentralized app that automates dollar-cost averaging (DCA) into crypto portfolios, safely and transparently on-chain.",
    tags: ["Chainlink", "DeFi", "Uniswap", "DCA","Automation"],
    demo: "https://github.com/MarcoBrian/StackFi",
  },
  {
    name: "Travelsure",
    description: "Travelsure is an AI-assisted parametric insurance platform that lets travelers protect any flight and get instant, on-chain payouts when delays occur. No forms, no waiting.",
    tags: ["Chainlink", "DeFi", "Insurance", "Oracles"],
    demo: "https://github.com/MarcoBrian/Travelsure",
  },
  {
    name: "Covid19 Telegram Bot",
    description: `This is a telegram bot that fetches data from the John Hopkins University COVID-19 dataset (JHU CSSE) and present it to you in the form of a chat.`,
    tags: ["Telegram", "Bot", "MongoDB", "Python"],
    demo: "https://github.com/MarcoBrian/covid19-telegrambot",
  },
  {
    name: "Moodify",
    description: `Using Deep Neural Inception Net to detect facial emotion and recommend songs through Spotify API`,
    tags: ["Spotify", "Deep Learning", "API", "Python"],
    demo: "https://github.com/MarcoBrian/Moodify",
  },
  {
    name: "TwitterBot-KernelKeylogger",
    description:`A spyware that runs on Linux operating systems, keylogger that works inside the kernel and uses twitter as a covert channel for communication. Built with C and Python.`,
    tags: ["Computer Security", "Linux", "Kernel", "Twitter", "C", "Python"],
    demo: "https://github.com/MarcoBrian/TwitterBotKernelKeylogger",
  }
]

export function Projects() {
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(projects.length / pageSize)
  const startIndex = currentPage * pageSize
  const visibleProjects = projects.slice(startIndex, startIndex + pageSize)

  const goToPage = (page: number) => {
    if (page < 0 || page >= totalPages) return
    setCurrentPage(page)
  }

  return (
    <section id="projects" className="px-6 py-24 bg-custom-bg">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-custom-text mb-4">Projects</h2>
          <p className="text-custom-muted text-lg mb-12 leading-relaxed">
            
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="h-full rounded-3xl bg-white border border-custom-border p-8 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(17,24,39,0.08)]">
                  <h3 className="text-2xl font-bold text-custom-text mb-3">{project.name}</h3>
                  <p className="text-custom-muted mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-custom-surface px-3 py-1 text-xs font-mono text-custom-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-custom-accent font-medium group-hover:gap-3 transition-all duration-200"
                  >
                    <GitHubLogo />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dot pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to page ${i + 1}`}
                  onClick={() => goToPage(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                    i === currentPage ? "bg-gray-500" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
