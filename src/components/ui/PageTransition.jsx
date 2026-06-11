import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const location = useLocation();

  // Custom cubic-bezier for that "Apple" spring feel
  const transitionSettings = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1], // The "Apple" curve: smooth entry, elegant stop
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.99 }}
        transition={transitionSettings}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}