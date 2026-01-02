'use client';
import { useState } from 'react';

export default function PhilosophyContent() {
  const [showFullContent, setShowFullContent] = useState(false);
  
  const article = {
    title: "Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy",
    authors: [
      { name: "Daniel Ojotule Offor", affiliation: "Clinical Psychology Department, University of South Wales, United Kingdom", email: "danielojotule81@gmail.com" }
    ],
    abstract: "The research work aims to expose Heidegger's idea of nothingness which is not only a response to Hegelianism, but also a background upon which the doctrine of both phenomenology and existentialism rests.",
    doi: "10.12345/didee.2024.002",
    publishedDate: "January 1, 2026",
    volume: "1",
    issue: "2",
    pages: "11-25",
    keywords: ["Dasein's basic state", "Existentiality", "Throwness", "Nothingness", "Heideggerian philosophy"]
  };

  return (
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
            The philosopher, Aristotle, stated in his metaphysics with the classical assertion that "All men by nature desire to know." Knowledge is man's delight, since it is connected with his quest for survival.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Methodology</h2>
          <p className="mb-4">
            The work employed a methodological approach which is strictly expository and critical in the sense that it takes off on a note of general prologue.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Discussion</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Dasein's Basic State</h3>
          <p className="mb-4">
            Being-in-the–World in general is the basic state of Dasein. This compound expression "Being-in-the world" indicates in the very way we have coined it, that it stands for a unitary phenomenon.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p className="mb-4">
            This essay exposes what it considers as Nothingness the onto-existential structure of Dasein. By giving its many applications and the metaphysical significance.
          </p>
          
          <div className="mt-8 text-center">
            <button 
              onClick={() => setShowFullContent(!showFullContent)}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
            >
              {showFullContent ? 'Show Less' : 'Read Full Article'}
            </button>
            <p className="text-sm text-gray-500 mt-2">Click to view complete research content</p>
          </div>
          
          {showFullContent && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mt-6 mb-3">Extended Analysis</h3>
              <p className="mb-4">
                This fundamental trait of Dasein, which is expressly discussed as central in the analysis of 'Being'- in' is its 'ERSCHOLOSSENHEIT' that is the 'Disclosed'. Discovered', unveiled stale of Dasein.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Detailed Critique</h3>
              <p className="mb-4">
                In his books The God Who is There and Escape From Reason, Francis Schaeffer details the change that has taken place in man's concept of truth.
              </p>
            </div>
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