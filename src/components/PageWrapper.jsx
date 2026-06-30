"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
  const pathname = usePathname();

  // Scroll Restoration: Ensures users don't start at the bottom of a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={transitionSettings}
        className="w-full origin-top"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}