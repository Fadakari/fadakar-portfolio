<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocale } from '~/composables/useLocale'

const { locale, setLocale, isRtl } = useLocale()

const copy = computed(() => locale.value === 'fa' ? {
  seoTitle: 'طراحی سایت رستوران و کافه | FADAKAR',
  seoDesc: 'طراحی سایت اختصاصی رستوران و کافه؛ از منوی دیجیتال هوشمند تا سیستم رزرو و سفارش بدون کمیسیون.',
  sections: [
    { id: 'why', label: 'چرا سایت رستوران؟' },
    { id: 'advice', label: 'توصیه‌های دوستانه' },
    { id: 'solutions', label: 'راه‌حل‌های اختصاصی' },
    { id: 'business', label: 'این فقط یک دمو است' },
    { id: 'final', label: 'قدم بعدی' }
  ],
  viewDemo: 'مشاهده دمو',
  heroBadge: 'درباره طراحی سایت رستوران و کافه',
  heroTitlePrefix: 'قبل از اینکه طعم غذای شما را بچشند،',
  heroTitleAccent: 'سایت شما را می‌بینند.',
  heroP1: 'اینستاگرام برای نشان دادن فضای رستوران عالی است، اما برای سفارش دادن، دیدن منوی کامل و رزرو میز، کاربر را خسته می‌کند. ',
  heroHighlight: 'سایت شما در واقع میزبان دیجیتال شماست.',
  heroP2: ' همانطور که میزهایتان را با دقت می‌چینید، تجربه دیجیتال مشتری هم باید بی‌نقص و اشتها‌آور باشد!',
  heroCtaPrimary: 'مشکلات شما را چگونه حل می‌کنیم؟',
  heroCtaSecondary: 'دیدن نمونه دمو',
  metric1: 'سفارش مستقیم',
  metric2: 'منوی هوشمند',
  metric3: 'رزرو آنلاین',
  whyTag: '01 / ارزش واقعی',
  whyTitle: 'آیا پیج اینستاگرام کافی نیست؟',
  whyP1Pre: 'مشتری گرسنه‌ای که می‌خواهد سریعاً سفارش دهد یا کسی که می‌خواهد برای فردا شب یک میز دو نفره رزرو کند، نمی‌تواند منتظر جواب دایرکت اینستاگرام بماند. ',
  whyP1H: 'هر ثانیه تأخیر در پاسخگویی، یعنی هدایت مشتری به سمت رستوران رقیب.',
  whyP2: 'سایت شما یک کارمند خستگی‌ناپذیر است؛ منو را با جزئیات کامل و مواد اولیه نشان می‌دهد، سفارش‌ها و پرداخت‌ها را ثبت می‌کند و وقت پرسنل شما را آزاد می‌کند تا به جای پاسخ دادن به تلفن‌ها (آدرس کجاست؟ تا ساعت چند باز هستید؟)، روی کیفیت پذیرایی حضوری تمرکز کنند.',
  adviceTag: '02 / یک مشاوره دوستانه',
  adviceTitle: 'تله‌های رایج در دنیای کافه و رستوران',
  adviceSubtitle: 'توصیه می‌کنیم پیش از اینکه برای هر زیرساخت دیجیتالی هزینه کنید، مراقب این سه اشتباه که بودجه شما را هدر می‌دهند، باشید:',
  a1Title: '۱. منوهای PDF عذاب‌آور',
  a1Desc: 'استفاده از فایل‌های PDF سنگین یا عکسِ منو روی سایت، بدترین تجربه برای مشتری است. کاربر مجبور است روی صفحه کوچک موبایل زوم کند تا قیمت‌ها را بخواند. منو باید هوشمند، قابل جستجو و دارای فیلتر (مثلا غذاهای تند، رژیمی) باشد.',
  a2Title: '۲. پرداخت کمیسیون‌های سنگین',
  a2Desc: 'همکاری با اپلیکیشن‌های واسطه (مثل اسنپ‌فود) برای جذب مشتری جدید خوب است؛ اما چرا مشتریان وفادار و همیشگی شما باید از طریق آن‌ها سفارش دهند تا شما ۱۵٪ کمیسیون بدهید؟ سایت شما، سیستم سفارش مستقیم و بدون واسطه شماست.',
  a3Title: '۳. تضاد کیفیت غذا با ظاهر سایت',
  a3Desc: 'اگر شما یک رستوران لوکس با استیک‌های باکیفیت هستید، سایت شما نباید شبیه یک فست‌فود ارزان‌قیمت باشد. ظاهر سایتِ آماده و نامرتبط، ارزش برند شما و پولی که برای دیزاین فضای رستوران خرج کرده‌اید را زیر سوال می‌برد.',
  solTag: '03 / طراحی راه‌حل',
  solTitle: 'ما فقط کد نمی‌نویسیم؛ گره‌های کار شما را باز می‌کنیم!',
  solSubtitlePre: 'ما پیش از شروع کار، فرآیند کاری رستوران شما را آنالیز می‌کنیم تا به جای یک سایت نمایشی، ',
  solSubtitleBold: 'راه‌حل‌هایی به شما پیشنهاد دهیم که کارتان را راحت‌تر کند:',
  c1Title: 'اگر همیشه صف دارید...',
  c1Desc: 'برایتان سیستم نوبت‌دهی آنلاین یا رزرو میز با تقویم هوشمند می‌سازیم تا جلوی درب شلوغ نشود.',
  c2Title: 'اگر دلیوری بالایی دارید...',
  c2Desc: 'سیستم سفارش مستقیم با قابلیت پیگیری وضعیت ارسال می‌سازیم تا کمیسیون واسطه‌ها را حذف کنید.',
  c3Title: 'اگر کافه شلوغی هستید...',
  c3Desc: 'یک QR-Code هوشمند روی میزها قرار می‌دهیم که به جای عکس، منوی زنده و فیلتردار سایت را باز کند.',
  c4Title: 'اگر مشتری ثابت زیاد دارید...',
  c4Desc: 'باشگاه مشتریان اختصاصی پیاده می‌کنیم تا با کدهای تخفیف خودکار روی سایت، آن‌ها را به سفارش مجدد ترغیب کنید.',
  bizBadge: 'پیش از دیدن دمو بدانید',
  bizTitlePre: '«این دمو فقط یک نمونه است؛',
  bizTitleAccent: 'شخصیت کافه شما فرق می‌کند!»',
  bizP1: 'دمویی که طراحی کرده‌ایم، صرفاً یک مثال فنی از امکاناتی مثل فیلترهای سریع (تند، گیاهی، اقتصادی) و استایل‌های مدرن است.',
  bizP2H: 'یک سفره‌خانه سنتی با یک کافه‌ی مدرنِ موج سوم یا یک فست‌فود بیرون‌بر، از نظر بصری کاملاً متفاوت هستند.',
  bizP2Tail: ' ما سایت را متناسب با هویت برند، رنگ‌ها و اتمسفر رستوران خود شما دیزاین می‌کنیم.',
  qualityTitle: 'کیفیت سایت، مانند کیفیت مواد اولیه است.',
  qualityDesc: 'همانطور که شما برای پخت یک غذای عالی از مواد اولیه بی‌کیفیت استفاده نمی‌کنید، ما هم برای ساخت پلتفرم فروش شما از قالب‌های سنگین آماده استفاده نمی‌کنیم. کدنویسی اختصاصیِ ما یعنی:',
  q1Bold: 'بارگذاری آنی منو',
  q1Tail: ' روی ضعیف‌ترین موبایل‌ها و اینترنت‌ها.',
  q2Bold: 'پنل مدیریت بسیار ساده',
  q2Tail: ' برای ادمین، تا بتواند قیمت‌ها را در کسری از ثانیه آپدیت کند یا موجودی یک غذا را صفر کند.',
  q3Bold: 'سئوی تکنیکال',
  q3Tail: ' برای اینکه در گوگلِ شهر خودتان دیده شوید.',
  finalTag: '04 / قدم بعدی',
  finalTitlePre: 'آماده‌اید طعم یک تجربه دیجیتال لوکس را ',
  finalTitleAccent: 'به مشتریان بچشانید؟',
  finalDescPre: 'پلتفرم رستوران شما می‌تواند بزرگترین شعبه‌ی شما باشد. ',
  finalDescBold: 'از دموی هوشمند رستوران و کافه دیدن کنید',
  finalDescTail: ' تا ببینید جستجوی سریع و تجربه کاربری چقدر در حس کاربر تفاوت ایجاد می‌کند. سپس منوی خود را به ما بسپارید.',
  finalDemoBtn: 'ورود به صفحه دمو',
  finalBackBtn: 'بازگشت به خدمات'
} : {
  seoTitle: 'Restaurant & Cafe Website Design | FADAKAR',
  seoDesc: 'Bespoke restaurant and cafe web design; interactive digital menus, commission-free online ordering, and table reservation systems.',
  sections: [
    { id: 'why', label: 'Why Restaurant Web?' },
    { id: 'advice', label: 'Industry Advisory' },
    { id: 'solutions', label: 'Bespoke Solutions' },
    { id: 'business', label: 'Beyond The Demo' },
    { id: 'final', label: 'Next Step' }
  ],
  viewDemo: 'View Demo',
  heroBadge: 'Restaurant & Culinary Digital Experience',
  heroTitlePrefix: 'Before They Taste Your Cuisine,',
  heroTitleAccent: 'They Experience Your Website.',
  heroP1: 'Instagram is great for ambiance photos, but when hungry customers want to order, inspect ingredients, or book a table, social DMs introduce friction. ',
  heroHighlight: 'Your website is your direct digital maître d’.',
  heroP2: ' Just as you arrange dining tables with care, your customer’s digital interaction should be appetizing, fast, and frictionless.',
  heroCtaPrimary: 'How We Solve Your Bottlenecks',
  heroCtaSecondary: 'Explore Live Demo',
  metric1: 'Direct Orders',
  metric2: 'Smart Menus',
  metric3: 'Online Booking',
  whyTag: '01 / Real Value',
  whyTitle: 'Isn’t an Instagram Page Enough?',
  whyP1Pre: 'A hungry customer wanting to place a quick dinner order or reserve an intimate table for tomorrow night cannot wait hours for a social DM reply. ',
  whyP1H: 'Every second of delay simply redirects them to a competing restaurant.',
  whyP2: 'Your website acts as a tireless, 24/7 digital team member: presenting ingredients and pricing, recording reservations, and freeing your in-house staff from repetitive phone calls ("Where are you located? What time do you close?") so they can focus on guest hospitality.',
  adviceTag: '02 / A Friendly Advisory',
  adviceTitle: 'Common Traps in the Culinary & Cafe World',
  adviceSubtitle: 'Before investing in digital infrastructure, protect your budget from these three frequent mistakes:',
  a1Title: '1. Painful PDF Menus',
  a1Desc: 'Uploading blurry images or heavy PDF files is a frustrating barrier on mobile. Pinch-to-zoom is an immediate turnoff. Digital menus must be responsive, searchable, and filtered by preferences (spicy, vegan, gluten-free).',
  a2Title: '2. Heavy Third-Party Commissions',
  a2Desc: 'Aggregator delivery apps are useful for discovery; but why should your most loyal patrons order through third parties and cost you 15-20% commission on every dish? Your proprietary website is your commission-free direct sales channel.',
  a3Title: '3. Cheap Visuals Undermining Premium Food',
  a3Desc: 'If you serve hand-crafted dishes with premium ingredients, a generic, amateur site tarnishes your culinary authority and diminishes the investment you made in your interior design.',
  solTag: '03 / Bespoke Solutions',
  solTitle: 'We Don’t Just Write Code; We Unblock Operational Bottlenecks!',
  solSubtitlePre: 'Before designing a single screen, we analyze your kitchen and front-of-house workflow to ',
  solSubtitleBold: 'propose solutions that make daily management easier:',
  c1Title: 'If you constantly have queues outside...',
  c1Desc: 'We build smart online waitlists and reservation calendars with SMS confirmations to prevent crowded door bottlenecks.',
  c2Title: 'If you have high delivery volume...',
  c2Desc: 'We deploy direct online ordering with live delivery status to eliminate commission fees from middleman platforms.',
  c3Title: 'If you operate a bustling cafe...',
  c3Desc: 'We implement interactive tabletop QR codes that open dynamic, searchable web menus with instant allergen and dietary filters.',
  c4Title: 'If you have many repeat guests...',
  c4Desc: 'We integrate automated loyalty programs and personalized coupon triggers on your site to incentivize recurring orders.',
  bizBadge: 'Before Exploring The Demo',
  bizTitlePre: '“This Demo is Purely an Example;',
  bizTitleAccent: 'Your Culinary Concept Possesses Its Own Identity.”',
  bizP1: 'The demo demonstrates fast filtering (spicy, vegan, value) and modern interaction design.',
  bizP2H: 'A traditional heritage tea house, an artisanal third-wave coffee roaster, and a fast-casual takeaway brand require radically different visual identities and guest flows.',
  bizP2Tail: ' We engineer the platform specifically to evoke your restaurant’s unique ambiance.',
  qualityTitle: 'Website Quality is Exactly Like Ingredient Quality.',
  qualityDesc: 'Just as an executive chef never uses substandard ingredients, we never rely on heavy, bloated templates. Bespoke software engineering ensures:',
  q1Bold: 'Instantaneous Menu Loading',
  q1Tail: ' on any smartphone or weak cellular connection.',
  q2Bold: 'An Intuitive Merchant Panel',
  q2Tail: ' allowing staff to adjust prices or mark items sold out in seconds.',
  q3Bold: 'Robust Technical SEO',
  q3Tail: ' to ensure you dominate Google search in your city and neighborhood.',
  finalTag: '04 / Next Step',
  finalTitlePre: 'Ready to Give Your Guests a Truly ',
  finalTitleAccent: 'Appetizing Digital Experience?',
  finalDescPre: 'Your online platform can become your highest-grossing dining room. ',
  finalDescBold: 'Explore the smart restaurant demo',
  finalDescTail: ' to feel how responsive UX elevates culinary appreciation. Then let’s digitize your menu.',
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
  <div :dir="isRtl ? 'rtl' : 'ltr'" class="min-h-screen bg-[#070505] text-slate-200 selection:bg-[#f97316]/30 selection:text-white" :class="isRtl ? 'font-[\'Vazirmatn\']' : 'font-sans'">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#070505]/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#f97316]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in copy.sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none; cursor: pointer;">{{ item.label }}</button>
        </div>
        <div class="flex items-center gap-3">
          <button @click="toggleLang" class="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:bg-white/10 hover:text-white" :aria-label="locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'">
            {{ locale === 'fa' ? 'EN' : 'FA' }}
          </button>
          <NuxtLink to="/services/demos/restaurant-cafe" class="rounded-lg bg-[#f97316] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-orange-500 shadow-lg shadow-[#f97316]/20">{{ copy.viewDemo }}</NuxtLink>
        </div>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border-[#f97316]/30 bg-[#f97316]/10 px-4 py-2 text-sm font-bold text-[#f97316] border">
              {{ copy.heroBadge }}
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4rem] text-white">
              {{ copy.heroTitlePrefix }} <br>
              <span class="text-[#f97316]">{{ copy.heroTitleAccent }}</span>
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              {{ copy.heroP1 }}<mark class="highlight-text font-bold text-light bg-[#f97316]/30 rounded-md px-1 py-0.5 text-white">{{ copy.heroHighlight }}</mark>{{ copy.heroP2 }}
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('solutions')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200 shadow-xl shadow-white/10">{{ copy.heroCtaPrimary }}</button>
              <NuxtLink to="/services/demos/restaurant-cafe" class="rounded-xl border border-white/20 bg-black/50 px-8 py-4 text-base font-bold text-white transition hover:bg-slate-800 backdrop-blur-sm">{{ copy.heroCtaSecondary }}</NuxtLink>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#f97316]">01</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric1 }}</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">02</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric2 }}</span></div>
              <div class="px-6"><strong class="block text-3xl font-black text-slate-500">03</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric3 }}</span></div>
            </div>
          </div>
          
          <div class="anim-text relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0f0a0a] shadow-2xl shadow-[#f97316]/10 group">
            <iframe src="/services/demos/restaurant-cafe" class="w-full h-[500px] lg:h-[600px] border-0 bg-black pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"></iframe>
            <div class="absolute inset-0 bg-gradient-to-t from-[#070505] via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </div>
        </div>
      </section>

      <!-- Why Section -->
      <section id="why" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6">
          <div class="anim-text mb-12 text-center">
            <span class="inline-block rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#f97316]">{{ copy.whyTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.whyTitle }}</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              {{ copy.whyP1Pre }}
              <mark class="highlight-text font-bold text-light bg-[#f97316]/30 rounded-md px-1.5 py-0.5 text-white">{{ copy.whyP1H }}</mark>
            </p>
            <p>
              {{ copy.whyP2 }}
            </p>
          </div>
        </div>
      </section>

      <!-- Advisory Section -->
      <section id="advice" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5 bg-[#0a0605]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center mb-16">
            <span class="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-black tracking-widest text-amber-500">{{ copy.adviceTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.adviceTitle }}</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              {{ copy.adviceSubtitle }}
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-3">
            <article class="anim-text group rounded-[24px] border border-amber-900/30 bg-[#070505] p-8 transition hover:border-amber-500/40">
              <h3 class="text-xl font-black text-amber-400 mb-4 flex items-center gap-3">
                {{ copy.a1Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a1Desc }}</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-amber-900/30 bg-[#070505] p-8 transition hover:border-amber-500/40">
              <h3 class="text-xl font-black text-amber-400 mb-4 flex items-center gap-3">
                {{ copy.a2Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a2Desc }}</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-amber-900/30 bg-[#070505] p-8 transition hover:border-amber-500/40">
              <h3 class="text-xl font-black text-amber-400 mb-4 flex items-center gap-3">
                {{ copy.a3Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a3Desc }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Solutions Section -->
      <section id="solutions" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-[#f97316]/20 bg-gradient-to-b from-[#f97316]/10 to-[#070505]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text mb-16 max-w-3xl">
            <span class="inline-block rounded-full border border-white/10 bg-[#1e293b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">{{ copy.solTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.solTitle }}</h2>
            <p class="mt-6 text-lg leading-9 text-slate-300">
              {{ copy.solSubtitlePre }}<strong>{{ copy.solSubtitleBold }}</strong>
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl">
              <div class="text-[#f97316] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c1Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c1Desc }}</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl">
              <div class="text-[#f97316] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c2Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c2Desc }}</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl">
              <div class="text-[#f97316] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c3Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c3Desc }}</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl">
              <div class="text-[#f97316] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c4Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c4Desc }}</p>
            </div>
          </div>

          <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
            <!-- Warning Card -->
            <div id="business" class="anim-text relative rounded-[24px] border border-[#f97316]/40 bg-black/80 backdrop-blur-xl p-10 shadow-2xl shadow-[#f97316]/10">
              <div class="text-sm font-black text-[#f97316] mb-6 tracking-widest uppercase flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                {{ copy.bizBadge }}
              </div>
              <p class="text-3xl sm:text-4xl font-black leading-tight text-white mb-8">
                {{ copy.bizTitlePre }} <br>
                <span class="text-[#f97316]">{{ copy.bizTitleAccent }}</span>
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-lg leading-8 text-slate-300">
                {{ copy.bizP1 }}
                <br><br>
                <mark class="highlight-text font-bold text-light bg-[#f97316]/30 rounded-md px-1.5 py-0.5 mt-2 inline-block text-white">{{ copy.bizP2H }}</mark>
                {{ copy.bizP2Tail }}
              </p>
            </div>
            
            <div class="anim-text">
              <h2 class="text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.qualityTitle }}</h2>
              <p class="mt-8 text-lg leading-9 text-slate-300">
                {{ copy.qualityDesc }}
              </p>
              
              <ul class="mt-8 space-y-6">
                <li class="flex items-start gap-4 text-slate-300">
                  <svg class="w-6 h-6 text-[#f97316] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>{{ copy.q1Bold }}</strong>{{ copy.q1Tail }}</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <svg class="w-6 h-6 text-[#f97316] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>{{ copy.q2Bold }}</strong>{{ copy.q2Tail }}</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <svg class="w-6 h-6 text-[#f97316] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>{{ copy.q3Bold }}</strong>{{ copy.q3Tail }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Final Section -->
      <section id="final" class="scroll-mt-24 relative py-24 lg:py-40 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6 text-center">
          <span class="anim-text inline-block rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#f97316]">{{ copy.finalTag }}</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            {{ copy.finalTitlePre }}
            <span class="text-[#f97316]">{{ copy.finalTitleAccent }}</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            {{ copy.finalDescPre }}
            <strong class="text-white">{{ copy.finalDescBold }}</strong> 
            {{ copy.finalDescTail }}
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services/demos/restaurant-cafe" class="flex items-center justify-center gap-2 rounded-xl bg-[#f97316] px-10 py-4 text-lg font-black text-white transition-all hover:bg-orange-500 shadow-lg shadow-[#f97316]/30">
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
