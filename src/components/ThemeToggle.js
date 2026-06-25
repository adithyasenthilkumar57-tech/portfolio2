"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  if (!mounted) {
    return (
      <div className="w-12 h-12 flex items-center justify-center rounded-full border border-border-custom bg-card-bg/50 backdrop-blur-md" />
    );
  }

  return (
    <motion.button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      className="relative w-12 h-12 flex items-center justify-center rounded-full border border-border-custom bg-card-bg/40 hover:bg-card-bg/80 backdrop-blur-md cursor-pointer transition-colors duration-300 focus:outline-none"
      whileHover={{ scale: 1.05, borderColor: "var(--accent-color)" }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-foreground flex items-center justify-center"
          >
            <Moon className="w-5 h-5 fill-current" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, scale: 0, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-foreground flex items-center justify-center"
          >
            <Sun className="w-5 h-5 fill-current" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
