import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import ConstraintsContent from './ConstraintsContent';

export const metadata: Metadata = {
  title: "Comparative Study of Constraints to Administrative Effectiveness of Public and Private Secondary Schools in Enugu State | Didee Publications",
  description: "Study investigating constraints to administrative effectiveness of public and private secondary school principals in Enugu State, Nigeria."
};

export default function ConstraintsArticle() {
  const article = {
    title: "Comparative Study of Constraints to Administrative Effectiveness of Public and Private Secondary Schools in Enugu State",
    authors: [
      { name: "Dr. Chinedu L. Okafor", affiliation: "", email: "" },
      { name: "Nwosuobieogu Donatus Ikenna", affiliation: "Enugu State University of Science and Technology", email: "nwosuobieogu.ikenna@esut.edu.ng" }
    ],
    abstract: "This study investigated constraints to administrative effectiveness of public and private secondary schools in Enugu State. Using a descriptive survey research design, 61 respondents (10% of the population of 708 principals) were sampled using proportionate stratified random sampling. Data were collected using a structured questionnaire and analyzed using mean, standard deviation, and t-test at 0.05 significance level. Results revealed that to a great extent, poor planning of school activities and parental influence constitute constraints to administrative effectiveness of public and private secondary school principals. It was recommended that every school administrator should sensitize their staff on the need for proper planning before executing any function within the school.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "456-477",
    keywords: ["Administrative Effectiveness", "Secondary School Principals", "Poor Planning", "Parental Influence", "Enugu State"],
    pdfUrl: "/articles/comparative-study-of-constraints.pdf"
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
                  {author.affiliation && <span className="text-sm italic">{author.affiliation}</span>}
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
            <ConstraintsContent />
          </div>
        </article>
      </div>
    </div>
  );
}
