import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * TEAM PIKA GROWTH - NAVBAR SYSTEM
 * ---------------------------------
 * This is NOT just navigation.
 * This is a conversion entry system:
 * - WhatsApp CTA always visible
 * - Trust-based navigation structure
 * - Mobile responsive menu
 */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-[#0b0b12]/70">

      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">

        {/* BRAND */}
        <Link to="/" className="text-lg font-bold text-primary tracking-wide">
          TEAM PIKA GROWTH
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 text-sm">

          <Link className={isActive("/services") ? "text-primary" : ""} to="/services">
            Services
          </Link>

          <Link className={isActive("/projects") ? "text-primary" : ""} to="/projects">
            Projects
          </Link>

          <Link className={isActive("/industries") ? "text-primary" : ""} to="/industries">
            Industries
          </Link>

          <Link className={isActive("/about") ? "text-primary" : ""} to="/about">
            About
          </Link>

          <Link className={isActive("/growth-partner") ? "text-primary" : ""} to="/growth-partner">
            Partners
          </Link>

          <Link className={isActive("/contact") ? "text-primary" : ""} to="/contact">
            Contact
          </Link>

        </nav>

        {/* CTA BUTTON (PRIMARY CONVERSION POINT) */}
        <a
          href="https://wa.me/910000000000"
          target="_blank"
          className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition"
        >
          WhatsApp Us
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-sm px-3 py-1 border rounded"
        >
          Menu
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm border-t border-gray-200 dark:border-gray-800">

          <Link onClick={() => setOpen(false)} to="/services">Services</Link>
          <Link onClick={() => setOpen(false)} to="/projects">Projects</Link>
          <Link onClick={() => setOpen(false)} to="/industries">Industries</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/growth-partner">Partners</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>

          <a
            href="https://wa.me/910000000000"
            target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded text-center"
          >
            WhatsApp Us
          </a>

        </div>
      )}

    </header>
  );
}
