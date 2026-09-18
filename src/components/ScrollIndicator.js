"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 select-none pointer-events-none z-20"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-1"
      >
        {/* Animated scroll line */}
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-violet-500/60 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-[0_0_6px_rgba(124,58,237,0.7)]" />
        <span className="text-[9px] tracking-[0.25em] font-semibold text-accent-muted uppercase mt-1">
          Scroll
        </span>
      </motion.div>
    </motion.div>
  );
}

