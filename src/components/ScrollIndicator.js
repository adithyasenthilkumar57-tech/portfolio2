export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 select-none pointer-events-none z-20">
      <div className="flex flex-col items-center gap-1 animate-float-scroll">
        {/* Animated scroll line */}
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-violet-500/60 to-transparent" />
        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-[0_0_6px_rgba(124,58,237,0.7)]" />
        <span className="text-[9px] tracking-[0.25em] font-semibold text-accent-muted uppercase mt-1">
          Scroll
        </span>
      </div>
    </div>
  );
}
