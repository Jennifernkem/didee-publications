import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import LibraryEnvironmentContent from './LibraryEnvironmentContent';

export const metadata: Metadata = {
  title: "Influence of Library Environment, Resource Availability, and Study Duration on Students' Mental Health | Didee Publications",
  description: "Study examining the influence of library environment, resource availability, and study duration on students' mental health with academic stress as a mediating variable among Polytechnic Ibadan students."
};

export default function LibraryEnvironmentArticle() {
  const article = {
    title: "Influence of Library Environment, Resource Availability, and Study Duration on Students' Mental Health: The Mediating Role of Academic Stress among Polytechnic Ibadan Students",
    authors: [
      { name: "Adedotun Aderele Araromi", affiliation: "Department of Counselling and Human Development Studies, University of Ibadan, Nigeria", email: "" },
      { name: "Daniel Offor Ojotule", affiliation: "Department of Clinical Psychology, University of South Wales, United Kingdom", email: "danieloffor048@gmail.com" },
      { name: "Sylvester Ehimare Umanhonlen", affiliation: "Department of Counselling and Human Development Studies, University of Ibadan, Nigeria", email: "" }
    ],
    abstract: "This study examined the influence of library environment, resource availability, and study duration on students' mental health, with academic stress serving as a mediating variable among students of The Polytechnic Ibadan. A descriptive survey research design was adopted, and data were collected using the Depression Anxiety Stress Scale (DASS-21), the Perceived Stress Scale (PSS), and structured questionnaires. Data were analyzed using descriptive statistics, Pearson correlation, multiple regression, and mediation analysis. Findings revealed that library environment (r = 0.45), resource availability (r = 0.50), and study duration (r = 0.43) all had significant positive relationships with students' mental health. The variables jointly accounted for 37.2% of the variance in mental health, with resource availability emerging as the strongest predictor (β = 0.36). Academic stress significantly mediated the relationship between the independent variables and mental health, indicating partial mediation. The study concluded that improving library conditions and reducing academic stress are essential for enhancing students' mental health.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "429-441",
    keywords: ["Library Environment", "Resource Availability", "Study Duration", "Academic Stress", "Mental Health", "Polytechnic Ibadan"],
    pdfUrl: "/articles/influence-of-library-environment.pdf"
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
            <LibraryEnvironmentContent />
          </div>
        </article>
      </div>
    </div>
  );
}
