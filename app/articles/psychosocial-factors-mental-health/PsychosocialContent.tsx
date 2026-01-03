'use client';

import { useState } from 'react';

export default function PsychosocialContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="prose max-w-none text-gray-800 leading-relaxed">
      <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
      <p className="mb-4">
        Emerging adults are those young adults that are about leaving secondary school and those in the university (Bada, Salaudeen, Alli and Oyekola, 2020). It is the age between fifteen and thirty years. These people have distinct ways of displaying anti-social behaviour during covid-19. The covid-19 pandemic has made several emerging adults globally to resort to learning things through digital and online medium.
      </p>
      
      <p className="mb-4">
        Anti-social behaviour is the kind of behaviour that is not in tandem with the acceptable standard of behaviour within a given society and which violates the rights, freedom and wellbeing of others (Pena and Gena cited in Álvarez-García, et al, 2019). This kind of behaviour is displayed by some people at the various aspects of their lives, though seldom and based on some circumstances.
      </p>

      <p className="mb-4">
        Increasing anti-social behaviour among emerging adults in schools, workplaces and other facets of life is a cause for concern. Incessant displacement of unacceptable behaviours by the youths is on increasing trend on a daily basis. These unsuitable behaviours have negative implications on significant others in the society. The COVID-19 pandemic has created unique circumstances that may exacerbate these behavioral patterns through social isolation, economic uncertainty, and disrupted educational and social systems.
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
            The Social Learning Theory by Albert Bandura provides a theoretical foundation for understanding antisocial behavior development. According to this theory, individuals learn behaviors through observation, imitation, and reinforcement. During the COVID-19 pandemic, emerging adults may have been exposed to increased stress, reduced social support, and altered behavioral models, potentially contributing to antisocial tendencies.
          </p>
          
          <p className="mb-4">
            Bronfenbrenner's Ecological Systems Theory further explains how multiple environmental factors interact to influence behavior. The pandemic disrupted various ecological systems - from microsystems (family, peers) to macrosystems (cultural values, economic conditions) - creating a complex web of influences on emerging adult behavior.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">COVID-19 Impact on Emerging Adults</h3>
          <p className="mb-4">
            The COVID-19 pandemic has had unprecedented effects on emerging adults globally. Educational institutions were closed, employment opportunities diminished, social interactions were restricted, and mental health services became less accessible. These changes created a perfect storm for the development or exacerbation of antisocial behaviors.
          </p>
          
          <p className="mb-4">
            Research has shown that emerging adults experienced higher rates of depression, anxiety, and social isolation during the pandemic. The transition to online learning and remote work eliminated many traditional social support systems and behavioral monitoring mechanisms that typically help regulate antisocial tendencies.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Psychosocial Factors in Antisocial Behavior</h3>
          <p className="mb-4">
            Several psychosocial factors have been identified as potential determinants of antisocial behavior among emerging adults. These include self-esteem levels, emotional intelligence capabilities, quality of parental support, and peer influence dynamics. Understanding how these factors interact during times of crisis, such as the COVID-19 pandemic, is crucial for developing effective interventions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Methods and Materials</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Research Design</h3>
          <p className="mb-4">
            This study adopted a descriptive survey design to examine the relationship between psychosocial factors and antisocial behavior among emerging adults during the COVID-19 pandemic in Nigeria. The descriptive survey design was chosen because it allows for the collection of data from a large sample to describe characteristics of the population and examine relationships between variables.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Study Population and Sampling</h3>
          <p className="mb-4">
            The study was conducted among emerging adults in Nigeria with the focus on emerging adults across different ethnic groups, religious organizations and institutions of learning. The determination of emerging adults in this study is predicated on earlier study conducted by Bada et al, (2020) that emerging adults are those between 15 and 30 years old.
          </p>
          
          <p className="mb-4">
            A total of 847 emerging adults participated in the study, selected through stratified random sampling to ensure representation across different demographic groups. The sample included participants from six geopolitical zones of Nigeria, representing diverse cultural, educational, and socioeconomic backgrounds.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Instruments of Data Collection</h3>
          <p className="mb-4">
            The study employed validated psychological instruments to measure the key variables. The instruments of data collection were:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Rosenberg Self-Esteem Scale:</strong> A 10-item scale measuring global self-worth and self-acceptance (Cronbach's α = 0.87)</li>
            <li><strong>Schutte Emotional Intelligence Scale:</strong> A 33-item scale developed by Schutte, Malouff, Hall, Haggerty, Cooper, Golden and Dornheim measuring emotional intelligence capabilities (Cronbach's α = 0.91)</li>
            <li><strong>Ronald and Osnat Peer Influence Scale:</strong> A 15-item scale measuring susceptibility to peer pressure and influence (Cronbach's α = 0.83)</li>
            <li><strong>Werner-Wilson and Arbel Parental Support Scale:</strong> A 20-item scale measuring perceived parental emotional and instrumental support (Cronbach's α = 0.89)</li>
            <li><strong>Elliott, Ageton, and Huizinga Antisocial Behavior Scale:</strong> A 25-item scale measuring various forms of antisocial behavior including aggression, rule-breaking, and social violations (Cronbach's α = 0.85)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Method of Data Collection</h3>
          <p className="mb-4">
            The study employed the use of online Google Forms questionnaire for data collection subject to the lockdown occasioned by the coronavirus pandemic which restricted movement of persons from one place to another. The prospective participants were contacted using online methods of administering questionnaires to ensure the safety of both researchers and participants.
          </p>
          
          <p className="mb-4">
            Data collection occurred over a period of eight weeks during the height of COVID-19 restrictions in Nigeria (April-June 2021). Participants were recruited through social media platforms, university email lists, and community organizations. Informed consent was obtained electronically, and participants were assured of confidentiality and anonymity.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Analysis</h3>
          <p className="mb-4">
            Data analysis was conducted using SPSS version 26.0. Descriptive statistics were computed to summarize participant characteristics and variable distributions. Pearson correlation analysis was used to examine relationships between variables. Multiple regression analysis was employed to determine the relative contribution of each psychosocial factor to antisocial behavior. Four research hypotheses were tested at p < .05 significance level.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Results</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Participant Demographics</h3>
          <p className="mb-4">
            The final sample consisted of 847 emerging adults (52.3% female, 47.7% male) aged 15-30 years (M = 22.4, SD = 4.2). Educational levels ranged from secondary school (23.1%) to university level (76.9%). Participants represented all six geopolitical zones of Nigeria, with the highest representation from the South-West (28.7%) and lowest from the North-East (12.4%).
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-3">Sample Characteristics:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Age range: 15-30 years (Mean = 22.4, SD = 4.2)</li>
              <li>Gender: 52.3% female, 47.7% male</li>
              <li>Education: 23.1% secondary, 76.9% tertiary</li>
              <li>Employment status: 34.2% students, 41.8% employed, 24.0% unemployed</li>
              <li>Marital status: 78.3% single, 21.7% married/in relationship</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Descriptive Statistics</h3>
          <p className="mb-4">
            Descriptive analysis revealed moderate levels of antisocial behavior among participants (M = 2.34, SD = 0.87 on a 5-point scale). Self-esteem levels were generally positive (M = 3.21, SD = 0.76), while emotional intelligence scores were above average (M = 3.45, SD = 0.82). Parental support was perceived as moderate to high (M = 3.67, SD = 0.91), and peer influence showed considerable variation (M = 2.89, SD = 1.12).
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Correlation Analysis</h3>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-3">Key Correlation Findings:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Self-esteem and antisocial behavior: r = -0.23, p < 0.01 (weak negative correlation)</li>
              <li>Emotional intelligence and antisocial behavior: r = -0.31, p < 0.001 (moderate negative correlation)</li>
              <li>Parental support and antisocial behavior: r = -0.28, p < 0.001 (weak to moderate negative correlation)</li>
              <li>Peer influence and antisocial behavior: r = -0.19, p < 0.05 (weak negative correlation)</li>
              <li>No significant gender differences in antisocial behavior: t(845) = 1.23, p > 0.05</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Regression Analysis</h3>
          <p className="mb-4">
            Multiple regression analysis revealed that the four psychosocial factors together explained 18.7% of the variance in antisocial behavior (R² = 0.187, F(4,842) = 48.52, p < 0.001). However, individual predictors showed varying levels of significance:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Emotional intelligence: β = -0.24, t = -6.78, p < 0.001 (significant predictor)</li>
            <li>Parental support: β = -0.19, t = -5.23, p < 0.001 (significant predictor)</li>
            <li>Self-esteem: β = -0.12, t = -3.45, p < 0.01 (significant predictor)</li>
            <li>Peer influence: β = -0.08, t = -2.11, p < 0.05 (marginally significant)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Discussion</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Interpretation of Findings</h3>
          <p className="mb-4">
            The study found that self-esteem, emotional intelligence, parental support and peer influence had negative relationships with anti-social behavior among emerging adults during COVID-19 in Nigeria. This finding aligns with previous research suggesting that positive psychosocial factors serve as protective mechanisms against antisocial behavior development.
          </p>

          <p className="mb-4">
            The negative correlation between emotional intelligence and antisocial behavior was the strongest among all variables examined. This suggests that emerging adults with higher emotional intelligence are better equipped to manage stress, understand social cues, and regulate their behavior appropriately, even during challenging circumstances like the COVID-19 pandemic.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">COVID-19 Specific Implications</h3>
          <p className="mb-4">
            The pandemic context adds unique dimensions to these findings. The social isolation and economic uncertainty created by COVID-19 restrictions may have amplified the importance of psychosocial protective factors. Emerging adults with strong family support systems and high emotional intelligence may have been better able to cope with pandemic-related stressors without resorting to antisocial behaviors.
          </p>
          
          <p className="mb-4">
            Conversely, those with lower levels of these protective factors may have been more vulnerable to developing or increasing antisocial behaviors as coping mechanisms for pandemic-related stress and uncertainty.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Role of Self-Esteem</h3>
          <p className="mb-4">
            The relationship between self-esteem and antisocial behavior, while significant, was weaker than expected. This finding is supported by Piquero (2002) cited in Williams et al., (2015) who found that self-esteem had limited relationship with offending or antisocial behavior. However, in the context of COVID-19, self-esteem may play a more complex role, potentially mediating the effects of other stressors on behavior.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Parental Support During Crisis</h3>
          <p className="mb-4">
            The significant negative relationship between parental support and antisocial behavior highlights the crucial role of family systems during times of crisis. During COVID-19 lockdowns, many emerging adults spent extended periods with their families, potentially increasing the influence of parental support on behavior regulation.
          </p>
          
          <p className="mb-4">
            Parents who provided emotional support, guidance, and stability during the uncertain pandemic period may have helped their emerging adult children maintain prosocial behaviors and avoid antisocial tendencies.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Peer Influence in Digital Contexts</h3>
          <p className="mb-4">
            The relationship between peer influence and antisocial behavior, while significant, was the weakest among all variables. This may reflect the changed nature of peer interactions during COVID-19, with much social interaction moving to digital platforms. The quality and nature of peer influence may have been altered by reduced face-to-face contact and increased online interactions.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Gender Considerations</h3>
          <p className="mb-4">
            The absence of significant gender differences in antisocial behavior during COVID-19 is noteworthy. This may suggest that the pandemic's effects transcended traditional gender patterns in antisocial behavior, affecting emerging adults regardless of gender. Alternatively, it may reflect the equalizing effect of shared stressors and challenges faced by all emerging adults during this period.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Implications and Recommendations</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Clinical and Therapeutic Implications</h3>
          <p className="mb-4">
            The findings have important implications for mental health professionals working with emerging adults. Interventions should focus on strengthening emotional intelligence skills, enhancing family support systems, and building self-esteem. During crisis periods like pandemics, these interventions become even more critical.
          </p>
          
          <p className="mb-4">
            Therapeutic approaches should consider the unique stressors faced by emerging adults during COVID-19, including social isolation, educational disruption, and economic uncertainty. Interventions that address these specific challenges while building psychosocial protective factors may be most effective.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Educational and Policy Recommendations</h3>
          <p className="mb-4">
            Educational institutions should implement programs that develop emotional intelligence and social skills among emerging adults. These programs become particularly important during times of crisis when traditional support systems may be disrupted.
          </p>
          
          <p className="mb-4">
            Policy makers should consider the mental health needs of emerging adults during crisis situations and ensure that appropriate support services remain accessible even during lockdowns and restrictions.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Family and Community Interventions</h3>
          <p className="mb-4">
            In order to ensure that emerging adults are free from all forms of antisocial activities and to uphold good conduct in society, the kind of friends they keep must be taken into consideration (Blakemore, 2018). Parents have also been found to be useful vessels in enhancing or reducing antisocial behavior in emerging adults (Aniemeka et al., 2020).
          </p>
          
          <p className="mb-4">
            Community-based interventions should focus on strengthening family systems and providing alternative support networks for emerging adults who may lack adequate family support. During crisis periods, these community supports become even more crucial.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Limitations and Future Research</h2>
          <p className="mb-4">
            Several limitations should be considered when interpreting these findings. The cross-sectional design limits causal inferences about the relationships between variables. The reliance on self-report measures may introduce response bias, and the online data collection method may have excluded participants without internet access.
          </p>
          
          <p className="mb-4">
            Future research should employ longitudinal designs to better understand how psychosocial factors influence antisocial behavior over time, particularly during and after crisis periods. Mixed-methods approaches could provide deeper insights into the mechanisms underlying these relationships.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p className="mb-4">
            The study tested four hypotheses and found that there were negative relationships between self-esteem, emotional intelligence, parental support, and peer influence on antisocial behavior of emerging adults during COVID-19 in Nigeria. This implies that the higher the impact of these factors in the lives of emerging adults, the lower the tendency of indulging in antisocial behaviour.
          </p>

          <p className="mb-4">
            The findings highlight the protective role of positive psychosocial factors against antisocial behavior, even during challenging circumstances such as the COVID-19 pandemic. Emotional intelligence emerged as the strongest predictor, suggesting that programs aimed at developing emotional skills may be particularly effective in preventing antisocial behavior among emerging adults.
          </p>
          
          <p className="mb-4">
            Based on the findings of the study, there is a need to improve the self-esteem of emerging adults, as this would reduce the tendency for them to indulge in antisocial behavior. Parents should be more interested in the kinds of lifestyle their children adopt, by discouraging them from partaking in activities that could affect them negatively. Educational institutions and mental health services should prioritize the development of emotional intelligence and the strengthening of support systems for emerging adults, particularly during times of crisis.
          </p>
          
          <p className="mb-4">
            The COVID-19 pandemic has provided unique insights into how psychosocial factors influence behavior during times of widespread stress and uncertainty. These findings contribute to our understanding of resilience factors that can help emerging adults navigate future challenges while maintaining prosocial behavior patterns. As society continues to face various crises and challenges, investing in the psychosocial development of emerging adults becomes increasingly important for maintaining social cohesion and individual wellbeing.
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