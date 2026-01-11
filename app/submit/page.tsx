

"use client";
import { useState } from "react";
import Navigation from "../../components/Navigation";

export default function SubmitPage() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <header className="bg-amber-600 py-16 px-6 text-center text-white">
        <h1 className="text-4xl font-semibold mb-3">Submit Your Manuscript</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Submit your research for peer review and publication in Didee Publications International Journal.
        </p>
      </header>

      <main className="max-w-4xl mx-auto p-6 mt-10">
        <label className="block font-medium text-gray-900 mb-2">Upload Manuscript (Word format)</label>
        <input
          type="file"
          accept=".doc,.docx"
          className="block w-full mb-6"
          onChange={handleFileChange}
        />
        {fileName && (
          <p className="text-sm text-gray-700 mb-4">Selected file: {fileName}</p>
        )}

        <label className="block font-medium text-gray-900 mb-2">Abstract (optional)</label>
        <textarea
          rows={4}
          className="block w-full border border-gray-300 rounded p-3 mb-8"
          placeholder="Enter the abstract of your manuscript (optional)"
        ></textarea>

        {/* --- NEW SUBMISSION GUIDELINES SECTION --- */}
        <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
          <h3 className="font-semibold mb-3 text-gray-900">Submission Guidelines</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Manuscripts must be submitted in Microsoft Word (.doc or .docx) format.</li>
            <li>Font: Times New Roman, 12pt, with 1.5 line spacing.</li>
            <li>Word count: 3,000–8,000 words depending on article type.</li>
            <li>Referencing style: APA 7th Edition.</li>
            <li>Article types accepted: Original Research, Review Articles, Case Studies, Short Communications, Theoretical Papers.</li>
            <li>Manuscripts must be original and not under review elsewhere.</li>
            <li>All submissions undergo double-blind peer review.</li>
            <li>Plagiarism screening is mandatory for all manuscripts.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-4">
            For inquiries about submission requirements, contact:{" "}
            <span className="font-medium">support@didee-publications.com</span>
          </p>
        </div>
        {/* --- END GUIDELINES SECTION --- */}

        <div className="bg-amber-50 p-6 rounded-lg mb-6 border border-amber-200">
          <h3 className="font-semibold mb-3 text-amber-900">Submission Process</h3>
          <p className="text-sm text-amber-900">
            After submitting, your manuscript will undergo an editorial check and peer review. Authors will be notified of acceptance, revision requests, or rejection via email.
          </p>
        </div>

        <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition">
          Submit Manuscript
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Once submitted, our editorial team will contact you regarding next steps.
        </p>
      </main>
    </div>
  );
}
