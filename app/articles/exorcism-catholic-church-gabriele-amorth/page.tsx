export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = {
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
    abstract: `This research examines the practice of exorcism in the Catholic Church through the lens of Father Gabriele Amorth's extensive work and teachings. Father Amorth, who served as the Chief Exorcist of Rome for over 30 years, provided significant insights into the Church's approach to demonic possession and spiritual warfare. This study explores the theological foundations, canonical procedures, and pastoral considerations involved in the Catholic Church's ministry of exorcism, drawing from Amorth's documented cases and methodological approaches. The research analyzes the intersection of faith, psychology, and supernatural phenomena within the context of Catholic doctrine and practice.`,
    content: `
      <h2>Introduction</h2>
      <p>The practice of exorcism within the Catholic Church represents one of the most ancient and controversial aspects of Christian ministry. Father Gabriele Amorth (1925-2016), who served as the Chief Exorcist of Rome and founder of the International Association of Exorcists, brought unprecedented attention to this ministry through his extensive work and writings.</p>
      
      <p>This study examines the theological, canonical, and pastoral dimensions of Catholic exorcism as understood and practiced according to Amorth's methodology and the Church's official teachings.</p>

      <h2>Theological Foundations</h2>
      <p>The Catholic Church's approach to exorcism is rooted in Scripture and Tradition. The Gospels record numerous instances of Jesus Christ casting out demons, and He explicitly gave His apostles authority over unclean spirits (Mark 6:7, Luke 9:1).</p>
      
      <p>According to Amorth, the Church's understanding of demonic possession is based on several key theological principles:</p>
      <ul>
        <li>The reality of Satan and demonic forces as described in Catholic doctrine</li>
        <li>The authority of Christ over all spiritual powers</li>
        <li>The Church's participation in Christ's ministry of liberation</li>
        <li>The distinction between genuine possession and psychological disorders</li>
      </ul>

      <h2>Canonical Procedures</h2>
      <p>The Catholic Church has established specific canonical procedures for the ministry of exorcism, codified in the Code of Canon Law (Canon 1172) and the Ritual of Exorcism revised in 1999.</p>
      
      <p>Amorth emphasized the importance of following proper ecclesiastical procedures, which include:</p>
      <ul>
        <li>Thorough investigation and discernment</li>
        <li>Medical and psychological evaluation</li>
        <li>Episcopal permission and oversight</li>
        <li>Proper liturgical forms and prayers</li>
      </ul>

      <h2>Pastoral Considerations</h2>
      <p>Father Amorth's approach to exorcism was characterized by deep pastoral sensitivity and careful discernment. He stressed the importance of distinguishing between genuine cases of demonic possession and various forms of psychological, psychiatric, or spiritual distress.</p>
      
      <p>Key pastoral elements in Amorth's methodology included:</p>
      <ul>
        <li>Comprehensive pastoral care for individuals and families</li>
        <li>Collaboration with medical and mental health professionals</li>
        <li>Emphasis on prayer, sacraments, and spiritual direction</li>
        <li>Long-term accompaniment and support</li>
      </ul>

      <h2>Contemporary Relevance</h2>
      <p>Amorth's work has contributed significantly to the Church's contemporary understanding of exorcism ministry. His writings and teachings have influenced the training of exorcists worldwide and have helped establish more systematic approaches to this ancient ministry.</p>
      
      <p>The International Association of Exorcists, founded by Amorth, continues to promote proper formation and practice among Catholic exorcists globally.</p>

      <h2>Conclusion</h2>
      <p>Father Gabriele Amorth's contribution to the Catholic Church's ministry of exorcism represents a significant development in both theological understanding and pastoral practice. His emphasis on proper discernment, canonical procedures, and pastoral sensitivity has helped establish a more systematic and responsible approach to this ancient ministry.</p>
      
      <p>The study of Amorth's methodology provides valuable insights into the intersection of faith, reason, and supernatural phenomena within the Catholic tradition, offering important guidance for contemporary pastoral practice.</p>

      <h2>References</h2>
      <p><em>Note: This is a template structure. The actual academic paper would include comprehensive citations and references to Father Amorth's works, Church documents, and relevant theological sources.</em></p>
    `
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": article.title,
            "author": {
              "@type": "Person",
              "name": article.author,
              "affiliation": article.authorAffiliation,
              "email": article.authorEmail,
              "identifier": article.orcid
            },
            "datePublished": article.publishedDate,
            "publisher": {
              "@type": "Organization",
              "name": "Didee Publications",
              "url": "https://didee-publications.com"
            },
            "isPartOf": {
              "@type": "PublicationVolume",
              "volumeNumber": article.volume,
              "issueNumber": article.issue
            },
            "pageStart": article.pages.split('-')[0],
            "pageEnd": article.pages.split('-')[1],
            "identifier": article.doi,
            "keywords": article.keywords.join(', '),
            "abstract": article.abstract,
            "inLanguage": "en",
            "about": article.field
          })
        }}
      />
    <div className="min-h-screen bg-white relative">
      <div className="absolute inset-0 opacity-50">
        <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-4xl mx-auto py-12 px-6 relative z-10">
        <article className="bg-white bg-opacity-95 rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">{article.title}</h1>
            <div className="text-gray-600 mb-4 text-lg">
              <div className="mb-2">
                <strong>Author:</strong> {article.author}<br/>
                <strong>Affiliation:</strong> {article.authorAffiliation}<br/>
                <strong>Email:</strong> {article.authorEmail}<br/>
                <strong>ORCID:</strong> {article.orcid}
              </div>
              <div className="mb-2">
                <strong>Field:</strong> {article.field} • <strong>Published:</strong> {article.publishedDate}<br/>
                <strong>Volume:</strong> {article.volume} • <strong>Issue:</strong> {article.issue} • <strong>Pages:</strong> {article.pages}<br/>
                <strong>DOI:</strong> <span className="font-mono">{article.doi}</span>
              </div>
              <div className="mb-4">
                <strong>Keywords:</strong> {article.keywords.join(', ')}
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold mb-3 text-lg text-gray-900">Abstract</h3>
              <p className="text-gray-700 leading-relaxed">{article.abstract}</p>
            </div>
          </header>
          
          <div 
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>
      </div>
    </div>
    </>
  )
}