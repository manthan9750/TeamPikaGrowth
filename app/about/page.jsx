import Image from "next/image";
import { Users, Target, Compass, Flag, Sparkles, ArrowRight } from "lucide-react";
import PageWrapper from "@/src/components/PageWrapper";
import ScrollReveal from "@/src/components/ScrollReveal";
import CTAButton from "@/src/components/CTAButton";
import team from "@/src/data/team";
import { globalCTAs } from "@/src/data/nav";

export const metadata = {
  title: "About Us | Team Pika Growth — Panvel's Digital Growth Partner",
  description: "Meet the team behind Team Pika Growth and learn our vision, mission and goal: helping businesses build a strong online presence and grow sustainably.",
};

export default function About() {
  // Safe guard for team data array
  const safeTeam = Array.isArray(team) ? team : [];

  return (
    <PageWrapper>
      <div className="pb-24 bg-bg">
        
        {/* HEADER SECTION */}
        <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_0%,var(--color-primary-soft),transparent)] pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-surface border border-border uppercase text-content-muted mx-auto shadow-sm">
              <Users className="w-3.5 h-3.5 text-primary" />
              Panvel's Digital Growth Partner
            </div>

            <h1 className="text-h1 text-ink dark:text-white leading-[1.1]">
              About Team Pika Growth
            </h1>

            <p className="text-sm md:text-base text-content-secondary max-w-2xl mx-auto leading-relaxed pt-2">
              We are a team of digital growth experts based in Panvel, Navi Mumbai, dedicated to helping Indian businesses build a professional online presence, automate their operations, and scale sustainably.
            </p>
          </div>
        </section>

        {/* VISION, MISSION, GOAL SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-surface border border-border rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                <Compass className="w-8 h-8 text-primary mb-5" />
                <h2 className="text-lg font-bold text-ink dark:text-white mb-3">Our Vision</h2>
                <p className="text-sm text-content-secondary leading-relaxed">
                  To be the trusted digital growth partner that empowers businesses to build a strong online presence, achieve sustainable growth, and succeed in the digital world.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-surface border border-border rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                <Target className="w-8 h-8 text-primary mb-5" />
                <h2 className="text-lg font-bold text-ink dark:text-white mb-3">Our Mission</h2>
                <p className="text-sm text-content-secondary leading-relaxed">
                  To deliver reliable digital solutions that help businesses build, market, automate, and grow through innovation, quality, and long-term partnerships.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-surface border border-border rounded-2xl p-8 h-full shadow-sm hover:shadow-md transition-shadow">
                <Flag className="w-8 h-8 text-primary mb-5" />
                <h2 className="text-lg font-bold text-ink dark:text-white mb-3">Our Goal</h2>
                <p className="text-sm text-content-secondary leading-relaxed">
                  Our goal is to become the long-term digital growth partner for every business we work with — not a one-time vendor. We measure our success by your results: more visibility, more leads, and steady, sustainable growth.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* TEAM GRID SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border mt-12">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center md:items-start md:text-left justify-between pb-12">
              <h2 className="text-h2 text-ink dark:text-white">Meet the Team</h2>
              <p className="text-sm text-content-secondary mt-2">The strategists, engineers, and creatives building your digital solutions.</p>
            </div>
          </ScrollReveal>

          {safeTeam.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-border rounded-xl text-content-muted bg-bg-secondary">
              Team data not found. Please verify the <code className="px-1.5 py-0.5 bg-bg text-xs rounded border border-border">/src/data/team.js</code> file.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {safeTeam.map((member, index) => (
                <ScrollReveal key={member.id || index}>
                  <div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group h-full flex flex-col">
                    
                    {/* IMAGE CONTEXT CONTAINER */}
                    <div className="relative w-full aspect-square overflow-hidden bg-bg-secondary border-b border-border">
                      {member?.image ? (
                        <Image
                          src={member.image}
                          alt={`${member.name || "Team member"} - ${member.role || "Team Pika Growth"}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full text-xs text-content-muted gap-2">
                          <Users className="w-8 h-8 opacity-20" />
                          <span>No photo available</span>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-col items-start gap-1 mb-3">
                        <h3 className="text-lg font-bold text-ink dark:text-white tracking-tight group-hover:text-primary transition-colors">
                          {member?.name || "Team Member"}
                        </h3>
                        {member?.role && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-bg-secondary text-content-secondary border border-border">
                            {member.role}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-content-secondary leading-relaxed flex-grow">
                        {member?.bio || "Dedicated member of the Team Pika Growth operational team."}
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </section>

        {/* FINAL CTA SECTION */}
        <section className="max-w-4xl mx-auto px-6 mt-12">
          <ScrollReveal>
            <div className="bg-bg-secondary border border-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
              <h2 className="text-h3 text-ink dark:text-white mb-3">
                Ready to work with a team that cares about your growth?
              </h2>
              <p className="text-sm text-content-secondary max-w-xl mx-auto mb-8">
                Let's discuss your business goals and map out the exact digital strategies and systems required to reach them.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <CTAButton href={globalCTAs.primary.path} type="primary" className="w-full sm:w-auto">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Book Strategy Call
                </CTAButton>
                <CTAButton href="/contact" type="secondary" className="w-full sm:w-auto">
                  Contact Us <ArrowRight className="w-4 h-4 ml-2" />
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </PageWrapper>
  );
}