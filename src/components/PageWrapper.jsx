import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * PRODUCTION-LEVEL PAGE WRAPPER
 * Features:
 * 1. Scroll-to-top on route change (Professional standard)
 * 2. Spatial entry/exit transitions (Apple-inspired)
 * 3. AnimatePresence orchestration
 */

// Custom easing for high-end feel
const transitionSettings = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

const variants = {
  initial: { 
    opacity: 0, 
    y: 10, 
    scale: 0.99 
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    scale: 0.99 
  }
};

export default function PageWrapper({ children }) {
  const location = useLocation();

  // Scroll Restoration: Ensures users don't start at the bottom of a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={transitionSettings}
        className="w-full min-h-screen origin-top"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}