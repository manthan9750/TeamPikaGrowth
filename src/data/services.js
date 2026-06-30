export const servicePillars = [
  {
    id: "digital-presence",
    title: "Digital Presence",
    description: "Build a strong, professional foundation for your business online.",
    services: [
      {
        title: "Website Development",
        description: "Fast, mobile-friendly, and secure websites designed to represent your brand and turn visitors into paying customers."
      },
      {
        title: "Landing Pages",
        description: "High-converting, focused single pages built specifically for your marketing campaigns and product launches."
      },
      {
        title: "Branding",
        description: "Professional logo design, color themes, and visual identity that make your business stand out from local competitors."
      },
      {
        title: "Google Business Profile",
        description: "Complete setup and optimization to ensure local customers easily find your physical location and hours on Google Maps and Search."
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Reach your target audience and bring steady, reliable traffic to your business.",
    services: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "Improve your website's ranking on Google so customers can find you naturally without you having to constantly pay for ads."
      },
      {
        title: "Social Media Marketing",
        description: "Consistent, engaging content creation and management for your business profiles on platforms like Instagram and Facebook."
      },
      {
        title: "Lead Generation",
        description: "Targeted digital campaigns designed specifically to capture contact information from interested prospects."
      }
    ]
  },
  {
    id: "business-growth",
    title: "Business Growth & Automation",
    description: "Save time, reduce manual work, and scale your operations with smart digital tools.",
    services: [
      {
        title: "AI Automation",
        description: "Automate repetitive daily tasks like customer inquiries, booking confirmations, and follow-ups using practical AI solutions."
      },
      {
        title: "CRM Setup",
        description: "Organize your customer data, track your sales, and manage relationships efficiently with a custom Customer Relationship Management system."
      }
    ]
  }
];

// Helper to get a flat list of all services if needed for dropdowns/forms
export const allServicesFlat = servicePillars.flatMap(pillar => pillar.services);