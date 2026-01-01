import { Metadata } from 'next';

interface ArticleProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  // In production, fetch article data from database
  const article = {
    title: "Sample Research Article",
    authors: ["Dr. John Smith", "Prof. Jane Doe"],
    abstract: "This is a sample abstract for demonstration purposes.",
    doi: "10.12345/didee.2024.001",
    publishedDate: "2024-01-15",
    volume: "1",
    issue: "1",
    pages: "1-10"
  };

  return {
    title: `${article.title} | Didee Publications`,
    description: article.abstract,
    other: {
      "citation_title": article.title,
      "citation_author": article.authors.join("; "),
      "citation_publication_date": article.publishedDate,
      "citation_journal_title": "Didee Publications International Journal",
      "citation_issn": "2789-1234",
      "citation_volume": article.volume,
      "citation_issue": article.issue,
      "citation_firstpage": article.pages.split("-")[0],
      "citation_lastpage": article.pages.split("-")[1],
      "citation_doi": article.doi,
      "citation_pdf_url": `https://didee-publications.com/articles/${params.slug}.pdf`,
      "DC.Title": article.title,
      "DC.Creator": article.authors.join("; "),
      "DC.Date": article.publishedDate,
      "DC.Identifier": article.doi,
    }
  };
}

export default function ArticlePage({ params }: ArticleProps) {
  // Sample article data - replace with database fetch
  const article = {
    title: "Sample Research Article: Advanced Methodologies in Clinical Psychology",
    authors: [
      { name: "Dr. John Smith", affiliation: "University of Research" },
      { name: "Prof. Jane Doe", affiliation: "International Institute" }
    ],
    abstract: "This study presents advanced methodologies in clinical psychology research, demonstrating significant improvements in patient outcomes through innovative therapeutic approaches.",
    doi: "10.12345/didee.2024.001",
    publishedDate: "January 15, 2024",
    volume: "1",
    issue: "1",
    pages: "1-10",
    keywords: ["clinical psychology", "methodology", "therapeutic approaches", "patient outcomes"],
    content: `
      <h2>Introduction</h2>
      <p>This research addresses critical gaps in current clinical psychology methodologies...</p>
      
      <h2>Methodology</h2>
      <p>We employed a mixed-methods approach combining quantitative and qualitative analyses...</p>
      
      <h2>Results</h2>
      <p>Our findings demonstrate significant improvements in patient outcomes...</p>
      
      <h2>Conclusion</h2>
      <p>The proposed methodologies offer substantial benefits for clinical practice...</p>
    `
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": article.title,
            "author": article.authors.map(author => ({
              "@type": "Person",
              "name": author.name,
              "affiliation": author.affiliation
            })),
            "datePublished": "2024-01-15",
            "publisher": {
              "@type": "Organization",
              "name": "Didee Publications"
            },
            "isPartOf": {
              "@type": "Periodical",
              "name": "Didee Publications International Journal",
              "issn": "2789-1234"
            },
            "identifier": article.doi,
            "abstract": article.abstract
          })
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
            
            <div className="mb-4">
              {article.authors.map((author, index) => (
                <div key={index} className="text-gray-700">
                  <strong>{author.name}</strong> - {author.affiliation}
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><strong>DOI:</strong> {article.doi}</div>
                <div><strong>Published:</strong> {article.publishedDate}</div>
                <div><strong>Volume:</strong> {article.volume}, Issue: {article.issue}</div>
                <div><strong>Pages:</strong> {article.pages}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Abstract</h3>
              <p className="text-gray-700">{article.abstract}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((keyword, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </header>
          
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Citation:</strong> {article.authors.map(a => a.name).join(", ")} ({new Date(article.publishedDate).getFullYear()}). 
                {article.title}. <em>Didee Publications International Journal</em>, {article.volume}({article.issue}), {article.pages}. 
                DOI: {article.doi}
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}