import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Stethoscope,
  Utensils,
  GraduationCap,
  Dumbbell,
  Cpu,
  ShoppingBag,
  MapPin,
  Briefcase,
  ArrowRight,
  Workflow,
  BarChart4
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Real Estate Platforms",
    desc: "Autonomous customer intake funnels, premium architectural showcase structures, and localized ad landing systems mapped to CRM platforms.",
    coreSystem: "Lead Capture & Allocation Matrix",
    metric: "+38% Qualified Agent Handshakes",
    tag: "High Intent"
  },
  {
    icon: Stethoscope,
    title: "Healthcare Networks",
    desc: "Appointment routing systems, patient compliance communication engines, and authoritative web hubs engineered to secure local community trust.",
    coreSystem: "Synchronous Scheduling Engine",
    metric: "-45% Operational Booking Overhead",
    tag: "Secure / HIPPA Compliant"
  },
  {
    icon: Utensils,
    title: "Hospitality & Cuisine",
    desc: "Direct digital checkout funnels, white-label ordering integrations, and high-density map visibility frameworks to bypass marketplace commission rates.",
    coreSystem: "White-Label Transaction Module",
    metric: "2.4x Local Discoverability Multiplier",
    tag: "Direct Revenue"
  },
  {
    icon: GraduationCap,
    title: "Educational Institutes",
    desc: "Student acquisition landing paths, systemic course structure layouts, and institutional digital presence overhauls for global programs.",
    coreSystem: "User Enrollment Pipelines",
    metric: "+60% Cohort Intake Maximization",
    tag: "Scale Modules"
  },
  {
    icon: Dumbbell,
    title: "Fitness & Club Groups",
    desc: "Predictive recurrent contract registration matrices, transformation proof structures, and direct localized advertising funnels.",
    coreSystem: "Membership Subscription Pipeline",
    metric: "24/7 Unattended Terminal Captures",
    tag: "Recurrent Flow"
  },
  {
    icon: Cpu,
    title: "SaaS & Technical Startups",
    desc: "Ultra-high performance interactive landing frameworks, structural product value layouts, and conversion tracking matrix deployments.",
    coreSystem: "Self-Serve Activation Node",
    metric: "99.9th Percentile Core Web Vitals",
    tag: "Hyper Scaling"
  },
  {
    icon: ShoppingBag,
    title: "Digital E-commerce Brands",
    desc: "Highly-optimized multi-page catalogs, single-token purchase flows, and lifecycle event tracing routines to maximize continuous customer value.",
    coreSystem: "Checkout Friction Reduction Architecture",
    metric: "+18% Immediate Average Order Spike",
    tag: "Transactional Core"
  },
  {
    icon: MapPin,
    title: "Localized Service Footprints",
    desc: "Hyper-targeted map placement optimization, direct client phone and messaging intake flows, and review loop automations.",
    coreSystem: "Geo-Targeted Velocity Framework",
    metric: "#1 Domain Positioning Across Target Regions",
    tag: "Market Control"
  },
  {
    icon: Briefcase,
    title: "Professional Consultancies",
    desc: "High-authority positioning portfolios, whitepaper delivery frameworks, and multi-lane discovery qualifiers for boutique legal or management firms.",
    coreSystem: "Authority Vector Matrix",
    metric: "+50% High-Value Retainer Interactions",
    tag: "Premium Positioning"
  }
];

export default function Industries() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-32 pb-24 transition-colors duration-300 selection:bg-zinc-900/10 dark:selection:bg-white/10 relative">
      
      {/* GLOW DECORATOR VECTOR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(24,24,27,0.03),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.015),transparent_50%)] pointer-events-none -z-10" />

      {/* COMPOSITE CONTENT HEADER */}
      <div className="max-w-4xl mx-auto text-left md:text-center px-4 sm:px-6 mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 mb-5 shadow-2xs md:mx-auto">
          <Workflow className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
          VERTICAL_INTEGRATION_MAP // INDUSTRY DEPLOYMENTS
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.08]"
        >
          Tailored structures. <br className="hidden md:block" />Identical core performance engineering.
        </motion.h1>

        <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl md:mx-auto leading-relaxed">
          While operational mechanics vary between commerce networks and medical ecosystems, the absolute laws of high-speed infrastructure, intuitive UX navigation, and secure data pipelines remain static.
        </p>
      </div>

      {/* ARCHITECTURE GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industries.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col justify-between shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-xs transition-all duration-300"
            >
              <div>
                {/* CARD MODULE HEADER LAYER */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/80 flex items-center justify-center text-zinc-800 dark:text-zinc-200 group-hover:scale-102 transition-transform">
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <span className="font-mono text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/40 dark:border-zinc-800 text-zinc-400">
                    {item.tag}
                  </span>
                </div>

                {/* CONTENT OBJECT BLOCK */}
                <h3 className="text-base font-bold text-zinc-950 dark:text-white tracking-tight">
                  {item.title}
                </h3>
                
                <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* LIVE TELEMETRY MATRIX BLOCK PREVIEW FOOTER */}
              <div className="mt-6 pt-5 border-t border-zinc-100 dark:border-zinc-800/60 space-y-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono text-zinc-400 uppercase tracking-wider">Engine Anchor:</span>
                  <span className="font-medium text-zinc-800 dark:text-zinc-200 tracking-tight">{item.coreSystem}</span>
                </div>
                
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1">
                    <BarChart4 className="w-3 h-3 text-emerald-500" /> Target Indicator:
                  </span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 px-1.5 py-0.5 rounded-md">
                    {item.metric}
                  </span>
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* INTEGRATED PERSISTENT ENGAGEMENT CALL-TO-ACTION FRAMEWORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden shadow-xs group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.01),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.008),transparent_60%)] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 block mb-3">
              CROSS-VERTICAL INTENT EXECUTION
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-none">
              Ready to construct your specialized interface node?
            </h2>
            
            <p className="mt-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We translate unique industry realities into highly automated, un-scrambled digital machines. Claim an alignment session directly on our live architecture calendar below.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs sm:text-sm font-bold shadow-xs hover:opacity-90 active:scale-[0.985] transition-all group-hover:px-7 cursor-pointer"
              >
                <span>Access System Reservation Calendar</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}