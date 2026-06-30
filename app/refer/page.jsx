import { Share2, MessageCircle, HandCoins, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import PageWrapper from "@/src/components/PageWrapper";
import ScrollReveal from "@/src/components/ScrollReveal";
import CTAButton from "@/src/components/CTAButton";
import { siteConfig } from "@/src/data/siteConfig";

export const metadata = {
  title: "Refer & Earn | Team Pika Growth Referral Program",
  description: "Know a business that needs digital growth help? Refer them to Team Pika Growth via WhatsApp and earn a reward for every successful referral.",
};

const steps = [
  {
    icon: Share2,
    title: "Refer a Business",
    desc: "Share our service with any business owner who needs a website, branding, or digital growth.",
  },
  {
    icon: MessageCircle,
    title: "We Contact Them",
    desc: "Our team directly reaches out and explains the optimal digital solutions in detail.",
  },
  {
    icon: HandCoins,
    title: "You Earn Reward",
    desc: "Once the deal is completed, you receive your referral reward instantly.",
  },
];

const benefits = [
  "No upfront investment required",
  "Works entirely via WhatsApp",
  "No technical skills needed",
  "Unlimited referrals allowed",
  "Clear reward per successful client",
  "Existing clients get 30% discount on their own services for referrals",
];

export default function ReferPage() {
  return (
    <PageWrapper>
      <div className="pb-24 bg-bg overflow-hidden relative">
        
        {/* Ambient background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,var(--color-primary-soft),transparent_50%)] pointer-events-none -z-10" />

        {/* HERO SECTION */}
        <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-surface border border-border uppercase text-content-muted mx-auto shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Growth Partner Program
          </div>

          <h1 className="text-h1 text-ink dark:text-white leading-[1.05]">
            Referral Rewards Program
          </h1>

          <p className="mt-5 text-sm md:text-base text-content-secondary max-w-2xl mx-auto leading-relaxed">
            Help businesses grow and earn rewards for every successful client you refer to Team Pika Growth. 
          </p>
        </section>

        {/* STEPS SECTION */}
        <section className="max-w-6xl mx-auto px-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const IconComponent = step.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-surface border border-border rounded-xl p-8 text-center h-full shadow-sm hover:shadow-md hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 rounded-2xl bg-primary-soft flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-ink dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-content-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="max-w-4xl mx-auto px-6 mt-20">
          <ScrollReveal>
            <div className="bg-bg-secondary border border-border rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="text-h3 text-ink dark:text-white mb-8 text-center">
                Why Join The Program?
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-surface p-4 rounded-xl border border-border">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-ink dark:text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* CTA SECTION */}
        <section className="max-w-4xl mx-auto px-6 mt-20">
          <ScrollReveal>
            <div className="bg-ink dark:bg-white border border-border rounded-2xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_100%,rgba(255,255,255,0.1),transparent)] dark:bg-[radial-gradient(ellipse_600px_400px_at_50%_100%,rgba(0,0,0,0.05),transparent)] pointer-events-none" />
              
              <h2 className="text-h2 text-white dark:text-ink mb-4 relative z-10">
                Start Referring Today
              </h2>
              
              <p className="text-sm text-zinc-300 dark:text-content-secondary max-w-lg mx-auto mb-8 relative z-10">
                Talk directly with our team on WhatsApp to get your referral link and start earning from your network immediately.
              </p>

              <div className="flex justify-center relative z-10">
                <CTAButton href={siteConfig.contact.whatsapp} type="primary" className="w-full sm:w-auto">
                  Join via WhatsApp <ArrowRight className="w-4 h-4 ml-2" />
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </PageWrapper>
  );
}