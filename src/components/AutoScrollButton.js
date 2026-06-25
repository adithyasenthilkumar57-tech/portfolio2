"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { Play, Pause } from "lucide-react";

export default function AutoScrollButton() {
  const [isActive, setIsActive] = useState(false);
  const requestRef = useRef(null);
  const lastScrollTime = useRef(null);

  const scroll = useCallback((timestamp) => {
    if (!lastScrollTime.current) {
      lastScrollTime.current = timestamp;
    }
    
    // Very low speed: scroll 0.7 pixels per frame
    const elapsed = timestamp - lastScrollTime.current;
    if (elapsed > 16) {
      window.scrollBy(0, 0.7);
      lastScrollTime.current = timestamp;
    }

    // Check if we hit the bottom of the page
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2
    ) {
      setIsActive(false);
      return;
    }

    requestRef.current = requestAnimationFrame(scroll);
  }, []);

  useEffect(() => {
    if (isActive) {
      lastScrollTime.current = null;
      requestRef.current = requestAnimationFrame(scroll);
    } else {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isActive, scroll]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsActive(!isActive)}
        className={`flex items-center gap-2 px-4 py-3 rounded-full border text-xs tracking-wider font-mono font-bold uppercase transition-all duration-300 backdrop-blur-md shadow-lg cursor-pointer ${
          isActive
            ? "bg-cyan-500/20 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-pulse"
            : "bg-card-bg/80 border-border-custom text-foreground hover:border-foreground/30"
        }`}
      >
        {isActive ? (
          <>
            <Pause className="w-3.5 h-3.5" />
            <span>Scrolling</span>
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5" />
            <span>Auto Scroll</span>
          </>
        )}
      </button>
    </div>
  );
}
