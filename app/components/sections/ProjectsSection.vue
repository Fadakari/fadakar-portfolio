<template>
  <section id="projects" class="projects-section">
    <div class="section-content internal-scroll">
      <div class="container">
        <h2 class="section-title anim-stagger">{{ locale === 'fa' ? 'نمونه‌کارهای من' : 'My Projects' }}</h2>
        <div class="projects-grid">
          <article v-for="project in projects" :key="project.id" class="project-card anim-stagger" @click="openModal(project)">
            <img :src="project.image" :alt="project.title" class="card-bg-image" loading="lazy" decoding="async" />
            <div class="card-gradient-overlay" />
            <div class="card-content-overlay">
              <h3 class="card-title">{{ project.title }}</h3>
              <div class="card-tags-minimal"><span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="minimal-tag">{{ tag }}</span></div>
              <button class="view-details-btn" type="button">
                {{ locale === 'fa' ? 'مشاهده جزئیات' : 'View details' }}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="modal">
        <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">
          <div class="modal-content">
            <button class="close-modal" type="button" @click="closeModal" aria-label="Close">&times;</button>
            <img :src="selectedProject.image" :alt="selectedProject.title" class="modal-image" />
            <div class="modal-body">
              <h3 class="modal-title">{{ selectedProject.title }}</h3>
              <div class="modal-tags"><span v-for="tag in selectedProject.tags" :key="tag" class="tag">{{ tag }}</span></div>
              <p class="modal-description">{{ selectedProject.description }}</p>
              <div class="modal-actions">
                <a v-if="selectedProject.liveUrl" :href="selectedProject.liveUrl" target="_blank" rel="noopener noreferrer" class="modal-btn primary">{{ locale === 'fa' ? 'مشاهده سایت' : 'Live demo' }}</a>
                <a v-if="selectedProject.githubUrl" :href="selectedProject.githubUrl" target="_blank" rel="noopener noreferrer" class="modal-btn secondary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onUnmounted } from 'vue'

const { locale } = useLocale()
const masterAsset = 'https://raw.githubusercontent.com/Fadakari/Vue-js-portfolio/master/src/assets/'

const projects = computed(() => locale.value === 'fa' ? [
  { id: 'p1', title: 'PWA محاسبه وزن استیل', description: 'ابزار تحت وب برای محاسبه دقیق وزن ورق‌های استیل و تجربه کاربری سریع روی موبایل.', image: `${masterAsset}pwaApp.webp`, tags: ['Vue 3', 'PWA', 'Service Worker'], liveUrl: 'https://steelsara.com/%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%87-%D8%AF%D9%82%DB%8C%D9%82-%D9%88%D8%B2%D9%86-%D8%A7%D8%B3%D8%AA%DB%8C%D9%84/' },
  { id: 'p2', title: 'منوی دیجیتال', description: 'منوی دیجیتال مدرن با Nuxt، Vue، Nitro و Supabase.', image: `${masterAsset}-2147483648_-210034.webp`, tags: ['Nuxt.js', 'Vue', 'Nitro', 'Supabase'], liveUrl: 'https://nuxt-nitro-motor-flrrimsiz-projects.vercel.app', githubUrl: 'https://github.com/Fadakari/nuxt-nitro-motor' },
  { id: 'p3', title: 'یزد موبایل', description: 'وب‌سایت فروشگاهی مدرن با Next.js و TypeScript برای فروش محصولات موبایل.', image: `${masterAsset}-2147483648_-210038.webp`, tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'], liveUrl: 'https://yazd-mobile.ir' },
  { id: 'p4', title: 'پلتفرم استوک', description: 'توسعه پلتفرم و اپلیکیشن استوک برای خرید و فروش کالا.', image: `${masterAsset}image.webp`, tags: ['Vue.js', 'Python', 'Flask', 'Kotlin'], liveUrl: 'https://stockdivar.ir', githubUrl: 'https://github.com/Fadakari/stock_app' },
  { id: 'p5', title: 'سایت Personal Branding', description: 'وب‌سایت معرفی شخصی با تمرکز بر انیمیشن، تجربه کاربری و عملکرد.', image: `${masterAsset}Screenshot%202025-12-01%20125428.webp`, tags: ['Vue.js', 'Nuxt', 'GSAP', 'Tailwind'], liveUrl: 'https://behzadheydari.ir/', githubUrl: 'https://github.com/Fadakari/bio-site' },
  { id: 'p6', title: 'SteelSara', description: 'توسعه و بهینه‌سازی وب‌سایت SteelSara با تمرکز بر SEO و تجربه کاربری.', image: `${masterAsset}steelsaraprg.webp`, tags: ['WordPress', 'SEO', 'PHP', 'JavaScript'], liveUrl: 'https://steelsara.com/' },
] : [
  { id: 'p1', title: 'Steel Weight PWA', description: 'A fast web tool for accurately calculating steel sheet weight with a mobile-first experience.', image: `${masterAsset}pwaApp.webp`, tags: ['Vue 3', 'PWA', 'Service Worker'], liveUrl: 'https://steelsara.com/%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%87-%D8%AF%D9%82%DB%8C%D9%82-%D9%88%D8%B2%D9%86-%D8%A7%D8%B3%D8%AA%DB%8C%D9%84/' },
  { id: 'p2', title: 'Digital Menu', description: 'A modern digital menu built with Nuxt, Vue, Nitro and Supabase.', image: `${masterAsset}-2147483648_-210034.webp`, tags: ['Nuxt.js', 'Vue', 'Nitro', 'Supabase'], liveUrl: 'https://nuxt-nitro-motor-flrrimsiz-projects.vercel.app', githubUrl: 'https://github.com/Fadakari/nuxt-nitro-motor' },
  { id: 'p3', title: 'Yazd Mobile', description: 'A modern e-commerce website built with Next.js and TypeScript for mobile products.', image: `${masterAsset}-2147483648_-210038.webp`, tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'], liveUrl: 'https://yazd-mobile.ir' },
  { id: 'p4', title: 'Stock Platform', description: 'A platform and application for buying and selling goods.', image: `${masterAsset}image.webp`, tags: ['Vue.js', 'Python', 'Flask', 'Kotlin'], liveUrl: 'https://stockdivar.ir', githubUrl: 'https://github.com/Fadakari/stock_app' },
  { id: 'p5', title: 'Personal Branding Site', description: 'A personal branding website focused on animation, UX and performance.', image: `${masterAsset}Screenshot%202025-12-01%20125428.webp`, tags: ['Vue.js', 'Nuxt', 'GSAP', 'Tailwind'], liveUrl: 'https://behzadheydari.ir/', githubUrl: 'https://github.com/Fadakari/bio-site' },
  { id: 'p6', title: 'SteelSara', description: 'Website development and optimization with a focus on SEO and user experience.', image: `${masterAsset}steelsaraprg.webp`, tags: ['WordPress', 'SEO', 'PHP', 'JavaScript'], liveUrl: 'https://steelsara.com/' },
])

const selectedProject = ref<(typeof projects.value)[number] | null>(null)
const openModal = (project: (typeof projects.value)[number]) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}
const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = ''
}
onUnmounted(() => { document.body.style.overflow = '' })
</script>

<style scoped>
.section-content{width:100%;padding:6rem 2rem 8rem;box-sizing:border-box}.container{max-width:1200px;margin:0 auto;text-align:center}.section-title{font-size:2.5rem;color:#fff;margin-bottom:3rem}.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:2rem}.project-card{position:relative;height:400px;border-radius:20px;overflow:hidden;cursor:pointer;border:1px solid rgba(255,255,255,.08);background:#111827;box-shadow:0 10px 30px -10px rgba(0,0,0,.5);transition:transform .4s,box-shadow .4s}.project-card:hover{transform:translateY(-10px);box-shadow:0 25px 50px -12px rgba(56,189,248,.22)}.card-bg-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .8s;z-index:1}.project-card:hover .card-bg-image{transform:scale(1.06)}.card-gradient-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,transparent 10%,rgba(9,14,25,.35) 35%,rgba(9,14,25,.96) 100%);z-index:2}.card-content-overlay{position:absolute;bottom:0;left:0;width:100%;padding:1.5rem;box-sizing:border-box;z-index:3;text-align:start}.card-title{font-size:1.4rem;color:#fff;margin:0 0 .8rem}.card-tags-minimal{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:.8rem}.minimal-tag,.tag{background:rgba(255,255,255,.12);color:#e2e8f0;padding:.25rem .65rem;border-radius:8px;font-size:.75rem;border:1px solid rgba(255,255,255,.08)}.view-details-btn{display:inline-flex;align-items:center;gap:.5rem;background:rgba(56,189,248,.15);color:#38bdf8;border:1px solid rgba(56,189,248,.3);padding:.6rem 1rem;border-radius:10px;cursor:pointer;font-weight:600}.modal-backdrop{position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,.75);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;padding:1rem}.modal-content{width:min(900px,100%);max-height:90vh;overflow:auto;background:#111827;border:1px solid rgba(255,255,255,.1);border-radius:20px;position:relative;box-shadow:0 30px 80px rgba(0,0,0,.5)}.close-modal{position:absolute;top:.8rem;right:.8rem;z-index:2;width:40px;height:40px;border:0;border-radius:50%;background:rgba(0,0,0,.55);color:#fff;font-size:1.8rem;cursor:pointer}.modal-image{display:block;width:100%;height:360px;object-fit:cover}.modal-body{padding:2rem}.modal-title{color:#fff;font-size:2rem;margin:0 0 1rem}.modal-tags{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1rem}.modal-description{color:#d4d4d8;line-height:1.9}.modal-actions{display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1.5rem}.modal-btn{padding:.7rem 1.2rem;border-radius:10px;text-decoration:none;font-weight:600}.modal-btn.primary{background:#38bdf8;color:#020617}.modal-btn.secondary{border:1px solid #475569;color:#fff}@media(max-width:700px){.projects-grid{grid-template-columns:1fr}.project-card{height:360px}.modal-image{height:240px}.modal-body{padding:1.25rem}}
</style>
