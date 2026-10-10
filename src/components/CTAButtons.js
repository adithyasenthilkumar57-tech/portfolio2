export default function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-4 items-center mt-4 w-full sm:w-auto">
      <a
        href="#projects"
        className="btn-gradient relative px-8 py-4 rounded-full font-semibold text-sm md:text-base shadow-lg text-center flex items-center justify-center min-w-[155px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98]"
      >
        <span className="relative z-10">Explore My Work</span>
      </a>

      <a
        href="#contact"
        className="px-8 py-4 rounded-full font-semibold text-sm md:text-base border border-border-custom bg-card-bg/50 hover:bg-card-bg/80 hover:border-violet-400/40 text-foreground transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] text-center flex items-center justify-center min-w-[155px] cursor-pointer backdrop-blur-md"
      >
        Contact Me
      </a>
    </div>
  );
}
