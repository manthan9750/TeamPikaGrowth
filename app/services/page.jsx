import Link from "next/link";
import { Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";
import PageWrapper from "@/src/components/PageWrapper";
import ScrollReveal from "@/src/components/ScrollReveal";
import { servicePillars } from "@/src/data/services";
import { globalCTAs } from "@/src/data/nav";

export const metadata = {
  title: "Our Services | Web Development, SEO & AI Automation — Team Pika Growth",
  description: "End-to-end digital growth services for Indian businesses: high-converting website development, local SEO, targeted digital marketing, and AI workflow automation.",
};

export default function Services() {
  return (
    <PageWrapper>
      <div className="pb-24">
        
        {/* 1. COMPACT HERO SECTION */}
        <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_0%,var(--color-primary-soft),transparent)] pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest bg-surface border border-border uppercase text-content-muted mx-auto shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              End-To-End Business Solutions
            </div>
            
            <h1 className="text-h1 text-ink dark:text-white leading-[1.1]">
              Digital Infrastructure Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">Maximum ROI.</span>
            </h1>

            <p className="text-sm md:text-base text-content-secondary max-w-2xl mx-auto leading-relaxed pt-2">
              From high-converting websites to dominant local SEO and AI automation, we build the complete digital ecosystem your business needs to attract high-value clients and run on autopilot.
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
                      className="group bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/50 transition-all flex flex-col h-full relative overflow-hidden"
                    >
                      <h3 className="text-lg font-bold text-ink dark:text-white mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-content-secondary leading-relaxed mb-8 flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="pt-5 border-t border-border mt-auto">
                        <Link 
                          href={`${globalCTAs.primary.path}?interest=${encodeURIComponent(service.title)}`} 
                          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-bg-secondary border border-border text-ink dark:text-white text-xs font-bold hover:border-primary hover:text-primary transition-all active:scale-[0.98] group/btn"
                        >
                          Discuss This Solution <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Link>
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
            <div className="bg-ink dark:bg-white text-white dark:text-ink rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_100%,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(ellipse_600px_400px_at_50%_100%,rgba(0,0,0,0.05),transparent)] pointer-events-none" />
              
              <h2 className="text-h2 mb-4 relative z-10 tracking-tight">
                Unsure which service yields the highest ROI?
              </h2>
              
              <p className="text-sm sm:text-base text-zinc-300 dark:text-content-secondary max-w-lg mx-auto mb-10 relative z-10 leading-relaxed">
                Book a free strategy call. We'll analyze your current setup, find the leaks in your customer acquisition funnel, and give you a step-by-step digital roadmap tailored to your specific industry.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <Link 
                  href={globalCTAs.primary.path} 
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-bold shadow-md hover:bg-primary-hover transition-all active:scale-[0.98] group"
                >
                  <Sparkles className="w-4 h-4" />
                  Book Free Strategy Call
                </Link>
                <Link 
                  href={globalCTAs.secondary.path} 
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 dark:border-ink/20 dark:text-ink dark:hover:bg-ink/10 text-sm font-bold transition-all active:scale-[0.98]"
                >
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </PageWrapper>
  );
}