"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scrolling to toggle header glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use IntersectionObserver to track active section dynamically
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px", // Triggers active state when section enters center
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "py-4 bg-background/50 border-b border-border-custom shadow-lg shadow-black/[0.02] backdrop-blur-xl"
            : "py-6 bg-transparent border-b border-transparent"
          }`}
      >
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-12">
          {/* Logo Area (Left) */}
          <motion.div
            onClick={() => handleNavClick("home")}
            className="cursor-pointer select-none text-foreground font-semibold tracking-[0.3em] text-xs md:text-sm font-sans flex items-center z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              A D I T H Y A
            </motion.span>
          </motion.div>

          {/* Desktop Navigation Links (Centered in Header) */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-1 z-40 bg-foreground/[0.01] dark:bg-white/[0.01] border border-foreground/[0.06] dark:border-white/[0.06] rounded-full p-1 backdrop-blur-md shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <div key={item.id} className="relative py-1.5 px-4 flex items-center justify-center">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`text-xs md:text-sm tracking-widest font-medium cursor-pointer transition-colors duration-300 relative z-10 ${isActive ? "text-foreground font-semibold" : "text-accent-muted hover:text-foreground"
                      }`}
                  >
                    {item.label}
                  </button>
                  {/* Sliding Glass Capsule Effect */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavCapsule"
                      className="absolute inset-0 bg-foreground/[0.04] dark:bg-white/[0.05] border border-foreground/[0.08] dark:border-white/[0.08] rounded-full z-0 flex items-end justify-center"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    >
                      {/* Premium Cyan Neon Glow Line */}
                      <span className="w-4 h-[2px] rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] absolute -bottom-[1px]" />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action Area: Theme Toggle & Mobile Hamburger */}
          <div className="flex items-center gap-4 z-50">
            {/* Theme Toggle Button (Always visible on top right) */}
            <ThemeToggle />

            {/* Hamburger Icon for Mobile/Tablet */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground focus:outline-none cursor-pointer p-1"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar Panel Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 dark:bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Sliding Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[280px] z-45 bg-background/90 border-l border-border-custom backdrop-blur-2xl shadow-2xl md:hidden flex flex-col justify-center px-8"
            >
              <div className="flex flex-col gap-8 text-left">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-lg tracking-widest font-semibold text-left py-2 border-b border-border-custom/50 flex items-center justify-between cursor-pointer ${isActive ? "text-foreground" : "text-accent-muted"
                        }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="mobileActiveBullet"
                          className="w-2 h-2 rounded-full bg-foreground"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
