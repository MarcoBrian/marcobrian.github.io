import { Hero } from "@/components/hero"
import { NewsShowcase } from "@/components/news-showcase"
import { Projects } from "@/components/projects"
import { WorkExperience } from "@/components/work-experience"
import { HackathonJourney } from "@/components/hackathon-journey"
import { About } from "@/components/about"
import { Now } from "@/components/now"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <WorkExperience />
      {/* <HackathonJourney /> */}
      <NewsShowcase />
      <Footer />
    </main>
  )
}
