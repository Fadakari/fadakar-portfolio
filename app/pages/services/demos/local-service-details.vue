<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocale } from '~/composables/useLocale'

const { locale, setLocale, isRtl } = useLocale()

const copy = computed(() => locale.value === 'fa' ? {
  seoTitle: 'طراحی سایت خدماتی و محلی | FADAKAR',
  seoDesc: 'توضیحات طراحی سایت خدمات محلی؛ راهکاری برای دیده شدن در جستجوهای گوگل و جذب مشتریان بومی و منطقه‌ای.',
  sections: [
    { id: 'why', label: 'چرا سایت خدماتی؟' },
    { id: 'advice', label: 'توصیه‌های دوستانه' },
    { id: 'guarantee', label: 'تضمین‌های ما' },
    { id: 'business', label: 'این فقط یک دمو است' },
    { id: 'final', label: 'قدم بعدی' }
  ],
  viewDemo: 'مشاهده دمو',
  heroBadge: 'درباره طراحی سایت خدماتی و محلی (Local Business)',
  heroTitlePrefix: 'وقتی مشتری به شما نیاز دارد،',
  heroTitleAccent: 'دقیقاً کجا دنبالتان می‌گردد؟',
  heroP1: 'فرض کنید لوله آب ترکیده، خودرو در جاده خراب شده یا کسی به دنبال یک کلینیک زیبایی در محله خودش است. آنها اینستاگرام را باز نمی‌کنند؛ ',
  heroHighlight: 'آنها در گوگل جستجو می‌کنند.',
  heroP2: ' سایت خدماتی شما، قلاب شما برای گرفتن مشتریانی است که همین الان قصد خرید یا دریافت خدمات دارند.',
  heroCtaPrimary: 'نکات مهم قبل از طراحی',
  heroCtaSecondary: 'دیدن نمونه دمو',
  metric1: 'سئوی محلی (نقشه)',
  metric2: 'دسترسی سریع',
  metric3: 'تماس بی‌دردسر',
  whyTag: '01 / ایجاد حس نیاز',
  whyTitle: 'تفاوت بازدیدکننده و «مشتری واقعی» چیست؟',
  whyP1Pre: 'بسیاری از کسب‌وکارهای خدماتی (مثل تعمیرکاران، کلینیک‌ها، سالن‌های زیبایی، خدمات نظافت و وکلا) زمان زیادی را صرف تولید محتوا در شبکه‌های اجتماعی می‌کنند تا دیده شوند. این کار برای برندسازی عالی است، اما ',
  whyP1H: 'فروش اصلی و پربازده زمانی اتفاق می‌افتد که کاربر خودش به دنبال شما بگردد.',
  whyP2: 'وقتی شما در کلماتی مثل «بهترین دندانپزشک در شیراز» یا «تعمیرات پکیج در غرب تهران» صفحه و سایتی هدفمند داشته باشید، کاربری که وارد سایت شما می‌شود دیگر نیازی به قانع شدن ندارد؛ او خودش تصمیم به خرید گرفته است و فقط به دنبال یک مجموعه قابل اعتماد می‌گردد تا تلفن را بردارد و تماس بگیرد. سایت شما، همان دلیلی است که او شما را به جای رقیبتان انتخاب می‌کند.',
  adviceTag: '02 / یک مشاوره دوستانه',
  adviceTitle: 'مراقب این تله‌ها باشید (حتی اگر با ما کار نمی‌کنید)',
  adviceSubtitle: 'هدف ما تخریب دیگر روش‌ها نیست؛ اما بر اساس تجربه، کسب‌وکارهای محلی اغلب در این سه تله می‌افتند و بودجه خود را از دست می‌دهند:',
  a1Title: '۱. غفلت از موبایل و سرعت',
  a1Desc: 'بیش از ۸۰ درصد جستجوهای خدماتی محلی از طریق موبایل انجام می‌شود (در ماشین، در خیابان، یا در لحظه نیاز). اگر سایتی که می‌سازید در موبایل کند باشد یا شماره تماستان دم‌دست نباشد، کاربر به راحتی سایت را می‌بندد و سراغ لینک بعدی می‌رود.',
  a2Title: '۲. سایت‌های سنگین و غیرمحلی',
  a2Desc: 'گاهی شرکت‌ها هزینه‌های هنگفتی برای سایت‌هایی می‌کنند که انیمیشن‌های عجیب دارند، اما در سئوی محلی (Local SEO) و متصل شدن به Google Maps ضعف دارند. زیبایی به تنهایی وقتی در گوگل پیدا نشوید، زنگ تلفن شما را به صدا در نمی‌آورد.',
  a3Title: '۳. پکیج‌های آماده و اجاره‌ای',
  a3Desc: 'استفاده از سایت‌سازهای اجاره‌ای شاید برای شروع سریع خوب باشند، اما شما مالک واقعی سایت و سورس کد آن نیستید. وقتی کسب‌وکارتان رشد کند و بخواهید ساختار را تغییر دهید یا سئو را در دست بگیرید، محدودیت‌های این سرویس‌ها شما را متوقف می‌کند.',
  bizBadge: 'پیش از دیدن دمو بدانید',
  bizTitlePre: '«این دمو فقط یک نمونه است؛',
  bizTitleAccent: 'هر خدمتی نیاز خاص خودش را دارد.»',
  bizP1: 'دمویی که طراحی کرده‌ایم، صرفاً یک مثال از چیدمان، سرعت و تجربه کاربری است تا بدانید خروجی کار ما چقدر روان و جذاب است.',
  bizP2Pre: 'سایت واقعی شما، هرگز یک کپی از این دمو نخواهد بود. ',
  bizP2H: 'یک قالیشویی، یک مرکز مشاوره و یک سالن زیبایی هر کدام زبان، لحن، و مسیر تماس کاملاً متفاوتی دارند.',
  bizP2Tail: ' ما سایت را حول محور خدمات خاصِ خودِ شما می‌سازیم.',
  guaranteeTag: '03 / پیشنهاد ما به شما',
  guaranteeTitle: 'وقتی ما سایت شما را می‌سازیم...',
  guaranteeDesc: 'ما سایت شما را به چشم یک ماشین تولید سرنخ (Lead) و تماس می‌بینیم، نه صرفاً یک تابلوی نقاشی:',
  g1Title: 'زیرساخت سئوی محلی (Local SEO)',
  g1Desc: 'سایت شما از پایه برای جستجوهای کلمات کلیدی در شهر و محله شما بهینه می‌شود تا در نتایج مپ و سرچ بالا بیایید.',
  g2Title: 'طراحی موبایل‌محورِ واقعی',
  g2Desc: 'از آنجایی که مشتریان شما غالباً با موبایل جستجو می‌کنند، دکمه‌های تماس، رزرو و واتساپ کاملاً در دسترس و روان خواهند بود.',
  g3Title: 'سرعت بی‌رقیب',
  g3Desc: 'به جای استفاده از پوسته‌های سنگین و کدهای مزاحم، سایت با معماری اختصاصی نوشته می‌شود تا در یک پلک‌زدن بارگذاری شود.',
  finalTag: '04 / قدم بعدی',
  finalTitlePre: 'آماده‌اید زنگ تماس کسب‌وکارتان را ',
  finalTitleAccent: 'بیشتر به صدا درآورید؟',
  finalDescPre: 'حالا که با اهمیت و حساسیت یک سایت خدماتی آشنا شدید، پیشنهاد می‌کنیم ',
  finalDescBold: 'نمونه دموی ما را ببینید',
  finalDescTail: ' تا با استانداردهای طراحی و تجربه کاربری (UX) آشنا شوید. سپس برای مشاوره رایگان با ما در ارتباط باشید.',
  finalDemoBtn: 'ورود به صفحه دمو',
  finalBackBtn: 'بازگشت به خدمات'
} : {
  seoTitle: 'Local Business & Service Web Design | FADAKAR',
  seoDesc: 'Bespoke local service website development; optimized for local SEO, Google Maps discovery, and high-intent customer phone inquiries.',
  sections: [
    { id: 'why', label: 'Why Local Service Web?' },
    { id: 'advice', label: 'Friendly Advisory' },
    { id: 'guarantee', label: 'Our Approach' },
    { id: 'business', label: 'Beyond The Demo' },
    { id: 'final', label: 'Next Step' }
  ],
  viewDemo: 'View Demo',
  heroBadge: 'Local Business & High-Intent Service Architecture',
  heroTitlePrefix: 'When Customers Urgently Need Your Service,',
  heroTitleAccent: 'Where Exactly Do They Search?',
  heroP1: 'Picture a burst water pipe, a roadside breakdown, or someone seeking an aesthetic dental practice in their neighborhood. They do not scroll social feeds; ',
  heroHighlight: 'they search on Google.',
  heroP2: ' Your local service platform is your authoritative hook to capture clients who are actively looking to hire right now.',
  heroCtaPrimary: 'Essential Tips Before Building',
  heroCtaSecondary: 'Explore Live Demo',
  metric1: 'Local SEO (Maps)',
  metric2: 'Instant Access',
  metric3: 'Direct Inquiries',
  whyTag: '01 / Generating High-Intent Demand',
  whyTitle: 'What is the Difference Between Casual Visitors and "Ready Buyers"?',
  whyP1Pre: 'Many service businesses (plumbers, clinics, salons, legal practices, contractors) spend hours creating social media content to be seen. That works well for brand awareness, but ',
  whyP1H: 'your most profitable, friction-free transactions happen when the customer is actively searching for you.',
  whyP2: 'When you own high-ranking local landing pages for terms like "best cosmetic dentist in downtown" or "emergency heating repair," visitors don’t need to be persuaded that they have a problem. They have already decided to hire; they are only looking for a credible provider to call immediately. Your website is the decisive reason they choose you over a competitor.',
  adviceTag: '02 / A Friendly Advisory',
  adviceTitle: 'Watch Out for These Costly Traps (Even If You Don’t Work With Us)',
  adviceSubtitle: 'Our purpose is never to disparage other methods; but in our experience, local businesses frequently fall into these three traps and waste their marketing budget:',
  a1Title: '1. Neglecting Mobile Speed & Usability',
  a1Desc: 'Over 80% of local service searches occur on smartphones (in transit, on the job, or in urgent moments). If your site lags or buries direct calling triggers, users close the tab and call the next search result.',
  a2Title: '2. Heavy Sites with Zero Local SEO',
  a2Desc: 'Agencies often charge fortunes for fancy animations while neglecting structured schema, geo-targeting, and Google Business Profile links. Visual flash without local rankings never rings your phone.',
  a3Title: '3. Closed Subscription Page-Builders',
  a3Desc: 'Renting generic proprietary builders seems quick initially, but you don’t own your underlying code. When your business grows and you need custom booking, CRM sync, or advanced SEO, their platform limitations halt your growth.',
  bizBadge: 'Before Exploring The Demo',
  bizTitlePre: '“This Demo is Merely an Example;',
  bizTitleAccent: 'Every Service Demands Its Own Tailored Journey.”',
  bizP1: 'The demo we designed demonstrates fluid layouts, speed, and clean UX so you can inspect our engineering standards.',
  bizP2Pre: 'Your actual production site will never be a cookie-cutter clone. ',
  bizP2H: 'A carpet restoration firm, an executive clinic, and a high-end salon require radically different visual tones and conversion triggers.',
  bizP2Tail: ' We construct the platform strictly around your unique service workflow.',
  guaranteeTag: '03 / Our Promise to You',
  guaranteeTitle: 'When We Engineer Your Service Website...',
  guaranteeDesc: 'We treat your website as an automated inbound lead-generation machine, not a passive digital painting:',
  g1Title: 'Local SEO & Geo-Targeting Foundation',
  g1Desc: 'Engineered from the ground up to rank for neighborhood and city-level search queries across Google search and map packs.',
  g2Title: 'Genuine Mobile-First Usability',
  g2Desc: 'Since your buyers are on mobile, instant click-to-call, WhatsApp triggers, and booking forms are positioned with zero friction.',
  g3Title: 'Unrivaled Page Velocity',
  g3Desc: 'Instead of bloated site-builder themes, we deploy clean, lightweight code that loads in the blink of an eye.',
  finalTag: '04 / Next Step',
  finalTitlePre: 'Ready to Make Your Business Phone Ring ',
  finalTitleAccent: 'More Frequently?',
  finalDescPre: 'Now that you understand the crucial role of a dedicated service platform, we invite you to ',
  finalDescBold: 'explore our live demo',
  finalDescTail: ' to experience our interaction standards. Then reach out for a consultation tailored to your exact business.',
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
  <div :dir="isRtl ? 'rtl' : 'ltr'" class="min-h-screen bg-[#050605] text-slate-200 selection:bg-[#10b981]/30 selection:text-white" :class="isRtl ? 'font-[\'Vazirmatn\']' : 'font-sans'">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#050605]/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#10b981]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in copy.sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none; cursor: pointer;">{{ item.label }}</button>
        </div>
        <div class="flex items-center gap-3">
          <button @click="toggleLang" class="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:bg-white/10 hover:text-white" :aria-label="locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'">
            {{ locale === 'fa' ? 'EN' : 'FA' }}
          </button>
          <NuxtLink to="/services/demos/local-service" class="rounded-lg bg-[#10b981] px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-emerald-400 shadow-lg shadow-[#10b981]/20">{{ copy.viewDemo }}</NuxtLink>
        </div>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-2 text-sm font-bold text-[#10b981]">
              {{ copy.heroBadge }}
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4rem] text-white">
              {{ copy.heroTitlePrefix }} <br>
              <span class="text-[#10b981]">{{ copy.heroTitleAccent }}</span>
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              {{ copy.heroP1 }}<mark class="highlight-text font-bold text-light bg-[#10b981]/30 rounded-md px-1 py-0.5 text-white">{{ copy.heroHighlight }}</mark>{{ copy.heroP2 }}
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('advice')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200 shadow-xl shadow-white/10">{{ copy.heroCtaPrimary }}</button>
              <NuxtLink to="/services/demos/local-service" class="rounded-xl border border-white/20 bg-black/50 px-8 py-4 text-base font-bold text-white transition hover:bg-slate-800 backdrop-blur-sm">{{ copy.heroCtaSecondary }}</NuxtLink>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#10b981]">01</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric1 }}</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">02</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric2 }}</span></div>
              <div class="px-6"><strong class="block text-3xl font-black text-slate-500">03</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric3 }}</span></div>
            </div>
          </div>
          
          <div class="anim-text relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0f0a] shadow-2xl shadow-[#10b981]/10 group">
            <iframe src="/services/demos/local-service" class="w-full h-[500px] lg:h-[600px] border-0 bg-black pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"></iframe>
            <div class="absolute inset-0 bg-gradient-to-t from-[#050605] via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </div>
        </div>
      </section>

      <!-- Why Section -->
      <section id="why" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6">
          <div class="anim-text mb-12 text-center">
            <span class="inline-block rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#10b981]">{{ copy.whyTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.whyTitle }}</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              {{ copy.whyP1Pre }}
              <mark class="highlight-text font-bold text-light bg-[#10b981]/30 rounded-md px-1.5 py-0.5 text-white">{{ copy.whyP1H }}</mark>
            </p>
            <p>
              {{ copy.whyP2 }}
            </p>
          </div>
        </div>
      </section>

      <!-- Advisory Section -->
      <section id="advice" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5 bg-[#0a0a05]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center mb-16">
            <span class="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-black tracking-widest text-amber-500">{{ copy.adviceTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.adviceTitle }}</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              {{ copy.adviceSubtitle }}
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-3">
            <article class="anim-text group rounded-[24px] border border-amber-900/30 bg-[#050605] p-8 transition hover:border-amber-500/40">
              <h3 class="text-xl font-black text-amber-400 mb-4 flex items-center gap-3">
                {{ copy.a1Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a1Desc }}</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-amber-900/30 bg-[#050605] p-8 transition hover:border-amber-500/40">
              <h3 class="text-xl font-black text-amber-400 mb-4 flex items-center gap-3">
                {{ copy.a2Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a2Desc }}</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-amber-900/30 bg-[#050605] p-8 transition hover:border-amber-500/40">
              <h3 class="text-xl font-black text-amber-400 mb-4 flex items-center gap-3">
                {{ copy.a3Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a3Desc }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Business Warning / Template Disclaimer -->
      <section id="business" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-[#10b981]/20 bg-gradient-to-b from-[#10b981]/10 to-[#050605]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            <!-- Warning Card -->
            <div class="anim-text relative rounded-[24px] border border-[#10b981]/40 bg-black/80 backdrop-blur-xl p-10 shadow-2xl shadow-[#10b981]/10">
              <div class="text-sm font-black text-[#10b981] mb-6 tracking-widest uppercase flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                {{ copy.bizBadge }}
              </div>
              <p class="text-3xl sm:text-4xl font-black leading-tight text-white mb-8">
                {{ copy.bizTitlePre }} <br>
                <span class="text-[#10b981]">{{ copy.bizTitleAccent }}</span>
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-lg leading-8 text-slate-300">
                {{ copy.bizP1 }}
                <br><br>
                {{ copy.bizP2Pre }}
                <mark class="highlight-text font-bold text-light bg-[#10b981]/30 rounded-md px-1.5 py-0.5 mt-2 inline-block text-white">{{ copy.bizP2H }}</mark>
                {{ copy.bizP2Tail }}
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
                  <div class="mt-1 bg-[#10b981]/20 p-3 rounded-xl text-[#10b981]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-xl">{{ copy.g1Title }}</h4>
                    <p class="text-slate-400 mt-2 leading-7">{{ copy.g1Desc }}</p>
                  </div>
                </li>
                <li class="flex items-start gap-5">
                  <div class="mt-1 bg-[#10b981]/20 p-3 rounded-xl text-[#10b981]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-xl">{{ copy.g2Title }}</h4>
                    <p class="text-slate-400 mt-2 leading-7">{{ copy.g2Desc }}</p>
                  </div>
                </li>
                <li class="flex items-start gap-5">
                  <div class="mt-1 bg-[#10b981]/20 p-3 rounded-xl text-[#10b981]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
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
          <span class="anim-text inline-block rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#10b981]">{{ copy.finalTag }}</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            {{ copy.finalTitlePre }}
            <span class="text-[#10b981]">{{ copy.finalTitleAccent }}</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            {{ copy.finalDescPre }}
            <strong class="text-white">{{ copy.finalDescBold }}</strong> 
            {{ copy.finalDescTail }}
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services/demos/local-service" class="flex items-center justify-center gap-2 rounded-xl bg-[#10b981] px-10 py-4 text-lg font-black text-black transition-all hover:bg-emerald-400 shadow-lg shadow-[#10b981]/30">
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
