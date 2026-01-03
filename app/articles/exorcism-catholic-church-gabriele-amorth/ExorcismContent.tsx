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
        This study examines the theological, canonical, and pastoral dimensions of Catholic exorcism as understood and practiced according to Amorth's methodology and the Church's official teachings. Through his decades of experience, Father Amorth performed over 70,000 exorcisms and provided invaluable insights into the Church's approach to spiritual warfare.
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
          <h2 className="text-2xl font-bold mt-8 mb-4">Historical Context and Background</h2>
          <p className="mb-4">
            The ministry of exorcism has its roots in the New Testament, where Jesus Christ is recorded as casting out demons and giving His apostles authority over unclean spirits. The early Church continued this practice, and by the 4th century, the office of exorcist was established as one of the minor orders in the Catholic Church.
          </p>
          
          <p className="mb-4">
            Father Gabriele Amorth was appointed as the official exorcist of the Diocese of Rome in 1986 by Cardinal Ugo Poletti. His appointment came at a time when the Church was experiencing renewed interest in the ministry of exorcism, partly due to increased reports of demonic activity and the influence of occult practices in modern society.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Theological Foundations</h2>
          <p className="mb-4">
            The Catholic Church's approach to exorcism is rooted in Scripture and Tradition. The Gospels record numerous instances of Jesus Christ casting out demons, and He explicitly gave His apostles authority over unclean spirits (Mark 6:7, Luke 9:1). This authority has been passed down through apostolic succession to the bishops and priests of the Catholic Church.
          </p>
          
          <p className="mb-4">
            According to Amorth, the Church's understanding of demonic possession is based on several key theological principles:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The reality of Satan and demonic forces as described in Catholic doctrine and Scripture</li>
            <li>The authority of Christ over all spiritual powers, including demons and evil spirits</li>
            <li>The Church's participation in Christ's ministry of liberation and healing</li>
            <li>The distinction between genuine possession and psychological or psychiatric disorders</li>
            <li>The importance of faith, prayer, and sacramental life in spiritual warfare</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">The Nature of Demonic Possession</h3>
          <p className="mb-4">
            Father Amorth distinguished between different types of demonic influence, ranging from simple temptation to full possession. He identified several categories:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Temptation:</strong> The ordinary influence of evil that all humans experience</li>
            <li><strong>Obsession:</strong> External attacks by demons that cause physical or psychological disturbance</li>
            <li><strong>Oppression:</strong> More severe external attacks that can affect health, relationships, and circumstances</li>
            <li><strong>Possession:</strong> The most severe form where demons take control of a person's body and faculties</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Canonical Procedures and Legal Framework</h2>
          <p className="mb-4">
            The Catholic Church has established specific canonical procedures for the ministry of exorcism, codified in the Code of Canon Law (Canon 1172) and the Ritual of Exorcism (Rituale Romanum) revised in 1999. These procedures ensure that exorcisms are conducted with proper authority and discernment.
          </p>
          
          <p className="mb-4">
            Amorth emphasized the importance of following proper ecclesiastical procedures, which include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Episcopal Permission:</strong> Only priests with explicit permission from their bishop may perform solemn exorcisms</li>
            <li><strong>Thorough Investigation:</strong> Careful examination of the case to determine if exorcism is warranted</li>
            <li><strong>Medical and Psychological Evaluation:</strong> Collaboration with healthcare professionals to rule out mental illness</li>
            <li><strong>Proper Liturgical Forms:</strong> Use of approved prayers and rituals from the Roman Ritual</li>
            <li><strong>Ongoing Supervision:</strong> Regular reporting to the bishop and adherence to Church guidelines</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Signs of Genuine Possession</h3>
          <p className="mb-4">
            According to the Roman Ritual and Amorth's experience, certain signs may indicate genuine demonic possession:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Speaking or understanding unknown languages (xenoglossy)</li>
            <li>Supernatural strength disproportionate to age or physical condition</li>
            <li>Knowledge of hidden or distant things</li>
            <li>Violent aversion to sacred objects, prayers, or holy water</li>
            <li>Blasphemous behavior and speech, especially against God and the Church</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Pastoral Considerations and Methodology</h2>
          <p className="mb-4">
            Father Amorth's approach to exorcism was characterized by deep pastoral sensitivity and careful discernment. He stressed the importance of distinguishing between genuine cases of demonic possession and various forms of psychological, psychiatric, or spiritual distress.
          </p>
          
          <p className="mb-4">
            Key pastoral elements in Amorth's methodology included:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Comprehensive Assessment:</strong> Thorough evaluation of the person's spiritual, psychological, and physical condition</li>
            <li><strong>Medical Collaboration:</strong> Working closely with psychiatrists, psychologists, and medical doctors</li>
            <li><strong>Family Support:</strong> Providing guidance and support to family members throughout the process</li>
            <li><strong>Sacramental Preparation:</strong> Emphasis on confession, Eucharist, and regular prayer life</li>
            <li><strong>Long-term Care:</strong> Ongoing spiritual direction and pastoral accompaniment after exorcism</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">The Exorcism Ritual</h3>
          <p className="mb-4">
            The solemn exorcism follows a specific liturgical structure outlined in the Roman Ritual. Father Amorth would typically begin with prayers of protection, followed by the Litany of Saints, Gospel readings, and specific prayers of exorcism. The ritual emphasizes the power of Christ and the authority of the Church rather than the exorcist's personal abilities.
          </p>
          
          <p className="mb-4">
            Amorth noted that exorcisms could take multiple sessions, sometimes extending over months or years. He emphasized patience, perseverance, and trust in God's timing throughout the process.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contemporary Relevance and Challenges</h2>
          <p className="mb-4">
            Amorth's work has contributed significantly to the Church's contemporary understanding of exorcism ministry. His writings and teachings have influenced the training of exorcists worldwide and have helped establish more systematic approaches to this ancient ministry.
          </p>
          
          <p className="mb-4">
            The International Association of Exorcists, founded by Amorth in 1990, continues to promote proper formation and practice among Catholic exorcists globally. The association provides training, resources, and support for priests engaged in this specialized ministry.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Modern Challenges</h3>
          <p className="mb-4">
            Contemporary exorcists face several challenges that Amorth addressed throughout his ministry:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Secularization:</strong> Decreased belief in the supernatural in modern society</li>
            <li><strong>Medical Advances:</strong> Better understanding of mental health conditions</li>
            <li><strong>Media Sensationalism:</strong> Misrepresentation of exorcism in popular culture</li>
            <li><strong>Occult Practices:</strong> Increased involvement in New Age spirituality and occultism</li>
            <li><strong>Training Needs:</strong> Ensuring proper formation of new exorcists</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Psychological and Medical Considerations</h2>
          <p className="mb-4">
            Father Amorth consistently emphasized the importance of distinguishing between genuine spiritual problems and psychological or medical conditions. He worked closely with mental health professionals and encouraged thorough medical evaluation before considering exorcism.
          </p>
          
          <p className="mb-4">
            Common conditions that might be mistaken for possession include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Dissociative Identity Disorder (Multiple Personality Disorder)</li>
            <li>Schizophrenia and other psychotic disorders</li>
            <li>Temporal lobe epilepsy</li>
            <li>Tourette's syndrome</li>
            <li>Severe depression with psychotic features</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Spiritual Warfare and Prevention</h2>
          <p className="mb-4">
            Amorth taught that the best defense against demonic influence is a strong spiritual life. He emphasized the importance of regular prayer, frequent reception of the sacraments, devotion to Mary, and avoiding occasions of sin.
          </p>
          
          <p className="mb-4">
            He particularly warned against involvement in occult practices, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Séances and attempts to communicate with the dead</li>
            <li>Use of Ouija boards and similar divination tools</li>
            <li>Participation in witchcraft or Satanic rituals</li>
            <li>Consulting fortune tellers, mediums, or psychics</li>
            <li>Involvement in New Age practices that invoke spiritual entities</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Legacy and Influence</h2>
          <p className="mb-4">
            Father Amorth's influence extends far beyond his individual ministry. His books, including "An Exorcist Tells His Story" and "More Stories of an Exorcist," have been translated into multiple languages and have helped educate both clergy and laity about the reality of spiritual warfare.
          </p>
          
          <p className="mb-4">
            His work has also influenced the Church's approach to exorcist training. Many dioceses now require specialized preparation for priests appointed as exorcists, including courses in psychology, psychiatry, and pastoral care in addition to theological and liturgical formation.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
          <p className="mb-4">
            Father Gabriele Amorth's contribution to the Catholic Church's ministry of exorcism represents a significant development in both theological understanding and pastoral practice. His emphasis on proper discernment, canonical procedures, and pastoral sensitivity has helped establish a more systematic and responsible approach to this ancient ministry.
          </p>
          
          <p className="mb-4">
            The study of Amorth's methodology provides valuable insights into the intersection of faith, reason, and supernatural phenomena within the Catholic tradition, offering important guidance for contemporary pastoral practice. His work demonstrates that the ministry of exorcism, when properly conducted, serves not only to liberate individuals from spiritual oppression but also to affirm the Church's belief in the reality of the spiritual realm and the ultimate victory of Christ over evil.
          </p>
          
          <p className="mb-4">
            As the Church continues to encounter cases requiring discernment regarding possible demonic influence, Father Amorth's legacy provides a solid foundation for future exorcists to build upon, ensuring that this vital ministry continues to serve the faithful with wisdom, compassion, and unwavering faith in the power of Christ.
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