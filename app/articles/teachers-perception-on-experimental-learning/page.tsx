import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Teachers Perception on Extent Experiential Learning Enhances Cognitive Development | Didee Publications",
  description: "The study investigated teachers' perception on extent experiential learning enhances cognitive development of secondary school students in Enugu State."
};

export default function ExperientialLearningArticle() {
  const article = {
    title: "TEACHERS PERCEPTION ON EXTENT EXPERIENTIAL LEARNING ENHANCES COGNITIVE DEVELOPMENT OF SECONDARY SCHOOL STUDENTS IN ENUGU STATE",
    authors: [
      { name: "Ijeoma Evelyn Animba", affiliation: "Department of Educational Psychology, Faculty of Education, Enugu State University of Science and Technology" },
      { name: "Wellington, Tammy Iboma", affiliation: "Department of Educational Psychology, Faculty of Education, Enugu State University of Science and Technology" },
      { name: "Wellington, Joy Tamunokorinama", affiliation: "Department of Political Science, Nigeria Defense Academy (NDA)" }
    ],
    abstract: "The study investigated teachers' perception on extent experiential learning enhances cognitive development of secondary school students in Enugu State. Two research questions were formulated to guide the study. This study adopted a descriptive survey research design. The population comprised all 505 secondary school teachers from selected secondary schools in Nsukka Education Zone. A simple random sampling technique without replacement was used to select the schools. From each of the sampled schools, six teachers were randomly selected, bringing the total sample size to 120 teachers. Cronbach's Alpha was used to determine the internal consistency of the instrument, yielding a reliability coefficient of 0.83. The study found among others, that many teachers believed that experiential learning enhances active engagement, critical thinking and problem solving, reflection, application of knowledge and creativity.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "756-767",
    keywords: ["Experiential Learning", "Cognitive Development", "Secondary School"],
    pdfUrl: "/articles/teachers-perception-on-experimental-learning.pdf"
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
                <div key={index} className="text-gray-700"><strong>{author.name}</strong> — {author.affiliation}</div>
              ))}
            </div>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div><strong>Published:</strong> {article.publishedDate}</div>
                <div><strong>Volume:</strong> {article.volume}, Issue: {article.issue}</div>
                <div><strong>Pages:</strong> {article.pages}</div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Abstract</h3>
              <p className="text-gray-700">{article.abstract}</p>
            </div>
            <div className="mb-8">
              <a href={article.pdfUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center bg-amber-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-amber-700 transition">
                Download Full Article (PDF)
              </a>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {article.keywords.map((keyword, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{keyword}</span>
                ))}
              </div>
            </div>
          </header>
        </article>
      </div>
    </div>
  );
}
