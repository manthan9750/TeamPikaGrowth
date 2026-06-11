/**
 * PRODUCTION-GRADE HOVER VARIANTS
 * Uses Spring physics for a tactile, "premium" feel.
 */

export const hoverLift = {
  whileHover: {
    y: -8,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 25 
    }
  },
  whileTap: { 
    y: -2, 
    scale: 0.98 
  }
};

export const hoverScale = {
  whileHover: {
    scale: 1.02,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }
  },
  whileTap: { 
    scale: 0.97 
  }
};

// Added: New helper for subtle glow/border effects
export const hoverHighlight = {
  whileHover: {
    borderColor: "rgba(161, 161, 170, 0.5)", // zinc-400
    transition: { duration: 0.3 }
  }
};