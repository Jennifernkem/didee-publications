import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Didee Publications - International Peer-Reviewed Journal",
  description: "International peer-reviewed journal publishing high-quality research across multiple disciplines. ISSN: 2789-1234 (Online)",
  keywords: "peer review, academic journal, research publication, scholarly articles, international journal",
  authors: [{ name: "Didee Publications Editorial Board" }],
  publisher: "Didee Publications",
  robots: "index, follow",
  openGraph: {
    title: "Didee Publications - International Journal",
    description: "International peer-reviewed journal for scholarly research",
    type: "website",
    locale: "en_US",
    
  },
  other: {
    "DC.Title": "Didee Publications",
    "DC.Creator": "Didee Publications Editorial Board",
    "DC.Subject": "Academic Research, Peer Review, Scholarly Publishing",
    "DC.Description": "International peer-reviewed journal publishing high-quality research",
    "DC.Publisher": "Didee Publications",
    "DC.Type": "Text",
    "DC.Format": "text/html",
    "DC.Language": "en",
    "DC.Rights": "Copyright Didee Publications",
    "citation_journal_title": "Didee Publications International Journal",
    "citation_issn": "2789-1234",
    "citation_publisher": "Didee Publications",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Periodical",
              "name": "Didee Publications International Journal",
              "issn": "2789-1234",
              "publisher": {
                "@type": "Organization",
                "name": "Didee Publications",
                "url": "https://didee-publications.com"
              },
              "description": "International peer-reviewed journal publishing high-quality research across multiple disciplines",
              "url": "https://didee-publications.com",
              "sameAs": [
                "https://www.issn.org/services/online-services/access-to-the-ltwa/"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
