'use client';

import { motion } from 'framer-motion';

// Deterministic pseudo-random so server and client render identically.
function seeded(index: number) {
  const x = Math.sin(index * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export default function PixelGrid() {
  const pixels = Array.from({ length: 100 }, (_, i) => {
    const rnd = seeded(i);
    const delay = rnd * 5;
    const duration = 4 + rnd * 3;
    return { delay, duration };
  });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="grid grid-cols-10 grid-rows-10 w-full h-full gap-1 opacity-20">
        {pixels.map((p, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-sm"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay
            }}
          />
        ))}
      </div>
    </div>
  );
}


export default PixelGrid