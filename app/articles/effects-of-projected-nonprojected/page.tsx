import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import ProjectedNonProjectedContent from './ProjectedNonProjectedContent';

export const metadata: Metadata = {
  title: "Comparative Study of the Effects of Projected and Non-Projected Instructional Materials on Students' Achievement in English Language | Didee Publications",
  description: "Study comparing the effects of projected and non-projected instructional materials on students' academic achievement in English Language in secondary schools in Enugu Education Zone."
};

export default function ProjectedNonProjectedArticle() {
  const article = {
    title: "Comparative Study of the Effects of Projected and Non-Projected Instructional Materials on Students' Achievement in English Language in Secondary Schools in Enugu Education Zone",
    authors: [
      { name: "Mercillina Mmachinyere Ebuoh, PhD", affiliation: "Department of Educational Foundation, Faculty of Education, Enugu State University of Science and Technology, Enugu", email: "mercillina.ebuoh@esut.edu.ng" }
    ],
    abstract: "This study investigated and compared the effects of projected and non-projected instructional materials on students' academic achievement in English Language in secondary schools in Enugu Education Zone. Using a quasi-experimental non-equivalent design, 357 SS2 students were drawn from three schools and assigned to three groups: Group I taught using projected instructional materials (overhead projector), Group II using non-projected materials (charts, still pictures and chalkboard), and Group III as control (taught without instructional materials). Data were collected using the English Language Achievement Test (ELAT) with reliability coefficient of 0.75. Results revealed that students taught using projected instructional materials had significantly higher mean achievement scores (posttest mean: 66.19) than those taught using non-projected materials (posttest mean: 61.21), while the control group had the lowest mean achievement score (posttest mean: 36.55). ANCOVA confirmed a significant difference between groups (F = 6.719, p = .010).",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "301-313",
    keywords: ["Projected Instructional Materials", "Non-Projected Instructional Materials", "English Language", "Academic Achievement", "Enugu Education Zone"],
    pdfUrl: "/articles/effects-of-projected-nonprojected.pdf"
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
                  <span className="text-sm italic">{author.affiliation}</span>
                  {author.email && (
                    <>
                      <br/>
                      <a href={`mailto:${author.email}`} className="text-blue-600 hover:underline text-sm">{author.email}</a>
                    </>
                  )}
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
            <ProjectedNonProjectedContent />
          </div>
        </article>
      </div>
    </div>
  );
}
