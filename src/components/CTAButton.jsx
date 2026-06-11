import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

/**
 * ==========================================================================
 * DESIGN SYSTEM BUTTON CLASS UTILITY STRINGS
 * Core resets containing hardware-accelerated pointer engine definitions.
 * ==========================================================================
 */
const BASE_CLASSNAME = 
  "inline-flex items-center justify-center rounded-xl text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-400 cursor-pointer relative z-30 pointer-events-auto";

const VARIANT_MATRICES = {
  primary: 
    "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 shadow-md",
  secondary: 
    "border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 bg-transparent",
  danger:
    "bg-red-600 text-white hover:bg-red-700 shadow-sm focus-visible:ring-red-500",
  premium:
    "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg"
};

const SIZE_MATRICES = {
  sm: "h-9 px-4 py-2",
  md: "h-11 px-5 py-3",
  lg: "h-14 px-7 py-4 text-sm tracking-widest"
};

/**
 * ==========================================================================
 * HIGH-FIDELITY POLYMORPHIC CTA INTERACTIVE BUTTON APPARATUS
 * ==========================================================================
 */
const CTAButton = forwardRef(({
  type = "primary",
  size = "md",
  to,
  href,
  isLoading = false,
  className = "",
  disabled,
  children,
  ...props
}, ref) => {

  // Combines styles cleanly without breaking alignment layers
  const resolvedClassNames = [
    BASE_CLASSNAME,
    VARIANT_MATRICES[type] || VARIANT_MATRICES.primary,
    SIZE_MATRICES[size] || SIZE_MATRICES.md,
    className
  ].filter(Boolean).join(" ");

  // Internal visual element wrapper
  const contentWrapper = (
    <>
      {isLoading && (
        <Loader2 className="w-3.5 h-3.5 mr-2 animate-spin stroke-[2.5]" aria-hidden="true" />
      )}
      <span className={`inline-flex items-center ${isLoading ? "opacity-80" : ""}`}>
        {children}
      </span>
    </>
  );

  /**
   * POLYMORPHIC ROUTING IMPLEMENTATION
   * Automatically turns into a functional route link if the "to" parameter is present.
   */
  if (to && !disabled && !isLoading) {
    return (
      <Link
        to={to}
        ref={ref}
        className={resolvedClassNames}
        {...props}
      >
        {contentWrapper}
      </Link>
    );
  }

  if (href && !disabled && !isLoading) {
    return (
      <a
        href={href}
        ref={ref}
        className={resolvedClassNames}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {contentWrapper}
      </a>
    );
  }

  return (
    <button
      type={props.type === "submit" ? "submit" : "button"}
      ref={ref}
      className={resolvedClassNames}
      disabled={disabled || isLoading}
      {...props}
    >
      {contentWrapper}
    </button>
  );
});

CTAButton.displayName = "CTAButton";

export default CTAButton;