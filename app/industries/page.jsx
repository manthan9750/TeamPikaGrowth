import {
  Building2,
  Stethoscope,
  Utensils,
  GraduationCap,
  Dumbbell,
  Cpu,
  ShoppingBag,
  Briefcase,
  ArrowRight,
  Workflow,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import PageWrapper from "@/src/components/PageWrapper";
import ScrollReveal from "@/src/components/ScrollReveal";
import { globalCTAs } from "@/src/data/nav";
import Link from "next/link";

export const metadata = {
  title: "Industries We Serve | Team Pika Growth Digital Growth Agency",
  description: "Team Pika Growth helps healthcare, real estate, education, hospitality, fitness, e-commerce and professional service businesses grow their online presence.",
};

const industries = [
  {
    icon: Building2,
    title: "Real Estate Platforms",
    desc: "Automated lead capture systems and property listing platforms to connect local agents with qualified, high-intent buyers.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Networks",
    desc: "Secure patient booking systems and local search optimization to build trust, dominate local maps, and increase clinic visits.",
  },
  {
    icon: Utensils,
    title: "Hospitality & Cuisine",
    desc: "Direct booking and ordering systems engineered to help local restaurants and hotels bypass expensive third-party commission fees.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutes",
    desc: "Student acquisition campaigns and seamless digital learning platforms designed to scale enrollment for courses and academies.",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Club Groups",
    desc: "Membership subscription pipelines and targeted local advertising to keep your gym, studio, or club growing consistently.",
  },
  {
    icon: Cpu,
    title: "SaaS & Technical Startups",
    desc: "High-performance marketing websites and user acquisition funnels designed to rapidly scale active software subscriptions.",
  },
  {
    icon: ShoppingBag,
    title: "Digital E-commerce Brands",
    desc: "Optimized online stores and frictionless checkout flows built to reduce cart abandonment and maximize direct sales.",
  },
  {
    icon: Briefcase,
    title: "Professional Consultancies",
    desc: "Authority-building websites and automated lead qualification systems for legal, management, and financial consulting firms.",
  }
];

export default function Industries() {
  return (
    <PageWrapper>
      <div className="pb-24 bg-bg">
        
        {/* COMPOSITE CONTENT HEADER */}
        <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_0%,var(--color-primary-soft),transparent)] pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest bg-surface border border-border uppercase text-content-muted mx-auto shadow-sm">
              <Workflow className="w-3.5 h-3.5 text-primary" />
              Industry-Specific Growth Frameworks
            </div>

            <h1 className="text-h1 text-ink dark:text-white leading-[1.1]">
              Digital Growth Systems Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">Your Industry.</span>
            </h1>

            <p className="text-sm md:text-base text-content-secondary max-w-2xl mx-auto leading-relaxed pt-2">
              We don't believe in one-size-fits-all. We build custom websites, local SEO strategies, and automated lead generation funnels tailored to the exact mechanics of your specific market.
            </p>
          </div>
        </section>

        {/* ARCHITECTURE GRID */}
        <section className="max-w-7xl mx-auto px-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ScrollReveal key={item.title}>
                  <Link href={globalCTAs.primary.path} className="block h-full focus:outline-none group/link">
                    <div className="group bg-surface border border-border rounded-2xl p-6 flex flex-col h-full shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300">
                      
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-xl bg-bg-secondary border border-border flex items-center justify-center text-content group-hover:text-primary transition-colors">
                          <IconComponent className="w-5 h-5 stroke-[1.8]" />
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-border-strong group-hover:text-primary transition-colors" />
                      </div>

                      <h3 className="text-base font-bold text-ink dark:text-white tracking-tight mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-content-secondary leading-relaxed flex-grow">
                        {item.desc}
                      </p>
                      
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* CTA FRAMEWORK */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <ScrollReveal>
            <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
              <div className="max-w-2xl mx-auto relative z-10">
                <span className="text-xs font-bold tracking-widest uppercase text-content-muted block mb-3">
                  Cross-Vertical Experience
                </span>
                
                <h2 className="text-h3 text-ink dark:text-white leading-tight">
                  Don't see your exact industry listed?
                </h2>
                
                <p className="mt-4 text-sm text-content-secondary leading-relaxed">
                  We have engineered lead generation and workflow automation systems for dozens of specialized niches. Book a free consultation to see how we can scale your specific business operations.
                </p>

                <div className="mt-8 flex justify-center">
                  <Link 
                    href={globalCTAs.primary.path} 
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-bold shadow-md hover:bg-primary-hover transition-all active:scale-[0.98] group"
                  >
                    <Sparkles className="w-4 h-4" />
                    Book Strategy Call <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </PageWrapper>
  );
}