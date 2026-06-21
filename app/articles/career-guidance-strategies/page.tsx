import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Career Guidance Strategies for Increasing Students' Choice of Vocational and Technical Education | Didee Publications",
  description: "The study focused on career guidance strategies for increasing students' choice of vocational and technical education subjects in secondary schools in Ebonyi State."
};

export default function CareerGuidanceArticle() {
  const article = {
    title: "Career Guidance Strategies for Increasing Students' Choice of Vocational and Technical Education Subjects in Secondary Schools in Ebonyi State",
    authors: [
      { name: "Kingsley Ogazi Igwe", affiliation: "Department of Vocational and Technical Education, Alex-Ekwueme Federal University Ndufu Alike Ikwo, Ebonyi State" },
      { name: "Ifeanyi Kalu Mong", affiliation: "Department of Vocational and Technical Education, Alex-Ekwueme Federal University Ndufu Alike Ikwo, Ebonyi State" }
    ],
    abstract: "The study focused on career guidance strategies for increasing students' choice of vocational and technical education subjects in secondary schools in Ebonyi State. The study was guided by two research questions and two null hypotheses. Descriptive survey research design was adopted for the study. The population of the study comprised of 3,585 teachers of Vocational and Technical Education subjects from public secondary schools in the three Education Zones in Ebonyi State. Sample size of 564 teachers was used for the study. Findings revealed that career orientation guidance strategies included: introducing students to vocational and technical education options early in their academic journey; arranging practical experiences where students can get first-hand exposure to vocational and technical careers among others. The study concluded that use of career orientation and computer-assisted strategies by teachers, school administrators and practitioners in providing vocational guidance to students increase students' choice of vocational and technical education subjects in secondary schools in Ebonyi State.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "784-800",
    keywords: ["Career Guidance", "Strategies", "Students' Choice", "Vocational and Technical Education"],
    pdfUrl: "/articles/career-guidance-strategies.pdf"
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
