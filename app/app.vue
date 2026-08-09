<script setup lang="ts">
import { computed } from 'vue'

const { locale, isRtl } = useLocale()

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
        "name": "FADAKAR",
        "url": "https://fadakar.dev",
        "description": "طراحی و توسعه وب‌سایت‌های حرفه‌ای برای کسب‌وکارها"
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Erfan Fadakar",
        "alternateName": "عرفان فداکار",
        "url": "https://fadakar.dev",
        "jobTitle": "Web Developer",
        "worksFor": {
          "@type": "Organization",
          "name": "FADAKAR"
        }
      })
    }
  ]
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
