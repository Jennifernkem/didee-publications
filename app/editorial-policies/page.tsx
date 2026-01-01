export default function EditorialPoliciesPage() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="absolute inset-0 opacity-60">
        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-4xl mx-auto py-12 px-6 relative z-10">
        <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Editorial Policies</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Publication Ethics</h2>
              <div className="prose max-w-none text-gray-700">
                <p>Didee Publications adheres to the highest standards of publication ethics as outlined by the Committee on Publication Ethics (COPE).</p>
                <ul>
                  <li>All submissions undergo rigorous double-blind peer review</li>
                  <li>Plagiarism detection using advanced software tools</li>
                  <li>Clear conflict of interest disclosure requirements</li>
                  <li>Transparent editorial decision-making process</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Peer Review Process</h2>
              <div className="prose max-w-none text-gray-700">
                <p><strong>Double-Blind Review:</strong> Both authors and reviewers remain anonymous throughout the review process.</p>
                <p><strong>Timeline:</strong> Initial review within 4-6 weeks, final decision within 8-12 weeks.</p>
                <p><strong>Criteria:</strong> Originality, methodological rigor, significance, and clarity of presentation.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Author Guidelines</h2>
              <div className="prose max-w-none text-gray-700">
                <ul>
                  <li>Original research articles: 6,000-8,000 words</li>
                  <li>Review articles: 8,000-10,000 words</li>
                  <li>APA citation style required</li>
                  <li>English language manuscripts only</li>
                  <li>Institutional affiliation and ORCID ID required</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Open Access Policy</h2>
              <div className="prose max-w-none text-gray-700">
                <p>All articles are published under Creative Commons Attribution License (CC BY 4.0), ensuring maximum accessibility and citation potential.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Retraction Policy</h2>
              <div className="prose max-w-none text-gray-700">
                <p>Articles may be retracted in cases of research misconduct, plagiarism, or significant errors that affect the validity of findings.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}