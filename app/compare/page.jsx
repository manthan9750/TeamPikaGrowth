import Link from "next/link";
import { CheckCircle2, XCircle, MinusCircle, AlertCircle, Plus, Minus, ArrowRight, Sparkles } from "lucide-react";
import PageWrapper from "@/src/components/PageWrapper";
import ScrollReveal from "@/src/components/ScrollReveal";
import { globalCTAs } from "@/src/data/nav";

export const metadata = {
  title: "Why Choose Team Pika Growth | Agency vs Freelancer vs DIY",
  description: "Compare Team Pika Growth with typical agencies, freelancers and DIY website builders. Discover why Panvel and Navi Mumbai businesses choose us for ROI-driven digital growth.",
};

// --- DATA STRUCTURES ---
const comparisonCategories = [
  {
    title: "Setup & Quality",
    features: [
      { name: "Initial setup effort", diy: "High (You do it)", freelancer: "Medium (You manage)", agency: "Low", teamPika: "100% Done-For-You" },
      { name: "Custom brand design", diy: "Generic templates", freelancer: "Varies widely", agency: "Yes", teamPika: "Yes, tailored to your brand" },
      { name: "Mobile optimization", diy: "Basic responsive", freelancer: "Varies", agency: "Standard", teamPika: "Engineered mobile-first" },
      { name: "Website speed", diy: "Often slow", freelancer: "Varies", agency: "Average", teamPika: "Lightning fast, modern" }
    ]
  },
  {
    title: "Marketing & Growth",
    features: [
      { name: "SEO foundation", diy: "Basic plugins", freelancer: "Extra cost", agency: "Often an upsell", teamPika: "Built into the core" },
      { name: "Copywriting", diy: "You write it", freelancer: "You write it", agency: "Usually included", teamPika: "Professional copy" },
      { name: "Business automation", diy: "Complex to connect", freelancer: "Rarely included", agency: "Separate service", teamPika: "Integrated natively" }
    ]
  },
  {
    title: "Support & Partnership",
    features: [
      { name: "Local availability", diy: "None", freelancer: "Rarely local", agency: "Often remote", teamPika: "Yes (Panvel/Navi Mumbai)" },
      { name: "Response time", diy: "Slow tickets", freelancer: "Unpredictable", agency: "24-48 hours", teamPika: "Fast WhatsApp/Phone" },
      { name: "Post-launch support", diy: "Self-serve articles", freelancer: "Project-based only", agency: "Expensive retainers", teamPika: "Long-term reliable partner" }
    ]
  },
  {
    title: "Pricing & Value",
    features: [
      { name: "Pricing clarity", diy: "Hidden addon fees", freelancer: "Hourly surprises", agency: "Complex pricing tiers", teamPika: "100% Transparent, Fixed" },
      { name: "Long-term value", diy: "Low (Needs rebuild)", freelancer: "Medium", agency: "Medium", teamPika: "High (Scales with you)" }
    ]
  }
];

const faqs = [
  { 
    question: "Why not just use a DIY website builder like Wix or Shopify?", 
    answer: "DIY builders seem cheap initially, but they cost you hours of frustration and often result in slow, generic websites that fail to convert visitors into paying clients. We save you time by building a professional, high-performance foundation engineered for actual business growth." 
  },
  { 
    question: "Why shouldn't I just hire a cheap freelancer?", 
    answer: "Freelancers are great for isolated tasks, but they rarely possess the full-stack skills needed for a complete digital strategy (UI design, secure coding, technical SEO, and ad management). Furthermore, they often become unresponsive after the project ends. We provide an entire digital department under one roof." 
  },
  { 
    question: "How does your pricing compare to traditional marketing agencies?", 
    answer: "Traditional agencies carry massive overhead costs and utilize complex, tiered pricing structures. Because we operate as an agile, localized team in Panvel, we deliver enterprise-grade quality with clear, upfront pricing. No hidden fees, no unpredictable hourly billing." 
  },
  { 
    question: "Do you provide ongoing support after the website goes live?", 
    answer: "Absolutely. We view our clients as long-term partners. We don't just launch a site and vanish; we provide ultra-reliable hosting, security monitoring, SEO refinement, and proactive automation support so your business scales without technical bottlenecks." 
  }
];

// Helper to render small status icons based on text sentiment
const renderStatusIcon = (text, isPika = false) => {
  if (isPika) return <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />;
  if (text.match(/High \(You|Basic|None|Slow|Hidden|Low|Generic/)) return <XCircle className="w-4 h-4 text-danger shrink-0" />;
  if (text.match(/Medium|Varies|Extra|Often|Unpredictable|Complex/)) return <AlertCircle className="w-4 h-4 text-warning shrink-0" />;
  return <MinusCircle className="w-4 h-4 text-content-muted shrink-0" />;
};

export default function ComparePage() {
  return (
    <PageWrapper>
      <div className="pb-20">
        
        {/* 1. HERO SECTION */}
        <section className="pt-32 pb-12 px-6 max-w-5xl mx-auto text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest bg-surface border border-border uppercase text-content-muted mx-auto shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse" />
              Stop Guessing. Start Growing.
            </div>
            
            <h1 className="text-h1 text-ink dark:text-white leading-[1.1]">
              Stop Wasting Time & Money on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">Wrong Partner.</span>
            </h1>

            <p className="text-sm md:text-base text-content-secondary max-w-2xl mx-auto leading-relaxed pt-2">
              DIY builders drain your time. Freelance projects often get abandoned. Traditional agencies overcharge for basic work. See exactly why businesses in Panvel and Navi Mumbai choose our all-in-one team for guaranteed execution.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href={globalCTAs.primary.path} 
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-bold shadow-md hover:bg-primary-hover transition-all active:scale-[0.98] group"
              >
                <Sparkles className="w-4 h-4" />
                Book Strategy Call
              </Link>
              <Link 
                href="/services" 
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-surface border border-border text-ink dark:text-white text-sm font-bold shadow-sm hover:border-border-strong hover:bg-bg-secondary transition-all active:scale-[0.98]"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>

        {/* 2. PREMIUM COMPARISON UI */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <ScrollReveal>
            
            {/* --- DESKTOP VIEW (Hidden on Mobile) --- */}
            <div className="hidden md:block">
              {/* Table Headers */}
              <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-4 mb-4">
                <div className="text-xs font-bold uppercase tracking-widest text-content-muted px-4 py-2 self-end">
                  Evaluation Criteria
                </div>
                <div className="bg-surface border border-border rounded-xl p-4 text-center">
                  <h3 className="font-bold text-ink dark:text-white text-sm">DIY Builders</h3>
                  <span className="text-[10px] text-content-secondary uppercase tracking-wider">Wix, Shopify</span>
                </div>
                <div className="bg-surface border border-border rounded-xl p-4 text-center">
                  <h3 className="font-bold text-ink dark:text-white text-sm">Freelancers</h3>
                  <span className="text-[10px] text-content-secondary uppercase tracking-wider">Upwork, Fiverr</span>
                </div>
                <div className="bg-surface border border-border rounded-xl p-4 text-center">
                  <h3 className="font-bold text-ink dark:text-white text-sm">Typical Agency</h3>
                  <span className="text-[10px] text-content-secondary uppercase tracking-wider">High Overhead</span>
                </div>
                {/* Highlighted Pika Header */}
                <div className="bg-primary text-white rounded-xl p-4 text-center shadow-lg relative transform scale-105 origin-bottom z-10">
                  <div className="absolute -top-2 -right-2">
                    <span className="flex h-4 w-4 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-white items-center justify-center">
                        <Sparkles className="w-2.5 h-2.5 text-primary" />
                      </span>
                    </span>
                  </div>
                  <h3 className="font-bold text-sm">Team Pika Growth</h3>
                  <span className="text-[10px] text-white/80 uppercase tracking-wider">All-in-one Partner</span>
                </div>
              </div>

              {/* Table Categories & Rows */}
              <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-sm">
                {comparisonCategories.map((category, catIdx) => (
                  <div key={catIdx}>
                    {/* Category Header */}
                    <div className="bg-bg-secondary px-6 py-3 border-y border-border first:border-t-0 flex items-center">
                      <span className="text-xs font-bold tracking-widest uppercase text-content-muted">
                        {category.title}
                      </span>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="divide-y divide-border/50">
                      {category.features.map((item, itemIdx) => (
                        <div key={itemIdx} className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] gap-4 text-sm group transition-colors hover:bg-bg-secondary/30">
                          {/* Feature Name */}
                          <div className="px-6 py-4 font-bold text-ink dark:text-white flex items-center">
                            {item.name}
                          </div>
                          
                          {/* Competitor Columns */}
                          <div className="py-4 px-2 flex flex-col justify-center items-center text-center gap-1.5 border-l border-border/50">
                            {renderStatusIcon(item.diy)}
                            <span className="text-content-secondary text-[13px]">{item.diy}</span>
                          </div>
                          <div className="py-4 px-2 flex flex-col justify-center items-center text-center gap-1.5 border-l border-border/50">
                            {renderStatusIcon(item.freelancer)}
                            <span className="text-content-secondary text-[13px]">{item.freelancer}</span>
                          </div>
                          <div className="py-4 px-2 flex flex-col justify-center items-center text-center gap-1.5 border-l border-border/50">
                            {renderStatusIcon(item.agency)}
                            <span className="text-content-secondary text-[13px]">{item.agency}</span>
                          </div>
                          
                          {/* Highlighted Pika Column inside the row */}
                          <div className="py-4 px-2 flex flex-col justify-center items-center text-center gap-1.5 bg-primary/5 border-x border-primary/20 relative z-0">
                            {renderStatusIcon(item.teamPika, true)}
                            <span className="font-bold text-primary text-[13px]">{item.teamPika}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- MOBILE VIEW (Hidden on Desktop, Card-based) --- */}
            <div className="md:hidden space-y-12">
              {comparisonCategories.map((category, catIdx) => (
                <div key={catIdx} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-border pb-2">
                    <div className="w-8 h-[1px] bg-primary rounded-full" />
                    <h2 className="text-lg font-extrabold text-ink dark:text-white uppercase tracking-wide">
                      {category.title}
                    </h2>
                  </div>

                  {/* Feature Cards */}
                  <div className="space-y-4">
                    {category.features.map((item, itemIdx) => (
                      <div key={itemIdx} className="bg-surface border border-border rounded-xl p-5 shadow-sm">
                        <h3 className="font-bold text-ink dark:text-white text-base mb-4 border-b border-border/50 pb-3">
                          {item.name}
                        </h3>
                        
                        <div className="space-y-3">
                          {/* Competitor Stats */}
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-content-muted font-medium">DIY Builders</span>
                            <div className="flex items-center gap-2 text-content-secondary text-right">
                              {item.diy} {renderStatusIcon(item.diy)}
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-content-muted font-medium">Freelancers</span>
                            <div className="flex items-center gap-2 text-content-secondary text-right">
                              {item.freelancer} {renderStatusIcon(item.freelancer)}
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-content-muted font-medium">Typical Agency</span>
                            <div className="flex items-center gap-2 text-content-secondary text-right">
                              {item.agency} {renderStatusIcon(item.agency)}
                            </div>
                          </div>

                          {/* Highlighted Pika Stat */}
                          <div className="mt-4 pt-3 flex items-center justify-between text-sm bg-primary/10 border border-primary/20 rounded-lg p-3">
                            <span className="font-extrabold text-primary flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5" /> Team Pika
                            </span>
                            <div className="flex items-center gap-2 font-bold text-primary text-right">
                              {item.teamPika} {renderStatusIcon(item.teamPika, true)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </ScrollReveal>
        </section>

        {/* 3. EXECUTIVE SUMMARY */}
        <section className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-surface border border-border rounded-xl p-8 h-full flex flex-col justify-center">
              <h2 className="text-h3 text-ink dark:text-white mb-3">The Cost of the Wrong Partner</h2>
              <p className="text-content-secondary leading-relaxed mb-6">
                A "cheap" initial quote almost always masks hidden fees, missed deadlines, and poor ongoing support. We frequently inherit fractured projects, broken SEO, and duct-taped systems from other unreliable vendors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-content font-medium">
                  <AlertCircle className="w-5 h-5 text-warning shrink-0" /> Missed Opportunities & Lost Leads
                </li>
                <li className="flex items-center gap-3 text-sm text-content font-medium">
                  <AlertCircle className="w-5 h-5 text-warning shrink-0" /> Launch Delays & Constant Excuses
                </li>
                <li className="flex items-center gap-3 text-sm text-content font-medium">
                  <AlertCircle className="w-5 h-5 text-warning shrink-0" /> Abandoned Projects & Zero Support
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-primary-soft border border-primary/20 rounded-xl p-8 h-full flex flex-col justify-center">
              <h2 className="text-h3 text-ink dark:text-white mb-3">The Team Pika Growth Advantage</h2>
              <p className="text-content-secondary leading-relaxed mb-6">
                We measure our success purely by your ROI. From the first line of code to the final marketing campaign, we engineer your systems to drive steady, predictable business growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-content font-bold">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> One Unified Digital Partner
                </li>
                <li className="flex items-center gap-3 text-sm text-content font-bold">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> 100% Transparent, Fixed Pricing
                </li>
                <li className="flex items-center gap-3 text-sm text-content font-bold">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Localized Support & Active Optimization
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </section>

        {/* 4. FAQ SECTION */}
        <section className="max-w-3xl mx-auto px-6 mt-24">
          <ScrollReveal>
            <h2 className="text-h2 text-ink dark:text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="border-t border-border">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group border-b border-border py-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-bold text-ink dark:text-white focus:outline-none">
                    <span>{faq.question}</span>
                    <span className="ml-4 text-content-muted group-open:hidden"><Plus className="w-4 h-4" /></span>
                    <span className="ml-4 text-content-muted hidden group-open:block"><Minus className="w-4 h-4" /></span>
                  </summary>
                  <div className="mt-4 text-sm text-content-secondary leading-relaxed pr-8">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* 5. FINAL CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <ScrollReveal>
            <div className="bg-surface border border-border rounded-xl p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
              <h2 className="text-h3 text-ink dark:text-white mb-3 relative z-10">
                Ready to make the right choice?
              </h2>
              <p className="text-sm text-content-secondary max-w-lg mx-auto mb-8 relative z-10 leading-relaxed">
                Book a free strategy call today. We'll listen to your goals and show you exactly how our unified approach can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <Link 
                  href={globalCTAs.primary.path} 
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-bold shadow-md hover:bg-primary-hover transition-all active:scale-[0.98] group"
                >
                  <Sparkles className="w-4 h-4" />
                  Book Strategy Call
                </Link>
                <Link 
                  href="/projects" 
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-surface border border-border text-ink dark:text-white text-sm font-bold shadow-sm hover:border-border-strong hover:bg-bg-secondary transition-all active:scale-[0.98]"
                >
                  View Our Work <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </PageWrapper>
  );
}