import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import EmergingTechContent from './EmergingTechContent';

export const metadata: Metadata = {
  title: "Integrating Emerging Technologies into Guidance and Counselling for Sustainable Development in Public Universities in South-East, Nigeria | Didee Publications",
  description: "Study determining the extent to which emerging technologies are integrated into guidance and counselling for sustainable development in public universities in South-East, Nigeria."
};

export default function EmergingTechArticle() {
  const article = {
    title: "Integrating Emerging Technologies into Guidance and Counselling for Sustainable Development in Public Universities in South-East, Nigeria",
    authors: [
      { name: "Asogwa, Solomon Chinago (Ph.D)", affiliation: "Department of Guidance and Counselling, Enugu State University of Science and Technology, Agbani, Enugu State, Nigeria", email: "asogwa.solomon@esut.edu.ng" }
    ],
    abstract: "This study determined the extent to which emerging technologies are integrated into guidance and counselling for sustainable development in public universities in South-East, Nigeria. Using a descriptive survey research design, all 107 guidance counselling lecturers (63 female and 44 male) in seven public universities in South-East, Nigeria were studied. A 21-item questionnaire with overall reliability coefficient of 0.57 was used for data collection. Mean, standard deviation, and t-test at 0.05 significance level were used for analysis. Results showed that Machine Learning (ML) was integrated into guidance and counselling to a low extent (cluster mean = 1.76), and Live Streaming was also integrated to a low extent (cluster mean = 1.85). No significant difference was found between male and female guidance counsellors' mean scores on either variable. The study recommends that government and university administrators should adopt Machine Learning and Live Streaming for sustainable development of public universities in South-East, Nigeria.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "284-301",
    keywords: ["Emerging Technologies", "Guidance and Counselling", "Sustainable Development", "Machine Learning", "Live Streaming"],
    pdfUrl: "/articles/integrating-emerging-technologies.pdf"
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
            <EmergingTechContent />
          </div>
        </article>
      </div>
    </div>
  );
}
