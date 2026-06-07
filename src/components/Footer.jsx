import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Industries",
    path: "/industries",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "About",
    path: "/about",
  },
];

const services = [
  "Website Solutions",
  "Ecommerce Solutions",
  "Business Systems",
  "Branding",
  "Growth & SEO",
  "Automation",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background Effects */}

      <div
        className="
        absolute
        top-0
        left-0
        w-full
        h-full
        pointer-events-none
      "
      >
        <div
          className="
          absolute
          -top-24
          left-1/4
          w-72
          h-72
          bg-violet-600/20
          blur-[120px]
          rounded-full
        "
        />

        <div
          className="
          absolute
          bottom-0
          right-1/4
          w-72
          h-72
          bg-cyan-500/10
          blur-[120px]
          rounded-full
        "
        />
      </div>

      <div className="container-custom relative z-10">
        {/* TOP CTA SECTION */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="
          py-20
          border-b
          border-white/10
        "
        >
          <div
            className="
            glass-card
            p-8
            lg:p-14
          "
          >
            <div
              className="
              grid
              lg:grid-cols-2
              gap-10
              items-center
            "
            >
              <div>
                <span
                  className="
                  inline-flex
                  rounded-full
                  px-4
                  py-2
                  text-sm
                  font-medium
                  bg-violet-500/10
                  text-violet-400
                  mb-4
                "
                >
                  Let's Build Something Meaningful
                </span>

                <h2
                  className="
                  heading-xl
                  mb-5
                "
                >
                  Ready To Grow Your
                  Business With The
                  Right Digital Systems?
                </h2>

                <p className="body-lg max-w-2xl">
                  Whether you need a website,
                  ecommerce store, branding,
                  automation, or growth systems,
                  TEAM PIKA GROWTH helps turn
                  ideas into execution.
                </p>
              </div>

              <div
                className="
                flex
                flex-col
                sm:flex-row
                lg:flex-col
                gap-4
                justify-start
                lg:justify-center
              "
              >
                <a
                  href="https://wa.me/9769710678"
                  target="_blank"
                  rel="noreferrer"
                  className="
                  btn-primary
                  gap-2
                "
                >
                  Book Free Growth Consultation

                  <ArrowUpRight size={18} />
                </a>

                <Link
                  to="/services"
                  className="
                  btn-secondary
                "
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MAIN FOOTER */}

        <div
          className="
          py-20
          grid
          lg:grid-cols-4
          gap-12
        "
        >
          {/* BRAND COLUMN */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <div
              className="
              flex
              items-center
              gap-3
              mb-6
            "
            >
              <div
                className="
                w-12
                h-12
                rounded-2xl
                bg-gradient-to-br
                from-violet-600
                to-cyan-500
                flex
                items-center
                justify-center
                text-white
                font-bold
              "
              >
                PG
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  TEAM PIKA GROWTH
                </h3>

                <p className="text-sm opacity-70">
                  Digital Growth Team
                </p>
              </div>
            </div>

            <p className="body-md">
              Helping businesses build
              stronger digital foundations
              through websites, branding,
              automation, ecommerce, and
              growth systems.
            </p>
          </motion.div>

          {/* QUICK LINKS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <h4
              className="
              font-semibold
              text-lg
              mb-5
            "
            >
              Quick Links
            </h4>

            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="
                  block
                  hover:text-violet-400
                  transition-colors
                "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* SERVICES */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <h4
              className="
              font-semibold
              text-lg
              mb-5
            "
            >
              Services
            </h4>

            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service}
                  className="
                  text-slate-400
                "
                >
                  {service}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CONTACT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <h4
              className="
              font-semibold
              text-lg
              mb-5
            "
            >
              Contact
            </h4>

            <div className="space-y-4">
              <a
                href="https://wa.me/9769710678"
                target="_blank"
                rel="noreferrer"
                className="
                flex
                items-center
                gap-3
                hover:text-violet-400
                transition-colors
              "
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>

              <a
                href="mailto:manthanpilvilkar@gmail.com"
                className="
                flex
                items-center
                gap-3
                hover:text-violet-400
                transition-colors
              "
              >
                <Mail size={18} />
                Email
              </a>

              <a
                href="tel:+919769710678"
                className="
                flex
                items-center
                gap-3
                hover:text-violet-400
                transition-colors
              "
              >
                <Phone size={18} />
                Call
              </a>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}

        <div
          className="
          py-8
          border-t
          border-white/10
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
        "
        >
          <p className="text-sm text-slate-500">
            © {currentYear} TEAM PIKA GROWTH.
            All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Building Digital Systems For
            Growing Businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
