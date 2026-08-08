<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

const { locale, setLocale } = useLocale()
const isLangMenuOpen = ref(false)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const props = defineProps<{
  currentSectionIndex?: number
  scrollToSection?: (id: string) => void
}>()

const labels = computed(() => locale.value === 'fa'
  ? { home: 'خانه', about: 'درباره من', skills: 'مهارت‌ها', projects: 'نمونه‌کارها', contact: 'تماس' }
  : { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' })

const changeLanguage = (lang: 'fa' | 'en') => {
  setLocale(lang)
  isLangMenuOpen.value = false
  if (import.meta.client) {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  document.documentElement.dir = locale.value === 'fa' ? 'rtl' : 'ltr'
  document.documentElement.lang = locale.value
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  gsap.from('.main-header', { y: -100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.5 })
  gsap.from('.nav-links li, .brand-name', { opacity: 0, y: -20, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.8 })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToSectionHandler = (event: MouseEvent, id: string) => {
  event.preventDefault()
  props.scrollToSection?.(id)
  isMobileMenuOpen.value = false
  isLangMenuOpen.value = false
}

const isDeepScrolled = computed(() => (props.currentSectionIndex ?? 0) > 0)
</script>

<template>
  <header :class="{
    'main-header': true,
    'scrolled': isScrolled,
    'menu-open': isMobileMenuOpen,
    'deep-scrolled': isDeepScrolled
  }">
    <div class="header-content">
      <div class="header-left">
        <a href="#" @click="scrollToSectionHandler($event, 'hero')" class="brand-name">FADAKAR</a>
      </div>

      <nav class="header-right desktop-nav" :aria-label="locale === 'fa' ? 'منوی اصلی' : 'Main navigation'">
        <ul class="nav-links">
          <li><a @click="scrollToSectionHandler($event, 'hero')" href="#hero">{{ labels.home }}</a></li>
          <li><a @click="scrollToSectionHandler($event, 'about')" href="#about">{{ labels.about }}</a></li>
          <li><a @click="scrollToSectionHandler($event, 'skills')" href="#skills">{{ labels.skills }}</a></li>
          <li><a @click="scrollToSectionHandler($event, 'projects')" href="#projects">{{ labels.projects }}</a></li>
          <li><a @click="scrollToSectionHandler($event, 'contact')" href="#contact">{{ labels.contact }}</a></li>
        </ul>
      </nav>

      <div class="lang-switcher-container relative">
        <button
          @click="isLangMenuOpen = !isLangMenuOpen"
          class="lang-btn"
          :aria-label="locale === 'fa' ? 'تغییر زبان' : 'Change language'"
          :aria-expanded="isLangMenuOpen"
        >
          <span class="uppercase text-sm font-semibold">{{ locale }}</span>
        </button>
        <Transition name="fade">
          <div v-if="isLangMenuOpen" class="lang-dropdown">
            <button @click="changeLanguage('en')" :class="{'active-lang': locale === 'en'}">English</button>
            <button @click="changeLanguage('fa')" :class="{'active-lang': locale === 'fa'}">فارسی</button>
          </div>
        </Transition>
      </div>

      <button
        class="hamburger-button"
        @click="toggleMobileMenu"
        :aria-label="locale === 'fa' ? 'باز کردن منو' : 'Open menu'"
        :aria-expanded="isMobileMenuOpen"
      >
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </button>
    </div>

    <div class="mobile-menu-panel">
      <nav :aria-label="locale === 'fa' ? 'منوی موبایل' : 'Mobile navigation'">
        <ul class="mobile-nav-links">
          <li><a @click="scrollToSectionHandler($event, 'hero')" href="#hero">{{ labels.home }}</a></li>
          <li><a @click="scrollToSectionHandler($event, 'about')" href="#about">{{ labels.about }}</a></li>
          <li><a @click="scrollToSectionHandler($event, 'skills')" href="#skills">{{ labels.skills }}</a></li>
          <li><a @click="scrollToSectionHandler($event, 'projects')" href="#projects">{{ labels.projects }}</a></li>
          <li><a @click="scrollToSectionHandler($event, 'contact')" href="#contact">{{ labels.contact }}</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.4s ease, backdrop-filter 0.4s ease, padding 0.4s ease;
  color: #e0e0e0;
  font-family: 'Inter', sans-serif;
  backdrop-filter: blur(15px);
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  transition: padding 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
.main-header.scrolled .header-content {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.main-header.deep-scrolled .header-content {
  padding-left: 15rem;
  padding-right: 15rem;
}
.main-header.scrolled {
  background-color: rgba(10, 10, 20, 0.7);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
.brand-name {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
}
.brand-name:hover { color: #8a2be2; }
.nav-links {
  list-style: none;
  display: flex;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}
.nav-links li a {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  cursor: pointer;
}
.nav-links li a:hover { color: #fff; }
.nav-links li a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: #8a2be2;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}
.nav-links li a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.hamburger-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1010;
  padding: 10px;
}
.hamburger-button .line {
  display: block;
  width: 28px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.mobile-menu-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(10, 10, 20, 0.95);
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 999;
}
.mobile-nav-links {
  list-style: none;
  padding: 0;
  text-align: center;
}
.mobile-nav-links li { margin-bottom: 2rem; }
.mobile-nav-links li a {
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
}
.main-header.menu-open .mobile-menu-panel { transform: translateX(0); }
.main-header.menu-open .line1 { transform: rotate(45deg) translate(6px, 6px); }
.main-header.menu-open .line2 { opacity: 0; }
.main-header.menu-open .line3 { transform: rotate(-45deg) translate(-6px, 6px); }

.lang-switcher-container { position: relative; }
.lang-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 50px;
}
.lang-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}
.lang-dropdown {
  position: absolute;
  top: 120%;
  right: 0;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 100px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
.lang-dropdown button {
  background: transparent;
  border: none;
  color: #cbd5e1;
  padding: 0.75rem 1rem;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s, color 0.2s;
}
:global(html[dir='rtl']) .lang-dropdown button { text-align: right; }
.lang-dropdown button:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}
.lang-dropdown button.active-lang {
  color: #38bdf8;
  font-weight: 600;
  background: rgba(56, 189, 248, 0.1);
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s, transform 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-5px); }

@media (max-width: 768px) {
  .header-content { padding: 1rem 1.5rem; }
  .main-header.deep-scrolled .header-content { padding-left: 2rem; padding-right: 2rem; }
  .desktop-nav { display: none; }
  .hamburger-button { display: block; }
}
</style>
