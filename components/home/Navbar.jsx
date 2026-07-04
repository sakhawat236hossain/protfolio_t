"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/utils/constants";
import { Menu, X, Code2, MessageSquare, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getNavHref = (href) => {
    if (href.startsWith("/")) return href;
    return pathname === "/" ? href : `/${href}`;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "py-2" : "py-4 lg:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl dark:shadow-2xl dark:shadow-black/50 px-6 py-3"
              : "bg-transparent px-2 py-2"
          }`}
        >
          <a href="/" className="flex items-center gap-2 group relative z-10 hover-target">
            <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }}>
              <Code2 className="h-8 w-8 text-primary group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
            </motion.div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
              Code<span className="text-primary">Nest</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-2 relative z-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={getNavHref(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors rounded-full hover-target group"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
            <div className="h-4 w-px bg-black/20 dark:bg-white/20 mx-2 transition-colors duration-300" />
            <a
              href="/admin/login"
              className="px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover-target transition-colors"
            >
              Login
            </a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/8801758197272?text=${encodeURIComponent("Hello, I would like to discuss a web project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 relative group overflow-hidden rounded-full p-[1px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400 rounded-full animate-spin-slow opacity-70 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDuration: '3s' }} />
              <div className="relative flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-black rounded-full transition-colors group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/50">
                <span className="text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-300">Let's Talk</span>
                <ChevronRight className="h-4 w-4 text-emerald-500 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>

          <div className="lg:hidden flex items-center gap-2 relative z-10">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-900 dark:text-white"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 lg:hidden bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={getNavHref(link.href)}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-black/5 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="h-px w-full bg-black/10 dark:bg-white/10 my-4 transition-colors duration-300" />
              <a
                href={`https://wa.me/8801758197272`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-semibold bg-emerald-100 text-emerald-700 hover:bg-emerald-200 border border-emerald-300 dark:bg-emerald-600/20 dark:text-emerald-400 dark:hover:bg-emerald-600/30 dark:border-emerald-500/30 rounded-xl transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                Discuss Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
