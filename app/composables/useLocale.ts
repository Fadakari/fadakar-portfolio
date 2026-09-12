export type Locale = 'fa' | 'en'

export const useLocale = () => {
  const locale = useState<Locale>('site-locale', () => 'en')

  const setLocale = (nextLocale: Locale) => {
    locale.value = nextLocale
    if (import.meta.client) {
      localStorage.setItem('site-locale', nextLocale)
      document.documentElement.lang = nextLocale
      document.documentElement.dir = nextLocale === 'fa' ? 'rtl' : 'ltr'
    }
  }

  onMounted(() => {
    const savedLocale = localStorage.getItem('site-locale') as Locale | null
    setLocale(savedLocale === 'fa' ? 'fa' : 'en')
  })

  return {
    locale,
    setLocale,
    isRtl: computed(() => locale.value === 'fa'),
  }
}
