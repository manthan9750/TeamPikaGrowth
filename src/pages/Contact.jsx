<<<<<<< HEAD
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
  const corporateChannels = [
    {
      title: "Procurement & RFP Submissions",
      description: "Submit comprehensive enterprise system requirements, scope of work document assets, or formal vendor evaluation requests.",
      actionText: "rfp@enterprise.com",
      href: "mailto:rfp@enterprise.com",
      badge: "Fast Track Validation"
    },
    {
      title: "Strategic Partnerships",
      description: "Connect with our corporate development team regarding joint venture engineering initiatives, platform integrations, or API ecosystem distribution.",
      actionText: "partners@enterprise.com",
      href: "mailto:partners@enterprise.com",
      badge: "Joint Ventures Only"
    },
    {
      title: "Engineering Channels & Security",
      description: "Inquire about architecture specifications, API system access, source documentation parameters, or submit cryptographic vulnerability disclosures.",
      actionText: "dev@enterprise.com",
      href: "mailto:dev@enterprise.com",
      badge: "PGP Key Verified"
    }
  ];

  const structuralHubs = [
    { city: "San Francisco", purpose: "Core Infrastructure & Engineering", coordinate: "HQ // 37.7749° N" },
    { city: "London", purpose: "European Operations & Client Relations", coordinate: "NODE // 51.5074° N" },
    { city: "Tokyo", purpose: "Asia-Pacific Regional Systems Scale", coordinate: "NODE // 35.6762° N" }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 pt-32 pb-24 transition-colors duration-300 selection:bg-zinc-900/10 dark:selection:bg-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PREMIUM VISUAL BACKDROP EFFECTS */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(24,24,27,0.03),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.015),transparent_50%)] pointer-events-none -z-10" />

        {/* HERO HEADER REGION */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 mb-6 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-white animate-pulse" />
            OPERATIONAL JUNCTION ROUTING
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.05]">
            Direct communication vectors. Built for absolute speed.
          </h1>
          
          <p className="mt-5 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            We eliminated standard web intake boxes entirely to optimize priority messaging. Route your organizational specifications directly to dedicated technical departments or claim an engineering session instantly.
          </p>
        </div>

        {/* PRIMARY CALL TO ACTION CARD (BOOKER HIGHLIGHT) */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 lg:p-12 mb-16 shadow-xs relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 group"
        >
          {/* Subtle design block layer */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(24,24,27,0.015),transparent_70%)] dark:bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.01),transparent_70%)] pointer-events-none" />
          
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] tracking-widest text-zinc-400 dark:text-zinc-500 font-bold uppercase block mb-2">
              Synchronous Strategy Architecture
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              Initialize System Diagnostics & Consultation Workspace
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Skip the long email exchange. Use our synchronized telemetry planner engine to instantly map your technical specs into a live calendar coordinate with a principal systems architect.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/booking"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs sm:text-sm font-bold shadow-xs hover:opacity-90 active:scale-[0.985] transition-all group-hover:px-7"
            >
              <span>Access Live Calendar Interface</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* TWO-COLUMN LOWER SPLIT: CORPORATE TIERS vs REGIONAL METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
          
          {/* LEFT CONTENT BLOCK: THE SECURE CHANNELS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="px-2">
              <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Direct Ingestion Vectors // Secure Communications
              </h3>
            </div>

            <div className="space-y-4">
              {corporateChannels.map((channel, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold text-zinc-950 dark:text-white tracking-tight block">
                        {channel.title}
                      </span>
                      <p className="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                        {channel.description}
                      </p>
                    </div>
                    <span className="shrink-0 font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-500">
                      {channel.badge}
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
                    <a
                      href={channel.href}
                      className="font-mono text-xs text-zinc-950 dark:text-white font-bold hover:underline underline-offset-4 flex items-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {channel.actionText}
                    </a>
                    
                    <span className="text-[11px] text-zinc-400 font-mono hidden sm:inline">
                      SECURE_TLS // INBOUND_ON
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT BLOCK: GLOBAL INFRASTRUCTURE NODES */}
          <div className="lg:col-span-5 space-y-6">
            <div className="px-2">
              <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Physical Network Topography
              </h3>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 space-y-5 shadow-2xs">
              {structuralHubs.map((hub, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col gap-1 pb-4 ${
                    idx !== structuralHubs.length - 1 ? "border-b border-zinc-100 dark:border-zinc-800/60" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-950 dark:text-white">
                      {hub.city}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider">
                      {hub.coordinate}
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    {hub.purpose}
                  </span>
                </div>
              ))}

              <div className="bg-zinc-50 dark:bg-zinc-950/80 rounded-xl p-4 border border-zinc-100 dark:border-zinc-900/60 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono leading-normal">
                  All systems operating at peak telemetry parameters. Direct incoming priority message pipelines are running with standard sub-24h structural verification.
                </p>
              </div>
            </div>

            {/* CORPORATE LEGAL BOTTOM LINKAGE ACCESS */}
            <div className="p-4 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-400 dark:text-zinc-500 leading-relaxed text-center lg:text-left">
              Looking for general technical parameters or standard asset specifications? Explore the custom service layout architectures over in our catalog view.
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
=======
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
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91
