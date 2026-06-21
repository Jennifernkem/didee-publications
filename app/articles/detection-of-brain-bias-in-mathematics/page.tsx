import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Detection of Item Bias in Mathematics Multiple Choice Test Items | Didee Publications",
  description: "The study investigated the presence of Differential Item Functioning (DIF) by gender in WAEC 2021 Mathematics Multiple Choice Test Items in Enugu State."
};

export default function DetectionBrainBiasArticle() {
  const article = {
    title: "Detection of Item Bias in Mathematics Multiple Choice Test Items of West African Examination Council in Enugu State using Differential Item Functioning Technique",
    authors: [{ name: "NWEZE EMMANUEL OKWUCHUKWU", affiliation: "Department of Mathematics and Computer Science Education, ESUT" }],
    abstract: "The study investigated the presence of Differential Item Functioning (DIF) by gender in West African Examinations Council (WAEC) 2021 Mathematics Multiple Choice Test Items in Enugu State. An Expose Factor research design was employed. A sample of 1,585 candidates was used. The candidates' population by gender showed that males have the population of 687 while the females are 898. A 50-item multiple choice Mathematics test item was used to gather data. To detect the items that functioned differentially by male and female test takers, Mantel-Haenszel statistical method was applied. The results of the analysis revealed that 7 items in favour of males and 4 items in favour of females, (22%) of the 50 test items set and administered by WAEC 2021 exhibited significant differential item functioning by gender. Based on the findings, the study concluded that the items used by WAEC in the above examinations were biased by gender.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "746-756",
    keywords: ["Bias in External Examinations", "Mathematics", "Students", "Gender", "Interest", "Innovation"],
    pdfUrl: "/articles/detection-of-brain-bias-in-mathematics.pdf"
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
