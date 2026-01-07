export default function EditorialBoardPage() {
  const chiefEditor = {
    name: "Associate Professor Foluke Bosun-Arije",
    title: "Chief Editor",
    affiliation: "University of Doha for Science and Technology, Qatar",
    email: "Folukestella.bosunarije@udst.edu.qa"
  }

  const editorialBoard = [
    { name: "Professor Adebayo Oluwole", specialty: "Professor of Counselling Psychology and Positive Psychology" },
    { name: "Professor Julius Akinsola", specialty: "Professor of Computer Science" },
    { name: "Professor Philip Edema", specialty: "Professor of Philosophy" },
    { name: "Dr. Maria Ameh", specialty: "Clinical Psychology Practice" },
    { name: "Dr. Lovelyn Ikejiaku", specialty: "Counselling Psychology" },
    { name: "Professor Anthonia Ekanibe", specialty: "Counselling Psychology" }
  ]

  const peerReviewers = [
    { name: "Chinedu Thaddeus Ayogu", specialty: "Social Sciences" },
    { name: "Dr. Emmanuel Omopo", specialty: "Clinical Psychology" },
    { name: "Daniel Ojotule OFFOR", specialty: "Clinical and Behavioural Psychology" },
    { name: "Hongjing Lin", specialty: "Clinical Psychology" },
    { name: "Rev. Fr. Barrister Sanctus Ejeh", specialty: "Law & Philosophy" },
    { name: "Dr. Clementina Okeke", specialty: "Law" },
    { name: "Berna Simsek", specialty: "Clinical Research" },
    { name: "Obiageli Nwachukwu", specialty: "Medicine and Pharmacy" }
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Header */}
      <header className="bg-white border-b shadow-sm relative z-20">
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
              <a href="/reviewers" className="text-gray-700 hover:text-blue-600">Peer Reviewers</a>
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
      <div className="absolute inset-0 opacity-70">
        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-4xl mx-auto py-12 px-6 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-12">Editorial Board</h1>
        
        {/* Chief Editor */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8 border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Chief Editor</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{chiefEditor.name}</h3>
            <p className="text-gray-600">{chiefEditor.title}</p>
            <p className="text-gray-500">{chiefEditor.affiliation}</p>
            <p className="text-blue-600 mt-2">{chiefEditor.email}</p>
          </div>
        </div>

        {/* Editorial Board Members */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Editorial Board</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {editorialBoard.map((member, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Peer Reviewers */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Peer Reviewers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {peerReviewers.map((reviewer, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reviewer.name}</h3>
                <p className="text-gray-600">{reviewer.specialty}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Our editorial board comprises distinguished academics and practitioners committed to maintaining 
            the highest standards of scholarly excellence and integrity in academic publishing.
          </p>
        </div>
      </div>
    </div>
  )
}