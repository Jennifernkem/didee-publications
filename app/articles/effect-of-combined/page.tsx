import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Effect of Combined Application of Vermicompost Manure with Inorganic Fertilizer on Yam Productivity | Didee Publications",
  description: "This study investigated the effect of combined application of vermicompost with inorganic fertilizer on yam productivity and soil properties of a nutrient depleted tropical alfisol."
};

export default function EffectOfCombinedArticle() {
  const article = {
    title: "EFFECT OF COMBINED APPLICATION OF VERMICOMPOST MANURE WITH INORGANIC FERTILIZER ON YAM PRODUCTIVITY AND SOIL PROPERTIES OF A NUTRIENT DEPLETED TROPICAL ALFISOL",
    authors: [
      { name: "EDWIN IDENYI OTOZI", affiliation: "Department of Vocational and Technical Education, Alex-Ekwueme Federal University Ndufu-Alike, Ikwo Ebonyi State" },
      { name: "MICHEAL ONWUMERE", affiliation: "Department of Agricultural Education, University of Nigeria, Nsukka" },
      { name: "NWANKWO CLARA UKAMAKA", affiliation: "Department of Agricultural Education, University of Nigeria, Nsukka" }
    ],
    abstract: "This study investigated the effect of combined application of vermicompost with inorganic fertilizer on yam productivity and soil properties of a nutrient depleted tropical alfisol. The main objective was to determine the ratio of vermicompost and NPK 20:10:10 to be combined for the attainment of maximum yield of yam and the impact of the treatment materials on the soil properties. The investigation was conducted between March 2024 and December 2024. The experiment was a 3x4 factorial design laid out in randomized complete block design (RCBD) with three replicates. The result showed that growth and yield of yam was lowest on no manure treatment (97.3kg) and highest on the plot dressed with 20 tones/ha of vermicompost and 200kg/ha of NPK 20:10:10 in combined application. The application of vermicompost decreases soil bulk density and increased water holding capacity of soil media.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "621-642",
    keywords: ["Vermicompost", "Inorganic Fertilizer", "Soil Properties", "Nutrient Depleted", "Alfisol"],
    pdfUrl: "/articles/effect-of-combined.pdf"
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
