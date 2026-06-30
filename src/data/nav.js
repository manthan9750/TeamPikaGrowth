export const routes = [
  { label: "Home", path: "/", priority: 1.0, showInNav: true },
  { label: "Services", path: "/services", priority: 0.9, showInNav: true },
  { label: "Book a Free Strategy Call", path: "/book", priority: 0.9, showInNav: false }, // Rendered as CTA button, not standard nav link
  { label: "Compare", path: "/compare", priority: 0.8, showInNav: true },
  { label: "Projects", path: "/projects", priority: 0.8, showInNav: true },
  { label: "Industries", path: "/industries", priority: 0.8, showInNav: true },
  { label: "Contact", path: "/contact", priority: 0.8, showInNav: true },
  { label: "About", path: "/about", priority: 0.7, showInNav: true },
  { label: "Refer", path: "/refer", priority: 0.7, showInNav: true },
];

export const navLinks = routes.filter(route => route.showInNav);
export const sitemapRoutes = routes;

// Reusable static CTAs
export const globalCTAs = {
  primary: {
    label: "Book a Free Strategy Call",
    path: "/book"
  },
  secondary: {
    label: "Chat on WhatsApp",
    path: "https://wa.me/919769710678",
    isExternal: true
  }
};