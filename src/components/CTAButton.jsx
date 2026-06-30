import React, { forwardRef } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const BASE_CLASSNAME = 
  "inline-flex items-center justify-center text-xs font-mono uppercase tracking-wider font-bold transition-all duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-md";

const VARIANT_MATRICES = {
  // Brand Blue Primary
  primary: 
    "bg-primary text-white hover:bg-primary-hover shadow-sm",
  // High-contrast dark surface
  ink: 
    "bg-ink text-white dark:bg-white dark:text-ink hover:opacity-90 shadow-sm",
  // Outline style
  secondary: 
    "border border-border-strong text-content hover:bg-bg-secondary bg-transparent",
  // Destructive actions
  danger:
    "bg-danger text-white hover:opacity-90 shadow-sm",
};

const SIZE_MATRICES = {
  sm: "h-9 px-4 py-2",
  md: "h-11 px-5 py-3",
  lg: "h-14 px-7 py-4 text-sm tracking-widest"
};

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

  const resolvedClassNames = [
    BASE_CLASSNAME,
    VARIANT_MATRICES[type] || VARIANT_MATRICES.primary,
    SIZE_MATRICES[size] || SIZE_MATRICES.md,
    className
  ].filter(Boolean).join(" ");

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

  // Next.js internal link (mapping legacy `to` prop to `href`)
  if (to && !disabled && !isLoading) {
    return (
      <Link
        href={to}
        ref={ref}
        className={resolvedClassNames}
        {...props}
      >
        {contentWrapper}
      </Link>
    );
  }

  // External link
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

  // Standard form button
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