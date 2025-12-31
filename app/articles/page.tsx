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
      <div className="absolute inset-0 opacity-5">
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