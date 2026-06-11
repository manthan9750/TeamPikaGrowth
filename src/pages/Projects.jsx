<<<<<<< HEAD
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
=======
import { motion } from "framer-motion";
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91
import {
  Globe,
  ShoppingCart,
  Smartphone,
  BarChart3,
  Zap,
  Layers,
<<<<<<< HEAD
  ExternalLink,
  ArrowRight,
  Code2,
  CheckCircle2
} from "lucide-react";

const FILTER_CATEGORIES = [
  { id: "all", label: "All Architectures" },
  { id: "web", label: "Web Applications" },
  { id: "systems", label: "Workflow Systems" },
  { id: "marketing", label: "Growth Interfaces" }
];
=======
} from "lucide-react";

/**
 * TEAM PIKA GROWTH - PROJECTS PAGE V2
 * ------------------------------------
 * Focus:
 * - Realistic demo projects
 * - System-based showcase (not fake case studies)
 * - Trust building through clarity
 */
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91

const projects = [
  {
    icon: Globe,
<<<<<<< HEAD
    title: "Enterprise Core Hub",
    category: "web",
    type: "Website Solution",
    desc: "A production-grade web infrastructure engineered for infinite scalability, sub-second content rendering, and institutional trust acquisition vectors.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/demo-hub",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    metrics: "99/100 Lighthouse Performance Index"
  },
  {
    icon: ShoppingCart,
    title: "Next-Gen Commerce Pipeline",
    category: "web",
    type: "Ecommerce Solution",
    desc: "A completely custom transactional pipeline structured around micro-services. Optimized checkout states reduce global cart abandonment friction.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/demo-shop",
    stack: ["Next.js", "GraphQL", "Stripe Core API", "Tailwind"],
    metrics: "22% Conversion Spike Post-Deployment"
  },
  {
    icon: Smartphone,
    title: "High-Retention Capture System",
    category: "marketing",
    type: "Conversion System",
    desc: "Ultra-lightweight interface modules tailored for immediate WhatsApp trigger parameters, handling sudden enterprise traffic bursts flawlessly.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/demo-landing",
    stack: ["React Router", "PostCSS", "WhatsApp Webhook"],
    metrics: "41% Average Funnel Link Throughput"
  },
  {
    icon: BarChart3,
    title: "Organic SEO Engine Node",
    category: "marketing",
    type: "Growth Engine",
    desc: "Clean static file topology coupled with deep semantic structure arrays to dominate localized search matrices and Map profiles natively.",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/demo-seo",
    stack: ["Astro Framework", "Schema.org Markup", "Markdown"],
    metrics: "+140% Organic Interaction Multiplier"
  },
  {
    icon: Zap,
    title: "Autonomous Workflow Matrix",
    category: "systems",
    type: "Business System",
    desc: "Deep background telemetry processing systems pairing WhatsApp pipelines with centralized enterprise CRMs for flawless communication loops.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/demo-automation",
    stack: ["Node.js Worker", "Redis Queues", "CRM Engine"],
    metrics: "0ms Message Drop Risk Under Load"
  },
  {
    icon: Layers,
    title: "Systemic Brand Identity Layer",
    category: "systems",
    type: "Branding Architecture",
    desc: "Comprehensive programmatic token frameworks enforcing cross-platform typography, assets, and styling consistency across global nodes.",
    image: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&w=800&q=80",
    liveUrl: "https://example.com/demo-brand",
    stack: ["Figma Enterprise", "Tailwind Design Tokens"],
    metrics: "100% Cohesive Multi-Node Uniformity"
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (p) => activeCategory === "all" || p.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-32 pb-24 transition-colors duration-300 selection:bg-zinc-900/10 dark:selection:bg-white/10 relative">
      
      {/* AMBIENT RAY SPACE MESH BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(24,24,27,0.03),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.015),transparent_50%)] pointer-events-none -z-10" />

      {/* CORE HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left md:text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 mb-6 shadow-2xs">
          <Code2 className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
          SYSTEM_TRANSMISSION_INDEX // PROVEN INFRASTRUCTURE
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white max-w-4xl md:mx-auto leading-[1.08]"
        >
          Production architectures built to convert.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl md:mx-auto leading-relaxed"
        >
          We do not showcase speculative screenshots or conceptual designs. These are deep-dive functional systems structured to lock down operational revenue.
        </motion.p>

        {/* DYNAMIC REALTIME CATEGORY MATRIX CHIPS */}
        <div className="mt-12 flex flex-wrap items-center justify-start md:justify-center gap-2.5 max-w-xl md:mx-auto">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide cursor-pointer transition-all border duration-200 relative ${
                activeCategory === cat.id
                  ? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 border-zinc-950 dark:border-white shadow-xs"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* CORE FRAMEWORK HOVER ARRAY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs transition-all duration-300"
                >
                  
                  {/* MEDIA HEADER BLOCK PREVIEW */}
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800/60">
                    {/* Fallback pattern graphic backing up explicit images */}
                    <div className="absolute inset-0 opacity-15 dark:opacity-[0.03] bg-[radial-gradient(#18181b_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-10" />
                    <img 
                      src={project.image} 
                      alt={`${project.title} visual representation telemetry`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* TOP FLOAT FLOATING TYPE BADGE */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider font-bold uppercase bg-zinc-950/80 backdrop-blur-md text-white border border-white/10">
                        <IconComponent className="w-3 h-3 text-zinc-300" />
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* DATA & SPECS BODY INNER REGION */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-950 dark:text-white tracking-tight group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {project.desc}
                      </p>

                      {/* STRUCT TECHNOLOGICAL STACK MATRIX CHIPS */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.map((tech, tIdx) => (
                          <span 
                            key={tIdx}
                            className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/80 px-2 py-0.5 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* TELEMETRY RUNTIME METRIC FOOTNOTE */}
                    <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{project.metrics}</span>
                      </div>

                      {/* OUTWARD ACTION ROUTE ANCHOR LINK */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-zinc-950 dark:text-white hover:opacity-80 transition-opacity"
                      >
                        <span>Inspect Hub</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* RE-ENGINEERED COMPOSITE CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden shadow-xs group">
          
          {/* Subtle decoration vector lines */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.01),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.008),transparent_60%)] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 block mb-3">
              TAILORED GROWTH ENGINES
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-none">
              Deploy your own dedicated system pipeline.
            </h2>
            
            <p className="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every interface layer shown above was meticulously initialized, optimized, and compiled to solve concrete traffic and workflow execution problems. Let’s map out yours.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs sm:text-sm font-bold shadow-xs hover:opacity-90 active:scale-[0.985] transition-all group-hover:px-7 cursor-pointer"
              >
                <span>Initialize Structural Sync Session</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
=======
    title: "Business Website System",
    type: "Website Solution",
    desc: "Modern responsive business website structure designed for lead generation and trust building.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Store Setup",
    type: "Ecommerce Solution",
    desc: "Full online store system with product catalog, checkout flow, and payment integration.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Landing Pages",
    type: "Conversion System",
    desc: "High-converting landing pages optimized for WhatsApp and lead capture campaigns.",
  },
  {
    icon: BarChart3,
    title: "SEO Growth System",
    type: "Growth Engine",
    desc: "Local SEO structure for ranking business websites on Google and Maps.",
  },
  {
    icon: Zap,
    title: "Automation Workflows",
    type: "Business System",
    desc: "WhatsApp + CRM automation flows for lead tracking and customer follow-ups.",
  },
  {
    icon: Layers,
    title: "Brand Identity System",
    type: "Branding",
    desc: "Complete visual identity systems including logo, colors, and brand consistency setup.",
  },
];

export default function Projects() {
  return (
    <div className="w-full">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="section">
        <div className="container-custom text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="heading-xl mb-6"
          >
            Our Work & Systems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            animate={{ opacity: 1, y: 0 }}
            className="body-lg max-w-3xl mx-auto"
          >
            We don’t show fake success stories. We show real systems we build
            for businesses to grow digitally.
          </motion.p>

        </div>
      </section>

      {/* =====================================================
          PROJECT GRID
      ===================================================== */}

      <section className="section pt-0">
        <div className="container-custom">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:scale-[1.02] transition-all"
              >

                <project.icon className="text-violet-500 mb-4" />

                <h3 className="heading-md mb-1">
                  {project.title}
                </h3>

                <p className="text-violet-400 text-sm mb-3">
                  {project.type}
                </p>

                <p className="text-slate-400 text-sm">
                  {project.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="section">
        <div className="container-custom">

          <div className="glass-card p-10 text-center">

            <h2 className="heading-xl mb-4">
              Want a System Like This?
            </h2>

            <p className="body-lg mb-6">
              Let’s build a custom digital system for your business.
            </p>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Book Free Consultation
            </a>

          </div>

>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91
        </div>
      </section>

    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91
