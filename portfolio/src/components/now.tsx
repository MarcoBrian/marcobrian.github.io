"use client"

import { motion } from "framer-motion"
import { BookOpen, Code, Compass } from "lucide-react"

const activities = [
  {
    title: "Learning",
    description: "Deep diving into Uniswap v4 hook patterns and MEV protection strategies.",
    icon: BookOpen,
    status: "active",
  },
  {
    title: "Building",
    description: "Shipping a new options protocol with improved capital efficiency.",
    icon: Code,
    status: "active",
  },
  {
    title: "Exploring",
    description: "Researching cross-chain messaging and intent-based architectures.",
    icon: Compass,
    status: "active",
  },
]

export function Now() {
  return (
    <section className="px-6 py-24 bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[var(--text)] mb-4">Now</h2>
          <p className="text-[var(--muted-text)] text-lg mb-12 leading-relaxed">What I&apos;m currently focused on.</p>

          <div className="grid gap-6 md:grid-cols-3">
            {activities.map((activity, index) => {
              const Icon = activity.icon
              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="rounded-2xl bg-white border border-[var(--border)] p-6 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface)]">
                      <Icon className="h-6 w-6 text-[var(--accent)]" />
                    </div>
                    <span className="text-xs font-mono text-[var(--muted-text)]">
                      {">"} status: {activity.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[var(--text)] mb-2">{activity.title}</h3>
                    <p className="text-[var(--muted-text)] leading-relaxed">{activity.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
