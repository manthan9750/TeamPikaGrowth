import { useState } from "react";

/**
 * TEAM PIKA GROWTH - SERVICE CARD COMPONENT
 * ----------------------------------------
 * Purpose:
 * - display business services in structured format
 * - improve conversion clarity
 * - reusable across Services + Home pages
 * - SaaS-style hover interaction
 */

export default function ServiceCard({ title, description, icon, highlight }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative p-6 rounded-xl border transition-all duration-300
        cursor-pointer overflow-hidden

        dark:border-gray-800 border-gray-200

        ${hovered ? "shadow-lg scale-[1.02]" : "shadow-sm"}
        ${highlight ? "border-primary/40" : ""}
      `}
    >
      {/* BACKGROUND GLOW EFFECT */}
      <div
        className={`
          absolute inset-0 opacity-0 transition-all duration-300
          ${hovered ? "opacity-10 bg-primary" : ""}
        `}
      />

      {/* ICON */}
      <div className="text-2xl mb-3">
        {icon || "⚡"}
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>

      {/* CTA INDICATOR */}
      <div className="mt-4 text-xs text-primary opacity-80">
        Learn more →
      </div>
    </div>
  );
}
