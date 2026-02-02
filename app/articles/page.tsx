import Navigation from '../../components/Navigation';

export default function ArticlesPage() {
  const articlesByDomain = {
    "Psychology": [
      {
        id: 'psychosocial-factors-mental-health',
        title: 'Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria'
      },
      {
        id: 'peer-influence-parental-support',
        title: 'Peer Influence and Parental Support as Determinants of Anti-Social Behavior among Undergraduate Students in Selected Nigerian Universities'
      }
    ],
    "Philosophy": [
      {
        id: 'philosophy-ethics-modern-society',
        title: 'Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy'
      }
    ],
    "Media Studies": [
      {
        id: 'media-influence-adolescent-sexuality',
        title: 'The Media Influence on the Sexuality of Adolescents and Young Adults'
      }
    ],
    "Theology": [
      {
        id: 'exorcism-catholic-church-gabriele-amorth',
        title: 'Exorcism in the Catholic Church According to Gabriele Amorth'
      }
    ],
    "Agriculture": [
      {
        id: 'soil-microbiome-crop-breeding',
        title: 'Integrating soil microbiome insights into crop breeding for enhanced stress resilience'
      }
    ],
    "Law": [
      {
        id: 'forensic-psychology-curtis-flowers',
        title: 'Forensic Psychological Analysis of Evidentiary Failures and Jury Bias in the Curtis Flowers Case'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50 relative" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/hero-bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <Navigation />
      <div className="max-w-6xl mx-auto py-12 px-6 relative z-10 grid md:grid-cols-3 gap-8">
        {/* Left side - Articles */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">Published Articles</h1>
        
        {Object.entries(articlesByDomain).map(([domain, articles]) => (
          <div key={domain} className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-white drop-shadow-md border-b-2 border-white/30 pb-2">{domain}</h2>
            <div className="space-y-4">
              {articles.map(article => (
                <div key={article.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">
                    <a href={`/articles/${article.id}`} className="text-blue-600 hover:underline hover:text-blue-800 transition-colors">
                      {article.title}
                    </a>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>

        {/* Right side - Image */}
        <div className="bg-white/90 rounded-xl p-6 backdrop-blur-sm h-fit sticky top-6">
          <img 
            src="/images/article-side.jpg" 
            alt="Academic research" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Research Excellence</h3>
          <p className="text-sm text-gray-600 mb-4">Explore our collection of peer-reviewed articles across multiple disciplines.</p>
          <div className="text-xs text-gray-500">
            <p><strong>Total Articles:</strong> 7</p>
            <p><strong>Domains:</strong> Psychology, Philosophy, Media Studies, Theology, Agriculture, Law</p>
          </div>
        </div>
      </div>
    </div>
  )
}