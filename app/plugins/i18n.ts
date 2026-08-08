import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
import { useLocale } from '~/composables/useLocale'

const messages = {
  fa: {
    hero: {
      name: 'عرفان حسینی فداکار',
      title: 'مهندس نرم‌افزار Full-Stack | متخصص Vue.js و Python',
      description: 'من برنامه‌های تحت وب مقیاس‌پذیر و با کارایی بالا می‌سازم تا فرآیندهای کسب‌وکار را ساده‌تر کنم؛ ایجاد پلی میان رابط کاربری زیبا و منطق قدرتمند سمت سرور.',
      connect: 'ارتباط با من',
    },
    about: {
      title: 'درباره من',
      p1: 'من یک مهندس نرم‌افزار با تمرکز بر فرانت‌اند هستم که در معماری و ارائه برنامه‌های یکپارچه تخصص دارم. تخصص اصلی من طراحی رابط‌های کاربری مدرن، دقیق و کاملاً تعاملی با استفاده از Vue.js، Nuxt.js و TypeScript است.',
      p2: 'نقطه تمایز من تسلطم بر تکنولوژی‌های بک‌اند مانند پایتون (Flask) و مدیریت دیتابیس است. این دیدگاه همه‌جانبه به من اجازه می‌دهد تا سیستم‌های کامل و آماده‌ی تولید را به‌صورت کاملاً مستقل توسعه دهم.',
      p3: 'من عمیقاً به یادگیری مداوم و همگام بودن با جدیدترین تکنولوژی‌های وب متعهد هستم. چه در حال معماری یک سیستم پیچیده سمت سرور باشم و چه در حال ظریف‌کاری انیمیشن‌های سمت کاربر، هدف نهایی من ساخت نرم‌افزارهایی مقیاس‌پذیر، قابل نگهداری و باکیفیت است که باعث موفقیت کسب‌وکار و ارائه یک تجربه کاربری استثنایی می‌شود.'
    },
    skills: {
      title: 'ابزارهای تخصصی من',
      description: 'تخصص من خلق برنامه‌های مدرن، واکنش‌گرا و بهینه با استفاده از جدیدترین تکنولوژی‌های روز است.',
    },
    projects: {
      title: 'پروژه‌های منتخب',
      view_details: 'مشاهده جزئیات',
      live_demo: 'مشاهده سایت',
      source_code: 'کد منبع',
      steelsara_pwa_title: 'وب‌اپلیکیشن پیش‌رونده (PWA) استیل سرا',
      steelsara_pwa_desc: 'توسعه یک PWA فوق‌سریع با Vue 3 برای محاسبه مهندسی مقاطع و نمایش زنده قیمت‌ها. پیاده‌سازی استراتژی‌های پیچیده کشینگ با Service Worker، اسکرول بی‌نهایت، رابط کاربری شیشه‌ای (Glassmorphism) با شتاب‌دهنده سخت‌افزاری و سیستم نصب اختصاصی با تجربه کاربری مشابه اپلیکیشن‌های Native.',
      menu_title: 'منوی دیجیتال بدون سرور',
      menu_desc: 'توسعه یک سیستم منوی دیجیتال فوق‌سریع و بدون سرور (Serverless) برای یک آموزشگاه موسیقی با استفاده از موتور Nuxt Nitro و Supabase.',
      yazd_title: 'فروشگاه یزد موبایل',
      yazd_desc: 'بازطراحی معماری فرانت‌اند یک فروشگاه اینترنتی با تمرکز بر سئو و بهینه‌سازی عملکرد با استفاده از React و Next.js.',
      stock_title: 'پلتفرم مدیریت Stock',
      stock_desc: 'معماری و توسعه‌ی صفر تا صد یک مارکت‌پلیس B2B برای تجارت ماشین‌آلات صنعتی به عنوان تنها سازنده پروژه. طراحی یک رابط کاربری واکنش‌گرا با HTML & CSS خالص و در عین حال پیاده‌سازی APIهای قدرتمند RESTful با استفاده از Python و Flask.',
      bio_title: 'پلتفرم برندینگ شخصی',
      bio_desc: 'طراحی و توسعه یک پورتفولیوی شخصی تعاملی و مبتنی بر پرفورمنس. ساخته شده از پایه با استفاده از Nuxt 3 برای بهره‌گیری از قابلیت‌های SSR، ترکیب شده با GSAP برای انیمیشن‌های پیچیده.',
      steelsara_seo_title: 'پلتفرم B2B و بهینه‌سازی سئو استیل سرا',
      steelsara_seo_desc: 'طراحی معماری فرانت‌اند و پیاده‌سازی استراتژی جامع سئو برای یک پلتفرم بزرگ صنعتی. ادغام هوشمندانه المنتور با کدنویسی اختصاصی (PHP/JS) جهت دستیابی به بالاترین سرعت بارگذاری و رتبه‌های برتر موتورهای جستجو.',
    },
    contact: {
      title: 'ارتباط با من',
      subtitle: 'برای همکاری روی پروژه‌های جدید یا دریافت مشاوره می‌توانید با من در تماس باشید.',
      email_me: 'ایمیل',
      phone: 'تلفن',
      connect: 'شبکه‌های اجتماعی',
    },
  },
  en: {
    hero: {
      name: 'Erfan Hoseini Fadakar',
      title: 'Full-Stack Software Engineer | Vue.js & Python Expert',
      description: 'As a Full-Stack Software Engineer, I architect scalable, high-performance web applications that drive business efficiency. I bridge the gap between pixel-perfect, elegant UIs and robust backend systems.',
      connect: "Let's Connect",
    },
    about: {
      title: 'About Me',
      p1: 'I am Erfan Fadakar, a Full-Stack Web Developer specialized in the end-to-end architecture of complex digital products. My core expertise revolves around crafting modern, highly interactive user interfaces using Vue.js, Nuxt.js, and TypeScript, ensuring every pixel serves a strategic purpose.',
      p2: 'Beyond frontend aesthetics, my engineering foundation is built upon robust backend technologies, including Python, Flask, and advanced database management. This comprehensive full-stack perspective enables me, as a sole developer, to deliver secure, production-ready systems that scale seamlessly.',
      p3: 'At Fadakar Dev, my philosophy is rooted in continuous evolution and technical excellence. Whether architecting a resilient backend microservice or fine-tuning a GSAP scroll animation, my ultimate objective is to engineer high-quality software that empowers businesses and delivers an exceptional, inclusive user experience.',
    },
    skills: {
      title: 'My Tech Stack',
      description: 'I specialize in creating modern, responsive, and high-performance applications using cutting-edge technologies.',
    },
    projects: {
      title: 'Featured Projects',
      view_details: 'View details',
      live_demo: 'Live demo',
      source_code: 'Source code',
      steelsara_pwa_title: 'Steel Sara Engineering PWA',
      steelsara_pwa_desc: 'Engineered a high-performance Progressive Web App (PWA) using Vue 3 for live metal pricing and complex engineering calculations. Implemented advanced Service Worker caching strategies, infinite scrolling, hardware-accelerated Glassmorphism UI, and custom native-like installation flows.',
      menu_title: 'Serverless Digital Menu',
      menu_desc: 'Engineered an ultra-fast, serverless digital menu system tailored for a music academy utilizing the Nuxt Nitro engine and Supabase.',
      yazd_title: 'Yazd Mobile Storefront',
      yazd_desc: 'Revamped the frontend architecture of an eCommerce storefront focusing on SEO and performance optimization using React and Next.js.',
      stock_title: 'Stock Management Platform',
      stock_desc: 'Architected and developed a comprehensive B2B marketplace for trading industrial machinery entirely from scratch as the sole creator. Designed a responsive client-side interface using Vue.js while implementing robust RESTful APIs with Python and Flask.',
      bio_title: 'Personal Branding Platform',
      bio_desc: 'Designed and developed a highly interactive, performance-driven personal portfolio. Built from the ground up using Nuxt 3 to leverage SSR capabilities, combined with GSAP for complex, scroll-triggered animations.',
      steelsara_seo_title: 'Steel Sara B2B Platform & SEO Optimization',
      steelsara_seo_desc: 'Orchestrated the frontend architecture and comprehensive SEO strategy for a major industrial platform. Seamlessly integrated Elementor with custom PHP/JS coding to deliver a highly optimized, accessible, and search-engine-friendly architecture.',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'For new projects, collaboration, or consultation, feel free to get in touch.',
      email_me: 'Email',
      phone: 'Phone',
      connect: 'Social links',
    },
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'fa',
    fallbackLocale: 'en',
    messages,
  })

  nuxtApp.vueApp.use(i18n)

  const { locale } = useLocale()
  i18n.global.locale.value = locale.value

  watch(locale, (nextLocale) => {
    i18n.global.locale.value = nextLocale
  })
})
