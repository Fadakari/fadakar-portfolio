<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import yazdMobile from '../../../../public/assets/-2147483648_-210038.webp'
import { useLocale } from '~/composables/useLocale'

const { locale, setLocale, isRtl } = useLocale()

const copy = computed(() => locale.value === 'fa' ? {
  seoTitle: 'طراحی سایت فروشگاهی | FADAKAR',
  seoDesc: 'توضیحات کامل نمونه طراحی سایت فروشگاهی؛ از تجربه خرید و جست‌وجو تا ساختار قابل توسعه متناسب با کسب‌وکار.',
  sections: [
    { id: 'why', label: 'چرا سایت فروشگاهی؟' },
    { id: 'experience', label: 'تجربه‌ای که می‌سازیم' },
    { id: 'business', label: 'متناسب با کسب‌وکار' },
    { id: 'scope', label: 'قابلیت‌ها' },
    { id: 'real-project', label: 'نمونه واقعی' },
    { id: 'final', label: 'قدم بعدی' }
  ],
  features: [
    ['جست‌وجوی سریع', 'کاربر به‌جای گشتن میان صدها محصول، سریع‌تر به چیزی که می‌خواهد می‌رسد.'],
    ['دسته‌بندی و فیلتر', 'محصولات بر اساس ویژگی‌های واقعی فروشگاه مرتب می‌شوند؛ نه صرفاً چند دسته‌بندی نمایشی.'],
    ['صفحه محصول', 'تصویر، قیمت، ویژگی‌ها، موجودی، توضیحات و مسیر خرید در جای درست قرار می‌گیرند.'],
    ['سبد خرید و سفارش', 'فرآیند خرید تا حد ممکن کوتاه، واضح و بدون اصطکاک طراحی می‌شود.'],
    ['موبایل‌محور', 'بخش بزرگی از مشتریان از موبایل وارد می‌شوند؛ بنابراین تجربه موبایل یک نسخه کوچک‌شده دسکتاپ نیست.'],
    ['قابل توسعه', 'اگر بعدها امکانات بیشتری لازم شود، ساختار سایت نباید شما را مجبور به بازسازی از صفر کند.']
  ],
  capabilities: [
    'درگاه پرداخت و سفارش آنلاین',
    'مدیریت موجودی و قیمت',
    'کد تخفیف و کمپین فروش',
    'حساب کاربری و پیگیری سفارش',
    'فیلترهای پیشرفته و مقایسه',
    'اتصال به سرویس‌ها و APIها',
    'پنل مدیریت اختصاصی',
    'سئو و صفحات هدفمند',
    'گزارش‌گیری و تحلیل رفتار'
  ],
  viewDemo: 'مشاهده دمو',
  heroBadge: 'نمونه‌ای از طراحی فروشگاه اینترنتی',
  heroTitlePrefix: 'فروشگاه اینترنتی فقط یک ',
  heroTitleAccent: 'ویترین آنلاین',
  heroTitleSuffix: ' نیست.',
  heroP1: 'سایت فروشگاهی خوب باید کاری کند که ',
  heroH1: 'مشتری راحت‌تر محصول مناسب را پیدا کند',
  heroP2: '، ',
  heroH2: 'با اطمینان تصمیم بگیرد',
  heroP3: ' و ',
  heroP4Bold: 'بدون سردرگمی خریدش را کامل کند',
  heroP5: '. ظاهر زیبا فقط شروع ماجراست.',
  heroCtaPrimary: 'اول این بخش را بخوانید',
  heroCtaSecondary: 'دیدن نمونه واقعی',
  metric1: 'شناخت کسب‌وکار',
  metric2: 'طراحی تجربه',
  metric3: 'توسعه و رشد',
  whyTag: '01 / مسئله واقعی',
  whyTitle: 'چرا یک فروشگاه به سایت نیاز دارد؟',
  whyP1: 'اگر مشتری برای دیدن محصولات، قیمت، موجودی یا راه ارتباطی با شما مجبور باشد هر بار در شبکه‌های اجتماعی جست‌وجو کند، بخشی از مسیر خرید را خودتان سخت کرده‌اید. ',
  whyP1H: 'سایت فروشگاهی یک محل دائمی و قابل جست‌وجو برای کسب‌وکار شماست',
  whyP1Tail: '؛ جایی که مشتری می‌تواند هر زمان که خواست، اطلاعات را منظم و کامل ببیند.',
  whyP2Pre: 'اما هدف ما این نیست که صرفاً یک کاتالوگ آنلاین تحویل شما بدهیم. ',
  whyP2Bold: 'ساختار فروشگاه باید با رفتار مشتریان شما هماهنگ باشد.',
  whyP2Tail: ' فروشگاه پوشاک، طلافروشی، لوازم دیجیتال، مواد غذایی و فروشگاه تخصصی هرکدام منطق متفاوتی برای معرفی و انتخاب محصول دارند.',
  whyBoxPre: 'به همین دلیل، قبل از اینکه درباره رنگ، انیمیشن یا تکنولوژی صحبت کنیم، باید بفهمیم ',
  whyBoxAccent: 'مشتری شما چه چیزی می‌خواهد',
  whyBoxTail: '، چگونه انتخاب می‌کند و کجا ممکن است از خرید منصرف شود.',
  expTag: '02 / تجربه خرید',
  expTitle: 'کاربر نباید برای خرید با سایت بجنگد.',
  expSubtitleH: 'هر جزء صفحه باید یک دلیل داشته باشد',
  expSubtitleTail: ': کمک به پیدا کردن، مقایسه، اعتماد یا خرید.',
  bizTag: '03 / چیزی فراتر از دمو',
  bizTitle: 'قرار نیست سایت شما دقیقاً شبیه این باشد.',
  bizP1Pre: 'این صفحه و دمو فقط یک سؤال را جواب می‌دهند: ',
  bizP1Bold: '«سطح کاری که می‌توانید دریافت کنید چقدر است؟»',
  bizP2: 'در پروژه واقعی، ظاهر سایت از هویت برند، محصولات، مشتریان، مدل فروش و امکانات موردنیاز شما شروع می‌شود. اگر کسب‌وکار شما رسمی و سازمانی باشد، طراحی باید همان حس را منتقل کند؛ اگر جوان و پرانرژی باشد، زبان بصری می‌تواند کاملاً متفاوت باشد.',
  bizPrincipleTag: 'یک اصل مهم',
  bizPrincipleQuote: '«ما قالب را به کسب‌وکار شما تحمیل نمی‌کنیم؛ ',
  bizPrincipleAccent: 'سایت را بر اساس کسب‌وکار شما طراحی می‌کنیم.',
  bizPrincipleQuoteEnd: '»',
  bizPrincipleDescPre: 'ممکن است بعد از شناخت کسب‌وکار شما حتی پیشنهاد کنیم ',
  bizPrincipleDescBold: 'بعضی امکانات را اصلاً نسازیم',
  bizPrincipleDescMid: '؛ چون هزینه ایجاد می‌کنند اما ارزش واقعی ندارند. در مقابل، ممکن است ایده‌ای پیشنهاد کنیم که در نمونه اولیه وجود ندارد اما برای فروش شما بسیار مهم باشد.',
  scopeTag: '04 / قابلیت‌ها',
  scopeTitle: 'این‌ها فقط شروع کارند.',
  scopeSubtitlePre: 'بسته به پروژه، امکانات می‌توانند از ',
  scopeSubtitleBold: 'فروش ساده تا یک سیستم کامل مدیریت فروش و مشتری',
  scopeSubtitleTail: ' توسعه پیدا کنند.',
  scopeWarningTitle: 'اما همه این امکانات را نباید به همه فروشگاه‌ها اضافه کرد.',
  scopeWarningDescPre: 'یکی از تفاوت‌های طراحی اختصاصی با فروش یک قالب آماده همین است. ',
  scopeWarningDescH: 'ما امکانات را بر اساس نیاز واقعی اضافه می‌کنیم',
  scopeWarningDescTail: ' تا هم بودجه کنترل شود و هم سایت شلوغ و پیچیده نشود.',
  realTag: '05 / نمونه پروژه واقعی',
  realTitleMain: 'یزد موبایل؛',
  realTitleSub: 'فروشگاهی در مقیاس بزرگ',
  realDesc: 'این فقط یک طرح مفهومی نیست. یزد موبایل یک پلتفرم فروشگاهی کاملاً عملیاتی است که برای هندل کردن تراکنش‌های واقعی، موجودی انبار پیچیده و تجربه کاربری یکپارچه ساخته شده است.',
  realLi1Pre: 'ساخته شده با ',
  realLi1Bold: 'Next.js و React',
  realLi1Tail: ' برای سرعت بالا و سئوی قدرتمند.',
  realLi2: 'ساختار داده‌ای پیچیده و مدیریت موجودی دقیق.',
  realLi3: 'تجربه کاربری سیال (Smooth UX) مشابه اپلیکیشن‌های بومی.',
  realBtn: 'مشاهده سایت یزد موبایل',
  finalTag: '06 / قدم بعدی',
  finalTitlePre: 'اگر فکر می‌کنید کسب‌وکارتان جای یک سایت بهتر را دارد، ',
  finalTitleAccent: 'از همین‌جا شروع کنیم.',
  finalDescPre: 'لازم نیست از قبل دقیقاً بدانید چه امکاناتی می‌خواهید. ',
  finalDescBold: 'کافی است کسب‌وکارتان، محصولات یا خدماتتان و چیزی که از سایت انتظار دارید را توضیح دهید.',
  finalDescTail: ' ما بر اساس آن پیشنهاد می‌دهیم چه چیزی واقعاً لازم است و چه چیزهایی فقط هزینه اضافه هستند.',
  finalDemoBtn: 'مشاهده کامل دمو',
  finalBackBtn: 'بازگشت به خدمات'
} : {
  seoTitle: 'E-Commerce Website Development | FADAKAR',
  seoDesc: 'Bespoke e-commerce website development; engineered for seamless shopping journeys, custom workflows, and high-conversion architectures.',
  sections: [
    { id: 'why', label: 'Why E-Commerce?' },
    { id: 'experience', label: 'Shopping Experience' },
    { id: 'business', label: 'Tailored Model' },
    { id: 'scope', label: 'Capabilities' },
    { id: 'real-project', label: 'Real Case Study' },
    { id: 'final', label: 'Next Step' }
  ],
  features: [
    ['Instant Predictive Search', 'Shoppers locate exact items in milliseconds instead of wading through confusing menus.'],
    ['Intelligent Faceted Filtering', 'Catalogs are arranged around your actual product parameters, not rigid pre-made categories.'],
    ['High-Converting Product Pages', 'Clear imagery, specs, live availability, pricing tiers, and effortless checkout triggers.'],
    ['Frictionless Cart & Checkout', 'A minimal, distraction-free purchasing sequence designed to eliminate drop-offs.'],
    ['Mobile-First Commerce', 'Over 80% of buyers browse on handhelds; we engineer fluid, app-like mobile interfaces.'],
    ['Bespoke Scalability', 'When sales volume explodes, your codebase easily integrates with custom ERPs and warehouses.']
  ],
  capabilities: [
    'Direct Payment Gateways & Secure Checkout',
    'Real-Time Multi-Warehouse Inventory',
    'Dynamic Discount Engines & Promo Rules',
    'Customer Portals & Order Timeline',
    'Faceted Filters & Side-by-Side Compare',
    'Logistics, Invoicing & CRM Webhooks',
    'Bespoke Merchant Admin Workspace',
    'Programmatic SEO & High-Intent Landers',
    'Actionable Funnel & Retention Metrics'
  ],
  viewDemo: 'View Demo',
  heroBadge: 'Bespoke E-Commerce Architecture',
  heroTitlePrefix: 'An Online Store is Never Just a ',
  heroTitleAccent: 'Digital Showcase',
  heroTitleSuffix: '.',
  heroP1: 'A truly great e-commerce website ensures that ',
  heroH1: 'customers find the right product instantly',
  heroP2: ', ',
  heroH2: 'decide with confidence',
  heroP3: ', and ',
  heroP4Bold: 'complete purchases without friction',
  heroP5: '. Visual beauty is just the starting point.',
  heroCtaPrimary: 'Read Strategic Insights',
  heroCtaSecondary: 'Explore Live Demo',
  metric1: 'Business Discovery',
  metric2: 'Experience Design',
  metric3: 'Scalable Growth',
  whyTag: '01 / The Real Problem',
  whyTitle: 'Why Does a Modern Business Need a Dedicated Store?',
  whyP1: 'Forcing customers to message via social DMs for prices, sizes, or stock availability introduces unnecessary friction into their buying journey. ',
  whyP1H: 'An e-commerce storefront is your permanent, searchable commercial flagship',
  whyP1Tail: '—accessible 24/7 with immediate clarity on inventory and fulfillment.',
  whyP2Pre: 'Yet our goal is never simply handing you a passive catalog. ',
  whyP2Bold: 'Your store architecture must mirror how your customers actually evaluate value.',
  whyP2Tail: ' Fashion boutiques, fine jewelry, electronics, and specialty goods each demand fundamentally different conversion triggers.',
  whyBoxPre: 'Before discussing colors, animations, or software frameworks, we analyze ',
  whyBoxAccent: 'what your buyers demand',
  whyBoxTail: ', how they compare options, and where friction causes them to abandon carts.',
  expTag: '02 / Shopping Experience',
  expTitle: 'Shoppers Should Never Have to Fight the Interface to Buy.',
  expSubtitleH: 'Every pixel must have a purpose',
  expSubtitleTail: ': discovery, comparison, reassurance, or conversion.',
  bizTag: '03 / Beyond The Demo',
  bizTitle: 'Your Platform Will Not Be a Copy of This Demo.',
  bizP1Pre: 'This demo answers one fundamental question: ',
  bizP1Bold: '“What level of software craft and UX performance can you expect?”',
  bizP2: 'In an actual production project, everything originates from your brand identity, product margins, target audience, and fulfillment logic. An executive corporate store requires a vastly different design language than a youth streetwear brand.',
  bizPrincipleTag: 'Core Philosophy',
  bizPrincipleQuote: '“We never force an off-the-shelf template on your business; ',
  bizPrincipleAccent: 'we engineer the system to match your commercial model.',
  bizPrincipleQuoteEnd: '”',
  bizPrincipleDescPre: 'During discovery, we often advise ',
  bizPrincipleDescBold: 'against building complex unnecessary features',
  bizPrincipleDescMid: ' that generate costs without tangible returns. In contrast, we often introduce high-converting capabilities tailored specifically to your niche.',
  scopeTag: '04 / Capabilities',
  scopeTitle: 'These Are Just the Foundation.',
  scopeSubtitlePre: 'Depending on your business requirements, capabilities scale from ',
  scopeSubtitleBold: 'lean direct-to-consumer storefronts to full automated enterprise platforms',
  scopeSubtitleTail: '.',
  scopeWarningTitle: 'However, Not Every Store Needs Every Feature.',
  scopeWarningDescPre: 'This is the core distinction between bespoke software engineering and generic theme reselling. ',
  scopeWarningDescH: 'We integrate features strictly around real commercial ROI',
  scopeWarningDescTail: ' to protect your investment and preserve a clean, lightning-fast shopping journey.',
  realTag: '05 / Real-World Case Study',
  realTitleMain: 'Yazd Mobile;',
  realTitleSub: 'High-Volume E-Commerce Platform',
  realDesc: 'This is not a mock concept. Yazd Mobile is a high-traffic production e-commerce platform built to process thousands of transactions, handle complex inventory matrices, and deliver an app-like mobile experience.',
  realLi1Pre: 'Engineered with ',
  realLi1Bold: 'Next.js & React',
  realLi1Tail: ' for unmatched speed and dominant search visibility.',
  realLi2: 'Multi-variant data schemas and precise automated stock control.',
  realLi3: 'Fluid, app-like micro-interactions optimized for high-volume conversion.',
  realBtn: 'Visit Yazd Mobile Live',
  finalTag: '06 / Next Step',
  finalTitlePre: 'If your business deserves a superior online flagship, ',
  finalTitleAccent: 'let’s start right here.',
  finalDescPre: 'You don’t need an exhaustive technical roadmap beforehand. ',
  finalDescBold: 'Simply share your products, target market, and operational goals.',
  finalDescTail: ' We will determine exactly what infrastructure drives revenue and eliminate unnecessary development costs.',
  finalDemoBtn: 'Explore Full Demo',
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
  <div :dir="isRtl ? 'rtl' : 'ltr'" class="min-h-screen bg-black text-slate-200 selection:bg-[#38bdf8]/30 selection:text-white" :class="isRtl ? 'font-[\'Vazirmatn\']' : 'font-sans'">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#38bdf8]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in copy.sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none; cursor: pointer;">{{ item.label }}</button>
        </div>
        <div class="flex items-center gap-3">
          <button @click="toggleLang" class="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:bg-white/10 hover:text-white" :aria-label="locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'">
            {{ locale === 'fa' ? 'EN' : 'FA' }}
          </button>
          <NuxtLink to="/services/demos/ecommerce" class="rounded-lg bg-[#38bdf8] px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-sky-300">{{ copy.viewDemo }}</NuxtLink>
        </div>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-2 text-sm font-bold text-[#38bdf8]">
              {{ copy.heroBadge }}
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4rem] text-white">
              {{ copy.heroTitlePrefix }}
              <span class="text-[#38bdf8]">{{ copy.heroTitleAccent }}</span>{{ copy.heroTitleSuffix }}
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              {{ copy.heroP1 }}
              <mark class="highlight-text font-bold text-light bg-[#5D00BD50] rounded-md px-1 py-0.5">{{ copy.heroH1 }}</mark>{{ copy.heroP2 }}
              <mark class="highlight-text font-bold text-light bg-[#5D00BD50] rounded-md px-1 py-0.5">{{ copy.heroH2 }}</mark>{{ copy.heroP3 }}
              <span class="font-bold text-white">{{ copy.heroP4Bold }}</span>{{ copy.heroP5 }}
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('why')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200">{{ copy.heroCtaPrimary }}</button>
              <NuxtLink to="/services/demos/ecommerce" class="rounded-xl border border-white/20 bg-[#1e293b] px-8 py-4 text-base font-bold text-white transition hover:bg-slate-700">{{ copy.heroCtaSecondary }}</NuxtLink>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#38bdf8]">01</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric1 }}</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">02</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric2 }}</span></div>
              <div class="px-6"><strong class="block text-3xl font-black text-slate-500">03</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric3 }}</span></div>
            </div>
          </div>
          
          <div class="anim-text relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1e293b] shadow-2xl">
            <iframe src="/services/demos/ecommerce" class="w-full h-[500px] lg:h-[600px] border-0 bg-[#1e293b]"></iframe>
          </div>
        </div>
      </section>

      <!-- Why Section -->
      <section id="why" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6">
          <div class="anim-text mb-12 text-center">
            <span class="inline-block rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#38bdf8]">{{ copy.whyTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.whyTitle }}</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              {{ copy.whyP1 }}
              <mark class="highlight-text font-bold text-light bg-[#5D00BD50] rounded-md px-1.5 py-0.5">{{ copy.whyP1H }}</mark>{{ copy.whyP1Tail }}
            </p>
            <p>
              {{ copy.whyP2Pre }}
              <strong class="text-white text-xl">{{ copy.whyP2Bold }}</strong> 
              {{ copy.whyP2Tail }}
            </p>
            
            <div class="relative mt-12 rounded-[24px] border border-[#38bdf8]/20 bg-[#1e293b] p-8 shadow-lg">
              <p class="text-xl font-bold leading-9 text-white">
                {{ copy.whyBoxPre }}<span class="text-[#38bdf8]">{{ copy.whyBoxAccent }}</span>{{ copy.whyBoxTail }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section id="experience" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid gap-16 lg:grid-cols-[1fr_1.5fr]">
            <div class="anim-text lg:sticky lg:top-32 lg:self-start">
              <span class="inline-block rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#38bdf8]">{{ copy.expTag }}</span>
              <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.expTitle }}</h2>
              <p class="mt-6 text-lg leading-8 text-slate-400">
                <mark class="highlight-text font-bold text-light bg-[#5D00BD50] rounded-md px-1 py-0.5">{{ copy.expSubtitleH }}</mark>{{ copy.expSubtitleTail }}
              </p>
            </div>
            
            <div class="grid gap-4 sm:grid-cols-2">
              <article v-for="(feature, i) in copy.features" :key="feature[0]" class="anim-text group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1e293b] p-8 transition-all hover:bg-slate-800 hover:border-white/20">
                <div class="absolute -right-4 -top-4 text-8xl font-black text-white/5 transition-transform group-hover:scale-110">0{{ i + 1 }}</div>
                <div class="relative z-10">
                  <h3 class="text-xl font-black text-white mb-4">{{ feature[0] }}</h3>
                  <p class="text-base leading-7 text-slate-400 group-hover:text-slate-300 transition-colors">{{ feature[1] }}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- Business Section -->
      <section id="business" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-white/5 bg-black">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div class="anim-text">
              <span class="inline-block rounded-full border border-white/10 bg-[#1e293b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">{{ copy.bizTag }}</span>
              <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.bizTitle }}</h2>
              <p class="mt-8 text-lg leading-9 text-slate-300">
                {{ copy.bizP1Pre }}<strong class="text-white text-xl">{{ copy.bizP1Bold }}</strong>
              </p>
              <p class="mt-6 text-lg leading-9 text-slate-300">
                {{ copy.bizP2 }}
              </p>
            </div>
            
            <div class="anim-text relative rounded-[24px] border border-[#38bdf8]/20 bg-[#1e293b] p-10 shadow-2xl">
              <div class="text-sm font-black text-[#38bdf8] mb-6 tracking-widest uppercase">{{ copy.bizPrincipleTag }}</div>
              <p class="text-3xl font-black leading-tight text-white mb-8">
                {{ copy.bizPrincipleQuote }}
                <span class="text-[#38bdf8]">{{ copy.bizPrincipleAccent }}</span>{{ copy.bizPrincipleQuoteEnd }}
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-base leading-8 text-slate-300">
                {{ copy.bizPrincipleDescPre }}<strong class="text-white">{{ copy.bizPrincipleDescBold }}</strong>{{ copy.bizPrincipleDescMid }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Scope Section -->
      <section id="scope" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center">
            <span class="inline-block rounded-full border border-white/10 bg-[#1e293b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">{{ copy.scopeTag }}</span>
            <h2 class="mt-6 text-4xl font-black sm:text-5xl text-white">{{ copy.scopeTitle }}</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              {{ copy.scopeSubtitlePre }}
              <strong class="text-white">{{ copy.scopeSubtitleBold }}</strong> 
              {{ copy.scopeSubtitleTail }}
            </p>
          </div>
          
          <div class="anim-text mt-16 grid gap-4 md:grid-cols-3">
            <div v-for="item in copy.capabilities" :key="item" class="flex items-center justify-center text-center rounded-[20px] border border-white/10 bg-[#1e293b] p-6 text-base font-bold text-slate-200 transition-colors hover:bg-slate-800">
              {{ item }}
            </div>
          </div>
          
          <div class="anim-text mt-16 relative overflow-hidden rounded-[24px] bg-[#1e293b] p-10 sm:p-16 border border-[#38bdf8]/20 text-center">
            <div class="relative z-10 max-w-4xl mx-auto">
              <h3 class="text-3xl font-black text-white leading-tight">{{ copy.scopeWarningTitle }}</h3>
              <p class="mt-6 text-lg leading-9 text-slate-300">
                {{ copy.scopeWarningDescPre }}
                <mark class="highlight-text font-bold text-light bg-[#5D00BD50] rounded-md px-1.5 py-0.5">{{ copy.scopeWarningDescH }}</mark> 
                {{ copy.scopeWarningDescTail }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Real Project Section -->
      <section id="real-project" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5 bg-[#0a0f18]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div class="anim-text relative group overflow-hidden rounded-[24px] border border-white/10 shadow-2xl">
              <img :src="yazdMobile" alt="Yazd Mobile E-commerce" class="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0a0f18] via-transparent to-transparent opacity-80"></div>
              
              <div class="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                <span v-for="tag in ['React', 'Next.js', 'TypeScript', 'Tailwind']" :key="tag" class="bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="anim-text">
              <span class="inline-block rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#38bdf8]">{{ copy.realTag }}</span>
              <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">
                {{ copy.realTitleMain }} <br />
                <span class="text-slate-400 text-3xl">{{ copy.realTitleSub }}</span>
              </h2>
              <p class="mt-8 text-lg leading-9 text-slate-300">
                {{ copy.realDesc }}
              </p>
              
              <ul class="mt-8 space-y-4">
                <li class="flex items-start gap-3 text-slate-300">
                  <svg class="w-6 h-6 text-[#38bdf8] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ copy.realLi1Pre }}<strong class="text-white">{{ copy.realLi1Bold }}</strong>{{ copy.realLi1Tail }}</span>
                </li>
                <li class="flex items-start gap-3 text-slate-300">
                  <svg class="w-6 h-6 text-[#38bdf8] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ copy.realLi2 }}</span>
                </li>
                <li class="flex items-start gap-3 text-slate-300">
                  <svg class="w-6 h-6 text-[#38bdf8] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{{ copy.realLi3 }}</span>
                </li>
              </ul>
              
              <div class="mt-12">
                <a href="https://yazd-mobile.ir" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1e293b] border border-[#38bdf8]/30 px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#38bdf8] hover:text-black hover:border-[#38bdf8]">
                  {{ copy.realBtn }}
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final Section -->
      <section id="final" class="scroll-mt-24 relative py-24 lg:py-40 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6 text-center">
          <span class="anim-text inline-block rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#38bdf8]">{{ copy.finalTag }}</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            {{ copy.finalTitlePre }}
            <span class="text-[#38bdf8]">{{ copy.finalTitleAccent }}</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            {{ copy.finalDescPre }}
            <strong class="text-white">{{ copy.finalDescBold }}</strong> 
            {{ copy.finalDescTail }}
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services/demos/ecommerce" class="flex items-center justify-center gap-2 rounded-xl bg-[#38bdf8] px-10 py-4 text-lg font-black text-black transition-all hover:bg-sky-300">
              {{ copy.finalDemoBtn }}
            </NuxtLink>
            <NuxtLink to="/services" class="flex items-center justify-center rounded-xl border border-white/20 bg-[#1e293b] px-10 py-4 text-lg font-black text-white transition-all hover:bg-slate-700">{{ copy.finalBackBtn }}</NuxtLink>
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
