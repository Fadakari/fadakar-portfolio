import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
import { useLocale } from '~/composables/useLocale'

const messages = {
  fa: {
    hero: {
      name: 'عرفان حسینی فداکار',
      title: 'مهندس نرم‌افزار Full-Stack | متخصص Vue.js و Python',
      description: 'توسعه‌دهنده وب‌اپلیکیشن‌های مقیاس‌پذیر و سریع با تمرکز بر تجربه کاربری، عملکرد و حل مسائل واقعی کسب‌وکار.',
      connect: 'ارتباط با من',
    },
    about: {
      title: 'درباره من',
      p1: 'من عرفان فداکار هستم؛ توسعه‌دهنده نرم‌افزار با تمرکز بر طراحی و توسعه وب‌اپلیکیشن‌های مدرن.',
      p2: 'در پروژه‌ها از فناوری‌هایی مثل Vue، Nuxt، React، Next.js و Python استفاده می‌کنم و به ساخت محصولاتی سریع، قابل نگهداری و کاربردی اهمیت می‌دهم.',
      p3: 'هدفم تبدیل نیازهای کسب‌وکار به راهکارهای نرم‌افزاری حرفه‌ای و قابل توسعه است.',
    },
    skills: {
      title: 'مهارت‌ها',
      description: 'فناوری‌ها و ابزارهایی که در توسعه پروژه‌ها استفاده می‌کنم.',
    },
    projects: {
      title: 'نمونه‌کارها',
      view_details: 'مشاهده جزئیات',
      live_demo: 'مشاهده سایت',
      source_code: 'کد منبع',
      steelsara_pwa_title: 'محاسبه‌گر وزن استیل',
      steelsara_pwa_desc: 'یک ابزار وب سریع برای محاسبه دقیق وزن محصولات استیل.',
      menu_title: 'منوی دیجیتال',
      menu_desc: 'یک پروژه Nuxt با بک‌اند Nitro و Supabase برای مدیریت و نمایش منوی دیجیتال.',
      yazd_title: 'Yazd Mobile',
      yazd_desc: 'وب‌سایت فروشگاهی مدرن با React و Next.js.',
      stock_title: 'استوک',
      stock_desc: 'اپلیکیشن و سامانه مدیریت آگهی و موجودی با Vue، Flask و Kotlin.',
      bio_title: 'سایت معرفی شخصی',
      bio_desc: 'سایت معرفی و رزومه با Nuxt، GSAP و Tailwind.',
      steelsara_seo_title: 'SteelSara',
      steelsara_seo_desc: 'طراحی، توسعه و بهینه‌سازی وب‌سایت با تمرکز بر SEO.',
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
      description: 'I build scalable, high-performance web applications with a focus on user experience, performance, and real business needs.',
      connect: 'Get in touch',
    },
    about: {
      title: 'About Me',
      p1: 'I am Erfan Fadakar, a software developer focused on building modern web applications.',
      p2: 'I work with technologies such as Vue, Nuxt, React, Next.js, and Python to build fast, maintainable, and practical products.',
      p3: 'My goal is to turn business requirements into professional, scalable software solutions.',
    },
    skills: {
      title: 'Skills',
      description: 'Technologies and tools I use to build projects.',
    },
    projects: {
      title: 'Selected Projects',
      view_details: 'View details',
      live_demo: 'Live demo',
      source_code: 'Source code',
      steelsara_pwa_title: 'Steel Weight Calculator',
      steelsara_pwa_desc: 'A fast web tool for accurately calculating steel product weight.',
      menu_title: 'Digital Menu',
      menu_desc: 'A Nuxt project with a Nitro backend and Supabase for managing and displaying a digital menu.',
      yazd_title: 'Yazd Mobile',
      yazd_desc: 'A modern e-commerce website built with React and Next.js.',
      stock_title: 'Stock',
      stock_desc: 'An inventory and classified management application built with Vue, Flask, and Kotlin.',
      bio_title: 'Personal Website',
      bio_desc: 'A personal profile and portfolio website built with Nuxt, GSAP, and Tailwind.',
      steelsara_seo_title: 'SteelSara',
      steelsara_seo_desc: 'Website development and optimization with a focus on SEO.',
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
