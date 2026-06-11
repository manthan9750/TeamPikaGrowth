<<<<<<< HEAD
import { motion } from "framer-motion";
import { hoverLift } from "../lib/hover"; // Using your optimized hover library

export default function TeamCard({ name, role, description, image }) {
  return (
    <motion.div
      variants={hoverLift}
      whileHover="whileHover"
      whileTap="whileTap"
      className="group relative flex flex-col items-center p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 to-transparent dark:from-zinc-800/20 dark:to-transparent opacity-50" />

      {/* IMAGE SECTION - With subtle glow border */}
      <div className="relative mb-6">
        <div className="w-24 h-84 rounded-full overflow-hidden border-4 border-zinc-50 dark:border-zinc-950 shadow-inner bg-zinc-200 dark:bg-zinc-800">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xl font-bold text-zinc-500">
              {name?.charAt(0)}
            </div>
          )}
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="text-center relative z-10">
        <h3 className="text-lg font-semibold text-zinc-950 dark:text-white tracking-tight">
          {name}
        </h3>
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1 mb-4">
          {role}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-[220px]">
          {description}
        </p>
      </div>

      {/* SUBTLE INTERACTIVE INDICATOR */}
      <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] uppercase tracking-widest text-zinc-400">
        View Profile
      </div>
    </motion.div>
  );
}
=======

/**
 * TEAM PIKA GROWTH - TEAM CARD COMPONENT
 * --------------------------------------
 * Purpose:
 * - show real human trust layer
 * - support About page credibility
 * - consistent SaaS-style profile cards
 */

export default function TeamCard({ name, role, description, image }) {
  return (
    <div className="group relative rounded-xl border border-gray-200 dark:border-gray-800 p-5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">

      {/* IMAGE SECTION */}
      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mb-4 mx-auto">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm text-gray-500">
            {name?.charAt(0)}
          </div>
        )}
      </div>

      {/* NAME */}
      <h3 className="text-center font-semibold text-base">
        {name}
      </h3>

      {/* ROLE */}
      <p className="text-center text-sm text-primary mt-1">
        {role}
      </p>

      {/* DESCRIPTION */}
      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
        {description}
      </p>

      {/* SUBTLE HOVER ACCENT */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 bg-primary transition-all duration-300"></div>

    </div>
  );
}
>>>>>>> 70001eb5e1d931bdd5b25aa6f666f944b1a1ec91
