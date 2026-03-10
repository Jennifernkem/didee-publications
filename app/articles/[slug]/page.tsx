import { Metadata } from 'next';

interface ArticleProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return [
    { slug: 'psychosocial-factors-mental-health' },
    { slug: 'philosophy-ethics-modern-society' },
    { slug: 'media-influence-adolescent-sexuality' },
    { slug: 'exorcism-catholic-church-gabriele-amorth' },
    { slug: 'peer-influence-parental-support' },
    { slug: 'soil-microbiome-crop-breeding' },
    { slug: 'forensic-psychology-curtis-flowers' },
    { slug: 'principals-perceptions' },
    { slug: 'the-roles-contextual' },
    { slug: 'youth-empowerment-pathway' },
    { slug: 'influence-of-school-locations' },
    { slug: 'enhancing-quality-assurance-in-biology-education' },
    { slug: 'counsellors-perception-of-peer-mentoring' },
    { slug: 'the-impact-exorcism-practices' }
  ];
}

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  // In production, fetch article data from database
  const article = {
    title: "Sample Research Article",
    authors: ["Dr. John Smith", "Prof. Jane Doe"],
    abstract: "This is a sample abstract for demonstration purposes.",
    doi: "10.12345/didee.2024.001",
    publishedDate: "2024-01-15",
    volume: "1",
    issue: "1",
    pages: "1-10"
  };

  return {
    title: `${article.title} | Didee Publications`,
    description: article.abstract,
    other: {
      "citation_title": article.title,
      "citation_author": article.authors.join("; "),
      "citation_publication_date": article.publishedDate,
      "citation_journal_title": "Didee Publications International Journal",
      "citation_issn": "2789-1234",
      "citation_volume": article.volume,
      "citation_issue": article.issue,
      "citation_firstpage": article.pages.split("-")[0],
      "citation_lastpage": article.pages.split("-")[1],
      "citation_doi": article.doi,
      "citation_pdf_url": `https://didee-publications.com/articles/${params.slug}.pdf`,
      "DC.Title": article.title,
      "DC.Creator": article.authors.join("; "),
      "DC.Date": article.publishedDate,
      "DC.Identifier": article.doi,
    }
  };
}

export default function ArticlePage({ params }: ArticleProps) {
  // Real article data based on slug
  const getArticleData = (slug: string) => {
    const articles: Record<string, any> = {
      'psychosocial-factors-mental-health': {
        title: "Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria",
        authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
        abstract: "This study examines psychosocial factors influencing anti-social behavior among emerging adults during COVID-19 in Nigeria.",
        doi: "10.12345/didee.2024.003",
        publishedDate: "January 15, 2024",
        volume: "1", issue: "2", pages: "26-40",
        keywords: ["Antisocial Behaviour", "Self-Esteem", "Emotional Intelligence", "COVID-19"],
        pdfUrl: "/articles/psychosocial-factors-mental-health.pdf"
      },
      'philosophy-ethics-modern-society': {
        title: "Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy",
        authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
        abstract: "This research exposes Heidegger's idea of nothingness as a response to Hegelianism and foundation for phenomenology and existentialism.",
        doi: "10.12345/didee.2024.002",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "2", pages: "11-25",
        keywords: ["Dasein", "Existentiality", "Throwness", "Nothingness", "Heideggerian philosophy"],
        pdfUrl: "/articles/philosophy-ethics-modern-society.pdf"
      },
      'media-influence-adolescent-sexuality': {
        title: "The Media Influence on the Sexuality of Adolescents and Young Adults",
        authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
        abstract: "Analysis of media's impact on adolescent sexual development and behavior.",
        doi: "10.12345/didee.2024.004",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "2", pages: "41-55",
        keywords: ["Adolescents", "media", "sexuality", "sexual behavior"],
        pdfUrl: "/articles/media-influence-adolescent-sexuality.pdf"
      },
      'exorcism-catholic-church-gabriele-amorth': {
        title: "EXORCISM IN THE CATHOLIC CHURCH ACCORDING TO GABRIELE AMORTH",
        authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of Nigeria" }],
        abstract: "Examination of exorcism practices in the Catholic Church through Father Gabriele Amorth's work.",
        doi: "10.12345/didee.2024.001",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "1", pages: "1-15",
        keywords: ["Catholic Church", "Exorcism", "Gabriele Amorth", "Theology"],
        pdfUrl: "/articles/exorcism-catholic-church-gabriele-amorth.pdf"
      },
      'peer-influence-parental-support': {
        title: "Peer Influence and Parental Support as Determinants of Anti-Social Behavior among Undergraduate Students in Selected Nigerian Universities",
        authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
        abstract: "Study examining peer influence and parental support factors in anti-social behavior among Nigerian university students.",
        doi: "10.12345/didee.2024.005",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "3", pages: "56-70",
        keywords: ["Peer Influence", "Parental Support", "Anti-Social Behavior", "University Students"],
        pdfUrl: "/articles/peer-influence-parental-support.pdf"
      },
      'soil-microbiome-crop-breeding': {
        title: "Integrating Soil Microbiome Insights into Crop Breeding for Enhanced Agricultural Sustainability",
        authors: [{ name: "Daniel Ojotule Offor", affiliation: "Agricultural Research Institute" }],
        abstract: "Research on integrating soil microbiome knowledge into modern crop breeding techniques for sustainable agriculture.",
        doi: "10.12345/didee.2024.006",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "3", pages: "71-85",
        keywords: ["Soil Microbiome", "Crop Breeding", "Agricultural Sustainability", "Biotechnology"],
        pdfUrl: "/articles/soil-microbiome-crop-breeding.pdf"
      },
      'forensic-psychology-curtis-flowers': {
        title: "Forensic Psychological Analysis of Evidentiary Failures and Jury Bias in the Curtis Flowers Case",
        authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
        abstract: "Forensic psychological examination of evidentiary issues and jury bias in the Curtis Flowers legal case.",
        doi: "10.12345/didee.2024.007",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "3", pages: "86-100",
        keywords: ["Forensic Psychology", "Jury Bias", "Legal Evidence", "Criminal Justice"],
        pdfUrl: "/articles/forensic-psychology-curtis-flowers.pdf"
      },
      'principals-perceptions': {
        title: "Principals' Perceptions of Conditions of Service as Human Resource Management Challenges in Secondary Schools in Enugu State",
        authors: [{ name: "Chima, Emmanuel Ibe", affiliation: "Department of Educational Management, Faculty of Education" }],
        abstract: "Study on principals' perceptions of service conditions and HR management challenges in secondary schools.",
        doi: "10.12345/didee.2024.008",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "4", pages: "101-115",
        keywords: ["Educational Management", "Human Resources", "Secondary Schools", "Enugu State"],
        pdfUrl: "/articles/principals-perceptions.pdf"
      },
      'the-impact-exorcism-practices': {
        title: "The Impact of Exorcism Practices on Mental Health Outcomes",
        authors: [{ name: "Daniel Ojotule Offor", affiliation: "Department of Clinical Psychology, University of South Wales" }],
        abstract: "Examination of the psychological impact of exorcism practices on mental health outcomes.",
        doi: "10.12345/didee.2024.009",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "4", pages: "116-130",
        keywords: ["Exorcism", "Mental Health", "Clinical Psychology", "Theology"],
        pdfUrl: "/articles/the-impact-exorcism-practices.pdf"
      },
      'the-roles-contextual': {
        title: "The Roles of Contextual Instructional Models in Addressing Misconceptions Held by Secondary School Physics Students",
        authors: [{ name: "Kingsley T. Onah", affiliation: "Department of Science Education" }],
        abstract: "Research on contextual instructional models for addressing physics misconceptions in secondary schools.",
        doi: "10.12345/didee.2024.010",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "4", pages: "131-145",
        keywords: ["Physics Education", "Instructional Models", "Misconceptions", "Secondary Schools"],
        pdfUrl: "/articles/the-roles-contextual.pdf"
      },
      'youth-empowerment-pathway': {
        title: "Youth Empowerment: A Pathway to Unlocking Employability and Entrepreneurial Skills in Enugu State, Nigeria",
        authors: [{ name: "Odenigbo Veronica Ngozi", affiliation: "Department of Science Education, Enugu State University of Science and Technology" }, { name: "Ukwuaba Loretta Chika", affiliation: "" }],
        abstract: "Study on youth empowerment strategies for developing employability and entrepreneurial skills.",
        doi: "10.12345/didee.2024.011",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "4", pages: "146-160",
        keywords: ["Youth Empowerment", "Employability", "Entrepreneurship", "Enugu State"],
        pdfUrl: "/articles/youth-empowerment-pathway.pdf"
      },
      'influence-of-school-locations': {
        title: "Influence of School Location on the Effectiveness of Multimedia Instruction in Christian Religious Studies in Edo State, Nigeria",
        authors: [{ name: "Alexandre Onyekachi Ugwu", affiliation: "" }],
        abstract: "Analysis of how school location affects multimedia instruction effectiveness in religious studies.",
        doi: "10.12345/didee.2024.012",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "4", pages: "161-175",
        keywords: ["School Location", "Multimedia Instruction", "Religious Studies", "Edo State"],
        pdfUrl: "/articles/Influence-of-school-locations.pdf"
      },
      'enhancing-quality-assurance-in-biology-education': {
        title: "Enhancing Quality Assurance in Biology Education Programme: Strategies for Effective Implementation of NCCE Benchmark in Colleges of Education",
        authors: [{ name: "Abigail C. Obodo", affiliation: "Department of Science Education, Enugu State University of Science and Technology" }, { name: "Kingsley T. Onah", affiliation: "Department of Science Education, Enugu State University of Science and Technology" }, { name: "Jacinta L. Ogbonna", affiliation: "Department of Biology Education, Federal College of Education Technical" }],
        abstract: "Strategies for implementing quality assurance in biology education programs in colleges of education.",
        doi: "10.12345/didee.2024.013",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "4", pages: "176-190",
        keywords: ["Quality Assurance", "Biology Education", "NCCE", "Colleges of Education"],
        pdfUrl: "/articles/enhancing-quality-assurance-in-biology-education.pdf"
      },
      'counsellors-perception-of-peer-mentoring': {
        title: "Counsellors Perception of Peer Mentoring on Students' Academic Performance in Secondary Schools in Enugu State",
        authors: [{ name: "Ikeji Maureen Chinyeaka", affiliation: "Department of Guidance and Counselling, Faculty of Education, Peaceland University" }],
        abstract: "Study on counsellors' perceptions of peer mentoring impact on academic performance in secondary schools.",
        doi: "10.12345/didee.2024.014",
        publishedDate: "January 1, 2024",
        volume: "1", issue: "4", pages: "191-205",
        keywords: ["Peer Mentoring", "Academic Performance", "Counselling", "Secondary Schools"],
        pdfUrl: "/articles/counsellors-perception-of-peer-mentoring.pdf"
      }
    };
    
    return articles[slug] || {
      title: "Article Not Found",
      authors: [],
      abstract: "This article could not be found.",
      doi: "", publishedDate: "", volume: "", issue: "", pages: "",
      keywords: [], pdfUrl: ""
    };
  };

  const article = getArticleData(params.slug);

  return (
    <div className="min-h-screen" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/Individual-article.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "headline": article.title,
            "author": article.authors.map((author: any) => ({
              "@type": "Person",
              "name": author.name,
              "affiliation": author.affiliation
            })),
            "datePublished": "2024-01-15",
            "publisher": {
              "@type": "Organization",
              "name": "Didee Publications"
            },
            "isPartOf": {
              "@type": "Periodical",
              "name": "Didee Publications International Journal",
              "issn": "2789-1234"
            },
            "identifier": article.doi,
            "abstract": article.abstract
          })
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-12 bg-white/95 rounded-lg shadow-lg backdrop-blur-sm">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
            
            <div className="mb-4">
              {article.authors.map((author: any, index: number) => (
                <div key={index} className="text-gray-700">
                  <strong>{author.name}</strong> - {author.affiliation}
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
                {article.keywords.map((keyword: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </header>
          
          <div className="prose max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-2">Full Article</h3>
              <p className="text-gray-700 mb-4">Download the complete article as PDF:</p>
              <a 
                href={article.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
          
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Citation:</strong> {article.authors.map((a: any) => a.name).join(", ")} ({new Date(article.publishedDate).getFullYear()}). 
                {article.title}. <em>Didee Publications International Journal</em>, {article.volume}({article.issue}), {article.pages}. 
                DOI: {article.doi}
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}