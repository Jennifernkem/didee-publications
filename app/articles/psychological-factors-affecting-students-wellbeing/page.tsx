import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import SickleCellContent from './SickleCellContent';

export const metadata: Metadata = {
  title: "Psychological Factors Affecting Wellbeing of Students Living with Sickle Cell Anemia in Senior Secondary School in Enugu State | Didee Publications",
  description: "Study investigating psychological factors affecting wellbeing of secondary school students living with sickle cell anemia in Enugu State, Nigeria."
};

export default function SickleCellArticle() {
  const article = {
    title: "Psychological Factors Affecting Wellbeing of Students Living with Sickle Cell Anemia in Senior Secondary School in Enugu State",
    authors: [
      { name: "Animba I. E.", affiliation: "Department of Educational Foundations, Enugu State University of Science and Technology (ESUT), Enugu State, Nigeria", email: "animba.evelyn@esut.edu.ng" },
      { name: "Onyekachi I.", affiliation: "Department of Educational Foundations, Enugu State University of Science and Technology (ESUT), Enugu State, Nigeria", email: "" },
      { name: "Ezema E. O.", affiliation: "", email: "" }
    ],
    abstract: "This study investigated psychological factors affecting wellbeing of secondary school students living with sickle cell anemia in Enugu State. Using an ex-post facto design, 50 senior secondary school students living with sickle cell anemia in public schools were selected through purposive sampling. A researcher-designed questionnaire with Cronbach alpha coefficient of 0.87 was used for data collection. Mean and standard deviation were used to answer research questions. Major findings indicated that stress influences the health condition of students living with sickle cell anemia at a high extent (cluster mean = 2.01). Social support findings showed a low extent cluster mean of 1.88, though individual items revealed that while some students feel accepted and have peer support, there is also a notable tendency to conceal their condition due to fear of stigmatization. The study recommends that schools provide psycho-social support systems including trained counselors, while government should provide better inclusive learning environments for students living with sickle cell anemia.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "419-429",
    keywords: ["Psychological Factors", "Wellbeing", "Sickle Cell Anemia", "Secondary School Students", "Enugu State"],
    pdfUrl: "/articles/psychological-factors-affecting-students-wellbeing.pdf"
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
            <SickleCellContent />
          </div>
        </article>
      </div>
    </div>
  );
}
