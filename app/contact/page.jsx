import Link from "next/link";
import { MapPin, ArrowRight, Clock, MessageCircle, Phone, Mail } from "lucide-react";
import PageWrapper from "@/src/components/PageWrapper";
import ScrollReveal from "@/src/components/ScrollReveal";
import { siteConfig } from "@/src/data/siteConfig";
import { globalCTAs } from "@/src/data/nav";

export const metadata = {
  title: "Contact Team Pika Growth | Panvel, Navi Mumbai",
  description: "Contact Team Pika Growth by phone, WhatsApp or email. Visit us at Shop No 4, Shaneshwar Apartment, Tapal Naka, Panvel, or book a free strategy call online.",
};

const contactChannels = [
  {
    title: "WhatsApp Chat",
    description: "Ideal for quick questions, discussing your project, or getting an immediate response from our team.",
    actionText: "Chat on WhatsApp",
    href: siteConfig.contact.whatsapp,
    badge: "Fastest Response",
    icon: <MessageCircle className="w-5 h-5 text-primary" />
  },
  {
    title: "Direct Phone Line",
    description: "Skip the text. Call us directly to discuss your business goals and how we can help you grow.",
    actionText: `Call ${siteConfig.contact.phoneDisplay}`,
    href: `tel:${siteConfig.contact.phone}`,
    badge: "Available Now",
    icon: <Phone className="w-5 h-5 text-primary" />
  },
  {
    title: "Email Us",
    description: "For formal proposals, document sharing, or comprehensive project inquiries.",
    actionText: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    badge: "Under 24h Reply",
    icon: <Mail className="w-5 h-5 text-primary" />
  }
];

const responseMetrics = [
  { label: "Average Response Rate", value: "98.4%", detail: "We're active across all these channels" },
  { label: "WhatsApp Response", value: "< 15 Mins", detail: "Direct connection to our team" },
  { label: "Email Turnaround", value: "< 24 Hours", detail: "Detailed project assessments" }
];

export default function Contact() {
  return (
    <PageWrapper>
      <div className="pb-24 bg-bg overflow-hidden">
        
        {/* PREMIUM VISUAL BACKDROP EFFECTS */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,var(--color-primary-soft),transparent_50%)] pointer-events-none -z-10" />

        {/* HERO HEADER REGION */}
        <section className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center md:text-left relative z-10">
          {/* Removed font-mono, upgraded to text-xs font-bold agency style */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide bg-surface border border-border uppercase text-content-muted mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            We're active across all these channels
          </div>
          
          <h1 className="text-h1 text-ink dark:text-white leading-[1.05]">
            Contact Team Pika Growth
          </h1>
          
          <p className="mt-5 text-sm md:text-base text-content-secondary max-w-2xl leading-relaxed">
            We don't hide behind complex support tickets. Connect directly with our team in Panvel to start building your digital growth system today.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* PRIMARY CALL TO ACTION CARD (BOOKER HIGHLIGHT) */}
          <ScrollReveal>
            <div className="bg-surface border border-border rounded-2xl p-6 sm:p-8 lg:p-12 mb-16 shadow-sm relative overflow-hidden flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 group">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle_at_right,var(--color-primary-soft),transparent_70%)] pointer-events-none" />
              
              <div className="max-w-2xl relative z-10">
                {/* Removed font-mono, agency standardized subheading */}
                <span className="text-xs tracking-widest text-content-muted font-bold uppercase block mb-2">
                  Book a Free Strategy Call
                </span>
                <h2 className="text-h3 text-ink dark:text-white tracking-tight">
                  Schedule Your Free Strategy Call
                </h2>
                <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                  Prefer a structured walkthrough? Map your core timelines, business goals, and project details directly on our active calendar.
                </p>
              </div>

              <div className="shrink-0 relative z-10">
                {/* Refactored to native Link matching the Home page CTA */}
                <Link 
                  href={globalCTAs.primary.path} 
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-bold shadow-md hover:bg-primary-hover transition-all active:scale-[0.98] group/btn"
                >
                  Reserve a Time Slot <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* TWO-COLUMN SPLIT: ACTIONABLE CHANNELS vs AGENCY COMMITMENTS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT: DIRECT ACTIONABLE CONNECTORS */}
            <div className="lg:col-span-7 space-y-4">
              <ScrollReveal>
                <div className="px-2 mb-2">
                  {/* Standardized Column Header */}
                  <h3 className="text-xs font-bold uppercase tracking-widest text-content-muted">
                    Direct Contact Channels
                  </h3>
                </div>
              </ScrollReveal>

              {contactChannels.map((channel, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="bg-surface border border-border rounded-xl p-6 transition-all hover:border-primary/50 shadow-sm relative overflow-hidden">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <div className="mt-0.5 p-2 rounded-lg bg-bg-secondary border border-border">
                          {channel.icon}
                        </div>
                        <div>
                          <span className="text-sm font-bold text-ink dark:text-white tracking-tight block">
                            {channel.title}
                          </span>
                          <p className="mt-1 text-xs text-content-secondary leading-relaxed max-w-xl">
                            {channel.description}
                          </p>
                        </div>
                      </div>
                      {/* Standardized Badge */}
                      <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-border bg-bg-secondary text-content-muted">
                        {channel.badge}
                      </span>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <a
                        href={channel.href}
                        target={channel.title.includes("WhatsApp") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        // Removed font-mono, increased to text-sm font-bold
                        className="text-sm text-ink dark:text-white font-bold hover:text-primary transition-colors flex items-center gap-1.5 group/link"
                      >
                        <span>{channel.actionText}</span>
                        <ArrowRight className="w-4 h-4 text-content-muted transition-transform group-hover/link:translate-x-0.5 group-hover/link:text-primary" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* PHYSICAL ADDRESS BLOCK */}
              <ScrollReveal delay={0.3}>
                <div className="bg-surface border border-border rounded-xl p-6 transition-all hover:border-primary/50 shadow-sm relative overflow-hidden">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="mt-0.5 p-2 rounded-lg bg-bg-secondary border border-border">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-ink dark:text-white tracking-tight block">
                          Visit Our Office
                        </span>
                        <address className="mt-1 text-xs text-content-secondary leading-relaxed not-italic">
                          {siteConfig.address.display}
                        </address>
                      </div>
                    </div>
                    {/* Standardized Badge */}
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-border bg-bg-secondary text-content-muted">
                      Local Business
                    </span>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            {/* RIGHT: OPERATIONAL TRUST PARAMETERS */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal delay={0.2}>
                <div className="px-2">
                  {/* Standardized Column Header */}
                  <h3 className="text-xs font-bold uppercase tracking-widest text-content-muted">
                    Our Response Times
                  </h3>
                </div>

                <div className="bg-surface border border-border rounded-xl p-6 space-y-6 shadow-sm mt-4">
                  {responseMetrics.map((metric, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-center justify-between pb-4 ${
                        idx !== responseMetrics.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <div>
                        <h4 className="text-xs font-bold text-ink dark:text-white">
                          {metric.label}
                        </h4>
                        <span className="text-[11px] text-content-muted block mt-0.5">
                          {metric.detail}
                        </span>
                      </div>
                      {/* Removed font-mono, upgraded metric to bold agency style */}
                      <span className="text-sm font-extrabold text-ink dark:text-white bg-bg-secondary px-3 py-1 rounded-md border border-border">
                        {metric.value}
                      </span>
                    </div>
                  ))}

                  <div className="bg-bg-secondary rounded-xl p-4 border border-border flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-success animate-ping shrink-0" />
                    {/* Removed font-mono */}
                    <p className="text-xs text-content-secondary font-medium leading-normal">
                      We actively monitor all channels during business hours to ensure fast, reliable support for our clients.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl border border-dashed border-border text-[11px] font-medium text-content-muted leading-relaxed text-center lg:text-left">
                  Already a client? Please use your dedicated WhatsApp group or Slack channel for immediate project support.
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

      </div>
    </PageWrapper>
  );
}