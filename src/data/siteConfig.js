const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pikag.qzz.io";

export const siteConfig = {
  name: "Team Pika Growth",
  shortName: "Pika Growth",
  tagline: "One Stop Digital Growth Solutions",
  description: "Team Pika Growth helps Indian businesses build a strong online presence with professional websites, branding, SEO, digital marketing, and AI automation — all from one team, in Panvel and Navi Mumbai.",
  url: baseUrl,
  logo: `${baseUrl}/assets/images/logo.png`,
  contact: {
    email: "hello@pikag.qzz.io",
    phone: "+91-9769710678",
    phoneDisplay: "+91 9769710678",
    whatsapp: "https://wa.me/919769710678",
  },
  address: {
    street: "Shop No 4, Shaneshwar Apartment, Tapal Naka",
    city: "Panvel",
    region: "Maharashtra",
    postalCode: "", 
    country: "IN",
    display: "Shop No 4, Shaneshwar Apartment, Tapal Naka, Panvel",
  },
  areaServed: ["Panvel", "Navi Mumbai", "India"],
  social: {
    instagram: "https://instagram.com/pikagrowth",
    facebook: "https://facebook.com/pikagrowth",
    // {/* TODO: confirm official LinkedIn URL before launch */}
    linkedin: "",
    // {/* TODO: confirm official X/Twitter URL before launch */}
    twitter: "",
  }
};