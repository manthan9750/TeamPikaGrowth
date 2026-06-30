import { CheckCircle2, XCircle, MinusCircle, AlertCircle, Plus, Minus, ArrowRight } from "lucide-react";
import PageWrapper from "@/src/components/PageWrapper";
import ScrollReveal from "@/src/components/ScrollReveal";
import CTAButton from "@/src/components/CTAButton";
import { globalCTAs } from "@/src/data/nav";

export const metadata = {
  title: "Why Choose Team Pika Growth | Agency vs Freelancer vs DIY",
  description: "Compare Team Pika Growth with typical agencies, freelancers and DIY website builders. See why local businesses choose us as their long-term digital growth partner.",
};

// --- DATA STRUCTURES ---
const comparisonCategories = [
  {
    title: "Setup & Quality",
    features: [
      { name: "Initial setup effort", diy: "High (You do it)", freelancer: "Medium (You manage)", agency: "Low", teamPika: "Handled completely by us" },
      { name: "Custom brand design", diy: "Generic templates", freelancer: "Varies widely", agency: "Yes", teamPika: "Yes, tailored to your brand" },
      { name: "Mobile optimization", diy: "Basic responsive", freelancer: "Varies", agency: "Standard", teamPika: "Built mobile-first" },
      { name: "Website speed", diy: "Often slow", freelancer: "Varies", agency: "Average", teamPika: "Fast, modern framework" }
    ]
  },
  {
    title: "Marketing & Growth",
    features: [
      { name: "SEO foundation", diy: "Basic plugins", freelancer: "Extra cost", agency: "Often an upsell", teamPika: "Built into the foundation" },
      { name: "Copywriting", diy: "You write it", freelancer: "You write it", agency: "Usually included", teamPika: "Professional copy included" },
      { name: "Business automation", diy: "Complex to connect", freelancer: "Rarely included", agency: "Separate service", teamPika: "Integrated natively" }
    ]
  },
  {
    title: "Support & Partnership",
    features: [
      { name: "Local availability", diy: "None", freelancer: "Rarely local", agency: "Often remote", teamPika: "Yes (Panvel & Navi Mumbai)" },
      { name: "Response time", diy: "Slow support tickets", freelancer: "Unpredictable", agency: "24-48 hours", teamPika: "Fast WhatsApp & phone" },
      { name: "Post-launch support", diy: "Self-serve articles", freelancer: "Project-based only", agency: "Expensive retainers", teamPika: "Long-term reliable partner" }
    ]
  },
  {
    title: "Pricing & Value",
    features: [
      { name: "Pricing clarity", diy: "Hidden addon fees", freelancer: "Hourly surprises", agency: "Complex pricing tiers", teamPika: "Clear, upfront project pricing" },
      { name: "Long-term value", diy: "Low (Needs rebuild later)", freelancer: "Medium", agency: "Medium", teamPika: "High (Scales with your business)" }
    ]
  }
];

const faqs = [
  { 
    question: "Why not just use a DIY website builder?", 
    answer: "DIY builders seem cheap at first, but they cost you hours of frustration and often result in slow, generic websites that don't rank well on Google. We save you time and build a professional foundation that actually attracts customers and grows your business." 
  },
  { 
    question: "Why not just hire a freelancer?", 
    answer: "Freelancers can be great for single, isolated tasks, but they often lack the broad skills needed for a complete digital growth strategy (design, coding, SEO, and marketing). Plus, they can be hard to reach after the project ends. We provide a complete, reliable team under one roof." 
  },
  { 
    question: "How does your pricing compare to traditional agencies?", 
    answer: "Typical agencies have high overhead costs and complex pricing tiers. As a focused, local team, we offer clear, upfront pricing without hidden fees or unpredictable hourly rates. You know exactly what you are paying for." 
  },
  { 
    question: "Do you provide ongoing support after the website is live?", 
    answer: "Yes. We believe in long-term partnerships. We don't just hand over a website and disappear; we offer reliable hosting, security updates, and ongoing growth marketing support to ensure your business keeps scaling." 
  }
];

// Helper to render small status icons based on text sentiment
const renderStatusIcon = (text, isPika = false) => {
  if (isPika) return <CheckCircle2 className="w-4 h-4 text-success shrink-0" />;
  if (text.match(/High \(You|Basic|None|Slow|Hidden|Low|Generic/)) return <XCircle className="w-4 h-4 text-danger shrink-0" />;
  if (text.match(/Medium|Varies|Extra|Often|Unpredictable|Complex/)) return <AlertCircle className="w-4 h-4 text-warning shrink-0" />;
  return <MinusCircle className="w-4 h-4 text-content-muted shrink-0" />;
};

export default function ComparePage() {
  return (
    <PageWrapper>
      <div className="pb-20">
        
        {/* 1. COMPACT HERO SECTION */}
        <section className="pt-32 pb-12 px-6 max-w-5xl mx-auto text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-surface border border-border uppercase text-content-muted mx-auto shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Trusted Long-Term Partner
            </div>
            
            <h1 className="text-h1 text-ink dark:text-white leading-[1.1]">
              Compare Your Options for Digital Growth
            </h1>

            <p className="text-sm md:text-base text-content-secondary max-w-2xl mx-auto leading-relaxed pt-2">
              See why local businesses choose Team Pika Growth over DIY builders, unreliable freelancers, and expensive traditional agencies.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton href={globalCTAs.primary.path} type="primary" className="w-full sm:w-auto">
                Book Strategy Call
              </CTAButton>
              <CTAButton href="/services" type="secondary" className="w-full sm:w-auto">
                View Our Services
              </CTAButton>
            </div>
          </div>
        </section>

        {/* 2. DENSE COMPARISON MATRIX (Sticky Table) */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <ScrollReveal>
            <div className="border border-border rounded-xl bg-surface overflow-x-auto shadow-sm">
              <div className="min-w-[900px]">
                {/* Sticky Header */}
                <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] sticky top-16 md:top-0 z-20 bg-bg-secondary/90 backdrop-blur-md border-b border-border text-xs text-content-muted">
                  <div className="p-4 font-bold uppercase tracking-wider text-ink dark:text-white">Evaluation Criteria</div>
                  <div className="p-4 font-semibold uppercase tracking-wider border-l border-border">DIY Builder</div>
                  <div className="p-4 font-semibold uppercase tracking-wider border-l border-border">Freelancer</div>
                  <div className="p-4 font-semibold uppercase tracking-wider border-l border-border">Typical Agency</div>
                  <div className="p-4 font-bold uppercase tracking-wider border-l border-border text-ink dark:text-white bg-primary-soft sticky right-0 z-30 shadow-[-4px_0_12px_rgba(0,0,0,0.05)]">
                    Team Pika Growth
                  </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-border">
                  {comparisonCategories.map((category, catIdx) => (
                    <div key={catIdx}>
                      {/* Section Label */}
                      <div className="bg-bg-secondary px-4 py-2 border-y border-border text-[10px] font-bold tracking-widest uppercase text-content-muted">
                        {category.title}
                      </div>
                      
                      {/* Rows */}
                      <div className="divide-y divide-border/50">
                        {category.features.map((item, itemIdx) => (
                          <div key={itemIdx} className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr] text-[13px] hover:bg-bg-secondary transition-colors">
                            <div className="p-3 font-semibold text-content flex items-center">
                              {item.name}
                            </div>
                            
                            <div className="p-3 border-l border-border flex items-center text-content-secondary gap-2">
                              {renderStatusIcon(item.diy)} {item.diy}
                            </div>
                            
                            <div className="p-3 border-l border-border flex items-center text-content-secondary gap-2">
                              {renderStatusIcon(item.freelancer)} {item.freelancer}
                            </div>
                            
                            <div className="p-3 border-l border-border flex items-center text-content-secondary gap-2">
                              {renderStatusIcon(item.agency)} {item.agency}
                            </div>
                            
                            <div className="p-3 border-l border-border bg-primary-soft flex items-center font-semibold text-ink dark:text-white gap-2 sticky right-0 z-10 shadow-[-4px_0_12px_rgba(0,0,0,0.02)]">
                              {renderStatusIcon(item.teamPika, true)} {item.teamPika}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* 3. EXECUTIVE SUMMARY */}
        <section className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="bg-surface border border-border rounded-xl p-8 h-full flex flex-col justify-center">
              <h2 className="text-h3 text-ink dark:text-white mb-3">The Cost of the Wrong Partner</h2>
              <p className="text-content-secondary leading-relaxed mb-6">
                A cheaper initial quote often masks hidden fees, missed deadlines, and poor ongoing support. We frequently inherit fractured projects and duct-taped systems from other vendors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-content font-medium">
                  <AlertCircle className="w-5 h-5 text-warning shrink-0" /> Missed Opportunities & Lost Leads
                </li>
                <li className="flex items-center gap-3 text-sm text-content font-medium">
                  <AlertCircle className="w-5 h-5 text-warning shrink-0" /> Launch Delays & Excuses
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
                We measure our success by your results. From the first line of code to the final marketing campaign, we engineer your systems to drive steady, predictable growth.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-content font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> One Unified Digital Partner
                </li>
                <li className="flex items-center gap-3 text-sm text-content font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Clear, Transparent Pricing
                </li>
                <li className="flex items-center gap-3 text-sm text-content font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> Long-Term Support & Optimization
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
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-medium text-ink dark:text-white focus:outline-none">
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
              <p className="text-sm text-content-secondary max-w-lg mx-auto mb-8 relative z-10">
                Book a free strategy call today. We'll listen to your goals and show you exactly how our unified approach can help your business grow.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                <CTAButton href={globalCTAs.primary.path} type="primary" className="w-full sm:w-auto">
                  Book Strategy Call
                </CTAButton>
                <CTAButton href="/projects" type="secondary" className="w-full sm:w-auto">
                  View Our Work <ArrowRight className="w-4 h-4 ml-2" />
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </PageWrapper>
  );
}