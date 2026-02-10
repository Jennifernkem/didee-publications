import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import ExorcismContent from './ExorcismContent';

export const metadata: Metadata = {
  title: "Exorcism in the Catholic Church According to Gabriele Amorth | Didee Publications",
  description: "An examination of the practice of exorcism in the Catholic Church through Father Gabriele Amorth's extensive work and teachings.",
  other: {
    "citation_title": "Exorcism in the Catholic Church According to Gabriele Amorth",
    "citation_author": "Daniel Ojotule Offor",
    "citation_publication_date": "2026-12-19",
    "citation_journal_title": "Didee Publications International Journal",
    "citation_issn": "2789-1234",
    "citation_volume": "1",
    "citation_issue": "1",
    "citation_firstpage": "1",
    "citation_lastpage": "15",
    "citation_doi": "10.12345/didee.2026.001",
    "citation_pdf_url": "https://didee-publications.com/articles/exorcism-catholic-church-gabriele-amorth.pdf",
  }
};

export default function ExorcismArticle() {
  const article = {
    title: 'Exorcism in the Catholic Church According to Gabriele Amorth',
    authors: [
      { name: 'Daniel Ojotule Offor', affiliation: 'Department of Clinical Psychology, University of South Wales, United Kingdom', email: 'danielojotule81@gmail.com', orcid: '0000-0000-0000-0000' }
    ],
    abstract: `This research examines the practice of exorcism in the Catholic Church through the lens of Father Gabriele Amorth's extensive work and teachings. Father Amorth, who served as the Chief Exorcist of Rome for over 30 years, provided significant insights into the Church's approach to demonic possession and spiritual warfare. This study explores the theological foundations, canonical procedures, and pastoral considerations involved in the Catholic Church's ministry of exorcism.`,
    publishedDate: 'January 5, 2026',
    volume: '1',
    issue: '1',
    pages: '1-15',
    keywords: ['Catholic Church', 'Exorcism', 'Gabriele Amorth', 'Demonic Possession', 'Pastoral Theology']
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
                  <span className="text-sm italic">{author.affiliation}</span><br/>
                  <span className="text-sm">ORCID: {author.orcid}</span>
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
    href="/articles/exorcism-catholic-church-gabriele-amorth.pdf"
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
          
          <ExorcismContent />
          
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Citation:</strong> Offor, D. O. (2026). Exorcism in the Catholic Church According to Gabriele Amorth. <em>Didee Publications International Journal</em>, 1(1), 1-15. DOI: 10.12345/didee.2026.001
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}