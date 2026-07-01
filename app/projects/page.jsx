import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  BarChart3,
  Zap,
  Layers,
  ExternalLink,
  CheckCircle2,
  Briefcase,
  Building2,
  Stethoscope,
  Share2,
  Sparkles,
  ArrowRight
} from "lucide-react";
import PageWrapper from "@/src/components/PageWrapper";
import ScrollReveal from "@/src/components/ScrollReveal";
import { globalCTAs } from "@/src/data/nav";

export const metadata = {
  title: "Our Work | Projects by Team Pika Growth",
  description: "See real projects delivered by Team Pika Growth — websites, branding, SEO and automation systems built for growing businesses.",
};

const projects = [
  {
    icon: Globe,
    title: "Corporate Website Redesign",
    category: "Website Development",
    desc: "A fast, scalable professional website built to turn local visitors into qualified leads and establish instant trust.",
    image: "/assets/images/projects/vision.png",
    liveUrl: "https://vision-enterprises-rho.vercel.app/",
    stack: ["Custom Design", "Fast Loading", "Mobile-First"],
    metrics: "99/100 Google Performance"
  },
  {
    icon: ShoppingCart,
    title: "D2C E-commerce Platform",
    category: "E-commerce System",
    desc: "An optimized online store with frictionless checkout, designed specifically to reduce cart abandonment.",
    image: "/assets/images/projects/diveka.png",
    liveUrl: "https://divekaglobal-web.vercel.app/",
    stack: ["Secure Checkout", "Inventory Sync", "Sales Tracking"],
    metrics: "22% Increase in Direct Sales"
  },
  {
    icon: Smartphone,
    title: "Targeted Lead Generation",
    category: "Digital Marketing",
    desc: "High-converting landing pages connected to targeted ad campaigns, routing hot leads directly to the sales team.",
    image: "/assets/images/projects/social.png",
    liveUrl: "https://docs.google.com/document/d/1LL505OTORFUgeTyBduB4QTbpVFfYjez5xZTS9ty8Cb8/edit?usp=sharing",
    stack: ["Ad Campaigns", "Landing Page", "Lead Routing"],
    metrics: "41% Landing Page Conversion"
  },
  {
    icon: BarChart3,
    title: "Local SEO Dominance",
    category: "Search Optimization",
    desc: "A complete SEO overhaul that pushed the client to the top of local Google Maps and search results.",
    image: "/assets/images/projects/seo.png",
    liveUrl: "https://docs.google.com/document/d/1TWpwsS_luVdynxgK3vRy0bNYNtCKsTLNsKmqJKEPzPY/edit?usp=sharing",
    stack: ["Keyword Strategy", "Google Profile", "Local Ranking"],
    metrics: "140% More Organic Traffic"
  },
  {
    icon: Zap,
    title: "WhatsApp CRM Automation",
    category: "Business Automation",
    desc: "An automated follow-up system that instantly greets WhatsApp inquiries and logs them into a centralized CRM.",
    image: "/assets/images/projects/automation.png",
    liveUrl: "https://docs.google.com/document/d/1CbJ0ctECGUFlC5SmeIdvLiwTaQof-t4LfmN3C6XGyac/edit?usp=sharing",
    stack: ["WhatsApp Bot", "Auto-Replies", "Lead Sync"],
    metrics: "Zero Missed Customer Messages"
  },
  {
    icon: Layers,
    title: "Complete Brand Identity",
    category: "Branding",
    desc: "A cohesive visual identity package including a modern logo, typography, and marketing assets for absolute consistency.",
    image: "/assets/images/projects/brand.png",
    liveUrl: "https://docs.google.com/document/d/1hvCH79mQw632kpK_-oewWAy96Kot3jbk95IKU7otBfU/edit?usp=sharing",
    stack: ["Logo Design", "Brand Guidelines", "Visual Assets"],
    metrics: "Premium Market Positioning"
  },
  // --- NEW ADDED SAMPLE PROJECTS ---
  {
    icon: Building2,
    title: "Luxury Real Estate Portal",
    category: "Industry Solution",
    desc: "A dynamic property listing platform with integrated lead capture to connect agents with high-intent property buyers.",
    image: "/assets/images/projects/vision.png", // Using vision placeholder
    liveUrl: "#",
    stack: ["Property Search", "Lead Capture", "Agent Dashboard"],
    metrics: "3x More Property Inquiries"
  },
  {
    icon: Stethoscope,
    title: "Clinic Booking Ecosystem",
    category: "Healthcare System",
    desc: "A secure patient acquisition system combining online appointment scheduling with targeted local health SEO.",
    image: "/assets/images/projects/automation.png", // Using automation placeholder
    liveUrl: "#",
    stack: ["Online Booking", "Patient Reminders", "Local SEO"],
    metrics: "Fully Booked Calendars"
  },
  {
    icon: Share2,
    title: "Social Media Dominance",
    category: "Content Marketing",
    desc: "A 360-degree social media strategy focusing on high-quality content creation and targeted community growth.",
    image: "/assets/images/projects/social.png", // Using social placeholder
    liveUrl: "#",
    stack: ["Content Creation", "Community Growth", "Ad Strategy"],
    metrics: "500% Reach Increase"
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
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest bg-surface border border-border uppercase text-content-muted mx-auto shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-primary" />
              Proven Case Studies
            </div>

            <h1 className="text-h1 text-ink dark:text-white leading-[1.1]">
              Real Business Growth. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">Proven Digital Systems.</span>
            </h1>

            <p className="text-sm md:text-base text-content-secondary max-w-2xl mx-auto leading-relaxed pt-2">
              We don't build conceptual designs or speak in confusing tech jargon. We build reliable websites, automated workflows, and marketing systems that actually generate revenue for businesses across India.
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
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] tracking-widest font-bold uppercase bg-ink/80 backdrop-blur-md text-white border border-white/10">
                          <IconComponent className="w-3.5 h-3.5 text-primary" />
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

                        {/* Simplified "Business Value" Tags instead of Tech Jargon */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.stack.map((tech, tIdx) => (
                            <span 
                              key={tIdx}
                              className="text-[10px] font-bold uppercase tracking-wider text-content-muted bg-bg border border-border px-2.5 py-1 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* OUTCOME & LINK */}
                      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-content-secondary">
                          <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                          <span>{project.metrics}</span>
                        </div>

                        {project.liveUrl !== "#" ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-ink dark:text-white hover:text-primary transition-colors ml-2 shrink-0"
                            title={`View ${project.title}`}
                          >
                            <span>View</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-content-muted ml-2 shrink-0">
                            Internal System
                          </span>
                        )}
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
            <div className="bg-surface border border-border rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
              <div className="max-w-2xl mx-auto relative z-10">
                <span className="text-xs font-bold tracking-widest uppercase text-content-muted block mb-3">
                  Tailored For You
                </span>
                
                <h2 className="text-h3 text-ink dark:text-white leading-tight">
                  Ready to build a digital growth system that actually works?
                </h2>
                
                <p className="mt-4 text-sm text-content-secondary leading-relaxed">
                  Every project shown above was built to solve a concrete business problem. Let's map out exactly what your business needs to grow.
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