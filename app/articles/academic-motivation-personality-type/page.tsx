import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import AcademicMotivationContent from './AcademicMotivationContent';

export const metadata: Metadata = {
  title: "Academic Motivation, Personality Type, and Academic Self-Efficacy as Predictors of Library Usage Frequency | Didee Publications",
  description: "Study on academic motivation, personality type, and academic self-efficacy as predictors of library usage frequency among in-school adolescents in Ibadan, Nigeria."
};

export default function AcademicMotivationArticle() {
  const article = {
    title: "Academic Motivation, Personality Type, and Academic Self-Efficacy as Predictors of Library Usage Frequency among In-School Adolescents in Public Secondary Schools in Ibadan, Oyo State, Nigeria",
    authors: [
      { name: "Sunday Omoniyi Obiyinka", affiliation: "Department of Library, Archival and Information Studies, University of Ibadan, Nigeria", email: "" },
      { name: "Olukemi Yetunde Akinyemi", affiliation: "Department of Counselling and Human Development Studies, University of Ibadan, Nigeria", email: "" }
    ],
    abstract: "This study investigated academic motivation, personality type, and academic self-efficacy as predictors of library usage frequency among in-school adolescents in public secondary schools in Ibadan, Oyo State, Nigeria. A descriptive survey research design of the correlational type was adopted with a sample of 350 students selected using multi-stage sampling. Data were collected using the Academic Motivation Scale, Big Five Inventory, and Academic Self-Efficacy Scale. Findings revealed significant positive relationships between academic motivation (r = .48), personality type (r = .31), academic self-efficacy (r = .52), and library usage frequency. The predictor variables jointly accounted for 41% of the variance in library usage frequency (R = .64, R² = .41). Academic self-efficacy emerged as the strongest predictor (β = .36), followed by academic motivation (β = .32) and personality type (β = .19). The study concluded that psychological factors significantly predict library usage frequency among in-school adolescents.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "237-249",
    keywords: ["Academic Motivation", "Personality Type", "Academic Self-Efficacy", "Library Usage Frequency", "Adolescents"],
    pdfUrl: "/articles/academic-motivation-personality-type.pdf"
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
                <div key={index} className="text-gray-700 mb-2">
                  <strong>{author.name}</strong><br/>
                  <span className="text-sm italic">{author.affiliation}</span>
                  {author.email && (
                    <>
                      <br/>
                      <a href={`mailto:${author.email}`} className="text-blue-600 hover:underline text-sm">{author.email}</a>
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
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
              <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center bg-amber-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-amber-700 transition">
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
          
          <div className="prose max-w-none">
            <AcademicMotivationContent />
          </div>
        </article>
      </div>
    </div>
  );
}
