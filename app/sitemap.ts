import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://didee-publications.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/editorial-board`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/editorial-policies`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/journal-info`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/reviewers`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/submit`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Article pages
  const articleSlugs = [
    'psychosocial-factors-mental-health',
    'philosophy-ethics-modern-society',
    'media-influence-adolescent-sexuality',
    'exorcism-catholic-church-gabriele-amorth',
    'peer-influence-parental-support',
    'soil-microbiome-crop-breeding',
    'forensic-psychology-curtis-flowers',
    'principals-perceptions',
    'the-roles-contextual',
    'youth-empowerment-pathway',
    'influence-of-school-locations',
    'enhancing-quality-assurance-in-biology-education',
    'counsellors-perception-of-peer-mentoring',
    'the-impact-exorcism-practices',
    'academic-motivation-personality-type',
    'comparative-study-of-constraints',
    'cultural-soundscape',
    'effects-of-projected-nonprojected',
    'efficacy-of-multimedia-instruction',
    'environmental-sanitation',
    'improved-drought-and-heat-tolerance',
    'influence-of-gender',
    'influence-of-library-environment',
    'integrating-emerging-technologies',
    'justice-and-rights',
    'management-of-sports-facilities',
    'principals-adoption-of-artificial-intelligence',
    'psychological-factors-affecting-students-wellbeing',
    'utilization-of-active-listening-skills',
    'utilization-of-online-learning-platforms',
    'utilization-of-sports-facilities'
  ]

  const articlePages = articleSlugs.map(slug => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date('2024-01-15'),
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...articlePages]
}