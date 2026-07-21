'use client';

import { motion } from 'framer-motion';

export default function PixelGrid() {
  const pixels = Array.from({ length: 100 }, (_, i) => i);
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="grid grid-cols-10 grid-rows-10 w-full h-full gap-1 opacity-20">
        {pixels.map((i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-br from-purple-400 to-cyan-400 rounded-sm"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </div>
  );
}
