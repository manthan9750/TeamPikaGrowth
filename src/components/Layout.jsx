import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  const location = useLocation();

  /*
   ======================================================
   SCROLL TO TOP ON ROUTE CHANGE
   ======================================================
  */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div
      className="
      min-h-screen
      relative
      overflow-x-hidden
      bg-white
      dark:bg-[#070710]
      text-slate-900
      dark:text-white
      transition-colors
      duration-300
    "
    >
      {/* =====================================================
          GLOBAL BACKGROUND SYSTEM
      ===================================================== */}

      <div
        className="
        fixed
        inset-0
        pointer-events-none
        overflow-hidden
        -z-10
      "
      >
        {/* PURPLE ORB */}

        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          className="
          absolute
          top-[-150px]
          left-[-150px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-violet-600/20
          blur-[150px]
        "
        />

        {/* CYAN ORB */}

        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
            ease: "easeInOut",
          }}
          className="
          absolute
          top-[20%]
          right-[-150px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-cyan-500/15
          blur-[140px]
        "
        />

        {/* CENTER ORB */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="
          absolute
          bottom-[-200px]
          left-1/2
          -translate-x-1/2
          w-[650px]
          h-[650px]
          rounded-full
          bg-violet-500/10
          blur-[180px]
        "
        />
      </div>

      {/* =====================================================
          GRID OVERLAY
      ===================================================== */}

      <div
        className="
        fixed
        inset-0
        pointer-events-none
        opacity-[0.03]
        -z-10
      "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <motion.main
        key={location.pathname}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
        }}
      >
        {children}
      </motion.main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />
    </div>
  );
}
