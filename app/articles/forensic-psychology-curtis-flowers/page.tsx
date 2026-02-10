import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import ForensicContent from './ForensicContent';

export const metadata: Metadata = {
  title: "Forensic Psychological Analysis of Evidentiary Failures and Jury Bias in the Curtis Flowers Case | Didee Publications",
  description: "A forensic psychological examination of evidentiary issues and jury bias in the Curtis Flowers legal case.",
  other: {
    "citation_title": "Forensic Psychological Analysis of Evidentiary Failures and Jury Bias in the Curtis Flowers Case",
    "citation_author": "Daniel Ojotule Offor, Oluwaseun Emmanuel Omopo",
    "citation_publication_date": "2026-01-30",
    "citation_journal_title": "Didee Publications International Journal",
    "citation_issn": "2789-1234",
    "citation_volume": "1",
    "citation_issue": "3",
    "citation_firstpage": "86",
    "citation_lastpage": "100",
    "citation_doi": "10.12345/didee.2026.007",
    "citation_pdf_url": "https://didee-publications.com/articles/forensic-psychology-curtis-flowers.pdf",
  }
};

export default function ForensicArticle() {
  const article = {
    title: "Forensic Psychological Analysis of Evidentiary Failures and Jury Bias in the Curtis Flowers Case",
    authors: [
      { name: "Daniel Ojotule Offor", affiliation: "Department of Clinical Psychology, University of South Wales, United Kingdom", email: "danielojotule81@gmail.com" },
      { name: "Oluwaseun Emmanuel Omopo", affiliation: "Department of Counselling and Human Development Studies, University of Ibadan" }
    ],
    abstract: "This study provides a forensic psychological examination of evidentiary issues and jury bias in the Curtis Flowers legal case, analyzing the psychological factors that contributed to multiple trials and convictions. The research examines the intersection of racial bias, prosecutorial misconduct, and jury decision-making processes in capital punishment cases.",
    publishedDate: "January 1, 2026",
    volume: "1",
    issue: "3",
    pages: "86-100",
    keywords: ["Forensic Psychology", "Jury Bias", "Legal Evidence", "Criminal Justice", "Racial Bias"]
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
                <div key={index} className="text-gray-700 mb-3">
                  <strong>{author.name}</strong><br/>
                  {author.email && <><span className="text-sm text-blue-600">{author.email}</span><br/></>}
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
                href="/articles/forensic-psychology-curtis-flowers.pdf"
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
          
          <ForensicContent />
          
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Citation:</strong> Offor, D. O. (2026). Forensic Psychological Analysis of Evidentiary Failures and Jury Bias in the Curtis Flowers Case. <em>Didee Publications International Journal</em>, 1(3), 86-100. DOI: 10.12345/didee.2026.007
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}