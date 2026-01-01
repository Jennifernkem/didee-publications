import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Exorcism in the Catholic Church According to Gabriele Amorth | Didee Publications",
  description: "An examination of the practice of exorcism in the Catholic Church through Father Gabriele Amorth's extensive work and teachings.",
  other: {
    "citation_title": "Exorcism in the Catholic Church According to Gabriele Amorth",
    "citation_author": "Daniel Ojotule Offor",
    "citation_publication_date": "2024-12-19",
    "citation_journal_title": "Didee Publications International Journal",
    "citation_issn": "2789-1234",
    "citation_volume": "1",
    "citation_issue": "1",
    "citation_firstpage": "1",
    "citation_lastpage": "15",
    "citation_doi": "10.12345/didee.2024.001",
    "citation_pdf_url": "https://didee-publications.com/articles/exorcism-catholic-church-gabriele-amorth.pdf",
  }
};

export default function ExorcismArticle() {
  const article = {
    title: 'Exorcism in the Catholic Church According to Gabriele Amorth',
    authors: [
      { name: 'Daniel Ojotule Offor', affiliation: 'Department of Theology, University of Nigeria', email: 'daniel.offor@unn.edu.ng', orcid: '0000-0000-0000-0000' }
    ],
    abstract: `This research examines the practice of exorcism in the Catholic Church through the lens of Father Gabriele Amorth's extensive work and teachings. Father Amorth, who served as the Chief Exorcist of Rome for over 30 years, provided significant insights into the Church's approach to demonic possession and spiritual warfare. This study explores the theological foundations, canonical procedures, and pastoral considerations involved in the Catholic Church's ministry of exorcism.`,
    doi: '10.12345/didee.2024.001',
    publishedDate: 'December 19, 2024',
    volume: '1',
    issue: '1',
    pages: '1-15',
    keywords: ['Catholic Church', 'Exorcism', 'Gabriele Amorth', 'Demonic Possession', 'Pastoral Theology']
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
            
            <div className="mb-4">
              {article.authors.map((author, index) => (
                <div key={index} className="text-gray-700">
                  <strong>{author.name}</strong><br/>
                  <span className="text-sm">{author.email}</span><br/>
                  <span className="text-sm italic">{author.affiliation}</span><br/>
                  <span className="text-sm">ORCID: {author.orcid}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div><strong>DOI:</strong> {article.doi}</div>
                <div><strong>Published:</strong> {article.publishedDate}</div>
                <div><strong>Volume:</strong> {article.volume}, Issue: {article.issue}</div>
                <div><strong>Pages:</strong> {article.pages}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Abstract</h3>
              <p className="text-gray-700">{article.abstract}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((keyword, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </header>
          
          <div className="prose max-w-none text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
            <p className="mb-4">
              The practice of exorcism within the Catholic Church represents one of the most ancient and controversial aspects of Christian ministry. Father Gabriele Amorth (1925-2016), who served as the Chief Exorcist of Rome and founder of the International Association of Exorcists, brought unprecedented attention to this ministry through his extensive work and writings.
            </p>
            
            <p className="mb-4">
              This study examines the theological, canonical, and pastoral dimensions of Catholic exorcism as understood and practiced according to Amorth's methodology and the Church's official teachings.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Theological Foundations</h2>
            <p className="mb-4">
              The Catholic Church's approach to exorcism is rooted in Scripture and Tradition. The Gospels record numerous instances of Jesus Christ casting out demons, and He explicitly gave His apostles authority over unclean spirits (Mark 6:7, Luke 9:1).
            </p>
            
            <p className="mb-4">
              According to Amorth, the Church's understanding of demonic possession is based on several key theological principles:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>The reality of Satan and demonic forces as described in Catholic doctrine</li>
              <li>The authority of Christ over all spiritual powers</li>
              <li>The Church's participation in Christ's ministry of liberation</li>
              <li>The distinction between genuine possession and psychological disorders</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Canonical Procedures</h2>
            <p className="mb-4">
              The Catholic Church has established specific canonical procedures for the ministry of exorcism, codified in the Code of Canon Law (Canon 1172) and the Ritual of Exorcism revised in 1999.
            </p>
            
            <p className="mb-4">
              Amorth emphasized the importance of following proper ecclesiastical procedures, which include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Thorough investigation and discernment</li>
              <li>Medical and psychological evaluation</li>
              <li>Episcopal permission and oversight</li>
              <li>Proper liturgical forms and prayers</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Pastoral Considerations</h2>
            <p className="mb-4">
              Father Amorth's approach to exorcism was characterized by deep pastoral sensitivity and careful discernment. He stressed the importance of distinguishing between genuine cases of demonic possession and various forms of psychological, psychiatric, or spiritual distress.
            </p>
            
            <p className="mb-4">
              Key pastoral elements in Amorth's methodology included:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comprehensive pastoral care for individuals and families</li>
              <li>Collaboration with medical and mental health professionals</li>
              <li>Emphasis on prayer, sacraments, and spiritual direction</li>
              <li>Long-term accompaniment and support</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contemporary Relevance</h2>
            <p className="mb-4">
              Amorth's work has contributed significantly to the Church's contemporary understanding of exorcism ministry. His writings and teachings have influenced the training of exorcists worldwide and have helped establish more systematic approaches to this ancient ministry.
            </p>
            
            <p className="mb-4">
              The International Association of Exorcists, founded by Amorth, continues to promote proper formation and practice among Catholic exorcists globally.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Father Gabriele Amorth's contribution to the Catholic Church's ministry of exorcism represents a significant development in both theological understanding and pastoral practice. His emphasis on proper discernment, canonical procedures, and pastoral sensitivity has helped establish a more systematic and responsible approach to this ancient ministry.
            </p>
            
            <p className="mb-4">
              The study of Amorth's methodology provides valuable insights into the intersection of faith, reason, and supernatural phenomena within the Catholic tradition, offering important guidance for contemporary pastoral practice.
            </p>
          </div>
          
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Citation:</strong> Offor, D. O. (2024). Exorcism in the Catholic Church According to Gabriele Amorth. <em>Didee Publications International Journal</em>, 1(1), 1-15. DOI: 10.12345/didee.2024.001
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}