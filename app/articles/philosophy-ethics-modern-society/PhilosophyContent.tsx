'use client';
import { useState } from 'react';

export default function PhilosophyContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy</h1>
          
          <div className="mb-4">
            <div className="text-gray-700">
              <strong>Daniel Ojotule Offor</strong><br/>
              <span className="text-sm">danielojotule81@gmail.com</span><br/>
              <span className="text-sm italic">Clinical Psychology Department, University of South Wales, United Kingdom</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div><strong>DOI:</strong> 10.12345/didee.2024.002</div>
              <div><strong>Published:</strong> January 1, 2026</div>
              <div><strong>Volume:</strong> 1, Issue: 2</div>
              <div><strong>Pages:</strong> 11-25</div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Abstract</h3>
            <p className="text-gray-700">The research work aims to expose Heidegger's idea of nothingness which is not only a response to Hegelianism, but also a background upon which the doctrine of both phenomenology and existentialism rests.</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {["Dasein's basic state", "Existentiality", "Throwness", "Nothingness", "Heideggerian philosophy"].map((keyword, index) => (
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
            The philosopher, Aristotle, stated in his metaphysics with the classical assertion that "All men by nature desire to know." Knowledge is man's delight, since it is connected with his quest for survival. Man's quest for knowledge has led him to various discoveries and inventions which have made life more meaningful and comfortable.
          </p>
          
          <p className="mb-4">
            Philosophy as the love of wisdom has been at the forefront of this quest for knowledge. From the ancient Greek philosophers to the contemporary thinkers, philosophy has continued to provide frameworks for understanding existence, reality, and human nature.
          </p>

          {!isExpanded && (
            <button
              onClick={toggleExpanded}
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 mb-6"
            >
              Read More
            </button>
          )}

          {isExpanded && (
            <>
              <h2 className="text-2xl font-bold mt-8 mb-4">Methodology</h2>
              <p className="mb-4">
                The work employed a methodological approach which is strictly expository and critical in the sense that it takes off on a note of general prologue. The method is analytical in approach, examining Heidegger's fundamental concepts through careful textual analysis and philosophical interpretation.
              </p>
              
              <p className="mb-4">
                This research utilizes primary sources from Heidegger's major works, particularly "Being and Time" and "What is Metaphysics?" alongside secondary literature from prominent Heidegger scholars to provide a comprehensive understanding of his philosophical framework.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Discussion</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Dasein's Basic State</h3>
              <p className="mb-4">
                Being-in-the-World in general is the basic state of Dasein. This compound expression "Being-in-the world" indicates in the very way we have coined it, that it stands for a unitary phenomenon. This primary datum must be seen as a whole.
              </p>
              
              <p className="mb-4">
                Heidegger's concept of Dasein represents a fundamental departure from traditional philosophical approaches to human existence. Rather than viewing humans as subjects confronting objects, Heidegger presents Dasein as always already engaged with the world in a meaningful way.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">The Concept of Throwness (Geworfenheit)</h3>
              <p className="mb-4">
                Throwness refers to the factical condition of Dasein's existence - the fact that we find ourselves already thrown into a world not of our choosing. This thrownness is not merely a past event but an ongoing existential structure that characterizes Dasein's mode of being.
              </p>
              
              <p className="mb-4">
                The phenomenon of throwness reveals itself in various moods and dispositions, particularly in anxiety (Angst), which discloses the groundlessness of Dasein's existence and opens up the possibility of authentic self-understanding.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Nothingness and Anxiety</h3>
              <p className="mb-4">
                Heidegger's analysis of nothingness is intimately connected with his understanding of anxiety as a fundamental attunement. Unlike fear, which has a determinate object, anxiety reveals the nothingness that underlies all beings and possibilities.
              </p>
              
              <p className="mb-4">
                This nothingness is not mere absence or negation but rather the condition that makes possible the disclosure of beings as beings. It is through the experience of anxiety that Dasein encounters its own finitude and the groundlessness of existence.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Existential Authenticity</h3>
              <p className="mb-4">
                The confrontation with nothingness opens up the possibility of authentic existence. Authenticity involves owning up to one's thrownness while simultaneously projecting oneself toward future possibilities in a resolute manner.
              </p>
              
              <p className="mb-4">
                This authentic mode of existence stands in contrast to the everyday mode of "falling" (Verfallenheit), where Dasein loses itself in the anonymous "they-self" (das Man) and flees from the anxiety-provoking encounter with its own finitude.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Temporal Structure of Existence</h3>
              <p className="mb-4">
                Heidegger's analysis reveals that Dasein's existence is fundamentally temporal, characterized by the unity of past (thrownness), present (fallenness), and future (projection). This temporal structure is not linear but rather ecstatic, with each dimension interpenetrating the others.
              </p>
              
              <p className="mb-4">
                The authentic temporality of Dasein involves a resolute repetition of inherited possibilities while remaining open to future possibilities that have not yet been actualized.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Implications for Modern Ethics</h2>
              <p className="mb-4">
                Heidegger's analysis of throwness and nothingness has profound implications for contemporary ethical thinking. By revealing the groundlessness of traditional metaphysical foundations, his work opens up new possibilities for understanding moral responsibility and authentic action.
              </p>
              
              <p className="mb-4">
                The recognition of our thrown condition does not lead to nihilism but rather to a more profound understanding of human freedom and responsibility. We are called to take responsibility for our existence precisely because it lacks predetermined essence or foundation.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Critical Assessment</h2>
              <p className="mb-4">
                While Heidegger's analysis provides valuable insights into the structure of human existence, it has also been subject to various criticisms. Some argue that his emphasis on anxiety and nothingness leads to an overly pessimistic view of human existence.
              </p>
              
              <p className="mb-4">
                Others have questioned whether his analysis adequately accounts for the social and intersubjective dimensions of human existence, despite his acknowledgment of being-with-others as a fundamental structure of Dasein.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
              <p className="mb-4">
                This essay exposes what it considers as Nothingness the onto-existential structure of Dasein. By giving its many applications and the metaphysical significance, we have been able to establish that Heidegger's concept of nothingness is not a mere negation but rather the condition that makes possible the disclosure of beings and the authentic existence of Dasein.
              </p>
              
              <p className="mb-4">
                The dialectical relationship between throwness and nothingness reveals the fundamental structure of human existence as finite, temporal, and called to authenticity. This analysis provides a foundation for understanding both the limitations and possibilities of human existence in the modern world.
              </p>
              
              <p className="mb-4">
                Heidegger's contribution to existential philosophy continues to influence contemporary discussions in ethics, psychology, and theology, offering resources for thinking about human existence in ways that neither reduce it to mere objectivity nor inflate it with false transcendence.
              </p>

              <button
                onClick={toggleExpanded}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 mt-6"
              >
                Show Less
              </button>
            </>
          )}
        </div>
        
        <footer className="mt-12 pt-8 border-t">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Citation:</strong> Offor, D. O. (2026). Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy. <em>Didee Publications International Journal</em>, 1(2), 11-25. DOI: 10.12345/didee.2024.002
            </p>
          </div>
        </footer>
      </article>
    </div>
  );
}