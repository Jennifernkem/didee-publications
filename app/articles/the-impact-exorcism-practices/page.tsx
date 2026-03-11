import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Impact of Exorcism Practices on Mental Health Outcomes | Didee Publications",
  description: "Examination of the psychological impact of exorcism practices on mental health outcomes."
};

export default function ImpactExorcismArticle() {
  const article = {
    title: "The Impact of Exorcism Practices on Mental Health Outcomes",
    authors: [{ name: "Daniel Ojotule Offor", affiliation: "Department of Clinical Psychology, University of South Wales" }],
    abstract: "Examination of the psychological impact of exorcism practices on mental health outcomes.",
    publishedDate: "January 1, 2024",
    volume: "1", issue: "4", pages: "116-130",
    keywords: ["Exorcism", "Mental Health", "Clinical Psychology", "Theology"],
    pdfUrl: "/articles/the-impact-exorcism-practices.pdf"
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
            
            <div className="mb-4">
              {article.authors.map((author, index) => (
                <div key={index} className="text-gray-700">
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
        </article>
      </div>
    </div>
  );
}
