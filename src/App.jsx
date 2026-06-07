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
