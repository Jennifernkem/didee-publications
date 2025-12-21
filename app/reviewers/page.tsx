export default function Reviewers() {
  const reviewers = [
    {
      name: "Thaddius Ayogun",
      field: "Social Sciences",
      credentials: "MSc - Social Sciences",
      experience: "8+ years in social research",
      specialties: ["Social Theory", "Research Methods", "Community Studies"]
    },
    {
      name: "Dr. Emmanuel",
      field: "Clinical Psychology",
      credentials: "PhD - Clinical Psychology",
      experience: "9+ years in clinical practice",
      specialties: ["Therapy", "Mental Health", "Behavioral Analysis"]
    },
    {
      name: "Daniel Ojotule OFFOR",
      field: "Clinical Psychology",
      credentials: "MSc - Clinical Psychology",
      experience: "10+ years in clinical research",
      specialties: ["Cognitive Therapy", "Psychological Assessment", "Clinical Research"]
    },
    {
      name: "Hongjing Lin",
      field: "Clinical Psychology",
      credentials: "MSc - Clinical Psychology",
      experience: "8+ years in psychological research",
      specialties: ["Cross-Cultural Psychology", "Clinical Interventions", "Research Design"]
    },
    {
      name: "Rev. Fr. Barrister Sanctus Ejeh",
      field: "Law and Art",
      credentials: "LLB, BL - Law & Arts",
      experience: "9+ years in legal practice",
      specialties: ["Legal Research", "Art Law", "Ethics"]
    },
    {
      name: "Dr. Clementina Okeke",
      field: "Law",
      credentials: "PhD - Law",
      experience: "10+ years in legal academia",
      specialties: ["Constitutional Law", "Legal Theory", "Jurisprudence"]
    },
    {
      name: "Berna Simsek",
      field: "Psychology",
      credentials: "MSc - Psychology",
      experience: "8+ years in psychological research",
      specialties: ["Developmental Psychology", "Research Methods", "Statistical Analysis"]
    },
    {
      name: "Obiageli Nwachukwu",
      field: "Science and Engineering",
      credentials: "MSc - Engineering Sciences",
      experience: "9+ years in engineering research",
      specialties: ["Applied Sciences", "Engineering Design", "Technical Research"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Expert Peer Reviewers</h1>
          <p className="text-xl text-gray-600">
            World-class academics and researchers ensuring the highest quality standards
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewers.map((reviewer, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{reviewer.name}</h3>
                <p className="text-blue-600 font-medium">{reviewer.field}</p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-700">Credentials</p>
                  <p className="text-gray-600">{reviewer.credentials}</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-700">Experience</p>
                  <p className="text-gray-600">{reviewer.experience}</p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-700">Specialties</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {reviewer.specialties.map((specialty, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Review Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Assignment</h3>
              <p className="text-sm text-gray-600">Expert matched to your field</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Review</h3>
              <p className="text-sm text-gray-600">Thorough evaluation process</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Feedback</h3>
              <p className="text-sm text-gray-600">Detailed comments provided</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Certification</h3>
              <p className="text-sm text-gray-600">Official certificate issued</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}