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
      },
      {
        id: 'academic-motivation-personality-type',
        title: 'Academic Motivation, Personality Type, and Academic Self-Efficacy as Predictors of Library Usage Frequency among In-School Adolescents in Public Secondary Schools in Ibadan, Oyo State, Nigeria'
      },
      {
        id: 'influence-of-library-environment',
        title: "Influence of Library Environment, Resource Availability, and Study Duration on Students' Mental Health: The Mediating Role of Academic Stress among Polytechnic Ibadan Students"
      },
      {
        id: 'psychological-factors-affecting-students-wellbeing',
        title: 'Psychological Factors Affecting Wellbeing of Students Living with Sickle Cell Anemia in Senior Secondary School in Enugu State'
      }
    ],
    "Education": [
      {
        id: 'principals-perceptions',
        title: "Principals' Perceptions of Conditions of Service as Human Resource Management Challenges in Secondary Schools in Enugu State"
      },
      {
        id: 'the-roles-contextual',
        title: 'The Roles of Contextual Instructional Models in Addressing Misconceptions Held by Secondary School Physics Students'
      },
      {
        id: 'youth-empowerment-pathway',
        title: 'Youth Empowerment: A Pathway to Unlocking Employability and Entrepreneurial Skills in Enugu State, Nigeria'
      },
      {
        id: 'influence-of-school-locations',
        title: 'Influence of School Location on the Effectiveness of Multimedia Instruction in Christian Religious Studies in Edo State, Nigeria'
      },
      {
        id: 'enhancing-quality-assurance-in-biology-education',
        title: 'Enhancing Quality Assurance in Biology Education Programme: Strategies for Effective Implementation of NCCE Benchmark in Colleges of Education'
      },
      {
        id: 'counsellors-perception-of-peer-mentoring',
        title: "Counsellors Perception of Peer Mentoring on Students' Academic Performance in Secondary Schools in Enugu State"
      },
      {
        id: 'comparative-study-of-constraints',
        title: 'Comparative Study of Constraints to Administrative Effectiveness of Public and Private Secondary Schools in Enugu State'
      },
      {
        id: 'effects-of-projected-nonprojected',
        title: "Comparative Study of the Effects of Projected and Non-Projected Instructional Materials on Students' Achievement in English Language in Secondary Schools in Enugu Education Zone"
      },
      {
        id: 'efficacy-of-multimedia-instruction',
        title: 'Efficacy of Multimedia Instruction on Student Interest and Achievement in Christian Religious Studies in Edo State'
      },
      {
        id: 'influence-of-gender',
        title: 'Influence of Gender on the Effectiveness of Multimedia Instruction in Christian Religious Studies in Edo State, Nigeria'
      },
      {
        id: 'integrating-emerging-technologies',
        title: 'Integrating Emerging Technologies into Guidance and Counselling for Sustainable Development in Public Universities in South-East, Nigeria'
      },
      {
        id: 'management-of-sports-facilities',
        title: 'Management of Sports Facilities in Secondary Schools in Enugu State, Nigeria'
      },
      {
        id: 'principals-adoption-of-artificial-intelligence',
        title: 'Principals Adoption of Artificial Intelligence (AI) for Human Resource Management in Secondary Schools in Enugu State'
      },
      {
        id: 'utilization-of-active-listening-skills',
        title: 'Utilization of Active Listening Skills for Enhancing Counselling Practice in Secondary Schools in Enugu State, Nigeria'
      },
      {
        id: 'utilization-of-online-learning-platforms',
        title: 'Utilization of Online Learning Platforms for Effective Instructional Delivery by University Business Educators in South-East, Nigeria'
      },
      {
        id: 'utilization-of-sports-facilities',
        title: 'Utilization of Sports Facilities in Secondary Schools in Enugu State, Nigeria'
      }
    ],
    "Philosophy": [
      {
        id: 'philosophy-ethics-modern-society',
        title: 'Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy'
      },
      {
        id: 'justice-and-rights',
        title: "Justice and Rights in Nozick's Libertarianism: What Prospect for Community and Nation?"
      }
    ],
    "Media Studies": [
      {
        id: 'media-influence-adolescent-sexuality',
        title: 'The Media Influence on the Sexuality of Adolescents and Young Adults'
      },
      {
        id: 'cultural-soundscape',
        title: 'Cultural Soundscapes: How African Music Shapes and Reflects Democratic Ideals'
      }
    ],
    "Theology": [
      {
        id: 'exorcism-catholic-church-gabriele-amorth',
        title: 'Exorcism in the Catholic Church According to Gabriele Amorth'
      },
      {
        id: 'the-impact-exorcism-practices',
        title: 'The Impact of Exorcism Practices on Mental Health Outcomes'
      }
    ],
    "Agriculture": [
      {
        id: 'soil-microbiome-crop-breeding',
        title: 'Integrating soil microbiome insights into crop breeding for enhanced stress resilience'
      },
      {
        id: 'improved-drought-and-heat-tolerance',
        title: 'Drought and Heat Tolerance Mechanisms in Underutilised Legume Species: A Systematic Review'
      },
      {
        id: 'environmental-sanitation',
        title: 'Environmental Sanitation Activities Utilized in Resolving Environmental Issues for Sustainable Community Development in South East States, Nigeria'
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
            <p><strong>Total Articles:</strong> 31</p>
            <p><strong>Domains:</strong> Psychology, Education, Philosophy, Media Studies, Theology, Agriculture, Law</p>
          </div>
        </div>
      </div>
    </div>
  )
}
