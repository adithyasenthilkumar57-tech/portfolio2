"use client";

import { motion } from "framer-motion";

export default function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.48, duration: 0.8, ease: "easeOut" }}
      className="flex flex-wrap gap-4 items-center mt-4 w-full sm:w-auto"
    >
      <motion.a
        href="#projects"
        className="btn-gradient relative px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-lg text-center flex items-center justify-center min-w-[155px] cursor-pointer"
        whileHover={{ y: -4, scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        <span className="relative z-10">Explore My Work</span>
      </motion.a>

      <motion.a
        href="#contact"
        className="px-8 py-4 rounded-full font-semibold text-sm md:text-base border border-border-custom bg-card-bg/50 hover:bg-card-bg/80 hover:border-violet-400/40 text-foreground transition-all duration-300 shadow-sm hover:shadow-lg text-center flex items-center justify-center min-w-[155px] cursor-pointer backdrop-blur-md"
        whileHover={{ y: -4, scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Contact Me
      </motion.a>
    </motion.div>
  );
}

