import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Factors Influencing Continuation of Female Genital Mutilation among Women of Reproductive Age in Ebonyi State | Didee Publications",
  description: "This study investigated factors influencing the continuation of FGM among women of reproductive age in Ebonyi State, Nigeria."
};

export default function FactorsFGMArticle() {
  const article = {
    title: "Factors Influencing Continuation of Female Genital Mutilation among Women of Reproductive Age in Ebonyi State, Nigeria",
    authors: [{ name: "Okafor Chinedu Lebechi", affiliation: "Department of Human Kinetics and Health Education, Enugu State University of Science and Technology" }],
    abstract: "Female Genital Mutilation (FGM) remains a significant public health concern in Nigeria, particularly in Ebonyi State, where cultural beliefs and socioeconomic factors perpetuate the practice. This study investigated factors influencing the continuation of FGM among women of reproductive age in Ebonyi State. This cross-sectional study surveyed 422 women aged 15-49 years, examining demographic, sociocultural, and economic determinants influencing FGM awareness, perception, and utilization of prevention services. Data analysis using SPSS at 0.05 level of significance revealed significant associations between age, education, cultural beliefs, family influence, income, and distance to healthcare with FGM practices. Predictors of FGM continuation included low education, cultural beliefs supporting FGM, and low income. The findings underscore the complex interplay of factors driving FGM in Ebonyi State, highlighting the need for targeted interventions addressing cultural norms, improving access to education and healthcare, and promoting community engagement.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "591-610",
    keywords: ["Female Genital Mutilation", "FGM", "Ebonyi State", "Cultural Beliefs", "Education", "Healthcare Access", "Women's Health"],
    pdfUrl: "/articles/factors-influencing-female-genital-mutilation.pdf"
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
