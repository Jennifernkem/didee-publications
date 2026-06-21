import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Teachers' Perception of the Impact of Digital Storytelling Tools on Pupils' Reading Habits | Didee Publications",
  description: "This study investigated teachers' perceptions of digital storytelling tools and their impact on pupils' reading habits and comprehension in primary schools in Enugu State."
};

export default function DigitalStorytellingArticle() {
  const article = {
    title: "TEACHERS' PERCEPTION OF THE IMPACT OF DIGITAL STORYTELLING TOOLS ON PUPIL'S READING HABITS AND COMPREHENSION IN PRIMARY SCHOOLS IN ENUGU STATE",
    authors: [{ name: "EMERIE, Linda Ebere", affiliation: "Department of English Education, Abia State University, Uturu" }],
    abstract: "The problem of poor reading habits and low reading comprehension among primary school pupils in Enugu State persists despite the introduction of digital storytelling tools, largely because teachers' perceptions of these tools and the challenges they face in using them have not been systematically investigated. This study was guided by three research questions. The study adopted a descriptive survey research design. The target population comprised all 8,500 primary school teachers in Enugu State, from which a sample of 382 teachers was selected using Yamane's formula and stratified random sampling. The findings revealed that teachers perceived digital storytelling tools as having a positive effect on pupils' reading habits and reading comprehension, while identifying irregular electricity supply, inadequate devices, lack of training, absence of technical support, a crowded curriculum, and high cost of tools as major challenges.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "675-689",
    keywords: ["Teachers' Perception", "Digital Storytelling Tools", "Reading Habits", "Reading Comprehension", "Primary Schools", "Enugu State"],
    pdfUrl: "/articles/digital-storytelling-on-reading-habits.pdf"
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
