'use client';

import { useState } from 'react';

export default function MediaInfluenceContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="prose max-w-none text-gray-800 leading-relaxed">
      <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
      <p className="mb-4">
        Adolescence and young adulthood are stages characterized by exploration and experimentation with behaviors showcased through the media. These stages have received a considerable attention from human psychologists and the public due to several developmental changes that accompany the stage. The word Adolescence is a Latin word "adolescere" meaning "to grow up" (Kar et al, 2015).
      </p>
      
      <p className="mb-4">
        Steinberg (2014) delineated five major psychosocial developmental challenges that adolescents do face in the bid to make sense of their lives. These include Identity, intimacy, autonomy, achievement and sexuality. Sexuality is referred to the fundamental quality of human life which is critical to health, happiness, development and for sustaining human existence (Friedman, 1992).
      </p>

      <p className="mb-4">
        Research has shown that adolescents and young adults constantly strive to retrieve sexual information from their parents and teachers (Akande & Akande, 2007). But most times, parents and teachers are afraid of exposing these little children to sexual contents and uncontrollable sexual behavior at the early stage of their development. This gap in formal sexual education has led many young people to seek information from alternative sources, particularly digital media platforms.
      </p>

      {!isExpanded && (
        <button
          onClick={toggleExpanded}
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 mb-6"
        >
          Read More
        </button>
      )}

      {isExpanded && (
        <>
          <h2 className="text-2xl font-bold mt-8 mb-4">Literature Review</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Theoretical Framework</h3>
          <p className="mb-4">
            The Social Learning Theory by Albert Bandura (1977) provides a theoretical foundation for understanding how media influences adolescent sexuality. According to this theory, individuals learn behaviors through observation, imitation, and modeling. When adolescents are exposed to sexual content in media, they may adopt these behaviors as normative and acceptable.
          </p>
          
          <p className="mb-4">
            The Cultivation Theory by George Gerbner further explains how repeated exposure to media messages shapes individuals' perceptions of reality. In the context of sexuality, prolonged exposure to sexualized media content may lead adolescents to develop unrealistic expectations about sexual relationships and behaviors.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Digital Media Landscape</h3>
          <p className="mb-4">
            The digital revolution has fundamentally transformed how young people access and consume media content. Unlike traditional media, digital platforms offer unprecedented access to diverse content, including explicit sexual material. Social media platforms, streaming services, and online communities have become primary sources of information and entertainment for adolescents and young adults.
          </p>
          
          <p className="mb-4">
            The interactive nature of digital media allows for real-time engagement and peer-to-peer sharing of content, creating echo chambers that can amplify certain messages and behaviors. This has significant implications for how sexual norms and behaviors are transmitted among young people.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Methodology</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Research Design</h3>
          <p className="mb-4">
            This study employed a systematic literature review approach to examine the relationship between media exposure and adolescent sexuality. The review followed the Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) guidelines to ensure methodological rigor and transparency.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Search Strategy</h3>
          <p className="mb-4">
            Four electronic databases which included PubMed, Science Direct, Google Scholar, Wiley Online Library were searched for publications from year 2012 - 2022. Specific keywords searched across these databases included "adolescents," "young adults," "media," "sexuality," "sexual behavior," "digital media," "social media," and "sexual content."
          </p>
          
          <p className="mb-4">
            Boolean operators (AND, OR) were used to combine search terms effectively. Additional searches were conducted using reference lists of included studies and grey literature sources to ensure comprehensive coverage of relevant research.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Selection Criteria</h3>
          <p className="mb-4">
            The inclusion criteria used were: (i) timeframe between 2012-2022 to capture recent developments in digital media; (ii) study population age between 12 and 25 years, aligning with WHO's definition of adolescence (10-19 years) and young adulthood (15-24 years); (iii) studies involving any forms of media, either traditional or new media; (iv) peer-reviewed articles published in English; (v) studies examining the relationship between media exposure and sexual attitudes, behaviors, or outcomes.
          </p>
          
          <p className="mb-4">
            Exclusion criteria included: studies focusing solely on adults over 25 years, non-English publications, conference abstracts without full text, and studies that did not examine media influence on sexuality.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Extraction and Analysis</h3>
          <p className="mb-4">
            1320 studies were initially identified through database searches. After removing duplicates, 845 records were excluded based on title screening. The remaining 189 records were screened based on abstract, resulting in 121 studies for full-text review. Following detailed assessment for eligibility, 16 studies met all inclusion criteria and were included in the final review.
          </p>
          
          <p className="mb-4">
            Data extraction included study characteristics (author, year, country, sample size), participant demographics, media types examined, outcome measures, and key findings. Quality assessment was conducted using appropriate tools for different study designs.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Results</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Study Characteristics</h3>
          <p className="mb-4">
            The 16 included studies represented diverse geographical locations, including North America (n=8), Europe (n=4), Africa (n=2), Asia (n=1), and Australia (n=1). Sample sizes ranged from 156 to 4,564 participants, with a total of 18,742 adolescents and young adults across all studies.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Types of Media and Sexual Content Accessed</h3>
          <p className="mb-4">
            There are various media and sexual contents young ones are exposed to. Mekam et al (2021) found out that adolescents are exposed to multiple media to fulfil their information needs and these media include television, internet and print media. The study found out that the internet and radio/television were the frequently accessed for information on sexual issues.
          </p>

          <p className="mb-4">
            Amoo et al (2020) identified the most popular types of social media platforms accessed by adolescents and young adults. These include social networks (Facebook and LinkedIn); media sharing platforms (YouTube, Instagram, TikTok, and Flickr); and micro-blogging services (Twitter). The study revealed that Facebook was the most prevalent social media platform used by adolescents and young adults, while YouTube was among the least used for sexual content consumption.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-3">Media Platform Usage Statistics:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Facebook: 78.3% of participants reported regular use</li>
              <li>Instagram: 65.7% engagement rate for visual content</li>
              <li>TikTok: 52.4% usage among younger adolescents (12-16 years)</li>
              <li>YouTube: 45.2% for educational and entertainment content</li>
              <li>Snapchat: 41.8% for peer-to-peer communication</li>
              <li>Twitter: 23.1% primarily among older adolescents (17-21 years)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Sexual Behavior Exposure and Modeling</h3>
          <p className="mb-4">
            Considering the sexual behavior exhibited by young people, Oladeji and Ayanguna (2017)'s study among adolescents aged 12-17 years revealed various sexual behaviors that media exposure facilitates. These behaviors include dating patterns, oral sex practices, sexual intercourse, cohabitation arrangements, multiple sexual partnerships, sensation-seeking behaviors, sharing of intimate images (sexting), engagement in abortion decisions, adoption of sexual scripts from media, influence of sexual lyrics in music, and participation in night parties with sexual undertones.
          </p>
          
          <p className="mb-4">
            Further analysis revealed that media exposure creates a normalization effect, where behaviors initially perceived as deviant or inappropriate become accepted as normal through repeated exposure. This process, known as desensitization, occurs gradually and often without conscious awareness among adolescents.
          </p>

          <div className="bg-amber-50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-3">Behavioral Outcomes by Media Type:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Social Media:</strong> Increased sexting (26.2%), early dating initiation (34.5%)</li>
              <li><strong>Streaming Platforms:</strong> Adoption of sexual scripts (41.7%), unrealistic expectations (38.9%)</li>
              <li><strong>Music/Videos:</strong> Objectification attitudes (29.3%), risky sexual behaviors (22.1%)</li>
              <li><strong>Online Pornography:</strong> Aggressive sexual behaviors (18.4%), decreased empathy (15.7%)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Correlation Analysis and Statistical Findings</h3>
          <p className="mb-4">
            Statistical analysis across the reviewed studies revealed significant positive correlations between media exposure and various aspects of adolescent sexuality. The strength of these correlations varied by media type, exposure duration, and demographic factors.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-3">Key Statistical Findings:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Strong positive correlation (r = 0.67, p &lt; 0.001) between social media use and early sexual initiation</li>
              <li>Moderate correlation (r = 0.54, p &lt; 0.01) between exposure to sexual content and risky sexual behaviors</li>
              <li>Significant association (OR = 2.34, 95% CI: 1.78-3.12) between heavy media use and multiple sexual partners</li>
              <li>Higher likelihood (OR = 1.89, 95% CI: 1.45-2.47) of unprotected sex among high media consumers</li>
              <li>Increased risk (RR = 1.76, 95% CI: 1.32-2.35) of teenage pregnancy in media-exposed groups</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Discussion</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Media Influence Mechanisms</h3>
          <p className="mb-4">
            The study investigated the multifaceted influence media have on the sexuality of adolescents and young adults. The findings revealed that adolescents and young adults access both traditional media (print media, television, radio) and new media (social media platforms, streaming services) for sexual content. The common traditional media accessed include television programs, radio shows, magazines, and movies, while social media encompasses various platforms including Facebook, Instagram, YouTube, TikTok, Flickr, and Twitter.
          </p>

          <p className="mb-4">
            The study found that adolescents and young adults predominantly access social media platforms for sexual content more than other types of media. This preference is attributed to several factors: higher smartphone penetration rates among young people, advancement of internet technology facilitating easy access to online content, peer influence and social validation through likes and shares, anonymity and privacy features that allow exploration without parental oversight, and the interactive nature of social media that enables real-time engagement with content and peers.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Developmental Considerations</h3>
          <p className="mb-4">
            The adolescent brain undergoes significant developmental changes, particularly in areas responsible for decision-making, impulse control, and risk assessment. The prefrontal cortex, which governs executive functions, is not fully developed until the mid-twenties. This neurobiological reality makes adolescents particularly vulnerable to media influence, as they may lack the cognitive resources to critically evaluate sexual content or resist peer pressure transmitted through digital platforms.
          </p>
          
          <p className="mb-4">
            Additionally, the hormonal changes associated with puberty create heightened interest in sexual topics, making adolescents more likely to seek out and be influenced by sexual content in media. The combination of biological drive and cognitive vulnerability creates a perfect storm for media influence on sexual attitudes and behaviors.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Gender Differences in Media Consumption</h3>
          <p className="mb-4">
            The research revealed significant gender differences in how adolescents and young adults consume and respond to sexual media content. Female participants were more likely to engage with relationship-focused content on platforms like Instagram and Pinterest, while male participants showed higher consumption of explicit sexual content across various platforms.
          </p>
          
          <p className="mb-4">
            These gender differences have important implications for sexual behavior outcomes. Female adolescents exposed to idealized relationship portrayals may develop unrealistic expectations about romance and intimacy, while male adolescents consuming explicit content may develop problematic attitudes toward consent and sexual performance.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Cultural and Socioeconomic Factors</h3>
          <p className="mb-4">
            The influence of media on adolescent sexuality is moderated by cultural and socioeconomic factors. Adolescents from more conservative cultural backgrounds may experience greater conflict between media messages and family values, leading to internal tension and potentially risky behaviors as forms of rebellion.
          </p>
          
          <p className="mb-4">
            Socioeconomic status affects both access to media and the quality of sexual education received. Adolescents from lower socioeconomic backgrounds may rely more heavily on media for sexual information due to limited access to comprehensive sexual education programs or healthcare services.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Negative Consequences and Risk Factors</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Physical Health Consequences</h3>
          <p className="mb-4">
            The study documented numerous physical health consequences associated with media-influenced sexual behaviors among adolescents and young adults. These include increased rates of sexually transmitted infections (STIs), with studies showing 23% higher infection rates among heavy media consumers compared to minimal users.
          </p>
          
          <p className="mb-4">
            Unintended pregnancy rates were also significantly higher, with media-exposed adolescents showing 1.8 times greater likelihood of teenage pregnancy. This is attributed to reduced contraceptive use, influenced by media portrayals that rarely show realistic consequences of unprotected sex or proper contraceptive practices.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Mental Health Implications</h3>
          <p className="mb-4">
            Beyond physical health, media influence on sexuality has significant mental health implications. Adolescents exposed to unrealistic sexual portrayals often develop body image issues, performance anxiety, and relationship dissatisfaction. The pressure to conform to media-portrayed sexual norms can lead to depression, anxiety, and low self-esteem.
          </p>
          
          <p className="mb-4">
            Cyberbullying and sexual harassment through digital platforms represent additional mental health risks. The study found that 31.7% of participants experienced some form of online sexual harassment, with higher rates among female adolescents.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Social and Relationship Consequences</h3>
          <p className="mb-4">
            Media influence on sexuality affects not only individual adolescents but also their relationships and social interactions. The normalization of casual sexual encounters through media can lead to difficulties in forming meaningful, committed relationships. Many young adults report challenges in distinguishing between media fantasy and relationship reality.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Promotion of Positive Media Influence</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Media Literacy Education</h3>
          <p className="mb-4">
            Considering the numerous negative effects of adolescent and young adult exposure to media on their sexuality, there is an urgent need to assess ways of promoting positive media influence on this population group. Many studies have provided evidence-based approaches to promote positive media influence on adolescents' and young adults' sexuality.
          </p>

          <p className="mb-4">
            Scull et al (2022) revealed that organizing a Media Aware program has proven effective in promoting positive media influence on adolescents and young adults' sexuality through the adoption of media literacy education approaches. The program focuses on developing critical thinking skills to evaluate media messages, understanding media production techniques and commercial interests, recognizing unrealistic portrayals and their potential effects, and developing healthy skepticism toward media claims about sexuality and relationships.
          </p>
          
          <p className="mb-4">
            Findings from the Media Aware program showed that 80.12% of participants who received the intervention reported it was beneficial for learning about sexual health. Participants demonstrated improved ability to critically analyze sexual content in media and showed reduced susceptibility to negative media influences on sexual attitudes and behaviors.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Parental and Educational Interventions</h3>
          <p className="mb-4">
            Effective interventions require collaboration between parents, educators, and healthcare providers. Parent-centered approaches include open communication about sexuality and media, co-viewing and discussion of media content, setting appropriate boundaries for media consumption, and modeling healthy attitudes toward sexuality and relationships.
          </p>
          
          <p className="mb-4">
            School-based interventions should integrate media literacy into comprehensive sexual education curricula, provide age-appropriate information about healthy sexuality, address the gap between media portrayals and reality, and offer support for students struggling with media-related sexual issues.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Technology-Based Solutions</h3>
          <p className="mb-4">
            Innovative technology-based solutions can help mitigate negative media influences while promoting positive sexual health outcomes. These include parental control software with educational components, apps that promote media literacy and critical thinking, online platforms providing accurate sexual health information, and peer support networks for healthy sexual development.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Future Research Directions</h2>
          <p className="mb-4">
            Future research should focus on longitudinal studies to better understand the long-term effects of media exposure on sexual development and relationship outcomes. Cross-cultural studies are needed to understand how cultural contexts moderate media influence on sexuality.
          </p>
          
          <p className="mb-4">
            Additionally, research should examine the effectiveness of different intervention strategies and identify the most vulnerable populations for targeted prevention efforts. The rapidly evolving digital media landscape requires ongoing research to understand new platforms and their potential impacts on adolescent sexuality.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p className="mb-4">
            The study revealed that the sexuality of many adolescents and young adults is increasingly influenced by media exposure, with evidence suggesting a growing prevalence of negative effects. This situation has been exacerbated by advancements in technology, particularly the emergence of the internet and the proliferation of social media platforms, which have fundamentally transformed the traditional role of media in sexual socialization.
          </p>

          <p className="mb-4">
            The findings demonstrate significant correlations between media exposure and various risky sexual behaviors, including early sexual initiation, multiple sexual partners, unprotected sex, and engagement in potentially harmful practices. These behaviors pose substantial risks to both the physical and mental wellbeing of young people, as they engage in sexual relationships without adequate preparation, protection, or understanding of potential consequences.
          </p>
          
          <p className="mb-4">
            However, the study also highlights the potential for positive interventions through media literacy education, comprehensive sexual education, and collaborative efforts between parents, educators, and healthcare providers. The success of programs like Media Aware demonstrates that young people can develop critical thinking skills to navigate media messages more effectively when provided with appropriate support and education.
          </p>
          
          <p className="mb-4">
            This research underscores the critical importance of proactive approaches to addressing media influence on adolescent sexuality. Parents, teachers, healthcare providers, and policymakers must work together to guide adolescents and young adults toward responsible media consumption and healthy sexual development. Only through such collaborative efforts can we hope to mitigate the negative consequences while harnessing the potential positive aspects of media influence on young people's sexual health and wellbeing.
          </p>

          <button
            onClick={toggleExpanded}
            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 mt-6"
          >
            Show Less
          </button>
        </>
      )}
    </div>
  );
}