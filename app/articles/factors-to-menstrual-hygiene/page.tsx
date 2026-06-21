import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Factors to Menstrual Hygiene Practices Among Adolescent Female Secondary School Students | Didee Publications",
  description: "This study aimed to find out factors to menstrual hygiene practices among adolescent females in secondary schools in Nkanu West LGA of Enugu State."
};

export default function MenstrualHygieneArticle() {
  const article = {
    title: "FACTORS TO MENSTRUAL HYGIENE PRACTICES AMONG ADOLESCENT FEMALE SECONDARY SCHOOL STUDENTS IN NKANU WEST LOCAL GOVERNMENT AREA OF ENUGU STATE",
    authors: [
      { name: "N.E. EZE", affiliation: "Department of Human Kinetics and Health Education, Faculty of Education, Enugu State University of Science and Technology (ESUT), Enugu" },
      { name: "ONYEBUCHI, N.C.", affiliation: "Department of Human Kinetics and Health Education, Faculty of Education, Enugu State University of Science and Technology (ESUT), Enugu" }
    ],
    abstract: "This study aimed to find out factors to menstrual hygiene practices among adolescent females in secondary schools in Nkanu West LGA of Enugu State. The study made use of descriptive survey research design. The population for the study was 3175 adolescent female secondary school students in Nkanu West LGA. A total of 318 adolescent female secondary school students were sampled as respondents using Taro Yamane formula. The results of the data analysis showed that the adolescent female secondary school students in Nkanu West LGA experience personal factors to menstrual hygiene practices (x=2.57). Female students admitted experiencing socio-economic and school factors to menstrual hygiene practices in this locality (x=2.65; x=2.50). The study concluded that the practices of menstrual hygiene by female adolescents are hindered by some personal, economic as well as certain school-based factors.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "642-656",
    keywords: ["Hygiene", "Menstruation", "Menstrual Hygiene", "Adolescent"],
    pdfUrl: "/articles/factors-to-menstrual-hygiene.pdf"
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
