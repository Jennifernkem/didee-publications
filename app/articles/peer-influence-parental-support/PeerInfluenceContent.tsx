'use client';

import { useState } from 'react';

export default function PeerInfluenceContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="prose max-w-none text-gray-800 leading-relaxed">
      <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
      <p className="mb-4">
        Anti-social behavior among university students has become a growing concern in Nigerian higher education institutions. These behaviors, which include aggression, substance abuse, academic dishonesty, and various forms of misconduct, not only affect individual students but also impact the broader university community and society at large.
      </p>
      
      <p className="mb-4">
        Understanding the determinants of anti-social behavior is crucial for developing effective intervention strategies. Two key factors that have been identified in the literature are peer influence and parental support. This study examines how these psychosocial factors contribute to anti-social behavior among undergraduate students in selected Nigerian universities.
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
            This study is grounded in Social Learning Theory (Bandura, 1977) and Attachment Theory (Bowlby, 1969). Social Learning Theory suggests that individuals learn behaviors through observation, imitation, and modeling of others, particularly peers. Attachment Theory emphasizes the importance of early relationships with caregivers in shaping later social and emotional development.
          </p>
          
          <p className="mb-4">
            The integration of these theories provides a comprehensive framework for understanding how peer relationships and parental support interact to influence behavioral outcomes in young adults.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Anti-Social Behavior in University Settings</h3>
          <p className="mb-4">
            Anti-social behavior in university contexts encompasses a wide range of activities that violate social norms and potentially harm others. These behaviors can be categorized into several types:
          </p>
          
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Academic misconduct:</strong> Cheating, plagiarism, and examination malpractice</li>
            <li><strong>Substance abuse:</strong> Excessive alcohol consumption and drug use</li>
            <li><strong>Aggressive behavior:</strong> Physical and verbal aggression toward peers and staff</li>
            <li><strong>Property destruction:</strong> Vandalism and destruction of university property</li>
            <li><strong>Social deviance:</strong> Violation of university codes of conduct and social norms</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Peer Influence and Social Learning</h3>
          <p className="mb-4">
            Peer influence becomes particularly significant during the university years as students navigate increased independence and form new social relationships. Research has consistently shown that peer groups can either promote prosocial behavior or encourage anti-social activities.
          </p>
          
          <p className="mb-4">
            The mechanisms through which peer influence operates include social modeling, peer pressure, social reinforcement, and the normalization of deviant behaviors within peer groups. Students who associate with peers who engage in anti-social behavior are more likely to adopt similar behaviors themselves.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Parental Support and Behavioral Outcomes</h3>
          <p className="mb-4">
            Parental support continues to play a crucial role in young adult development, even as students transition to university life. Supportive parenting characterized by warmth, responsiveness, and appropriate guidance has been associated with better behavioral outcomes and reduced risk of anti-social behavior.
          </p>
          
          <p className="mb-4">
            Conversely, lack of parental support, inconsistent parenting, or family dysfunction can increase vulnerability to negative peer influence and anti-social behavior. The quality of parent-child relationships established during childhood and adolescence continues to influence behavior during the university years.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Methodology</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Research Design</h3>
          <p className="mb-4">
            This study employed a quantitative research design using a cross-sectional survey approach. The design was chosen to examine the relationships between peer influence, parental support, and anti-social behavior among university students at a specific point in time.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Participants</h3>
          <p className="mb-4">
            The study involved 450 undergraduate students from three selected Nigerian universities: University of Lagos, University of Ibadan, and Ahmadu Bello University. Participants were selected using stratified random sampling to ensure representation across different faculties, levels of study, and demographic characteristics.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-3">Sample Characteristics:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Age range: 18-25 years (Mean = 21.3, SD = 2.1)</li>
              <li>Gender distribution: 52% female, 48% male</li>
              <li>Study levels: 23% first year, 28% second year, 26% third year, 23% fourth year</li>
              <li>Faculties represented: Sciences, Arts, Social Sciences, Engineering, Medicine</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Instruments</h3>
          <p className="mb-4">
            Three standardized instruments were used for data collection:
          </p>
          
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Anti-Social Behavior Scale (ASBS):</strong> A 25-item scale measuring various forms of anti-social behavior</li>
            <li><strong>Peer Influence Scale (PIS):</strong> A 20-item scale assessing the extent of peer influence on behavior</li>
            <li><strong>Parental Support Scale (PSS):</strong> An 18-item scale measuring perceived parental support and involvement</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Data Collection and Analysis</h3>
          <p className="mb-4">
            Data were collected through self-administered questionnaires distributed to participants in their respective universities. Ethical approval was obtained from the institutional review boards of all participating universities, and informed consent was secured from all participants.
          </p>
          
          <p className="mb-4">
            Statistical analyses included descriptive statistics, correlation analysis, and multiple regression analysis using SPSS version 26. The significance level was set at p < 0.05 for all statistical tests.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Results</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Descriptive Statistics</h3>
          <p className="mb-4">
            The results revealed varying levels of anti-social behavior among the participants. The most common forms of anti-social behavior reported were academic misconduct (34.2%), followed by substance use (28.7%), and aggressive behavior (19.4%).
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-3">Mean Scores and Standard Deviations:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Anti-Social Behavior Scale: M = 42.6, SD = 12.3</li>
              <li>Peer Influence Scale: M = 38.9, SD = 10.7</li>
              <li>Parental Support Scale: M = 51.2, SD = 14.8</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Correlation Analysis</h3>
          <p className="mb-4">
            Pearson correlation analysis revealed significant relationships between the study variables:
          </p>
          
          <ul className="list-disc pl-6 mb-4">
            <li>Strong positive correlation between peer influence and anti-social behavior (r = 0.68, p < 0.001)</li>
            <li>Moderate negative correlation between parental support and anti-social behavior (r = -0.52, p < 0.001)</li>
            <li>Weak negative correlation between peer influence and parental support (r = -0.31, p < 0.01)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Multiple Regression Analysis</h3>
          <p className="mb-4">
            Multiple regression analysis was conducted to examine the predictive power of peer influence and parental support on anti-social behavior. The model was statistically significant (F(2,447) = 156.8, p < 0.001) and explained 58.3% of the variance in anti-social behavior.
          </p>
          
          <div className="bg-amber-50 p-4 rounded-lg mb-6">
            <h4 className="text-lg font-semibold mb-3">Regression Coefficients:</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Peer Influence: β = 0.61, t = 14.2, p < 0.001</li>
              <li>Parental Support: β = -0.28, t = -6.7, p < 0.001</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">Discussion</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Peer Influence as a Primary Predictor</h3>
          <p className="mb-4">
            The findings confirm that peer influence is a strong predictor of anti-social behavior among university students. This result aligns with Social Learning Theory, which emphasizes the role of observational learning and social modeling in behavior acquisition.
          </p>
          
          <p className="mb-4">
            The university environment provides numerous opportunities for peer interaction, and students who associate with peers who engage in anti-social behavior are more likely to adopt similar behaviors. This finding highlights the importance of peer selection and the need for interventions that promote positive peer relationships.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Protective Role of Parental Support</h3>
          <p className="mb-4">
            The negative correlation between parental support and anti-social behavior demonstrates the protective role of strong family relationships. Students who perceive high levels of parental support are less likely to engage in anti-social behavior, even when exposed to negative peer influence.
          </p>
          
          <p className="mb-4">
            This finding suggests that parental support serves as a buffer against negative peer influence and provides students with the emotional resources and moral guidance needed to resist anti-social behavior.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Gender and Age Differences</h3>
          <p className="mb-4">
            Analysis of demographic variables revealed significant gender differences in anti-social behavior, with male students reporting higher levels of aggressive behavior and substance use. Female students were more likely to report academic misconduct behaviors.
          </p>
          
          <p className="mb-4">
            Age analysis showed that anti-social behavior was highest among second and third-year students, possibly reflecting the challenges of adjustment to university life and increased independence from parental supervision.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Cultural Context and Nigerian Universities</h3>
          <p className="mb-4">
            The findings must be interpreted within the cultural context of Nigerian society, where family relationships and respect for authority are highly valued. The strong influence of parental support observed in this study may reflect these cultural values.
          </p>
          
          <p className="mb-4">
            However, the significant impact of peer influence also suggests that traditional family structures may be challenged by the social dynamics of university life and exposure to diverse peer groups.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Implications for Intervention</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">University-Based Programs</h3>
          <p className="mb-4">
            The findings suggest several intervention strategies that universities can implement:
          </p>
          
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Peer mentoring programs:</strong> Pairing at-risk students with positive peer role models</li>
            <li><strong>Social skills training:</strong> Teaching students how to resist negative peer pressure</li>
            <li><strong>Campus-wide awareness campaigns:</strong> Promoting positive social norms and behaviors</li>
            <li><strong>Support groups:</strong> Providing forums for students to discuss challenges and receive support</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Family Involvement Strategies</h3>
          <p className="mb-4">
            Universities should also consider strategies to maintain and strengthen family connections:
          </p>
          
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Parent orientation programs:</strong> Educating parents about university life and how to provide appropriate support</li>
            <li><strong>Regular communication:</strong> Facilitating ongoing communication between students and families</li>
            <li><strong>Family counseling services:</strong> Providing support for families experiencing difficulties</li>
            <li><strong>Cultural sensitivity:</strong> Recognizing and respecting diverse family structures and values</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Limitations and Future Research</h2>
          <p className="mb-4">
            Several limitations should be considered when interpreting these findings. The cross-sectional design limits causal inferences, and the reliance on self-report measures may introduce response bias. Future research should consider longitudinal designs and multiple informants to provide a more comprehensive understanding of these relationships.
          </p>
          
          <p className="mb-4">
            Additionally, future studies should explore the mediating and moderating factors that influence the relationships between peer influence, parental support, and anti-social behavior. Cultural factors and their interaction with these variables also warrant further investigation.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p className="mb-4">
            This study provides valuable insights into the determinants of anti-social behavior among Nigerian university students. The findings confirm that peer influence is a significant risk factor for anti-social behavior, while parental support serves as a protective factor.
          </p>
          
          <p className="mb-4">
            The results have important implications for prevention and intervention efforts in Nigerian universities. By understanding the role of peer influence and parental support, universities can develop more effective strategies to promote positive behavior and reduce anti-social conduct among students.
          </p>
          
          <p className="mb-4">
            Ultimately, addressing anti-social behavior requires a comprehensive approach that involves students, families, universities, and the broader community. Only through such collaborative efforts can we create environments that support positive development and academic success for all students.
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