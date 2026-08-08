<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { gsap } from 'gsap'
import Header from '~/components/Header.vue'
import AnimatedGradientBackground from '~/components/AnimatedGradientBackground.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import SkillsSection from '~/components/sections/SkillsSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

const { locale, isRtl } = useLocale()
const sections = ref<HTMLElement[]>([])
const currentSectionIndex = ref(0)
let isAnimating = false
const animationDuration = 1.2

const changeSection = (newIndex: number) => {
  if (isAnimating || newIndex < 0 || newIndex >= sections.value.length || newIndex === currentSectionIndex.value) return
  isAnimating = true
  const currentSection = sections.value[currentSectionIndex.value]
  const nextSection = sections.value[newIndex]
  const currentElements = gsap.utils.toArray(currentSection.querySelectorAll('.anim-stagger'))
  const nextElements = gsap.utils.toArray(nextSection.querySelectorAll('.anim-stagger'))
  const direction = newIndex > currentSectionIndex.value ? 1 : -1
  const tl = gsap.timeline({ onComplete: () => { gsap.set(currentSection,{autoAlpha:0}); gsap.set(currentElements,{clearProps:'all'}); currentSectionIndex.value=newIndex; isAnimating=false } })
  gsap.set(nextSection,{autoAlpha:1})
  tl.to(currentElements,{y:-direction*50,autoAlpha:0,stagger:.07,duration:animationDuration*.4,ease:'power3.in'})
  tl.from(nextElements,{y:direction*50,autoAlpha:0,stagger:.12,duration:animationDuration*.6,ease:'power3.out'},'-=.4')
}
const handleWheel=(event:WheelEvent)=>{if(isAnimating){event.preventDefault();return};const target=event.target as HTMLElement;const scrollable=target.closest('.internal-scroll');const direction=event.deltaY>0?'down':'up';if(scrollable){const {scrollTop,scrollHeight,clientHeight}=scrollable;if(direction==='down'&&scrollHeight-clientHeight-scrollTop>1.5)return;if(direction==='up'&&scrollTop>1.5)return}event.preventDefault();changeSection(currentSectionIndex.value+(direction==='down'?1:-1))}
let touchStartY=0;let touchTarget:HTMLElement|null=null
const handleTouchStart=(e:TouchEvent)=>{touchStartY=e.touches[0].clientY;touchTarget=e.touches[0].target as HTMLElement}
const handleTouchEnd=(e:TouchEvent)=>{if(isAnimating||!touchTarget)return;const delta=e.changedTouches[0].clientY-touchStartY;if(Math.abs(delta)>50)changeSection(currentSectionIndex.value+(delta<0?1:-1));touchTarget=null}
const handleNavigation=(e:Event)=>{const id=(e as CustomEvent).detail.sectionId;const i=sections.value.findIndex(s=>s.id===id);if(i!==-1)changeSection(i)}
onMounted(()=>{sections.value=gsap.utils.toArray<HTMLElement>('.home-main > section');gsap.set(sections.value,{autoAlpha:0});if(sections.value[0])gsap.set(sections.value[0],{autoAlpha:1});window.addEventListener('wheel',handleWheel,{passive:false});window.addEventListener('touchstart',handleTouchStart,{passive:false});window.addEventListener('touchend',handleTouchEnd,{passive:false});window.addEventListener('navigateToSection',handleNavigation)})
onUnmounted(()=>{window.removeEventListener('wheel',handleWheel);window.removeEventListener('touchstart',handleTouchStart);window.removeEventListener('touchend',handleTouchEnd);window.removeEventListener('navigateToSection',handleNavigation)})
const seo=computed(()=>locale.value==='fa'?{title:'فداکار — طراحی و توسعه وب',description:'طراحی و توسعه وب‌سایت‌های مدرن و حرفه‌ای برای کسب‌وکارها با تمرکز بر تجربه کاربری، عملکرد و سئو.'}:{title:'Fadakar — Web Design & Development',description:'Modern, professional websites for businesses with a focus on user experience, performance and SEO.'})
useSeoMeta({title:()=>seo.value.title,description:()=>seo.value.description})
</script>
<template><div class="home-page" :dir="isRtl?'rtl':'ltr"><AnimatedGradientBackground/><Header :current-section-index="currentSectionIndex"/><main class="home-main"><HeroSection/><AboutSection/><SkillsSection/><ProjectsSection/><ContactSection/></main></div></template>
<style>
:root{color-scheme:dark;background:#09090b;color:#fff;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;--primary-color:#a855f7;--text-color:#fff}html,body,#__nuxt{overflow:hidden;height:100%;margin:0;background:#09090b}body{color:#fff}.home-page{width:100%;height:100vh;position:relative;overflow:hidden;background:#09090b}.home-main{width:100%;height:100vh;position:relative;z-index:1;overflow:hidden}.home-main>section{width:100%;height:100vh;position:absolute;top:0;left:0;display:flex;justify-content:center;align-items:center;visibility:hidden;opacity:0}.section-content{width:100%}h1,h2,h3,p,span,a,button,label{color:inherit}
</style>
