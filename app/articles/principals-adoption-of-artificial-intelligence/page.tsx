import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import PrincipalsAIContent from './PrincipalsAIContent';

export const metadata: Metadata = {
  title: "Principals Adoption of Artificial Intelligence (AI) for Human Resource Management in Secondary Schools in Enugu State | Didee Publications",
  description: "Study examining principals' adoption of Artificial Intelligence for human resource management in secondary schools in Enugu State, Nigeria."
};

export default function PrincipalsAIArticle() {
  const article = {
    title: "Principals Adoption of Artificial Intelligence (AI) for Human Resource Management in Secondary Schools in Enugu State",
    authors: [
      { name: "Umeh, Maureen Uzochukwu", affiliation: "Department of Educational Management, Faculty of Education, Peaceland University, Enugu, Enugu State, Nigeria", email: "maureenu62@gmail.com" },
      { name: "Dr. Columbus Okey Ogbuabor", affiliation: "Department of Educational Foundations and Administration, Federal College of Education, Eha-Amufu, Enugu State, Nigeria", email: "" }
    ],
    abstract: "This study examined principals' adoption of Artificial Intelligence (AI) for human resource management in secondary schools in Enugu State. Using a descriptive survey research design, all 295 principals (186 male and 109 female) in Enugu State public secondary schools were studied through census sampling. A structured questionnaire with overall reliability of 0.76 was used for data collection. Mean, standard deviation, and z-test at 0.05 significance level were used for analysis. Findings showed that the extent of adoption of AI for human resources data management by principals is low (cluster mean = 2.30), while the extent of adoption of AI for effective communication among human resources is high (cluster mean = 2.70). No significant difference was found between male and female principals on either variable. The study recommends that principals should adopt and integrate AI for data management and strengthen AI adoption for effective communication.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "441-456",
    keywords: ["Principal", "Artificial Intelligence", "Human Resource Management", "Secondary Schools", "Enugu State"],
    pdfUrl: "/articles/principals-adoption-of-artificial-intelligence.pdf"
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
            <PrincipalsAIContent />
          </div>
        </article>
      </div>
    </div>
  );
}
