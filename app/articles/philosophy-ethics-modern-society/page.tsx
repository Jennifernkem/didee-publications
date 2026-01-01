import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy | Didee Publications",
  description: "An exploration of Heidegger's concepts of throwness and nothingness as fundamental structures of Dasein's existence.",
  other: {
    "citation_title": "Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy",
    "citation_author": "Daniel Ojotule Offor",
    "citation_publication_date": "2024-01-20",
    "citation_journal_title": "Didee Publications International Journal",
    "citation_issn": "2789-1234",
    "citation_volume": "1",
    "citation_issue": "2",
    "citation_firstpage": "11",
    "citation_lastpage": "25",
    "citation_doi": "10.12345/didee.2024.002",
    "citation_pdf_url": "https://didee-publications.com/articles/philosophy-ethics-modern-society.pdf",
  }
};

export default function PhilosophyArticle() {
  const article = {
    title: "Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy",
    authors: [
      { name: "Daniel Ojotule Offor", affiliation: "Clinical Psychology Department, University of South Wales, United Kingdom", email: "danielojotule81@gmail.com" }
    ],
    abstract: "The research work aims to expose Heidegger's idea of nothingness which is not only a response to Hegelianism, but also a background upon which the doctrine of both phenomenology and existentialism rests. The work employed a methodological approach which is strictly expository and critical in the sense that it takes off on a note of general prologue. The study argues that Heidegger's position is ultimately self-defeating. If, as he maintains, Dasein always exists within its own world, is inescapably entangled in that world, and can only interpret itself through the terms of that world, then writing about Dasein for others to read becomes paradoxical.",
    doi: "10.12345/didee.2024.002",
    publishedDate: "January 20, 2024",
    volume: "1",
    issue: "2",
    pages: "11-25",
    keywords: ["Dasein's basic state", "Existentiality", "Throwness", "Nothingness", "Heideggerian philosophy"]
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
                <div key={index} className="text-gray-700">
                  <strong>{author.name}</strong><br/>
                  <span className="text-sm">{author.email}</span><br/>
                  <span className="text-sm italic">{author.affiliation}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><strong>DOI:</strong> {article.doi}</div>
                <div><strong>Published:</strong> {article.publishedDate}</div>
                <div><strong>Volume:</strong> {article.volume}, Issue: {article.issue}</div>
                <div><strong>Pages:</strong> {article.pages}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Abstract</h3>
              <p className="text-gray-700">{article.abstract}</p>
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
          
          <div className="prose max-w-none text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
            <p className="mb-4">
              The philosopher, Aristotle, stated in his metaphysics with the classical assertion that "All men by nature desire to know." Knowledge is man's delight, since it is connected with his quest for survival. It is a fact that man knows and desires to know more: but this desire to know over the years have landed some Philosophers at different position via- Idealism, Rationalism, Psychologism, Materialism, Realism and Existentialism especially when it comes to the basic issue of self-knowledge not strictly in the Socrates sense of "man know thyself…" But inclusively when it pertains to knowledge of man in its entirety, his origin, existence, goal, destiny purpose and how best could man live as men.
            </p>
            
            <p className="mb-4">
              Heidegger emerged in the metaphysical scene with his central question: 'why are there 'Essents' rather than 'Nothing'? His overriding intention was to work out the question of the meaning of Being. But this ambition is not something easy to achieve. Heidegger undertook a bold philosophical enterprise that belongs to the mainstream of western history.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Methodology</h2>
            <p className="mb-4">
              The work employed a methodological approach which is strictly expository and critical in the sense that it takes off on a note of general prologue which will immerse us into the task proper and this will mechanically be followed by the entire structure of the central locus of the project.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Discussion</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Dasein's Basic State</h3>
            <p className="mb-4">
              Being-in-the–World in general is the basic state of Dasein. This compound expression "Being-in-the world" indicates in the very way we have coined it, that it stands for a unitary phenomenon. This primary datum must be seen as a whole. Meanwhile, Being-in-the- world cannot be broken up into Contents which may be pieced together, this does not prevent it from having several constitutive items in its structure.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Existential Dialectics of Throwness and Nothingness</h3>
            <p className="mb-4">
              The Future of man and the emptiness that surrounds him is the reality that would continue to live with him for the rest of his existence on earth. The concept of nothingness is widely used in modern expression, communication and in philosophy. Nothingness is a negative pronoun. It is not anything.
            </p>
            
            <p className="mb-4">
              Heidegger thus appropriated the noun in his bid to awaken the metaphysical consciousness saying; why are there essence rather than nothing? That is to say, on what ground from what source does an essent derive its being? Is it from something or Nothing?
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Nothingness as Existentially Futuristic Projection</h3>
            <p className="mb-4">
              Nothingness as an existentially futuristic projection is not a physical entity of Dasein. But it is present as a constitutive structure of a being towards death. But as something futuristic, it qualifies Dasein's mood as a projection into the future. For Heidegger we die every day, it is a metaphysical and biological process because the human cells die daily.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Existentiality</h3>
            <p className="mb-4">
              This is the second basic features that characterize man, it is the man's possibility to make himself what he wants to be. The possibility (potentiality) to effect a change in the world that man dwells-in as such. The possibility to project oneself into the future and live towards this self-projection.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Evaluation</h2>
            <p className="mb-4">
              Furthermore, at an even more fundamental level it must be pointed out that Heidegger's system of thought is therefore logically self-contradictory. For, as John Warwick Montgomery has pointed out: Like logic itself, both the subject-object distinction and propositional thinking must be presupposed in all sensible investigations.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              This essay exposes what it considers as Nothingness the onto-existential structure of Dasein. By giving its many applications and the metaphysical significance. Although nothingness is not a physical entity, it is a mood for Dasein as an existential projection to the future. The central question for metaphysics has always been the question of the origin of things that had pervaded the entire history of philosophy.
            </p>
            
            <p className="mb-4">
              However, having stated Heidegger's thesis on throwness as onto Existential structure of Dasein, Heidegger contends that throwness as a mode of existence is as an entity which has to be as it is and it can be. Thus, we cannot exonerate him from his critique and propositions on atheism, thesis and Christian philosophy, or on his no ontological positions on theism and atheism.
            </p>
          </div>
          
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Citation:</strong> Offor, D. O. (2024). Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy. <em>Didee Publications International Journal</em>, 1(2), 11-25. DOI: 10.12345/didee.2024.002
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}