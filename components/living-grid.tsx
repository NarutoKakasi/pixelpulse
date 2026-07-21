const ROWS = 10
const COLS = 10

// Deterministic pseudo-random so server and client render identically.
function seeded(index: number) {
  const x = Math.sin(index * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

export function LivingGrid() {
  const cells = Array.from({ length: ROWS * COLS }, (_, i) => {
    const rnd = seeded(i)
    const delay = (rnd * 6).toFixed(2)
    const duration = (5 + rnd * 4).toFixed(2)
    return { delay, duration }
  })

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Soft radial fade so the grid melts into the background at the edges */}
      <div
        className="absolute inset-0 grid gap-3 p-4 sm:gap-4 sm:p-8"
        style={{
          gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 90%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 90%)',
        }}
      >
        {cells.map((cell, i) => (
          <div
            key={i}
            className="animate-breathe rounded-xl bg-primary/25 motion-reduce:animate-none"
            style={{
              animationDelay: `${cell.delay}s`,
              ['--breathe-duration' as string]: `${cell.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
