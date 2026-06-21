import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Availability and Utilization of Digital Tools for Remote English Language Teaching | Didee Publications",
  description: "This study investigated the availability and utilization of digital tools for remote English language teaching in secondary schools in Enugu State."
};

export default function DigitalToolsArticle() {
  const article = {
    title: "Availability and Utilization of Digital Tools for Remote English Language Teaching in Secondary Schools in Enugu State",
    authors: [{ name: "ONWURAH, Chioma Rebecca", affiliation: "Department of English Education, Abia State University, Uturu" }],
    abstract: "The shift towards remote learning has increased the need for digital tools in English language teaching, yet in Enugu State, Nigeria, persistent infrastructure deficits and unclear levels of teacher utilization raise concerns about the readiness of secondary schools for remote instruction. This study investigated the availability and utilization of digital tools for remote English language teaching in secondary schools in Enugu State. It was guided by three research questions and hypotheses. A cross-sectional survey research design was adopted, with a sample of 220 respondents comprising 44 principals and 176 English Language teachers selected through stratified random sampling. Findings revealed that only messaging platforms, smartphones for teachers, and digital content repositories were available, while formal infrastructure such as reliable internet, computer laboratories, and technical support were largely absent. Utilization was low, with teachers primarily using messaging platforms to send lesson summaries, while interactive practices like live video lessons and digital assessment were rare.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "557-578",
    keywords: ["Availability", "Utilization", "Digital Tools", "Remote Teaching", "English Language Teaching", "Secondary Schools", "Enugu State"],
    pdfUrl: "/articles/availability-and-utilization-of-digital-tools.pdf"
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
                <div key={index} className="text-gray-700"><strong>{author.name}</strong> — {author.affiliation}</div>
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
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{keyword}</span>
                ))}
              </div>
            </div>
          </header>
        </article>
      </div>
    </div>
  );
}
