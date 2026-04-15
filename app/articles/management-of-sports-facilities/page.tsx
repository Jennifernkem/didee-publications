import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import SportsFacilitiesContent from './SportsFacilitiesContent';

export const metadata: Metadata = {
  title: "Management of Sports Facilities in Secondary Schools in Enugu State, Nigeria | Didee Publications",
  description: "Study on the extent of management of sports facilities in secondary schools in Enugu State, Nigeria."
};

export default function SportsFacilitiesArticle() {
  const article = {
    title: "Management of Sports Facilities in Secondary Schools in Enugu State, Nigeria",
    authors: [
      { name: "Nwodo, Emile Chika", affiliation: "Department of Human Kinetics and Health Education, Faculty of Education, Enugu State University of Science and Technology", email: "emilechika@gmail.com" }
    ],
    abstract: "This study focused on the management of sports facilities in secondary schools in Enugu State. Using a descriptive survey design, 173 physical education teachers in public secondary schools were sampled through multi-stage sampling. A structured questionnaire with reliability coefficient of 0.89 was used for data collection. Mean and standard deviation were used to answer the research question while t-test was used to test two null hypotheses at 0.05 significance level. Findings showed that the extent of management of sports facilities in secondary schools in Enugu State was low overall (grand mean = 2.42), with pitches for volleyball, basketball, handball, and sports field for athletics managed to a great extent, while pitches for football, hockey, recreational activities hall, gymnasium, sports/exercise laboratory, and courts for squash, tennis, and badminton were managed to a low extent. No significant difference was found in the opinions of male and female physical education teachers, or between urban and rural teachers, regarding management of sports facilities.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "391-409",
    keywords: ["Management", "Sports Facilities", "Secondary Schools", "Physical Education", "Enugu State"],
    pdfUrl: "/articles/management-of-sports-facilities.pdf"
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
            <SportsFacilitiesContent />
          </div>
        </article>
      </div>
    </div>
  );
}
