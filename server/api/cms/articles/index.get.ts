import { articles as fallbackArticles } from '../../../../app/data/articles'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  if (!config.cockpitApiKey) {
    return fallbackArticles
  }

  try {
    const url = `${config.cockpitApiUrl.replace(/\/$/, '')}/content/items/articles`
    const response = await $fetch<any>(url, {
      headers: {
        'api-key': config.cockpitApiKey,
        'Accept': 'application/json'
      },
      timeout: 5000
    })

    const items = Array.isArray(response) ? response : (response?.items || response?.data || [])

    if (!items || items.length === 0) {
      return fallbackArticles
    }

    return items.map((item: any) => ({
      slug: String(item.slug || ''),
      title: String(item.title || ''),
      titleEn: String(item.titleEn || item.title || ''),
      category: String(item.category || 'توسعه وب'),
      categoryEn: String(item.categoryEn || 'Web Development'),
      excerpt: String(item.excerpt || ''),
      excerptEn: String(item.excerptEn || ''),
      date: String(item.date || ''),
      readTime: Number(item.readTime) || 5,
      accent: String(item.accent || '#8a2be2'),
      content: item.content || '',
      contentEn: item.contentEn || item.content || ''
    }))
  } catch (error) {
    // Graceful fallback to ensure site never fails
    return fallbackArticles
  }
})
