import ServiceCard from "../components/ServiceCard";

/**
 * TEAM PIKA GROWTH - SERVICES PAGE
 * --------------------------------
 * Purpose:
 * - clearly explain offerings
 * - reduce confusion for non-technical users
 * - drive WhatsApp conversion
 */

export default function Services() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">

        <h1 className="text-3xl md:text-4xl font-bold">
          Our Digital Execution Services
        </h1>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          We don’t sell services. We build systems that help businesses grow.
        </p>

      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid md:grid-cols-3 gap-6">

        <ServiceCard
          title="Business Websites"
          description="Fast, responsive, conversion-focused websites designed to generate leads and calls."
          icon="🌐"
        />

        <ServiceCard
          title="Ecommerce Systems"
          description="Online stores optimized for sales, payment flow, and customer experience."
          icon="🛒"
        />

        <ServiceCard
          title="Business Automation"
          description="Automate repetitive tasks, inquiries, and workflows to save time and scale faster."
          icon="⚙️"
        />

        <ServiceCard
          title="Branding & Identity"
          description="Create strong brand presence with logos, visuals, and digital identity systems."
          icon="🎯"
        />

        <ServiceCard
          title="SEO & Growth Systems"
          description="Improve search visibility and organic traffic with structured SEO systems."
          icon="📈"
        />

        <ServiceCard
          title="Marketing Setup"
          description="Set up digital marketing funnels that help attract and convert customers."
          icon="📣"
        />

      </section>

      {/* ================= PROCESS SECTION ================= */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">

        <h2 className="text-2xl font-semibold mb-6">
          How We Work
        </h2>

        <div className="space-y-3 text-gray-500 dark:text-gray-400 text-sm">

          <p>1. You contact us on WhatsApp</p>
          <p>2. We understand your business needs</p>
          <p>3. We design your system structure</p>
          <p>4. We build and deploy your solution</p>
          <p>5. You start getting leads and growth systems</p>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center border-t border-gray-200 dark:border-gray-800">

        <h2 className="text-2xl font-bold">
          Ready to Build Your System?
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Talk directly with our execution team on WhatsApp.
        </p>

        <a
          href="https://wa.me/910000000000"
          target="_blank"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium"
        >
          Start on WhatsApp
        </a>

      </section>

    </div>
  );
}
