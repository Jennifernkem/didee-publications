export default function ArticlesPage() {
  const articles = [
    {
      id: 'sample-article-1',
      title: 'Sample Research Article',
      author: 'Dr. John Smith',
      field: 'Psychology',
      publishedDate: '2024-01-15',
      abstract: 'This is a sample abstract for demonstration purposes...'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Published Articles</h1>
        
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
      </div>
    </div>
  )
}