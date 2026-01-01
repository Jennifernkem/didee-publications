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
      <PhilosophyContent />
    </div>
  );
}