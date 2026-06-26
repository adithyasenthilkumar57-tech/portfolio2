"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portraitImg from "../../public/portrait.webp";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative flex items-center justify-center w-full max-w-[420px] sm:max-w-[450px] aspect-[3/4] md:w-[450px] md:h-[600px] z-20"
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-full h-full relative rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-border-custom bg-black"
      >
        <Image
          src={portraitImg}
          alt="Adithya - AI & Machine Learning Student & Web Developer"
          title="Adithya - Creative Developer & UI Engineer"
          fill
          priority
          sizes="(max-width: 480px) 90vw, (max-width: 768px) 70vw, (max-width: 1024px) 50vw, 450px"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* Soft vignette/editorial overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
