import Link from "next/link";
import { 
  ArrowRight, Sparkles, CheckCircle2, 
  ShieldCheck, Globe, Building2, Headset, 
  TrendingUp, Plus, Minus, ArrowUpRight 
} from "lucide-react";
import PageWrapper from "@/src/components/PageWrapper";
import ScrollReveal from "@/src/components/ScrollReveal";
import CTAButton from "@/src/components/CTAButton";
import { servicePillars } from "@/src/data/services";
import { globalCTAs } from "@/src/data/nav";
import { siteConfig } from "@/src/data/siteConfig";

export const metadata = {
  title: "Team Pika Growth | One Stop Digital Growth Solutions in Panvel",
  description: "Team Pika Growth helps businesses in Panvel, Navi Mumbai and across India grow online with websites, SEO, digital marketing, branding and AI automation. Book a free strategy call.",
};

// --- DATA STRUCTURES ---
const FAQS = [
  {
    q: "Do you work with startups or established businesses?",
    a: "We partner with businesses at all stages. For startups, we build scalable foundations and MVPs to get to market fast. For established local businesses, we modernize systems, automate heavy workflows, and scale acquisition channels."
  },
  {
    q: "Can we hire you for just one service, like SEO or a website?",
    a: "Absolutely. While our greatest impact comes from managing your entire digital ecosystem, you can partner with us for specific solutions like a new website, local SEO, or automating your customer bookings."
  },
  {
    q: "How does your pricing work?",
    a: "We avoid unpredictable hourly billing. After a strategic discovery call, we provide clear, milestone-based pricing for build phases, and transparent, flat-rate options for ongoing maintenance and growth marketing."
  },
  {
    q: "What happens after our project launches?",
    a: "We don't build and disappear. Our goal is to become your long-term digital growth partner—providing continuous hosting, security updates, optimization, and proactive scaling support."
  }
];

const INDUSTRIES = [
  { name: "Healthcare & Clinics", desc: "Secure portals and local patient generation." },
  { name: "Real Estate & Property", desc: "Property listings and automated lead routing." },
  { name: "Educational Institutes", desc: "Student acquisition and learning platforms." },
  { name: "Hospitality & Cuisine", desc: "Booking systems and brand visibility." },
  { name: "Fitness & Club Groups", desc: "Membership pipelines and retention." },
  { name: "Professional Consultancies", desc: "Authority branding and inbound leads." },
  { name: "Digital E-commerce Brands", desc: "High-converting online stores." },
  { name: "SaaS & Technical Startups", desc: "Scalable platforms and user acquisition." }
];

const PROCESS = [
  { step: "01", title: "Discover", desc: "We analyze your business, identify bottlenecks, and map out growth opportunities." },
  { step: "02", title: "Plan", desc: "We design a comprehensive strategy and blueprint tailored to your specific goals." },
  { step: "03", title: "Build", desc: "Our team executes the strategy, developing websites, campaigns, and systems." },
  { step: "04", title: "Launch", desc: "We deploy the solutions with rigorous testing to ensure zero disruption." },
  { step: "05", title: "Optimize", desc: "We continuously monitor data, refine campaigns, and scale what works best." }
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <PageWrapper>
      {/* Inject FAQ Schema for AEO/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pb-20">
        
        {/* 1. HERO SECTION */}
        <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_0%,var(--color-primary-soft),transparent)] pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-surface border border-border uppercase text-content-secondary mx-auto shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Your Complete Digital Growth Partner
            </div>
            
            <h1 className="text-h1 text-ink dark:text-white leading-[1.05] max-w-4xl mx-auto">
              One Stop Digital Growth Solutions <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">for Your Business.</span>
            </h1>

            <p className="text-base md:text-lg text-content-secondary max-w-2xl mx-auto leading-relaxed">
              Team Pika Growth helps Indian businesses build a strong online presence with professional websites, branding, SEO, digital marketing, and AI automation — all from one team, in Panvel and Navi Mumbai.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton href={globalCTAs.primary.path} type="primary" className="w-full sm:w-auto">
                <Sparkles className="w-4 h-4 mr-2" />
                Book Strategy Call
              </CTAButton>
              <CTAButton href="/services" type="secondary" className="w-full sm:w-auto">
                Explore Our Services
              </CTAButton>
            </div>
          </div>
        </section>

        {/* 2. DIGITAL SERVICES ECOSYSTEM */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-h2 text-ink dark:text-white mb-4">The Complete Digital Ecosystem</h2>
              <p className="text-content-secondary text-sm md:text-base leading-relaxed">
                We provide the core digital pillars required to build, launch, automate, and scale your business online.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {servicePillars.map((pillar) => (
              <ScrollReveal key={pillar.id}>
                <div className="bg-surface border border-border rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow group h-full flex flex-col">
                  <h3 className="text-xl font-bold text-ink dark:text-white mb-3">{pillar.title}</h3>
                  <p className="text-content-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2 border-t border-border pt-4">
                    {pillar.services.map((service, i) => (
                      <li key={i} className="text-xs font-semibold text-content flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span> {service.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors">
                View all specific services and capabilities <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* 3. PROJECT PROCESS */}
        <section className="bg-bg-secondary border-y border-border py-24">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-h2 text-ink dark:text-white">The Execution Framework</h2>
                <p className="mt-4 text-content-secondary max-w-2xl mx-auto">
                  A reliable, transparent process from initial discovery to final deployment.
                </p>
              </div>
            </ScrollReveal>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {PROCESS.map((step, idx) => (
                  <ScrollReveal key={idx}>
                    <div className="bg-surface border border-border rounded-3xl p-8 shadow-sm text-center relative h-full">
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ink dark:bg-white text-white dark:text-ink text-[10px] font-black tracking-widest px-3 py-1 rounded-full border-4 border-bg-secondary">
                        {step.step}
                      </span>
                      <h3 className="text-lg font-bold text-ink dark:text-white mt-4 mb-3">{step.title}</h3>
                      <p className="text-xs text-content-secondary leading-relaxed">{step.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. INDUSTRIES WE SERVE */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <h2 className="text-h2 text-ink dark:text-white mb-2">Industries We Help Grow Online</h2>
                <p className="text-content-secondary text-sm md:text-base">We adapt our digital solutions to your specific market mechanics.</p>
              </div>
              <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-semibold text-ink dark:text-white hover:opacity-70 transition-opacity">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind, idx) => (
              <ScrollReveal key={idx}>
                <div className="bg-surface border border-border rounded-lg p-6 group hover:border-primary transition-colors h-full">
                  <div className="flex justify-between items-start mb-4">
                    <Building2 className="w-6 h-6 text-content-muted group-hover:text-primary transition-colors" />
                    <ArrowUpRight className="w-4 h-4 text-border-strong group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="text-base font-bold text-ink dark:text-white mb-1">{ind.name}</h4>
                  <p className="text-sm text-content-secondary">{ind.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* 5. LONG-TERM PARTNERSHIP */}
        <section className="bg-bg-secondary border-y border-border py-24">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal>
              <div className="border border-border bg-surface rounded-2xl p-8 md:p-12 lg:p-16 text-center">
                <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-h2 text-ink dark:text-white mb-4">
                  We don't build and disappear.
                </h2>
                <p className="text-content-secondary text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12">
                  Many vendors launch your project, send an invoice, and vanish. We act as your ongoing digital partner. As your business scales, we maintain, secure, and optimize the systems we build.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="p-6 bg-bg-secondary rounded-xl border border-border">
                    <Globe className="w-6 h-6 text-content mb-4" />
                    <h4 className="text-base font-bold text-ink dark:text-white mb-2">Dependable Infrastructure</h4>
                    <p className="text-sm text-content-secondary">Professional hosting, continuous monitoring, and secure system backups.</p>
                  </div>
                  <div className="p-6 bg-bg-secondary rounded-xl border border-border">
                    <TrendingUp className="w-6 h-6 text-content mb-4" />
                    <h4 className="text-base font-bold text-ink dark:text-white mb-2">Continuous Growth</h4>
                    <p className="text-sm text-content-secondary">Ongoing SEO refinement, analytics tracking, and conversion optimization.</p>
                  </div>
                  <div className="p-6 bg-bg-secondary rounded-xl border border-border">
                    <Headset className="w-6 h-6 text-content mb-4" />
                    <h4 className="text-base font-bold text-ink dark:text-white mb-2">Dedicated Support</h4>
                    <p className="text-sm text-content-secondary">Direct communication and local presence in Panvel for fast, reliable help.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 6. FAQ */}
        <section className="max-w-3xl mx-auto px-6 py-24">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-h2 text-ink dark:text-white">Frequently Asked Questions</h2>
            </div>
            <div className="border-t border-border">
              {FAQS.map((faq, idx) => (
                <details key={idx} className="group border-b border-border py-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-ink dark:text-white focus:outline-none">
                    <span>{faq.q}</span>
                    <span className="ml-4 text-content-muted group-open:hidden"><Plus className="w-4 h-4" /></span>
                    <span className="ml-4 text-content-muted hidden group-open:block"><Minus className="w-4 h-4" /></span>
                  </summary>
                  <div className="mt-4 text-sm text-content-secondary leading-relaxed pr-8">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 7. FINAL CTA */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <ScrollReveal>
            <div className="bg-ink dark:bg-white text-white dark:text-ink rounded-2xl p-8 sm:p-16 text-center relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_100%,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(ellipse_600px_400px_at_50%_100%,rgba(0,0,0,0.05),transparent)] pointer-events-none" />
              <h2 className="text-h2 mb-4 relative z-10">
                Ready to scale your business?
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 dark:text-content-secondary max-w-lg mx-auto mb-10 relative z-10">
                Book a free strategy call. We'll listen to your goals, identify growth bottlenecks, and map out a custom digital solution.
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