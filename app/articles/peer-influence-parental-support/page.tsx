import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import PeerInfluenceContent from './PeerInfluenceContent';

export const metadata: Metadata = {
  title: "Peer Influence and Parental Support as Determinants of Anti-Social Behavior among Undergraduate Students in Selected Nigerian Universities | Didee Publications",
  description: "Study examining peer influence and parental support factors in anti-social behavior among Nigerian university students.",
  other: {
    "citation_title": "Peer Influence and Parental Support as Determinants of Anti-Social Behavior among Undergraduate Students in Selected Nigerian Universities",
    "citation_author": "Daniel Ojotule Offor",
    "citation_publication_date": "2024-01-30",
    "citation_journal_title": "Didee Publications International Journal",
    "citation_issn": "2789-1234",
    "citation_volume": "1",
    "citation_issue": "3",
    "citation_firstpage": "56",
    "citation_lastpage": "70",
    "citation_doi": "10.12345/didee.2024.005",
    "citation_pdf_url": "https://didee-publications.com/articles/peer-influence-parental-support.pdf",
  }
};

export default function PeerInfluenceArticle() {
  const article = {
    title: "Peer Influence and Parental Support as Determinants of Anti-Social Behavior among Undergraduate Students in Selected Nigerian Universities",
    authors: [
      { name: "Daniel Ojotule Offor", affiliation: "Clinical Psychology Department, University of South Wales, United Kingdom", email: "danielojotule81@gmail.com" }
    ],
    abstract: "This study examines the relationship between peer influence, parental support, and anti-social behavior among undergraduate students in selected Nigerian universities. Using a quantitative research approach, the study investigates how these psychosocial factors contribute to the development and maintenance of anti-social behaviors in the university environment.",
    doi: "10.12345/didee.2024.005",
    publishedDate: "January 1, 2026",
    volume: "1",
    issue: "3",
    pages: "56-70",
    keywords: ["Peer Influence", "Parental Support", "Anti-Social Behavior", "University Students", "Nigerian Universities"]
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
            
            <div className="mb-8">
              <a
                href="/articles/peer-influence-parental-support.pdf"
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
          
          <PeerInfluenceContent />
          
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Citation:</strong> Offor, D. O. (2024). Peer Influence and Parental Support as Determinants of Anti-Social Behavior among Undergraduate Students in Selected Nigerian Universities. <em>Didee Publications International Journal</em>, 1(3), 56-70. DOI: 10.12345/didee.2024.005
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}