import { team } from "../data/team";
import TeamCard from "../components/TeamCard";

/**
 * TEAM PIKA GROWTH - ABOUT PAGE
 * -----------------------------
 * Purpose:
 * - build trust with real team visibility
 * - explain execution mindset
 * - reinforce credibility for local businesses
 */

export default function About() {
  return (
    <div className="w-full">

      {/* ================= HERO TRUST SECTION ================= */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">

        <h1 className="text-3xl md:text-4xl font-bold">
          We Are Not an Agency.
          <span className="text-primary"> We Are an Execution Team.</span>
        </h1>

        <p className="mt-5 text-gray-500 dark:text-gray-400 leading-relaxed">
          Team Pika Growth is built to help businesses actually implement digital systems —
          websites, ecommerce, automation, branding, and growth infrastructure.
        </p>

        <p className="mt-4 text-sm text-gray-400">
          No fake promises. No inflated metrics. Just real execution.
        </p>

      </section>

      {/* ================= MISSION SECTION ================= */}
      <section className="max-w-4xl mx-auto px-4 py-10">

        <h2 className="text-xl font-semibold mb-3">
          Our Mission
        </h2>

        <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
          Most businesses struggle not because they lack ideas, but because they lack systems.
          We focus on building digital infrastructure that helps businesses generate leads,
          handle customers, and scale operations efficiently.
        </p>

      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">

        <h2 className="text-2xl font-semibold text-center mb-10">
          Meet the Team
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {team.map((member) => (
            <TeamCard
              key={member.id}
              name={member.name}
              role={member.role}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>

      </section>

      {/* ================= FINAL TRUST CTA ================= */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center border-t border-gray-200 dark:border-gray-800">

        <h2 className="text-2xl font-bold">
          Ready to Build Your Business System?
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Talk directly with our execution team on WhatsApp.
        </p>

        <a
          href="https://wa.me/910000000000"
          target="_blank"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium"
        >
          Start Conversation
        </a>

      </section>

    </div>
  );
}
