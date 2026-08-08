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

  document.querySelectorAll<HTMLElement>('section').forEach((section) => {
    const elements = Array.from(section.querySelectorAll<HTMLElement>('.anim-stagger'))
    if (!elements.length) return

    gsap.set(elements, { opacity: 0, scale: 0.8, y: 40 })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        end: 'bottom 25%',
        scrub: window.innerWidth < 768 ? 0.4 : 0.8,
      },
    })

    timeline
      .to(elements, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'none',
        stagger: window.innerWidth < 768 ? 0.12 : 0.18,
      })
      .to(elements, {
        opacity: 1,
        scale: 1.03,
        y: -10,
        duration: 1.5,
        ease: 'none',
      })
      .to(elements, {
        opacity: 0,
        scale: 0.8,
        y: -50,
        duration: 1,
        ease: 'none',
        stagger: window.innerWidth < 768 ? 0.08 : 0.12,
      })
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
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100..900&display=swap');

:root {
  --bg-color: #000000;
  --text-color: #e2e8f0;
  --primary-color: #38bdf8;
  --card-bg-color: #1e293b;
}

html[dir="rtl"],
html[dir="rtl"] body,
html[dir="rtl"] * {
  font-family: 'Vazirmatn', system-ui, -apple-system, sans-serif !important;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: 'Vazirmatn', sans-serif;
  line-height: 1.6;
}

html {
  scroll-behavior: smooth;
}

@media print {
  html, body {
    background-color: #000000 !important;
    color: #e2e8f0 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    height: auto !important;
    overflow: visible !important;
  }

  main > section {
    display: block !important;
    height: auto !important;
    min-height: auto !important;
    position: relative !important;
    page-break-before: always !important;
    break-before: page !important;
    padding: 2rem 0 !important;
    margin: 0 !important;
    overflow: visible !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    background-color: #000000 !important;
  }

  main > section:first-of-type {
    page-break-before: auto !important;
    break-before: auto !important;
  }

  *, .anim-stagger, .project-card, .card-image-container, .card-image, .skill-card {
    opacity: 1 !important;
    transform: none !important;
    visibility: visible !important;
    transition: none !important;
    animation: none !important;
  }

  .card-bg-image {
    position: static !important;
    display: block !important;
    height: 200px !important;
    width: 100% !important;
    object-fit: cover !important;
  }

  .card-gradient-overlay, .view-details-btn {
    display: none !important;
  }

  .card-content-overlay {
    position: static !important;
    display: block !important;
    padding: 1rem 0 !important;
  }

  .main-header,
  .mobile-menu-panel,
  .gradient-bg,
  .contact-scroll-indicator,
  .pdf-btn,
  .image-overlay {
    display: none !important;
  }

  h1, h2, h3, p, span, div, a {
    color: #e2e8f0 !important;
  }

  .hero-name, .section-title {
    color: var(--primary-color) !important;
  }

  .tag {
    background-color: rgba(56, 189, 248, 0.15) !important;
    color: #38bdf8 !important;
    border: 1px solid rgba(56, 189, 248, 0.3) !important;
  }

  #app-preloader {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
    z-index: -1 !important;
  }
}

.project-card, .skill-card {
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: transform, opacity;
}

section {
  contain: paint layout;
}
</style>
