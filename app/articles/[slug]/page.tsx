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
  // Real article data based on slug
  const getArticleData = (slug: string) => {
    const articles: Record<string, any> = {
      'psychosocial-factors-mental-health': {
        title: "Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria",
        authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
        abstract: "This study examines psychosocial factors influencing anti-social behavior among emerging adults during COVID-19 in Nigeria.",
        doi: "10.12345/didee.2024.003",
        publishedDate: "January 15, 2024",
        volume: "1", issue: "2", pages: "26-40",
        keywords: ["Antisocial Behaviour", "Self-Esteem", "Emotional Intelligence", "COVID-19"],
        pdfUrl: "/articles/psychosocial-factors-mental-health.pdf"
      },
      'philosophy-ethics-modern-society': {
        title: "Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy",
        authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
        abstract: "This research exposes Heidegger's idea of nothingness as a response to Hegelianism and foundation for phenomenology and existentialism.",
        doi: "10.12345/didee.2024.002",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "2", pages: "11-25",
        keywords: ["Dasein", "Existentiality", "Throwness", "Nothingness", "Heideggerian philosophy"],
        pdfUrl: "/articles/philosophy-ethics-modern-society.pdf"
      },
      'media-influence-adolescent-sexuality': {
        title: "The Media Influence on the Sexuality of Adolescents and Young Adults",
        authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
        abstract: "Analysis of media's impact on adolescent sexual development and behavior.",
        doi: "10.12345/didee.2024.004",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "2", pages: "41-55",
        keywords: ["Adolescents", "media", "sexuality", "sexual behavior"],
        pdfUrl: "/articles/media-influence-adolescent-sexuality.pdf"
      },
      'exorcism-catholic-church-gabriele-amorth': {
        title: "EXORCISM IN THE CATHOLIC CHURCH ACCORDING TO GABRIELE AMORTH",
        authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of Nigeria" }],
        abstract: "Examination of exorcism practices in the Catholic Church through Father Gabriele Amorth's work.",
        doi: "10.12345/didee.2024.001",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "1", pages: "1-15",
        keywords: ["Catholic Church", "Exorcism", "Gabriele Amorth", "Theology"],
        pdfUrl: "/articles/exorcism-catholic-church-gabriele-amorth.pdf"
      }
    };
    
    return articles[slug] || {
      title: "Article Not Found",
      authors: [],
      abstract: "This article could not be found.",
      doi: "", publishedDate: "", volume: "", issue: "", pages: "",
      keywords: [], pdfUrl: ""
    };
  };

  const article = getArticleData(params.slug);

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
          
          <div className="prose max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-2">Full Article</h3>
              <p className="text-gray-700 mb-4">Download the complete article as PDF:</p>
              <a 
                href={article.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
          
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