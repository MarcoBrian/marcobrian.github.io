"use client"

import { motion } from "framer-motion"
import { TwitterEmbed } from "./TwitterEmbed"
import { YouTubeEmbed } from "./YouTubeEmbed"
import { ArticleCard } from "./ArticleCard"
import { NewsItem as NewsItemType } from "./types"

interface NewsItemProps {
  item: NewsItemType
  index: number
}

export function NewsItem({ item, index }: NewsItemProps) {
  const renderContent = () => {
    switch (item.type) {
      case "twitter":
        return (
          <TwitterEmbed
            source={item.source}
            date={item.date}
            url={item.url}
            tweetId={item.tweetId!}
          />
        )
      case "youtube":
        return (
          <YouTubeEmbed
            source={item.source}
            date={item.date}
            title={item.title}
            description={item.description}
            url={item.url}
            videoId={item.videoId!}
          />
        )
      case "article":
        return (
          <ArticleCard
            source={item.source}
            date={item.date}
            title={item.title}
            description={item.description}
            url={item.url}
            image={item.image}
          />
        )
      default:
        return null
    }
  }

  return (
    <motion.article
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex-shrink-0 w-96 snap-start"
    >
      <div className="bg-white rounded-2xl border border-custom-border p-8 hover:shadow-lg transition-all duration-300">
        {renderContent()}
      </div>
    </motion.article>
  )
}
