export default function EditorialBoard() {
  const editors = [
    {
      name: "Dr. Jennifer Nkemji",
      title: "Editor-in-Chief",
      affiliation: "University of Excellence",
      expertise: "Clinical Psychology, Research Methodology",
      email: "editor@didee-publications.com"
    },
    {
      name: "Prof. Michael Anderson",
      title: "Associate Editor",
      affiliation: "International Research Institute",
      expertise: "Social Sciences, Statistical Analysis"
    },
    {
      name: "Dr. Sarah Williams",
      title: "Section Editor",
      affiliation: "Global University",
      expertise: "Law and Ethics, Academic Writing"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Editorial Board</h1>
        
        <div className="mb-8">
          <p className="text-lg text-gray-600 mb-4">
            Our editorial board consists of internationally recognized experts committed to maintaining 
            the highest standards of academic excellence and research integrity.
          </p>
        </div>

        <div className="space-y-6">
          {editors.map((editor, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{editor.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{editor.title}</p>
              <p className="text-gray-700 mb-2">{editor.affiliation}</p>
              <p className="text-gray-600 mb-2">Expertise: {editor.expertise}</p>
              {editor.email && (
                <p className="text-sm text-gray-500">{editor.email}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
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