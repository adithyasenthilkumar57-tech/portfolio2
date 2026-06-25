"use client";
import Link from "next/link";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function ProjectsComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen w-full bg-background text-foreground transition-colors duration-300 flex items-center justify-center p-6 overflow-hidden">
      {/* Editorial Noise Overlay */}
      <div className="noise-overlay" />

      {/* Floating Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-cyan-500/5 dark:bg-cyan-500/2 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 dark:bg-purple-500/2 blur-[140px]" />
      </div>

      {/* Header theme toggle */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Glassmorphic box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-lg w-full p-8 md:p-12 rounded-[32px] border border-border-custom bg-background/30 backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden border-t-4 border-t-cyan-500 group"
      >
        {/* Corner Accents */}
        <span className="absolute top-3 left-3 text-cyan-500/30 font-mono text-sm pointer-events-none select-none">+</span>
        <span className="absolute top-3 right-3 text-cyan-500/30 font-mono text-sm pointer-events-none select-none">+</span>
        <span className="absolute bottom-3 left-3 text-cyan-500/30 font-mono text-sm pointer-events-none select-none">+</span>
        <span className="absolute bottom-3 right-3 text-cyan-500/30 font-mono text-sm pointer-events-none select-none">+</span>

        {/* Large Watermark */}
        <div className="absolute right-4 bottom-4 text-7xl font-black text-foreground/[0.02] dark:text-white/[0.01] select-none pointer-events-none font-mono z-0">
          SOON
        </div>

        {/* Pulsing Tech Badge */}
        <div className="relative z-10 flex items-center px-4 py-1.5 rounded-full border border-border-custom/60 bg-foreground/[0.02] text-xs tracking-widest font-mono font-bold text-cyan-600 dark:text-cyan-400 mb-6">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
          </span>
          WORK IN PROGRESS
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-neutral-950 dark:text-white uppercase mb-4">
          Projects Coming Soon
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed font-light mb-8 max-w-sm">
          I am currently coding and fine-tuning some of my latest machine learning and creative web applications. Stay tuned for details!
        </p>

        {/* Return Button */}
        <Link
          href="/"
          className="px-8 py-3 rounded-full font-medium text-sm border border-transparent bg-foreground text-background transition-shadow duration-300 shadow-md shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 text-center flex items-center justify-center"
        >
          Return Home
        </Link>
      </motion.div>
    </main>
  );
}
