"use client"

import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface ArticleCardProps {
  source: string
  date: string
  title: string
  description: string
  url: string
  image?: string
}

export function ArticleCard({ source, date, title, description, url, image }: ArticleCardProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium text-custom-accent">{source}</span>
        <span className="text-sm text-custom-muted">•</span>
        <span className="text-sm text-custom-muted">{date}</span>
      </div>
      
      <h3 className="text-xl font-bold text-custom-text mb-3 group-hover:text-custom-accent transition-colors duration-200">
        {title}
      </h3>
      
      <p className="text-custom-muted mb-4 leading-relaxed">
        {description}
      </p>
      
      {/* Article Image Preview */}
      <div className="bg-gray-50 rounded-lg p-4 h-48 overflow-hidden mb-4">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${source} article preview`}
          width={384}
          height={192}
          className="w-full h-full object-cover rounded"
        />
      </div>
      
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-custom-accent font-medium hover:gap-3 transition-all duration-200"
      >
        Read full article
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  )
}
