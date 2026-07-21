import { MessageCircle, PenTool, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: 'Tell us your vision',
    description: 'Share your idea in plain words. No briefs, no buzzwords.',
  },
  {
    icon: PenTool,
    title: 'We craft it',
    description: 'Clean, fast, hand-tuned code designed around your brand.',
  },
  {
    icon: Rocket,
    title: 'You go live',
    description: 'Launch a website you love — polished and ready for the world.',
  },
]

export function HowItWorks() {
  return (
    <section id="work" className="mx-auto w-full max-w-5xl px-6 pb-24 sm:pb-32">
      <div className="mx-auto mb-14 max-w-xl text-center">
        <h2 className="font-heading text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          How it works
        </h2>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          Three simple steps from first hello to a website with soul.
        </p>
      </div>

      <ol className="grid gap-6 sm:grid-cols-3">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="rounded-3xl border border-border bg-card/70 p-8 text-center backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-violet/15 to-brand-teal/15">
              <step.icon className="size-6 text-primary" strokeWidth={1.75} />
            </div>
            <span className="mb-2 block text-sm font-semibold text-accent">
              {`Step ${i + 1}`}
            </span>
            <h3 className="font-heading text-xl font-bold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
