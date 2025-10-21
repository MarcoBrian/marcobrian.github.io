"use client"

import { ExternalLink } from "lucide-react"

interface YouTubeEmbedProps {
  source: string
  date: string
  title: string
  description: string
  url: string
  videoId: string
}

export function YouTubeEmbed({ source, date, title, description, url, videoId }: YouTubeEmbedProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-medium text-custom-accent">{source}</span>
        <span className="text-sm text-custom-muted">•</span>
        <span className="text-sm text-custom-muted">{date}</span>
      </div>
      
      <h3 className="text-xl font-bold text-custom-text mb-3">
        {title}
      </h3>
      
      <p className="text-custom-muted mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-custom-accent font-medium hover:gap-3 transition-all duration-200 mt-4"
      >
        Watch on YouTube
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  )
}
