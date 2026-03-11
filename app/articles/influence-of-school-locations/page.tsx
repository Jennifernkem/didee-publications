import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import SchoolLocationContent from './SchoolLocationContent';

export const metadata: Metadata = {
  title: "Influence of School Location on Multimedia Instruction | Didee Publications",
  description: "Analysis of how school location affects multimedia instruction effectiveness in religious studies."
};

export default function InfluenceSchoolLocationsArticle() {
  const article = {
    title: "Influence of School Location on the Effectiveness of Multimedia Instruction in Christian Religious Studies in Edo State, Nigeria",
    authors: [{ name: "Alexandre Onyekachi Ugwu", affiliation: "", email: "" }],
    abstract: "This study investigated the influence of school location on the effectiveness of multimedia instruction in the teaching and learning of Christian Religious Studies (CRS) among Senior Secondary School II students in Edo State, Nigeria. Employing a quasi-experimental, pretest–posttest non-equivalent control group design, 156 students were purposively selected from urban and rural secondary schools. Data were collected using the Christian Religious Studies Achievement Test (CRSAT) and the Christian Religious Studies Interest Scale (CRSIS) with reliability coefficients of 0.88 and 0.89 respectively. Mean and standard deviation were used for descriptive analysis, while two-way ANOVA tested hypotheses at the 0.05 level of significance. Findings indicated that multimedia instruction significantly enhanced students' achievement and interest in CRS, but school location did not significantly moderate these effects. The study concludes that multimedia instructional strategies are effective irrespective of urban or rural school contexts and recommends increased provision of multimedia resources and teacher training across schools.",
    publishedDate: 'March 1, 2026',
    volume: "1", issue: "4", pages: "161-175",
    keywords: ["School Location", "Multimedia Instruction", "Religious Studies", "Edo State"],
    pdfUrl: "/articles/Influence-of-school-locations.pdf"
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
                  <strong>{author.name}</strong>
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
            <SchoolLocationContent />
          </div>
        </article>
      </div>
    </div>
  );
}
