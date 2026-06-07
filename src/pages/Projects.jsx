import { Link } from "react-router-dom";

/**
 * TEAM PIKA GROWTH - PROJECTS PAGE
 * --------------------------------
 * Purpose:
 * - show execution capability (not fake marketing claims)
 * - demonstrate system types built
 * - build trust through structured examples
 */

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Restaurant Business Website System",
      type: "Website + Booking Flow",
      description:
        "A structured website system designed for restaurant discovery, menu display, and enquiry flow via WhatsApp.",
      tech: ["React", "Tailwind", "WhatsApp Integration"]
    },
    {
      id: 2,
      title: "Local Service Booking System",
      type: "Lead + Appointment System",
      description:
        "A service-based booking flow optimized for mobile users with direct inquiry conversion system.",
      tech: ["React Router", "UI System", "Conversion Flow"]
    },
    {
      id: 3,
      title: "Small Business Digital Presence System",
      type: "Brand + Website Setup",
      description:
        "Structured digital identity system for small businesses to establish online presence and generate leads.",
      tech: ["Frontend System", "Brand UI", "Responsive Design"]
    }
  ];

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">

        <h1 className="text-3xl md:text-4xl font-bold">
          Execution Systems We've Designed
        </h1>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          These are system types and implementations we specialize in — not fake case studies or inflated metrics.
        </p>

      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-2 gap-6">

        {projects.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition"
          >

            <h3 className="text-lg font-semibold">
              {project.title}
            </h3>

            <p className="text-sm text-primary mt-1">
              {project.type}
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        ))}

      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center border-t border-gray-200 dark:border-gray-800">

        <h2 className="text-2xl font-bold">
          Want a Similar System for Your Business?
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Let’s build your business system via WhatsApp.
        </p>

        <a
          href="https://wa.me/910000000000"
          target="_blank"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium"
        >
          Contact Now
        </a>

      </section>

    </div>
  );
}
