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
    <section class="article-hero">
      <NuxtLink to="/articles" class="back-link">← {{ isFa ? 'بازگشت به مقالات' : 'Back to articles' }}</NuxtLink>
      <div class="article-meta"><span>{{ isFa ? article.category : article.categoryEn }}</span><i /> <span>{{ article.readTime }} {{ isFa ? 'دقیقه مطالعه' : 'min read' }}</span><i /> <span>{{ article.date }}</span></div>
      <h1>{{ isFa ? article.title : article.titleEn }}</h1>
      <p>{{ isFa ? article.excerpt : article.excerptEn }}</p>
    </section>

    <section class="article-body">
      <div class="article-marker" :style="{ '--accent': article.accent }"><strong>F</strong><span>FADAKAR<br>NOTES</span></div>
      <div class="content">
        <p v-for="paragraph in (isFa ? article.content : article.contentEn)" :key="paragraph">{{ paragraph }}</p>
      </div>
    </section>

    <section class="article-end">
      <span class="eyebrow">NEXT STEP</span>
      <h2>{{ isFa ? 'برای پروژه‌تان سؤال دارید؟' : 'Have a question about your project?' }}</h2>
      <p>{{ isFa ? 'اگر پاسخ مورد نیازتان را در مقاله پیدا نکردید، مستقیماً با ما صحبت کنید.' : 'If you did not find the answer you need, talk to us directly.' }}</p>
      <a :href="telegramUrl" target="_blank" rel="noopener noreferrer">{{ isFa ? 'پیام در تلگرام ↗' : 'Message on Telegram ↗' }}</a>
    </section>
  </main>
</template>

<style scoped>
.article-page{min-height:100vh;background:#050507;color:#e8e8ed;overflow:hidden}.article-page:before{content:'';position:fixed;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:70px 70px;mask-image:linear-gradient(to bottom,black,transparent 78%)}.article-hero,.article-body,.article-end{position:relative;z-index:1;max-width:1000px;margin:auto}.article-hero{padding:10rem 2rem 6rem;border-bottom:1px solid rgba(255,255,255,.1)}.back-link{color:#777783;text-decoration:none;font-size:.75rem;display:inline-block;margin-bottom:4rem;transition:color .25s ease}.back-link:hover{color:#fff}.article-meta{display:flex;gap:.8rem;align-items:center;flex-wrap:wrap;color:#777783;font-size:.65rem;letter-spacing:.08em;text-transform:uppercase}.article-meta span:first-child{color:#8a2be2}.article-meta i{width:3px;height:3px;border-radius:50%;background:#555561}.article-hero h1{font-size:clamp(3rem,7vw,6.4rem);line-height:.94;letter-spacing:-.065em;color:#fff;margin:1.5rem 0 2rem}.article-hero>p{font-size:1.12rem;line-height:2;color:#92929f;max-width:760px}.article-body{display:grid;grid-template-columns:180px 1fr;gap:5rem;padding:6rem 2rem}.article-marker{height:180px;border:1px solid rgba(138,43,226,.35);display:flex;flex-direction:column;justify-content:space-between;padding:1.2rem;color:#777783;position:sticky;top:8rem}.article-marker strong{font-size:5rem;line-height:.8;color:#8a2be2}.article-marker span{font-size:.55rem;letter-spacing:.15em}.content{max-width:700px}.content p{font-size:1.12rem;line-height:2.15;color:#aaaab5;margin:0 0 2.2rem}.article-end{margin-bottom:8rem;padding:4rem 2rem;border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1)}.eyebrow{color:#8a2be2;font-size:.7rem;font-weight:800;letter-spacing:.18em}.article-end h2{font-size:clamp(2.2rem,5vw,4.5rem);line-height:1;letter-spacing:-.05em;color:#fff;margin:1rem 0}.article-end p{color:#858592;line-height:1.9}.article-end a{display:inline-flex;margin-top:1rem;padding:.85rem 1rem;border:1px solid rgba(255,255,255,.13);border-radius:.6rem;color:#fff;text-decoration:none;transition:.25s ease}.article-end a:hover{background:#fff;color:#08080b}@media(max-width:700px){.article-hero{padding:8rem 1.25rem 4rem}.article-hero h1{font-size:clamp(2.7rem,13vw,4.3rem)}.article-body{grid-template-columns:1fr;padding:4rem 1.25rem;gap:2.5rem}.article-marker{position:relative;top:auto;height:130px;max-width:180px}.content p{font-size:1rem;line-height:2}.article-end{margin-bottom:5rem;padding:3rem 1.25rem}}
</style>
