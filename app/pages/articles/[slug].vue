<script setup lang="ts">
import { computed } from 'vue'
import { getArticle } from '~/data/articles'

const route = useRoute()
const { locale } = useLocale()
const isFa = computed(() => locale.value === 'fa')
const article = computed(() => getArticle(String(route.params.slug)))
const telegramUrl = 'https://t.me/THE_FADAKAR'

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

useSeoMeta({
  title: () => article.value ? `${isFa.value ? article.value.title : article.value.titleEn} | Fadakar` : 'Article | Fadakar',
  description: () => article.value ? (isFa.value ? article.value.excerpt : article.value.excerptEn) : ''
})
</script>

<template>
  <main v-if="article" class="article-page" :dir="isFa ? 'rtl' : 'ltr'">
    <div class="article-shell">
      <div class="back-link-wrapper">
        <NuxtLink to="/articles" class="back-link">
          <span class="arrow">←</span> {{ isFa ? 'بازگشت به مقالات' : 'Back to articles' }}
        </NuxtLink>
      </div>

      <header class="article-hero">
        <div class="article-hero-content">
          <div class="article-meta">
            <span>{{ isFa ? article.category : article.categoryEn }}</span>
            <span class="dot">•</span>
            <span>{{ article.date }}</span>
            <span class="dot">•</span>
            <span>{{ article.readTime }} {{ isFa ? 'دقیقه مطالعه' : 'min read' }}</span>
          </div>
          <h1>{{ isFa ? article.title : article.titleEn }}</h1>
          <p class="article-excerpt">{{ isFa ? article.excerpt : article.excerptEn }}</p>
        </div>

        <div class="article-cover" :style="{ '--accent': article.accent }">
          <div class="cover-art" aria-hidden="true">
            <span></span><span></span><span></span>
            <b>{{ isFa ? 'FADAKAR' : 'FADAKAR' }}</b>
          </div>
          <div class="cover-gradient"></div>
          <div class="cover-label">FADAKAR / NOTES</div>
        </div>
      </header>

      <article class="article-body">
        <aside class="article-marker" :style="{ '--accent': article.accent }">
          <strong>F</strong>
          <span>FADAKAR<br>NOTES</span>
        </aside>

        <div class="content-html">
          <p v-for="paragraph in (isFa ? article.content : article.contentEn)" :key="paragraph">{{ paragraph }}</p>
        </div>
      </article>

      <section class="article-end">
        <span class="eyebrow">NEXT STEP</span>
        <h2>{{ isFa ? 'برای پروژه‌تان سؤال دارید؟' : 'Have a question about your project?' }}</h2>
        <p>{{ isFa ? 'اگر پاسخ مورد نیازتان را در مقاله پیدا نکردید، مستقیماً با ما صحبت کنید.' : 'If you did not find the answer you need, talk to us directly.' }}</p>
        <a :href="telegramUrl" target="_blank" rel="noopener noreferrer">
          {{ isFa ? 'پیام در تلگرام ↗' : 'Message on Telegram ↗' }}
        </a>
      </section>
    </div>
  </main>
</template>

<style scoped>
.article-page{min-height:100vh;background:#050507;color:#e8e8ed;overflow:hidden;position:relative}.article-page:before{content:'';position:fixed;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:70px 70px;mask-image:linear-gradient(to bottom,black,transparent 78%)}.article-shell{position:relative;z-index:1;max-width:1180px;margin:auto;padding:0 2rem}.back-link-wrapper{padding-top:9rem}.back-link{color:#777783;text-decoration:none;font-size:.75rem;display:inline-flex;align-items:center;gap:.55rem;margin-bottom:3rem;transition:color .25s ease}.back-link:hover{color:#fff}.arrow{font-size:1rem;transition:transform .25s ease}.back-link:hover .arrow{transform:translateX(-4px)}.article-hero{display:grid;grid-template-columns:1fr .72fr;gap:4rem;align-items:end;padding:1rem 0 5rem;border-bottom:1px solid rgba(255,255,255,.1)}.article-hero-content{max-width:760px}.article-meta{display:flex;gap:.8rem;align-items:center;flex-wrap:wrap;color:#777783;font-size:.65rem;letter-spacing:.08em;text-transform:uppercase}.article-meta span:first-child{color:#8a2be2}.article-meta .dot{color:#555561}.article-hero h1{font-size:clamp(3rem,6.5vw,6.2rem);line-height:.94;letter-spacing:-.065em;color:#fff;margin:1.5rem 0 2rem}.article-excerpt{font-size:1.12rem;line-height:2;color:#92929f;max-width:740px}.article-cover{position:relative;aspect-ratio:1/1.02;border:1px solid color-mix(in srgb,var(--accent,#8a2be2) 30%,rgba(255,255,255,.12));background:linear-gradient(145deg,rgba(255,255,255,.065),rgba(255,255,255,.01));overflow:hidden;box-shadow:0 35px 90px rgba(0,0,0,.35)}.cover-art{position:absolute;inset:12%;border:1px solid color-mix(in srgb,var(--accent,#8a2be2) 45%,transparent);display:grid;place-items:center;transform:rotate(-6deg)}.cover-art:before,.cover-art:after{content:'';position:absolute;background:color-mix(in srgb,var(--accent,#8a2be2) 35%,transparent)}.cover-art:before{width:100%;height:1px}.cover-art:after{height:100%;width:1px}.cover-art span{position:absolute;width:12px;height:12px;border:1px solid var(--accent,#8a2be2)}.cover-art span:nth-child(1){top:-6px;left:-6px}.cover-art span:nth-child(2){top:-6px;right:-6px}.cover-art span:nth-child(3){bottom:-6px;right:-6px}.cover-art b{font-size:1rem;letter-spacing:.35em;color:#fff;transform:rotate(6deg)}.cover-gradient{position:absolute;inset:0;background:radial-gradient(circle at 30% 30%,color-mix(in srgb,var(--accent,#8a2be2) 25%,transparent),transparent 55%),linear-gradient(145deg,transparent 35%,rgba(5,5,7,.8))}.cover-label{position:absolute;bottom:1rem;left:1rem;font-size:.55rem;letter-spacing:.18em;color:#777783}.article-body{display:grid;grid-template-columns:180px 1fr;gap:5rem;padding:6rem 0}.article-marker{height:180px;border:1px solid color-mix(in srgb,var(--accent,#8a2be2) 35%,rgba(255,255,255,.1));display:flex;flex-direction:column;justify-content:space-between;padding:1.2rem;color:#777783;position:sticky;top:8rem}.article-marker strong{font-size:5rem;line-height:.8;color:var(--accent,#8a2be2)}.article-marker span{font-size:.55rem;letter-spacing:.15em}.content-html{max-width:720px}.content-html p{font-size:1.12rem;line-height:2.15;color:#aaaab5;margin:0 0 2.2rem}.content-html p:first-child::first-letter{font-size:3.8rem;line-height:.8;float:start;margin:.25rem .5rem 0 0;color:#8a2be2;font-weight:800}.article-end{margin:0 0 8rem;padding:4rem 0;border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1)}.eyebrow{color:#8a2be2;font-size:.7rem;font-weight:800;letter-spacing:.18em}.article-end h2{font-size:clamp(2.2rem,5vw,4.5rem);line-height:1;letter-spacing:-.05em;color:#fff;margin:1rem 0}.article-end p{color:#858592;line-height:1.9}.article-end a{display:inline-flex;margin-top:1rem;padding:.85rem 1rem;border:1px solid rgba(255,255,255,.13);border-radius:.6rem;color:#fff;text-decoration:none;transition:.25s ease}.article-end a:hover{background:#fff;color:#08080b;transform:translateY(-2px)}@media(max-width:800px){.article-shell{padding:0 1.25rem}.back-link-wrapper{padding-top:7.5rem}.article-hero{grid-template-columns:1fr;gap:2.5rem;padding-bottom:4rem}.article-hero h1{font-size:clamp(2.7rem,13vw,4.5rem)}.article-cover{max-width:560px}.article-body{grid-template-columns:1fr;padding:4rem 0;gap:2.5rem}.article-marker{position:relative;top:auto;height:130px;max-width:180px}.content-html p{font-size:1rem;line-height:2}.article-end{margin-bottom:5rem;padding:3rem 0}}
</style>
