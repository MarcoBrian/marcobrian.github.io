"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { NewsItem } from "./news-showcase/NewsItem"
import { TwitterScript } from "./news-showcase/TwitterScript"
import { ScrollbarStyles } from "./news-showcase/ScrollbarStyles"
import { NewsItem as NewsItemType } from "./news-showcase/types"

const newsItems: NewsItemType[] = [
  {
    title: "Token2049 Origins - MicroPay Demo",
    description: "Live Demo of MicroPay at Token2049 Origins Hackathon",
    source: "YouTube",
    date: "Oct 2025",
    url: "https://www.youtube.com/watch?v=sKRRLxgGC40",
    videoId: "sKRRLxgGC40",
    type: "youtube"
  },
  {
    title: "Hyperbridge-powered MicroPay wins hackathon at Token2049",
    description: "Enabling AI agents to transact across blockchain",
    source: "CoinTelegraph",
    date: "October 2025",
    url: "https://cointelegraph.com/press-releases/hyperbridge-powered-micropay-wins-hackathon-at-token2049-enabling-ai-agents-to-transact-across-blockchain",
    image: "/hyperbridge-news.png",
    type: "article"
  },
  {
    title: "1Option featured by ETHGlobal",
    description: "ETHGlobal highlights 1Option's innovative approach to covered options as NFTs on 1inch",
    source: "X (Twitter)",
    date: "August 2025",
    url: "https://twitter.com/ETHGlobal/status/1953853129008820535",
    tweetId: "1953853129008820535",
    type: "twitter"
  }
]

export function NewsShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <TwitterScript />
      <ScrollbarStyles />
      <section id="press" className="px-6 py-16 bg-custom-surface">
        <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-custom-text mb-4">Featured in the News</h2>
            <p className="text-custom-muted text-lg">
              Media coverage of my work and achievements
            </p>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory custom-scrollbar"
          >
            {newsItems.map((item, index) => (
              <NewsItem key={index} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  )
}

