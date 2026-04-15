import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import EnvironmentalSanitationContent from './EnvironmentalSanitationContent';

export const metadata: Metadata = {
  title: "Environmental Sanitation Activities Utilized in Resolving Environmental Issues for Sustainable Community Development in South East States, Nigeria | Didee Publications",
  description: "Study determining the extent to which environmental sanitation activities are utilized in resolving environmental issues for sustainable community development in South East States, Nigeria."
};

export default function EnvironmentalSanitationArticle() {
  const article = {
    title: "Environmental Sanitation Activities Utilized in Resolving Environmental Issues for Sustainable Community Development in South East States, Nigeria",
    authors: [
      { name: "Dr Michael Emeka Ayogu", affiliation: "Department of Continuing Education and Development Studies, Faculty of Education, Enugu State University of Science and Technology, Agbani, Enugu State, Nigeria", email: "mchlayogu@gmail.com" }
    ],
    abstract: "This study determined the extent to which environmental sanitation activities are utilized in resolving environmental issues for sustainable community development in South East States, Nigeria. Using a descriptive survey research design, 420 respondents (297 male and 123 female members of community project management committees) from 942 communities were sampled. A 9-item structured questionnaire with Cronbach Alpha reliability coefficient of 0.83 was used for data collection. Data were analyzed using mean, standard deviation, and t-test at 0.05 significance level. Results revealed that sanitation activities were utilized to a high extent in resolving environmental issues for sustainable community development (grand mean = 3.27). No significant difference was found between male and female members' ratings (t-cal = 0.23, t-crit = ±1.96). The study recommends that community project management committees ensure proper environmental sanitation activities in target communities, and that government encourage and support these committees to embark on more sustainable community development activities.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "269-284",
    keywords: ["Environmental Sanitation", "Community Development", "Environmental Issues", "South East Nigeria", "Sustainable Development"],
    pdfUrl: "/articles/environmental-sanitation.pdf"
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
            <EnvironmentalSanitationContent />
          </div>
        </article>
      </div>
    </div>
  );
}
