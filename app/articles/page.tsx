export default function ArticlesPage() {
  const articles: Array<{
    id: string;
    title: string;
    author: string;
    field: string;
    publishedDate: string;
    abstract: string;
  }> = []

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
      <div className="absolute inset-0 opacity-60">
        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-4xl mx-auto py-12 px-6 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-12">Published Articles</h1>
        
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles published yet. Check back soon for new publications!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {articles.map(article => (
              <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-2">
                  <a href={`/articles/${article.id}`} className="text-blue-600 hover:underline">
                    {article.title}
                  </a>
                </h2>
                <div className="text-gray-600 mb-3">
                  By {article.author} • {article.field} • {article.publishedDate}
                </div>
                <p className="text-gray-700">{article.abstract}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}