"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import CTAButton from "@/src/components/CTAButton";
import { siteConfig } from "@/src/data/siteConfig";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 bg-bg-secondary border border-border rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        <AlertTriangle className="w-8 h-8 text-danger" />
      </div>
      
      <h1 className="text-h2 text-ink dark:text-white mb-4">
        Something went wrong
      </h1>
      
      <p className="text-content-secondary max-w-md mb-8">
        We apologize for the inconvenience. An unexpected error has occurred on our end. 
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        <CTAButton onClick={() => reset()} type="primary">
          Reload Page
        </CTAButton>
        <CTAButton href={siteConfig.contact.whatsapp} type="secondary">
          WhatsApp Us
        </CTAButton>
      </div>

      {process.env.NODE_ENV !== "production" && (
        <div className="mt-8 p-4 bg-bg-secondary border border-border rounded-lg text-left max-w-2xl w-full overflow-auto shadow-inner">
          <p className="text-sm font-mono text-danger font-bold mb-2">Developer Details (Hidden in Production):</p>
          <pre className="text-xs font-mono text-content-muted whitespace-pre-wrap">
            {error.message || "Unknown error"}
            {"\n"}
            {error.stack}
          </pre>
        </div>
      )}
    </div>
  );
}