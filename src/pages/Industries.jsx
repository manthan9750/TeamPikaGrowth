import { Link } from "react-router-dom";

/**
 * TEAM PIKA GROWTH - INDUSTRIES PAGE
 * ----------------------------------
 * Purpose:
 * - help users self-identify relevance
 * - increase WhatsApp conversion
 * - segment trust by business type
 */

export default function Industries() {
  const industries = [
    {
      name: "Restaurants & Cafes",
      description:
        "Menu systems, booking flows, WhatsApp orders, and local discovery websites."
    },
    {
      name: "Real Estate",
      description:
        "Property listing systems, lead capture funnels, and inquiry management setups."
    },
    {
      name: "Clinics & Healthcare",
      description:
        "Appointment systems, patient inquiry flows, and digital presence optimization."
    },
    {
      name: "Gyms & Fitness Studios",
      description:
        "Membership inquiry systems, class booking flows, and lead generation websites."
    },
    {
      name: "Startups",
      description:
        "MVP websites, landing pages, and scalable digital infrastructure systems."
    },
    {
      name: "Creators & Coaches",
      description:
        "Personal brand websites, booking funnels, and audience conversion systems."
    },
    {
      name: "Local Shops",
      description:
        "Simple business websites to generate calls, inquiries, and local visibility."
    }
  ];

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">

        <h1 className="text-3xl md:text-4xl font-bold">
          Built for Real Businesses Across Industries
        </h1>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          If your business needs more leads, more calls, or better systems —
          we’ve built solutions for your category.
        </p>

      </section>

      {/* ================= INDUSTRY GRID ================= */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-3 gap-6">

        {industries.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition"
          >

            <h3 className="text-lg font-semibold">
              {item.name}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
              {item.description}
            </p>

          </div>
        ))}

      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center border-t border-gray-200 dark:border-gray-800">

        <h2 className="text-2xl font-bold">
          Not Sure If It Fits Your Business?
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Talk to us directly on WhatsApp — we’ll guide you.
        </p>

        <a
          href="https://wa.me/910000000000"
          target="_blank"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium"
        >
          Ask on WhatsApp
        </a>

      </section>

    </div>
  );
}
