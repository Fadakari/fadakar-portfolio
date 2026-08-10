<script setup lang="ts">
import { onMounted, onUnmounted, nextTick, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '~/components/Header.vue'
import AnimatedGradientBackground from '~/components/AnimatedGradientBackground.vue'

if (import.meta.client) gsap.registerPlugin(ScrollTrigger)

const { locale, isRtl } = useLocale()

const content = computed(() => locale.value === 'fa' ? {
  eyebrow: 'درباره من',
  title: 'من فقط وب‌سایت نمی‌سازم؛\nسعی می‌کنم مسئله را بفهمم.',
  intro: 'من سید عرفان حسینی فدکاری هستم؛ توسعه‌دهنده وب و کسی که بخش بزرگی از مسیرش را با ساختن، خراب کردن، دوباره ساختن و فهمیدن اینکه «چرا این راه؟» طی کرده است.',
  scroll: 'مسیر من',
  journeyTitle: 'علاقه به توسعه‌دهندگی از جایی شروع شد که ساختن برایم از مصرف کردن جذاب‌تر شد.',
  journey: [
    'برای من برنامه‌نویسی از حفظ کردن سینتکس‌ها شروع نشد. چیزی که بیشتر جذبم کرد، امکان تبدیل یک ایده خام به چیزی بود که واقعاً کار می‌کند؛ چیزی که یک نفر بتواند بازش کند، با آن تعامل داشته باشد و نتیجه بگیرد.',
    'به مرور، این علاقه از «ساختن یک صفحه» فاصله گرفت و به فهمیدن کل محصول رسید: کاربر از کجا وارد می‌شود؟ چه چیزی باید ببیند؟ داده از کجا می‌آید؟ چه اتفاقی در پشت صحنه می‌افتد؟ اگر تعداد کاربران بیشتر شد چه می‌شود؟ و اصلاً آیا این راه‌حل برای آن کسب‌وکار منطقی است؟',
    'در پروژه‌های مختلف با اکوسیستم‌هایی مثل Vue، Nuxt، React و Next.js در سمت وب و Python و Flask در سمت بک‌اند کار کرده‌ام و در کنار کدنویسی با موضوعاتی مثل دیتابیس، کش، Docker/Podman، Nginx، Cloudflare، سئو، عملکرد و زیرساخت هم درگیر شده‌ام. این تجربه‌ها برای من یک نتیجه مهم داشتند: توسعه وب فقط نوشتن کد نیست؛ تصمیم گرفتن درباره چیزی است که باید ساخته شود.'
  ],
  beliefEyebrow: 'یک باور مهم',
  beliefTitle: 'هر کسب‌وکار، تکنولوژی مورد نیاز خودش را می‌خواهد.',
  beliefText: 'من به نسخه واحد برای همه پروژه‌ها اعتقاد ندارم. یک سایت معرفی ساده، یک فروشگاه، یک پلتفرم آموزشی و یک محصول SaaS مسئله‌های یکسانی ندارند؛ بنابراین منطقی نیست همه آن‌ها را با یک معماری، یک فریم‌ورک یا یک سطح از پیچیدگی بسازیم.',
  beliefText2: 'گاهی بهترین تصمیم استفاده از یک راه‌حل ساده و کم‌هزینه است. گاهی هم ساده شروع کردن یعنی ساختن چیزی که چند ماه بعد مجبور شویم دوباره از صفر بازطراحی‌اش کنیم. برای همین قبل از انتخاب تکنولوژی، سعی می‌کنم خود کسب‌وکار، کاربران، مسیر رشد و محدودیت‌های واقعی پروژه را بفهمم.',
  workEyebrow: 'چیزی که امروز می‌سازم',
  workTitle: 'وب‌سایت باید برای کسب‌وکار کار کند، نه فقط برای نمایش دادن.',
  workText: 'هدف من این است که طراحی، تجربه کاربری، توسعه، عملکرد و زیرساخت در یک جهت حرکت کنند. ظاهر حرفه‌ای مهم است، اما اگر کاربر نتواند مسیرش را پیدا کند، سایت سریع نباشد، ساختار آن برای سئو مناسب نباشد یا امکاناتش با فرآیند واقعی کسب‌وکار هماهنگ نباشد، ظاهر خوب به تنهایی ارزش زیادی ایجاد نمی‌کند.',
  projectsEyebrow: 'چند ایستگاه از مسیر',
  projects: [
    { number: '01', title: 'استوک', text: 'یکی از پروژه‌هایی که تجربه محصول واقعی و انتشار عمومی را برایم جدی‌تر کرد؛ پروژه‌ای که فقط یک تمرین باقی نماند.' },
    { number: '02', title: 'Arta-Kala', text: 'کار روی یک محصول وب مدرن با Next.js و درگیری با موضوعاتی مثل API، احراز هویت، کش و ساختار سمت کلاینت و سرور.' },
    { number: '03', title: 'پروژه‌های کسب‌وکاری', text: 'از فروشگاه و سایت‌های خدماتی تا پروژه‌های تخصصی مثل سایت‌های موبایل و کسب‌وکارهای صنعتی؛ جایی که تفاوت نیاز واقعی هر مشتری بیشتر خودش را نشان می‌دهد.' }
  ],
  nowEyebrow: 'امروز',
  nowTitle: 'هنوز دارم یاد می‌گیرم؛ عمداً.',
  nowText: 'توسعه وب حوزه‌ای نیست که یک روز بتوان در آن گفت «تمام شد». تکنولوژی‌ها عوض می‌شوند، ابزارها بهتر می‌شوند و مسئله‌های تازه‌ای به وجود می‌آیند. برای همین یادگیری برای من بخشی از کار است، نه مرحله‌ای که قرار باشد روزی تمام شود.',
  closing: 'اگر قرار باشد برای یک کسب‌وکار چیزی بسازم، ترجیح می‌دهم قبل از پرسیدن «با چه تکنولوژی‌ای؟» بپرسم «دقیقاً چه چیزی باید حل شود؟».'
} : {
  eyebrow: 'About me',
  title: 'I do not just build websites.\nI try to understand the problem first.',
  intro: 'I am Seyed Erfan Hosseini Fadakari, a web developer who has spent much of his journey building, breaking, rebuilding, and constantly asking one question: why this approach?',
  scroll: 'My path',
  journeyTitle: 'My interest in development started when building became more exciting than consuming.',
  journey: [
    'Programming did not begin for me with memorizing syntax. What pulled me in was the ability to turn a rough idea into something that actually works—something a person can open, interact with, and get a result from.',
    'Over time, that interest moved beyond building a page and toward understanding the whole product: where does the user enter, what should they see, where does the data come from, what happens behind the scenes, what changes when usage grows, and most importantly, is this solution actually right for the business?',
    'I have worked across ecosystems such as Vue, Nuxt, React and Next.js on the web, with Python and Flask on the backend, while also getting hands-on with databases, caching, Docker/Podman, Nginx, Cloudflare, SEO, performance and infrastructure. Those experiences taught me something important: web development is not just writing code. It is making decisions about what should be built.'
  ],
  beliefEyebrow: 'A core belief',
  beliefTitle: 'Every business needs the technology that fits its own problem.',
  beliefText: 'I do not believe in one stack for every project. A simple company website, an online store, an education platform and a SaaS product do not have the same problems. There is no reason to force all of them into the same architecture, framework or level of complexity.',
  beliefText2: 'Sometimes the best decision is a simple, affordable solution. Sometimes starting too simply means rebuilding everything a few months later. That is why I try to understand the business, users, growth path and real constraints before choosing technology.',
  workEyebrow: 'What I build today',
  workTitle: 'A website should work for the business, not just look good.',
  workText: 'My goal is to make design, UX, development, performance and infrastructure move in the same direction. A professional visual identity matters, but if users cannot find their way, the site is slow, its structure is weak for search, or its features do not match the real business workflow, visual polish alone does not create much value.',
  projectsEyebrow: 'A few stops along the way',
  projects: [
    { number: '01', title: 'Stock', text: 'A project that made real product development and public distribution more tangible for me; it did not remain just an exercise.' },
    { number: '02', title: 'Arta-Kala', text: 'Work on a modern web product with Next.js, including APIs, authentication, caching and client/server architecture.' },
    { number: '03', title: 'Business projects', text: 'From stores and service websites to specialized projects for mobile and industrial businesses, where the differences between real client needs become much clearer.' }
  ],
  nowEyebrow: 'Today',
  nowTitle: 'I am still learning. Intentionally.',
  nowText: 'Web development is not a field where you eventually get to say “done.” Technologies change, tools improve and new problems appear. Learning is therefore part of my work, not a phase I expect to finish.',
  closing: 'When I build something for a business, I would rather ask “what exactly are we trying to solve?” before asking “which technology should we use?”'
})

const scrollToPath = () => document.getElementById('path')?.scrollIntoView({ behavior: 'smooth' })

onMounted(async () => {
  await nextTick()
  gsap.from('.about-hero-item', { opacity: 0, y: 35, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.25 })
  gsap.utils.toArray<HTMLElement>('.about-reveal').forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 45 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 84%' }
    })
  })
})

onUnmounted(() => ScrollTrigger.getAll().forEach((trigger) => trigger.kill()))

useSeoMeta({
  title: () => locale.value === 'fa' ? 'درباره من | FADAKAR' : 'About Me | FADAKAR',
  description: () => locale.value === 'fa'
    ? 'درباره سید عرفان حسینی فدکاری، مسیر توسعه وب و نگاه او به طراحی و انتخاب تکنولوژی برای هر کسب‌وکار.'
    : 'About Seyed Erfan Hosseini Fadakari, his web development journey and his approach to technology and business.'
})
</script>

<template>
  <div class="about-page" :dir="isRtl ? 'rtl' : 'ltr'">
    <AnimatedGradientBackground />
    <Header />

    <main>
      <section class="about-hero">
        <div class="hero-grid">
          <div class="hero-copy">
            <span class="eyebrow about-hero-item">{{ content.eyebrow }}</span>
            <h1 class="about-title about-hero-item">{{ content.title }}</h1>
            <p class="hero-intro about-hero-item">{{ content.intro }}</p>
            <button class="scroll-link about-hero-item" @click="scrollToPath">
              <span>{{ content.scroll }}</span>
              <span class="arrow">↓</span>
            </button>
          </div>

          <div class="identity-card about-hero-item" aria-hidden="true">
            <div class="identity-glow"></div>
            <div class="identity-code">
              <span>const</span> approach = {
              <br />&nbsp;&nbsp;problem: <b>"first"</b>,
              <br />&nbsp;&nbsp;technology: <b>"fit"</b>,
              <br />&nbsp;&nbsp;quality: <b>"non-negotiable"</b>
              <br />}
            </div>
            <div class="identity-mark">F</div>
            <div class="identity-caption">WEB · PRODUCT · SYSTEMS</div>
          </div>
        </div>
      </section>

      <section id="path" class="content-section path-section">
        <div class="section-label about-reveal">01 / {{ content.scroll }}</div>
        <div class="section-main">
          <h2 class="section-title about-reveal">{{ content.journeyTitle }}</h2>
          <div class="body-copy">
            <p v-for="paragraph in content.journey" :key="paragraph" class="about-reveal">{{ paragraph }}</p>
          </div>
        </div>
      </section>

      <section class="belief-section">
        <div class="belief-inner">
          <div class="section-label about-reveal">02 / {{ content.beliefEyebrow }}</div>
          <div class="belief-content">
            <h2 class="belief-title about-reveal">{{ content.beliefTitle }}</h2>
            <p class="belief-text about-reveal">{{ content.beliefText }}</p>
            <p class="belief-text muted about-reveal">{{ content.beliefText2 }}</p>
          </div>
        </div>
      </section>

      <section class="content-section work-section">
        <div class="section-label about-reveal">03 / {{ content.workEyebrow }}</div>
        <div class="section-main split-main">
          <h2 class="section-title about-reveal">{{ content.workTitle }}</h2>
          <p class="large-copy about-reveal">{{ content.workText }}</p>
        </div>
      </section>

      <section class="projects-section">
        <div class="projects-head">
          <div class="section-label about-reveal">04 / {{ content.projectsEyebrow }}</div>
        </div>
        <div class="project-list">
          <article v-for="project in content.projects" :key="project.number" class="project-row about-reveal">
            <span class="project-number">{{ project.number }}</span>
            <h3>{{ project.title }}</h3>
            <p>{{ project.text }}</p>
          </article>
        </div>
      </section>

      <section class="now-section">
        <div class="now-card about-reveal">
          <div class="section-label">05 / {{ content.nowEyebrow }}</div>
          <h2>{{ content.nowTitle }}</h2>
          <p>{{ content.nowText }}</p>
          <div class="now-line"></div>
          <p class="closing">{{ content.closing }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.about-page { min-height: 100vh; background: #050505; color: #e2e8f0; position: relative; overflow: hidden; }
.about-page main { position: relative; z-index: 2; }
.about-hero { min-height: 100vh; display: flex; align-items: center; padding: 9rem 7vw 6rem; }
.hero-grid { width: min(1240px, 100%); margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(320px, .85fr); gap: 7rem; align-items: center; }
.hero-copy { max-width: 760px; }
.eyebrow, .section-label { color: #38bdf8; font-size: .78rem; letter-spacing: .18em; text-transform: uppercase; font-weight: 700; }
.about-title { margin: 1.5rem 0 2rem; font-size: clamp(3.2rem, 6.5vw, 7rem); line-height: 1.04; letter-spacing: -.045em; white-space: pre-line; color: #f8fafc; }
.hero-intro { max-width: 680px; color: #94a3b8; font-size: clamp(1.05rem, 1.5vw, 1.3rem); line-height: 2; }
.scroll-link { margin-top: 3rem; display: inline-flex; align-items: center; gap: 1rem; background: transparent; border: 0; color: #e2e8f0; cursor: pointer; font: inherit; padding: 0; }
.scroll-link .arrow { width: 42px; height: 42px; border: 1px solid rgba(148,163,184,.25); border-radius: 50%; display: grid; place-items: center; transition: .3s ease; }
.scroll-link:hover .arrow { border-color: #38bdf8; transform: translateY(4px); }
.identity-card { min-height: 500px; border: 1px solid rgba(148,163,184,.14); background: linear-gradient(145deg, rgba(30,41,59,.55), rgba(2,6,23,.82)); border-radius: 28px; position: relative; overflow: hidden; box-shadow: 0 30px 100px rgba(0,0,0,.35); }
.identity-glow { position: absolute; width: 260px; height: 260px; border-radius: 50%; background: rgba(56,189,248,.15); filter: blur(70px); top: 10%; left: 15%; }
.identity-code { position: absolute; top: 28%; left: 12%; right: 12%; color: #64748b; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: .85rem; line-height: 2.2; direction: ltr; }
.identity-code span { color: #38bdf8; }.identity-code b { color: #a78bfa; font-weight: 500; }
.identity-mark { position: absolute; right: 11%; bottom: 9%; font-size: 8rem; font-weight: 900; line-height: .8; color: rgba(255,255,255,.035); }
.identity-caption { position: absolute; left: 12%; bottom: 9%; font-size: .68rem; color: #475569; letter-spacing: .25em; }
.content-section { width: min(1240px, 100%); margin: 0 auto; padding: 9rem 7vw; display: grid; grid-template-columns: 190px minmax(0, 1fr); gap: 4rem; }
.section-main { max-width: 850px; }.section-title { font-size: clamp(2.1rem, 4vw, 4.2rem); line-height: 1.2; letter-spacing: -.035em; color: #f8fafc; margin-bottom: 3.5rem; }.body-copy { max-width: 760px; }.body-copy p, .belief-text, .large-copy { color: #94a3b8; font-size: 1.08rem; line-height: 2.05; margin-bottom: 2rem; }
.belief-section { padding: 10rem 7vw; background: linear-gradient(180deg, rgba(15,23,42,.38), rgba(2,6,23,.72)); border-top: 1px solid rgba(148,163,184,.08); border-bottom: 1px solid rgba(148,163,184,.08); }
.belief-inner { width: min(1240px, 100%); margin: 0 auto; display: grid; grid-template-columns: 190px minmax(0,1fr); gap: 4rem; }.belief-content { max-width: 980px; }.belief-title { font-size: clamp(2.8rem, 6vw, 6rem); line-height: 1.08; letter-spacing: -.045em; color: #f8fafc; margin-bottom: 3rem; }.belief-text { max-width: 820px; font-size: 1.2rem; }.belief-text.muted { color: #64748b; }
.split-main { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, .8fr); gap: 5rem; align-items: start; }.split-main .section-title { margin-bottom: 0; }.large-copy { margin: 0; font-size: 1.15rem; }
.projects-section { width: min(1240px, 100%); margin: 0 auto; padding: 7rem 7vw 10rem; }.projects-head { margin-bottom: 3rem; }.project-list { border-top: 1px solid rgba(148,163,184,.14); }.project-row { display: grid; grid-template-columns: 80px minmax(160px,.6fr) minmax(0,1.2fr); gap: 2rem; align-items: baseline; padding: 2.5rem 0; border-bottom: 1px solid rgba(148,163,184,.14); transition: padding .35s ease, border-color .35s ease; }.project-row:hover { padding-inline: 1rem; border-color: rgba(56,189,248,.45); }.project-number { color: #38bdf8; font-family: ui-monospace, monospace; font-size: .8rem; }.project-row h3 { color: #f8fafc; font-size: 1.5rem; }.project-row p { color: #64748b; line-height: 1.9; }
.now-section { padding: 3rem 7vw 10rem; }.now-card { width: min(1000px, 100%); margin: 0 auto; padding: clamp(2rem, 6vw, 5rem); border: 1px solid rgba(56,189,248,.16); border-radius: 28px; background: radial-gradient(circle at 80% 10%, rgba(56,189,248,.08), transparent 30%), rgba(15,23,42,.42); }.now-card h2 { font-size: clamp(2.5rem, 5vw, 5rem); line-height: 1.08; letter-spacing: -.04em; margin: 1.5rem 0 2rem; color: #f8fafc; }.now-card > p { max-width: 760px; color: #94a3b8; line-height: 2; font-size: 1.08rem; }.now-line { width: 100%; height: 1px; background: rgba(148,163,184,.14); margin: 3rem 0; }.now-card .closing { color: #cbd5e1; font-size: 1.2rem; }
@media (max-width: 900px) { .about-hero { padding-inline: 1.5rem; }.hero-grid, .content-section, .belief-inner { grid-template-columns: 1fr; gap: 2.5rem; }.identity-card { min-height: 380px; }.content-section { padding-inline: 1.5rem; }.belief-section { padding-inline: 1.5rem; }.split-main { grid-template-columns: 1fr; gap: 1.5rem; }.projects-section, .now-section { padding-inline: 1.5rem; }.project-row { grid-template-columns: 55px 1fr; }.project-row p { grid-column: 2; margin-top: -.8rem; } }
@media (max-width: 600px) { .about-title { font-size: 3rem; }.about-hero { min-height: auto; padding-top: 9rem; padding-bottom: 5rem; }.identity-card { min-height: 320px; }.identity-code { font-size: .68rem; }.identity-mark { font-size: 6rem; }.content-section, .belief-section { padding-top: 6rem; padding-bottom: 6rem; }.belief-title { font-size: 2.7rem; }.project-row { gap: 1rem; }.project-row h3 { font-size: 1.25rem; } }
</style>
