import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import CulturalSoundscapeContent from './CulturalSoundscapeContent';

export const metadata: Metadata = {
  title: "Cultural Soundscapes: How African Music Shapes and Reflects Democratic Ideals | Didee Publications",
  description: "Examination of the relationship between African music and democracy, tracing its evolution from pre-colonial governance systems to contemporary youth-led protests."
};

export default function CulturalSoundscapeArticle() {
  const article = {
    title: "Cultural Soundscapes: How African Music Shapes and Reflects Democratic Ideals",
    authors: [
      { name: "Felicia Ezeugwu", affiliation: "Department of Music, University of Nigeria, Nsukka", email: "felicia.ezeugwu@unn.edu.ng" }
    ],
    abstract: "African music has long played a pivotal role in advancing democratic ideals and shaping political consciousness across the continent. This paper examines the relationship between African music and democracy, tracing its evolution from pre-colonial participatory governance systems to post-independence resistance movements and contemporary youth-led protests. Through case studies drawn from griot performance traditions, praise singing, highlife, Afrobeat, and hip-hop, the study highlights how music has been used to resist authoritarianism, promote civic engagement, and amplify marginalized voices. Findings reveal that music continues to shape democratic discourse by fostering unity, accountability, and collective political agency. While some musicians retreat from activism due to market pressures or political co-optation, others continue to use their art to challenge injustice and inspire collective action. The paper argues that African musicians are not merely entertainers but also cultural activists who shape political discourse.",
    publishedDate: 'April 2026',
    volume: "1", issue: "3", pages: "249-269",
    keywords: ["African Music", "Democracy", "Political Resistance", "Civic Engagement", "Afrobeat", "Protest Songs", "Cultural Identity", "Digital Activism"],
    pdfUrl: "/articles/cultural-soundscape.pdf"
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
            <CulturalSoundscapeContent />
          </div>
        </article>
      </div>
    </div>
  );
}
