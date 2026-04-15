import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import DroughtHeatToleranceContent from './DroughtHeatToleranceContent';

export const metadata: Metadata = {
  title: "Drought and Heat Tolerance Mechanisms in Underutilised Legume Species: A Systematic Review | Didee Publications",
  description: "Systematic review of drought and heat tolerance mechanisms in underutilised legume species including bambara groundnut, horse gram, pigeonpea, and grass pea."
};

export default function DroughtHeatToleranceArticle() {
  const article = {
    title: "Drought and Heat Tolerance Mechanisms in Underutilised Legume Species: A Systematic Review",
    authors: [
      { name: "Tajudeen Bamidele Akinrinola", affiliation: "Department of Crop and Horticultural Sciences, Faculty of Agriculture, University of Ibadan, Nigeria", email: "tb.akinrinola@gmail.com" },
      { name: "Inioluwa Olusegun Fasina", affiliation: "Department of Crop and Horticultural Sciences, Faculty of Agriculture, University of Ibadan, Nigeria", email: "" },
      { name: "Ojodomoh Moses Onubi", affiliation: "Department of Soil Resources Management, Faculty of Agriculture, University of Ibadan, Nigeria", email: "" },
      { name: "Michael David", affiliation: "Department of Crop and Horticultural Sciences, Faculty of Agriculture, University of Ibadan, Nigeria", email: "" },
      { name: "Moriam Iyabode Oloyede", affiliation: "Department of Crop and Horticultural Sciences, Faculty of Agriculture, University of Ibadan, Nigeria", email: "" }
    ],
    abstract: "Underutilised legume species such as bambara groundnut, horse gram, pigeonpea, and grass pea possess remarkable adaptations to drought and heat, two stresses projected to increasingly limit crop production in sub-Saharan Africa. This systematic review draws on experimental studies published between 2010 and early 2026, focusing on morphological, physiological, biochemical, and molecular mechanisms that confer tolerance. After screening 1,146 records, 28 peer-reviewed studies meeting strict eligibility criteria were included. Results indicated that deep rooting, paraheliotropic leaf movement, early flowering, osmotic adjustment via proline and glycine betaine, robust antioxidant systems, and upregulation of stress-responsive transcription factors like DREB are common adaptive strategies. Bambara groundnut and horse gram are identified as the most resilient under combined stress. The review recommends advancing promising genotypes into participatory breeding programmes in sub-Saharan Africa and prioritising multi-location field trials and integration of socioeconomic factors to enable successful adoption and climate-resilient food systems.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "324-357",
    keywords: ["Orphan Crops", "Food Security", "Nutritional Diversity", "Abiotic Stresses", "Climate-Resilient Agriculture", "Underutilised Legumes"],
    pdfUrl: "/articles/improved-drought-and-heat-tolerance.pdf"
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
            <DroughtHeatToleranceContent />
          </div>
        </article>
      </div>
    </div>
  );
}
