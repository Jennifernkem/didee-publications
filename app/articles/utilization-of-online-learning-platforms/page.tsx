import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import OnlineLearningContent from './OnlineLearningContent';

export const metadata: Metadata = {
  title: "Utilization of Online Learning Platforms for Effective Instructional Delivery by University Business Educators in South-East, Nigeria | Didee Publications",
  description: "Study examining the extent of utilization of online learning platforms (Twitter and Instagram) by Business Educators in universities in South-East, Nigeria for effective instructional delivery."
};

export default function OnlineLearningArticle() {
  const article = {
    title: "Utilization of Online Learning Platforms for Effective Instructional Delivery by University Business Educators in South-East, Nigeria",
    authors: [
      { name: "Dr Felicia O. Nwokike", affiliation: "Department of Vocational, Technical and Entrepreneurship Education, Enugu State University of Science and Technology, Enugu State", email: "" },
      { name: "Anyanwuocha Christian Tochukwu", affiliation: "Department of Vocational, Technical and Entrepreneurship Education, Enugu State University of Science and Technology, Enugu State", email: "" }
    ],
    abstract: "This study examined the extent of utilization of online learning platforms (specifically Twitter and Instagram) by Business Educators in universities in South-East, Nigeria for effective instructional delivery. Using a survey research design, all 95 Business Educators in eight public universities offering Business Education programme were studied. A four-point rating scale questionnaire with 23 items was used for data collection. Mean, standard deviation, and t-test at 0.05 significance level were used for analysis. The study found that the extent of utilization of Twitter (grand mean = 2.04) and Instagram (grand mean = 2.19) by Business Educators was low. No significant difference existed between male and female Business Educators on the extent of utilization of either platform. The study recommends that government and school authorities should invest in robust digital infrastructure to provide technological resources and ensure reliable internet access in universities to enhance utilization of online platforms for effective instructional delivery.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "477-493",
    keywords: ["Utilization", "Online Platforms", "Instructional Delivery", "Twitter", "Instagram", "Business Educators"],
    pdfUrl: "/articles/utilization-of-online-learning-platforms.pdf"
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
            <OnlineLearningContent />
          </div>
        </article>
      </div>
    </div>
  );
}
