import { Sparkles, ArrowRight } from "lucide-react";
import PageWrapper from "@/src/components/PageWrapper";
import ScrollReveal from "@/src/components/ScrollReveal";
import CTAButton from "@/src/components/CTAButton";
import { servicePillars } from "@/src/data/services";
import { globalCTAs } from "@/src/data/nav";

export const metadata = {
  title: "Our Services | Web Development, SEO & Digital Marketing — Team Pika Growth",
  description: "Explore Team Pika Growth's digital growth services: website development, SEO, social media marketing, branding, AI automation and CRM setup for Indian businesses.",
};

export default function Services() {
  return (
    <PageWrapper>
      <div className="pb-24">
        
        {/* 1. COMPACT HERO SECTION */}
        <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_0%,var(--color-primary-soft),transparent)] pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-surface border border-border uppercase text-content-muted mx-auto shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Core Solutions
            </div>
            
            <h1 className="text-h1 text-ink dark:text-white leading-[1.1]">
              Our Services — Complete Digital Growth Solutions
            </h1>

            <p className="text-sm md:text-base text-content-secondary max-w-2xl mx-auto leading-relaxed pt-2">
              We provide everything a modern business needs to build a professional online presence, attract local customers, and automate daily operations.
            </p>
          </div>
        </section>

        {/* 2. SERVICES BY PILLAR */}
        <section className="max-w-7xl mx-auto px-6 space-y-24">
          {servicePillars.map((pillar, pillarIdx) => (
            <ScrollReveal key={pillar.id}>
              <div id={pillar.id} className="scroll-mt-32">
                <div className="mb-10 text-center md:text-left border-b border-border pb-6">
                  <h2 className="text-h2 text-ink dark:text-white mb-2">{pillar.title}</h2>
                  <p className="text-content-secondary max-w-3xl">{pillar.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {pillar.services.map((service, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-surface border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/50 transition-all flex flex-col h-full"
                    >
                      <h3 className="text-lg font-bold text-ink dark:text-white mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-content-secondary leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>
                      <div className="pt-4 border-t border-border mt-auto">
                        <CTAButton 
                          href={`${globalCTAs.primary.path}?interest=${encodeURIComponent(service.title)}`} 
                          type="secondary" 
                          size="sm"
                          className="w-full sm:w-auto text-[10px] group-hover:bg-bg-secondary"
                        >
                          Inquire about this
                        </CTAButton>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </section>

        {/* 3. FINAL CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-32">
          <ScrollReveal>
            <div className="bg-ink dark:bg-white text-white dark:text-ink rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_100%,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(ellipse_600px_400px_at_50%_100%,rgba(0,0,0,0.05),transparent)] pointer-events-none" />
              <h2 className="text-h2 mb-3 relative z-10">
                Not sure where to start?
              </h2>
              <p className="text-sm text-zinc-300 dark:text-content-secondary max-w-lg mx-auto mb-8 relative z-10">
                Book a strategy call and we'll analyze your current business to recommend the exact digital tools you need to grow faster.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <CTAButton href={globalCTAs.primary.path} type="primary" className="w-full sm:w-auto">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Book Strategy Call
                </CTAButton>
                <CTAButton href={globalCTAs.secondary.path} type="secondary" className="w-full sm:w-auto border-white text-white hover:bg-white/10 dark:border-ink dark:text-ink dark:hover:bg-ink/10">
                  Chat on WhatsApp
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </PageWrapper>
  );
}