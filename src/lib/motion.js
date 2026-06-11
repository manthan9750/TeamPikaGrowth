/**
 * PRODUCTION-GRADE MOTION VARIANTS
 * Uses custom cubic-bezier curves and spring physics for "Apple-like" feel.
 */

// Global transition settings for consistency
const transition = {
  spring: { type: "spring", stiffness: 100, damping: 15 },
  ease: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Classic "Apple" curve
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: transition.ease
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: "linear" }
  }
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: transition.spring // Adds a subtle bounce
  }
};

// NEW: Stagger orchestrator for high-density lists/grids
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// NEW: Slide-in effect for sidebar or navigation components
export const slideIn = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: transition.ease
  }
};