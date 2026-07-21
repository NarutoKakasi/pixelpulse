import { LivingGrid } from '@/components/living-grid'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <LivingGrid />
      <SiteHeader />
      <Hero />
      <HowItWorks />
    </main>
  )
}
