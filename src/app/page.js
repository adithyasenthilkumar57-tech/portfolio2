"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroContent from "@/components/HeroContent";
import HeroImage from "@/components/HeroImage";
import CTAButtons from "@/components/CTAButtons";
import ScrollIndicator from "@/components/ScrollIndicator";

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

        {/* Soft blur blob 1 */}
        <motion.div
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
        <motion.div
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
        <motion.div
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
      </div>

      {/* Decorative Floating Geometric Shapes (Opacity 0.05 - 0.1) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10">
        {/* Circle shape top-left */}
        <motion.div
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
        <motion.div
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
        <motion.div
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
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 border-t border-border-custom/50 bg-background/20"
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
              className="lg:col-span-2 flex flex-col gap-6 text-lg font-light text-foreground/80 leading-relaxed p-8 rounded-[24px] border border-border-custom/50 bg-background/10 backdrop-blur-sm relative overflow-hidden"
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
                className="group relative p-6 rounded-[20px] border border-border-custom bg-background/30 hover:border-foreground/20 backdrop-blur-sm transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-foreground/[0.03] dark:via-white/[0.03] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none" />
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-foreground flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                  Personal Strengths
                </h4>
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
                className="group relative p-6 rounded-[20px] border border-border-custom bg-background/30 hover:border-foreground/20 backdrop-blur-sm transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-foreground/[0.03] dark:via-white/[0.03] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none" />
                <h4 className="text-sm font-bold uppercase tracking-wider mb-2 text-foreground flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2" />
                  Languages
                </h4>
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
              className="group relative p-8 rounded-[24px] border border-border-custom bg-background/30 hover:border-foreground/20 backdrop-blur-sm flex flex-col md:flex-row justify-between gap-6 md:items-center cursor-pointer transition-all duration-500 overflow-hidden"
            >
              {/* Diagonal Laser Shimmer Effect */}
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-foreground/[0.03] dark:via-white/[0.03] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none z-0" />

              {/* Large Background Overlay letters */}
              <div className="absolute right-6 top-4 text-7xl font-black text-foreground/[0.04] dark:text-white/[0.02] select-none pointer-events-none font-mono z-0">
                EDU
              </div>

              <div className="relative z-10">
                <span className="text-xs font-mono text-accent-muted flex items-center mb-1.5">
                  <span className="relative flex h-1.5 w-1.5 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500" />
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
                className="p-8 border border-border-custom rounded-[20px] bg-background/30 backdrop-blur-sm flex flex-col gap-6"
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

      {/* ================= SECTION 4: ACHIEVEMENTS ================= */}
      <section
        id="achievements"
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 border-t border-border-custom/50 bg-background/20"
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
              03 // LANDMARKS
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
                className={`group relative p-8 md:p-10 rounded-[24px] border border-border-custom bg-background/30 backdrop-blur-md flex flex-col gap-5 cursor-pointer overflow-hidden z-10 ${ach.borderColor} ${ach.glow}`}
              >
                {/* Diagonal Laser Shimmer Effect on Hover */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-foreground/[0.04] dark:via-white/[0.04] to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 ease-out pointer-events-none z-0" />

                {/* Large Background Overlay Number */}
                <div className="absolute right-6 top-4 text-7xl font-black text-foreground/[0.04] dark:text-white/[0.02] select-none pointer-events-none font-mono z-0">
                  {ach.num}
                </div>

                {/* Tech Badge Pill */}
                <div className="relative z-10 flex items-center self-start px-3 py-1 rounded-full border border-border-custom/60 bg-foreground/[0.02] text-[10px] tracking-widest font-mono font-bold text-accent-muted">
                  <span className="relative flex h-1.5 w-1.5 mr-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${ach.dot} opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${ach.dot}`} />
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
        className="relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 lg:px-24 py-24 z-20 border-t border-border-custom/50 bg-background/20"
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
                  className="px-8 py-4 rounded-full font-medium text-sm md:text-base border border-border-custom bg-background/40 hover:bg-background/80 hover:border-foreground/40 text-foreground transition-all duration-300 shadow-sm hover:shadow-lg text-center flex items-center justify-center min-w-[170px]"
                >
                  See Resume
                </a>
              </div>
            </div>

            {/* Info Cards & Social Links */}
            <div className="flex flex-col gap-6">
              {/* Contact Details */}
              <div className="p-6 rounded-[20px] border border-border-custom bg-background/30 backdrop-blur-sm flex flex-col gap-4 text-sm">
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
              <div className="p-6 rounded-[20px] border border-border-custom bg-background/30 backdrop-blur-sm text-sm">
                <span className="text-xs text-accent-muted uppercase block mb-3">Social Profiles</span>
                <div className="flex flex-wrap gap-4">
                  {[
                    { label: "GitHub", url: "https://github.com" },
                    { label: "LinkedIn", url: "https://linkedin.com" },
                    { label: "Instagram Portfolio", url: "https://instagram.com" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
    </main>
  );
}
