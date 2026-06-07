import { Link } from "react-router-dom";

/**
 * TEAM PIKA GROWTH - FOOTER SYSTEM
 * --------------------------------
 * Purpose:
 * - reinforce trust at end of page
 * - provide final conversion paths
 * - keep navigation accessible
 */

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-10">

      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">

        {/* BRAND BLOCK */}
        <div>
          <h2 className="text-lg font-bold text-primary">
            TEAM PIKA GROWTH
          </h2>

          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            A digital execution team helping local businesses build websites,
            systems, automation, and growth infrastructure — not just design.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* BUSINESS MODEL */}
        <div>
          <h3 className="font-semibold mb-3">What We Do</h3>

          <ul className="space-y-2 text-sm text-gray-500">
            <li>Business Websites</li>
            <li>Ecommerce Systems</li>
            <li>Automation Setup</li>
            <li>Branding & Identity</li>
          </ul>
        </div>

        {/* CONTACT CTA */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>

          <p className="text-sm text-gray-500">
            Fast response via WhatsApp for business inquiries.
          </p>

          <a
            href="https://wa.me/910000000000"
            target="_blank"
            className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Team Pika Growth. Built for business execution systems.
      </div>

    </footer>
  );
}
