export interface ArticleData {
  title: string;
  authors: Array<{ name: string; affiliation: string }>;
  abstract: string;
  doi: string;
  publishedDate: string;
  volume: string;
  issue: string;
  pages: string;
  keywords: string[];
  pdfUrl: string;
  domain?: string;
}

export const siteConfig = {
  name: "Didee Publications",
  description: "International peer-reviewed journal publishing high-quality research across multiple disciplines including Psychology, Education, Philosophy, Media Studies, Theology, Agriculture, and Law.",
  url: "https://didee-publications.com",
  issn: "2789-1234",
  publisher: "Didee Publications",
  email: "editor@didee-publications.com",
  social: {
    twitter: "@didee_publications",
    facebook: "didee.publications",
    linkedin: "company/didee-publications"
  }
};

export function generateArticleStructuredData(article: ArticleData, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": article.title,
    "name": article.title,
    "author": article.authors.map(author => ({
      "@type": "Person",
      "name": author.name,
      "affiliation": {
        "@type": "Organization",
        "name": author.affiliation
      }
    })),
    "datePublished": article.publishedDate,
    "dateModified": article.publishedDate,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.publisher,
      "url": siteConfig.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/Black Elegant Modern Name Initials Monogram Logo.png`
      }
    },
    "isPartOf": {
      "@type": "Periodical",
      "@id": `${siteConfig.url}/#periodical`,
      "name": "Didee Publications International Journal",
      "issn": siteConfig.issn,
      "publisher": {
        "@type": "Organization",
        "name": siteConfig.publisher
      }
    },
    "identifier": [
      {
        "@type": "PropertyValue",
        "name": "DOI",
        "value": article.doi
      }
    ],
    "abstract": article.abstract,
    "keywords": article.keywords.join(", "),
    "url": `${siteConfig.url}/articles/${slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/articles/${slug}`
    },
    "image": `${siteConfig.url}/images/Individual-article.jpg`,
    "inLanguage": "en-US",
    "copyrightHolder": {
      "@type": "Organization",
      "name": siteConfig.publisher
    },
    "copyrightYear": new Date(article.publishedDate).getFullYear(),
    "license": `${siteConfig.url}/editorial-policies#copyright`,
    "citation": article.authors.map(a => a.name).join(", ") + 
               ` (${new Date(article.publishedDate).getFullYear()}). ` +
               `${article.title}. Didee Publications International Journal, ` +
               `${article.volume}(${article.issue}), ${article.pages}. DOI: ${article.doi}`
  };
}

export function generateBreadcrumbStructuredData(items: Array<{name: string, url: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.publisher,
      "url": siteConfig.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/Black Elegant Modern Name Initials Monogram Logo.png`
      },
      "sameAs": [
        `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`,
        `https://facebook.com/${siteConfig.social.facebook}`,
        `https://linkedin.com/${siteConfig.social.linkedin}`
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/articles?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.publisher,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/Black Elegant Modern Name Initials Monogram Logo.png`,
    "description": siteConfig.description,
    "email": siteConfig.email,
    "sameAs": [
      `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`,
      `https://facebook.com/${siteConfig.social.facebook}`,
      `https://linkedin.com/${siteConfig.social.linkedin}`
    ],
    "publishingPrinciples": `${siteConfig.url}/editorial-policies`,
    "knowsAbout": [
      "Academic Publishing",
      "Peer Review",
      "Scholarly Research",
      "Psychology",
      "Education",
      "Philosophy",
      "Media Studies",
      "Theology",
      "Agriculture",
      "Law"
    ]
  };
}