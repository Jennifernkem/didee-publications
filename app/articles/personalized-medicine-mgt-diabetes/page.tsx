import { Metadata } from 'next';
import Navigation from '../../../components/Navigation';

export const metadata: Metadata = {
  title: "Personalized Medicine in the Management of Diabetes Mellitus | Didee Publications",
  description: "This review provides a comprehensive overview of the pathophysiology, classification, diagnosis, and management of diabetes mellitus."
};

export default function PersonalizedMedicineArticle() {
  const article = {
    title: "Personalized Medicine in the Management of Diabetes Mellitus: Pathophysiology, Diagnosis, and Emerging Therapeutic Strategies",
    authors: [
      { name: "Chukwunonso Patrick Eya", affiliation: "Department of Environmental Health Science, Faculty of Health Science, National Open University of Nigeria, Abuja" },
      { name: "Izuchukwu Emmanuel Eya", affiliation: "Department of Medicine and Surgery, School of Clinical Sciences, Babcock University, Ilishan-Remo, Ogun State" }
    ],
    abstract: "Diabetes mellitus is a chronic metabolic disorder characterized by persistent hyperglycemia resulting from defects in insulin secretion, insulin action, or both. It has emerged as a major global health concern, with rapidly increasing prevalence driven by sedentary lifestyles, unhealthy diets, obesity, and population aging. This review provides a comprehensive overview of the pathophysiology, classification, diagnosis, and management of diabetes mellitus, highlighting the heterogeneity of the disease and its associated complications. Current diagnostic approaches, such as fasting plasma glucose, oral glucose tolerance tests, and glycated hemoglobin (HbA1c), are evaluated for their effectiveness and limitations. The review further examines conventional treatment strategies alongside emerging approaches such as combination therapy and technological advancements in glucose monitoring. Emphasis is placed on the growing role of personalized medicine, which tailors treatment based on genetic, environmental, and lifestyle factors to improve glycemic control and patient outcomes.",
    publishedDate: 'May 1, 2026',
    volume: "1", issue: "4", pages: "707-728",
    keywords: ["Diabetes Mellitus", "Personalized Medicine", "Insulin Resistance", "Hyperglycemia", "Phytotherapy", "Diagnosis", "Combination Therapy"],
    pdfUrl: "/articles/personalized-medicine-mgt-diabetes.pdf"
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
