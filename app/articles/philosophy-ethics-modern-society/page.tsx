'use client';
import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import { useState } from 'react';

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
  const [showFullContent, setShowFullContent] = useState(false);
  
  const article = {
    title: "Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy",
    authors: [
      { name: "Daniel Ojotule Offor", affiliation: "Clinical Psychology Department, University of South Wales, United Kingdom", email: "danielojotule81@gmail.com" }
    ],
    abstract: "The research work aims to expose Heidegger's idea of nothingness which is not only a response to Hegelianism, but also a background upon which the doctrine of both phenomenology and existentialism rests. The work employed a methodological approach which is strictly expository and critical in the sense that it takes off on a note of general prologue. The study argues that Heidegger's position is ultimately self-defeating. If, as he maintains, Dasein always exists within its own world, is inescapably entangled in that world, and can only interpret itself through the terms of that world, then writing about Dasein for others to read becomes paradoxical.",
    doi: "10.12345/didee.2024.002",
    publishedDate: "January 1, 2026",
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
                  <span key={index} className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm">
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
              Heidegger emerged in the metaphysical scene with his central question: 'why are there 'Essents' rather than 'Nothing'? His overriding intention was to work out the question of the meaning of Being. But this ambition is not something easy to achieve. Heidegger undertook a bold philosophical enterprise that belongs to the mainstream of western history. To achieve this ambition, he supplanted the whole twenty-five centuries of metaphysical tradition. He deplores the state of philosophical bankruptcy that haunts the modern man which ensured from the forgetfulness of being. It has been ontic in its investigations of Being rather than ontological. The philosophic task of Heidegger then becomes, to drive philosophy back beyond the deviation of the west to the original pre-Socratic ontology. This return to the pre-Socratics requires a destruction of the traditional ontology.
            </p>
            
            <p className="mb-4">
              With the destruction of traditional ontology, Heidegger introduces his fundamental ontology. The fundamental ontology is the existential analytic of the Dasein'. Since the idea of meaning and purpose of life and existence dawned on man, there has been perpetual quest for the answer to the question of "who man is." Answers to this fundamental question find no satisfaction in the face of contemporary challenges.
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

            <h3 className="text-xl font-semibold mt-6 mb-3">The World</h3>
            <p className="mb-4">
              In Greek conception, "World" is what is referred to as "Cosmos" in the sense used by Parmenides Melissus, Heraclitus, Anaxagoras and the others. It indicates the 'State' the 'How' in which being is "in the whole", "World' is that whereto Deasein transcends so as to be what it is.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Being-in</h3>
            <p className="mb-4">
              Being-in-the world is analyzed as a unitary phenomenon. The being in this connection is of a nature entirely different from the 'in' applied to any phenomenon that is 'vorhanden' if a thing is said to be in something else. This relationship is 'Spatial'. If a being of the kind of Dasein is said to be 'in' something, the relationship is not meant primarily to be 'Spatial' but it means to dwell, to sojurn, to stay in the sense of the Latin word — HABITARE.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">The Self (The 'Who' That is disclosed as a being-in-the-world)</h3>
            <p className="mb-4">
              Our analysis so far is to focus the whole phenomenon of Being-in-the-world. Although its constitutive intrinsic elements have not all stood out with some distinctness. However, by directing our research towards the phenomenon which is to provide us with an answer to the question of the 'WHO' that is disclosed as a Being-in-the-world.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">The Worldhood of the World</h3>
            <p className="mb-4">
              Being-in-the-world shall first be made visible with regard to that item its structure which is the 'world' itself. Obviously, our expository analysis aims at establishing in the thought of Martin Heidegger that; Being–in–the-world (IN – DER - WELT - SEIN) is fundamental to the existential analysis of Dasein.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Facticity (Thrownness)</h3>
            <p className="mb-4">
              The facicity of Dasien's being consists in the fact of his being "trown" into existence. (Throwness-Geworfenheit), by the fact of "thrownness" or being "thrown into the world, but be it as it may. he simply finds himself thrown into existence. in circumstance that are not his own making. However, it is pertinent to note that (facility of Dasien) the fact of man being thrown or "human throwness is implicitly a limitation on man.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Fallenness</h3>
            <p className="mb-4">
              Fallenness into the world means an absorption in being with on another in so far as the world is the basic state of Dasein 's being-in falling. Dasein falls to in authenticity (in authenticity on the part of Dasein is a kind of absorption wherein the tendency of being- lost in the publish of the "they" is typified by Dasien but to have fallen does not mean anything like but amounts… The kind of which is completely fascinated by the world and by the of others in "they".
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
            
            {!showFullContent && (
              <div className="mt-8 text-center">
                <button 
                  onClick={() => setShowFullContent(true)}
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Read Full Article
                </button>
                <p className="text-sm text-gray-500 mt-2">Click to view complete research content</p>
              </div>
            )}
            
            {showFullContent && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mt-6 mb-3">Existentiality (Extended)</h3>
                <p className="mb-4">
                  This is the second basic features that characterize man, it is the man's possibility to make himself what he wants to be. The possibility (potentiality) to effect a change in the world that man dwells-in as such. The possibility to project oneself into the future and live towards this self-projection. It could be said to be an act of appropriating, the act of making my world mine. through self-transcendence. Existentiality refer not to existence in the sense in which sticks, stones, tables, books, etc are but to personal existence the designation of which it has become through Kierkegaard a quasi-technical term.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Extended Analysis of Being-in-the-World</h3>
                <p className="mb-4">
                  This fundamental trait of Dasein, which is expressly discussed as central in the analysis of 'Being'- in' is its 'ERSCHOLOSSENHEIT' that is the 'Disclosed'. Discovered', unveiled stale of Dasein. This is vividly portrayed in the well — known metaphor of the 'LUMEN NATURALE'. In man with the essential 'ERSCHLOSSENHEIT' of Dasein in one with that of the existence of the world.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Detailed Critique</h3>
                <p className="mb-4">
                  In his books The God Who is There and Escape From Reason, Francis Schaeffer details the change that has taken place in man's concept of truth. He calls this change the line of despair. Above the line of despair men operated with the belief that they could, through the use of reason work out the answers to knowledge, meaning and value in life. Below the line, men have given up all hope of achieving a rational unified answer to knowledge and life.
                </p>
                
                <p className="mb-4">
                  This problem is prevalent throughout Heidegger's works. Not only does Heidegger redefine many terms from their common understanding in order to prove whatever point he is trying to make, he constantly creates terms (often hyphenated) and then speaks of them as if they were things.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Final Assessment</h3>
                <p className="mb-4">
                  Heidegger had been admired for his courage in working against traditions, hence. F.H. Heinemann identified him as the personification of heroic defiance. He writes in defiance of the traditional ontology, terminology, logic and ethics. Another factor of admiration lies in the Heideggerian method, of inclusiveness. This inclusiveness pervades all through the thoughts of Heidegger, hence he never speaks of concealment without unconcealment; truth and untruth and error; Being (Nothingness) and beings (what - is) with special reference to Dasein.
                </p>
                
                <div className="mt-6 text-center">
                  <button 
                    onClick={() => setShowFullContent(false)}
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Show Less
                  </button>
                </div>
              </div>
            )}
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