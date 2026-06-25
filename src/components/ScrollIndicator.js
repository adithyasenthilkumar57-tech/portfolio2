"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 select-none pointer-events-none z-20"
    >
      <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        <span className="text-xl md:text-2xl font-light text-foreground select-none">↓</span>
        <span className="text-[10px] md:text-xs tracking-[0.2em] font-semibold text-accent-muted uppercase select-none mt-1">
          Scroll
        </span>
      </motion.div>
    </motion.div>
  );
}
