import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Building2,
  HeartPulse,
  Dumbbell,
  ShoppingBag,
  Rocket,
  Camera,
  Briefcase,
  Store,
} from "lucide-react";

/**
 * TEAM PIKA GROWTH - INDUSTRIES PAGE V2
 * -------------------------------------
 * Focus:
 * - Problem-based positioning
 * - Trust for local businesses
 * - Clear relevance mapping
 */

const industries = [
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Cafes",
    desc: "Online ordering systems, menu websites, Google visibility, and WhatsApp ordering integration.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Property listing websites, lead capture systems, and automated inquiry handling.",
  },
  {
    icon: HeartPulse,
    title: "Clinics & Healthcare",
    desc: "Appointment booking systems, patient inquiry automation, and trust-building websites.",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness",
    desc: "Membership websites, trial booking funnels, and social media growth systems.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Shops",
    desc: "Digital storefronts, product catalogs, and local delivery integration.",
  },
  {
    icon: Rocket,
    title: "Startups",
    desc: "MVP websites, pitch landing pages, and scalable digital systems.",
  },
  {
    icon: Camera,
    title: "Creators",
    desc: "Personal brand websites, portfolio systems, and audience conversion funnels.",
  },
  {
    icon: Briefcase,
    title: "Coaches & Consultants",
    desc: "Lead generation funnels, booking systems, and authority-building platforms.",
  },
  {
    icon: Store,
    title: "Local Businesses",
    desc: "Complete digital transformation including website, SEO, and automation systems.",
  },
];

export default function Industries() {
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
            Industries We Help Grow
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            animate={{ opacity: 1, y: 0 }}
            className="body-lg max-w-3xl mx-auto"
          >
            We don’t just build websites — we build industry-specific growth
            systems designed for real-world business problems.
          </motion.p>

        </div>
      </section>

      {/* =====================================================
          INDUSTRY GRID
      ===================================================== */}

      <section className="section pt-0">
        <div className="container-custom">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {industries.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:scale-[1.02] transition-all"
              >

                <item.icon className="text-violet-500 mb-4" />

                <h3 className="heading-md mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {item.desc}
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
              Your Industry Not Listed?
            </h2>

            <p className="body-lg mb-6">
              We build custom systems for any business that wants to grow
              digitally.
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
