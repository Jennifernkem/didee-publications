export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 md:space-x-4">
              <img src="/Black Elegant Modern Name Initials Monogram Logo.png" alt="Didee Publications" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900">Didee Publications</h1>
                <p className="text-xs md:text-sm text-gray-600">International Journal Publishing</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="/articles" className="text-gray-700 hover:text-blue-600">Articles</a>
              <a href="/reviewers" className="text-gray-700 hover:text-blue-600">Editorial Board</a>
              <a href="/journal-info" className="text-gray-700 hover:text-blue-600">Journal Info</a>
              <a href="/submit" className="text-gray-700 hover:text-blue-600">Submit Article</a>
            </nav>
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Advance Your Research Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Join thousands of researchers worldwide! Get expert review, valuable feedback, 
            and internationally recognized certification for your groundbreaking work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/submit" className="w-full sm:w-auto bg-amber-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-amber-700 shadow-lg transition-all text-center">
              Submit Your Research
            </a>
            <a href="/about" className="w-full sm:w-auto border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all text-center">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border">
              <div className="text-2xl md:text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Articles Reviewed</div>
            </div>
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border">
              <div className="text-2xl md:text-4xl font-bold text-amber-700 mb-2">50+</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Expert Reviewers</div>
            </div>
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border">
              <div className="text-2xl md:text-4xl font-bold text-amber-800 mb-2">25+</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Research Fields</div>
            </div>
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border">
              <div className="text-2xl md:text-4xl font-bold text-amber-600 mb-2">95%</div>
              <div className="text-sm md:text-base text-gray-600 font-medium">Author Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-bold">
              Comprehensive peer review services designed to elevate the quality and impact of your research
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow border-l-4 border-amber-500">
              <h4 className="text-2xl font-semibold mb-4 text-amber-700">Peer Review & Certification</h4>
              <p className="text-gray-600 mb-4 text-lg">
                Expert review with internationally recognized certification
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-4">
                <li>• Field-specific expert review</li>
                <li>• Detailed feedback report</li>
                <li>• Official certification</li>
                <li>• Quality assurance</li>
              </ul>
              <p className="font-semibold text-amber-700"></p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow border-l-4 border-amber-600">
              <h4 className="text-2xl font-semibold mb-4 text-amber-800">Full Publishing Services</h4>
              <p className="text-gray-600 mb-4 text-lg">
                Complete publishing with DOI, indexing, and global distribution
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-4">
                <li>• Peer review + certification</li>
                <li>• Professional formatting</li>
                <li>• DOI assignment</li>
                <li>• Journal indexing</li>
                <li>• Global distribution</li>
              </ul>
              <p className="font-semibold text-amber-800"></p>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Info */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Ready to Submit?</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
            <h4 className="text-xl font-semibold mb-4">Submission Process</h4>
            <p className="text-gray-600 mb-6">
              Submit your research and receive comprehensive peer review and quality assurance services
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h5 className="font-semibold mb-2">What's Included:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Expert peer review</li>
                  <li>• Detailed feedback report</li>
                  <li>• Quality assessment</li>
                  <li>• Official certification</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Review Timeline:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Initial review: 2-3 weeks</li>
                  <li>• Revision period: 1 week</li>
                  <li>• Final decision: 3-5 days</li>
                  <li>• Certificate delivery: 24 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-semibold mb-4">Didee Publications</h5>
              <p className="text-gray-400 text-sm">
                Advancing global research through rigorous peer review and quality assurance.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/submit" className="hover:text-white">Submit Article</a></li>
                <li><a href="/reviewers" className="hover:text-white">Editorial Board</a></li>
                <li><a href="/about" className="hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>info@didee-publications.com</li>
                <li>support@didee-publications.com</li>
                <li>editorial@didee-publications.com</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Research Fields</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Social Sciences</li>
                <li>Clinical Psychology</li>
                <li>Law and Art</li>
                <li>Science & Engineering</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Didee Publications. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}