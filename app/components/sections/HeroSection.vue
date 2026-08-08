<script setup lang="ts">
const { locale, isRtl } = useLocale()

const content = computed(() => locale.value === 'fa'
  ? {
      name: 'سید عرفان حسینی فداکار',
      title: 'طراح و توسعه‌دهنده وب',
      description: 'وب‌سایت‌های مدرن، سریع و حرفه‌ای برای کسب‌وکارها می‌سازم؛ از تجربه کاربری و رابط کاربری تا توسعه و زیرساخت فنی.',
    }
  : {
      name: 'Seyed Erfan Hoseini Fadakar',
      title: 'Web Designer & Developer',
      description: 'I build modern, fast and professional websites for businesses — from user experience and interface design to development and technical infrastructure.',
    })
</script>

<template>
  <section id="hero" class="hero-container" :dir="isRtl ? 'rtl' : 'ltr'">
    <div class="section-content internal-scroll">
      <p class="hero-eyebrow anim-stagger">FADAKAR DEV</p>
      <h1 class="hero-name anim-stagger">{{ content.name }}</h1>
      <p class="hero-title anim-stagger">{{ content.title }}</p>
      <p class="hero-description anim-stagger">{{ content.description }}</p>
    </div>
  </section>
</template>

<style scoped>
.hero-container{position:relative;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:2rem;box-sizing:border-box}.hero-eyebrow{margin:0 0 1rem;font-size:.85rem;letter-spacing:.18em;font-weight:700;color:#7c3aed}.hero-name{font-size:clamp(2.5rem,7vw,4.5rem);line-height:1.15;color:#18181b;margin:0 0 .75rem;font-weight:800}.hero-title{font-size:clamp(1.25rem,3vw,1.6rem);color:#3f3f46;margin:0 0 1.5rem;font-weight:600}.hero-description{font-size:1.05rem;line-height:2;max-width:680px;color:#71717a;margin:auto}.section-content{width:100%}
</style>
