import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Digital Citizenship and Students' Online Behaviour and Mental Health | Didee Publications",
  description: "This study examined digital citizenship and its influence on students' online behaviour and mental health in secondary schools in Enugu Education Zone."
};

export default function DigitalCitizenshipArticle() {
  const article = {
    title: "DIGITAL CITIZENSHIP AND STUDENTS' ONLINE BEHAVIOUR AND MENTAL HEALTH IN SECONDARY SCHOOLS: IMPLICATIONS FOR GUIDANCE AND COUNSELLING IN ENUGU EDUCATION ZONE",
    authors: [{ name: "OKOYE MIRACLE CHINAZA", affiliation: "" }],
    abstract: "This study examined digital citizenship and its influence on students' online behaviour and mental health in secondary schools, with implications for guidance and counselling in Enugu Education Zone. The increasing use of digital technologies among adolescents has raised concerns about responsible online behaviour and psychological well-being, making digital citizenship an important framework for addressing these challenges. The study adopted a descriptive survey research design. The population comprised all public secondary school students in Enugu Education Zone, while a sample of 120 students was selected using a multi-stage sampling technique. Findings from descriptive statistics and regression analysis revealed that digital citizenship significantly predicts students' online behaviour and mental health. The study concluded that students with higher levels of digital citizenship demonstrate more responsible online behaviour and better psychological well-being. It was recommended that digital citizenship education be integrated into school curricula, while guidance and counselling services should be strengthened to support students' digital behaviour and mental health.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "578-591",
    keywords: ["Digital Citizenship", "Online Behaviour", "Mental Health", "Secondary School Students", "Guidance and Counselling", "Enugu Education Zone"],
    pdfUrl: "/articles/digital-citizenship.pdf"
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
                <div key={index} className="text-gray-700"><strong>{author.name}</strong>{author.affiliation ? ` — ${author.affiliation}` : ''}</div>
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
