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
    { name: "Thaddius Ayogun Chinedu", specialty: "Social Sciences" },
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