import { motion } from "framer-motion";

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
