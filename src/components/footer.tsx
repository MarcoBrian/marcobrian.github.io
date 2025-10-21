"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-24 pt-8 pb-8 border-t border-[var(--border)] text-center"
    >
      <p className="text-sm text-[var(--muted-text)] text-center">
        © 2025 Marco Brian Widjaja.
      </p>
    </motion.div>
  )
}
