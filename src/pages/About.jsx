import { motion } from "framer-motion";
 HEAD
import team from "../data/team";

export default function About() {
  // SAFE GUARD (prevents white screen crash)
  const safeTeam = Array.isArray(team) ? team : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-left md:text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            About Team Pika Growth
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white"
          >
            We build digital transmission layers for industry leaders.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            A elite squad of frontend engineers, UI/UX designers, cloud architects, and automation strategists helping scale modern workflows.
          </motion.p>
        </div>

        {/* AGENCY VALUES SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 border-y border-zinc-200 dark:border-zinc-800/80 py-12"
        >
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500">01 / Execution</h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
              We favor production deployment speed backed by rigorous type safety and minimalist layout choices.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500">02 / AI Automation</h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
              Replacing legacy logic with optimized AI agents and real-time backend pipeline systems.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-zinc-400 dark:text-zinc-500">03 / Precision Design</h3>
            <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
              A commitment to sub-pixel accuracy, intentional interactions, and clear layout structures.
            </p>
          </div>
        </motion.div>

        {/* TEAM GRID */}
        <div>
          <div className="flex flex-col items-start justify-between border-b border-zinc-200 dark:border-zinc-900 pb-5 mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">Our Operators</h2>
            <p className="text-sm text-zinc-500 mt-1">Engineers and strategists currently building infrastructure.</p>
          </div>

          {safeTeam.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-900/50">
              Team manifest structure not found. Verify data target in <code className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-xs rounded">/data/team.js</code>
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {safeTeam.map((member, index) => (
                <motion.div
                  key={member.id || index}
                  variants={itemVariants}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  {/* IMAGE CONTEXT CONTAINER */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-100 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800/60">
                    {member?.image ? (
                      <img
                        src={member.image}
                        alt={member.name || "Team member"}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-[1px]"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-xs text-zinc-400 dark:text-zinc-600 gap-1">
                        <svg className="w-6 h-6 stroke-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>No asset path mapped</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-white tracking-tight">
                        {member?.name || "Unknown Operator"}
                      </h3>
                      {member?.role && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/50">
                          {member.role}
                        </span>
                      )}
                    </div>

                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed min-h-[3.75rem]">
                      {member?.bio || "No operational biography provided. Contributor to engineering pipeline architectures."}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-32 p-8 md:p-12 text-center bg-zinc-900 dark:bg-zinc-900/40 border border-zinc-800 rounded-2xl relative overflow-hidden"
        >
          {/* Subtle mesh/glow alternative built with clean tailwind grids */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(63,63,70,0.15),transparent)] pointer-events-none" />
          
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            Have a project requirement in mind?
          </h2>
          <p className="mt-3 text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
            Let's dissect your scaling blockers and deploy dynamic systems tailored exclusively to your business workflows.
          </p>

          <div className="mt-8 flex justify-center items-center gap-4 flex-col sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href="/booking"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium bg-white text-zinc-950 hover:bg-zinc-100 transition-colors shadow-sm text-center"
            >
              Book Free Consultation
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href="/services"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium bg-zinc-800 text-zinc-200 hover:bg-zinc-700 transition-colors border border-zinc-700/60 text-center flex items-center justify-center gap-1"
            >
              Explore Services <span>&rarr;</span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}

/**
 * TEAM PIKA GROWTH - ABOUT PAGE V2
 * --------------------------------
 * Focus:
 * - Trust building
 * - Equal team representation
 * - 9-member scalable grid
 * - SaaS-style clean layout
 */

const team = [
  {
    name: "Manthan Pilvilkar",
    role: "Team Lead & Product Architect",
    desc: "Leads overall product vision, architecture, and execution strategy.",
  },
  {
    name: "Member 2",
    role: "UI/UX Designer",
    desc: "Designs modern interfaces and user experience systems.",
  },
  {
    name: "Member 3",
    role: "Frontend Developer",
    desc: "Builds responsive and high-performance UI components.",
  },
  {
    name: "Member 4",
    role: "Backend Developer",
    desc: "Handles APIs, database, and system architecture.",
  },
  {
    name: "Member 5",
    role: "SEO Specialist",
    desc: "Optimizes websites for search engines and organic growth.",
  },
  {
    name: "Member 6",
    role: "Marketing Strategist",
    desc: "Plans growth campaigns and conversion strategies.",
  },
  {
    name: "Member 7",
    role: "Automation Engineer",
    desc: "Builds WhatsApp, CRM, and workflow automation systems.",
  },
  {
    name: "Member 8",
    role: "Brand Designer",
    desc: "Creates logos, brand identity, and visual systems.",
  },
  {
    name: "Member 9",
    role: "Business Analyst",
    desc: "Analyzes client requirements and business growth opportunities.",
  },
];

export default function About() {
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
            About TEAM PIKA GROWTH
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            animate={{ opacity: 1, y: 0 }}
            className="body-lg max-w-3xl mx-auto"
          >
            We are a digital execution team focused on building real systems
            for businesses — not just websites or designs.
          </motion.p>

        </div>
      </section>

      {/* =====================================================
          MISSION SECTION
      ===================================================== */}

      <section className="section pt-0">
        <div className="container-custom">

          <div className="glass-card p-10 text-center">

            <h2 className="heading-lg mb-4">
              Our Mission
            </h2>

            <p className="body-lg">
              To help local businesses, startups, and creators grow using
              practical digital systems like websites, automation, branding,
              and marketing — executed with precision.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          TEAM GRID
      ===================================================== */}

      <section className="section">
        <div className="container-custom">

          <h2 className="heading-xl mb-12 text-center">
            Our Team
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-6 text-center hover:scale-[1.02] transition-all"
              >

                {/* IMAGE PLACEHOLDER */}
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 mb-5 flex items-center justify-center text-white text-xl font-bold">
                  {member.name.split(" ")[0][0]}
                </div>

                <h3 className="heading-md mb-1">
                  {member.name}
                </h3>

                <p className="text-violet-400 mb-3">
                  {member.role}
                </p>

                <p className="text-sm text-slate-400">
                  {member.desc}
                </p>

              </motion.div>
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
              Want to Work With Us?
            </h2>

            <p className="body-lg mb-6">
              Let’s discuss your project and build your digital growth system.
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

        </div>
      </section>

    </div>
  );
}
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91
