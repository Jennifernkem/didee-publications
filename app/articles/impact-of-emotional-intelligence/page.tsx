import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Impact of Emotional Intelligence and Social Media on Mental Health of Students | Didee Publications",
  description: "This study investigated the relationships between emotional intelligence, social media use, and mental health outcomes among students in Alex Ekwueme Federal University."
};

export default function EmotionalIntelligenceArticle() {
  const article = {
    title: "IMPACT OF EMOTIONAL INTELLIGENCE AND SOCIAL MEDIA ON MENTAL HEALTH OF STUDENTS IN FACULTY OF EDUCATION, ALEX EKWUEME FEDERAL UNIVERSITY, NDUFU ALIKE IKWO, EBONYI STATE",
    authors: [{ name: "CHINYERE LAMBERT EKEH", affiliation: "Department of Guidance and Counselling, Faculty of Education, Alex Ekwueme Federal University, Ndufu Alike Ikwo, Ebonyi State" }],
    abstract: "This study investigated the relationships between emotional intelligence, social media use, and mental health outcomes among students in the Faculty of Education, Alex Ekwueme Federal University Ndufu Alike Ikwo. A descriptive correlational design was adopted, and data were collected from 60 students using a self-report questionnaire. The instrument was validated by experts and had a good reliability coefficient (Cronbach alpha = 0.82). The results showed a significant positive relationship between emotional intelligence and mental health outcomes (r = 0.65, p < 0.01). Social media use was found to influence mental health outcomes (β = 0.42, p < 0.01), and emotional intelligence played a significant role in this relationship (β = 0.38, p < 0.01). The study also found significant differences in emotional intelligence and mental health outcomes between students with high and low social media use.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "689-707",
    keywords: ["Emotional Intelligence", "Social Media", "Mental Health"],
    pdfUrl: "/articles/impact-of-emotional-intelligence.pdf"
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
