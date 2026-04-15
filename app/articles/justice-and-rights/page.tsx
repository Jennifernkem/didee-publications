import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import JusticeRightsContent from './JusticeRightsContent';

export const metadata: Metadata = {
  title: "Justice and Rights in Nozick's Libertarianism: What Prospect for Community and Nation? | Didee Publications",
  description: "Philosophical analysis of justice and rights in Nozick's libertarianism and its prospects for community and nation."
};

export default function JusticeRightsArticle() {
  const article = {
    title: "Justice and Rights in Nozick's Libertarianism: What Prospect for Community and Nation?",
    authors: [
      { name: "Bernard Onoja Jude", affiliation: "Institut Universitaire Le Grand Berger Benin (IUGB-Benin), Great Shepherd University Institute of Benin", email: "judebernardonoja1@gmail.com" }
    ],
    abstract: "This article analyses the absolutism of rights as a means to attain justice in a society and the credibility of justice as a standard for community and nation within Nozick's libertarian framework. Nozick presents human beings as rational, self-owning entities endowed with self-awareness, free will, and inherent dignity who cannot be treated as mere instruments. The article examines Nozick's entitlement theory, the minimalist state, and the concept of utopia as a framework for political society. Through engagement with scholars including Jeffrey, Cohen, and Lomasky, the article critically evaluates the prospects of applying Nozick's libertarian principles to contemporary community and nation-building. The article concludes that Nozick's libertarian theory of justice and rights, while academically credible, has failed to adequately account for the primordial demands for protection of lives and properties through political history, and cannot be straightforwardly applied as a model for 21st-century communities or nations.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "313-324",
    keywords: ["Justice", "Rights", "Libertarianism", "Nozick", "Political Philosophy", "Community", "Nation"],
    pdfUrl: "/articles/justice-and-rights.pdf"
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
            <JusticeRightsContent />
          </div>
        </article>
      </div>
    </div>
  );
}
