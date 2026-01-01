import Navigation from '../../components/Navigation';

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
      id: 'philosophy-ethics-modern-society',
      title: 'Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy',
      author: 'Daniel Ojotule Offor',
      authorAffiliation: 'Clinical Psychology Department, University of South Wales, United Kingdom',
      authorEmail: 'danielojotule81@gmail.com',
      field: 'Philosophy',
      publishedDate: '2024-01-20',
      doi: '10.12345/didee.2024.002',
      volume: 1,
      issue: 2,
      pages: '11-25',
      keywords: ['Dasein\'s basic state', 'Existentiality', 'Throwness', 'Nothingness', 'Heideggerian philosophy'],
      abstract: 'The research work aims to expose Heidegger\'s idea of nothingness which is not only a response to Hegelianism, but also a background upon which the doctrine of both phenomenology and existentialism rests.'
    },
    {
      id: 'psychosocial-factors-mental-health',
      title: 'Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria',
      author: 'Daniel Ojotule Offor',
      authorAffiliation: 'Clinical Psychology Department, University of South Wales, United Kingdom',
      authorEmail: 'danielojotule81@gmail.com',
      field: 'Psychology',
      publishedDate: '2024-01-25',
      doi: '10.12345/didee.2024.003',
      volume: 1,
      issue: 2,
      pages: '26-40',
      keywords: ['Antisocial Behaviour', 'Self-Esteem', 'Emotional Intelligence', 'Parental Support', 'Peer Influence'],
      abstract: 'Antisocial behaviours distort the normal activities within the school, work and societal settings by reducing the level of students\' attention and concentration, makes organizational goals unattainable by reducing other workers\' commitment to duty.'
    },
    {
      id: 'media-influence-adolescent-sexuality',
      title: 'The Media Influence on the Sexuality of Adolescents and Young Adults',
      author: 'Daniel Ojotule Offor',
      authorAffiliation: 'Clinical Psychology Department, University of South Wales, United Kingdom',
      authorEmail: 'danielojotule81@gmail.com',
      field: 'Media Studies',
      publishedDate: '2024-01-30',
      doi: '10.12345/didee.2024.004',
      volume: 1,
      issue: 2,
      pages: '41-55',
      keywords: ['Adolescents', 'young adults', 'media', 'sexuality', 'sexual behavior', 'digital media'],
      abstract: 'Sexuality is critical to the development of the adolescents and young adults as they exhibit certain sexual behaviors which tend towards expression of their sexual feelings.'
    },
    {
      id: 'exorcism-catholic-church-gabriele-amorth',
      title: 'EXORCISM IN THE CATHOLIC CHURCH ACCORDING TO GABRIELE AMORTH',
      author: 'DANIEL OJOTULE OFFOR',
      authorAffiliation: 'Department of Theology, University of Nigeria',
      authorEmail: 'daniel.offor@unn.edu.ng',
      orcid: '0000-0000-0000-0000',
      field: 'Theology',
      publishedDate: '2024-12-19',
      doi: '10.12345/didee.2024.001',
      volume: 1,
      issue: 1,
      pages: '1-15',
      keywords: ['Catholic Church', 'Exorcism', 'Gabriele Amorth', 'Demonic Possession', 'Pastoral Theology'],
      abstract: 'This research examines the practice of exorcism in the Catholic Church through the lens of Father Gabriele Amorth\'s extensive work and teachings. The study explores theological foundations, canonical procedures, and pastoral considerations involved in the Catholic Church\'s ministry of exorcism.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Navigation />
      <div className="absolute inset-0 opacity-60 top-20">
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