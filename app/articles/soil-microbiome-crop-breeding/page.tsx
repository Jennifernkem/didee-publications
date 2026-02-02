import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import SoilMicrobiomeContent from './SoilMicrobiomeContent';

export const metadata: Metadata = {
  title: "Integrating soil microbiome insights into crop breeding for enhanced stress resilience | Didee Publications",
  description: "Research on integrating soil microbiome knowledge into modern crop breeding techniques for sustainable agriculture.",
  other: {
    "citation_title": "Integrating soil microbiome insights into crop breeding for enhanced stress resilience",
    "citation_author": "Moses O. Onubi, Inioluwa O. Fasina, Kehinde Isa, Tolulope D. David, Oluwafunmilayo A. Adewuyi, Rasheedat O. Oguntola, Adeola S. Ogunsanmi, Anuoluwapo J. Olabisi, Winner N. Bakati",
    "citation_publication_date": "2026-01-30",
    "citation_journal_title": "Didee Publications International Journal",
    "citation_issn": "2789-1234",
    "citation_volume": "1",
    "citation_issue": "3",
    "citation_firstpage": "71",
    "citation_lastpage": "85",
    "citation_doi": "10.12345/didee.2026.006",
    "citation_pdf_url": "https://didee-publications.com/articles/soil-microbiome-crop-breeding.pdf",
  }
};

export default function SoilMicrobiomeArticle() {
  const article = {
    title: "Integrating soil microbiome insights into crop breeding for enhanced stress resilience",
    authors: [
      { name: "Moses O. Onubi", affiliation: "Department of Agronomy, University of Ibadan, Ibadan, Oyo State, 200284, Nigeria" },
      { name: "Inioluwa O. Fasina", affiliation: "Department of Agronomy, University of Ibadan, Ibadan, Oyo State, 200284, Nigeria" },
      { name: "Kehinde Isa", affiliation: "Department of Crop Protection and Biology, Ibadan, Oyo state, 200284, Nigeria" },
      { name: "Tolulope D. David", affiliation: "Department of Agricultural Extension, Ibadan, Oyo state, 200284, Nigeria" },
      { name: "Oluwafunmilayo A. Adewuyi", affiliation: "Department of Agronomy, University of Ibadan, Ibadan, Oyo State, 200284, Nigeria" },
      { name: "Rasheedat O. Oguntola", affiliation: "Department of Agronomy, University of Ibadan, Ibadan, Oyo State, 200284, Nigeria" },
      { name: "Adeola S. Ogunsanmi", affiliation: "Department of Agronomy, University of Ibadan, Ibadan, Oyo State, 200284, Nigeria" },
      { name: "Anuoluwapo J. Olabisi", affiliation: "Department of Agricultural Extension, Ibadan, Oyo state, 200284, Nigeria" },
      { name: "Winner N. Bakati", affiliation: "Department of Agronomy, University of Ibadan, Ibadan, Oyo State, 200284, Nigeria" }
    ],
    abstract: "This research explores the integration of soil microbiome knowledge into modern crop breeding techniques to enhance agricultural sustainability. The study examines how understanding soil microbial communities can inform breeding strategies that promote plant-microbe interactions, improve nutrient uptake, and increase crop resilience to environmental stresses.",
    doi: "10.12345/didee.2026.006",
    publishedDate: "January 1, 2026",
    volume: "1",
    issue: "3",
    pages: "71-85",
    keywords: ["Soil Microbiome", "Crop Breeding", "Agricultural Sustainability", "Plant-Microbe Interactions", "Biotechnology"]
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
                href="/articles/soil-microbiome-crop-breeding.pdf"
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
          
          <SoilMicrobiomeContent />
          
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Citation:</strong> Onubi, M. O., et al. (2026). Integrating soil microbiome insights into crop breeding for enhanced stress resilience. <em>Didee Publications International Journal</em>, 1(3), 71-85. DOI: 10.12345/didee.2026.006
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}