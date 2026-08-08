<script setup lang="ts">
import { onMounted, onUnmounted, watch, nextTick, ref, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '~/components/Header.vue'
import AnimatedGradientBackground from '~/components/AnimatedGradientBackground.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import FooterSection from '~/components/sections/FooterSection.vue'

gsap.registerPlugin(ScrollTrigger)

const { locale, isRtl } = useLocale()
const currentSectionIndex = ref(0)
const sectionIds = ['hero', 'about', 'skills', 'projects', 'contact']

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const refreshScrollAnimations = async () => {
  await nextTick()
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

  document.querySelectorAll<HTMLElement>('.anim-stagger').forEach((el) => {
    const trigger = el.closest('section') || el
    gsap.timeline({
      scrollTrigger: {
        trigger,
        start: 'top 85%',
        end: 'bottom 25%',
        scrub: window.innerWidth < 768 ? 0.4 : 0.8,
      },
    })
      .fromTo(el, { opacity: 0, scale: 0.8, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'none' })
      .to(el, { opacity: 1, scale: 1.03, y: -10, duration: 1.5, ease: 'none' })
      .to(el, { opacity: 0, scale: 0.8, y: -50, duration: 1, ease: 'none' })
  })

  ScrollTrigger.refresh()
}

const updateCurrentSection = () => {
  const viewportCenter = window.innerHeight / 2
  let closest = 0
  let distance = Number.POSITIVE_INFINITY

  sectionIds.forEach((id, index) => {
    const section = document.getElementById(id)
    if (!section) return
    const rect = section.getBoundingClientRect()
    const sectionCenter = rect.top + rect.height / 2
    const currentDistance = Math.abs(sectionCenter - viewportCenter)
    if (currentDistance < distance) {
      distance = currentDistance
      closest = index
    }
  })

  currentSectionIndex.value = closest
}

onMounted(async () => {
  await refreshScrollAnimations()
  window.addEventListener('scroll', updateCurrentSection, { passive: true })
  updateCurrentSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateCurrentSection)
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
})

watch(locale, async () => {
  await refreshScrollAnimations()
})

const seo = computed(() => locale.value === 'fa'
  ? { title: 'فداکار — طراحی و توسعه وب', description: 'طراحی و توسعه وب‌سایت‌های مدرن و حرفه‌ای برای کسب‌وکارها با تمرکز بر تجربه کاربری، عملکرد و سئو.' }
  : { title: 'Fadakar — Web Design & Development', description: 'Modern, professional websites for businesses with a focus on user experience, performance and SEO.' })

useSeoMeta({ title: () => seo.value.title, description: () => seo.value.description })
</script>

<template>
  <div class="home-page" :dir="isRtl ? 'rtl' : 'ltr'">
    <AnimatedGradientBackground />
    <Header :current-section-index="currentSectionIndex" :scroll-to-section="scrollToSection" />

    <main class="home-main">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <FooterSection />
  </div>
</template>

<style>
:root {
  color-scheme: dark;
  background: #09090b;
  color: #fff;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --primary-color: #a855f7;
  --text-color: #fff;
}

html,
body,
#__nuxt {
  margin: 0;
  min-height: 100%;
  background: #09090b;
}

body {
  color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
}

.home-page {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  background: #09090b;
}

.home-main {
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-main > section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  background: transparent;
}

.section-content {
  width: 100%;
  padding: 4rem 2rem;
  box-sizing: border-box;
}

h1, h2, h3, p, span, a, button, label { color: inherit; }

@media (max-width: 768px) {
  .section-content { padding: 3rem 1.5rem; }
}
</style>
