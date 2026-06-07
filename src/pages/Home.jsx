import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

/**
 * TEAM PIKA GROWTH - HOME PAGE
 * ----------------------------
 * Purpose:
 * - primary landing page
 * - WhatsApp lead conversion engine
 * - trust + services + CTA flow
 */

export default function Home() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          We Build Systems That Help Businesses
          <span className="text-primary"> Grow Faster</span>
        </h1>

        <p className="mt-5 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Websites, ecommerce, automation, branding and digital systems —
          designed for real business results, not just design showcase.
        </p>

        {/* PRIMARY CTA */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="https://wa.me/910000000000"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Start on WhatsApp
          </a>

          <Link
            to="/services"
            className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg"
          >
            Explore Services
          </Link>

        </div>

        <p className="text-xs text-gray-400 mt-4">
          Fast response via WhatsApp • No forms • Direct communication
        </p>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="max-w-6xl mx-auto px-4 py-10">

        <h2 className="text-2xl font-semibold mb-6 text-center">
          What We Build
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <ServiceCard
            title="Business Websites"
            description="Fast, modern and conversion-focused websites for local businesses."
            icon="🌐"
          />

          <ServiceCard
            title="Ecommerce Systems"
            description="Online stores designed to convert visitors into paying customers."
            icon="🛒"
          />

          <ServiceCard
            title="Automation & Systems"
            description="Business automation to reduce manual work and increase efficiency."
            icon="⚙️"
          />

        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">

        <h3 className="text-xl font-semibold">
          Built for Real Businesses, Not Just Websites
        </h3>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          We focus on execution systems that help you get more calls, more leads,
          and more customers — not just online presence.
        </p>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center border-t border-gray-200 dark:border-gray-800">

        <h2 className="text-2xl font-bold">
          Ready to Grow Your Business?
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Talk directly with our team on WhatsApp.
        </p>

        <a
          href="https://wa.me/910000000000"
          target="_blank"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium"
        >
          Contact on WhatsApp
        </a>

      </section>

    </div>
  );
}
