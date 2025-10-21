"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { XLogo } from "@/components/x-logo"
import { GitHubLogo } from "@/components/github-logo"
import { LinkedInLogo } from "@/components/linkedin-logo"
import { ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

export function Hero() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const phrases = ["git add 'product manager experience' ", "git commit -m 'web3 builder + hackathon winner' ", "git push origin keep_building"]
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }
   
  useEffect(() => {
    const currentPhrase = phrases[currentIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }, isDeleting ? 50 : 150) // Faster deleting, slower typing
    
    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, phrases])

  return (
    <section className="relative px-6 h-screen flex items-center">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-balance text-5xl font-bold tracking-tight text-custom-text md:text-6xl lg:text-7xl">
            Hi ! My name is Marco Brian 
          </h1>

          <p className="text-pretty text-xl text-custom-muted md:text-2xl max-w-3xl leading-relaxed">
          I'm an experienced Product Manager and Web3 builder. Blending product thinking with engineering execution.            
          </p>

          {/* Prompt Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-custom-surface border border-custom-border px-6 py-3 text-sm font-mono"
          >
            <span className="text-custom-accent">{">"}</span>
            <span className="text-custom-muted">
              {currentText}
              <span className="blink text-custom-text">_</span>
            </span>
          </motion.div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="
                rounded-full 
                bg-transparent 
                text-custom-accent
                border-2 
                border-custom-accent
                hover:bg-custom-accent
                hover:text-white
                transition-all 
                duration-200 
                shadow-sm 
                hover:shadow-md
              "
              style={{ 
                color: '#1e3a8a', 
                borderColor: '#1e3a8a',
                backgroundColor: 'transparent'
              }}
            >
              View Projects
            </Button>

          

            <div className="flex items-center gap-3 ml-4">
              <Link
                href="https://github.com/MarcoBrian"
                target="_blank"
                className="text-custom-muted hover:text-custom-accent transition-colors duration-200"
              >
                <GitHubLogo />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://x.com/marcobwidjaja"
                target="_blank"
                className="text-custom-muted hover:text-custom-accent transition-colors duration-200"
              >
                <XLogo />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/marcobrianw/"
                target="_blank"
                className="text-custom-muted hover:text-custom-accent transition-colors duration-200"
              >
                <LinkedInLogo />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
