"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer') || document.querySelector('[data-footer]')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const isFooterVisible = footerRect.top <= window.innerHeight
        setShowScrollTop(isFooterVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}

      <motion.div
        data-footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pt-8 pb-8 border-t border-[var(--border)] text-center"
      >
        <p className="text-sm text-[var(--muted-text)] text-center">
          © 2025 Marco Brian Widjaja.
        </p>
      </motion.div>
    </>
  )
}
