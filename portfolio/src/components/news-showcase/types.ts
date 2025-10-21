export interface NewsItem {
  title: string
  description: string
  source: string
  date: string
  url: string
  type: "twitter" | "youtube" | "article"
  tweetId?: string
  videoId?: string
  image?: string
}
