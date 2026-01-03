import Navigation from '../../components/Navigation';

export default function About() {
  const backgroundStyle = {
    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center" style={backgroundStyle}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Didee Publications</h1>
          <p className="text-xl text-gray-200 font-bold">Empowering researchers worldwide through rigorous peer review and professional publishing</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-6 -mt-8">
        {/* Mission Card */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-lg border-l-4 border-purple-500 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-purple-900">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Didee Publications is a premier academic platform dedicated to maintaining the highest standards 
            of scholarly research. We connect researchers with expert peer reviewers and provide comprehensive 
            publishing services to ensure quality, credibility, and global reach for academic work.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg shadow-lg border-l-4 border-orange-500 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-orange-900">Our Leadership</h2>
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">DO</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">Daniel Offor Ojotule</h3>
              <p className="text-lg text-blue-600 mb-4">Founder & Chief Executive Officer</p>
              <p className="text-gray-700 leading-relaxed">
                Didee Publications is led by its Founder and Chief Executive Officer, Offor Daniel Ojotule, 
                whose extensive academic training in psychology, clinical psychology, behavioral science, 
                philosophy, and theology informs the intellectual and ethical foundation of the company. 
                He holds advanced degrees from leading institutions in the United Kingdom and the United States, 
                as well as a Bachelor's degree from the University of Ibadan, Nigeria.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This multidisciplinary background shapes the editorial vision of Didee Publications, ensuring 
                that every publication reflects depth, integrity, and a commitment to meaningful impact. 
                Under his leadership, the company continues to grow as a trusted platform for authors, 
                educators, thought leaders, and change-makers around the world.
              </p>
            </div>
          </div>
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
            
          </div>
        </div>

        {/* Standards Section */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg shadow-lg border-l-4 border-teal-500 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-teal-900">Our Review Standards</h2>
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

        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg shadow-lg border-l-4 border-indigo-500 p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-indigo-900">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">General Inquiries</h4>
              <p className="text-gray-700">info@didee-publications.com</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <p className="text-gray-700">support@didee-publications.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}