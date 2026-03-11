import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import YouthEmpowermentContent from './YouthEmpowermentContent';

export const metadata: Metadata = {
  title: "Youth Empowerment: A Pathway to Unlocking Employability | Didee Publications",
  description: "Study on youth empowerment strategies for developing employability and entrepreneurial skills."
};

export default function YouthEmpowermentArticle() {
  const article = {
    title: "Youth Empowerment: A Pathway to Unlocking Employability and Entrepreneurial Skills in Enugu State, Nigeria",
    authors: [
      { name: "Odenigbo Veronica Ngozi", affiliation: "Department of Science Education, Enugu State University of Science and Technology", email: "odenigbo.veronica@esut.edu.ng" },
      { name: "Ukwuaba Loretta Chika", affiliation: "" }
    ],
    abstract: "This study examines youth empowerment as a pathway to unlocking entrepreneurial skills and employability in Enugu State, Nigeria. Using a descriptive survey design with 103 youths (42 males and 61 females), the study investigated the effects of youth joblessness and empowerment on society. Findings indicated that jobless youths tend to join bad gangs for money, while empowered youths support themselves, their communities, and the nation in bringing human, economic, and social development. Results showed that youth joblessness leads to increased poverty, social unrest, poor healthcare, inability to acquire skills, brain drain, low self-esteem, political hooliganism, and criminality. Conversely, youth empowerment improves entrepreneurial skills development, increases vocational training opportunities, reduces poverty, fosters creativity, brings economic growth, improves employment and job creation, and develops effective leaders. The study recommends that government establish skill acquisition centers with good facilities and qualified facilitators.",
    publishedDate: 'March 1, 2026',
    volume: "1", issue: "4", pages: "146-160",
    keywords: ["Youth Empowerment", "Employability", "Entrepreneurship", "Enugu State"],
    pdfUrl: "/articles/youth-empowerment-pathway.pdf"
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
                  {author.affiliation && <span className="text-sm italic">{author.affiliation}</span>}
                  {author.email && (
                    <>
                      <br/>
                      <a href={`mailto:${author.email}`} className="text-blue-600 hover:underline text-sm">
                        {author.email}
                      </a>
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
            <YouthEmpowermentContent />
          </div>
        </article>
      </div>
    </div>
  );
}
