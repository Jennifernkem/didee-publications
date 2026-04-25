import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, generateWebsiteStructuredData, generateOrganizationStructuredData } from '../lib/seo';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - International Peer-Reviewed Journal`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "peer review", "academic journal", "research publication", "scholarly articles", 
    "international journal", "psychology research", "education research", 
    "philosophy journal", "media studies", "theology research", "agriculture research", 
    "law journal", "Nigeria research", "academic publishing", "open access",
    "ISSN 2789-1234", "didee publications", "scholarly communication"
  ],
  authors: [{ name: "Didee Publications Editorial Board", url: siteConfig.url }],
  creator: siteConfig.publisher,
  publisher: siteConfig.publisher,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} - International Peer-Reviewed Journal`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Didee Publications - Academic Research Journal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - International Peer-Reviewed Journal`,
    description: siteConfig.description,
    site: siteConfig.social.twitter,
    creator: siteConfig.social.twitter,
    images: ['/images/hero-bg.jpg'],
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      'application/rss+xml': `${siteConfig.url}/feed.xml`,
    },
  },
  category: 'Academic Publishing',
  classification: 'Academic Journal',
  other: {
    // Dublin Core metadata
    "DC.Title": siteConfig.name,
    "DC.Creator": "Didee Publications Editorial Board",
    "DC.Subject": "Academic Research, Peer Review, Scholarly Publishing, Psychology, Education, Philosophy",
    "DC.Description": siteConfig.description,
    "DC.Publisher": siteConfig.publisher,
    "DC.Type": "Text",
    "DC.Format": "text/html",
    "DC.Language": "en",
    "DC.Rights": `Copyright ${new Date().getFullYear()} ${siteConfig.publisher}`,
    "DC.Date": new Date().toISOString().split('T')[0],
    
    // Google Scholar metadata
    "citation_journal_title": "Didee Publications International Journal",
    "citation_issn": siteConfig.issn,
    "citation_publisher": siteConfig.publisher,
    
    // Additional SEO metadata
    "theme-color": "#1e40af",
    "msapplication-TileColor": "#1e40af",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
  verification: {
    google: "AIqS0o01saB52brCYz1wNGYEdIFSYhG8fIiyJsHvGNk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteStructuredData())
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationStructuredData())
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Periodical",
              "@id": `${siteConfig.url}/#periodical`,
              "name": "Didee Publications International Journal",
              "issn": siteConfig.issn,
              "publisher": {
                "@type": "Organization",
                "name": siteConfig.publisher,
                "url": siteConfig.url,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${siteConfig.url}/Black Elegant Modern Name Initials Monogram Logo.png`
                }
              },
              "description": siteConfig.description,
              "url": siteConfig.url,
              "sameAs": [
                `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`,
                `https://facebook.com/${siteConfig.social.facebook}`,
                `https://linkedin.com/${siteConfig.social.linkedin}`
              ],
              "about": [
                "Psychology", "Education", "Philosophy", "Media Studies", 
                "Theology", "Agriculture", "Law", "Academic Research"
              ]
            })
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Typography */}
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/Black Elegant Modern Name Initials Monogram Logo.png" />
        
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Crimson Text', serif;
          }
        `}</style>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
