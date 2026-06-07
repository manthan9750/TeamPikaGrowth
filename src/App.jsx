import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

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
 * TEAM PIKA GROWTH - APP ENGINE
 * ------------------------------
 * This file controls:
 * - routing system
 * - global layout structure
 * - page transitions behavior
 */

export default function App() {
  const location = useLocation();

  /* Auto scroll to top on route change (important UX behavior) */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0b0b12] text-black dark:text-white">

      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT AREA */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/growth-partner" element={<GrowthPartner />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
