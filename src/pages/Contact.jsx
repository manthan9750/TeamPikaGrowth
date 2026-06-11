import { useState } from "react";

/**
 * TEAM PIKA GROWTH - CONTACT PAGE
 * --------------------------------
 * Purpose:
 * - final conversion point
 * - remove all friction
 * - push WhatsApp-first communication
 */

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "hello@teampikagrowth.com";
  const phone = "+91 910000000000";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">

        <h1 className="text-3xl md:text-4xl font-bold">
          Let’s Build Your Business System
        </h1>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Fastest response is always via WhatsApp. No forms. No delays.
        </p>

      </section>

      {/* ================= CONTACT OPTIONS ================= */}
      <section className="max-w-3xl mx-auto px-4 space-y-6">

        {/* WHATSAPP PRIMARY */}
        <div className="p-6 border rounded-xl border-gray-200 dark:border-gray-800 text-center">

          <h2 className="text-lg font-semibold mb-2">
            WhatsApp (Recommended)
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Talk directly with our execution team.
          </p>

          <a
            href="https://wa.me/919769710678"
            target="_blank"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            Open WhatsApp Chat
          </a>

        </div>

        {/* EMAIL */}
        <div className="p-6 border rounded-xl border-gray-200 dark:border-gray-800 text-center">

          <h2 className="text-lg font-semibold mb-2">
            Email Support
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            For detailed business proposals or documentation.
          </p>

          <button
            onClick={copyEmail}
            className="px-6 py-2 border rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {copied ? "Email Copied!" : email}
          </button>

        </div>

        {/* CALL */}
        <div className="p-6 border rounded-xl border-gray-200 dark:border-gray-800 text-center">

          <h2 className="text-lg font-semibold mb-2">
            Direct Call
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            For urgent business discussions.
          </p>

          <a
            href="tel:+919769710678"
            className="inline-block px-6 py-3 border rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Call Now
          </a>

        </div>

      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center border-t border-gray-200 dark:border-gray-800">

        <h2 className="text-2xl font-bold">
          Ready to Start?
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Most businesses respond within minutes on WhatsApp.
        </p>

        <a
          href="https://wa.me/919769710678"
          target="_blank"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium"
        >
          Start Conversation
        </a>

      </section>

    </div>
  );
}
