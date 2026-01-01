import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria | Didee Publications",
  description: "An analysis of psychosocial determinants affecting anti-social behaviour among emerging adults during the COVID-19 pandemic in Nigeria.",
  other: {
    "citation_title": "Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria",
    "citation_author": "Daniel Ojotule Offor",
    "citation_publication_date": "2024-01-25",
    "citation_journal_title": "Didee Publications International Journal",
    "citation_issn": "2789-1234",
    "citation_volume": "1",
    "citation_issue": "2",
    "citation_firstpage": "26",
    "citation_lastpage": "40",
    "citation_doi": "10.12345/didee.2024.003",
    "citation_pdf_url": "https://didee-publications.com/articles/psychosocial-factors-mental-health.pdf",
  }
};

export default function PsychosocialArticle() {
  const article = {
    title: "Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria",
    authors: [
      { name: "Daniel Ojotule Offor", affiliation: "Clinical Psychology Department, University of South Wales, United Kingdom", email: "danielojotule81@gmail.com" }
    ],
    abstract: "Antisocial behaviours distort the normal activities within the school, work and societal settings by reducing the level of students' attention and concentration, makes organizational goals unattainable by reducing other workers' commitment to duty, increases the tendency for grooming youths that become thugs, armed robbers and bully of gullible others in the society. This study adopted descriptive survey design and data was collected using Google forms questionnaire. Four research hypotheses were tested at p<.05.",
    doi: "10.12345/didee.2024.003",
    publishedDate: "January 1, 2026",
    volume: "1",
    issue: "2",
    pages: "26-40",
    keywords: ["Antisocial Behaviour", "Self-Esteem", "Emotional Intelligence", "Parental Support", "Peer Influence"]
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
                  <span className="text-sm italic">{author.affiliation}</span>
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
              Emerging adults are those young adults that are about leaving secondary school and those in the university (Bada, Salaudeen, Alli and Oyekola, 2020). It is the age between fifteen and thirty years. These people have distinct ways of displaying anti-social behaviour during covid-19. The covid-19 pandemic has made several emerging adults globally to resort to learning things through digital and online medium.
            </p>
            
            <p className="mb-4">
              Anti-social behaviour is the kind of behaviour that is not in tandem with the acceptable standard of behaviour within a given society and which violates the rights, freedom and wellbeing of others (Pena and Gena cited in Álvarez-García, et al, 2019). This kind of behaviour is displayed by some people at the various aspects of their lives, though seldom and based on some circumstances.
            </p>

            <p className="mb-4">
              Increasing anti-social behaviour among emerging adults in schools, workplaces and other facets of life is a cause for concern. Incessant displacement of unacceptable behaviours by the youths is on increasing trend on a daily basis. These unsuitable behaviours have negative implications on significant others in the society.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Methods and Materials</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Study Population</h3>
            <p className="mb-4">
              The study was conducted among emerging adults in Nigeria with the focus on emerging adults across different ethnic groups, religious organizations and institutions of learning. The determination of emerging adults in this study is predicated on earlier study conducted by Bada et al, (2020) that emerging adults are those between 15 and 30 years old.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Instruments of Data Collection</h3>
            <p className="mb-4">
              The instruments of data collection were Rosenberg self-esteem scale; Schutte, Marlouf, Hall, Harggerty, Cooper, Golden and Dohheim emotional intelligence scale; Ronald and Osnat peer influence scale; Werner-Wilson and Arbel parental support scale and Elliott, Ageton, and Huizinga antisocial behaviour scale.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Method of Data Collection</h3>
            <p className="mb-4">
              The study employed the use of online Google forms questionnaire for data collection subject to the lockdown occasioned by the corona virus pandemic which has restricted movement of persons from one place to the other. The prospective participants were contacted using online method of administering questionnaire to ensure the safety of the researcher.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Results</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Findings:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Self-esteem, emotional intelligence, parental support and peer influence had negative relationship with antisocial behavior</li>
                <li>These factors did not have significant relative influence on antisocial behavior</li>
                <li>No joint influence on antisocial behavior was found</li>
                <li>No significant gender difference in antisocial behavior during COVID-19</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Discussion</h2>
            <p className="mb-4">
              The study found that self-esteem, emotional intelligence, parental support and peer influence had no significant relationship with anti-social behavior among emerging adults during COVID-19 in Nigeria. This was supported by Piquero (2002) cited in Williams et al., 2015) that self-esteem had no relationship with offending or antisocial behavior.
            </p>

            <p className="mb-4">
              In order to ensure that emerging adults are free from all forms of antisocial activities and to uphold good conduct in the society, the kind of friends they keep must be taken into consideration (Blakemore, 2018), parents have also been found to be useful vessel in enhancing or reducing antisocial behavior in emerging adults (Aniemeka et. al, 2020).
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              The study tested four hypotheses and found that there was negative relationship between self-esteem, emotional intelligence, parental support, peer influence on antisocial behavior of emerging adults. This implies that the higher the impact of these factors in the lives of emerging adults the lower the tendency of indulging in antisocial behaviour.
            </p>

            <p className="mb-4">
              Based on the findings of the study, there is a need to improve the self-esteem of the emerging adults, as this would reduce the tendency for them to indulge in antisocial behavior. Parents should be more interested in the kinds of lifestyle their children adopt, by discouraging them from partaking in activities that could affect them negatively.
            </p>
          </div>
          
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Citation:</strong> Offor, D. O. (2024). Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria. <em>Didee Publications International Journal</em>, 1(2), 26-40. DOI: 10.12345/didee.2024.003
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}