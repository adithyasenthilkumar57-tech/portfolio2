"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowLeft, Sparkles } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const projects = [
  {
    title: "Freelancer Lead Radar",
    abbr: "FLR",
    subtitle: "AI-Powered Lead Generation SaaS",
    badge: "AI RADAR",
    badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    topBorder: "border-t-cyan-500",
    glow: "hover:shadow-[0_20px_60px_rgba(34,211,238,0.18)]",
    dot: "bg-cyan-500",
    ping: "bg-cyan-400",
    url: "https://flr-rouge.vercel.app/",
    desc: "An AI-powered lead generation and client discovery platform designed for modern freelancers and digital agencies. It scans the web 24/7 to uncover businesses desperately needing specific services, evaluates match scores, automatically drafts hyper-personalized outreach pitches, and tracks pipeline progress.",
    tags: ["Next.js", "React", "AI", "SaaS", "Lead Automation", "CRM", "Vercel"],
    highlights: ["24/7 Radar Scanning", "94% AI Match Accuracy", "1-Click Cold Outreach", "Kanban CRM Pipeline"]
  },
  {
    title: "Cresconix",
    abbr: "CRX",
    subtitle: "Digital Agency & Creative Solutions",
    badge: "AGENCY",
    badgeColor: "border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400",
    topBorder: "border-t-purple-500",
    glow: "hover:shadow-[0_20px_60px_rgba(168,85,247,0.18)]",
    dot: "bg-purple-500",
    ping: "bg-purple-400",
    url: "https://cresconix.vercel.app/",
    desc: "A premium digital agency website showcasing creative services, client portfolio, and innovative digital solutions. Built with modern design principles, smooth animations, and a seamless user experience that reflects the brand's premium positioning in the market.",
    tags: ["Next.js", "UI/UX", "Agency", "Animations", "Tailwind CSS", "Vercel"],
    highlights: ["Premium UI Design", "Portfolio Showcase", "Service Listing", "Client Solutions"]
  },
  {
    title: "AgriTech Platform",
    abbr: "AGR",
    subtitle: "Smart Agriculture Solutions",
    badge: "AGRITECH",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    topBorder: "border-t-emerald-500",
    glow: "hover:shadow-[0_20px_60px_rgba(16,185,129,0.18)]",
    dot: "bg-emerald-500",
    ping: "bg-emerald-400",
    url: "https://agriculture2-3xga.vercel.app/",
    desc: "A modern agriculture technology platform connecting farmers with AI-powered insights, real-time crop analytics, weather integration, and sustainable farming guidance. Designed to digitize and empower agricultural communities with data-driven decision making.",
    tags: ["React", "AI", "Agriculture", "Analytics", "Data Viz", "Vercel"],
    highlights: ["Crop Analytics", "AI Insights", "Weather Integration", "Farmer Dashboard"]
  },
  {
    title: "WhatsApp Automation",
    abbr: "WA",
    subtitle: "Business Messaging Automation",
    badge: "AUTOMATION",
    badgeColor: "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400",
    topBorder: "border-t-green-500",
    glow: "hover:shadow-[0_20px_60px_rgba(34,197,94,0.18)]",
    dot: "bg-green-500",
    ping: "bg-green-400",
    url: "https://whatsapp-automation-five-alpha.vercel.app/",
    desc: "Automated WhatsApp messaging platform for businesses — schedule broadcast campaigns, configure auto-reply bots, manage multiple contacts, and track message delivery analytics in real time. Simplifies customer communication at scale.",
    tags: ["Node.js", "WhatsApp API", "Bot", "Automation", "Dashboard", "Vercel"],
    highlights: ["Broadcast Campaigns", "Auto-Reply Bots", "Message Analytics", "Contact Management"]
  },
  {
    title: "Cafe Model",
    abbr: "CAF",
    subtitle: "Restaurant & Menu Platform",
    badge: "HOSPITALITY",
    badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    topBorder: "border-t-amber-500",
    glow: "hover:shadow-[0_20px_60px_rgba(245,158,11,0.18)]",
    dot: "bg-amber-500",
    ping: "bg-amber-400",
    url: "https://cafemodel-kopl.vercel.app/",
    desc: "An elegant cafe and restaurant showcase website with a dynamic digital menu, online reservation system, and immersive visual storytelling. Built for hospitality brands that want to deliver a premium digital experience to their customers.",
    tags: ["React", "UI/UX", "Restaurant", "Menu System", "Reservations", "Vercel"],
    highlights: ["Digital Menu", "Online Reservations", "Visual Storytelling", "Mobile-First Design"]
  },
  {
    title: "Freelancer Lead Radar (FLR)",
    abbr: "FLR2",
    subtitle: "AI Lead Generation — Extended View",
    badge: "AI SAAS",
    badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    topBorder: "border-t-cyan-400",
    glow: "hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]",
    dot: "bg-cyan-400",
    ping: "bg-cyan-300",
    url: "https://flr-rouge.vercel.app/",
    desc: "Explore the FLR dashboard featuring multi-channel scanning, AI-generated pitch templates, prospect scoring history, and detailed analytics reports for tracking outreach ROI and lead conversion funnels.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "API Routes", "OpenAI", "Vercel"],
    highlights: ["Multi-Channel Scan", "Pitch Templates", "Conversion Funnel", "ROI Analytics"]
  },
  {
    title: "Titan Alpha",
    abbr: "TIT",
    subtitle: "Modern Portfolio & Brand Site",
    badge: "BRANDING",
    badgeColor: "border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400",
    topBorder: "border-t-orange-500",
    glow: "hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)]",
    dot: "bg-orange-500",
    ping: "bg-orange-400",
    url: "https://titan-alpha-nine.vercel.app/",
    desc: "A bold, cinematic brand and portfolio site combining striking typographic hierarchy, fluid motion design, and immersive scroll-based storytelling. Crafted for premium clients who demand a high-impact digital presence.",
    tags: ["Next.js", "Framer Motion", "Branding", "Typography", "Scroll FX", "Vercel"],
    highlights: ["Cinematic Design", "Scroll Animations", "Brand Identity", "Premium Feel"]
  },
  {
    title: "Developer Portfolio",
    abbr: "PRT",
    subtitle: "Personal Portfolio Website",
    badge: "PORTFOLIO",
    badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400",
    topBorder: "border-t-sky-500",
    glow: "hover:shadow-[0_20px_60px_rgba(14,165,233,0.18)]",
    dot: "bg-sky-500",
    ping: "bg-sky-400",
    url: "https://portfolio-website-mhle.vercel.app/",
    desc: "A sleek, professional developer portfolio showcasing projects, technical skills, and achievements with smooth micro-animations, a minimal dark aesthetic, and responsive layout optimized for all screen sizes.",
    tags: ["React", "CSS Animations", "Portfolio", "Responsive", "Dark Mode", "Vercel"],
    highlights: ["Smooth Animations", "Dark Mode", "Skills Showcase", "Project Cards"]
  },
  {
    title: "LinkedIn Clone",
    abbr: "LNK",
    subtitle: "Professional Network Platform",
    badge: "SOCIAL",
    badgeColor: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
    topBorder: "border-t-blue-500",
    glow: "hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]",
    dot: "bg-blue-500",
    ping: "bg-blue-400",
    url: "https://linkedin-emxl.vercel.app/login?from=%2Fadmin",
    desc: "A full-featured LinkedIn-inspired professional social networking platform. Features user authentication, an admin control dashboard, profile creation and management, connections feed, and role-based access control for platform administrators.",
    tags: ["Next.js", "Authentication", "Social Network", "Admin Dashboard", "Full-Stack", "Vercel"],
    highlights: ["User Auth", "Admin Dashboard", "Profile Management", "Role-Based Access"]
  }
];

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
        <div className="absolute top-[50%] left-[40%] w-[400px] h-[400px] rounded-full bg-emerald-500/3 dark:bg-emerald-500/2 blur-[160px]" />
      </div>

      {/* Header controls */}
      <div className="relative z-50 max-w-6xl mx-auto flex items-center justify-between mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-custom bg-card-bg/40 hover:bg-card-bg/80 text-foreground text-xs md:text-sm font-medium transition-all duration-300 shadow-sm hover:border-foreground/30"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Portfolio
        </Link>
        <ThemeToggle />
      </div>

      {/* Page Title Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-6xl mx-auto flex flex-col gap-4 mb-16"
      >
        <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-accent-muted uppercase">
          PORTFOLIO SHOWCASE
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground uppercase">
          PROJECTS &amp; CREATIONS
        </h1>
        <p className="text-base md:text-lg text-foreground/70 font-light max-w-2xl leading-relaxed">
          Explore my latest AI-powered platforms, web applications, automation tools, and creative digital experiences — all live and accessible.
        </p>
        <div className="flex items-center gap-3 mt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border-custom bg-foreground/[0.03] text-xs font-mono text-accent-muted">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
              <span className="relative rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            {projects.length} Projects Live
          </span>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className={`group relative rounded-[28px] border border-border-custom bg-card-bg/30 backdrop-blur-xl overflow-hidden shadow-xl transition-all duration-500 cursor-pointer border-t-4 ${project.topBorder} ${project.glow} flex flex-col`}
            onClick={() => window.open(project.url, "_blank")}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-foreground/[0.03] dark:via-white/[0.03] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none z-0" />

            {/* Watermark */}
            <div className="absolute right-4 bottom-4 text-7xl font-black text-foreground/[0.03] dark:text-white/[0.02] select-none pointer-events-none font-mono z-0">
              {project.abbr}
            </div>

            <div className="relative z-10 flex flex-col gap-5 p-6 md:p-8 flex-1">
              {/* Badge + Link */}
              <div className="flex items-center justify-between gap-2">
                <span className={`flex items-center px-2.5 py-1 rounded-full border text-[10px] font-mono font-bold tracking-widest uppercase ${project.badgeColor}`}>
                  <span className="relative flex h-1.5 w-1.5 mr-1.5">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${project.ping} opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${project.dot}`} />
                  </span>
                  {project.badge}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-foreground text-background transition-all duration-300 hover:scale-105 shadow-sm"
                >
                  <span>View Live</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Title */}
              <div className="flex flex-col gap-1">
                <h2 className="text-xl md:text-2xl font-black tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-xs font-medium text-accent-muted">{project.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/70 font-light leading-relaxed">
                {project.desc}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-2">
                {project.highlights.map((h, hi) => (
                  <div key={hi} className="flex items-center gap-1.5 text-xs text-accent-muted">
                    <span className={`w-1 h-1 rounded-full shrink-0 ${project.dot}`} />
                    {h}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-custom/50 mt-auto">
                {project.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-foreground/[0.04] border border-border-custom/50 text-accent-muted font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: projects.length * 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] border border-dashed border-border-custom/60 bg-card-bg/10 p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[280px]"
        >
          <div className="w-14 h-14 rounded-full bg-foreground/[0.03] border border-border-custom flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-cyan-500 animate-pulse" />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            More Projects Coming Soon
          </h3>
          <p className="text-sm text-accent-muted max-w-xs">
            Currently building new AI tools, machine learning experiments, and creative web experiences. Stay tuned!
          </p>
        </motion.div>
      </div>
    </main>
  );
}
