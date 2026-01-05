import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import PsychosocialContent from './PsychosocialContent';

export const metadata: Metadata = {
  title: "Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria | Didee Publications",
  description: "An analysis of psychosocial determinants affecting anti-social behaviour among emerging adults during the COVID-19 pandemic in Nigeria.",
  other: {
    "citation_title": "Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria",
    "citation_author": "Daniel Ojotule Offor",
    "citation_publication_date": "2024-01-25",
    "citation_journal_title": "Didee Publications International Journal",
    "citation_issn": "2789-1234",
    "citation_volume": "1",
    "citation_issue": "2",
    "citation_firstpage": "26",
    "citation_lastpage": "40",
    "citation_doi": "10.12345/didee.2024.003",
    "citation_pdf_url": "https://didee-publications.com/articles/psychosocial-factors-mental-health.pdf",
  }
};

export default function PsychosocialArticle() {
  const article = {
    title: "Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria",
    authors: [
      { name: "Daniel Ojotule Offor", affiliation: "Clinical Psychology Department, University of South Wales, United Kingdom", email: "danielojotule81@gmail.com" }
    ],
    abstract: "Antisocial behaviours distort the normal activities within the school, work and societal settings by reducing the level of students' attention and concentration, makes organizational goals unattainable by reducing other workers' commitment to duty, increases the tendency for grooming youths that become thugs, armed robbers and bully of gullible others in the society. This study adopted descriptive survey design and data was collected using Google forms questionnaire. Four research hypotheses were tested at p<.05.",
    doi: "10.12345/didee.2024.003",
    publishedDate: "January 1, 2026",
    volume: "1",
    issue: "2",
    pages: "26-40",
    keywords: ["Antisocial Behaviour", "Self-Esteem", "Emotional Intelligence", "Parental Support", "Peer Influence"]
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
    href="/articles/psychosocial-factors-mental-health.pdf"
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
          
          <PsychosocialContent />
          
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Citation:</strong> Offor, D. O. (2024). Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria. <em>Didee Publications International Journal</em>, 1(2), 26-40. DOI: 10.12345/didee.2024.003
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}