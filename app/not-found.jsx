import { FileQuestion } from "lucide-react";
import CTAButton from "@/src/components/CTAButton";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 bg-bg-secondary border border-border rounded-2xl flex items-center justify-center mb-6 shadow-sm">
        <FileQuestion className="w-8 h-8 text-primary" />
      </div>
      
      <h1 className="text-h2 text-ink dark:text-white mb-4">
        Page Not Found
      </h1>
      
      <p className="text-content-secondary max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved. Let's get you back on track to growing your business.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <CTAButton href="/" type="primary">
          Return Home
        </CTAButton>
        <CTAButton href="/services" type="secondary">
          View Services
        </CTAButton>
        <CTAButton href="/contact" type="secondary">
          Contact Us
        </CTAButton>
      </div>
    </div>
  );
}