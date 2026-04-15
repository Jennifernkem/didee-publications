import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import ContextualContent from './ContextualContent';

export const metadata: Metadata = {
  title: "The Roles of Contextual Instructional Models | Didee Publications",
  description: "Research on contextual instructional models for addressing physics misconceptions in secondary schools."
};

export default function RolesContextualArticle() {
  const article = {
    title: "The Roles of Contextual Instructional Models in Addressing Misconceptions Held by Secondary School Physics Students",
    authors: [{ name: "Kingsley T. Onah", affiliation: "Department of Science Education, Enugu State University of Science and Technology", email: "" }],
    abstract: "This study examines the pivotal role of contextual models in addressing and demystifying common misconceptions in secondary school physics. Physics concepts, often abstract, stem from misconceptions that conflict with students' intuitive understandings rooted in everyday experiences, leading to persistent low achievement. Contextual models, by embedding scientific principles within relatable real-world scenarios, facilitate deeper and more accurate conceptual understanding. They help students bridge the gap between pre-existing notions and scientific explanations by demonstrating practical application and relevance of physics. This approach fosters cognitive conflict, prompting students to critically evaluate existing ideas and reconstruct knowledge based on scientific principles, ultimately enhancing conceptual clarity, promoting critical thinking, and improving students' ability to apply physics effectively.",
    publishedDate: 'March 1, 2026',
    volume: "1", issue: "4", pages: "131-145",
    keywords: ["Physics Education", "Instructional Models", "Misconceptions", "Secondary Schools"],
    pdfUrl: "/articles/the-roles-contextual.pdf"
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
                <div key={index} className="text-gray-700">
                  <strong>{author.name}</strong><br/>
                  <span className="text-sm italic">{author.affiliation}</span>
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
            <ContextualContent />
          </div>
        </article>
      </div>
    </div>
  );
}
