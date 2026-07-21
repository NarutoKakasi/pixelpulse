export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:py-8">
      <a href="#" className="flex items-center gap-2.5" aria-label="PixelPulse home">
        <span className="flex size-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet to-brand-teal">
          <span className="size-2.5 rounded-full bg-primary-foreground" />
        </span>
        <span className="font-heading text-lg font-bold tracking-tight text-foreground">
          PixelPulse
        </span>
      </a>

      <nav>
        <a
          href="#work"
          className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          Work
        </a>
      </nav>
    </header>
  )
}
