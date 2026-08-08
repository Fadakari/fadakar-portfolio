<template>
  <section id="about" class="about-section">
    <div class="section-content internal-scroll"><div class="container">
      <h2 class="section-title anim-stagger">{{ locale === 'fa' ? 'درباره من' : 'About Me' }}</h2>
      <div class="content-wrapper">
        <div class="profile-image-container anim-stagger"><img :src="profileImage" alt="Fadakar" class="profile-image"></div>
        <div class="about-text-content">
          <p v-for="(text, i) in paragraphs" :key="i" class="about-me-text anim-stagger" v-html="text" />
        </div>
      </div>
    </div></div>
  </section>
</template>
<script setup lang="ts">
const { locale } = useLocale()
const profileImage = 'https://raw.githubusercontent.com/Fadakari/Vue-js-portfolio/main/src/assets/me.jpg'
const paragraphs = computed(() => locale.value === 'fa' ? [
  'من یک <strong>توسعه‌دهنده Full-Stack</strong> هستم و روی ساخت تجربه‌های دیجیتال سریع، مقیاس‌پذیر و حرفه‌ای تمرکز دارم. تخصص من در ساخت رابط‌های مدرن با Vue.js و منطق قدرتمند سمت سرور است.',
  'با تجربه در مدیریت سرور لینوکس و بهینه‌سازی دیتابیس، تلاش می‌کنم محصولاتی بسازم که علاوه بر ظاهر حرفه‌ای، پایدار و قابل اعتماد باشند.',
  'هر پروژه را یک همکاری بلندمدت می‌بینم و هدفم ارائه کدی تمیز، قابل نگهداری و تجربه کاربری باکیفیت است.'
] : [
  'I am a <strong>Full-Stack Engineer</strong> focused on building fast, scalable and polished digital experiences using modern frontend and backend technologies.',
  'With experience in Linux server management and database optimization, I build applications that are visually strong, robust and reliable.',
  'I treat every project as a long-term partnership, focusing on clean maintainable code and a superior user experience.'
])
</script>
<style scoped>
.section-content{width:100%;height:100vh;box-sizing:border-box;overflow-y:auto;padding:8rem 2rem 4rem}.section-content::-webkit-scrollbar{display:none}.section-content{-ms-overflow-style:none;scrollbar-width:none}.container{max-width:1000px;margin:0 auto;text-align:center}.section-title{font-size:2.8rem;color:#fff;margin-bottom:3rem}.content-wrapper{display:flex;align-items:center;gap:3rem;text-align:left}.profile-image-container{flex-shrink:0}.profile-image{width:200px;height:200px;border-radius:50%;object-fit:cover;border:3px solid rgba(255,255,255,.2)}.about-me-text{font-size:1.1rem;color:#f4f4f5;line-height:1.8;margin-bottom:1.5rem}.about-me-text strong{color:#fff}@media(max-width:768px){.content-wrapper{flex-direction:column;text-align:center}.section-title{margin-bottom:2rem}}
</style>
