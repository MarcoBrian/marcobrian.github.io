"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="px-6 py-24 bg-[var(--bg)]">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[var(--text)] mb-4">Contact</h2>
          <p className="text-[var(--muted-text)] text-lg mb-12 leading-relaxed">
            Let&apos;s build something together. Drop me a message.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-8 text-center"
            >
              <p className="text-lg text-[var(--text)] mb-2">Thanks for reaching out!</p>
              <p className="text-sm font-mono text-[var(--accent)]">{">"} ping received</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  className="w-full rounded-xl border-[var(--border)] bg-white focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-xl border-[var(--border)] bg-white focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full rounded-xl border-[var(--border)] bg-white focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-[var(--accent)] text-white hover:bg-[var(--accent-2)] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Send Message
              </Button>
            </form>
          )}
        </motion.div>
      </div>

    </section>
  )
}
