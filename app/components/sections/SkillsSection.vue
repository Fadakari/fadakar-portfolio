<template>
  <section id="skills" class="skills-section"><div class="section-content internal-scroll"><div class="container">
    <div><h2 class="section-title anim-stagger">{{ locale === 'fa' ? 'تکنولوژی‌ها و مهارت‌ها' : 'My Tech Stack' }}</h2><p class="section-description anim-stagger">{{ locale === 'fa' ? 'در ساخت وب‌سایت‌های مدرن، واکنش‌گرا و سریع از تکنولوژی‌های روز استفاده می‌کنم.' : 'I specialize in creating modern, responsive and high-performance web applications using modern technologies.' }}</p></div>
    <div class="skills-grid anim-stagger"><div v-for="skill in skills" :key="skill.name" class="skill-card"><img :src="skill.icon" :alt="skill.name" class="skill-icon"><span class="skill-name">{{ skill.name }}</span><p class="skill-description">{{ skill.level }}</p></div></div>
  </div></div></section>
</template>
<script setup lang="ts">
const { locale } = useLocale()
const base='https://raw.githubusercontent.com/Fadakari/Vue-js-portfolio/main/src/assets/icons/'
const skills=[
{name:'Vue.js',icon:base+'vue.svg',level:'Advanced'},{name:'TypeScript',icon:base+'typescript.svg',level:'Advanced'},{name:'JavaScript',icon:base+'javascript.svg',level:'Advanced'},{name:'Python',icon:base+'python.svg',level:'Moderate'},{name:'Vite',icon:base+'vitejs.svg',level:'Moderate'},{name:'Flask',icon:base+'Flask_dark.svg',level:'Moderate'},{name:'Tailwind',icon:base+'tailwindcss.svg',level:'Moderate'},{name:'DevOps & Git',icon:base+'GitHub_dark.svg',level:'Moderate'},{name:'MySQL',icon:base+'mysql.svg',level:'Moderate'}]
</script>
<style scoped>
.section-content{width:100%;height:100vh;box-sizing:border-box;overflow-y:auto;padding:8rem 2rem}.section-content::-webkit-scrollbar{display:none}.section-content{-ms-overflow-style:none;scrollbar-width:none}.container{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr;gap:4rem}.section-title{font-size:2.5rem;color:#fff;margin-bottom:1rem}.section-description{font-size:1.1rem;color:#e4e4e7;max-width:650px;line-height:1.8}.skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1.5rem}.skill-card{background:rgba(30,41,59,.6);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:1.5rem 1rem;display:flex;flex-direction:column;align-items:center;gap:1rem;transition:.3s}.skill-card:hover{transform:translateY(-5px);background:rgba(30,41,59,.9);border-color:rgba(125,211,252,.55)}.skill-icon{width:40px;height:40px}.skill-name{color:#fff;font-size:1.35rem;font-weight:700}.skill-description{color:#e4e4e7;border:1px solid rgba(125,211,252,.45);border-radius:2rem;padding:.25rem .6rem;font-size:.75rem}@media(max-width:768px){.container{text-align:center}.section-description{margin:auto}.skills-grid{grid-template-columns:repeat(2,1fr)}}
</style>
