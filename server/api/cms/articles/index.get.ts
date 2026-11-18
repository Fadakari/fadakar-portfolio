import { articles as fallbackArticles } from '../../../../app/data/articles'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const apiKey = config.cockpitApiKey || process.env.COCKPIT_API_KEY || process.env.NUXT_COCKPIT_API_KEY || 'API-aa941dd9ef4b8aca5e553b883725951729be5dd5'
  
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
      timeout: 5000
    })

    const items = Array.isArray(response) ? response : (response?.items || response?.data || [])

    if (!items || items.length === 0) {
      console.log('ℹ [CMS Articles] دیتابیس کاکپیت خالی بود؛ اطلاعات محلی بازگردانده شد.')
      return fallbackArticles
    }

    console.log(`✓ [CMS Articles] تعداد ${items.length} مقاله با موفقیت از هاست (Cockpit) دریافت شد.`)
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
  } catch (error: any) {
    console.log(`ℹ [CMS Articles] اتصال به هاست برقرار نشد (${error?.message || 'خطا'})؛ اطلاعات محلی (Fallback) استفاده شد.`)
    return fallbackArticles
  }
})
