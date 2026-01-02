'use client';

import { useState } from 'react';

export default function ExorcismContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="prose max-w-none text-gray-800 leading-relaxed">
      <h2 className="text-2xl font-bold mt-8 mb-4">Introduction</h2>
      <p className="mb-4">
        The practice of exorcism within the Catholic Church represents one of the most ancient and controversial aspects of Christian ministry. Father Gabriele Amorth (1925-2016), who served as the Chief Exorcist of Rome and founder of the International Association of Exorcists, brought unprecedented attention to this ministry through his extensive work and writings.
      </p>
      
      <p className="mb-4">
        This study examines the theological, canonical, and pastoral dimensions of Catholic exorcism as understood and practiced according to Amorth's methodology and the Church's official teachings.
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