"use client"
import { useState } from "react";
import Navigation from "../../components/Navigation";

export default function SubmitPage() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Navigation />

      {/* HEADER */}
      <header className="py-16 px-6 text-center">
        <h1 className="text-4xl font-serif font-semibold mb-3 text-gray-900">
          Submit Your Manuscript
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700 font-light">
          Submit your research for peer review and publication in Didee Publications International Journal.
        </p>
      </header>

      <main className="max-w-4xl mx-auto p-6 bg-white/85 shadow-sm rounded-xl border border-gray-200 backdrop-blur-sm">
        {/* UPLOAD */}
        <label className="block font-medium text-gray-900 mb-2">
          Upload Manuscript (Word format)
        </label>
        <input
          type="file"
          accept=".doc,.docx"
          className="block w-full mb-4 text-sm"
          onChange={handleFileChange}
        />
        {fileName && (
          <p className="text-sm text-gray-700 mb-6">
            Selected file: <span className="font-medium">{fileName}</span>
          </p>
        )}

        {/* ABSTRACT FIELD */}
        <label className="block font-medium text-gray-900 mb-2">Abstract (optional)</label>
        <textarea
          rows={4}
          className="block w-full border border-gray-300 rounded-lg p-3 text-sm mb-8"
          placeholder="Enter the abstract of your manuscript (optional)"
        ></textarea>

        {/* SUBMISSION GUIDELINES */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="font-serif text-xl font-semibold mb-3 text-gray-900">
            Submission Guidelines
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-relaxed">
            <li>Manuscripts must be submitted in Microsoft Word (.doc or .docx) format.</li>
            <li>Font: Times New Roman, 12pt, 1.5 line spacing.</li>
            <li>Word count: 3,000–8,000 words depending on article type.</li>
            <li>Referencing style: APA 7th Edition.</li>
            <li>Article types accepted: Original Research, Review Articles, Case Studies, Short Communications, Theoretical Papers.</li>
            <li>Manuscripts must be original and not under review elsewhere.</li>
            <li>Double-blind peer review applies to all submissions.</li>
            <li>Plagiarism screening is mandatory for all manuscripts.</li>
          </ul>
          <p className="text-sm text-gray-700 mt-4">
            For inquiries: <span className="font-medium">support@didee-publications.com</span>
          </p>
        </div>

        {/* SUBMISSION PROCESS */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h3 className="font-serif text-xl font-semibold mb-3 text-gray-900">
            Submission Process
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            After submitting, your manuscript will undergo an editorial check and double-blind peer review.
            Authors will be notified of acceptance, revision requests, or rejection via email.
          </p>
        </div>

        {/* SUBMIT BUTTON (MAILTO HYBRID) */}
        <a
          href={`mailto:support@didee-publications.com?subject=Manuscript Submission - Didee Publications&body=Dear Editorial Team,%0D%0A%0D%0AI am submitting a manuscript for consideration at Didee Publications.%0D%0A%0D%0ATitle:%0D%0AAuthors:%0D%0ACorresponding Author:%0D%0ADiscipline:%0D%0AAbstract (optional):%0D%0A%0D%0APlease find the manuscript attached.%0D%0A%0D%0AKind regards,%0D%0A[Your Name]`}
          className="block w-full text-center bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-lg font-medium transition"
        >
          Submit Manuscript
        </a>

        {/* ATTACHMENT REMINDER */}
        <p className="text-center text-xs text-gray-600 mt-3">
          Please attach your manuscript before sending the email.
        </p>
      </main>

      <div className="h-10" />
    </div>
  );
}
