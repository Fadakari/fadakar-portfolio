import { getArticle as getFallbackArticle } from '../../../../app/data/articles'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const config = useRuntimeConfig()
  const apiKey = config.cockpitApiKey || process.env.COCKPIT_API_KEY || process.env.NUXT_COCKPIT_API_KEY || 'API-aa941dd9ef4b8aca5e553b883725951729be5dd5'

  if (!slug) {
    throw createError({ statusCode: 400, statusMessage: 'Slug parameter is required' })
  }

  const fallback = getFallbackArticle(slug)

  try {
    const url = `${config.cockpitApiUrl.replace(/\/$/, '')}/content/items/articles`
    const headers: Record<string, string> = {
      'Accept': 'application/json'
    }
    if (apiKey) {
      headers['api-key'] = apiKey
      headers['Authorization'] = `Bearer ${apiKey}`
    }

    const response = await $fetch<any>(url, {
      headers,
      query: {
        'filter[slug]': slug
      },
      timeout: 5000
    })

    const items = Array.isArray(response) ? response : (response?.items || response?.data || [])
    const found = items.find((item: any) => item.slug === slug) || items[0]

    if (!found) {
      if (fallback) {
        console.log(`ℹ [CMS Article ${slug}] مقاله در هاست پیدا نشد؛ اطلاعات محلی بازگردانده شد.`)
        return fallback
      }
      throw createError({ statusCode: 404, statusMessage: 'Article not found' })
    }

    console.log(`✓ [CMS Article ${slug}] مقاله با موفقیت از هاست (Cockpit) دریافت شد.`)
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
  } catch (error: any) {
    console.log(`ℹ [CMS Article ${slug}] اتصال به هاست برقرار نشد (${error?.message || 'خطا'})؛ اطلاعات محلی استفاده شد.`)
    if (fallback) return fallback
    throw createError({ statusCode: 404, statusMessage: 'Article not found' })
  }
})
