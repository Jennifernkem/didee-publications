export default function ArticlePage({ params }: { params: { slug: string } }) {
  // Sample article data - replace with actual data source
  const article = {
    title: 'Sample Research Article',
    author: 'Dr. John Smith',
    field: 'Psychology',
    publishedDate: '2024-01-15',
    abstract: 'This is a sample abstract for demonstration purposes...',
    content: `
      <h2>Introduction</h2>
      <p>This is the full article content...</p>
      
      <h2>Methodology</h2>
      <p>Research methodology details...</p>
      
      <h2>Results</h2>
      <p>Research findings...</p>
      
      <h2>Conclusion</h2>
      <p>Summary and conclusions...</p>
    `
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
            <div className="text-gray-600 mb-4">
              By {article.author} • {article.field} • {article.publishedDate}
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Abstract</h3>
              <p className="text-gray-700">{article.abstract}</p>
            </div>
          </header>
          
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </div>
  )
}