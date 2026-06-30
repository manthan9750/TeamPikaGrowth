import Image from "next/image";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  BarChart3,
  Zap,
  Layers,
  ExternalLink,
  CheckCircle2,
  Briefcase
} from "lucide-react";
import PageWrapper from "@/src/components/PageWrapper";
import ScrollReveal from "@/src/components/ScrollReveal";
import CTAButton from "@/src/components/CTAButton";
import { globalCTAs } from "@/src/data/nav";

export const metadata = {
  title: "Our Work | Projects by Team Pika Growth",
  description: "See real projects delivered by Team Pika Growth — websites, branding, SEO and automation systems built for growing businesses.",
};

const projects = [
  {
    icon: Globe,
    title: "Corporate Website Redesign",
    category: "Website Solution",
    desc: "A fast, scalable professional website built to turn visitors into leads and build trust with local customers.",
    image: "/assets/images/projects/vision.png",
    liveUrl: "https://vision-enterprises-rho.vercel.app/",
    stack: ["React", "Next.js", "Tailwind CSS"],
    metrics: "99/100 Google Performance Score"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platform",
    category: "E-commerce Solution",
    desc: "A custom online store optimized for fast checkouts and higher conversion rates to reduce cart abandonment.",
    image: "/assets/images/projects/diveka.png",
    liveUrl: "https://divekaglobal-web.vercel.app/",
    stack: ["Next.js", "Stripe API", "Tailwind CSS"],
    metrics: "22% Increase in Online Sales"
  },
  {
    icon: Smartphone,
    title: "Lead Generation Campaign",
    category: "Digital Marketing",
    desc: "Focused landing pages designed specifically to capture leads from digital ads and route them directly to the sales team.",
    image: "/assets/images/projects/social.png",
    liveUrl: "https://docs.google.com/document/d/1LL505OTORFUgeTyBduB4QTbpVFfYjez5xZTS9ty8Cb8/edit?usp=sharing",
    stack: ["Landing Page", "Lead Capture", "WhatsApp Webhook"],
    metrics: "41% Landing Page Conversion Rate"
  },
  {
    icon: BarChart3,
    title: "Local SEO Strategy",
    category: "Search Engine Optimization",
    desc: "A complete SEO optimization campaign that improved local search rankings, website traffic, and Google Maps visibility.",
    image: "/assets/images/projects/seo.png",
    liveUrl: "https://docs.google.com/document/d/1TWpwsS_luVdynxgK3vRy0bNYNtCKsTLNsKmqJKEPzPY/edit?usp=sharing",
    stack: ["Content Strategy", "Technical SEO", "Schema Markup"],
    metrics: "140% Increase in Organic Traffic"
  },
  {
    icon: Zap,
    title: "CRM & WhatsApp Automation",
    category: "Business Automation",
    desc: "An automated system connecting WhatsApp inquiries directly into a central CRM so no customer messages are ever missed.",
    image: "/assets/images/projects/automation.png",
    liveUrl: "https://docs.google.com/document/d/1CbJ0ctECGUFlC5SmeIdvLiwTaQof-t4LfmN3C6XGyac/edit?usp=sharing",
    stack: ["API Integration", "Automated Workflows", "CRM Setup"],
    metrics: "100% Lead Capture Rate"
  },
  {
    icon: Layers,
    title: "Complete Brand Identity",
    category: "Branding",
    desc: "A complete visual branding package including a new logo, modern color scheme, and typography for consistent marketing.",
    image: "/assets/images/projects/brand.png",
    liveUrl: "https://docs.google.com/document/d/1hvCH79mQw632kpK_-oewWAy96Kot3jbk95IKU7otBfU/edit?usp=sharing",
    stack: ["Logo Design", "Brand Guidelines", "Visual Assets"],
    metrics: "Cohesive Professional Branding"
  }
];

export default function Projects() {
  return (
    <PageWrapper>
      <div className="pb-24 bg-bg">
        
        {/* CORE HERO SECTION */}
        <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_0%,var(--color-primary-soft),transparent)] pointer-events-none" />
          
          <div className="space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-surface border border-border uppercase text-content-muted mx-auto shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-primary" />
              Proven Work
            </div>

            <h1 className="text-h1 text-ink dark:text-white leading-[1.1]">
              Real Projects. <br className="hidden sm:block" />
              <span className="text-content-secondary">Real Results.</span>
            </h1>

            <p className="text-sm md:text-base text-content-secondary max-w-2xl mx-auto leading-relaxed pt-2">
              We don't showcase conceptual designs. These are real, functional websites, marketing campaigns, and automation systems built to help local businesses grow.
            </p>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="max-w-7xl mx-auto px-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <ScrollReveal key={project.title}>
                  <div className="group bg-surface border border-border rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300 h-full">
                    
                    {/* MEDIA HEADER */}
                    <div className="relative aspect-video w-full overflow-hidden bg-bg-secondary border-b border-border">
                      <Image 
                        src={project.image} 
                        alt={`${project.title} — ${project.category}, delivered by Team Pika Growth`}
                        width={600}
                        height={338}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider font-bold uppercase bg-ink/80 backdrop-blur-md text-white border border-white/10">
                          <IconComponent className="w-3 h-3 text-primary" />
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* PROJECT DETAILS */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-ink dark:text-white tracking-tight group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                          {project.desc}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.stack.map((tech, tIdx) => (
                            <span 
                              key={tIdx}
                              className="font-mono text-[10px] text-content-muted bg-bg-secondary border border-border px-2 py-0.5 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* OUTCOME & LINK */}
                      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-content-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-success shrink-0" />
                          <span>{project.metrics}</span>
                        </div>

                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-ink dark:text-white hover:text-primary transition-colors ml-2 shrink-0"
                          title={`View ${project.title}`}
                        >
                          <span>View</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <ScrollReveal>
            <div className="bg-bg-secondary border border-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
              <div className="max-w-2xl mx-auto relative z-10">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-content-muted block mb-3">
                  Tailored For You
                </span>
                
                <h2 className="text-h3 text-ink dark:text-white leading-tight">
                  Ready to build a digital growth system that actually works?
                </h2>
                
                <p className="mt-4 text-sm text-content-secondary leading-relaxed">
                  Every project shown above was built to solve a concrete business problem. Let's map out exactly what your business needs to grow.
                </p>

                <div className="mt-8 flex justify-center">
                  <CTAButton href={globalCTAs.primary.path} type="primary">
                    {globalCTAs.primary.label}
                  </CTAButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

      </div>
    </PageWrapper>
  );
}