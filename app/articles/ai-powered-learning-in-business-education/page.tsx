import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "AI-Powered Learning in Business Education | Didee Publications",
  description: "This study explored three interconnected dimensions of AI adoption in business education: personalization, ethics, and curriculum innovation."
};

export default function AIPoweredLearningArticle() {
  const article = {
    title: "AI-POWERED LEARNING IN BUSINESS EDUCATION: PERSONALIZATION, ETHICS, AND CURRICULUM INNOVATION",
    authors: [{ name: "Eya, Gloria Mgboyibo", affiliation: "Department of Business and Entrepreneurship Education, Enugu State University of Science and Technology (ESUT) Enugu" }],
    abstract: "Artificial intelligence (AI) is reshaping higher education, particularly within business education, where its integration raises important questions about pedagogy, ethics, and curriculum reform. This study explored three interconnected dimensions of AI adoption: personalization, ethics, and curriculum innovation. Drawing on frameworks such as Self-Determination Theory, the TPACK model, Responsible Innovation, and Institutional Theory, the study proposes the AI-Personalization, Ethics, and Curriculum Innovation (AI-PECI) model. The model explains how adaptive learning systems, intelligent tutoring technologies, and generative AI can improve engagement and creativity through personalized learning experiences. It also highlights the role of ethical governance in promoting trust through fairness, transparency, and data protection. At the same time, curriculum innovation focuses on integrating AI literacy and applied analytics to meet evolving industry needs.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "537-557",
    keywords: ["Artificial Intelligence", "Business Education", "Personalization", "Ethics", "Curriculum Innovation"],
    pdfUrl: "/articles/ai-powered-learning-in-business-education.pdf"
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
