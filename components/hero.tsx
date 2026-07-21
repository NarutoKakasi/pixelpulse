import { ArrowRight } from 'lucide-react'
import PixelGrid from '@/components/PixelGrid'

export function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-6 pt-16 pb-20 text-center sm:pt-24 sm:pb-28">
      <PixelGrid />
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
          <span className="size-2 rounded-full bg-accent" />
          A web agency with a heartbeat
        </span>

        <h1 className="font-heading text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Websites on Demand.{' '}
          <span className="bg-gradient-to-r from-brand-violet to-brand-teal bg-clip-text text-transparent">
            Built with Soul.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          No confusing jargon. Just clean, fast, and beautiful code tailored to
          you.
        </p>

        <div className="mt-10">
          <a
            href="#start"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-violet to-brand-teal px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
          >
            Start Your Project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
