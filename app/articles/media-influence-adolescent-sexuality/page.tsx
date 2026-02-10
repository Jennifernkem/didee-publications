import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import MediaInfluenceContent from './MediaInfluenceContent';

export const metadata: Metadata = {
  title: "The Media Influence on the Sexuality of Adolescents and Young Adults | Didee Publications",
  description: "An examination of how media exposure affects adolescent and young adult sexual behavior and attitudes in contemporary society.",
  other: {
    "citation_title": "The Media Influence on the Sexuality of Adolescents and Young Adults",
    "citation_author": "Daniel Ojotule Offor",
    "citation_publication_date": "2026-01-30",
    "citation_journal_title": "Didee Publications International Journal",
    "citation_issn": "2789-1234",
    "citation_volume": "1",
    "citation_issue": "2",
    "citation_firstpage": "41",
    "citation_lastpage": "55",
    "citation_doi": "10.12345/didee.2026.004",
    "citation_pdf_url": "https://didee-publications.com/articles/media-influence-adolescent-sexuality.pdf",
  }
};

export default function MediaInfluenceArticle() {
  const article = {
    title: "The Media Influence on the Sexuality of Adolescents and Young Adults",
    authors: [
      { name: "Daniel Ojotule Offor", affiliation: "Clinical Psychology Department, University of South Wales, United Kingdom", email: "danielojotule81@gmail.com" }
    ],
    abstract: "Sexuality is critical to the development of the adolescents and young adults as they exhibit certain sexual behaviors which tend towards expression of their sexual feelings. The negative effect of the media on sexuality is enormous that few studies have investigated the dynamics the media is taking to affect the adolescents and young adults. The study aims to examine the effects of media on the sexuality of adolescents and young adults as well as to investigate ways of promoting a positive media influence on adolescents' and young adults' sexuality.",
    publishedDate: "January 1, 2026",
    volume: "1",
    issue: "2",
    pages: "41-55",
    keywords: ["Adolescents", "young adults", "media", "sexuality", "sexual behavior", "digital media"]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
            
            <div className="mb-4">
              {article.authors.map((author, index) => (
                <div key={index} className="text-gray-700">
                  <strong>{author.name}</strong><br/>
                  <span className="text-sm">{author.email}</span><br/>
                  <span className="text-sm italic">{author.affiliation}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><strong>Published:</strong> {article.publishedDate}</div>
                <div><strong>Volume:</strong> {article.volume}, Issue: {article.issue}</div>
                <div><strong>Pages:</strong> {article.pages}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Abstract</h3>
              <p className="text-gray-700">{article.abstract}</p>
            </div>
            <div className="mb-8">
  <a
    href="/articles/media-influence-adolescent-sexuality.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center bg-amber-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-amber-700 transition"
  >
    Download Full Article (PDF)
  </a>
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
          
          <MediaInfluenceContent />
          
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Citation:</strong> Offor, D. O. (2026). The Media Influence on the Sexuality of Adolescents and Young Adults. <em>Didee Publications International Journal</em>, 1(2), 41-55. DOI: 10.12345/didee.2026.004
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}