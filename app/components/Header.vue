<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const { locale, setLocale, isRtl } = useLocale();
const mainScroller = ref<HTMLElement | null>(null);
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const labels = computed(() => locale.value === 'fa'
  ? { home: 'خانه', about: 'درباره من', skills: 'مهارت‌ها', projects: 'نمونه‌کارها', contact: 'تماس' }
  : { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' });

const handleScroll = () => {
  if (mainScroller.value) isScrolled.value = mainScroller.value.scrollTop > 50;
};
const toggleMobileMenu = () => { isMobileMenuOpen.value = !isMobileMenuOpen.value; };

onMounted(() => {
  mainScroller.value = document.querySelector('.home-main');
  mainScroller.value?.addEventListener('scroll', handleScroll);
  gsap.from('.main-header', { y: -100, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.5 });
  gsap.from('.nav-links li, .brand-name', { opacity: 0, y: -20, stagger: 0.1, duration: 0.8, ease: 'power3.out', delay: 0.8 });
});

onUnmounted(() => mainScroller.value?.removeEventListener('scroll', handleScroll));

const scrollToSection = (event: MouseEvent, id: string) => {
  event.preventDefault();
  window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { sectionId: id } }));
  isMobileMenuOpen.value = false;
};

const props = defineProps<{ currentSectionIndex: number }>();
const isDeepScrolled = computed(() => props.currentSectionIndex > 0);
const switchLanguage = () => setLocale(locale.value === 'fa' ? 'en' : 'fa');
</script>

<template>
  <header :dir="isRtl ? 'rtl' : 'ltr'" :class="{ 'main-header': true, 'scrolled': isScrolled, 'menu-open': isMobileMenuOpen, 'deep-scrolled': isDeepScrolled }">
    <div class="header-content">
      <div class="header-left">
        <a href="#" @click.prevent="scrollToSection($event, 'hero')" class="brand-name">FADAKAR</a>
      </div>
      <nav class="header-right desktop-nav" :aria-label="locale === 'fa' ? 'منوی اصلی' : 'Main navigation'">
        <ul class="nav-links">
          <li><a @click="scrollToSection($event, 'hero')" href="#hero">{{ labels.home }}</a></li>
          <li><a @click="scrollToSection($event, 'about')" href="#about">{{ labels.about }}</a></li>
          <li><a @click="scrollToSection($event, 'skills')" href="#skills">{{ labels.skills }}</a></li>
          <li><a @click="scrollToSection($event, 'projects')" href="#projects">{{ labels.projects }}</a></li>
          <li><a @click="scrollToSection($event, 'contact')" href="#contact">{{ labels.contact }}</a></li>
        </ul>
      </nav>
      <button class="language-button" @click="switchLanguage" :aria-label="locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'">
        {{ locale === 'fa' ? 'EN' : 'فا' }}
      </button>
      <button class="hamburger-button" @click="toggleMobileMenu" :aria-label="locale === 'fa' ? 'باز کردن منو' : 'Open menu'">
        <span class="line line1"></span><span class="line line2"></span><span class="line line3"></span>
      </button>
    </div>
    <div class="mobile-menu-panel">
      <nav><ul class="mobile-nav-links">
        <li><a @click="scrollToSection($event, 'hero')" href="#hero">{{ labels.home }}</a></li>
        <li><a @click="scrollToSection($event, 'about')" href="#about">{{ labels.about }}</a></li>
        <li><a @click="scrollToSection($event, 'skills')" href="#skills">{{ labels.skills }}</a></li>
        <li><a @click="scrollToSection($event, 'projects')" href="#projects">{{ labels.projects }}</a></li>
        <li><a @click="scrollToSection($event, 'contact')" href="#contact">{{ labels.contact }}</a></li>
        <li><button class="mobile-language-button" @click="switchLanguage">{{ locale === 'fa' ? 'English' : 'فارسی' }}</button></li>
      </ul></nav>
    </div>
  </header>
</template>

<style scoped>
.main-header{position:fixed;top:0;left:0;width:100%;z-index:1000;transition:background-color .4s ease,backdrop-filter .4s ease,padding .4s ease;color:#e2e8f0;font-family:Inter,system-ui,sans-serif;backdrop-filter:blur(15px)}.header-content{display:flex;justify-content:space-between;align-items:center;padding:1.5rem 4rem;transition:padding .5s cubic-bezier(.23,1,.32,1)}.main-header.scrolled .header-content{padding-top:1rem;padding-bottom:1rem}.main-header.deep-scrolled .header-content{padding-left:15rem;padding-right:15rem}.main-header.scrolled{background-color:rgba(255,255,255,.78);backdrop-filter:blur(8px);box-shadow:0 4px 20px rgba(24,24,27,.08)}.brand-name{font-size:1.8rem;font-weight:800;color:#e2e8f0;text-decoration:none;letter-spacing:.05em}.brand-name:hover{color:#7c3aed}.nav-links{list-style:none;display:flex;gap:2.2rem;margin:0;padding:0}.nav-links li a{color:#e2e8f0;text-decoration:none;font-size:1rem;font-weight:600;position:relative;padding:.5rem 0;cursor:pointer}.nav-links li a:hover{color:#7c3aed}.nav-links li a::after{content:'';position:absolute;left:0;bottom:0;width:100%;height:2px;background:#7c3aed;transform:scaleX(0);transform-origin:bottom right;transition:transform .3s ease}.nav-links li a:hover::after{transform:scaleX(1);transform-origin:bottom left}.language-button{margin-left:1.5rem;border:1px solid #d4d4d8;background:rgba(255,255,255,.7);color:#e2e8f0;border-radius:999px;padding:.45rem .8rem;font-weight:700;cursor:pointer}.language-button:hover{border-color:#7c3aed;color:#7c3aed}.hamburger-button{display:none;background:none;border:none;cursor:pointer;z-index:1010;padding:10px}.hamburger-button .line{display:block;width:28px;height:3px;background:#27272a;margin:5px 0;transition:transform .3s ease,opacity .3s ease}.mobile-menu-panel{position:fixed;top:0;left:0;width:100%;height:100vh;background:rgba(255,255,255,.96);backdrop-filter:blur(15px);display:flex;justify-content:center;align-items:center;transform:translateX(100%);transition:transform .4s cubic-bezier(.23,1,.32,1);z-index:999}.mobile-nav-links{list-style:none;padding:0;text-align:center}.mobile-nav-links li{margin-bottom:2rem}.mobile-nav-links li a{color:#e2e8f0;text-decoration:none;font-size:2rem;font-weight:700}.mobile-language-button{border:0;background:none;color:#7c3aed;font-size:1.1rem;font-weight:700;cursor:pointer}.main-header.menu-open .mobile-menu-panel{transform:translateX(0)}.main-header.menu-open .line1{transform:rotate(45deg) translate(6px,6px)}.main-header.menu-open .line2{opacity:0}.main-header.menu-open .line3{transform:rotate(-45deg) translate(6px,-6px)}
@media (max-width:768px){.header-content{padding:1rem 1.5rem}.main-header.deep-scrolled .header-content{padding-left:2rem;padding-right:2rem}.desktop-nav{display:none}.hamburger-button{display:block}.language-button{margin-left:auto;margin-right:.5rem}}
</style>
