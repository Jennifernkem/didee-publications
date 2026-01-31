import Navigation from '../../components/Navigation';

export default function ArticlesPage() {
  const articlesByDomain = {
    "Psychology": [
      {
        id: 'psychosocial-factors-mental-health',
        title: 'Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria'
      },
      {
        id: 'trauma-manifestations-nonverbal',
        title: 'Trauma Manifestations and Nonverbal Expressions: A Clinical Study'
      },
      {
        id: 'substance-abuse-nigerian-youth',
        title: 'Substance Abuse Among Nigerian Youth: Psychological Factors and Interventions'
      }
    ],
    "Philosophy": [
      {
        id: 'philosophy-ethics-modern-society',
        title: 'Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy'
      },
      {
        id: 'childhood-trauma-effects',
        title: 'Childhood Trauma and Its Long-term Psychological Effects'
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
        title: 'EXORCISM IN THE CATHOLIC CHURCH ACCORDING TO GABRIELE AMORTH'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50 relative" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/hero-bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <Navigation />
      <div className="max-w-4xl mx-auto py-12 px-6 relative z-10">
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
    </div>
  )
}