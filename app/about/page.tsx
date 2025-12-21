export default function About() {
  const backgroundStyle = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={backgroundStyle}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Didee Publications</h1>
          <p className="text-xl text-gray-200">Empowering researchers worldwide through rigorous peer review and professional publishing</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-6 -mt-8">
        {/* Mission Card */}
        <div className="bg-white rounded-lg shadow-lg border p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Didee Publications is a premier academic platform dedicated to maintaining the highest standards 
            of scholarly research. We connect researchers with expert peer reviewers and provide comprehensive 
            publishing services to ensure quality, credibility, and global reach for academic work.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Peer Review & Certification</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Expert review by qualified professionals
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Comprehensive quality assessment
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                International certification
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✓</span>
                Detailed feedback reports
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white rounded border">
              <p className="font-semibold text-blue-900">Investment: $100 USD</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-bold mb-4 text-green-900">Full Publishing Services</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Complete peer review process
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Professional formatting & editing
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                DOI assignment & indexing
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Global distribution network
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white rounded border">
              <p className="font-semibold text-green-900">Investment: $150 USD</p>
            </div>
          </div>
        </div>

        {/* Standards Section */}
        <div className="bg-white rounded-lg shadow-lg border p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Review Standards</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Quality Criteria</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Originality and novelty of research</li>
                <li>• Methodological rigor and accuracy</li>
                <li>• Clear presentation and structure</li>
                <li>• Relevance to the field of study</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Compliance Requirements</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Proper citation and references</li>
                <li>• Ethical compliance and integrity</li>
                <li>• Plagiarism-free content</li>
                <li>• International publishing standards</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-3">General Inquiries</h4>
              <p className="text-gray-300">info@didee-publications.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Payment Support</h4>
              <p className="text-gray-300">support@didee-publications.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Editorial Office</h4>
              <p className="text-gray-300">123 Academic Drive</p>
              <p className="text-gray-300">Research City, RC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}