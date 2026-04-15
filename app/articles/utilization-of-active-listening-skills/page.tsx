import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import ActiveListeningContent from './ActiveListeningContent';

export const metadata: Metadata = {
  title: "Utilization of Active Listening Skills for Enhancing Counselling Practice in Secondary Schools in Enugu State, Nigeria | Didee Publications",
  description: "Study determining the extent counsellors utilized active listening skills in enhancing counselling practice in secondary schools in Enugu State, Nigeria."
};

export default function ActiveListeningArticle() {
  const article = {
    title: "Utilization of Active Listening Skills for Enhancing Counselling Practice in Secondary Schools in Enugu State, Nigeria",
    authors: [
      { name: "Dr. Nnam Peace Nwakaku", affiliation: "Department of Guidance and Counseling, Enugu State University of Science and Technology, Agbani-Enugu, Enugu State, Nigeria", email: "Peacennam2020@gmail.com" },
      { name: "Prof. A.E Onuorah", affiliation: "Department of Guidance and Counseling, Enugu State University of Science and Technology, Agbani-Enugu, Enugu State, Nigeria", email: "" }
    ],
    abstract: "This study determined the extent counsellors utilized active listening skills in enhancing counselling practice in secondary schools in Enugu State. Using a descriptive survey research design, all 301 secondary school guidance counsellors and teacher counsellors in 298 public secondary schools in Enugu State were studied. A structured questionnaire with overall reliability coefficient of 0.76 was used for data collection. Mean, standard deviation, and t-test at 0.05 significance level were used for analysis. Findings revealed that guidance counsellors and teacher counsellors to a great extent utilized active listening skills for enhancing counselling practice (cluster mean = 3.21). No significant difference was found between guidance counsellors and teacher counsellors on the extent to which active listening skills were utilized (t = -.067, p = .947). The study recommends that the Counselling Association of Nigeria should periodically organize workshops for school counsellors on the use of active listening skills for enhanced counselling practice.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "409-419",
    keywords: ["Utilization", "Active Listening", "Skills", "Counselling Practice", "Secondary Schools", "Enugu State"],
    pdfUrl: "/articles/utilization-of-active-listening-skills.pdf"
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
            <ActiveListeningContent />
          </div>
        </article>
      </div>
    </div>
  );
}
