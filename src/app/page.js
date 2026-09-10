"use client";

import Image from "next/image";
import { motion, LazyMotion, domAnimation, m } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
import HeroImage from "@/components/HeroImage";
import CTAButtons from "@/components/CTAButtons";
import ScrollIndicator from "@/components/ScrollIndicator";
import bgTechImg from "../../public/bg-tech.webp";
import AutoScrollButton from "@/components/AutoScrollButton";

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <main className="relative w-full bg-background text-foreground transition-colors duration-300">
      {/* Editorial Noise Overlay */}
      <div className="noise-overlay" />

      {/* Header component (Handles navigation & theme toggling) */}
      <Header />

      {/* Subtle Background Radial Gradients & Blur Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-radial-light dark:bg-gradient-radial-dark transition-opacity duration-500" />

        {/* Subtle Background Tech Image (highly blurred & blended) — lazy loaded, not LCP */}
        <div className="absolute inset-0 opacity-12 dark:opacity-[0.06] mix-blend-screen dark:mix-blend-lighten pointer-events-none">
          <Image
            src={bgTechImg}
            alt="Tech Background Pattern"
            title="Adithya Portfolio Tech Background Pattern"
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover filter blur-[50px] select-none scale-105"
          />
        </div>

        {/* Decorative background blobs — deferred via LazyMotion */}
        <LazyMotion features={domAnimation}>
          {/* Soft blur blob 1 */}
          <m.div
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-500/5 dark:bg-blue-500/2 blur-[120px]"
          />

          {/* Soft blur blob 2 */}
          <m.div
            animate={{
              scale: [1, 1.25, 1],
              x: [0, -60, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[40%] -right-40 w-[600px] h-[600px] rounded-full bg-purple-500/5 dark:bg-purple-500/2 blur-[150px]"
          />

          {/* Soft blur blob 3 */}
          <m.div
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-blue-500/3 dark:bg-blue-500/2 blur-[140px]"
          />
        </LazyMotion>
      </div>

      {/* Decorative Floating Geometric Shapes (Opacity 0.05 - 0.1) — deferred */}
      <LazyMotion features={domAnimation}>
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10">
          {/* Circle shape top-left */}
          <m.div
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[20%] left-[10%] w-8 h-8 rounded-full border border-foreground/10 opacity-5 md:opacity-10"
          />

          {/* Square shape bottom-right */}
          <m.div
            animate={{
              y: [0, 30, 0],
              x: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[80%] right-[15%] w-10 h-10 border border-foreground/10 opacity-5 md:opacity-10 rounded-sm"
          />

          {/* Line Accent left */}
          <m.div
            animate={{
              y: [-10, 15, -10],
              rotate: [-15, 15, -15],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[50%] left-[5%] w-12 h-[1px] bg-foreground/10 opacity-5 md:opacity-10"
          />
        </div>
      </LazyMotion>

      {/* ================= SECTION 1: HOME (HERO) ================= */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 overflow-hidden"
      >
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content & Buttons Column */}
          <div className="flex flex-col items-start gap-8 w-full max-w-2xl order-2 md:order-1 lg:order-1">
            <HeroContent />
            <CTAButtons />
          </div>

          {/* Portrait Image Column */}
          <div className="flex items-center justify-center w-full lg:w-auto order-1 md:order-2 lg:order-2">
            <HeroImage />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <ScrollIndicator />
      </section>

      {/* ================= SECTION 2: ABOUT ME ================= */}
      <section
        id="about"
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 border-t border-border-custom/50 bg-card-bg/15"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="w-full max-w-5xl flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-accent-muted uppercase">
              01 // BIOGRAPHY
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground uppercase">
              ABOUT ME
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Biography Text (Spans 2 columns on large screen) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-2 flex flex-col gap-6 text-lg font-light text-foreground/80 leading-relaxed p-8 rounded-[24px] border border-border-custom/50 bg-card-bg/30 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-cyan-500/80 to-blue-500/80" />
              <p>
                I am Adithya, a Bachelor of Artificial Intelligence and Machine Learning student passionate about technology, creativity, and problem-solving.
              </p>
              <p>
                My journey focuses on exploring the intersection between artificial intelligence, web development, and digital design. I enjoy creating modern websites, experimenting with AI technologies, and developing user-focused digital experiences.
              </p>
              <p>
                I believe technology is not only about writing code but also about creating meaningful solutions that improve user experiences.
              </p>
              <p>
                I continuously learn new technologies, participate in innovative challenges, and develop projects that help me grow as a future technology professional.
              </p>
            </motion.div>

            {/* Strengths and Languages Sidebar */}
            <div className="flex flex-col gap-6 w-full">
              {/* Strengths card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-[20px] border border-border-custom bg-card-bg/50 hover:border-foreground/20 backdrop-blur-sm transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-foreground/[0.03] dark:via-white/[0.03] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none" />
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-foreground flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                  Personal Strengths
                </h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {[
                    "Creative Thinking",
                    "Problem Solving",
                    "Team Collaboration",
                    "Leadership",
                    "Fast Learning",
                    "Effective Communication",
                    "Critical Thinking"
                  ].map((strength, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md bg-foreground/[0.03] border border-border-custom/50 text-accent-muted hover:border-foreground/20 hover:text-foreground transition-all duration-300"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Languages card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-[20px] border border-border-custom bg-card-bg/50 hover:border-foreground/20 backdrop-blur-sm transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-foreground/[0.03] dark:via-white/[0.03] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none" />
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-foreground flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                  Languages
                </h3>
                <p className="text-sm text-accent-muted relative z-10 font-medium">
                  English, Tamil, Kannada
                </p>
              </motion.div>
            </div>
          </div>

          {/* Education Sub-section */}
          <div className="mt-8 border-t border-border-custom/50 pt-8">
            <h3 className="text-xl font-bold tracking-tight mb-6 uppercase text-foreground">
              Education Background
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                y: -6,
                shadow: "0 20px 40px rgba(0,0,0,0.05)"
              }}
              className="group relative p-8 rounded-[24px] border border-border-custom bg-card-bg/50 hover:border-foreground/20 backdrop-blur-sm flex flex-col md:flex-row justify-between gap-6 md:items-center cursor-pointer transition-all duration-500 overflow-hidden"
            >
              {/* Diagonal Laser Shimmer Effect */}
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-foreground/[0.03] dark:via-white/[0.03] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none z-0" />

              {/* Large Background Overlay letters */}
              <div className="absolute right-6 top-4 text-7xl font-black text-foreground/[0.04] dark:text-white/[0.02] select-none pointer-events-none font-mono z-0">
                EDU
              </div>

              <div className="relative z-10">
                <span className="text-xs font-mono text-accent-muted flex items-center mb-1.5">
                  <span className="relative inline-flex h-1.5 w-1.5 mr-2">
                    <span className="animate-ping absolute inset-0 rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative rounded-full h-1.5 w-1.5 bg-cyan-500" />
                  </span>
                  2024 - 2028 // SAKTHI VIGNESHWARA KALVI NILAYAM
                </span>
                <h4 className="text-lg md:text-xl font-bold text-foreground">
                  Bachelor of Artificial Intelligence & Machine Learning
                </h4>
              </div>
              <div className="flex gap-8 relative z-10">
                <div className="text-left">
                  <span className="text-xs text-accent-muted block">10th Grade Score</span>
                  <span className="text-2xl font-black text-foreground">77%</span>
                </div>
                <div className="text-left">
                  <span className="text-xs text-accent-muted block">12th Grade Score</span>
                  <span className="text-2xl font-black text-foreground">70%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 3: SKILLS ================= */}
      <section
        id="skills"
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 border-t border-border-custom/50"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="w-full max-w-5xl flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-accent-muted uppercase">
              02 // EXPERTISE
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground uppercase">
              SKILLS & TECHNOLOGIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Development Skills",
                skills: [
                  { name: "Web Development", level: 90 },
                  { name: "Responsive Website Design", level: 90 },
                  { name: "JavaScript", level: 85 },
                  { name: "HTML & CSS", level: 95 },
                  { name: "Git & GitHub", level: 80 }
                ]
              },
              {
                title: "AI & Technology",
                skills: [
                  { name: "Artificial Intelligence", level: 85 },
                  { name: "Machine Learning Fundamentals", level: 75 },
                  { name: "AI-based Solutions", level: 80 },
                  { name: "Technology Research", level: 85 }
                ]
              },
              {
                title: "Design & Creative Tools",
                skills: [
                  { name: "UI/UX Design", level: 85 },
                  { name: "Figma", level: 80 },
                  { name: "Canva", level: 90 },
                  { name: "Digital Design", level: 85 }
                ]
              },
              {
                title: "Creative Development",
                skills: [
                  { name: "3D Website Concepts", level: 75 },
                  { name: "Interactive Web Experiences", level: 80 },
                  { name: "Modern UI Development", level: 90 },
                  { name: "Visual Storytelling", level: 85 }
                ]
              }
            ].map((category, idx) => (
              <div
                key={idx}
                className="p-8 border border-border-custom rounded-[20px] bg-card-bg/50 backdrop-blur-sm flex flex-col gap-6"
              >
                <h3 className="text-lg font-bold tracking-tight text-foreground border-b border-border-custom/50 pb-3 uppercase">
                  {category.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-accent-muted font-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full h-[3px] bg-foreground/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-foreground shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 4: PROJECTS ================= */}
      <section
        id="projects"
        className="relative w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 border-t border-border-custom/50 bg-card-bg/15"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="w-full max-w-6xl flex flex-col gap-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex flex-col gap-4">
              <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-accent-muted uppercase">
                03 // FEATURED WORK
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground uppercase">
                PROJECTS &amp; INNOVATIONS
              </h2>
            </div>
            <a
              href="/projects"
              className="self-start md:self-end inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold border border-border-custom bg-card-bg/40 hover:bg-card-bg/80 text-foreground transition-all duration-300 hover:border-foreground/30 shrink-0"
            >
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Projects Grid — 2 columns on md, 3 on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Freelancer Lead Radar",
                abbr: "FLR",
                subtitle: "AI-Powered Lead Generation SaaS",
                desc: "Scans the web 24/7 to find businesses needing your services, ranks leads by AI score, and sends 1-click cold outreach with CRM pipeline tracking.",
                url: "https://flr-rouge.vercel.app/",
                badge: "AI RADAR",
                badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
                topBorder: "border-t-cyan-500",
                glow: "hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)]",
                dot: "bg-cyan-500",
                tags: ["Next.js", "AI", "SaaS", "CRM"],
                ping: "bg-cyan-400"
              },
              {
                title: "Cresconix",
                abbr: "CRX",
                subtitle: "Digital Agency & Solutions",
                desc: "A premium digital agency website showcasing services, portfolio, and client solutions with modern design and seamless user experience.",
                url: "https://cresconix.vercel.app/",
                badge: "AGENCY",
                badgeColor: "border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400",
                topBorder: "border-t-purple-500",
                glow: "hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]",
                dot: "bg-purple-500",
                tags: ["Next.js", "UI/UX", "Agency"],
                ping: "bg-purple-400"
              },
              {
                title: "AgriTech Platform",
                abbr: "AGR",
                subtitle: "Smart Agriculture Solutions",
                desc: "A modern agriculture technology platform connecting farmers with AI-powered insights, crop analytics, and sustainable farming guidance.",
                url: "https://agriculture2-3xga.vercel.app/",
                badge: "AGRITECH",
                badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                topBorder: "border-t-emerald-500",
                glow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]",
                dot: "bg-emerald-500",
                tags: ["React", "AI", "Agriculture"],
                ping: "bg-emerald-400"
              },
              {
                title: "WhatsApp Automation",
                abbr: "WA",
                subtitle: "Business Messaging Automation",
                desc: "Automated WhatsApp messaging platform for businesses — schedule campaigns, auto-reply bots, and track message analytics in real time.",
                url: "https://whatsapp-automation-five-alpha.vercel.app/",
                badge: "AUTOMATION",
                badgeColor: "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400",
                topBorder: "border-t-green-500",
                glow: "hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)]",
                dot: "bg-green-500",
                tags: ["Node.js", "WhatsApp API", "Bot"],
                ping: "bg-green-400"
              },
              {
                title: "Cafe Model",
                abbr: "CAF",
                subtitle: "Restaurant & Menu Platform",
                desc: "An elegant cafe and restaurant showcase website with dynamic menu, reservation system, and immersive visual storytelling for hospitality brands.",
                url: "https://cafemodel-kopl.vercel.app/",
                badge: "HOSPITALITY",
                badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
                topBorder: "border-t-amber-500",
                glow: "hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)]",
                dot: "bg-amber-500",
                tags: ["React", "UI/UX", "Restaurant"],
                ping: "bg-amber-400"
              },
              {
                title: "Titan Alpha",
                abbr: "TIT",
                subtitle: "Modern Portfolio & Brand Site",
                desc: "A bold, cinematic brand and portfolio site combining striking typography, motion design, and immersive scroll experiences for premium clients.",
                url: "https://titan-alpha-nine.vercel.app/",
                badge: "BRANDING",
                badgeColor: "border-orange-500/30 bg-orange-500/10 text-orange-600 dark:text-orange-400",
                topBorder: "border-t-orange-500",
                glow: "hover:shadow-[0_20px_50px_rgba(249,115,22,0.15)]",
                dot: "bg-orange-500",
                tags: ["Next.js", "Branding", "Motion"],
                ping: "bg-orange-400"
              },
              {
                title: "Developer Portfolio",
                abbr: "PRT",
                subtitle: "Personal Portfolio Website",
                desc: "A sleek developer portfolio showcasing projects, skills, and achievements with smooth animations and a professional, minimal aesthetic.",
                url: "https://portfolio-website-mhle.vercel.app/",
                badge: "PORTFOLIO",
                badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400",
                topBorder: "border-t-sky-500",
                glow: "hover:shadow-[0_20px_50px_rgba(14,165,233,0.15)]",
                dot: "bg-sky-500",
                tags: ["React", "Portfolio", "Animations"],
                ping: "bg-sky-400"
              },
              {
                title: "LinkedIn Clone",
                abbr: "LNK",
                subtitle: "Professional Network Platform",
                desc: "A full-featured LinkedIn-inspired social platform with user authentication, admin dashboard, profile management, and professional networking.",
                url: "https://linkedin-emxl.vercel.app/login?from=%2Fadmin",
                badge: "SOCIAL",
                badgeColor: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400",
                topBorder: "border-t-blue-500",
                glow: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]",
                dot: "bg-blue-500",
                tags: ["Next.js", "Auth", "Social Network"],
                ping: "bg-blue-400"
              },
              {
                title: "WhatsApp Bot Pro",
                abbr: "WBP",
                subtitle: "Advanced Messaging Automation",
                desc: "Enhanced WhatsApp automation suite with advanced bot flows, multi-account management, analytics dashboard, and broadcast scheduling.",
                url: "https://whatsapp-automation-five-alpha.vercel.app/",
                badge: "BOT PRO",
                badgeColor: "border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400",
                topBorder: "border-t-teal-500",
                glow: "hover:shadow-[0_20px_50px_rgba(20,184,166,0.15)]",
                dot: "bg-teal-500",
                tags: ["Node.js", "API", "Dashboard"],
                ping: "bg-teal-400"
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-[24px] border border-border-custom bg-card-bg/40 backdrop-blur-xl p-6 overflow-hidden shadow-xl transition-all duration-500 cursor-pointer border-t-4 ${project.topBorder} ${project.glow}`}
                onClick={() => window.open(project.url, "_blank")}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-foreground/[0.03] dark:via-white/[0.03] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none z-0" />

                {/* Watermark */}
                <div className="absolute right-4 bottom-3 text-6xl font-black text-foreground/[0.03] dark:text-white/[0.02] select-none pointer-events-none font-mono z-0">
                  {project.abbr}
                </div>

                <div className="relative z-10 flex flex-col gap-4 h-full">
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
                      className="inline-flex items-center gap-1 p-2 rounded-full border border-border-custom bg-foreground/[0.03] hover:bg-foreground hover:text-background text-foreground transition-all duration-300 hover:scale-110"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Title */}
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-extrabold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-accent-muted">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 font-light leading-relaxed flex-1">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-custom/50">
                    {project.tags.map((tag, ti) => (
                      <span key={ti} className="text-[10px] px-2 py-0.5 rounded-md bg-foreground/[0.04] border border-border-custom/50 text-accent-muted font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="flex justify-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-border-custom bg-card-bg/40 hover:bg-foreground hover:text-background text-foreground transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg"
            >
              Explore All Projects <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 5: ACHIEVEMENTS ================= */}
      <section
        id="achievements"
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 border-t border-border-custom/50 bg-card-bg/15"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="w-full max-w-5xl flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-accent-muted uppercase">
              04 // LANDMARKS
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground uppercase">
              ACHIEVEMENTS & EXPERIENCES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                tag: "NATIONAL HACKATHON",
                title: "Smart India Hackathon",
                desc: "Participated in innovation-based problem solving and collaborative technology development, addressing challenging real-world issues.",
                borderColor: "border-t-cyan-500/80 dark:border-t-cyan-400/80",
                accent: "text-cyan-500 dark:text-cyan-400",
                glow: "hover:shadow-[0_20px_50px_rgba(34,211,238,0.1)]",
                dot: "bg-cyan-500"
              },
              {
                num: "02",
                tag: "ONLINE CHALLENGE",
                title: "NPTEL Hackathon",
                desc: "Explored technical challenges, solved algorithmic problem prompts, and successfully improved practical coding abilities.",
                borderColor: "border-t-purple-500/80 dark:border-t-purple-400/80",
                accent: "text-purple-500 dark:text-purple-400",
                glow: "hover:shadow-[0_20px_50px_rgba(168,85,247,0.1)]",
                dot: "bg-purple-500"
              },
              {
                num: "03",
                tag: "DEVELOPMENT PROJECT",
                title: "Learning Platform",
                desc: "Worked on conceptualizing and designing digital learning-focused solutions to enhance structured online training access.",
                borderColor: "border-t-amber-500/80 dark:border-t-amber-400/80",
                accent: "text-amber-500 dark:text-amber-400",
                glow: "hover:shadow-[0_20px_50px_rgba(245,158,11,0.1)]",
                dot: "bg-amber-500"
              }
            ].map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1] // Editorial easeOutExpo curve
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className={`group relative p-8 md:p-10 rounded-[24px] border border-border-custom bg-card-bg/50 backdrop-blur-md flex flex-col gap-5 cursor-pointer overflow-hidden z-10 ${ach.borderColor} ${ach.glow}`}
              >
                {/* Diagonal Laser Shimmer Effect on Hover */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-foreground/[0.04] dark:via-white/[0.04] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none z-0" />

                {/* Large Background Overlay Number */}
                <div className="absolute right-6 top-4 text-7xl font-black text-foreground/[0.04] dark:text-white/[0.02] select-none pointer-events-none font-mono z-0">
                  {ach.num}
                </div>

                {/* Tech Badge Pill */}
                <div className="relative z-10 flex items-center self-start px-3 py-1 rounded-full border border-border-custom/60 bg-foreground/[0.02] text-[10px] tracking-widest font-mono font-bold text-accent-muted">
                  <span className="relative inline-flex h-1.5 w-1.5 mr-2">
                    <span className={`animate-ping absolute inset-0 rounded-full ${ach.dot} opacity-75`} />
                    <span className={`relative rounded-full h-1.5 w-1.5 ${ach.dot}`} />
                  </span>
                  {ach.tag}
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl md:text-2xl font-black text-foreground tracking-tight uppercase leading-snug group-hover:text-accent transition-colors duration-300">
                  {ach.title}
                </h3>

                {/* Accent Line (Shines on hover) */}
                <div className="relative z-10 w-8 h-[2px] bg-foreground/10 group-hover:w-16 group-hover:bg-foreground transition-all duration-300" />

                {/* Description */}
                <p className="relative z-10 text-sm font-light text-accent-muted leading-relaxed mt-2">
                  {ach.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 5: CONTACT ================= */}
      <section
        id="contact"
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 border-t border-border-custom/50 bg-card-bg/15"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="w-full max-w-5xl flex flex-col gap-12"
        >
          <div className="flex flex-col gap-4">
            <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-accent-muted uppercase">
              04 // CONNECTION
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground uppercase">
              LET&apos;S BUILD SOMETHING INNOVATIVE TOGETHER
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description & Buttons */}
            <div className="lg:col-span-2 flex flex-col items-start gap-6">
              <p className="text-lg md:text-xl font-light text-accent-muted leading-relaxed max-w-2xl">
                Interested in technology, AI, and creative digital solutions. I am open to learning opportunities, collaborations, and projects where I can contribute my skills and continue growing.
              </p>
              <div className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto">
                <a
                  href="https://wa.me/919123558075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full font-medium text-sm md:text-base border border-transparent bg-foreground text-background transition-shadow duration-300 shadow-md shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 text-center flex items-center justify-center min-w-[170px]"
                >
                  Send Message
                </a>
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/MY%20RESUME.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full font-medium text-sm md:text-base border border-border-custom bg-card-bg/40 hover:bg-card-bg/80 hover:border-foreground/40 text-foreground transition-all duration-300 shadow-sm hover:shadow-lg text-center flex items-center justify-center min-w-[170px]"
                >
                  See Resume
                </a>
              </div>
            </div>

            {/* Info Cards & Social Links */}
            <div className="flex flex-col gap-6">
              {/* Contact Details */}
              <div className="p-6 rounded-[20px] border border-border-custom bg-card-bg/50 backdrop-blur-sm flex flex-col gap-4 text-sm">
                <div>
                  <span className="text-xs text-accent-muted uppercase block mb-1">Email Address</span>
                  <a
                    href="mailto:Adithyasenthilkumar57@gmail.com"
                    className="font-semibold text-foreground hover:text-accent-muted break-all"
                  >
                    Adithyasenthilkumar57@gmail.com
                  </a>
                </div>
                <div className="border-t border-border-custom/50 pt-3">
                  <span className="text-xs text-accent-muted uppercase block mb-1">Phone Number</span>
                  <a
                    href="tel:+919123558075"
                    className="font-semibold text-foreground hover:text-accent-muted"
                  >
                    +91 9123558075
                  </a>
                </div>
                <div className="border-t border-border-custom/50 pt-3">
                  <span className="text-xs text-accent-muted uppercase block mb-1">Location</span>
                  <span className="font-semibold text-foreground">
                    Tiruppur, Tamil Nadu, India
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="p-6 rounded-[20px] border border-border-custom bg-card-bg/50 backdrop-blur-sm text-sm">
                <span className="text-xs text-accent-muted uppercase block mb-3">Social Profiles</span>
                <div className="flex flex-wrap gap-4">
                  {[
                    { label: "GitHub", url: "https://github.com/adithyasenthilkumar57-tech" },
                    { label: "LinkedIn", url: "https://www.linkedin.com/in/adithya-s-6b5427378" },
                    { label: "Instagram Portfolio", url: "https://instagram.com" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit Adithya's ${social.label}`}
                      className="text-xs font-semibold uppercase tracking-wider text-foreground hover:text-accent-muted transition-colors duration-300"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <AutoScrollButton />
    </main>
  );
}
