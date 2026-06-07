import { motion } from "framer-motion";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  BarChart3,
  Zap,
  Layers,
} from "lucide-react";

/**
 * TEAM PIKA GROWTH - PROJECTS PAGE V2
 * ------------------------------------
 * Focus:
 * - Realistic demo projects
 * - System-based showcase (not fake case studies)
 * - Trust building through clarity
 */

const projects = [
  {
    icon: Globe,
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

        </div>
      </section>

    </div>
  );
}
