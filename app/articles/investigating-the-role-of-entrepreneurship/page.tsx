import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Investigating the Role of Entrepreneurship Education on Financial Management Skill Development | Didee Publications",
  description: "The study determined the role of entrepreneurship education in developing financial management skills among business students."
};

export default function EntrepreneurshipArticle() {
  const article = {
    title: "Investigating the role of entrepreneurship education on financial management skill development of business students",
    authors: [{ name: "Ifeanyi Kalu Mong", affiliation: "Department of Vocational and Technical Education, Alex Ekwueme Federal University, Ndufu-Alike Ikwo, Nigeria" }],
    abstract: "The study determined the role of entrepreneurship education in developing financial management skills among business students. The study adopted correlational research design. Two research hypotheses were raised and tested at 0.05 level of significance. The population of the study comprised 236 full time entrepreneurship students in a public University in Ebonyi State, Nigeria. Questionnaire was developed by the researcher and used as instrument for data collection. The instrument was validated by experts before its usage. Regression analysis was used to test the research hypotheses. Findings revealed that a significant positive relationship exists between entrepreneurship education and the development of working capital management and investment decision skills among business students.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "508-521",
    keywords: ["Entrepreneurship Education", "Working Capital Management", "Investment Decision Skill", "Financial Management Skill"],
    pdfUrl: "/articles/investigating-the-role-of-entrepreneurship.pdf"
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
