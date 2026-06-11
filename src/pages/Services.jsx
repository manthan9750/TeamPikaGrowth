import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Solutions" },
    { id: "engineering", name: "Web & Product" },
    { id: "automation", name: "Intelligence & Automation" },
    { id: "strategy", name: "Strategy & Scale" }
  ];

  const services = [
    {
      title: "Website Design & Development",
      category: "engineering",
      desc: "High-performance web frameworks designed for precision conversions, performance metrics, and sub-pixel scale response.",
      metrics: "Next.js / React / Remix Optimization"
    },
    {
      title: "UI/UX Design Systems",
      category: "engineering",
      desc: "Clean, comprehensive interface components focused closely on modular scaling tokens, user retention, and cognitive layout pathing.",
      metrics: "Figma Tokens / Enterprise Kits"
    },
    {
      title: "Brand Identity Design",
      category: "strategy",
      desc: "Complete corporate architecture including typographic design layout systems, core scale guidelines, and explicit design patterns.",
      metrics: "Asset Deliverables & Brand Matrix"
    },
    {
      title: "Conversion Optimization",
      category: "strategy",
      desc: "Comprehensive multi-variant analytics modeling designed to improve performance vectors on mission-critical landing pages and sales pipelines.",
      metrics: "A/B Diagnostics & Heatmaps"
    },
    {
      title: "Automation Systems",
      category: "automation",
      desc: "Autonomous workflow pipeline deployment eliminating manual data overhead with resilient, real-time trigger frameworks.",
      metrics: "Make / Zapier / Custom Node Workers"
    },
    {
      title: "Digital Marketing Strategy",
      category: "strategy",
      desc: "Highly structured attribution models, technical funnel mapping, and programmatic performance infrastructure optimized for scaling acquisition budgets.",
      metrics: "LTV Engine / Paid Ad Infrastructure"
    },
    {
      title: "SEO & Organic Growth",
      category: "strategy",
      desc: "Semantic payload construction, modern content pipelines, and systemic search index optimization to build reliable inbound funnels.",
      metrics: "Core Web Vitals / Schema Tuning"
    },
    {
      title: "Landing Page Design",
      category: "engineering",
      desc: "Laser-focused single-point landing interfaces optimized for sudden traffic spikes, low latency execution, and direct lead acquisition.",
      metrics: "TailwindCSS / High Retention Flow"
    },
    {
      title: "Business Consultation",
      category: "automation",
      desc: "Strategic technical assessment to analyze application architecture vulnerabilities and map out automated computational growth roadmaps.",
      metrics: "Systems Audit / Architecture Sync"
    }
  ];

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-28 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 mb-4"
          >
            Capabilities Manifest
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white"
          >
            Capabilities & Operational Systems.
          </motion.h1>
          
          <p className="mt-4 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-xl md:mx-auto leading-relaxed">
            We engineer end-to-end user growth networks—structuring clean frontend interfaces, cognitive automation layers, and systemic scaling tools.
          </p>
        </div>

        {/* CONTROLS & FILTER BAR */}
        <div className="flex justify-start md:justify-center mb-12 overflow-x-auto pb-3 border-b border-zinc-200 dark:border-zinc-900 scrollbar-none">
          <div className="flex bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1 rounded-xl shadow-xs gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 relative ${
                  activeCategory === cat.id 
                    ? "text-zinc-950 dark:text-white" 
                    : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* SERVICES GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((item, index) => (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Subtle Top Telemetry Mock Matrix Accent */}
                  <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/60 pb-3 mb-4 text-[10px] font-mono text-zinc-400">
                    <span className="uppercase">SYSTEM // {item.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-emerald-500 transition-colors" />
                  </div>

                  <h3 className="text-base font-bold text-zinc-950 dark:text-white tracking-tight group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/40">
                  <span className="font-mono text-[10px] tracking-tight block text-zinc-400 dark:text-zinc-500">
                    {item.metrics}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-28 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_200px,rgba(24,24,27,0.02),transparent)] dark:bg-[radial-gradient(circle_600px_at_50%_200px,rgba(255,255,255,0.01),transparent)] pointer-events-none" />
          
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Ready to integrate your growth network?
          </h2>
          
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
            Let's structure high-efficiency functional models tailored precisely around your existing operations.
          </p>

          <div className="mt-8 flex justify-center items-center gap-4 flex-col sm:flex-row">
            <Link 
              to="/booking" 
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-xs hover:opacity-90 transition-opacity text-center"
            >
              Book Free Consultation
            </Link>

            <Link 
              to="/about" 
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-all text-center"
            >
              Meet Our Team &rarr;
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}