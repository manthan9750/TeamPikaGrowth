import { motion } from "framer-motion";
import { Link } from "react-router-dom";
<<<<<<< HEAD


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 16 } 
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-x-hidden pt-28 pb-24 transition-colors duration-300">
      
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(24,24,27,0.04),transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(255,255,255,0.03),transparent)] pointer-events-none" />
        
        <div className="text-center max-w-4xl mx-auto relative z-10">
          {/* Announcement Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 shadow-sm mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-100 animate-pulse" />
            Engineered Systems for Global Digital Agency Scaling
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1]"
          >
            We build corporate digital growth platforms that convert interactions into workflows.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            High-performance frontend systems, cognitive AI agent fleets, custom process automation, and optimized serverless cloud solutions engineered for absolute reliability.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/book"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 hover:opacity-90 shadow-sm transition-opacity text-center min-w-[200px]"
            >
              Book Free Consultation
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 shadow-xs transition-colors text-center min-w-[200px]"
            >
              Explore Capabilities &rarr;
            </Link>
          </motion.div>
        </div>

        {/* HERO ABSTRACT VISUAL EMBED */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 50 }}
          className="mt-16 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900/60 p-4 shadow-2xl relative overflow-hidden max-w-5xl mx-auto group backdrop-blur-xs"
        >
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-zinc-50/20 dark:to-zinc-950/20 pointer-events-none" />
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-4 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
              <span className="ml-2 font-mono tracking-tight">pika-cloud-matrix // pipeline_status: active</span>
            </div>
            <span className="font-mono bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded text-[10px]">Vercel Serverless Ready</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-48 md:h-64 font-mono text-[11px] text-zinc-500 p-2 overflow-hidden">
            <div className="md:col-span-4 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-4 bg-zinc-50/50 dark:bg-zinc-950/40 space-y-2">
              <p className="text-zinc-400 dark:text-zinc-500 font-bold border-b border-zinc-200 dark:border-zinc-800 pb-1 uppercase tracking-wider">Telemetry Routing</p>
              <p className="text-emerald-600 dark:text-emerald-400">✓ GET /api/book.js - 200 OK (14ms)</p>
              <p className="text-zinc-600 dark:text-zinc-400">⚡ payload: {"{ telemetry: true, status: 'synced' }"}</p>
              <p className="text-zinc-400 dark:text-zinc-600 animate-pulse">&gt; listening for operational inputs...</p>
            </div>
            <div className="md:col-span-8 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-4 bg-zinc-50/50 dark:bg-zinc-950/40 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-1">
                <p className="text-zinc-400 dark:text-zinc-500 font-bold uppercase tracking-wider">System Agent Execution Layer</p>
                <p className="text-zinc-700 dark:text-zinc-300">initialize model_dispatch --target="automation_systems"</p>
                <p className="text-zinc-400 dark:text-zinc-600">loading custom hooks and reactive layouts...</p>
              </div>
              <div className="h-16 w-full border-t border-zinc-200 dark:border-zinc-800/60 pt-2 flex items-end gap-1">
                {[40, 70, 45, 60, 55, 80, 95, 65, 75, 50, 85, 90, 100, 40, 60, 85].map((val, idx) => (
                  <div key={idx} className="flex-1 bg-zinc-200 dark:bg-zinc-800 rounded-t-sm" style={{ height: `${val}%` }} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* VALUE SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-36">
        <div className="border-b border-zinc-200 dark:border-zinc-900 pb-5 mb-12">
          <h2 className="text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            Core Structural Vectors
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Standard protocols driving conversion and operation scalability.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Conversion-Focused Architecture",
              desc: "We build layouts that prioritize cognitive user flow pathing over decorative bloat, steering incoming platform traffic to concrete action pipelines.",
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2" />
                </svg>
              )
            },
            {
              title: "Autonomous Integration Systems",
              desc: "Eliminate manual data overhead and synchronization vulnerabilities with custom background workers and direct serverless integration hooks.",
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              )
            },
            {
              title: "Strategic Velocity Execution",
              desc: "Align digital branding blueprints, application state structure, and conversion funnels into a cohesive operational growth engine.",
              icon: (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60 text-zinc-800 dark:text-zinc-200 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-zinc-950 dark:text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* PROCESS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-36">
        <div className="text-left md:text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Operational Blueprint Delivery
          </h2>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            A precise, logical orchestration sequence designed to prevent integration bottlenecks and drive product deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Deconstruct Operations & Targets",
              desc: "Deep systematic auditing of business goals to map core programmatic requirements and remove friction vectors early."
            },
            {
              step: "02",
              title: "Architect Systems & Flow",
              desc: "Wireframing custom backend paths and highly optimized layout models to maximize structural conversion points."
            },
            {
              step: "03",
              title: "Deploy, Optimize & Scale",
              desc: "Iterative codebase synthesis across your stack followed by immediate automated performance and monitoring tracking."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-6 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-zinc-400 dark:text-zinc-500 block mb-4">
                  STAGE // {item.step}
                </span>
                <h3 className="text-base font-semibold text-zinc-950 dark:text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
=======
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  Sparkles,
  BarChart3,
  Zap,
  Megaphone,
} from "lucide-react";

/**
 * TEAM PIKA GROWTH - HOME PAGE V2
 * --------------------------------
 * Focus:
 * - Conversion-first design
 * - SaaS + digital agency hybrid feel
 * - Scroll-based motion system
 */

const services = [
  {
    icon: Globe,
    title: "Website Solutions",
    desc: "High-performance business websites designed to convert visitors into customers.",
    link: "/services",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Solutions",
    desc: "Scalable online stores with smooth checkout and optimized product flow.",
    link: "/services",
  },
  {
    icon: Sparkles,
    title: "Branding",
    desc: "Modern brand identity systems that make your business stand out.",
    link: "/services",
  },
  {
    icon: BarChart3,
    title: "Growth & SEO",
    desc: "Search + local optimization to bring consistent organic leads.",
    link: "/services",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    desc: "WhatsApp, CRM, and workflow automation to save time and increase sales.",
    link: "/services",
  },
  {
    icon: Megaphone,
    title: "Marketing Systems",
    desc: "Lead generation funnels and campaign systems for scalable growth.",
    link: "/services",
  },
];

const industries = [
  "Restaurants",
  "Cafes",
  "Real Estate",
  "Clinics",
  "Gyms",
  "Startups",
  "Creators",
  "Coaches",
  "D2C Brands",
  "Retail Shops",
  "Agencies",
];

export default function Home() {
  return (
    <div className="w-full">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="hero-glow-purple top-[-120px] left-[-120px]" />
          <div className="hero-glow-cyan bottom-[-120px] right-[-120px]" />
        </div>

        <div className="container-custom relative z-10">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              <h1 className="display-lg mb-6">
                We Build Digital Systems That
                <span className="text-violet-500"> Grow Businesses</span>
              </h1>

              <p className="body-lg mb-8">
                TEAM PIKA GROWTH helps local businesses, startups, and brands
                build websites, automation systems, branding, and marketing
                engines that actually generate growth.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">

                <a
                  href="https://wa.me/919769710678"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Book Free Growth Consultation
                  <ArrowRight size={18} className="ml-2" />
                </a>

                <Link
                  to="/services"
                  className="btn-secondary"
                >
                  Explore Services
                </Link>

              </div>

              <p className="text-sm text-slate-500 mt-5">
                Free consultation via WhatsApp, Call, or Google Meet
              </p>

            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >

              <div className="glass-card p-8 float-soft">

                <h3 className="heading-md mb-6">
                  Your Growth Stack
                </h3>

                <div className="space-y-4">

                  {[
                    "Website",
                    "Branding",
                    "Automation",
                    "Marketing",
                    "SEO",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <span>{item}</span>
                      <ArrowRight size={16} />
                    </div>
                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="section">
        <div className="container-custom">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-xl mb-12"
          >
            What We Build
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:scale-[1.02] transition-all"
              >

                <service.icon className="text-violet-500 mb-4" />

                <h3 className="heading-md mb-2">
                  {service.title}
                </h3>

                <p className="body-md mb-4">
                  {service.desc}
                </p>

                <Link
                  to={service.link}
                  className="text-violet-500 flex items-center gap-1"
                >
                  Learn More <ArrowRight size={16} />
                </Link>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="section">
        <div className="container-custom">

          <h2 className="heading-xl mb-10">
            Industries We Work With
          </h2>

          <div className="flex flex-wrap gap-3">

            {industries.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
              >
                {item}
              </span>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="section">
        <div className="container-custom">

          <div className="glass-card p-10 text-center">

            <h2 className="heading-xl mb-4">
              Ready To Grow Your Business?
            </h2>

            <p className="body-lg mb-8">
              Book a free consultation and let’s build your digital growth system.
            </p>

            <a
              href="https://wa.me/919769710678"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Book Free Growth Consultation
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91
