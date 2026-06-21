import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Influence of Counselling Interventions on Youth Socio-Economic Development in Abia State | Didee Publications",
  description: "This study examined the influence of counselling interventions on youth socio-economic development in Abia State, Nigeria."
};

export default function InfluenceCounsellingArticle() {
  const article = {
    title: "INFLUENCE OF COUNSELLING INTERVENTIONS ON YOUTH SOCIO-ECONOMIC DEVELOPMENT IN ABIA STATE, NIGERIA",
    authors: [
      { name: "Awoke, Ngozi Ngwanma", affiliation: "Department of Guidance and Counselling, Alex Ekwueme Federal University Ndufu Alike, Ebonyi State" },
      { name: "Ali, Emmanuel Nnadozie", affiliation: "Department of Guidance and Counselling, Michael Okpara University of Agriculture Umudike, Abia State" }
    ],
    abstract: "This study examined the influence of counselling interventions on youth socio-economic development in Abia State, Nigeria. A correlational research design was adopted, and a sample of 400 youths aged 18–35 years was purposively selected from urban and semi-urban communities. Data were collected using a 30-item instrument titled Counselling Interventions and Youth Socio-Economic Development Questionnaire (CIYSEDQ), with reliability coefficients ranging from 0.85 to 0.88 and an overall reliability index of 0.87. The findings revealed that career counselling and entrepreneurial counselling have significant positive influences on youth socio-economic development, while life-skills counselling showed a positive but non-significant direct influence. The study concludes that strengthening structured career and entrepreneurial counselling services is essential for promoting sustainable youth empowerment, employability, and economic participation in Abia State.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "767-784",
    keywords: ["Counselling Interventions", "Career Counselling", "Entrepreneurial Counselling", "Life-Skills Counselling", "Youth Socio-Economic Development"],
    pdfUrl: "/articles/influence-of-counselling-intervention-on-youth.pdf"
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
