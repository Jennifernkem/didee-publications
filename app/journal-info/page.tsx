import Navigation from '../../components/Navigation';

export default function JournalInfo() {
  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />
      <div className="absolute inset-0 opacity-30 top-20">
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
        <div className="mb-12">
  <h3 className="text-2xl font-semibold mb-6">Academic Disciplines & Journals</h3>

  <div className="grid md:grid-cols-2 gap-8 text-gray-700">

    <div>
      <h4 className="text-lg font-semibold mb-3">Management Sciences</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>International Journal of Banking and Finance Research</li>
        <li>International Journal of Economics and Business Management</li>
        <li>International Journal of Economics and Financial Management</li>
        <li>International Journal of Social Sciences and Management Research</li>
        <li>International Journal of Marketing and Communication Studies</li>
        <li>Journal of Accounting and Financial Management</li>
        <li>Journal of Business and African Economy</li>
        <li>World Journal of Entrepreneurial Development Studies</li>
        <li>World Journal of Finance and Investment Research</li>
      </ul>
    </div>

    <div>
      <h4 className="text-lg font-semibold mb-3">Sciences</h4>
      <ul className="list-disc pl-5 space-y-1">
        <li>International Journal of Geography and Environmental Management</li>
        <li>International Journal of Agriculture and Earth Science</li>
        <li>International Journal of Applied Science and Mathematical Theory</li>
        <li>International Journal of Chemistry and Chemical Processes</li>
        <li>International Journal of Computer Science and Mathematical Theory</li>
        <li>International Journal of Health and Pharmaceutical Research</li>
        <li>International Journal of Medical Evaluation and Physical Report</li>
      </ul>
    </div>

  </div>
</div>
<div>
  <h4 className="text-lg font-semibold mb-3 mt-8">Social Sciences and Education</h4>
  <ul className="list-disc pl-5 space-y-1">
    <li>Journal of Political Science and Leadership Research</li>
    <li>International Journal of Social Sciences and Management Research</li>
    <li>Journal of Public Administration and Social Welfare Research</li>
  </ul>
</div>

<div>
  <h4 className="text-lg font-semibold mb-3 mt-8">Humanities</h4>
  <ul className="list-disc pl-5 space-y-1">
    <li>Research Journal of Mass Communication and Information Technology</li>
    <li>African Journal of History and Archaeology</li>
    <li>International Journal of English Language and Communication Studies</li>
    <li>International Journal of Religious and Cultural Practice</li>
    <li>Journal of Humanities and Social Policy</li>
    <li>Journal of Law and Global Policy</li>
    <li>Journal of Hotel Management and Tourism Research</li>
    <li>Research Journal of Humanities and Cultural Studies</li>
  </ul>
</div>

<div>
  <h4 className="text-lg font-semibold mb-3 mt-8">Engineering</h4>
  <ul className="list-disc pl-5 space-y-1">
    <li>International Journal of Engineering and Modern Technology</li>
  </ul>
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