"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
import HeroImage from "@/components/HeroImage";
import CTAButtons from "@/components/CTAButtons";
import ScrollIndicator from "@/components/ScrollIndicator";
import bgTechImg from "../../public/bg-tech.webp";
import AutoScrollButton from "@/components/AutoScrollButton";

export default function Home() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const skillCategories = [
    {
      title: "Development Skills",
      barClass: "skill-bar-dev",
      accentClass: "accent-line-violet",
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
      barClass: "skill-bar-ai",
      accentClass: "accent-line-cyan",
      skills: [
        { name: "Artificial Intelligence", level: 85 },
        { name: "Machine Learning Fundamentals", level: 75 },
        { name: "AI-based Solutions", level: 80 },
        { name: "Technology Research", level: 85 }
      ]
    },
    {
      title: "Design & Creative Tools",
      barClass: "skill-bar-design",
      accentClass: "accent-line-pink",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Canva", level: 90 },
        { name: "Digital Design", level: 85 }
      ]
    },
    {
      title: "Creative Development",
      barClass: "skill-bar-creative",
      accentClass: "accent-line-amber",
      skills: [
        { name: "3D Website Concepts", level: 75 },
        { name: "Interactive Web Experiences", level: 80 },
        { name: "Modern UI Development", level: 90 },
        { name: "Visual Storytelling", level: 85 }
      ]
    }
  ];

  const projects = [
    {
      title: "OPS 3.0",
      abbr: "OPS",
      subtitle: "Autonomous Operations Platform",
      desc: "Qualified leads, recovered revenue, and scheduled conversations — all in one intelligent workspace with autonomous AI operations.",
      url: "https://expo2-delta.vercel.app",
      badge: "AUTONOMOUS OPS",
      badgeColor: "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
      topBorder: "border-t-indigo-500",
      glow: "hover:shadow-[0_20px_60px_rgba(99,102,241,0.18)]",
      dot: "bg-indigo-500",
      tags: ["Next.js", "AI Platform", "Automation", "CRM"],
      ping: "bg-indigo-400",
      gradient: "from-indigo-500/5 to-transparent"
    },
    {
      title: "Clearway AI",
      abbr: "CWY",
      subtitle: "Quantum Traffic Intelligence",
      desc: "Adaptive urban traffic control system featuring quantum-inspired signal scheduling, automated emergency corridors, and real-time predictive congestion modeling.",
      url: "https://stars2.vercel.app/",
      badge: "QUANTUM AI",
      badgeColor: "border-sky-500/30 bg-sky-500/10 text-sky-600 dark:text-sky-400",
      topBorder: "border-t-sky-500",
      glow: "hover:shadow-[0_20px_60px_rgba(14,165,233,0.18)]",
      dot: "bg-sky-500",
      tags: ["React", "AI / ML", "Quantum", "Smart City"],
      ping: "bg-sky-400",
      gradient: "from-sky-500/5 to-transparent"
    },
    {
      title: "Freelancer Lead Radar",
      abbr: "FLR",
      subtitle: "AI-Powered Lead Generation SaaS",
      desc: "Scans the web 24/7 to find businesses needing your services, ranks leads by AI score, and sends 1-click cold outreach with CRM pipeline tracking.",
      url: "https://flr-rouge.vercel.app/",
      badge: "AI RADAR",
      badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
      topBorder: "border-t-cyan-500",
      glow: "hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]",
      dot: "bg-cyan-500",
      tags: ["Next.js", "AI", "SaaS", "CRM"],
      ping: "bg-cyan-400",
      gradient: "from-cyan-500/5 to-transparent"
    },
    {
      title: "Cresconix",
      abbr: "CRX",
      subtitle: "Digital Agency & Solutions",
      desc: "A premium digital agency website showcasing services, portfolio, and client solutions with modern design and seamless user experience.",
      url: "https://cresconix.vercel.app/",
      badge: "AGENCY",
      badgeColor: "border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-400",
      topBorder: "border-t-violet-500",
      glow: "hover:shadow-[0_20px_60px_rgba(124,58,237,0.18)]",
      dot: "bg-violet-500",
      tags: ["Next.js", "UI/UX", "Agency"],
      ping: "bg-violet-400",
      gradient: "from-violet-500/5 to-transparent"
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
      glow: "hover:shadow-[0_20px_60px_rgba(16,185,129,0.18)]",
      dot: "bg-emerald-500",
      tags: ["React", "AI", "Agriculture"],
      ping: "bg-emerald-400",
      gradient: "from-emerald-500/5 to-transparent"
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
      glow: "hover:shadow-[0_20px_60px_rgba(34,197,94,0.18)]",
      dot: "bg-green-500",
      tags: ["Node.js", "WhatsApp API", "Bot"],
      ping: "bg-green-400",
      gradient: "from-green-500/5 to-transparent"
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
      glow: "hover:shadow-[0_20px_60px_rgba(245,158,11,0.18)]",
      dot: "bg-amber-500",
      tags: ["React", "UI/UX", "Restaurant"],
      ping: "bg-amber-400",
      gradient: "from-amber-500/5 to-transparent"
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
      glow: "hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)]",
      dot: "bg-orange-500",
      tags: ["Next.js", "Branding", "Motion"],
      ping: "bg-orange-400",
      gradient: "from-orange-500/5 to-transparent"
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
      glow: "hover:shadow-[0_20px_60px_rgba(14,165,233,0.18)]",
      dot: "bg-sky-500",
      tags: ["React", "Portfolio", "Animations"],
      ping: "bg-sky-400",
      gradient: "from-sky-500/5 to-transparent"
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
      glow: "hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]",
      dot: "bg-blue-500",
      tags: ["Next.js", "Auth", "Social Network"],
      ping: "bg-blue-400",
      gradient: "from-blue-500/5 to-transparent"
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
      glow: "hover:shadow-[0_20px_60px_rgba(20,184,166,0.18)]",
      dot: "bg-teal-500",
      tags: ["Node.js", "API", "Dashboard"],
      ping: "bg-teal-400",
      gradient: "from-teal-500/5 to-transparent"
    }
  ];

  return (
    <main className="relative w-full bg-background text-foreground transition-colors duration-300">
      {/* Editorial Noise Overlay */}
      <div className="noise-overlay" />

      {/* Header */}
      <Header />

      {/* Global Background Blobs (GPU Composited, 0% JS CPU) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="animate-float-slow absolute -top-60 -left-60 w-[700px] h-[700px] rounded-full bg-blob-violet" />
        <div className="animate-float-reverse absolute top-[35%] -right-60 w-[600px] h-[600px] rounded-full bg-blob-cyan" />
        <div className="animate-float-slow absolute bottom-[-120px] left-[-80px] w-[500px] h-[500px] rounded-full bg-blob-pink" />
      </div>

      {/* ================= SECTION 1: HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 overflow-hidden hero-bg-gradient"
      >
        {/* Subtle Tech BG */}
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03] mix-blend-screen pointer-events-none">
          <Image
            src={bgTechImg}
            alt="Tech Background Pattern"
            title="Adithya Portfolio Tech Background Pattern"
            fill
            sizes="100vw"
            className="object-cover filter blur-[60px] select-none scale-110"
          />
        </div>

        {/* Floating Geometric Accents (GPU Composited) */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10">
          <div className="animate-float-gentle absolute top-[22%] left-[8%] w-10 h-10 rounded-full border border-violet-400/20 dark:border-violet-400/30" />
          <div className="animate-rotate-slow absolute top-[75%] right-[12%] w-8 h-8 border border-cyan-400/20 dark:border-cyan-400/30 rounded-sm" />
          <div className="animate-float-slow absolute top-[48%] left-[4%] w-14 h-[1px] bg-gradient-to-r from-violet-400/30 to-transparent" />
          <div className="animate-float-gentle absolute top-[15%] right-[8%] w-6 h-6 rounded-full border border-pink-400/20 dark:border-pink-400/30" />
        </div>

        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-20">
          <div className="flex flex-col items-start gap-8 w-full max-w-2xl order-2 md:order-1 lg:order-1">
            <HeroContent />
            <CTAButtons />
          </div>
          <div className="flex items-center justify-center w-full lg:w-auto order-1 md:order-2 lg:order-2">
            <HeroImage />
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* ================= SECTION 2: ABOUT ME ================= */}
      <section
        id="about"
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 about-bg-gradient"
      >
        {/* Gradient Divider Top */}
        <div className="section-divider absolute top-0 left-0 right-0" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="w-full max-w-5xl flex flex-col gap-12"
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs md:text-sm font-semibold tracking-[0.35em] text-accent-primary uppercase">
              01 // BIOGRAPHY
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
              <span className="gradient-text">ABOUT</span>{" "}
              <span className="text-foreground">ME</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Biography Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-2 group relative flex flex-col gap-6 text-lg font-light text-foreground/80 leading-relaxed p-8 rounded-[24px] border border-border-custom bg-card-bg/60 backdrop-blur-xl overflow-hidden shadow-xl shadow-violet-500/5"
            >
              {/* Accent Left Border */}
              <div className="absolute top-0 left-0 w-[3px] h-full accent-line-violet rounded-l-[24px]" />
              {/* Shimmer */}
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-violet-500/[0.03] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none" />
              <p>I am <span className="font-semibold gradient-text">Adithya</span>, a Bachelor of Artificial Intelligence and Machine Learning student passionate about technology, creativity, and problem-solving.</p>
              <p>My journey focuses on exploring the intersection between artificial intelligence, web development, and digital design. I enjoy creating modern websites, experimenting with AI technologies, and developing user-focused digital experiences.</p>
              <p>I believe technology is not only about writing code but also about creating meaningful solutions that improve user experiences.</p>
              <p>I continuously learn new technologies, participate in innovative challenges, and develop projects that help me grow as a future technology professional.</p>
            </motion.div>

            {/* Sidebar Cards */}
            <div className="flex flex-col gap-6 w-full">
              {/* Strengths */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-[20px] border border-border-custom bg-card-bg/60 backdrop-blur-xl overflow-hidden shadow-lg shadow-violet-500/5 cursor-pointer"
              >
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-violet-500/[0.04] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500/80 via-cyan-500/80 to-transparent rounded-t-[20px]" />
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(124,58,237,0.6)]" />
                  Personal Strengths
                </h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {["Creative Thinking", "Problem Solving", "Team Collaboration", "Leadership", "Fast Learning", "Effective Communication", "Critical Thinking"].map((strength, i) => (
                    <span
                      key={i}
                      className="tag-pill text-xs px-3 py-1 rounded-full border border-border-custom bg-foreground/[0.03] text-accent-muted"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-[20px] border border-border-custom bg-card-bg/60 backdrop-blur-xl overflow-hidden shadow-lg shadow-cyan-500/5 cursor-pointer"
              >
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-cyan-500/[0.04] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/80 via-emerald-500/80 to-transparent rounded-t-[20px]" />
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3 text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {["English", "Tamil", "Kannada"].map((lang, i) => (
                    <span key={i} className="tag-pill text-xs px-3 py-1.5 rounded-full border border-border-custom bg-foreground/[0.03] text-accent-muted font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Education Sub-section */}
          <div className="mt-4 pt-8">
            <div className="section-divider mb-8" />
            <h3 className="text-xl font-bold tracking-tight mb-6 uppercase text-foreground flex items-center gap-3">
              <span className="gradient-text">Education</span>
              <span className="text-foreground">Background</span>
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-[24px] border border-border-custom bg-card-bg/60 hover:border-violet-400/30 backdrop-blur-xl flex flex-col md:flex-row justify-between gap-6 md:items-center cursor-pointer transition-all duration-500 overflow-hidden shadow-xl shadow-violet-500/5 hover:shadow-[0_24px_60px_rgba(124,58,237,0.14)]"
            >
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-violet-500/[0.04] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500/80 via-cyan-500/80 to-pink-500/80 to-transparent" />
              <div className="absolute right-6 top-4 text-7xl font-black text-foreground/[0.03] select-none pointer-events-none font-mono z-0">EDU</div>
              <div className="relative z-10">
                <span className="text-xs font-mono text-accent-muted flex items-center mb-2">
                  <span className="relative inline-flex h-1.5 w-1.5 mr-2">
                    <span className="animate-ping absolute inset-0 rounded-full bg-violet-400 opacity-75" />
                    <span className="relative rounded-full h-1.5 w-1.5 bg-violet-500" />
                  </span>
                  2024 - 2028 // SAKTHI VIGNESHWARA KALVI NILAYAM
                </span>
                <h4 className="text-lg md:text-xl font-bold text-foreground">Bachelor of Artificial Intelligence & Machine Learning</h4>
              </div>
              <div className="flex gap-8 relative z-10">
                <div className="text-left">
                  <span className="text-xs text-accent-muted block mb-1">10th Grade Score</span>
                  <span className="text-2xl font-black gradient-text">77%</span>
                </div>
                <div className="text-left">
                  <span className="text-xs text-accent-muted block mb-1">12th Grade Score</span>
                  <span className="text-2xl font-black gradient-text">70%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 3: SKILLS ================= */}
      <section
        id="skills"
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 skills-bg-gradient"
      >
        <div className="section-divider absolute top-0 left-0 right-0" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="w-full max-w-5xl flex flex-col gap-12"
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs md:text-sm font-semibold tracking-[0.35em] text-accent-primary uppercase">
              02 // EXPERTISE
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
              <span className="gradient-text">SKILLS</span>{" "}
              <span className="text-foreground">& TECHNOLOGIES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="group relative p-8 border border-border-custom rounded-[24px] bg-card-bg/60 backdrop-blur-xl flex flex-col gap-6 overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(124,58,237,0.10)] transition-all duration-400 cursor-pointer"
              >
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-foreground/[0.02] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none" />
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${category.accentClass} rounded-t-[24px]`} />

                <h3 className="text-sm font-bold tracking-wider text-foreground uppercase flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${category.accentClass}`} />
                  {category.title}
                </h3>

                <div className="flex flex-col gap-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-2">
                      <div className="flex justify-between text-sm items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-accent-muted font-mono font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-[4px] bg-foreground/[0.06] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: sIdx * 0.05 }}
                          className={`h-full rounded-full ${category.barClass}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 4: PROJECTS ================= */}
      <section
        id="projects"
        className="relative w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 projects-bg-gradient"
      >
        <div className="section-divider absolute top-0 left-0 right-0" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="w-full max-w-6xl flex flex-col gap-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs md:text-sm font-semibold tracking-[0.35em] text-accent-primary uppercase">
                03 // FEATURED WORK
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
                <span className="gradient-text">PROJECTS</span>{" "}
                <span className="text-foreground">& INNOVATIONS</span>
              </h2>
            </div>
            <Link
              href="/projects"
              aria-label="View all projects"
              className="self-start md:self-end inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold border border-border-custom bg-card-bg/50 hover:bg-violet-500/10 hover:border-violet-400/40 text-foreground transition-all duration-300 shrink-0 backdrop-blur-md"
            >
              View All <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.07, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-[24px] border border-border-custom bg-card-bg/60 backdrop-blur-xl p-6 overflow-hidden shadow-xl transition-all duration-400 cursor-pointer border-t-2 ${project.topBorder} ${project.glow}`}
                onClick={() => window.open(project.url, "_blank")}
              >
                {/* Gradient corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${project.gradient} pointer-events-none`} />
                {/* Shimmer */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-800 ease-out pointer-events-none z-0" />
                {/* Watermark */}
                <div className="absolute right-4 bottom-3 text-6xl font-black text-foreground/[0.03] select-none pointer-events-none font-mono z-0">
                  {project.abbr}
                </div>

                <div className="relative z-10 flex flex-col gap-4 h-full">
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
                      aria-label={`Visit ${project.title} live website (opens in a new tab)`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 p-2 rounded-full border border-border-custom bg-foreground/[0.03] hover:bg-foreground hover:text-background text-foreground transition-all duration-300 hover:scale-110"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      <span className="sr-only">Visit {project.title} live website</span>
                    </a>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-extrabold tracking-tight text-foreground group-hover:text-accent-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-accent-muted">{project.subtitle}</p>
                  </div>

                  <p className="text-sm text-foreground/70 font-light leading-relaxed flex-1">
                    {project.desc}
                  </p>

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

          <div className="flex justify-center mt-4">
            <Link
              href="/projects"
              aria-label="Explore all projects"
              className="btn-gradient relative z-10 inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-sm hover:scale-105 shadow-lg transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore All Projects <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 5: ACHIEVEMENTS ================= */}
      <section
        id="achievements"
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20"
        style={{ background: 'var(--bg-alt)' }}
      >
        <div className="section-divider absolute top-0 left-0 right-0" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="w-full max-w-5xl flex flex-col gap-12"
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs md:text-sm font-semibold tracking-[0.35em] text-accent-primary uppercase">
              04 // LANDMARKS
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase">
              <span className="gradient-text">ACHIEVEMENTS</span>{" "}
              <span className="text-foreground">& EXPERIENCES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                tag: "NATIONAL HACKATHON",
                title: "Smart India Hackathon",
                desc: "Participated in innovation-based problem solving and collaborative technology development, addressing challenging real-world issues.",
                topGradient: "from-cyan-500/80 via-blue-500/80 to-transparent",
                accent: "text-cyan-500 dark:text-cyan-400",
                glow: "hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]",
                dot: "bg-cyan-500",
                dotGlow: "shadow-[0_0_8px_rgba(6,182,212,0.7)]"
              },
              {
                num: "02",
                tag: "ONLINE CHALLENGE",
                title: "NPTEL Hackathon",
                desc: "Explored technical challenges, solved algorithmic problem prompts, and successfully improved practical coding abilities.",
                topGradient: "from-violet-500/80 via-purple-500/80 to-transparent",
                accent: "text-violet-500 dark:text-violet-400",
                glow: "hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]",
                dot: "bg-violet-500",
                dotGlow: "shadow-[0_0_8px_rgba(124,58,237,0.7)]"
              },
              {
                num: "03",
                tag: "DEVELOPMENT PROJECT",
                title: "Learning Platform",
                desc: "Worked on conceptualizing and designing digital learning-focused solutions to enhance structured online training access.",
                topGradient: "from-amber-500/80 via-orange-500/80 to-transparent",
                accent: "text-amber-500 dark:text-amber-400",
                glow: "hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)]",
                dot: "bg-amber-500",
                dotGlow: "shadow-[0_0_8px_rgba(245,158,11,0.7)]"
              }
            ].map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, transition: { duration: 0.35, ease: "easeOut" } }}
                className={`group relative p-8 md:p-10 rounded-[24px] border border-border-custom bg-card-bg/60 backdrop-blur-xl flex flex-col gap-5 cursor-pointer overflow-hidden shadow-xl transition-all duration-400 ${ach.glow}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${ach.topGradient}`} />
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-foreground/[0.03] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none z-0" />
                <div className="absolute right-6 top-4 text-7xl font-black text-foreground/[0.03] select-none pointer-events-none font-mono z-0">{ach.num}</div>

                <div className="relative z-10 flex items-center self-start px-3 py-1 rounded-full border border-border-custom/60 bg-foreground/[0.02] text-[10px] tracking-widest font-mono font-bold text-accent-muted">
                  <span className="relative inline-flex h-1.5 w-1.5 mr-2">
                    <span className={`animate-ping absolute inset-0 rounded-full ${ach.dot} opacity-75`} />
                    <span className={`relative rounded-full h-1.5 w-1.5 ${ach.dot} ${ach.dotGlow}`} />
                  </span>
                  {ach.tag}
                </div>

                <h3 className={`relative z-10 text-xl md:text-2xl font-black tracking-tight uppercase leading-snug group-hover:${ach.accent} transition-colors duration-300 text-foreground`}>
                  {ach.title}
                </h3>

                <div className="relative z-10 w-8 h-[2px] bg-foreground/10 group-hover:w-20 group-hover:bg-gradient-to-r group-hover:from-violet-500/80 group-hover:to-cyan-500/80 transition-all duration-500 rounded-full" />

                <p className="relative z-10 text-sm font-light text-accent-muted leading-relaxed mt-1">{ach.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION 6: CONTACT ================= */}
      <section
        id="contact"
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 contact-bg-gradient"
      >
        <div className="section-divider absolute top-0 left-0 right-0" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
          variants={sectionVariants}
          className="w-full max-w-5xl flex flex-col gap-12"
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs md:text-sm font-semibold tracking-[0.35em] text-accent-primary uppercase">
              05 // CONNECTION
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
              <span className="gradient-text-tri">LET&apos;S BUILD</span>
              <br />
              <span className="text-foreground">SOMETHING INNOVATIVE</span>
              <br />
              <span className="gradient-text">TOGETHER</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Description & Buttons */}
            <div className="lg:col-span-2 flex flex-col items-start gap-8">
              <p className="text-lg md:text-xl font-light text-accent-muted leading-relaxed max-w-xl">
                Interested in technology, AI, and creative digital solutions. I am open to learning opportunities, collaborations, and projects where I can contribute my skills and continue growing.
              </p>
              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <a
                  href="https://wa.me/919123558075"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send message to Adithya on WhatsApp (opens in a new tab)"
                  className="btn-gradient relative px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-xl hover:scale-105 transition-all duration-300 text-center flex items-center justify-center min-w-[170px] gap-2 z-10"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="w-4 h-4" aria-hidden="true" /> Send Message
                  </span>
                </a>
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/MY%20RESUME.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Adithya's resume PDF (opens in a new tab)"
                  className="px-8 py-4 rounded-full font-semibold text-sm md:text-base border border-border-custom bg-card-bg/50 hover:bg-card-bg/80 hover:border-violet-400/40 text-foreground transition-all duration-300 shadow-sm hover:shadow-xl text-center flex items-center justify-center min-w-[170px] gap-2 backdrop-blur-md"
                >
                  See Resume
                </a>
              </div>
            </div>

            {/* Right: Info Cards */}
            <div className="flex flex-col gap-5">
              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="group relative p-6 rounded-[20px] border border-border-custom bg-card-bg/60 backdrop-blur-xl flex flex-col gap-4 text-sm overflow-hidden shadow-lg hover:shadow-[0_16px_40px_rgba(124,58,237,0.10)] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500/80 via-cyan-500/80 to-transparent" />
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <Mail className="w-3.5 h-3.5 text-violet-500 dark:text-violet-400" />
                  </div>
                  <div>
                    <span className="text-xs text-accent-muted uppercase block mb-0.5 tracking-wider">Email</span>
                    <a
                      href="mailto:Adithyasenthilkumar57@gmail.com"
                      className="font-semibold text-foreground hover:text-accent-primary break-all transition-colors text-xs"
                    >
                      Adithyasenthilkumar57@gmail.com
                    </a>
                  </div>
                </div>
                <div className="border-t border-border-custom/50 pt-3 flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <Phone className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-xs text-accent-muted uppercase block mb-0.5 tracking-wider">Phone</span>
                    <a
                      href="tel:+919123558075"
                      className="font-semibold text-foreground hover:text-accent-secondary transition-colors"
                    >
                      +91 9123558075
                    </a>
                  </div>
                </div>
                <div className="border-t border-border-custom/50 pt-3 flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-pink-500/10 border border-pink-500/20">
                    <MapPin className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
                  </div>
                  <div>
                    <span className="text-xs text-accent-muted uppercase block mb-0.5 tracking-wider">Location</span>
                    <span className="font-semibold text-foreground">Tiruppur, Tamil Nadu, India</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="group relative p-6 rounded-[20px] border border-border-custom bg-card-bg/60 backdrop-blur-xl text-sm overflow-hidden shadow-lg hover:shadow-[0_16px_40px_rgba(6,182,212,0.10)] transition-all duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500/80 via-blue-500/80 to-transparent" />
                <span className="text-xs text-accent-muted uppercase block mb-4 tracking-wider">Social Profiles</span>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "GitHub", abbr: "GH", url: "https://github.com/adithyasenthilkumar57-tech", color: "text-foreground hover:text-foreground/80", dot: "bg-foreground/80" },
                    { label: "LinkedIn", abbr: "LI", url: "https://www.linkedin.com/in/adithya-s-6b5427378", color: "text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300", dot: "bg-blue-500 dark:bg-blue-400" },
                    { label: "Instagram Portfolio", abbr: "IG", url: "https://instagram.com", color: "text-pink-500 hover:text-pink-400 dark:text-pink-400 dark:hover:text-pink-300", dot: "bg-pink-500 dark:bg-pink-400" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit Adithya's ${social.label}`}
                      aria-label={`Visit Adithya's ${social.label} profile (opens in a new tab)`}
                      className={`flex items-center gap-3 group/link font-semibold text-sm ${social.color} transition-all duration-300`}
                    >
                      <span className={`w-2 h-2 rounded-full ${social.dot} flex-shrink-0`} aria-hidden="true" />
                      <span className="group-hover/link:translate-x-1 transition-transform duration-200">{social.label}</span>
                      <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover/link:opacity-100 transition-opacity duration-200" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <AutoScrollButton />
    </main>
  );
}
