import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Menu, X, Globe } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Filtered links for a cleaner structure (CTA handled separately)
 const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Industries", path: "/industries" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* LOGO DESIGN */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-950 dark:bg-white flex items-center justify-center text-white dark:text-zinc-950 font-mono font-black text-sm group-hover:scale-105 transition-transform">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-zinc-900 dark:text-white">
              PIKA GROWTH
            </span>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium -mt-0.5">
              Architecture Hub
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV DIRECTORY */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-mono uppercase tracking-wider px-3 py-2 rounded-lg relative transition-colors duration-200 ${
                  isActive
                    ? "text-zinc-950 dark:text-white font-bold"
                    : "text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-zinc-100 dark:bg-zinc-900 rounded-lg -z-10 border border-zinc-200/50 dark:border-zinc-800/60"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ACTION PREMIUM BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/book"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold transition-all hover:opacity-90 active:scale-[0.98] shadow-xs group"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* MOBILE INTERACTIVE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white bg-zinc-50 dark:bg-zinc-900/50 focus:outline-none transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* MOBILE CONSOLE INTERACTIVE EXPANSION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5 max-w-7xl mx-auto">
              <div className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                <Globe className="w-3 h-3" /> Navigation Core Directories
              </div>

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all ${
                      isActive
                        ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-950 dark:text-white border border-zinc-200/60 dark:border-zinc-800"
                        : "text-zinc-500 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900/40"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900 mt-3">
                <Link
                  to="/book"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold tracking-wider uppercase font-mono shadow-sm transition-all active:scale-[0.99]"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Book Strategy Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}