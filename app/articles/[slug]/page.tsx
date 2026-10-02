import { Metadata } from 'next';
import { generateArticleStructuredData, generateBreadcrumbStructuredData, siteConfig, ArticleData } from '../../../lib/seo';

interface ArticleProps {
  params: { slug: string };
}

export const dynamicParams = false;

function getArticleData(slug: string): ArticleData {
  const articles: Record<string, ArticleData> = {
    'psychosocial-factors-mental-health': {
      title: "Psychosocial Factors as Determinants of Anti-Social Behaviour Among Emerging Adults During COVID-19 in Nigeria",
      authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
      abstract: "This study examines psychosocial factors influencing anti-social behavior among emerging adults during COVID-19 in Nigeria.",
      doi: "10.12345/didee.2024.003",
      publishedDate: "January 15, 2024",
      volume: "1", issue: "2", pages: "26-40",
      keywords: ["Antisocial Behaviour", "Self-Esteem", "Emotional Intelligence", "COVID-19"],
      pdfUrl: "/articles/psychosocial-factors-mental-health.pdf",
      domain: "Psychology"
    },
    'philosophy-ethics-modern-society': {
      title: "Existential Dialectics of Throwness and Nothingness in Heideggerian Philosophy",
      authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
      abstract: "This research exposes Heidegger's idea of nothingness as a response to Hegelianism and foundation for phenomenology and existentialism.",
      doi: "10.12345/didee.2024.002",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "2", pages: "11-25",
      keywords: ["Dasein", "Existentiality", "Throwness", "Nothingness", "Heideggerian philosophy"],
      pdfUrl: "/articles/philosophy-ethics-modern-society.pdf",
      domain: "Philosophy"
    },
    'media-influence-adolescent-sexuality': {
      title: "The Media Influence on the Sexuality of Adolescents and Young Adults",
      authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
      abstract: "Analysis of media's impact on adolescent sexual development and behavior.",
      doi: "10.12345/didee.2024.004",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "2", pages: "41-55",
      keywords: ["Adolescents", "media", "sexuality", "sexual behavior"],
      pdfUrl: "/articles/media-influence-adolescent-sexuality.pdf",
      domain: "Media Studies"
    },
    'exorcism-catholic-church-gabriele-amorth': {
      title: "EXORCISM IN THE CATHOLIC CHURCH ACCORDING TO GABRIELE AMORTH",
      authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of Nigeria" }],
      abstract: "Examination of exorcism practices in the Catholic Church through Father Gabriele Amorth's work.",
      doi: "10.12345/didee.2024.001",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "1", pages: "1-15",
      keywords: ["Catholic Church", "Exorcism", "Gabriele Amorth", "Theology"],
      pdfUrl: "/articles/exorcism-catholic-church-gabriele-amorth.pdf",
      domain: "Theology"
    },
    'peer-influence-parental-support': {
      title: "Peer Influence and Parental Support as Determinants of Anti-Social Behavior among Undergraduate Students in Selected Nigerian Universities",
      authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
      abstract: "Study examining peer influence and parental support factors in anti-social behavior among Nigerian university students.",
      doi: "10.12345/didee.2024.005",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "3", pages: "56-70",
      keywords: ["Peer Influence", "Parental Support", "Anti-Social Behavior", "University Students"],
      pdfUrl: "/articles/peer-influence-parental-support.pdf",
      domain: "Psychology"
    },
    'soil-microbiome-crop-breeding': {
      title: "Integrating Soil Microbiome Insights into Crop Breeding for Enhanced Agricultural Sustainability",
      authors: [{ name: "Daniel Ojotule Offor", affiliation: "Agricultural Research Institute" }],
      abstract: "Research on integrating soil microbiome knowledge into modern crop breeding techniques for sustainable agriculture.",
      doi: "10.12345/didee.2024.006",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "3", pages: "71-85",
      keywords: ["Soil Microbiome", "Crop Breeding", "Agricultural Sustainability", "Biotechnology"],
      pdfUrl: "/articles/soil-microbiome-crop-breeding.pdf",
      domain: "Agriculture"
    },
    'forensic-psychology-curtis-flowers': {
      title: "Forensic Psychological Analysis of Evidentiary Failures and Jury Bias in the Curtis Flowers Case",
      authors: [{ name: "Daniel Ojotule Offor", affiliation: "University of South Wales" }],
      abstract: "Forensic psychological examination of evidentiary issues and jury bias in the Curtis Flowers legal case.",
      doi: "10.12345/didee.2024.007",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "3", pages: "86-100",
      keywords: ["Forensic Psychology", "Jury Bias", "Legal Evidence", "Criminal Justice"],
      pdfUrl: "/articles/forensic-psychology-curtis-flowers.pdf",
      domain: "Law"
    },
    'principals-perceptions': {
      title: "Principals' Perceptions of Conditions of Service as Human Resource Management Challenges in Secondary Schools in Enugu State",
      authors: [{ name: "Chima, Emmanuel Ibe", affiliation: "Department of Educational Management, Faculty of Education" }],
      abstract: "Study on principals' perceptions of service conditions and HR management challenges in secondary schools.",
      doi: "10.12345/didee.2024.008",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "4", pages: "101-115",
      keywords: ["Educational Management", "Human Resources", "Secondary Schools", "Enugu State"],
      pdfUrl: "/articles/principals-perceptions.pdf",
      domain: "Education"
    },
    'the-impact-exorcism-practices': {
      title: "The Impact of Exorcism Practices on Mental Health Outcomes",
      authors: [{ name: "Daniel Ojotule Offor", affiliation: "Department of Clinical Psychology, University of South Wales" }],
      abstract: "Examination of the psychological impact of exorcism practices on mental health outcomes.",
      doi: "10.12345/didee.2024.009",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "4", pages: "116-130",
      keywords: ["Exorcism", "Mental Health", "Clinical Psychology", "Theology"],
      pdfUrl: "/articles/the-impact-exorcism-practices.pdf",
      domain: "Theology"
    },
    'the-roles-contextual': {
      title: "The Roles of Contextual Instructional Models in Addressing Misconceptions Held by Secondary School Physics Students",
      authors: [{ name: "Kingsley T. Onah", affiliation: "Department of Science Education" }],
      abstract: "Research on contextual instructional models for addressing physics misconceptions in secondary schools.",
      doi: "10.12345/didee.2024.010",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "4", pages: "131-145",
      keywords: ["Physics Education", "Instructional Models", "Misconceptions", "Secondary Schools"],
      pdfUrl: "/articles/the-roles-contextual.pdf",
      domain: "Education"
    },
    'youth-empowerment-pathway': {
      title: "Youth Empowerment: A Pathway to Unlocking Employability and Entrepreneurial Skills in Enugu State, Nigeria",
      authors: [{ name: "Odenigbo Veronica Ngozi", affiliation: "Department of Science Education, Enugu State University of Science and Technology" }, { name: "Ukwuaba Loretta Chika", affiliation: "" }],
      abstract: "Study on youth empowerment strategies for developing employability and entrepreneurial skills.",
      doi: "10.12345/didee.2024.011",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "4", pages: "146-160",
      keywords: ["Youth Empowerment", "Employability", "Entrepreneurship", "Enugu State"],
      pdfUrl: "/articles/youth-empowerment-pathway.pdf",
      domain: "Education"
    },
    'influence-of-school-locations': {
      title: "Influence of School Location on the Effectiveness of Multimedia Instruction in Christian Religious Studies in Edo State, Nigeria",
      authors: [{ name: "Alexander Onyekachi Ugwu", affiliation: "" }],
      abstract: "Analysis of how school location affects multimedia instruction effectiveness in religious studies.",
      doi: "10.12345/didee.2024.012",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "4", pages: "161-175",
      keywords: ["School Location", "Multimedia Instruction", "Religious Studies", "Edo State"],
      pdfUrl: "/articles/Influence-of-school-locations.pdf",
      domain: "Education"
    },
    'enhancing-quality-assurance-in-biology-education': {
      title: "Enhancing Quality Assurance in Biology Education Programme: Strategies for Effective Implementation of NCCE Benchmark in Colleges of Education",
      authors: [{ name: "Abigail C. Obodo", affiliation: "Department of Science Education, Enugu State University of Science and Technology" }, { name: "Kingsley T. Onah", affiliation: "Department of Science Education, Enugu State University of Science and Technology" }, { name: "Jacinta L. Ogbonna", affiliation: "Department of Biology Education, Federal College of Education Technical" }],
      abstract: "Strategies for implementing quality assurance in biology education programs in colleges of education.",
      doi: "10.12345/didee.2024.013",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "4", pages: "176-190",
      keywords: ["Quality Assurance", "Biology Education", "NCCE", "Colleges of Education"],
      pdfUrl: "/articles/enhancing-quality-assurance-in-biology-education.pdf",
      domain: "Education"
    },
    'counsellors-perception-of-peer-mentoring': {
      title: "Counsellors Perception of Peer Mentoring on Students' Academic Performance in Secondary Schools in Enugu State",
      authors: [{ name: "Ikeji Maureen Chinyeaka", affiliation: "Department of Guidance and Counselling, Faculty of Education, Peaceland University" }],
      abstract: "Study on counsellors' perceptions of peer mentoring impact on academic performance in secondary schools.",
      doi: "10.12345/didee.2024.014",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "4", pages: "191-205",
      keywords: ["Peer Mentoring", "Academic Performance", "Counselling", "Secondary Schools"],
      pdfUrl: "/articles/counsellors-perception-of-peer-mentoring.pdf",
      domain: "Education"
    },
    'e-assessments-applications': {
      title: "E-Assessments Applications in Teaching and Learning in Nigerian Universities",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines the application of e-assessment tools in teaching and learning in Nigerian universities.",
      doi: "10.12345/didee.2024.015",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["E-Assessment", "Teaching", "Learning", "Nigerian Universities"],
      pdfUrl: "/articles/e-assessments-applications.pdf",
      domain: "Education"
    },
    'enhancing-the-teaching-of-mechanical-engineering': {
      title: "Enhancing the Teaching of Mechanical Engineering Drawing Using Augmented Reality in Technical Colleges in Enugu State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study investigates the use of augmented reality to enhance the teaching of mechanical engineering drawing in technical colleges.",
      doi: "10.12345/didee.2024.016",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Augmented Reality", "Mechanical Engineering", "Technical Education", "Enugu State"],
      pdfUrl: "/articles/enhancing-the-teaching-of-mechanical-engineering.pdf",
      domain: "Education"
    },
    'influence-of-school-infrastructure': {
      title: "Influence of School Infrastructure on Academic Performance of Secondary School Students in Enugu State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines how school infrastructure affects the academic performance of secondary school students in Enugu State.",
      doi: "10.12345/didee.2024.017",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["School Infrastructure", "Academic Performance", "Secondary Schools", "Enugu State"],
      pdfUrl: "/articles/influence-of-school-infrastructure.pdf",
      domain: "Education"
    },
    'areji-journal': {
      title: "Computer Competencies Required for E-Examinations by Students of National Open University of Nigeria in Enugu State Study Centres",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study identifies the computer competencies required for e-examinations by students of the National Open University of Nigeria in Enugu State study centres.",
      doi: "10.12345/didee.2024.018",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Computer Competencies", "E-Examinations", "NOUN", "Enugu State"],
      pdfUrl: "/articles/areji-journal.pdf",
      domain: "Education"
    },
    'main-manuscript': {
      title: "Assessment of Effectiveness of Online Vendor Platforms in Promoting Micro-Business Performance of Technology and Vocational Education Students in Universities in Ebonyi State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study assesses the effectiveness of online vendor platforms in promoting micro-business performance among technology and vocational education students in Ebonyi State universities.",
      doi: "10.12345/didee.2024.019",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Online Vendor Platforms", "Micro-Business", "Vocational Education", "Ebonyi State"],
      pdfUrl: "/articles/main-manuscript.pdf",
      domain: "Education"
    },
    'impact-of-ai-on-mentalhealth': {
      title: "Impact of Artificial Intelligence on Mental Health: Opportunities, Risks, and Ethical Considerations",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study explores the impact of artificial intelligence on mental health, examining opportunities, risks, and ethical considerations.",
      doi: "10.12345/didee.2024.020",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Artificial Intelligence", "Mental Health", "Ethics", "Technology"],
      pdfUrl: "/articles/impact-of-ai-on-mentalhealth.pdf",
      domain: "Psychology"
    },
    'influence-of-parental-seperation': {
      title: "Influence of Parental Separation on the Psychological Well-Being of Secondary School Students",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines how parental separation influences the psychological well-being of secondary school students.",
      doi: "10.12345/didee.2024.021",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Parental Separation", "Psychological Well-Being", "Secondary School", "Students"],
      pdfUrl: "/articles/influence-of-parental-seperation.pdf",
      domain: "Psychology"
    },
    'delta-journal': {
      title: "Impact of Psychological Counselling on the Economic Survival of Families in Isi-Uzo LGA of Enugu State: A 21st Century Approach",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study investigates the impact of psychological counselling on the economic survival of families in Isi-Uzo LGA of Enugu State.",
      doi: "10.12345/didee.2024.022",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Psychological Counselling", "Economic Survival", "Families", "Enugu State"],
      pdfUrl: "/articles/delta-journal.pdf",
      domain: "Psychology"
    },
    'doc-paper': {
      title: "Waste Management Activities Utilized in Resolving Environmental Issues for Sustainable Community Development in South East States, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines waste management activities used to resolve environmental issues for sustainable community development in South East Nigeria.",
      doi: "10.12345/didee.2024.024",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Waste Management", "Environmental Issues", "Sustainable Development", "South East Nigeria"],
      pdfUrl: "/articles/doc-paper.pdf",
      domain: "Environment"
    },
    'perception-of-female-genital-mutilation': {
      title: "Perception of Female Genital Mutilation Among Women of Reproductive Age in Ebonyi State, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines perceptions of female genital mutilation among women of reproductive age in Ebonyi State, Nigeria.",
      doi: "10.12345/didee.2024.025",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Female Genital Mutilation", "Perception", "Reproductive Health", "Ebonyi State"],
      pdfUrl: "/articles/perception-of-female-genital-mutilation.pdf",
      domain: "Health Sciences"
    },
    'academic-motivation-personality-type': {
      title: "Academic Motivation, Personality Type, and Academic Self-Efficacy as Predictors of Library Usage Frequency among In-School Adolescents in Public Secondary Schools in Ibadan, Oyo State, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines academic motivation, personality type, and self-efficacy as predictors of library usage among secondary school adolescents in Ibadan.",
      doi: "10.12345/didee.2024.026",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Academic Motivation", "Personality Type", "Self-Efficacy", "Library Usage"],
      pdfUrl: "/articles/academic-motivation-personality-type.pdf",
      domain: "Psychology"
    },
    'comparative-study-of-constraints': {
      title: "Comparative Study of Constraints to Administrative Effectiveness of Public and Private Secondary Schools in Enugu State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study compares constraints to administrative effectiveness in public and private secondary schools in Enugu State.",
      doi: "10.12345/didee.2024.027",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Administrative Effectiveness", "Secondary Schools", "Public Schools", "Private Schools"],
      pdfUrl: "/articles/comparative-study-of-constraints.pdf",
      domain: "Education"
    },
    'cultural-soundscape': {
      title: "Cultural Soundscapes: How African Music Shapes and Reflects Democratic Ideals",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study explores how African music shapes and reflects democratic ideals through cultural soundscapes.",
      doi: "10.12345/didee.2024.028",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["African Music", "Democracy", "Cultural Soundscape", "Media Studies"],
      pdfUrl: "/articles/cultural-soundscape.pdf",
      domain: "Media Studies"
    },
    'effects-of-projected-nonprojected': {
      title: "Comparative Study of the Effects of Projected and Non-Projected Instructional Materials on Students' Achievement in English Language in Secondary Schools in Enugu Education Zone",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study compares the effects of projected and non-projected instructional materials on English language achievement in secondary schools.",
      doi: "10.12345/didee.2024.029",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Instructional Materials", "English Language", "Secondary Schools", "Enugu State"],
      pdfUrl: "/articles/effects-of-projected-nonprojected.pdf",
      domain: "Education"
    },
    'efficacy-of-multimedia-instruction': {
      title: "Efficacy of Multimedia Instruction on Student Interest and Achievement in Christian Religious Studies in Edo State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines the efficacy of multimedia instruction on student interest and achievement in Christian Religious Studies in Edo State.",
      doi: "10.12345/didee.2024.030",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Multimedia Instruction", "Religious Studies", "Student Achievement", "Edo State"],
      pdfUrl: "/articles/efficacy-of-multimedia-instruction.pdf",
      domain: "Education"
    },
    'environmental-sanitation': {
      title: "Environmental Sanitation Activities Utilized in Resolving Environmental Issues for Sustainable Community Development in South East States, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines environmental sanitation activities used to resolve environmental issues for sustainable community development in South East Nigeria.",
      doi: "10.12345/didee.2024.031",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Environmental Sanitation", "Sustainable Development", "Community Development", "South East Nigeria"],
      pdfUrl: "/articles/environmental-sanitation.pdf",
      domain: "Agriculture"
    },
    'improved-drought-and-heat-tolerance': {
      title: "Drought and Heat Tolerance Mechanisms in Underutilised Legume Species: A Systematic Review",
      authors: [{ name: "", affiliation: "" }],
      abstract: "A systematic review of drought and heat tolerance mechanisms in underutilised legume species.",
      doi: "10.12345/didee.2024.032",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Drought Tolerance", "Heat Tolerance", "Legumes", "Agriculture"],
      pdfUrl: "/articles/improved-drought-and-heat-tolerance.pdf",
      domain: "Agriculture"
    },
    'influence-of-gender': {
      title: "Influence of Gender on the Effectiveness of Multimedia Instruction in Christian Religious Studies in Edo State, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines how gender influences the effectiveness of multimedia instruction in Christian Religious Studies in Edo State.",
      doi: "10.12345/didee.2024.033",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Gender", "Multimedia Instruction", "Religious Studies", "Edo State"],
      pdfUrl: "/articles/influence-of-gender.pdf",
      domain: "Education"
    },
    'influence-of-library-environment': {
      title: "Influence of Library Environment, Resource Availability, and Study Duration on Students' Mental Health: The Mediating Role of Academic Stress among Polytechnic Ibadan Students",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines how library environment, resource availability, and study duration influence students' mental health among Polytechnic Ibadan students.",
      doi: "10.12345/didee.2024.034",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Library Environment", "Mental Health", "Academic Stress", "Polytechnic Students"],
      pdfUrl: "/articles/influence-of-library-environment.pdf",
      domain: "Psychology"
    },
    'integrating-emerging-technologies': {
      title: "Integrating Emerging Technologies into Guidance and Counselling for Sustainable Development in Public Universities in South-East, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines the integration of emerging technologies into guidance and counselling for sustainable development in South-East Nigerian universities.",
      doi: "10.12345/didee.2024.035",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Emerging Technologies", "Guidance and Counselling", "Sustainable Development", "Universities"],
      pdfUrl: "/articles/integrating-emerging-technologies.pdf",
      domain: "Education"
    },
    'justice-and-rights': {
      title: "Justice and Rights in Nozick's Libertarianism: What Prospect for Community and Nation?",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines justice and rights within Nozick's libertarian framework and its implications for community and nation.",
      doi: "10.12345/didee.2024.036",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Justice", "Rights", "Libertarianism", "Nozick"],
      pdfUrl: "/articles/justice-and-rights.pdf",
      domain: "Philosophy"
    },
    'management-of-sports-facilities': {
      title: "Management of Sports Facilities in Secondary Schools in Enugu State, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines the management of sports facilities in secondary schools in Enugu State, Nigeria.",
      doi: "10.12345/didee.2024.037",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Sports Facilities", "Secondary Schools", "Management", "Enugu State"],
      pdfUrl: "/articles/management-of-sports-facilities.pdf",
      domain: "Education"
    },
    'principals-adoption-of-artificial-intelligence': {
      title: "Principals Adoption of Artificial Intelligence (AI) for Human Resource Management in Secondary Schools in Enugu State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines how school principals adopt artificial intelligence for human resource management in secondary schools in Enugu State.",
      doi: "10.12345/didee.2024.038",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Artificial Intelligence", "Human Resource Management", "Secondary Schools", "Enugu State"],
      pdfUrl: "/articles/principals-adoption-of-artificial-intelligence.pdf",
      domain: "Education"
    },
    'psychological-factors-affecting-students-wellbeing': {
      title: "Psychological Factors Affecting Wellbeing of Students Living with Sickle Cell Anemia in Senior Secondary School in Enugu State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines psychological factors affecting the wellbeing of students living with sickle cell anemia in senior secondary schools in Enugu State.",
      doi: "10.12345/didee.2024.039",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Psychological Factors", "Sickle Cell Anemia", "Student Wellbeing", "Secondary Schools"],
      pdfUrl: "/articles/psychological-factors-affecting-students-wellbeing.pdf",
      domain: "Psychology"
    },
    'utilization-of-active-listening-skills': {
      title: "Utilization of Active Listening Skills for Enhancing Counselling Practice in Secondary Schools in Enugu State, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines the utilization of active listening skills for enhancing counselling practice in secondary schools in Enugu State.",
      doi: "10.12345/didee.2024.040",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Active Listening", "Counselling", "Secondary Schools", "Enugu State"],
      pdfUrl: "/articles/utilization-of-active-listening-skills.pdf",
      domain: "Education"
    },
    'utilization-of-online-learning-platforms': {
      title: "Utilization of Online Learning Platforms for Effective Instructional Delivery by University Business Educators in South-East, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines how university business educators utilize online learning platforms for effective instructional delivery in South-East Nigeria.",
      doi: "10.12345/didee.2024.041",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Online Learning", "Business Education", "Instructional Delivery", "South-East Nigeria"],
      pdfUrl: "/articles/utilization-of-online-learning-platforms.pdf",
      domain: "Education"
    },
    'utilization-of-sports-facilities': {
      title: "Utilization of Sports Facilities in Secondary Schools in Enugu State, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines the utilization of sports facilities in secondary schools in Enugu State, Nigeria.",
      doi: "10.12345/didee.2024.042",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Sports Facilities", "Secondary Schools", "Utilization", "Enugu State"],
      pdfUrl: "/articles/utilization-of-sports-facilities.pdf",
      domain: "Education"
    },
    'corrected paper': {
      title: "Improving the Maternal Health of Rural Women Through Community Education Programmes in Enugu State, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines how community education programmes can improve the maternal health of rural women in Enugu State, Nigeria.",
      doi: "10.12345/didee.2024.043",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Maternal Health", "Rural Women", "Community Education", "Enugu State"],
      pdfUrl: "/articles/corrected paper.pdf",
      domain: "Health Sciences"
    },
    'ai-powered-learning-in-business-education': {
      title: "AI-Powered Learning in Business Education: Personalization, Ethics, and Curriculum Innovation",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines AI-powered learning in business education, focusing on personalization, ethics, and curriculum innovation.",
      doi: "10.12345/didee.2024.044",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Artificial Intelligence", "Business Education", "Personalization", "Curriculum"],
      pdfUrl: "/articles/ai-powered-learning-in-business-education.pdf",
      domain: "Education"
    },
    'availability-and-utilization-of-digital-tools': {
      title: "Availability and Utilization of Digital Tools for Remote English Language Teaching in Secondary Schools in Enugu State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines the availability and utilization of digital tools for remote English language teaching in secondary schools in Enugu State.",
      doi: "10.12345/didee.2024.045",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Digital Tools", "English Language Teaching", "Remote Learning", "Enugu State"],
      pdfUrl: "/articles/availability-and-utilization-of-digital-tools.pdf",
      domain: "Education"
    },
    'career-guidance-strategies': {
      title: "Career Guidance Strategies for Increasing Students' Choice of Vocational and Technical Education Subjects in Secondary Schools in Ebonyi State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines career guidance strategies for increasing students' choice of vocational and technical education subjects in Ebonyi State.",
      doi: "10.12345/didee.2024.046",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Career Guidance", "Vocational Education", "Technical Education", "Ebonyi State"],
      pdfUrl: "/articles/career-guidance-strategies.pdf",
      domain: "Education"
    },
    'detection-of-brain-bias-in-mathematics': {
      title: "Detection of Item Bias in Mathematics Multiple Choice Test Items of West African Examination Council in Enugu State using Differential Item Functioning Technique",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study detects item bias in mathematics multiple choice test items using differential item functioning technique in Enugu State.",
      doi: "10.12345/didee.2024.047",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Item Bias", "Mathematics", "WAEC", "Differential Item Functioning"],
      pdfUrl: "/articles/detection-of-brain-bias-in-mathematics.pdf",
      domain: "Education"
    },
    'digital-citizenship': {
      title: "Digital Citizenship and Students' Online Behaviour and Mental Health in Secondary Schools: Implications for Guidance and Counselling in Enugu Education Zone",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines digital citizenship and its implications for students' online behaviour and mental health in secondary schools.",
      doi: "10.12345/didee.2024.048",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Digital Citizenship", "Online Behaviour", "Mental Health", "Guidance and Counselling"],
      pdfUrl: "/articles/digital-citizenship.pdf",
      domain: "Education"
    },
    'digital-storytelling-on-reading-habits': {
      title: "Teachers' Perception of the Impact of Digital Storytelling Tools on Pupil's Reading Habits and Comprehension in Primary Schools in Enugu State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines teachers' perceptions of digital storytelling tools' impact on reading habits and comprehension in primary schools.",
      doi: "10.12345/didee.2024.049",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Digital Storytelling", "Reading Habits", "Primary Schools", "Enugu State"],
      pdfUrl: "/articles/digital-storytelling-on-reading-habits.pdf",
      domain: "Education"
    },
    'effect-of-combined': {
      title: "Effect of Combined Application of Vermicompost Manure with Inorganic Fertilizer on Yam Productivity and Soil Properties of a Nutrient Depleted Tropical Alfisol",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines the effect of combined vermicompost manure and inorganic fertilizer application on yam productivity and soil properties.",
      doi: "10.12345/didee.2024.050",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Vermicompost", "Inorganic Fertilizer", "Yam Productivity", "Soil Properties"],
      pdfUrl: "/articles/effect-of-combined.pdf",
      domain: "Agriculture"
    },
    'impact-of-counselling': {
      title: "Impact of Counselling Interventions on Youth Socio-Economic Development in Abia State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines the impact of counselling interventions on youth socio-economic development in Abia State.",
      doi: "10.12345/didee.2024.051",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Counselling", "Youth Development", "Socio-Economic", "Abia State"],
      pdfUrl: "/articles/impact-of-counselling.pdf",
      domain: "Psychology"
    },
    'impact-of-emotional-intelligence': {
      title: "Impact of Emotional Intelligence and Social Media on Mental Health of Students in Faculty of Education, Alex Ekwueme Federal University",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines the impact of emotional intelligence and social media on mental health of students in Alex Ekwueme Federal University.",
      doi: "10.12345/didee.2024.052",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Emotional Intelligence", "Social Media", "Mental Health", "University Students"],
      pdfUrl: "/articles/impact-of-emotional-intelligence.pdf",
      domain: "Psychology"
    },
    'impact-of-social-media-on-mental-health': {
      title: "Impact of Emotional Intelligence and Social Media on Mental Health of Students (Vol. 1, Issue 4, pp. 521-537)",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines the impact of emotional intelligence and social media on mental health of students.",
      doi: "10.12345/didee.2024.053",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "4", pages: "521-537",
      keywords: ["Emotional Intelligence", "Social Media", "Mental Health", "Students"],
      pdfUrl: "/articles/impact-of-social-media-on-mental-health.pdf",
      domain: "Psychology"
    },
    'influence-of-counselling-intervention-on-youth': {
      title: "Influence of Counselling Interventions on Youth Socio-Economic Development in Abia State, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines the influence of counselling interventions on youth socio-economic development in Abia State, Nigeria.",
      doi: "10.12345/didee.2024.054",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Counselling", "Youth", "Socio-Economic Development", "Abia State"],
      pdfUrl: "/articles/influence-of-counselling-intervention-on-youth.pdf",
      domain: "Education"
    },
    'investigating-the-role-of-entrepreneurship': {
      title: "Investigating the role of entrepreneurship education on financial management skill development of business students",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study investigates the role of entrepreneurship education on financial management skill development among business students.",
      doi: "10.12345/didee.2024.055",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Entrepreneurship Education", "Financial Management", "Business Students", "Skill Development"],
      pdfUrl: "/articles/investigating-the-role-of-entrepreneurship.pdf",
      domain: "Education"
    },
    'knowledge-and-practice-of-female-genital-mutilation': {
      title: "Knowledge, Attitude, and Practice of Female Genital Mutilation Among Mothers and Traditional Birth Attendants in Rural Communities of Anambra State, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines knowledge, attitude, and practice of female genital mutilation among mothers and traditional birth attendants in Anambra State.",
      doi: "10.12345/didee.2024.056",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Female Genital Mutilation", "Knowledge", "Attitude", "Anambra State"],
      pdfUrl: "/articles/knowledge-and-practice-of-female-genital-mutilation.pdf",
      domain: "Health Sciences"
    },
    'factors-influencing-female-genital-mutilation': {
      title: "Factors Influencing Continuation of Female Genital Mutilation among Women of Reproductive Age in Ebonyi State, Nigeria",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines factors influencing the continuation of female genital mutilation among women of reproductive age in Ebonyi State.",
      doi: "10.12345/didee.2024.057",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Female Genital Mutilation", "Reproductive Age", "Ebonyi State", "Health"],
      pdfUrl: "/articles/factors-influencing-female-genital-mutilation.pdf",
      domain: "Health Sciences"
    },
    'factors-to-menstrual-hygiene': {
      title: "Factors to Menstrual Hygiene Practices Among Adolescent Female Secondary School Students in Nkanu West Local Government Area of Enugu State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines factors influencing menstrual hygiene practices among adolescent female secondary school students in Enugu State.",
      doi: "10.12345/didee.2024.058",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Menstrual Hygiene", "Adolescent Girls", "Secondary Schools", "Enugu State"],
      pdfUrl: "/articles/factors-to-menstrual-hygiene.pdf",
      domain: "Health Sciences"
    },
    'personalized-medicine-mgt-diabetes': {
      title: "Personalized Medicine in the Management of Diabetes Mellitus: Pathophysiology, Diagnosis, and Emerging Therapeutic Strategies",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines personalized medicine approaches in the management of diabetes mellitus, including pathophysiology, diagnosis, and emerging therapeutic strategies.",
      doi: "10.12345/didee.2024.059",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Personalized Medicine", "Diabetes Mellitus", "Pathophysiology", "Therapeutic Strategies"],
      pdfUrl: "/articles/personalized-medicine-mgt-diabetes.pdf",
      domain: "Health Sciences"
    },
    'teachers-perception-on-experimental-learning': {
      title: "Teachers Perception on Extent Experiential Learning Enhances Cognitive Development of Secondary School Students in Enugu State",
      authors: [{ name: "", affiliation: "" }],
      abstract: "This study examines teachers' perceptions of how experiential learning enhances cognitive development of secondary school students in Enugu State.",
      doi: "10.12345/didee.2024.060",
      publishedDate: "January 1, 2024",
      volume: "1", issue: "5", pages: "",
      keywords: ["Experiential Learning", "Cognitive Development", "Secondary Schools", "Enugu State"],
      pdfUrl: "/articles/teachers-perception-on-experimental-learning.pdf",
      domain: "Education"
    }
  };

  return articles[slug] || {
    title: "Article Not Found",
    authors: [],
    abstract: "This article could not be found.",
    doi: "", publishedDate: "", volume: "", issue: "", pages: "",
    keywords: [], pdfUrl: "", domain: ""
  };
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
    { slug: 'the-impact-exorcism-practices' },
    { slug: 'academic-motivation-personality-type' },
    { slug: 'comparative-study-of-constraints' },
    { slug: 'cultural-soundscape' },
    { slug: 'effects-of-projected-nonprojected' },
    { slug: 'efficacy-of-multimedia-instruction' },
    { slug: 'environmental-sanitation' },
    { slug: 'improved-drought-and-heat-tolerance' },
    { slug: 'influence-of-gender' },
    { slug: 'influence-of-library-environment' },
    { slug: 'integrating-emerging-technologies' },
    { slug: 'justice-and-rights' },
    { slug: 'management-of-sports-facilities' },
    { slug: 'principals-adoption-of-artificial-intelligence' },
    { slug: 'psychological-factors-affecting-students-wellbeing' },
    { slug: 'utilization-of-active-listening-skills' },
    { slug: 'utilization-of-online-learning-platforms' },
    { slug: 'utilization-of-sports-facilities' },
    { slug: 'e-assessments-applications' },
    { slug: 'enhancing-the-teaching-of-mechanical-engineering' },
    { slug: 'influence-of-school-infrastructure' },
    { slug: 'areji-journal' },
    { slug: 'main-manuscript' },
    { slug: 'impact-of-ai-on-mentalhealth' },
    { slug: 'influence-of-parental-seperation' },
    { slug: 'delta-journal' },
    { slug: 'corrected paper' },
    { slug: 'doc-paper' },
    { slug: 'perception-of-female-genital-mutilation' },
    { slug: 'ai-powered-learning-in-business-education' },
    { slug: 'availability-and-utilization-of-digital-tools' },
    { slug: 'career-guidance-strategies' },
    { slug: 'detection-of-brain-bias-in-mathematics' },
    { slug: 'digital-citizenship' },
    { slug: 'digital-storytelling-on-reading-habits' },
    { slug: 'effect-of-combined' },
    { slug: 'impact-of-counselling' },
    { slug: 'impact-of-emotional-intelligence' },
    { slug: 'impact-of-social-media-on-mental-health' },
    { slug: 'influence-of-counselling-intervention-on-youth' },
    { slug: 'investigating-the-role-of-entrepreneurship' },
    { slug: 'knowledge-and-practice-of-female-genital-mutilation' },
    { slug: 'factors-influencing-female-genital-mutilation' },
    { slug: 'factors-to-menstrual-hygiene' },
    { slug: 'personalized-medicine-mgt-diabetes' },
    { slug: 'teachers-perception-on-experimental-learning' }
  ];
}

export async function generateMetadata({ params }: ArticleProps): Promise<Metadata> {
  const article = getArticleData(params.slug);
  
  if (!article.title || article.title === "Article Not Found") {
    return {
      title: 'Article Not Found | Didee Publications',
      description: 'The requested article could not be found.',
      robots: { index: false, follow: false }
    };
  }

  const publishedDate = new Date(article.publishedDate);
  const keywords = [
    ...article.keywords,
    'academic research',
    'peer reviewed',
    'scholarly article',
    article.domain || 'research',
    'Nigeria',
    'international journal'
  ];

  return {
    title: `${article.title} | Didee Publications`,
    description: article.abstract.length > 160 
      ? article.abstract.substring(0, 157) + '...' 
      : article.abstract,
    keywords: keywords.join(', '),
    authors: article.authors.map(author => ({ name: author.name })),
    publisher: siteConfig.publisher,
    openGraph: {
      title: article.title,
      description: article.abstract,
      type: 'article',
      publishedTime: article.publishedDate,
      authors: article.authors.map(author => author.name),
      section: article.domain || 'Research',
      tags: article.keywords,
      images: [
        {
          url: '/images/Individual-article.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.abstract.length > 200 
        ? article.abstract.substring(0, 197) + '...' 
        : article.abstract,
      images: ['/images/Individual-article.jpg'],
    },
    alternates: {
      canonical: `${siteConfig.url}/articles/${params.slug}`,
    },
    other: {
      // Google Scholar metadata
      "citation_title": article.title,
      "citation_author": article.authors.map(a => a.name).join("; "),
      "citation_publication_date": publishedDate.getFullYear().toString(),
      "citation_journal_title": "Didee Publications International Journal",
      "citation_issn": siteConfig.issn,
      "citation_volume": article.volume,
      "citation_issue": article.issue,
      "citation_firstpage": article.pages.split("-")[0],
      "citation_lastpage": article.pages.split("-")[1] || article.pages.split("-")[0],
      "citation_doi": article.doi,
      "citation_pdf_url": `${siteConfig.url}${article.pdfUrl}`,
      "citation_abstract_html_url": `${siteConfig.url}/articles/${params.slug}`,
      "citation_language": "en",
      "citation_keywords": article.keywords.join("; "),
      
      // Dublin Core metadata
      "DC.Title": article.title,
      "DC.Creator": article.authors.map(a => a.name).join("; "),
      "DC.Date": article.publishedDate,
      "DC.Identifier": article.doi,
      "DC.Description": article.abstract,
      "DC.Subject": article.keywords.join("; "),
      "DC.Type": "Text",
      "DC.Format": "text/html",
      "DC.Language": "en",
      "DC.Rights": `Copyright ${publishedDate.getFullYear()} ${siteConfig.publisher}`,
      
      // Additional academic metadata
      "prism.publicationName": "Didee Publications International Journal",
      "prism.issn": siteConfig.issn,
      "prism.volume": article.volume,
      "prism.number": article.issue,
      "prism.startingPage": article.pages.split("-")[0],
      "prism.endingPage": article.pages.split("-")[1] || article.pages.split("-")[0],
      "prism.publicationDate": article.publishedDate,
      "prism.doi": article.doi,
    }
  };
}

export default function ArticlePage({ params }: ArticleProps) {
  const article = getArticleData(params.slug);

  const breadcrumbItems = [
    { name: 'Home', url: siteConfig.url },
    { name: 'Articles', url: `${siteConfig.url}/articles` },
    { name: article.title, url: `${siteConfig.url}/articles/${params.slug}` }
  ];

  return (
    <div className="min-h-screen" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/Individual-article.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleStructuredData(article, params.slug))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbStructuredData(breadcrumbItems))
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