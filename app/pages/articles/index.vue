<script setup lang="ts">
import { computed, ref } from 'vue'
import { articles } from '~/data/articles'

const { locale } = useLocale()
const currentSectionIndex = ref(0)
const query = ref('')
const activeCategory = ref('all')

const isFa = computed(() => locale.value === 'fa')

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
const categories = computed(() => [
  { id: 'all', fa: 'همه', en: 'All' },
  ...Array.from(new Map(articles.map(article => [article.category, article.categoryEn])).entries())
    .map(([fa, en]) => ({ id: fa, fa, en }))
])

const filteredArticles = computed(() => {
  const q = query.value.trim().toLocaleLowerCase()
  return articles.filter(article => {
    const matchesCategory = activeCategory.value === 'all' || article.category === activeCategory.value
    if (!q) return matchesCategory
    const searchable = [article.title, article.titleEn, article.excerpt, article.excerptEn, article.category, article.categoryEn].join(' ').toLocaleLowerCase()
    return matchesCategory && searchable.includes(q)
  })
})

const featured = computed(() => articles[0])
const telegramUrl = 'https://t.me/THE_FADAKAR'

useSeoMeta({
  title: () => isFa.value ? 'مقالات طراحی سایت، توسعه وب و SEO | FADAKAR' : 'Web Design & SEO Articles | FADAKAR',
  description: () => isFa.value
    ? 'مقالات تخصصی درباره طراحی سایت، معماری وب، سئو، UI/UX، عملکرد و تصمیم‌های فنی کسب‌وکارها.'
    : 'Specialized articles about web design, architecture, SEO, UI/UX, performance, and technical decisions for businesses.'
})

const schemaItemList = computed(() => {
  return articles.map((a, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "url": `https://fadakar.dev/articles/${a.slug}`
  }))
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": schemaItemList.value
      }))
    }
  ]
})
</script>

<template>
  <Header :current-section-index="currentSectionIndex" :scroll-to-section="scrollToSection" />
  <main class="articles-page" :dir="isFa ? 'rtl' : 'ltr'">
    <section class="articles-hero">
      <div class="hero-noise" />
      <div class="hero-copy">
        <span class="eyebrow">{{ isFa ? 'KNOWLEDGE / 01' : 'KNOWLEDGE / 01' }}</span>
        <h1>{{ isFa ? 'چیزهایی که قبل از ساختن یک سایت باید بدانید' : 'Things you need to know before building a website' }}</h1>
        <p>
          {{ isFa
            ? 'از طراحی و تجربه کاربری تا توسعه، سئو، معماری و سرعت؛ اینجا درباره چیزهایی می‌نویسم که در پروژه‌های واقعی مهم‌اند و معمولاً قبل از شروع کار کمتر درباره‌شان صحبت می‌شود.'
            : 'From design and user experience to development, SEO, architecture, and speed; here I write about things that are important in real projects and are usually less talked about before starting work.' }}
        </p>
        <div class="hero-meta">
          <span><i /> {{ isFa ? 'تجربه‌های واقعی' : 'Real experiences' }}</span>
          <span><i /> {{ isFa ? 'از تجربه‌های واقعی پروژه‌ها' : 'From real project experiences' }}</span>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="orbit orbit-one" />
        <div class="orbit orbit-two" />
        <div class="knowledge-card"><b>FADAKAR</b><span>THINK → DESIGN → BUILD</span><strong>01</strong></div>
      </div>
    </section>

    <section class="featured-section">
      <div class="section-label">{{ isFa ? 'پیشنهاد سردبیر' : 'EDITOR\'S PICK' }}</div>
      <NuxtLink :to="`/articles/${featured.slug}`" class="featured-card" :style="{ '--accent': featured.accent }">
        <div class="featured-index">01</div>
        <div class="featured-content">
          <span>{{ isFa ? featured.category : featured.categoryEn }}</span>
          <h2>{{ isFa ? featured.title : featured.titleEn }}</h2>
          <p>{{ isFa ? featured.excerpt : featured.excerptEn }}</p>
          <div class="read-link">{{ isFa ? 'خواندن مقاله' : 'Read article' }} <b>↗</b></div>
        </div>
        <div class="featured-visual"><span>ARCHITECTURE</span><strong>FIT<br>FIRST</strong></div>
      </NuxtLink>
    </section>

    <section class="library-section">
      <div class="library-heading">
        <div>
          <span class="eyebrow">LIBRARY / 02</span>
          <h2>{{ isFa ? 'مقالات و نوشته‌ها' : 'Articles and writings' }}</h2>
        </div>
        <p>{{ isFa ? 'بعضی نوشته‌ها از دل یک پروژه واقعی آمده‌اند، بعضی از سؤال‌هایی که بارها با آن‌ها روبه‌رو شده‌ام. هدف این است که هر مقاله چیزی به شما اضافه کند که بتونید واقعاً از اون استفاده کنید.' : "Some of the writing comes from a real project, some from questions I've come across many times. The goal is for each article to give you something you can actually use." }}</p>
      </div>

      <div class="controls">
        <label class="search-box">
          <span>⌕</span>
          <input v-model="query" :placeholder="isFa ? 'جستجو در مقالات...' : 'Search articles...'" type="search">
        </label>
        <div class="categories">
          <button v-for="category in categories" :key="category.id" :class="{ active: activeCategory === category.id }" @click="activeCategory = category.id">
            {{ isFa ? category.fa : category.en }}
          </button>
        </div>
      </div>

      <div v-if="filteredArticles.length" class="article-grid">
        <article v-for="(article, index) in filteredArticles" :key="article.slug" class="article-card" :style="{ '--accent': article.accent, '--delay': `${index * 55}ms` }">
          <NuxtLink :to="`/articles/${article.slug}`" class="article-link">
            <div class="article-top"><span>{{ String(index + 1).padStart(2, '0') }}</span><span>{{ isFa ? article.category : article.categoryEn }}</span></div>
            <div class="article-mark"><i /><i /><i /></div>
            <h3>{{ isFa ? article.title : article.titleEn }}</h3>
            <p>{{ isFa ? article.excerpt : article.excerptEn }}</p>
            <div class="article-footer"><span>{{ article.readTime }} {{ isFa ? 'دقیقه مطالعه' : 'min read' }}</span><b>↗</b></div>
          </NuxtLink>
        </article>
      </div>

      <div v-else class="empty-state">
        <span>404 / NOT FOUND</span>
        <h3>{{ isFa ? 'مقاله‌ای با این مشخصات پیدا نشد.' : 'No article matched your search.' }}</h3>
        <p>{{ isFa ? 'عبارت دیگری امتحان کنید یا با ما در تلگرام صحبت کنید.' : 'Try another search or talk to us on Telegram.' }}</p>
        <a :href="telegramUrl" target="_blank" rel="noopener noreferrer">{{ isFa ? 'مشاوره در تلگرام ↗' : 'Talk on Telegram ↗' }}</a>
      </div>
    </section>

    <section class="article-cta">
      <div>
        <span class="eyebrow">LET'S BUILD / 03</span>
        <h2>{{ isFa ? 'هنوز سؤال دارید؟ با من در میان بگذارید.' : 'Still have questions? Let me know.' }}</h2>
        <p>{{ isFa ? 'هر پروژه‌ای داستان خودش را دارد. اگر برای کسب‌وکارتان سؤال یا ایده‌ای دارید که جوابش را اینجا پیدا نکردید، پیام بدهید؛ با هم بررسی می‌کنیم بهترین مسیر چیست.' : "Every project has its own story. If you have a question or idea for your business that you can't find the answer to here, send us a message; together we'll explore the best path." }}</p>
      </div>
      <a :href="telegramUrl" target="_blank" rel="noopener noreferrer">{{ isFa ? 'صحبت کنیم' : "Let's talk" }} <span>↗</span></a>
    </section>
  </main>
</template>

<style scoped>
.articles-page{min-height:100vh;background:#050507;color:#e8e8ed;overflow:hidden;position:relative}.articles-page:before{content:'';position:fixed;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px);background-size:70px 70px;mask-image:linear-gradient(to bottom,black,transparent 78%);z-index:0}.articles-page>*{position:relative;z-index:1}.articles-hero{min-height:88svh;max-width:1440px;margin:auto;padding:10rem 6vw 6rem;display:grid;grid-template-columns:1.1fr .9fr;gap:5rem;align-items:center;position:relative}.hero-noise{position:absolute;inset:10% 0 0;background:radial-gradient(circle at 70% 40%,rgba(138,43,226,.15),transparent 38%),radial-gradient(circle at 80% 75%,rgba(56,189,248,.08),transparent 30%);pointer-events:none}.hero-copy{max-width:800px}.eyebrow{color:#8a2be2;font-size:.7rem;font-weight:800;letter-spacing:.18em;text-transform:uppercase;display:inline-block;margin-bottom:1.4rem}.hero-copy h1{font-size:clamp(3.2rem,7vw,4rem);line-height:.92;letter-spacing:-.065em;color:#fff;margin:0 0 2rem;max-width:850px}.hero-copy p{max-width:690px;color:#92929f;font-size:1.08rem;line-height:1.95}.hero-meta{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:2rem;color:#777783;font-size:.72rem}.hero-meta span{display:flex;align-items:center;gap:.45rem}.hero-meta i{width:5px;height:5px;border-radius:50%;background:#8a2be2}.hero-visual{min-height:500px;display:grid;place-items:center;position:relative}.orbit{position:absolute;border:1px solid rgba(255,255,255,.09);border-radius:50%;transform:rotate(-18deg)}.orbit-one{width:390px;height:390px}.orbit-two{width:280px;height:430px;border-color:rgba(138,43,226,.3);animation:orbit 13s linear infinite}.knowledge-card{width:min(100%,380px);aspect-ratio:1/1.12;border:1px solid rgba(255,255,255,.13);background:linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.012));backdrop-filter:blur(15px);box-shadow:0 40px 100px rgba(0,0,0,.45);padding:2rem;display:flex;flex-direction:column;justify-content:space-between;transform:rotate(-5deg)}.knowledge-card b{font-size:.65rem;letter-spacing:.2em;color:#777783}.knowledge-card span{font-size:.58rem;letter-spacing:.16em;color:#666673}.knowledge-card strong{font-size:6rem;line-height:1;color:#8a2be2;align-self:flex-end}@keyframes orbit{to{transform:rotate(342deg)}}.featured-section,.library-section{max-width:1280px;margin:auto;padding:5rem 6vw}.section-label{font-size:.65rem;letter-spacing:.2em;color:#656570;margin-bottom:1.5rem}.featured-card{--accent:#8a2be2;display:grid;grid-template-columns:70px 1fr .55fr;gap:2rem;min-height:390px;padding:3rem;border:1px solid rgba(255,255,255,.11);background:linear-gradient(135deg,rgba(255,255,255,.055),rgba(255,255,255,.01));color:inherit;text-decoration:none;overflow:hidden;transition:transform .35s ease,border-color .35s ease,box-shadow .35s ease}.featured-card:hover{transform:translateY(-7px);border-color:color-mix(in srgb,var(--accent) 55%,transparent);box-shadow:0 30px 90px rgba(0,0,0,.35)}.featured-index{color:#555561;font-size:.75rem}.featured-content>span{color:var(--accent);font-size:.7rem;letter-spacing:.12em;font-weight:800}.featured-content h2{font-size:clamp(2rem,4vw,3rem);line-height:1;letter-spacing:-.05em;color:#fff;margin:1rem 0 1.5rem}.featured-content p{color:#898994;line-height:1.9;max-width:680px}.read-link{display:inline-flex;gap:.6rem;margin-top:2rem;color:#fff;font-size:.8rem;font-weight:700}.read-link b{color:var(--accent)}.featured-visual{border-left:1px solid rgba(255,255,255,.1);display:flex;flex-direction:column;justify-content:center;padding-left:3rem;color:#666673;letter-spacing:.18em;font-size:.55rem}.featured-visual strong{font-size:4.5rem;line-height:.85;color:#fff;letter-spacing:-.06em;margin-top:1.2rem}.library-heading{display:grid;grid-template-columns:1fr 1fr;gap:5rem;border-top:1px solid rgba(255,255,255,.1);padding-top:2rem}.library-heading h2{font-size:clamp(2.5rem,5vw,5rem);letter-spacing:-.055em;line-height:.95;color:#fff;margin:0}.library-heading p{color:#858592;line-height:1.9;margin:.5rem 0 0}.controls{margin:3rem 0;display:flex;gap:1rem;justify-content:space-between;align-items:center;flex-wrap:wrap}.search-box{width:min(100%,360px);height:48px;display:flex;align-items:center;gap:.7rem;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.025);padding:0 1rem;border-radius:.65rem}.search-box span{font-size:1.4rem;color:#777}.search-box input{border:0;outline:0;background:transparent;color:#fff;width:100%;font:inherit}.search-box input::placeholder{color:#5f5f6b}.categories{display:flex;gap:.45rem;flex-wrap:wrap}.categories button{border:1px solid rgba(255,255,255,.1);background:transparent;color:#777783;padding:.55rem .75rem;border-radius:999px;font-size:.7rem;cursor:pointer;transition:.25s ease}.categories button:hover,.categories button.active{background:rgba(138,43,226,.12);border-color:rgba(138,43,226,.45);color:#fff}.article-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.1)}.article-card{--accent:#8a2be2;background:#08080b;min-height:370px;transition:transform .3s ease,background .3s ease;animation:cardIn .55s both;animation-delay:var(--delay)}.article-card:hover{background:#0e0e13;transform:translateY(-5px);z-index:2}.article-link{height:100%;padding:2rem;display:flex;flex-direction:column;color:inherit;text-decoration:none}.article-top{display:flex;justify-content:space-between;color:#555561;font-size:.65rem;letter-spacing:.1em}.article-top span:last-child{color:var(--accent)}.article-mark{height:60px;width:60px;margin:2.2rem 0 1.7rem;display:flex;align-items:center;justify-content:center;gap:4px;border:1px solid color-mix(in srgb,var(--accent) 55%,transparent);transform:rotate(45deg);transition:transform .35s ease,box-shadow .35s ease}.article-card:hover .article-mark{transform:rotate(135deg) scale(1.08);box-shadow:0 0 35px color-mix(in srgb,var(--accent) 22%,transparent)}.article-mark i{width:4px;height:18px;background:var(--accent)}.article-mark i:nth-child(2){height:30px;opacity:.7}.article-mark i:nth-child(3){height:12px;opacity:.45}.article-card h3{font-size:1.2rem;line-height:1.45;color:#fff;margin:0 0 .8rem}.article-card p{font-size:.86rem;line-height:1.8;color:#70707b;margin:0}.article-footer{margin-top:auto;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.07);display:flex;justify-content:space-between;color:#62626d;font-size:.65rem}.article-footer b{color:var(--accent);font-size:1rem}.empty-state{padding:5rem 2rem;text-align:center;border:1px solid rgba(255,255,255,.1)}.empty-state>span{color:#8a2be2;font-size:.65rem;letter-spacing:.15em}.empty-state h3{font-size:2rem;color:#fff;margin:1rem 0 .5rem}.empty-state p{color:#777783}.empty-state a,.article-cta>a{display:inline-flex;margin-top:1rem;padding:.8rem 1rem;border:1px solid rgba(255,255,255,.12);border-radius:.6rem;color:#fff;text-decoration:none;transition:.25s ease}.empty-state a:hover,.article-cta>a:hover{background:#fff;color:#08080b}.article-cta{max-width:1280px;margin:3rem auto 10rem;padding:4rem 6vw;border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;gap:3rem;align-items:center}.article-cta h2{font-size:clamp(2rem,4vw,4rem);line-height:1;letter-spacing:-.05em;color:#fff;margin:0}.article-cta p{color:#858592;line-height:1.9;max-width:700px}.article-cta>a{margin:0;white-space:nowrap}.article-cta>a span{margin-inline-start:.5rem;color:#8a2be2}@keyframes cardIn{from{opacity:0}to{opacity:1}}@media(max-width:980px){.articles-hero{grid-template-columns:1fr;padding-top:9rem}.hero-visual{min-height:420px}.featured-card{grid-template-columns:50px 1fr}.featured-visual{display:none}.article-grid{grid-template-columns:repeat(2,1fr)}.library-heading{grid-template-columns:1fr;gap:2rem}}@media(max-width:640px){.articles-hero,.featured-section,.library-section{padding-left:1.25rem;padding-right:1.25rem}.articles-hero{padding-top:8rem;min-height:auto}.hero-copy h1{font-size:clamp(2.8rem,13vw,4.2rem)}.hero-visual{min-height:340px}.orbit-one{width:280px;height:280px}.orbit-two{width:210px;height:320px}.knowledge-card{width:270px}.knowledge-card strong{font-size:4.5rem}.featured-card{grid-template-columns:1fr;padding:1.5rem;min-height:0}.featured-index{display:none}.article-grid{grid-template-columns:1fr}.article-card{min-height:340px}.controls{align-items:stretch}.search-box{width:100%}.categories{overflow:auto;flex-wrap:nowrap;padding-bottom:.3rem}.categories button{white-space:nowrap}.article-cta{margin-bottom:6rem;padding:3rem 1.25rem;display:block}.article-cta>a{margin-top:1.5rem}}
</style>
