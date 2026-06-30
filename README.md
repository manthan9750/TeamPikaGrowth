# Team Pika Growth — Digital Growth Ecosystem

This repository contains the Next.js 14 (App Router) migration of the Team Pika Growth website. It is engineered for maximum performance, SEO dominance, and high-conversion lead generation.

## 🚀 Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Styling:** Tailwind CSS (v3)
* **Icons:** Lucide React
* **Backend API:** Next.js Route Handlers (`/api/*`)
* **Email Provider:** Resend
* **Deployment:** Vercel

## 🎨 Semantic Design Tokens

We have abandoned arbitrary utility colors (e.g., `zinc-900`, `emerald-500`) in favor of a strict, semantic design system defined in `tailwind.config.js`.

**Backgrounds & Surfaces:**
* `bg-bg`: The core page background (light/dark adaptive).
* `bg-surface`: Elevated elements like cards and modals.
* `bg-bg-secondary`: Subtle contrast for secondary sections or hover states.

**Text & Content:**
* `text-ink`: Primary headings and critical text.
* `text-content`: Standard body copy.
* `text-content-secondary`: Supporting text.
* `text-content-muted`: Disabled text, placeholders, or subtle metadata.

**Brand & Interactive:**
* `bg-primary` / `text-primary`: The core brand blue (`#1668E0` / `#3B82F6`).
* `bg-primary-hover` / `text-primary-hover`: Interactive hover states.
* `bg-primary-soft`: Highly transparent brand color for subtle highlights.

**Status:**
* `success`: Positive actions (e.g., green checks).
* `danger`: Destructive actions or errors.
* `warning`: Alerts or cautions.

## 📁 Project Architecture

```text
├── app/
│   ├── layout.jsx        # Root layout, fonts, and global metadata
│   ├── page.jsx          # Home page
│   ├── services/         # Services directory
│   ├── projects/         # Portfolio and case studies
│   ├── industries/       # Target verticals
│   ├── about/            # Team and mission
│   ├── compare/          # Agency vs DIY comparison matrix
│   ├── contact/          # Contact information
│   ├── book/             # Lead capture / Strategy call booking
│   ├── refer/            # WhatsApp referral program
│   ├── api/
│   │   └── send-booking/ # Resend email integration route
│   ├── sitemap.js        # Dynamic SEO Sitemap
│   └── robots.js         # Search engine crawl directives
├── src/
│   ├── components/       # Reusable UI (Buttons, Nav, Footer, Cards)
│   └── data/             # Centralized JSON data (SiteConfig, Nav, Team, Services)
├── public/               # Static assets (images, fonts)
│   └── llms.txt          # AEO/LLM summary file
├── tailwind.config.js    # Design token definitions
└── next.config.js        # Next.js configurations