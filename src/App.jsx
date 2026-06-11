<<<<<<< HEAD
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Loader2, ShieldCheck, Cpu } from "lucide-react";
import Layout from "./components/Layout";

/**
 * ==========================================================================
 * PERFORMANCE ENGINE: DYNAMIC NODE ROUTE LAZY CORES
 * Splits code arrays to optimize initial painting loads
 * ==========================================================================
 */
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Industries = lazy(() => import("./pages/Industries"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const BookingPage = lazy(() => import("./pages/BookingPage"));

/**
 * ==========================================================================
 * HIGH-FIDELITY DEPLOYMENT PRE-RENDERING PLACEHOLDER
 * Serves as the smooth visual transition buffer during code chunk compilation
 * ==========================================================================
 */
function RouteSuspenseFallback() {
  return (
    <div 
      className="flex-grow w-full min-h-[60vh] flex flex-col items-center justify-center bg-transparent relative z-10 select-none select-none"
      role="status"
      aria-live="polite"
    >
      {/* 1. CENTRAL LOADING TELEMETRY RING */}
      <div className="flex flex-col items-center gap-4 fade-up">
        <div className="relative flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-indigo-500 animate-spin stroke-[2.5]" />
          <div className="absolute w-12 h-12 rounded-full border border-dashed border-indigo-500/20 animate-spin [animation-duration:8s]" />
        </div>
        
        {/* 2. TRANSLUCENT PROGRESS STRINGS */}
        <div className="text-center">
          <h4 className="font-mono text-[10px] font-black tracking-widest uppercase text-zinc-900 dark:text-zinc-100">
            Compiling Viewport Node
          </h4>
          <p className="font-mono text-[9px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mt-1">
            Hydrating Layout Tree Matrices...
          </p>
        </div>
      </div>

      {/* 3. HARDWARE MATRIX METADATA SIGNALS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4 font-mono text-[9px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest pointer-events-none">
        <div className="flex items-center gap-1.5">
          <Cpu className="w-3 h-3 text-indigo-400/70" />
          <span>THREAD: SECURE_CONCURRENT_VIEW</span>
        </div>
        <span className="text-zinc-300 dark:text-zinc-800">|</span>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3 h-3 text-emerald-500" />
          <span>ROUTER STATUS: PARSING</span>
        </div>
      </div>
    </div>
  );
}

/**
 * ==========================================================================
 * APPLICATION EDGE CONTAINER ENGINE ROUTER
 * Maps navigation pipelines cleanly to match Navbar links
 * ==========================================================================
 */
export default function App() {
  return (
    <Suspense fallback={<RouteSuspenseFallback />}>
      <Routes>
        
        {/* 1. PRIMARY STRUCTURAL CORE APPLICATION ELEMENT LINK */}
        <Route path="/" element={<Layout />}>
          
          {/* INDEX PATHWAY: CORE DOM VIEW INJECTION */}
          <Route index element={<Home />} />
          
          {/* COMPILING ROUTE MATRIX CORRESPONDING TO THE PLATFORM LINK DEFINITIONS */}
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="industries" element={<Industries />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          
          {/* EXPLICIT STRATEGY SESSION DEPLOYMENT CALL PIPELINE LINK */}
          <Route path="book" element={<BookingPage />} />
          
          {/* 2. ROBUST WILDCARD SAFETY INTERCEPT NODE */}
          {/* If the user types an invalid path, it redirects them gracefully back to root instead of breaking */}
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Route>

      </Routes>
    </Suspense>
  );
}
=======
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* PAGES */
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Industries from "./pages/Industries";
import GrowthPartner from "./pages/GrowthPartner";
import Contact from "./pages/Contact";

/* COMPONENTS */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/**
 * TEAM PIKA GROWTH - APP ENGINE (V2)
 * -----------------------------------
 * Upgrades:
 * - Page transition animations
 * - Better motion architecture
 * - SaaS-level UX feel
 */

export default function App() {
  const location = useLocation();

  /* Smooth scroll reset on route change */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  /* Page animation variants */
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 15,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <div
      className="
      min-h-screen
      flex
      flex-col
      bg-white
      dark:bg-[#0b0b12]
      text-black
      dark:text-white
      transition-colors
      duration-300
    "
    >
      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />

              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/growth-partner" element={<GrowthPartner />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91
