"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Menu, X } from "lucide-react";
import { navLinks, globalCTAs } from "@/src/data/nav";
import { siteConfig } from "@/src/data/siteConfig";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-bg/70 border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src={siteConfig.logo}
            alt={siteConfig.name} 
            className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-ink dark:text-white">
              {siteConfig.shortName}
            </span>
            <span className="text-[10px] text-content-muted font-medium -mt-0.5">
              Digital Growth Solution
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.label}
                href={link.path}
                className={`text-xs font-mono uppercase tracking-wider px-3 py-2 rounded-lg relative transition-colors duration-200 ${
                  isActive
                    ? "text-ink dark:text-white font-bold"
                    : "text-content-muted hover:text-content"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-bg-secondary dark:bg-surface-elevated rounded-lg -z-10 border border-border"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={globalCTAs.primary.path}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-ink dark:bg-white text-white dark:text-ink text-xs font-bold transition-all hover:opacity-90 active:scale-[0.98] shadow-sm group"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-xl border border-border text-content bg-bg-secondary focus:outline-none transition-colors"
        >
          {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-bg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    href={link.path}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive ? "bg-bg-secondary text-ink dark:text-white" : "text-content-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}