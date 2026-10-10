export default function HeroContent() {
  return (
    <div className="flex flex-col gap-4 text-left select-none">
      <span className="text-xs md:text-sm font-semibold tracking-[0.35em] text-accent-primary uppercase">
        HELLO, I&apos;M
      </span>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase leading-[0.9] flex flex-col gap-2">
        <span className="gradient-text font-black">ADITHYA</span>
        <span className="text-foreground/50 font-light text-2xl md:text-3xl lg:text-4xl tracking-tight normal-case leading-tight">
          AI &amp; Machine Learning Student
        </span>
        <span className="text-accent-muted font-light text-2xl md:text-3xl lg:text-4xl tracking-tight normal-case leading-tight">
          Web Developer &amp; Experience Builder
        </span>
      </h1>

      <p className="text-base md:text-lg text-accent-muted font-light leading-relaxed max-w-[500px] mt-2">
        I create modern digital experiences by combining web development, artificial intelligence, and creative design. Passionate about building innovative solutions, exploring emerging technologies, and transforming ideas into interactive user-focused products.
      </p>

      {/* Professional Identity Tags */}
      <div className="flex flex-wrap gap-2 mt-4 max-w-[520px]">
        {[
          { label: "AI & Machine Learning", color: "border-violet-400/30 bg-violet-500/[0.06] text-violet-600 dark:text-violet-400 dark:border-violet-400/30" },
          { label: "Web Development", color: "border-cyan-400/30 bg-cyan-500/[0.06] text-cyan-600 dark:text-cyan-400 dark:border-cyan-400/30" },
          { label: "UI/UX Design", color: "border-pink-400/30 bg-pink-500/[0.06] text-pink-600 dark:text-pink-400 dark:border-pink-400/30" },
          { label: "3D Digital Experiences", color: "border-amber-400/30 bg-amber-500/[0.06] text-amber-600 dark:text-amber-400 dark:border-amber-400/30" },
        ].map((tag, i) => (
          <span
            key={i}
            className={`tag-pill text-[10px] md:text-xs font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full border ${tag.color} transition-transform duration-200 hover:scale-105`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
