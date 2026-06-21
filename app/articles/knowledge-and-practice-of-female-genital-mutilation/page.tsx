import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Knowledge, Attitude, and Practice of Female Genital Mutilation Among Mothers and Traditional Birth Attendants | Didee Publications",
  description: "This study assessed knowledge, attitude, and practice of FGM among mothers and TBAs in rural communities of Anambra State, Nigeria."
};

export default function KnowledgeFGMArticle() {
  const article = {
    title: "Knowledge, Attitude, and Practice of Female Genital Mutilation Among Mothers and Traditional Birth Attendants in Rural Communities of Anambra State, Nigeria",
    authors: [
      { name: "Okafor Chinedu Lebechi", affiliation: "Department of Human Kinetics and Health Education, Enugu State University of Science and Technology" },
      { name: "Okafor Ngozi Roseline", affiliation: "Department of Dental Technology, Federal University of Allied Health Sciences Enugu" },
      { name: "Okafor Chimdindu Chidera", affiliation: "Department of Human Kinetics and Health Education, Enugu State University of Science and Technology" }
    ],
    abstract: "Female Genital Mutilation (FGM) persists in Nigeria despite legal prohibition under the Violence Against Persons Prohibition Act 2015, with rural Anambra State identified as a high-prevalence area where Traditional Birth Attendants (TBAs) are primary practitioners. This study assessed knowledge, attitude, and practice of FGM among 390 mothers and 60 TBAs in rural communities of Ayamelum, Orumba North, and Dunukofia LGAs. Only 40.2% had good knowledge, with mothers scoring significantly higher than TBAs at 42.3% versus 26.7%. Attitudes were largely neutral at 45.1%, with only 29.8% supporting abandonment. Prevalence among daughters was 46.9%, with 68.3% cut before age one and 72.1% performed by TBAs. FGM persists due to knowledge deficits, cultural beliefs about chastity, and economic incentives for TBAs.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "610-621",
    keywords: ["Female Genital Mutilation", "Knowledge", "Attitude", "Practice", "Traditional Birth Attendants", "Anambra State"],
    pdfUrl: "/articles/knowledge-and-practice-of-female-genital-mutilation.pdf"
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
