<script setup lang="ts">
import { computed } from 'vue'

const { locale, isRtl } = useLocale()

useSeoMeta({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | عرفان فداکار (Erfan Fadakar)` : 'عرفان فداکار | طراحی سایت و توسعه وب (Erfan Fadakar)';
  },
  author: 'Erfan Fadakar (عرفان فداکار)',
  keywords: 'عرفان فداکار, Erfan Fadakar, طراحی سایت فداکار, توسعه وب فداکار, Fadakar Web Design, Fadakar Web Development, طراحی سایت اختصاصی, ساخت پلتفرم و سایت'
})

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
    dir: computed(() => isRtl.value ? 'rtl' : 'ltr')
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "FADAKAR | Erfan Fadakar",
        "alternateName": ["عرفان فداکار", "طراحی سایت فداکار", "Fadakar Web Design", "توسعه وب فداکار"],
        "url": "https://fadakar-dev.ir",
        "description": "طراحی و توسعه وب‌سایت‌های حرفه‌ای، فروشگاه اینترنتی و پلتفرم‌های اختصاصی توسط عرفان فداکار (Erfan Fadakar)"
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Erfan Fadakar",
        "alternateName": ["عرفان فداکار", "Erfan Fadakar", "طراحی سایت فداکار"],
        "url": "https://fadakar-dev.ir",
        "sameAs": [
          "https://www.linkedin.com/in/erfan-fadakar-207a03320/"
        ],
        "jobTitle": "Senior Web Developer & Designer",
        "description": "طراح و توسعه‌دهنده سیستم‌های وب اختصاصی | Web Developer & Designer",
        "knowsAbout": ["Web Development", "Web Design", "طراحی سایت", "توسعه وب", "SEO", "سئو", "برنامه‌نویسی وب"],
        "worksFor": {
          "@type": "Organization",
          "name": "FADAKAR Web Development"
        }
      })
    }
  ]
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <LoadingScreen />
    <NuxtPage />
  </div>
</template>
