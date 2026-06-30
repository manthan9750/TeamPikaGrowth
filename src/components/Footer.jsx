import Link from "next/link";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ArrowUpRight 
} from "lucide-react";
import { siteConfig } from "@/src/data/siteConfig";
import { navLinks, globalCTAs } from "@/src/data/nav";
import { servicePillars } from "@/src/data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social Matrix Link Config Array mapping to siteConfig
  const socials = [
    { name: "Instagram", href: siteConfig.social.instagram, icon: <Instagram className="w-4 h-4" /> },
    { name: "Facebook", href: siteConfig.social.facebook, icon: <Facebook className="w-4 h-4" /> },
    // {/* TODO: confirm official LinkedIn URL before launch */}
    { name: "LinkedIn", href: siteConfig.social.linkedin || "#", icon: <Linkedin className="w-4 h-4" /> },
    // {/* TODO: confirm official X/Twitter URL before launch */}
    { name: "X (Twitter)", href: siteConfig.social.twitter || "#", icon: <Twitter className="w-4 h-4" /> },
  ];

  return (
    <footer className="w-full border-t border-border bg-bg transition-colors duration-300 select-none relative overflow-hidden">
      {/* Subtle Visual Ambient Grid - Rethemed to primary brand color soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_110%,var(--color-primary-soft),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">

        {/* BRAND COLUMN */}
        <div className="md:col-span-4 space-y-4">
          <Link href="/" className="flex items-center gap-2 group w-fit">
            <img 
              src="/logo.png"
              alt={siteConfig.name} 
              className="h-7 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <span className="font-mono text-xs font-black tracking-widest uppercase text-ink dark:text-white mt-1">
              {siteConfig.name}
            </span>
          </Link>
          <p className="text-sm text-content-secondary leading-relaxed max-w-sm">
            {siteConfig.description}
          </p>
        </div>

        {/* NAV COLUMN */}
        <div className="md:col-span-2 space-y-3.5">
          <h3 className="font-mono text-[10px] font-black tracking-widest uppercase text-content-muted">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm font-medium text-content-secondary">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.path} className="hover:text-ink dark:hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES COLUMN */}
        <div className="md:col-span-3 space-y-3.5">
          <h3 className="font-mono text-[10px] font-black tracking-widest uppercase text-content-muted">
            Core Solutions
          </h3>
          <ul className="space-y-2 text-sm text-content-secondary">
            {servicePillars.map((pillar) => (
              <li key={pillar.id} className="flex items-start gap-1.5">
                <span className="mt-0.5">•</span> 
                <span>{pillar.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA COLUMN */}
        <div className="md:col-span-3 bg-bg-secondary border border-border rounded-xl p-5 flex flex-col justify-between group/cta shadow-sm">
          <div>
            <h3 className="font-mono text-[10px] font-black tracking-widest uppercase text-ink dark:text-white">
              Let’s Work Together
            </h3>
            <p className="text-xs text-content-secondary mt-1 leading-normal">
              Ready to build a strong online presence and grow your business?
            </p>
          </div>

          <Link
            href={globalCTAs.primary.path}
            className="mt-4 flex items-center justify-between text-xs font-bold font-mono tracking-wide uppercase bg-ink dark:bg-white text-white dark:text-ink px-3.5 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-sm"
          >
            <span>Book Free Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </Link>
        </div>

      </div>

      {/* BOTTOM BAR: SOCIAL SIGNALS & METADATA */}
      <div className="border-t border-border bg-bg-secondary/50 py-6 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          {/* Copyright Strings */}
          <div className="font-mono text-[10px] font-bold text-content-muted uppercase tracking-widest text-center sm:text-left order-2 sm:order-1">
            <span>&copy; {currentYear} {siteConfig.name}. All rights reserved.</span>
          </div>

          {/* Social Media Link Array Icons */}
          <div className="flex items-center gap-2 order-1 sm:order-2">
            {socials.map((social, index) => {
              // Render as span if unconfirmed placeholder, else real anchor tag
              const isPlaceholder = social.href === "#";
              return isPlaceholder ? (
                <span
                  key={index}
                  title={`${social.name} (Coming Soon)`}
                  className="p-2 rounded-lg bg-surface border border-border text-content-muted shadow-xs opacity-50 cursor-not-allowed"
                >
                  {social.icon}
                </span>
              ) : (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="p-2 rounded-lg bg-surface border border-border text-content-muted hover:text-ink dark:hover:text-white hover:border-border-strong shadow-xs transition-all duration-200 hover:-translate-y-0.5"
                >
                  {social.icon}
                </a>
              );
            })}
          </div>

        </div>
      </div>

    </footer>
  );
}
