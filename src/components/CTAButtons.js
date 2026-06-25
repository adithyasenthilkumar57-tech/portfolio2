"use client";

import { motion } from "framer-motion";

export default function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.8, ease: "easeOut" }}
      className="flex flex-wrap gap-4 items-center mt-4 w-full sm:w-auto"
    >
      <motion.a
        href="#skills"
        className="px-8 py-4 rounded-full font-medium text-sm md:text-base border border-transparent bg-foreground text-background transition-shadow duration-300 shadow-md shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 text-center flex items-center justify-center min-w-[150px] cursor-pointer"
        whileHover={{ y: -4, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Explore My Work
      </motion.a>

      <motion.a
        href="#contact"
        className="px-8 py-4 rounded-full font-medium text-sm md:text-base border border-border-custom bg-card-bg/40 hover:bg-card-bg/80 hover:border-foreground/40 text-foreground transition-all duration-300 shadow-sm hover:shadow-lg text-center flex items-center justify-center min-w-[150px] cursor-pointer"
        whileHover={{ y: -4, scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Contact Me
      </motion.a>
    </motion.div>
  );
}
