import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import GenderInfluenceContent from './GenderInfluenceContent';

export const metadata: Metadata = {
  title: "Influence of Gender on the Effectiveness of Multimedia Instruction in Christian Religious Studies in Edo State, Nigeria | Didee Publications",
  description: "Study investigating the influence of gender on the effectiveness of multimedia instruction in Christian Religious Studies among secondary school students in Edo State, Nigeria."
};

export default function GenderInfluenceArticle() {
  const article = {
    title: "Influence of Gender on the Effectiveness of Multimedia Instruction in Christian Religious Studies in Edo State, Nigeria",
    authors: [
      { name: "Alexander Onyekachi Ugwu", affiliation: "Department of Curriculum and Instructional Technology, Faculty of Education, University of Benin", email: "Ugwuemmanuel1979@gmail.com" }
    ],
    abstract: "This study investigated the influence of gender on the effectiveness of multimedia instruction in Christian Religious Studies (CRS) among secondary school students in Edo State, Nigeria. Using a quasi-experimental pretest-posttest control group design, 156 SS II students were selected through multistage sampling. The experimental group received multimedia instructional intervention while the control group was taught using traditional methods. Data were collected using the Christian Religious Studies Achievement Test (CRSAT) and the Christian Religious Studies Interest Scale (CRSIS), and analysed using two-way ANOVA. Results revealed no significant gender differences in students' posttest achievement and interest scores under multimedia instruction. The findings suggest that multimedia instructional approaches can benefit both male and female students similarly in CRS contexts.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "357-375",
    keywords: ["Multimedia Instruction", "Gender Differences", "Christian Religious Studies", "Academic Achievement", "Student Interest"],
    pdfUrl: "/articles/influence-of-gender.pdf"
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
            <GenderInfluenceContent />
          </div>
        </article>
      </div>
    </div>
  );
}
