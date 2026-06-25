"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 14,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4 text-left select-none"
    >
      <motion.span
        variants={itemVariants}
        className="text-xs md:text-sm font-semibold tracking-[0.3em] text-accent-muted uppercase"
      >
        HELLO, I&apos;M
      </motion.span>

      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-accent uppercase leading-[0.9] flex flex-col"
      >
        <span className="text-foreground font-black">ADITHYA</span>
        <span className="text-accent-muted font-light mt-2 text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight normal-case">
          AI & Machine Learning Student
        </span>
        <span className="text-accent-muted font-light text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight normal-case">
          Web Developer & Experience Builder
        </span>
      </motion.h1>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.25,
              duration: 0.8,
              ease: "easeOut",
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="text-base md:text-lg text-accent-muted font-light leading-relaxed max-w-[500px] mt-2"
      >
        I create modern digital experiences by combining web development, artificial intelligence, and creative design. Passionate about building innovative solutions, exploring emerging technologies, and transforming ideas into interactive user-focused products.
      </motion.p>

      {/* Professional Identity Tags */}
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delay: 0.4, duration: 0.8 }
          }
        }}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap gap-2 mt-4 max-w-[500px]"
      >
        {[
          "AI & Machine Learning",
          "Web Development",
          "UI/UX Design",
          "3D Digital Experiences"
        ].map((tag, i) => (
          <span
            key={i}
            className="text-[10px] md:text-xs font-medium tracking-wide uppercase px-3 py-1.5 rounded-full border border-border-custom bg-foreground/[0.02] text-accent-muted"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
