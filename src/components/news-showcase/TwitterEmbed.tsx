"use client"

import { ExternalLink } from "lucide-react"

interface TwitterEmbedProps {
  source: string
  date: string
  url: string
  tweetId: string
}

export function TwitterEmbed({ source, date, url, tweetId }: TwitterEmbedProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-sm font-medium text-custom-accent">{source}</span>
        <span className="text-sm text-custom-muted">•</span>
        <span className="text-sm text-custom-muted">{date}</span>
      </div>
      
      <blockquote className="twitter-tweet" data-theme="light" data-conversation="none">
        <p lang="en" dir="ltr">
          📈 1Option<br/><br/>
          1Option lets anyone mint, buy, and exercise covered options as NFTs on 1inch. It replaces order books with tokenized collateral and off-chain signatures for simpler, permissionless derivatives trading.<br/><br/>
          Built by <a href="https://twitter.com/marcobwidjaja?ref_src=twsrc%5Etfw">@marcobwidjaja</a><a href="https://t.co/qYNp5sFeim">https://t.co/qYNp5sFeim</a> <a href="https://t.co/jupCq0MOKH">pic.twitter.com/jupCq0MOKH</a>
        </p>
        &mdash; ETHGlobal (@ETHGlobal) <a href={`https://twitter.com/ETHGlobal/status/${tweetId}?ref_src=twsrc%5Etfw`}>August 8, 2025</a>
      </blockquote>
      
      {/* Fallback link if Twitter embed doesn't load */}
      <div className="mt-4 text-center">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-custom-accent font-medium hover:gap-3 transition-all duration-200"
        >
          View on Twitter
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
