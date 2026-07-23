"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Radar, Zap, Shield, TrendingUp, Sparkles, ArrowLeft } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen w-full bg-background text-foreground transition-colors duration-300 p-6 md:p-12 overflow-x-hidden">
      {/* Editorial Noise Overlay */}
      <div className="noise-overlay" />

      {/* Floating Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-cyan-500/5 dark:bg-cyan-500/2 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/5 dark:bg-purple-500/2 blur-[140px]" />
      </div>

      {/* Header controls */}
      <div className="relative z-50 max-w-6xl mx-auto flex items-center justify-between mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-custom bg-card-bg/40 hover:bg-card-bg/80 text-foreground text-xs md:text-sm font-medium transition-all duration-300 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Portfolio
        </Link>
        <ThemeToggle />
      </div>

      {/* Page Title Header */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-4 mb-16">
        <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-accent-muted uppercase">
          PORTFOLIO SHOWCASE
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground uppercase">
          PROJECTS & CREATIONS
        </h1>
        <p className="text-base md:text-lg text-foreground/70 font-light max-w-2xl leading-relaxed">
          Explore my latest machine learning platforms, AI-powered web applications, and interactive digital solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-12">
        {/* Project 1: Freelancer Lead Radar (FLR) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative rounded-[32px] border border-border-custom bg-card-bg/30 backdrop-blur-xl p-8 md:p-12 overflow-hidden shadow-2xl transition-all duration-500 border-t-4 border-t-cyan-500 hover:border-t-cyan-400 hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)] cursor-pointer"
          onClick={() => window.open("https://flr-rouge.vercel.app/", "_blank")}
        >
          {/* Watermark */}
          <div className="absolute right-6 bottom-4 text-9xl font-black text-foreground/[0.03] dark:text-white/[0.02] select-none pointer-events-none font-mono z-0">
            FLR
          </div>

          <div className="relative z-10 flex flex-col gap-8">
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                  </span>
                  AI RADAR ACTIVE
                </span>
                <span className="text-xs font-mono text-accent-muted">
                  FLAGSHIP SAAS PROJECT
                </span>
              </div>

              <a
                href="https://flr-rouge.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-foreground text-background transition-all duration-300 hover:scale-105 shadow-lg group-hover:shadow-cyan-500/20"
              >
                <span>Launch Live App</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                Freelancer Lead Radar (FLR)
              </h2>
              <p className="text-lg md:text-xl font-medium text-cyan-600 dark:text-cyan-400">
                The AI that finds your next client before your competitors do
              </p>
            </div>

            <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed max-w-4xl">
              Freelancer Lead Radar is an AI-powered lead generation and client discovery platform designed for modern freelancers and digital agencies. It scans the web 24/7 to uncover businesses desperately needing specific services, evaluates match scores, automatically drafts hyper-personalized outreach pitches, and tracks pipeline progress.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl border border-border-custom/50 bg-foreground/[0.02] backdrop-blur-sm flex flex-col gap-2">
                <Radar className="w-5 h-5 text-cyan-500" />
                <h3 className="font-bold text-sm text-foreground">24/7 Radar Scanning</h3>
                <p className="text-xs text-accent-muted leading-relaxed">
                  Continuously scans web data to flag high-potential business opportunities.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-border-custom/50 bg-foreground/[0.02] backdrop-blur-sm flex flex-col gap-2">
                <Zap className="w-5 h-5 text-purple-500" />
                <h3 className="font-bold text-sm text-foreground">AI Match Scoring</h3>
                <p className="text-xs text-accent-muted leading-relaxed">
                  Calculates compatibility scores based on freelancer skill sets & niche.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-border-custom/50 bg-foreground/[0.02] backdrop-blur-sm flex flex-col gap-2">
                <Shield className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-sm text-foreground">1-Click Cold Outreach</h3>
                <p className="text-xs text-accent-muted leading-relaxed">
                  Generates customized outreach emails using real-time target lead data.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-border-custom/50 bg-foreground/[0.02] backdrop-blur-sm flex flex-col gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
                <h3 className="font-bold text-sm text-foreground">Kanban CRM Pipeline</h3>
                <p className="text-xs text-accent-muted leading-relaxed">
                  Tracks discovered leads from initial scan to closed deals effortlessly.
                </p>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border-custom/50 items-center">
              <span className="text-xs font-mono text-accent-muted mr-2">TECH STACK:</span>
              {["Next.js", "React", "AI Scouting Engine", "Tailwind CSS", "Lead Automation", "Vercel"].map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-md bg-foreground/[0.04] border border-border-custom/50 text-accent-muted font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] border border-dashed border-border-custom/80 bg-card-bg/10 p-8 md:p-12 flex flex-col items-center justify-center text-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-foreground/[0.03] border border-border-custom flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-cyan-500 animate-pulse" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            More AI Projects in Development
          </h3>
          <p className="text-sm text-accent-muted max-w-md">
            I am currently experimenting with custom machine learning models and creative web experiences. Check back soon for updates!
          </p>
        </motion.div>
      </div>
    </main>
  );
}
