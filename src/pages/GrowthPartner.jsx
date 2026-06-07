import { Link } from "react-router-dom";

/**
 * TEAM PIKA GROWTH - GROWTH PARTNER PAGE
 * --------------------------------------
 * Purpose:
 * - enable offline referral growth
 * - incentivize word-of-mouth sharing
 * - convert clients into promoters
 */

export default function GrowthPartner() {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">

        <h1 className="text-3xl md:text-4xl font-bold">
          Grow With Us. Earn by Referring Businesses.
        </h1>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Our growth partner system helps clients and individuals refer businesses
          and earn rewards — fully managed via WhatsApp.
        </p>

      </section>

      {/* ================= EXPLANATION ================= */}
      <section className="max-w-4xl mx-auto px-4 py-10 space-y-6 text-gray-600 dark:text-gray-300">

        <div>
          <h2 className="font-semibold text-lg mb-2">
            How It Works
          </h2>

          <ul className="space-y-2 text-sm">
            <li>1. You refer a business via WhatsApp</li>
            <li>2. We contact and onboard the client</li>
            <li>3. Deal is successfully closed</li>
            <li>4. You receive your referral reward</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">
            Who Can Become a Partner?
          </h2>

          <ul className="space-y-2 text-sm">
            <li>• Existing clients</li>
            <li>• Business owners</li>
            <li>• Freelancers</li>
            <li>• Students & creators</li>
            <li>• Anyone with business connections</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">
            Reward System
          </h2>

          <p className="text-sm leading-relaxed">
            Referral rewards are based on project value and are shared after successful onboarding.
            Clients who refer others may also receive discounts on future services.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">
            Client Benefit
          </h2>

          <p className="text-sm leading-relaxed">
            Existing clients can get up to 30% discount when they successfully refer new businesses.
            This creates a win-win growth loop.
          </p>
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center border-t border-gray-200 dark:border-gray-800">

        <h2 className="text-2xl font-bold">
          Want to Become a Growth Partner?
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Start referring businesses directly via WhatsApp.
        </p>

        <a
          href="https://wa.me/910000000000"
          target="_blank"
          className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium"
        >
          Join on WhatsApp
        </a>

      </section>

    </div>
  );
}
