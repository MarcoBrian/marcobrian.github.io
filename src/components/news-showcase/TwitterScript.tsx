"use client"

import Script from "next/script"
import { useEffect } from "react"

// Declare Twitter widget API
declare global {
  interface Window {
    twttr: {
      widgets: {
        load: () => void
      }
    }
  }
}

export function TwitterScript() {
  const handleTwitterLoad = () => {
    console.log('Twitter script loaded')
    if (window.twttr && window.twttr.widgets) {
      console.log('Loading Twitter widgets')
      window.twttr.widgets.load()
    } else {
      console.log('Twitter widgets not available yet')
    }
  }

  useEffect(() => {
    // Ensure Twitter widgets are loaded after component mounts
    const timer = setTimeout(() => {
      if (window.twttr && window.twttr.widgets) {
        console.log('Loading Twitter widgets from useEffect')
        window.twttr.widgets.load()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Script
      src="https://platform.twitter.com/widgets.js"
      strategy="afterInteractive"
      onLoad={handleTwitterLoad}
    />
  )
}
