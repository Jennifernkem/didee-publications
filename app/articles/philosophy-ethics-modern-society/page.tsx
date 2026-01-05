import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';
import PhilosophyContent from './PhilosophyContent';

export const metadata: Metadata = {
  title: "Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy | Didee Publications",
  description: "An exploration of Heidegger's concepts of throwness and nothingness as fundamental structures of Dasein's existence.",
  other: {
    "citation_title": "Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy",
    "citation_author": "Daniel Ojotule Offor",
    "citation_publication_date": "2026-01-01",
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
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <article>
          <header className="mb-10">

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy
            </h1>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Abstract</h3>
              <p className="text-gray-700">
                This paper explores Martin Heidegger’s concepts of throwness (Geworfenheit) and nothingness
                as fundamental existential structures of Dasein. By examining their dialectical relationship,
                the study situates these concepts within Heidegger’s broader ontological project and highlights
                their relevance to contemporary philosophical inquiry.
              </p>
            </div>

            {/* PDF DOWNLOAD BUTTON */}
            <div className="mb-8">
              <a
                href="/articles/philosophy-ethics-modern-society.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-amber-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-amber-700 transition"
              >
                Download Full Article (PDF)
              </a>
            </div>

          </header>

          {/* FULL ARTICLE CONTENT */}
          <PhilosophyContent />
        </article>
      </div>
    </div>
  );
}

