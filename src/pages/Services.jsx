import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  ShoppingCart,
  Sparkles,
  BarChart3,
  Zap,
  Megaphone,
  ArrowRight,
} from "lucide-react";

/**
 * TEAM PIKA GROWTH - SERVICES PAGE V2
 * -----------------------------------
 * Purpose:
 * - Structured service system
 * - Conversion-oriented layout
 * - Clear business value explanation
 */

const services = [
  {
    icon: Globe,
    title: "Website Solutions",
    description:
      "High-performance business websites designed to convert visitors into paying customers. Optimized for speed, SEO, and mobile-first experience.",
    features: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "Custom UI/UX design",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Solutions",
    description:
      "Complete online store systems with product management, payment integration, and conversion optimization.",
    features: [
      "Shop setup",
      "Payment gateway",
      "Product catalog",
      "Order management",
    ],
  },
  {
    icon: Sparkles,
    title: "Branding",
    description:
      "Modern brand identity systems that help your business stand out and build trust instantly.",
    features: [
      "Logo design",
      "Brand identity",
      "Color systems",
      "Social branding kit",
    ],
  },
  {
    icon: BarChart3,
    title: "Growth & SEO",
    description:
      "Organic growth systems that help your business get discovered on Google and local search.",
    features: [
      "Local SEO",
      "Keyword optimization",
      "Google Business setup",
      "Content strategy",
    ],
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description:
      "Automate your business workflows using WhatsApp, CRM systems, and smart integrations.",
    features: [
      "WhatsApp automation",
      "CRM setup",
      "Lead tracking",
      "Workflow automation",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing Systems",
    description:
      "Performance-driven marketing funnels designed to generate consistent leads and sales.",
    features: [
      "Lead funnels",
      "Ad strategy",
      "Campaign setup",
      "Conversion optimization",
    ],
  },
];

export default function Services() {
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
            Our Digital Growth Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="body-lg max-w-3xl mx-auto"
          >
            We don’t just “build websites”. We design complete digital systems
            that help businesses attract, convert, and retain customers.
          </motion.p>

        </div>
      </section>

      {/* =====================================================
          SERVICES GRID
      ===================================================== */}

      <section className="section pt-0">
        <div className="container-custom">

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

                <p className="body-md mb-4 text-slate-300">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {service.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-slate-400"
                    >
                      • {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="text-violet-400 flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Get This Service
                  <ArrowRight size={16} />
                </Link>

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

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 text-center"
          >

            <h2 className="heading-xl mb-4">
              Not Sure What You Need?
            </h2>

            <p className="body-lg mb-6">
              Book a free consultation and we’ll suggest the right digital
              system for your business.
            </p>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Book Free Growth Consultation
            </a>

          </motion.div>

        </div>
      </section>

    </div>
  );
}
