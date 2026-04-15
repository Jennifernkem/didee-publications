import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import MultimediaEfficacyContent from './MultimediaEfficacyContent';

export const metadata: Metadata = {
  title: "Efficacy of Multimedia Instruction on Student Interest and Achievement in Christian Religious Studies in Edo State | Didee Publications",
  description: "Study investigating the efficacy of multimedia instruction on students' interest and academic achievement in Christian Religious Studies in Edo State, Nigeria."
};

export default function MultimediaEfficacyArticle() {
  const article = {
    title: "Efficacy of Multimedia Instruction on Student Interest and Achievement in Christian Religious Studies in Edo State",
    authors: [
      { name: "Alexander Onyekachi Ugwu", affiliation: "Department of Curriculum and Instructional Technology, Faculty of Education, University of Benin, Benin City, Nigeria", email: "Ugwuemmanuel1979@gmail.com" }
    ],
    abstract: "This study investigated the efficacy of multimedia instruction on students' interest and academic achievement in Christian Religious Studies (CRS) in Edo State, Nigeria. Adopting a quasi-experimental pretest–posttest non-equivalent control group design, 156 students from four public secondary schools participated. The experimental groups received multimedia-based instruction integrating audio, video, text, animations, and interactive exercises, while the control groups were taught using conventional lecture methods. Data were collected using the Christian Religious Studies Achievement Test (CRSAT) and the Christian Religious Studies Interest Scale (CRSIS), and analyzed using descriptive statistics and independent samples t-tests at a 0.05 significance level. Results indicated that students exposed to multimedia instruction achieved comparable outcomes in both interest and academic performance to those taught via traditional methods, with no statistically significant differences observed. These findings suggest that multimedia instruction is a viable alternative to conventional teaching in CRS, offering potential for enhancing engagement and instructional quality when effectively integrated into classroom practice.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "375-391",
    keywords: ["Multimedia Instruction", "Student Interest", "Academic Achievement", "Christian Religious Studies", "Nigeria"],
    pdfUrl: "/articles/efficacy-of-multimedia-instruction.pdf"
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
            <MultimediaEfficacyContent />
          </div>
        </article>
      </div>
    </div>
  );
}
