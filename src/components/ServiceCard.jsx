import { ArrowRight, Zap } from "lucide-react";

export default function ServiceCard({ title, description, icon: Icon, highlight }) {
  return (
    <div
      className={`
        group relative p-6 rounded-xl border bg-surface flex flex-col h-full
        transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1
        ${highlight ? "border-primary/50 ring-1 ring-primary/20" : "border-border hover:border-primary/30"}
      `}
    >
      {/* BACKGROUND GLOW EFFECT */}
      <div
        className="absolute inset-0 bg-primary-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />

      {/* ICON */}
      <div className="w-10 h-10 rounded-lg bg-bg-secondary border border-border flex items-center justify-center text-content-muted group-hover:text-primary transition-colors mb-4 relative z-10 shrink-0">
        {Icon ? <Icon className="w-5 h-5 stroke-[1.8]" /> : <Zap className="w-5 h-5 stroke-[1.8]" />}
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-bold text-ink dark:text-white mb-2 group-hover:text-primary transition-colors relative z-10">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-content-secondary leading-relaxed flex-grow relative z-10">
        {description}
      </p>

      {/* CTA INDICATOR */}
      <div className="mt-6 pt-4 border-t border-border flex items-center text-xs font-semibold text-content-muted group-hover:text-primary transition-colors relative z-10">
        Inquire about this <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
      </div>
    </div>
  );
}