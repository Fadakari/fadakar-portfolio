import { getArticle as getFallbackArticle } from '../../../../app/data/articles'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const config = useRuntimeConfig()

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug parameter is required' })
  }

  const fallback = getFallbackArticle(slug)

  if (!config.cockpitApiKey) {
    if (!fallback) {
      throw createError({ statusCode: 404, statusMessage: 'Article not found' })
    }
    return fallback
  }

  try {
    const url = `${config.cockpitApiUrl.replace(/\/$/, '')}/content/items/articles`
    const response = await $fetch<any>(url, {
      headers: {
        'api-key': config.cockpitApiKey,
        'Accept': 'application/json'
      },
      query: {
        'filter[slug]': slug
      },
      timeout: 5000
    })

    const items = Array.isArray(response) ? response : (response?.items || response?.data || [])
    const found = items.find((item: any) => item.slug === slug) || items[0]

    if (!found) {
      if (fallback) return fallback
      throw createError({ statusCode: 404, statusMessage: 'Article not found' })
    }

    return {
      slug: String(found.slug || slug),
      title: String(found.title || ''),
      titleEn: String(found.titleEn || found.title || ''),
      category: String(found.category || 'توسعه وب'),
      categoryEn: String(found.categoryEn || 'Web Development'),
      excerpt: String(found.excerpt || ''),
      excerptEn: String(found.excerptEn || ''),
      date: String(found.date || ''),
      readTime: Number(found.readTime) || 5,
      accent: String(found.accent || '#8a2be2'),
      content: found.content || '',
      contentEn: found.contentEn || found.content || ''
    }
  } catch (error) {
    if (fallback) return fallback
    throw createError({ statusCode: 404, statusMessage: 'Article not found' })
  }
})
