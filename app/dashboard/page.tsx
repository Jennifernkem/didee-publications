export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with background */}
      <section className="relative py-16 bg-cover bg-center" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Research Dashboard</h1>
          <p className="text-xl text-gray-200">Track your submissions and review progress</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto p-6 -mt-8">
        
        <div className="bg-white rounded-lg shadow-lg border">
          <div className="p-6 border-b bg-gray-50">
            <h2 className="text-2xl font-semibold text-gray-900">My Submissions</h2>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {/* Sample submission */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">AI in Healthcare Applications</h3>
                    <p className="text-sm text-gray-600">Medicine • Submitted Dec 15, 2024</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    Under Review
                  </span>
                </div>
                <div className="mt-3 text-sm text-gray-600">
                  <p>Reviewer: Dr. Sarah Johnson</p>
                  <p>Expected completion: Dec 30, 2024</p>
                </div>
              </div>
              
              {/* Empty state */}
              <div className="text-center py-12 text-gray-500">
                <p>No submissions yet</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg">
                  Submit Your First Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}