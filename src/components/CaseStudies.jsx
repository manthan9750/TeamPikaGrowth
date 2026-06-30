import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CaseStudies() {
  const cases = [
    {
      title: "Real Estate Lead System",
      desc: "Built a conversion-focused website and funnel system, increasing lead quality by 3x for a local agency."
    },
    {
      title: "Local Business Growth",
      desc: "Helped a service-based business improve local search visibility and online booking rates by 2.4x."
    },
    {
      title: "Startup Branding & Web",
      desc: "Created a full brand identity and high-performance landing system for an early-stage tech startup."
    }
  ];

  return (
    <section className="py-24 px-6 bg-bg-secondary border-y border-border">
      <div className="max-w-7xl mx-auto">
        
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-h2 text-ink dark:text-white mb-2">
                Featured Case Studies
              </h2>
              <p className="text-content-secondary text-sm md:text-base">
                Real results and business outcomes from our digital growth systems.
              </p>
            </div>
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              View all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="p-6 md:p-8 rounded-2xl border border-border bg-surface shadow-sm hover:shadow-md hover:border-primary/50 transition-all h-full flex flex-col group">
                
                <div className="w-10 h-10 rounded-lg bg-bg-secondary border border-border flex items-center justify-center text-content-muted group-hover:text-primary transition-colors mb-6">
                  <BarChart3 className="w-5 h-5 stroke-[1.8]" />
                </div>

                <h3 className="text-lg font-bold text-ink dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-content-secondary leading-relaxed flex-grow">
                  {item.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-border">
                  <Link 
                    href="/projects" 
                    className="text-xs font-semibold text-content-muted group-hover:text-primary transition-colors inline-flex items-center"
                  >
                    Read case study <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
                
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}