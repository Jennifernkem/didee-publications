export default function ArticlesPage() {
  const articles: Array<{
    id: string;
    title: string;
    author: string;
    authorAffiliation: string;
    authorEmail: string;
    orcid?: string;
    field: string;
    publishedDate: string;
    doi: string;
    volume: number;
    issue: number;
    pages: string;
    keywords: string[];
    abstract: string;
  }> = [
    {
      id: 'exorcism-catholic-church-gabriele-amorth',
      title: 'EXORCISM IN THE CATHOLIC CHURCH ACCORDING TO GABRIELE AMORTH',
      author: 'DANIEL OJOTULE OFFOR',
      authorAffiliation: 'Department of Theology, University of Nigeria',
      authorEmail: 'daniel.offor@unn.edu.ng',
      orcid: '0000-0000-0000-0000',
      field: 'Theology',
      publishedDate: '2026-01-01',
      doi: '10.12345/didee.2026.01.001',
      volume: 1,
      issue: 1,
      pages: '1-15',
      keywords: ['Catholic Church', 'Exorcism', 'Gabriele Amorth', 'Demonic Possession', 'Pastoral Theology'],
      abstract: 'This research examines the practice of exorcism in the Catholic Church through the lens of Father Gabriele Amorth\'s extensive work and teachings. The study explores theological foundations, canonical procedures, and pastoral considerations involved in the Catholic Church\'s ministry of exorcism.'
    }
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
              <a href="/journal-info" className="text-gray-700 hover:text-blue-600">Journal Info</a>
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
                  By {article.author} • {article.authorAffiliation}<br/>
                  {article.field} • Vol. {article.volume}, Issue {article.issue} • {article.publishedDate}<br/>
                  DOI: <span className="font-mono text-sm">{article.doi}</span>
                </div>
                <div className="mb-3">
                  <strong>Keywords:</strong> {article.keywords.join(', ')}
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