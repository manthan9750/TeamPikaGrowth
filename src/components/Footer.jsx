import { Link } from "react-router-dom";
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  Terminal, 
  ArrowUpRight 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social Matrix Link Config Array
  const socials = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: <Linkedin className="w-4 h-4" /> },
    { name: "GitHub", href: "https://github.com", icon: <Github className="w-4 h-4" /> },
    { name: "X (Twitter)", href: "https://x.com", icon: <Twitter className="w-4 h-4" /> },
    { name: "Instagram", href: "https://instagram.com", icon: <Instagram className="w-4 h-4" /> },
    { name: "Facebook", href: "https://facebook.com", icon: <Facebook className="w-4 h-4" /> },
  ];

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950 transition-colors duration-300 select-none relative overflow-hidden">
      {/* Subtle Visual Ambient Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_110%,rgba(99,102,241,0.03),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">

        {/* BRAND COLUMN */}
        <div className="md:col-span-4 space-y-4">
          <Link to="/" className="flex items-center gap-2 group w-fit">
            <div className="p-1.5 rounded-lg bg-zinc-950 dark:bg-white text-white dark:text-zinc-950">
              <Terminal className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="font-mono text-xs font-black tracking-widest uppercase text-zinc-950 dark:text-white">
              Team Pika Growth
            </span>
          </Link>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-sm">
            We build digital growth systems, cognitive automation loops, and high-performance frontend applications engineered to convert traffic into absolute revenue.
          </p>
        </div>

        {/* NAV COLUMN */}
        <div className="md:col-span-2 space-y-3.5">
          <h3 className="font-mono text-[10px] font-black tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            Navigation
          </h3>
          <ul className="space-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <li><Link to="/" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Projects</Link></li>
            <li><Link to="/industries" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Industries</Link></li>
            <li><Link to="/about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">About</Link></li>
          </ul>
        </div>

        {/* SERVICES COLUMN */}
        <div className="md:col-span-3 space-y-3.5">
          <h3 className="font-mono text-[10px] font-black tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
            Core Solutions
          </h3>
          <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
            <li className="flex items-center gap-1.5"><span>•</span> Corporate Web Platforms</li>
            <li className="flex items-center gap-1.5"><span>•</span> Digital Branding Systems</li>
            <li className="flex items-center gap-1.5"><span>•</span> Custom Process Automation</li>
            <li className="flex items-center gap-1.5"><span>•</span> Strategic Growth Blueprinting</li>
          </ul>
        </div>

        {/* CTA COLUMN */}
        <div className="md:col-span-3 bg-zinc-50/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/60 rounded-xl p-5 flex flex-col justify-between group/cta">
          <div>
            <h3 className="font-mono text-[10px] font-black tracking-widest uppercase text-zinc-900 dark:text-zinc-100">
              Let’s Work Together
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-normal">
              Ready to construct your high-fidelity deployment platform?
            </p>
          </div>

          {/* Connected properly to /booking or /book depending on your App.jsx map */}
          <Link
            to="/booking"
            className="mt-4 flex items-center justify-between text-xs font-bold font-mono tracking-wide uppercase bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-3.5 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-xs"
          >
            <span>Book Free Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </Link>
        </div>

      </div>

      {/* BOTTOM BAR: SOCIAL SIGNALS & METADATA */}
      <div className="border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/60 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
          
          {/* Copyright Strings */}
          <div className="font-mono text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest text-center sm:text-left order-2 sm:order-1">
            <span>&copy; {currentYear} Team Pika Growth. All rights reserved.</span>
            <span className="hidden md:inline mx-2 text-zinc-200 dark:text-zinc-800">|</span>
            <span className="hidden md:inline text-zinc-300 dark:text-zinc-700">NODE // VERCEL_PROD</span>
          </div>

          {/* Social Media Link Array Icons */}
          <div className="flex items-center gap-2 order-1 sm:order-2">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 shadow-2xs transition-all duration-200 hover:-translate-y-0.5"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}