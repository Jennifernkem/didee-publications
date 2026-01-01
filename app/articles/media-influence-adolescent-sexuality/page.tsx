import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "The Media Influence on the Sexuality of Adolescents and Young Adults | Didee Publications",
  description: "An examination of how media exposure affects adolescent and young adult sexual behavior and attitudes in contemporary society.",
  other: {
    "citation_title": "The Media Influence on the Sexuality of Adolescents and Young Adults",
    "citation_author": "Daniel Ojotule Offor",
    "citation_publication_date": "2024-01-30",
    "citation_journal_title": "Didee Publications International Journal",
    "citation_issn": "2789-1234",
    "citation_volume": "1",
    "citation_issue": "2",
    "citation_firstpage": "41",
    "citation_lastpage": "55",
    "citation_doi": "10.12345/didee.2024.004",
    "citation_pdf_url": "https://didee-publications.com/articles/media-influence-adolescent-sexuality.pdf",
  }
};

export default function MediaInfluenceArticle() {
  const article = {
    title: "The Media Influence on the Sexuality of Adolescents and Young Adults",
    authors: [
      { name: "Daniel Ojotule Offor", affiliation: "Clinical Psychology Department, University of South Wales, United Kingdom", email: "danielojotule81@gmail.com" }
    ],
    abstract: "Sexuality is critical to the development of the adolescents and young adults as they exhibit certain sexual behaviors which tend towards expression of their sexual feelings. The negative effect of the media on sexuality is enormous that few studies have investigated the dynamics the media is taking to affect the adolescents and young adults. The study aims to examine the effects of media on the sexuality of adolescents and young adults as well as to investigate ways of promoting a positive media influence on adolescents' and young adults' sexuality.",
    doi: "10.12345/didee.2024.004",
    publishedDate: "January 1, 2026",
    volume: "1",
    issue: "2",
    pages: "41-55",
    keywords: ["Adolescents", "young adults", "media", "sexuality", "sexual behavior", "digital media"]
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
              Adolescence and young adulthood are stages characterized by exploration and experimentation with behaviors showcased through the media. These stages have received a considerable attention from human psychologists and the public due to several developmental changes that accompany the stage. The word Adolescence is a Latin word "adolescere" meaning "to grow up" (Kar et al, 2015).
            </p>
            
            <p className="mb-4">
              Steinberg (2014) delineated five major psychosocial developmental challenges that adolescents do face in the bid to make sense of their lives. These include Identity, intimacy, autonomy, achievement and sexuality. Sexuality is referred to the fundamental quality of human life which is critical to health, happiness, development and for sustaining human existence (Friedman, 1992).
            </p>

            <p className="mb-4">
              Research has shown that adolescents and young adults constantly strive to retrieve sexual information from their parents and teachers (Akande & Akande, 2007). But most times, parents and teachers are afraid of exposing these little children to sexual contents and uncontrollable sexual behavior at the early stage of their development.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Methodology</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Search Strategy</h3>
            <p className="mb-4">
              Four electronics databases which included PubMed, Science Direct, Google Scholar, Wiley Online Library were searched for publications from year 2012 - 2022. Specific keywords searched across these databases included "adolescents," "young adults," "media," and "sexuality".
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Selection Criteria</h3>
            <p className="mb-4">
              The inclusion criteria used were (i) timeframe between 2012-2022 (ii) study population age between 12 and 25 years. This is in tune with WHO's definition of Adolescence as age between 10 and 19 years while for young adult is 15 and 24 years. (iii) study involving any forms of media either traditional or new media.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Data Extraction</h3>
            <p className="mb-4">
              1320 studies were screened based on title and 845 records were excluded. The remaining 189 records were screened based on abstract and 121 studies were retrieved while 68 records were excluded. A full-text reviews were assessed for eligibility and 16 studies were included in the review while 53 studies were excluded.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Results</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Types of Media and Sexual Contents Accessed</h3>
            <p className="mb-4">
              There are various media and sexual contents young ones are exposed to. Mekam et al (2021) found out that adolescents are exposed to multiple media to fulfil their information needs and these media include television, internet and print media. The study found out that the internet and radio/television were the frequently accessed for information on sexual issues.
            </p>

            <p className="mb-4">
              Amoo et al (2020) identified the most popular types of social media exposed to and these are social networks (Facebook and LinkedIn); media (YouTube, Instagram and Flickr) and micro blogging (Twitter). The study revealed that most prevalent social media platform used by adolescents and young adults is Facebook while the least is YouTube.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Sexual Behavior Exposure</h3>
            <p className="mb-4">
              Considering the sexual behavior exhibited by young people, Oladeji and Ayanguna (2017)'s study among the adolescents of ages between 12 and 17 years revealed some of the sexual behavior that the media expose the adolescents to and these include dating, oral sex, sexual intercourse, cohabitation, multiple sexual partners, sensation feeling behavior, sending nude pictures, engaging in abortion, sexual scripts, sexual lyrics and night parties.
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="text-lg font-semibold mb-3">Key Findings on Media Effects:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Positive correlation between media exposure and adolescent sexuality</li>
                <li>Early exposure increases likelihood of engaging in sexual activities at young age</li>
                <li>Results in risky sexual behaviors including pre-marital sex, unprotected sex</li>
                <li>Leads to unwanted pregnancy, STIs, and sexual harassment</li>
                <li>26.2% of adolescents engaged in sexting as second most prevalent social media activity</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Discussion</h2>
            <p className="mb-4">
              The study investigated the influence media have on the sexuality of the adolescents and young adults. The study identified that adolescent and young adults accessed both the traditional (print media) and the new media (social media) for sexual contents. The common traditional media they accessed include television, radio, magazines, movies while the social media include various forms of social networking sites which include Facebook, Instagram, YouTube, Flickr, Twitter.
            </p>

            <p className="mb-4">
              The study found out that adolescents and young adults mostly access the social media and source for sexual contents than the other types of media. The reason for this is not far-fetched as higher percentage of adolescents and young adults make use of smart phones and the advancement of technology through the use of internet has made it easy to access sexual contents online.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Promotion of Positive Media Influence</h3>
            <p className="mb-4">
              Considering the numerous negative effects the exposure of adolescents' and young adults to media on their sexuality, there is an urgent need to assess ways of promoting a positive media influence on this population group. Many studies have provided parent-centred ways to promote a positive media influence on adolescents' and young adults sexually.
            </p>

            <p className="mb-4">
              Scull et al (2022) revealed that organizing a Media Aware program has proven effective in promoting a positive media influence on adolescents and young adults' sexuality through the adoption of the media literacy education approach. Findings showed that 80.12% of the participants who received the program said it is a good program for young ones to learn about sexual health.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              The study revealed that the sexuality of many adolescents and young adults is increasingly influenced by media exposure, with evidence suggesting a growing prevalence of negative effects. This situation has been exacerbated by advancements in technology, particularly the emergence of the internet and the proliferation of social media platforms, which have transformed the traditional role of the media.
            </p>

            <p className="mb-4">
              This poses a lot of risks on both the physical and mental wellbeing of the young ones as they engage in sexual relationship early without protection which results in risky sexual behaviors. This underscores the importance of parents and teachers being proactive in guiding adolescents and young adults on the responsible use of media and the possible negative consequences of exposure to sexual content.
            </p>
          </div>
          
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Citation:</strong> Offor, D. O. (2024). The Media Influence on the Sexuality of Adolescents and Young Adults. <em>Didee Publications International Journal</em>, 1(2), 41-55. DOI: 10.12345/didee.2024.004
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}