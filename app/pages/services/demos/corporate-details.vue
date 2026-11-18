<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocale } from '~/composables/useLocale'

const { locale, setLocale, isRtl } = useLocale()

const copy = computed(() => locale.value === 'fa' ? {
  seoTitle: 'طراحی سایت شرکتی و سازمانی | FADAKAR',
  seoDesc: 'توضیحات طراحی سایت شرکتی؛ اعتبار، امنیت و پلتفرمی اختصاصی برای معرفی حرفه‌ای سازمان شما.',
  sections: [
    { id: 'why', label: 'چرا سایت شرکتی؟' },
    { id: 'mistakes', label: 'اشتباهات رایج' },
    { id: 'guarantee', label: 'تضمین‌های ما' },
    { id: 'business', label: 'این فقط یک دمو است' },
    { id: 'final', label: 'قدم بعدی' }
  ],
  viewDemo: 'مشاهده دمو',
  heroBadge: 'درباره طراحی سایت شرکتی و سازمانی',
  heroTitlePrefix: 'دفتر مرکزی دیجیتال شما،',
  heroTitleAccent: 'آبروی سازمان شماست.',
  heroP1: 'اولین جایی که مشتری، سرمایه‌گذار یا همکار تجاری قبل از تماس با شما چک می‌کند، سایت شماست.',
  heroHighlight: 'سایت شرکتی فقط یک بروشور آنلاین ساده نیست',
  heroP2: '، بلکه قوی‌ترین ابزار شما برای ',
  heroP3: 'ایجاد اعتماد، نمایش اعتبار و تسهیل فروش',
  heroP4: ' است.',
  heroCtaPrimary: 'حتماً این بخش را بخوانید',
  heroCtaSecondary: 'دیدن نمونه دمو',
  metric1: 'اعتبار برند',
  metric2: 'امنیت اطلاعات',
  metric3: 'توسعه سفارشی',
  whyTag: '01 / ارزش واقعی',
  whyTitle: 'مزیت داشتن یک سایت حرفه‌ای چیست؟',
  whyP1: 'در دنیای تجارت امروز، فروش راحت‌تر و شناخته شدن سریع‌تر مستقیماً به ',
  whyP1Bold: 'تصویر دیجیتال',
  whyP1Mid: ' شما بستگی دارد. وقتی یک شرکت بزرگ یا مشتری برای همکاری با شما تحقیق می‌کند، کیفیت سایت شما نماینده‌ی کیفیت کار شماست. ',
  whyP1Highlight: 'یک سایت بی‌کیفیت به راحتی می‌تواند باعث انصراف از قراردادهای بزرگ شود.',
  whyP2: 'از طرفی، یک سایت ساختاریافته می‌تواند با معرفی واضح خدمات، نمایش درست دستاوردها و پاسخ‌گویی به سوالات پرتکرار، فرآیند پشتیبانی و پرزنت خدمات شما را به شدت سبک کند. این یعنی صرفه‌جویی در زمان و منابع سازمان، و بازدهی مالی مستقیم!',
  mistakesTag: '02 / زنگ خطر',
  mistakesTitle: 'اشتباهات مهلک در راه‌اندازی سایت',
  mistakesQuote: '«با هوش مصنوعی یا قالب‌های آماده ارزان به سرعت سایت بسازید!» ',
  mistakesQuoteBold: 'این بزرگترین فریب تبلیغاتی است که به برندها ضربه می‌زند.',
  m1Title: '۱. قالب‌های تکراری و سنگین',
  m1Desc: 'استفاده از سیستم‌های ارزان شاید در ابتدا به‌صرفه باشد، اما سایت شما را شبیه هزاران سایت دیگر می‌کند و به دلیل کدهای اضافه، سرعت بسیار پایینی خواهد داشت که در گوگل هم جریمه می‌شود.',
  m2Title: '۲. فاجعه‌ی امنیت اطلاعات',
  m2Desc: 'سایت‌های سرهم‌بندی شده و افزونه‌های آماده به شدت در برابر هک آسیب‌پذیرند. هک شدن سایتِ یک سازمان، ضربه جبران‌ناپذیری به اعتماد مشتریان و شرکای شما می‌زند.',
  m3Title: '۳. بن‌بست در توسعه آینده',
  m3Desc: 'وقتی سازمان شما رشد می‌کند و به امکانات اختصاصی (مثل پنل کارمندان یا CRM) نیاز دارید، سایت‌های آماده دیگر پاسخگو نیستند و مجبور می‌شوید کل هزینه را از صفر بپردازید.',
  warningBadge: 'توجه بسیار مهم',
  warningQuote: '«این دمو فقط یک نمونه است؛',
  warningQuoteAccent: 'ما قالب آماده نمی‌فروشیم!»',
  warningP1: 'طراحی که در دموی ما می‌بینید ',
  warningP1Bold: 'فقط برای نمایش توانمندی فنی و استایل طراحی',
  warningP1Tail: ' ما آماده شده است.',
  warningP2: 'سایت نهایی سازمان شما قرار نیست دقیقاً همین شکلی باشد!',
  warningHighlight: 'ما معماری، رنگ‌بندی و امکانات را دقیقاً بر اساس نیاز، بودجه و هویت برندِ خاصِ شما از صفر طراحی و کدنویسی می‌کنیم.',
  guaranteeTag: '03 / رویکرد ما',
  guaranteeTitle: 'تضمین‌های ما به شما',
  guaranteeDesc: 'ما دغدغه‌های سطحِ سازمانی را می‌شناسیم و خیالتان را از بابت زیرساخت راحت می‌کنیم:',
  g1Title: 'کدنویسی کاملاً اختصاصی',
  g1Desc: 'استفاده از به‌روزترین فریم‌ورک‌های مهندسی نرم‌افزار دنیا برای تضمین پرفورمنس، بدون نیاز به افزونه‌های پولی و کند.',
  g2Title: 'امنیت بانکی و مقیاس‌پذیری',
  g2Desc: 'داده‌های شما کاملاً امن خواهند بود و معماری سایت طوری است که توانایی تحمل هزاران بازدیدکننده هم‌زمان را دارد.',
  g3Title: 'همراهی و پشتیبانی واقعی',
  g3Desc: 'پس از پایان کار شما را با یک محصول پیچیده رها نمی‌کنیم. برای آموزش، نگهداری، و توسعه امکانات جدید کاملاً در کنار شما هستیم.',
  finalTag: '04 / قدم بعدی',
  finalTitle: 'آماده‌اید اعتبار دیجیتال سازمان خود را ',
  finalTitleAccent: 'متمایز کنید؟',
  finalDesc: 'حالا که با سبک کاری و استانداردهای ما آشنا شدید، پیشنهاد می‌کنیم ',
  finalDescBold: 'دموی شرکتی را از نزدیک ببینید',
  finalDescTail: ' تا سرعت و کیفیت انیمیشن‌ها را مستقیماً تجربه کنید. سپس برای شروع پروژه اختصاصی خودتان به ما پیام دهید.',
  finalDemoBtn: 'ورود به صفحه دمو',
  finalBackBtn: 'بازگشت به خدمات'
} : {
  seoTitle: 'Corporate & Enterprise Web Design | FADAKAR',
  seoDesc: 'Corporate website development; credibility, data security, and custom architecture engineered for enterprise presence.',
  sections: [
    { id: 'why', label: 'Why Corporate Web?' },
    { id: 'mistakes', label: 'Common Pitfalls' },
    { id: 'guarantee', label: 'Our Guarantees' },
    { id: 'business', label: 'Beyond The Demo' },
    { id: 'final', label: 'Next Step' }
  ],
  viewDemo: 'View Demo',
  heroBadge: 'Corporate & Enterprise Web Architecture',
  heroTitlePrefix: 'Your Digital Headquarters',
  heroTitleAccent: 'Represents Your Entire Organization.',
  heroP1: 'The very first place a client, investor, or partner checks before reaching out is your website.',
  heroHighlight: 'A corporate website is not a generic online brochure',
  heroP2: '; it is your single most authoritative asset for ',
  heroP3: 'establishing trust, projecting credibility, and accelerating B2B deals',
  heroP4: '.',
  heroCtaPrimary: 'Read Essential Insights',
  heroCtaSecondary: 'Explore Live Demo',
  metric1: 'Brand Authority',
  metric2: 'Data Security',
  metric3: 'Custom Scale',
  whyTag: '01 / Real Value',
  whyTitle: 'What is the True ROI of an Enterprise Website?',
  whyP1: 'In modern commerce, closing deals and commanding respect depends directly on your ',
  whyP1Bold: 'digital reputation',
  whyP1Mid: '. When a corporate client or investor evaluates you, website quality directly represents organizational maturity. ',
  whyP1Highlight: 'A substandard website can quietly eliminate you from major contracts before negotiations even begin.',
  whyP2: 'On the operational side, a structured web platform handles service presentations, client credentials, and common corporate queries autonomously. This saves valuable executive hours and delivers direct commercial efficiency.',
  mistakesTag: '02 / Critical Warning',
  mistakesTitle: 'Costly Mistakes in Corporate Web Deployment',
  mistakesQuote: '"Build an instant website with AI or cheap templates!" ',
  mistakesQuoteBold: 'This marketing illusion silently damages serious corporate brands.',
  m1Title: '1. Bloated, Generic Templates',
  m1Desc: 'Pre-made template themes make your enterprise look identical to thousands of unrelated sites. Surplus code degrades performance and incurs harsh Google search penalties.',
  m2Title: '2. Severe Security Vulnerabilities',
  m2Desc: 'Cobbled-together plugins and legacy CMS setups are notorious attack vectors. A single compromised domain inflicts permanent reputational damage on partner trust.',
  m3Title: '3. Dead-End Scalability',
  m3Desc: 'As operations expand and you require dedicated employee portals, ERP links, or customized CRMs, template sites collapse, forcing a costly rewrite from scratch.',
  warningBadge: 'Crucial Distinction',
  warningQuote: '"This Demo is Purely Proof of Capability;',
  warningQuoteAccent: 'We Do Not Sell Pre-Made Templates!"',
  warningP1: 'The interface you explore in our demo is engineered ',
  warningP1Bold: 'solely to demonstrate technical performance and design refinement',
  warningP1Tail: '.',
  warningP2: 'Your actual corporate platform will not simply copy this layout!',
  warningHighlight: 'We engineer architecture, color palettes, and operational features bespoke from scratch to align perfectly with your exact brand identity and business objectives.',
  guaranteeTag: '03 / Our Approach',
  guaranteeTitle: 'Our Concrete Guarantees',
  guaranteeDesc: 'We understand enterprise stakes and provide unmatched architectural peace of mind:',
  g1Title: 'Bespoke, Clean Codebase',
  g1Desc: 'Engineered with cutting-edge software standards (Nuxt, Vue, Node) for pristine speed without dependency on fragile third-party plugins.',
  g2Title: 'Enterprise-Grade Security & Scalability',
  g2Desc: 'Your corporate assets remain impenetrable, backed by an architecture designed to effortlessly handle high concurrent traffic.',
  g3Title: 'Active Long-Term Partnership',
  g3Desc: 'We never abandon you post-launch. You receive dedicated support, training, maintenance, and seamless feature upgrades.',
  finalTag: '04 / Next Step',
  finalTitle: 'Ready to Distinguish Your Organization’s ',
  finalTitleAccent: 'Digital Prestige?',
  finalDesc: 'Now that you understand our craftsmanship and engineering standards, we invite you to ',
  finalDescBold: 'explore the live corporate demo',
  finalDescTail: ' to experience speed and interaction design firsthand. Then let’s discuss your bespoke platform.',
  finalDemoBtn: 'Enter Live Demo',
  finalBackBtn: 'Back to Services'
})

useSeoMeta({
  title: () => copy.value.seoTitle,
  description: () => copy.value.seoDesc
})

const reveal = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

const toggleLang = () => {
  setLocale(locale.value === 'fa' ? 'en' : 'fa')
}

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)
    
    const texts = gsap.utils.toArray('.anim-text')
    texts.forEach((text: any) => {
      gsap.fromTo(text, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: text, start: 'top 85%' } }
      )
    })
    
    const highlights = gsap.utils.toArray('.highlight-text')
    highlights.forEach((mark: any) => {
      gsap.fromTo(mark,
        { backgroundSize: '0% 100%' },
        { backgroundSize: '100% 100%', duration: 1.2, ease: 'power2.out', scrollTrigger: { trigger: mark, start: 'top 80%' } }
      )
    })
  }
})
</script>

<template>
  <div :dir="isRtl ? 'rtl' : 'ltr'" class="min-h-screen bg-[#050507] text-slate-200 selection:bg-[#8a2be2]/30 selection:text-white" :class="isRtl ? 'font-[\'Vazirmatn\']' : 'font-sans'">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#050507]/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#8a2be2]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in copy.sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none; cursor: pointer;">{{ item.label }}</button>
        </div>
        <div class="flex items-center gap-3">
          <button @click="toggleLang" class="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:bg-white/10 hover:text-white" :aria-label="locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'">
            {{ locale === 'fa' ? 'EN' : 'FA' }}
          </button>
          <NuxtLink to="/services/demos/corporate" class="rounded-lg bg-[#8a2be2] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-purple-500 shadow-lg shadow-[#8a2be2]/20">{{ copy.viewDemo }}</NuxtLink>
        </div>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border border-[#8a2be2]/30 bg-[#8a2be2]/10 px-4 py-2 text-sm font-bold text-[#8a2be2]">
              {{ copy.heroBadge }}
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4.2rem] text-white">
              {{ copy.heroTitlePrefix }} <br>
              <span class="text-[#8a2be2]">{{ copy.heroTitleAccent }}</span>
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              {{ copy.heroP1 }} 
              <mark class="highlight-text font-bold text-light bg-[#8a2be2]/40 rounded-md px-1 py-0.5">{{ copy.heroHighlight }}</mark>{{ copy.heroP2 }}<span class="font-bold text-white">{{ copy.heroP3 }}</span>{{ copy.heroP4 }}
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('business')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200 shadow-xl shadow-white/10">{{ copy.heroCtaPrimary }}</button>
              <NuxtLink to="/services/demos/corporate" class="rounded-xl border border-white/20 bg-black/50 px-8 py-4 text-base font-bold text-white transition hover:bg-slate-800 backdrop-blur-sm">{{ copy.heroCtaSecondary }}</NuxtLink>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#8a2be2]">01</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric1 }}</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">02</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric2 }}</span></div>
              <div class="px-6"><strong class="block text-3xl font-black text-slate-500">03</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric3 }}</span></div>
            </div>
          </div>
          
          <div class="anim-text relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a0f] shadow-2xl shadow-[#8a2be2]/10 group">
            <iframe src="/services/demos/corporate" class="w-full h-[500px] lg:h-[600px] border-0 bg-black pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"></iframe>
            <div class="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </div>
        </div>
      </section>

      <!-- Why Section -->
      <section id="why" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6">
          <div class="anim-text mb-12 text-center">
            <span class="inline-block rounded-full border border-[#8a2be2]/30 bg-[#8a2be2]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#8a2be2]">{{ copy.whyTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.whyTitle }}</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              {{ copy.whyP1 }}<strong>{{ copy.whyP1Bold }}</strong>{{ copy.whyP1Mid }}
              <mark class="highlight-text font-bold text-light bg-[#8a2be2]/40 rounded-md px-1.5 py-0.5">{{ copy.whyP1Highlight }}</mark>
            </p>
            <p>
              {{ copy.whyP2 }}
            </p>
          </div>
        </div>
      </section>

      <!-- Mistakes Section -->
      <section id="mistakes" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5 bg-[#0a0a0f]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center mb-16">
            <span class="inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-black tracking-widest text-red-400">{{ copy.mistakesTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.mistakesTitle }}</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              {{ copy.mistakesQuote }}<strong class="text-white">{{ copy.mistakesQuoteBold }}</strong>
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-3">
            <article class="anim-text group rounded-[24px] border border-red-900/30 bg-[#050507] p-8 transition hover:border-red-500/50 hover:bg-black">
              <h3 class="text-xl font-black text-red-400 mb-4 flex items-center gap-3">
                {{ copy.m1Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.m1Desc }}</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-red-900/30 bg-[#050507] p-8 transition hover:border-red-500/50 hover:bg-black">
              <h3 class="text-xl font-black text-red-400 mb-4 flex items-center gap-3">
                {{ copy.m2Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.m2Desc }}</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-red-900/30 bg-[#050507] p-8 transition hover:border-red-500/50 hover:bg-black">
              <h3 class="text-xl font-black text-red-400 mb-4 flex items-center gap-3">
                {{ copy.m3Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.m3Desc }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Business Warning / Template Disclaimer -->
      <section id="business" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-[#8a2be2]/20 bg-gradient-to-b from-[#8a2be2]/10 to-[#050507]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            <!-- Warning Card -->
            <div class="anim-text relative rounded-[24px] border border-[#8a2be2]/40 bg-black/80 backdrop-blur-xl p-10 shadow-2xl shadow-[#8a2be2]/20">
              <div class="text-sm font-black text-[#8a2be2] mb-6 tracking-widest uppercase flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                {{ copy.warningBadge }}
              </div>
              <p class="text-3xl sm:text-4xl font-black leading-tight text-white mb-8">
                {{ copy.warningQuote }} <br>
                <span class="text-[#8a2be2]">{{ copy.warningQuoteAccent }}</span>
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-lg leading-8 text-slate-300">
                {{ copy.warningP1 }}<strong>{{ copy.warningP1Bold }}</strong>{{ copy.warningP1Tail }} 
                <br><br>
                {{ copy.warningP2 }}
                <mark class="highlight-text font-bold text-light bg-[#8a2be2]/40 rounded-md px-1.5 py-0.5 mt-2 inline-block">{{ copy.warningHighlight }}</mark>
              </p>
            </div>
            
            <!-- Guarantee Section -->
            <div id="guarantee" class="anim-text">
              <span class="inline-block rounded-full border border-white/10 bg-[#1e293b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">{{ copy.guaranteeTag }}</span>
              <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.guaranteeTitle }}</h2>
              <p class="mt-8 text-lg leading-9 text-slate-300">
                {{ copy.guaranteeDesc }}
              </p>
              
              <ul class="mt-8 space-y-8">
                <li class="flex items-start gap-5">
                  <div class="mt-1 bg-[#8a2be2]/20 p-3 rounded-xl text-[#8a2be2]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-xl">{{ copy.g1Title }}</h4>
                    <p class="text-slate-400 mt-2 leading-7">{{ copy.g1Desc }}</p>
                  </div>
                </li>
                <li class="flex items-start gap-5">
                  <div class="mt-1 bg-[#8a2be2]/20 p-3 rounded-xl text-[#8a2be2]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-xl">{{ copy.g2Title }}</h4>
                    <p class="text-slate-400 mt-2 leading-7">{{ copy.g2Desc }}</p>
                  </div>
                </li>
                <li class="flex items-start gap-5">
                  <div class="mt-1 bg-[#8a2be2]/20 p-3 rounded-xl text-[#8a2be2]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-xl">{{ copy.g3Title }}</h4>
                    <p class="text-slate-400 mt-2 leading-7">{{ copy.g3Desc }}</p>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Final Section -->
      <section id="final" class="scroll-mt-24 relative py-24 lg:py-40 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6 text-center">
          <span class="anim-text inline-block rounded-full border border-[#8a2be2]/30 bg-[#8a2be2]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#8a2be2]">{{ copy.finalTag }}</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            {{ copy.finalTitle }}
            <span class="text-[#8a2be2]">{{ copy.finalTitleAccent }}</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            {{ copy.finalDesc }}
            <strong class="text-white">{{ copy.finalDescBold }}</strong> 
            {{ copy.finalDescTail }}
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services/demos/corporate" class="flex items-center justify-center gap-2 rounded-xl bg-[#8a2be2] px-10 py-4 text-lg font-black text-white transition-all hover:bg-purple-500 shadow-lg shadow-[#8a2be2]/30">
              {{ copy.finalDemoBtn }}
              <svg class="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </NuxtLink>
            <NuxtLink to="/services" class="flex items-center justify-center rounded-xl border border-white/20 bg-black px-10 py-4 text-lg font-black text-white transition-all hover:bg-slate-800">{{ copy.finalBackBtn }}</NuxtLink>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
html { scroll-behavior: smooth; }
body { overflow-x: hidden; }
</style>
