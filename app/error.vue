<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const { locale, isRtl } = useLocale()

const handleError = () => clearError({ redirect: '/' })

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value),
    dir: computed(() => isRtl.value ? 'rtl' : 'ltr')
  }
})

useSeoMeta({
  title: 'Page Not Found | FADAKAR',
  robots: 'noindex, follow'
})
</script>

<template>
  <div class="error-page" :dir="isRtl ? 'rtl' : 'ltr'">
    <div class="error-content">
      <span class="error-code">{{ error?.statusCode || 404 }}</span>
      <h1>{{ locale === 'fa' ? 'مسیر را اشتباه آمدید' : 'Page Not Found' }}</h1>
      <p>
        {{ locale === 'fa' ? 'صفحه‌ای که به دنبال آن بودید پیدا نشد. به صفحه اصلی برگردید و مسیر خود را پیدا کنید.' : 'The page you are looking for does not exist or has been moved.' }}
      </p>
      
      <button class="back-button" @click="handleError">
        {{ locale === 'fa' ? 'بازگشت به خانه ↗' : 'Back to Home ↗' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #050507;
  color: #e8e8ed;
  text-align: center;
  padding: 2rem;
  font-family: 'Vazirmatn', sans-serif;
  position: relative;
  overflow: hidden;
}

.error-page::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle at center, black, transparent 80%);
  pointer-events: none;
}

.error-content {
  position: relative;
  z-index: 1;
  max-width: 500px;
}

.error-code {
  display: block;
  font-size: clamp(4rem, 15vw, 8rem);
  font-weight: 800;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(138, 43, 226, 0.5);
  margin-bottom: 1rem;
  letter-spacing: -0.05em;
}

h1 {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  color: #fff;
  margin-bottom: 1rem;
}

p {
  color: #858592;
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.back-button {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.9rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  cursor: pointer;
  transition: 0.3s ease;
  font-family: inherit;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}
</style>
