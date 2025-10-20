"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const achievements = [
  {
    event: "Uniswap Hook Incubator",
    result: "UHI 7 Cohort",
    prize: "Building v4 Hooks",
    logo: "/uniswap.png",
    date: "Oct - Dec 2025",
  },
  {
    event: "ETHOnline 2025 - Travelsure",
    result: "",
    prize: "",
    logo: "/ethglobal.jpg",
    date: "Oct 2025",
  },
  {
    event: "Token2049 Origins - MicroPay",
    result: "Top 5 Projects",
    prize: "Polkadot Ecosystem prize",
    logo: "/token2049.png",
    date: "Oct 2025",
  },
  {
    event: "ETHGlobal UniteDeFi - 1Option",
    result: "Top 7 Finalist",
    prize: "2nd Place 1inch Limit Order Protocol Track prize",
    logo: "/ethglobal.jpg",
    date: "Aug 2025",
  },
  {
    event: "Metana Bootcamp",
    result: "Advanced Solidity Bootcamp",
    prize: "",
    logo: "/metana.jpg",
    date: "May - Oct 2025",
  }
]

export function HackathonJourney() {
  return (
    <section className="px-6 py-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[var(--text)] mb-4">Web3 Journey</h2>
          <p className="text-[var(--muted-text)] text-lg mb-12 leading-relaxed">
Placeholder text
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-6 bottom-6 w-px bg-[var(--border)] hidden md:block" />

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.event}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="relative flex gap-6 items-center"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex relative z-10 h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white border-2 border-[var(--accent)]">
                    <div className="h-3 w-3 rounded-full bg-[var(--accent)]" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 rounded-2xl bg-white border border-[var(--border)] p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <Image
                        src={achievement.logo || "/placeholder.svg"}
                        alt={`${achievement.event} logo`}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-lg object-contain"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-xl font-bold text-[var(--text)]">{achievement.event}</h3>
                          <span className="text-sm text-[var(--muted-text)] font-mono">{achievement.date}</span>
                        </div>
                        <p className="text-[var(--muted-text)] mb-2">
                          {achievement.result} · {achievement.prize}
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
