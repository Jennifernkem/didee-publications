export default function JournalInfo() {
  return (
    <div className="min-h-screen bg-white relative">
      <div className="absolute inset-0 opacity-15">
        <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Journal Information</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Publication Details</h3>
            <div className="space-y-3">
              <div><strong>Journal Title:</strong> Didee Publications International Journal</div>
              <div><strong>ISSN (Online):</strong> 2789-1234</div>
              <div><strong>Publisher:</strong> Didee Publications</div>
              <div><strong>Frequency:</strong> Quarterly</div>
              <div><strong>Language:</strong> English</div>
              <div><strong>Founded:</strong> 2024</div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Indexing & Abstracting</h3>
            <div className="space-y-2">
              <div>• Google Scholar</div>
              <div>• CrossRef (DOI Assignment)</div>
              <div>• DOAJ (Directory of Open Access Journals)</div>
              <div>• Academic Search Engines</div>
              <div>• Scopus (Application Submitted)</div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Scope & Coverage</h3>
          <p className="text-gray-700 mb-4">
            Didee Publications International Journal publishes high-quality, peer-reviewed research 
            across multiple disciplines including:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-gray-700">
              <li>• Clinical Psychology</li>
              <li>• Social Sciences</li>
              <li>• Educational Research</li>
              <li>• Law and Ethics</li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li>• Health Sciences</li>
              <li>• Engineering</li>
              <li>• Environmental Studies</li>
              <li>• Business Administration</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Publication Ethics</h3>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              We adhere to the highest standards of publication ethics as outlined by:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Committee on Publication Ethics (COPE)</li>
              <li>• International Committee of Medical Journal Editors (ICMJE)</li>
              <li>• World Association of Medical Editors (WAME)</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Open Access Policy</h3>
          <p className="text-gray-700">
            This journal provides immediate open access to its content on the principle that making 
            research freely available to the public supports a greater global exchange of knowledge. 
            All articles are published under Creative Commons Attribution License.
          </p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-2 text-gray-700">
            <div><strong>Editorial Office:</strong> editor@didee-publications.com</div>
            <div><strong>Submissions:</strong> submissions@didee-publications.com</div>
            <div><strong>Technical Support:</strong> support@didee-publications.com</div>
            <div><strong>Website:</strong> https://didee-publications.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}