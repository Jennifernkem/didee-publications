import Navigation from '../../components/Navigation';

export default function EditorialBoard() {
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

  return (
    <div className="min-h-screen bg-white relative">
      <Navigation />
      <div className="absolute inset-0 opacity-20 top-20">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Editorial Board</h1>
        
        <div className="mb-8">
          <p className="text-lg text-gray-600 mb-4">
            Our editorial board consists of internationally recognized experts committed to maintaining 
            the highest standards of academic excellence and research integrity.
          </p>
        </div>

        {/* Chief Editor */}
        <div className="bg-white/90 p-6 rounded-lg border-l-4 border-blue-600 mb-6 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{chiefEditor.name}</h3>
          <p className="text-blue-600 font-medium mb-2">{chiefEditor.title}</p>
          <p className="text-gray-700 mb-2">{chiefEditor.affiliation}</p>
          <p className="text-sm text-gray-500">{chiefEditor.email}</p>
        </div>

        <div className="space-y-6">
          {editorialBoard.map((member, index) => (
            <div key={index} className="bg-white/90 p-6 rounded-lg border shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.specialty}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50/90 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Editorial Standards</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Double-blind peer review process</li>
            <li>• Minimum 2 expert reviewers per submission</li>
            <li>• Plagiarism detection using advanced software</li>
            <li>• Adherence to COPE (Committee on Publication Ethics) guidelines</li>
            <li>• Regular editorial board meetings and training</li>
          </ul>
        </div>
      </div>
    </div>
  );
}