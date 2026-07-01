import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/src/data/siteConfig";
import { ThemeProvider } from "@/src/context/ThemeContext";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import "./globals.css";

// Initialized the new premium agency font
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({ children }) {
  // Generate JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: siteConfig.shortName,
        url: siteConfig.url,
        logo: siteConfig.logo,
        description: siteConfig.description,
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        areaServed: siteConfig.areaServed,
        sameAs: [
          siteConfig.social.instagram,
          siteConfig.social.facebook,
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-IN",
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}/#localbusiness`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: siteConfig.logo,
        description: "Website Development, SEO, Digital Marketing and Business Automation agency serving Panvel, Navi Mumbai and businesses across India.",
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.region,
          addressCountry: siteConfig.address.country,
        },
        areaServed: [
          { "@type": "City", name: "Panvel" },
          { "@type": "City", name: "Navi Mumbai" },
          { "@type": "Country", name: "India" },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Applied the new font globally with antialiased for crisper rendering */}
      <body className={`${jakarta.className} font-sans min-h-screen flex flex-col antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}