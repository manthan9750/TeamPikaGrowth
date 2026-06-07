import { motion } from "framer-motion";
import {
  Users,
  Share2,
  HandCoins,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

/**
 * TEAM PIKA GROWTH - REFERRAL / GROWTH PARTNER PAGE V2
 * -----------------------------------------------------
 * Focus:
 * - WhatsApp-first referral system
 * - Simple 3-step flow
 * - Trust + clarity
 * - Conversion optimization
 */

const steps = [
  {
    icon: Share2,
    title: "Refer a Business",
    desc: "Share our service with any business owner who needs a website, branding, or digital growth.",
  },
  {
    icon: MessageCircle,
    title: "We Contact Them",
    desc: "Our team directly reaches out and explains the solution in detail.",
  },
  {
    icon: HandCoins,
    title: "You Earn Reward",
    desc: "Once the deal is completed, you receive your referral reward instantly.",
  },
];

const benefits = [
  "No investment required",
  "Works via WhatsApp only",
  "No technical skills needed",
  "Unlimited referrals allowed",
  "Reward per successful client",
  "Existing clients get 30% discount on referrals",
];

export default function GrowthPartner() {
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
            Referral Rewards Program
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            animate={{ opacity: 1, y: 0 }}
            className="body-lg max-w-3xl mx-auto"
          >
            Help businesses grow and earn rewards for every successful client
            you refer to TEAM PIKA GROWTH.
          </motion.p>

        </div>
      </section>

      {/* =====================================================
          STEPS
      ===================================================== */}

      <section className="section pt-0">
        <div className="container-custom">

          <div className="grid md:grid-cols-3 gap-8">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center"
              >

                <step.icon className="text-violet-500 mx-auto mb-4" />

                <h3 className="heading-md mb-2">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {step.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="section">
        <div className="container-custom">

          <div className="glass-card p-10">

            <h2 className="heading-xl mb-8 text-center">
              Why Join The Program?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">

              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                >

                  <CheckCircle className="text-green-500" />

                  <span className="text-slate-300">
                    {item}
                  </span>

                </div>
              ))}

            </div>

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
              Start Referring Today
            </h2>

            <p className="body-lg mb-6">
              Talk directly with our team and start earning from your network.
            </p>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Join via WhatsApp
              <ArrowRight size={18} className="ml-2" />
            </a>

          </motion.div>

        </div>
      </section>

    </div>
  );
}
