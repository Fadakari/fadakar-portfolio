<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useRoute, useRouter } from 'vue-router'

gsap.registerPlugin(ScrollToPlugin)

const { locale, setLocale } = useLocale()
const route = useRoute()
const router = useRouter()
const isLangMenuOpen = ref(false)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const props = defineProps<{
  currentSectionIndex?: number
  scrollToSection?: (id: string) => void
}>()

const labels = computed(() => locale.value === 'fa'
  ? { home: 'خانه', about: 'درباره من', skills: 'مهارت‌ها', projects: 'نمونه‌کارها', services: 'خدمات', contact: 'تماس' }
  : { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', services: 'Services', contact: 'Contact' })

const isHome = computed(() => route.path === '/')

const changeLanguage = (lang: 'fa' | 'en') => {
  setLocale(lang)
  isLangMenuOpen.value = false
  if (import.meta.client) {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }
}

const handleScroll = () => { isScrolled.value = window.scrollY > 50 }
const toggleMobileMenu = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value }

onMounted(() => {
  document.documentElement.dir = locale.value === 'fa' ? 'rtl' : 'ltr'
  document.documentElement.lang = locale.value
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  gsap.from('.main-header', { y: -100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.5 })
  gsap.from('.nav-links li, .brand-name', { opacity: 0, y: -20, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.8 })
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navigateHomeSection = (event: MouseEvent, id: string) => {
  event.preventDefault()
  isMobileMenuOpen.value = false
  isLangMenuOpen.value = false
  if (isHome.value) {
    props.scrollToSection?.(id)
  } else {
    router.push({ path: '/', hash: `#${id}` })
  }
}

const navigateServices = (event: MouseEvent) => {
  event.preventDefault()
  isMobileMenuOpen.value = false
  isLangMenuOpen.value = false
  router.push('/services')
}

const goHome = (event: MouseEvent) => navigateHomeSection(event, 'hero')
const isDeepScrolled = computed(() => isHome.value && (props.currentSectionIndex ?? 0) > 0)
</script>

<template>
  <header :class="{ 'main-header': true, scrolled: isScrolled, 'menu-open': isMobileMenuOpen, 'deep-scrolled': isDeepScrolled }">
    <div class="header-content">
      <div class="header-left">
        <a href="/" @click="goHome" class="brand-name">FADAKAR</a>
      </div>

      <nav class="header-right desktop-nav" :aria-label="locale === 'fa' ? 'منوی اصلی' : 'Main navigation'">
        <ul class="nav-links">
          <li><a @click="navigateHomeSection($event, 'hero')" href="/#hero">{{ labels.home }}</a></li>
          <li><a @click="navigateHomeSection($event, 'about')" href="/#about">{{ labels.about }}</a></li>
          <li><a @click="navigateHomeSection($event, 'skills')" href="/#skills">{{ labels.skills }}</a></li>
          <li><a @click="navigateHomeSection($event, 'projects')" href="/#projects">{{ labels.projects }}</a></li>
          <li><a @click="navigateServices" href="/services">{{ labels.services }}</a></li>
          <li><a @click="navigateHomeSection($event, 'contact')" href="/#contact">{{ labels.contact }}</a></li>
        </ul>
      </nav>

      <div class="lang-switcher-container relative">
        <button @click="isLangMenuOpen = !isLangMenuOpen" class="lang-btn" :aria-label="locale === 'fa' ? 'تغییر زبان' : 'Change language'" :aria-expanded="isLangMenuOpen">
          <span class="uppercase text-sm font-semibold">{{ locale }}</span>
        </button>
        <Transition name="fade">
          <div v-if="isLangMenuOpen" class="lang-dropdown">
            <button @click="changeLanguage('en')" :class="{'active-lang': locale === 'en'}">English</button>
            <button @click="changeLanguage('fa')" :class="{'active-lang': locale === 'fa'}">فارسی</button>
          </div>
        </Transition>
      </div>

      <button class="hamburger-button" @click="toggleMobileMenu" :aria-label="isMobileMenuOpen ? (locale === 'fa' ? 'بستن منو' : 'Close menu') : (locale === 'fa' ? 'باز کردن منو' : 'Open menu')" :aria-expanded="isMobileMenuOpen">
        <span class="line line1"></span><span class="line line2"></span><span class="line line3"></span>
      </button>
    </div>

    <div class="mobile-menu-panel">
      <nav :aria-label="locale === 'fa' ? 'منوی موبایل' : 'Mobile navigation'">
        <ul class="mobile-nav-links">
          <li><a @click="navigateHomeSection($event, 'hero')" href="/#hero">{{ labels.home }}</a></li>
          <li><a @click="navigateHomeSection($event, 'about')" href="/#about">{{ labels.about }}</a></li>
          <li><a @click="navigateHomeSection($event, 'skills')" href="/#skills">{{ labels.skills }}</a></li>
          <li><a @click="navigateHomeSection($event, 'projects')" href="/#projects">{{ labels.projects }}</a></li>
          <li><a @click="navigateServices" href="/services">{{ labels.services }}</a></li>
          <li><a @click="navigateHomeSection($event, 'contact')" href="/#contact">{{ labels.contact }}</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.main-header { position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; transition: background-color .4s ease, backdrop-filter .4s ease, padding .4s ease; color: #e0e0e0; font-family: 'Inter', sans-serif; backdrop-filter: blur(15px); }
.header-content { display:flex; justify-content:space-between; align-items:center; padding:1.5rem 4rem; transition:padding .5s cubic-bezier(.23,1,.32,1); gap:1.5rem; }
.main-header.scrolled .header-content { padding-top:1rem; padding-bottom:1rem; }
.main-header.deep-scrolled .header-content { padding-left:15rem; padding-right:15rem; }
.main-header.scrolled { background-color:rgba(10,10,20,.7); backdrop-filter:blur(8px); box-shadow:0 4px 20px rgba(0,0,0,.3); }
.brand-name { font-size:1.8rem; font-weight:700; color:#fff; text-decoration:none; letter-spacing:.05em; transition:color .3s ease; }
.brand-name:hover { color:#8a2be2; }
.nav-links { list-style:none; display:flex; gap:1.7rem; margin:0; padding:0; }
.nav-links li a { color:#e0e0e0; text-decoration:none; font-size:1rem; font-weight:500; position:relative; transition:color .3s ease; padding:.5rem 0; cursor:pointer; white-space:nowrap; }
.nav-links li a:hover { color:#fff; }
.nav-links li a::after { content:''; position:absolute; left:0; bottom:0; width:100%; height:2px; background-color:#8a2be2; transform:scaleX(0); transform-origin:bottom right; transition:transform .3s ease-out; }
.nav-links li a:hover::after { transform:scaleX(1); transform-origin:bottom left; }
.hamburger-button { display:none; width:48px; height:48px; position:relative; padding:0; margin:0; border:none; background:none; cursor:pointer; z-index:1010; flex:0 0 48px; overflow:visible; }
.hamburger-button .line { position:absolute; left:10px; width:28px; height:3px; background:#fff; border-radius:2px; transition:transform .3s ease,opacity .3s ease; transform-origin:center; }
.hamburger-button .line1 { top:14px; }.hamburger-button .line2 { top:22px; }.hamburger-button .line3 { top:30px; }
.main-header.menu-open .line1 { transform:translateY(8px) rotate(45deg); }.main-header.menu-open .line2 { opacity:0; }.main-header.menu-open .line3 { transform:translateY(-8px) rotate(-45deg); }
.mobile-menu-panel { position:fixed; top:0; left:0; width:100%; height:100vh; background:rgba(10,10,20,.95); backdrop-filter:blur(15px); display:flex; justify-content:center; align-items:center; transform:translateX(100%); transition:transform .4s cubic-bezier(.23,1,.32,1); z-index:999; }
.mobile-nav-links { list-style:none; padding:0; text-align:center; }.mobile-nav-links li { margin-bottom:2rem; }.mobile-nav-links li a { color:#fff; text-decoration:none; font-size:2rem; font-weight:600; }
.main-header.menu-open .mobile-menu-panel { transform:translateX(0); }
.lang-switcher-container { position:relative; }.lang-btn { background:transparent; border:1px solid rgba(255,255,255,.1); color:rgba(255,255,255,.8); padding:.4rem .8rem; border-radius:.5rem; cursor:pointer; transition:all .3s ease; min-width:50px; }.lang-btn:hover { background:rgba(255,255,255,.05); color:#fff; }
.lang-dropdown { position:absolute; top:120%; right:0; background:rgba(15,23,42,.9); backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,.1); border-radius:.5rem; display:flex; flex-direction:column; overflow:hidden; min-width:100px; box-shadow:0 10px 25px rgba(0,0,0,.5); z-index:1000; }.lang-dropdown button { background:transparent; border:none; color:#cbd5e1; padding:.75rem 1rem; text-align:left; cursor:pointer; font-family:inherit; transition:background .2s,color .2s; }.lang-dropdown button:hover { background:rgba(255,255,255,.05); color:#fff; }.lang-dropdown button.active-lang { color:#38bdf8; font-weight:600; background:rgba(56,189,248,.1); }.fade-enter-active,.fade-leave-active{transition:opacity .2s,transform .2s}.fade-enter-from,.fade-leave-to{opacity:0;transform:translateY(-5px)}
@media(max-width:1100px){.header-content{padding-left:2rem;padding-right:2rem}.nav-links{gap:1rem}.nav-links li a{font-size:.9rem}.main-header.deep-scrolled .header-content{padding-left:2rem;padding-right:2rem}}
@media(max-width:768px){.header-content{padding:1rem 1.5rem}.desktop-nav{display:none}.hamburger-button{display:block}}
</style>
