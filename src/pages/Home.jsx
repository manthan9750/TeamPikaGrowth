import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
