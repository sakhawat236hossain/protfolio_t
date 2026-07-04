"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#0a0a0a]">
      {/* Animated Aurora Glows */}
      <motion.div
        animate={{
          x: ["0%", "-20%", "20%", "0%"],
          y: ["0%", "20%", "-20%", "0%"],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-900/30 blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: ["0%", "20%", "-20%", "0%"],
          y: ["0%", "-20%", "20%", "0%"],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-purple-900/20 blur-[120px]"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
    </div>
  );
}
