"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portraitImg from "../../public/portrait.webp";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[380px] sm:max-w-[420px] md:w-[420px] md:h-[560px] z-20">
      {/* Outer Glow Ring */}
      <div className="absolute inset-[-12px] rounded-[36px] bg-gradient-to-br from-violet-500/20 via-cyan-500/15 to-pink-500/20 blur-[20px] pointer-events-none" />

      {/* Gradient Border Frame */}
      <div className="absolute inset-[-2px] rounded-[30px] bg-gradient-to-br from-violet-500/60 via-cyan-500/40 to-pink-500/60 pointer-events-none" />

      <div className="w-full h-full relative rounded-[28px] overflow-hidden shadow-[0_24px_60px_rgba(124,58,237,0.2)] dark:shadow-[0_24px_60px_rgba(167,139,250,0.25)] bg-black animate-float-gentle">
        <Image
          src={portraitImg}
          alt="Adithya - AI & Machine Learning Student & Web Developer"
          title="Adithya - Creative Developer & UI Engineer"
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 480px) 320px, (max-width: 768px) 380px, 420px"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* Gradient Overlay — editorial vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 via-transparent to-cyan-900/10 pointer-events-none" />
      </div>

      {/* Floating Status Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
        className="absolute -bottom-4 -left-4 flex items-center gap-2 px-4 py-2.5 rounded-full bg-card-bg/80 border border-border-custom backdrop-blur-xl shadow-xl text-xs font-semibold text-foreground"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
          <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        Available for opportunities
      </motion.div>

      {/* Top-right floating tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
        className="absolute -top-3 -right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-500/80 to-cyan-500/80 text-white text-[10px] font-bold tracking-wider uppercase shadow-lg"
      >
        AI Dev
      </motion.div>
    </div>
  );
}

