<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocale } from '~/composables/useLocale'

const { locale, setLocale, isRtl } = useLocale()

const copy = computed(() => locale.value === 'fa' ? {
  seoTitle: 'طراحی سایت مد و پوشاک | FADAKAR',
  seoDesc: 'طراحی سایت اختصاصی بوتیک و برندهای فشن؛ رهایی از دایرکت‌های تکراری اینستاگرام و خلق یک تجربه خرید لوکس و بدون اصطکاک.',
  sections: [
    { id: 'why', label: 'چرا سایت فشن؟' },
    { id: 'advice', label: 'توصیه‌های دوستانه' },
    { id: 'solutions', label: 'طراحی راه‌حل' },
    { id: 'business', label: 'این فقط یک دمو است' },
    { id: 'final', label: 'قدم بعدی' }
  ],
  viewDemo: 'مشاهده دمو',
  heroBadge: 'درباره طراحی سایت مد، فشن و پوشاک',
  heroTitlePrefix: 'لباس‌های لوکسِ شما،',
  heroTitleAccent: 'لایق ویترینِ ارزان نیستند.',
  heroP1: 'صنعت مد یعنی زیبایی، احساس و هویت. وقتی کاربر وارد سایت شما می‌شود، قبل از اینکه به قیمت لباس نگاه کند، ناخودآگاه کل برند شما را قضاوت می‌کند. ',
  heroHighlight: 'یک سایت بی‌نقص، دقیقاً همان تفاوتِ بین یک «مزون لوکس» و یک «حراجی ساده» است.',
  heroP2: ' سایت شما باید همان حسِ لمسِ پارچه و قدم زدن در یک بوتیک مدرن را منتقل کند.',
  heroCtaPrimary: 'پایانِ پیام‌های «موجوده؟»',
  heroCtaSecondary: 'دیدن نمونه دمو',
  metric1: 'هویت بصری',
  metric2: 'خرید تک‌کلیکی',
  metric3: 'انبارداری خودکار',
  whyTag: '01 / ارزش واقعی سایت',
  whyTitle: 'وقتی شما خوابید، سایت شما می‌فروشد!',
  whyP1Pre: 'بزرگترین کابوس آنلاین‌شاپ‌های لباس، دایرکت‌های بی‌پایان اینستاگرام است: ',
  whyP1Quote: '"قد این کار چنده؟ رنگ مشکیش سایز لارج موجوده؟ کی ارسال میشه؟ شمارتون رو میدید واریز کنم؟"',
  whyP1Mid: '. این روند نه‌تنها ادمین‌ها را فرسوده می‌کند، بلکه باعث می‌شود ',
  whyP1H: 'در ساعاتی که شما پاسخگو نیستید (مخصوصاً شب‌ها که پیک خرید اینترنتی است)، مشتری از خرید منصرف شود.',
  whyP2: 'اینستاگرام ویترین جذابی برای نمایش کالکشن‌های شماست، اما صندوق‌دارِ خوبی نیست! داشتن سایت اختصاصی یعنی مشتری عکس‌ها را می‌بیند، سایز و رنگ را با خیال راحت انتخاب می‌کند، موجودی را چک می‌کند، مبلغ را می‌پردازد و شما صبح فقط لیبلی برای ارسال چاپ می‌کنید. به همین سادگی.',
  adviceTag: '02 / یک مشاوره دوستانه',
  adviceTitle: 'چرا برخی از سایت‌های لباس مشتری را فراری می‌دهند؟',
  adviceSubtitle: 'خرید در صنعت فشن، یک تصمیم «احساسی و سریع» است. اگر سایت شما یکی از این سه مانع را داشته باشد، احساسِ مشتری را کور می‌کند:',
  a1Title: '۱. فاجعه‌ی انتخاب سایز و رنگ',
  a1Desc: 'یک تیشرت ممکن است ۴ رنگ و ۵ سایز داشته باشد. اگر کاربر نتواند به راحتی رنگ را عوض کند و ببیند آیا سایز مدیوم در رنگ آبی موجود است یا نه، سایت را می‌بندد. سیستم موجودی کالا (Inventory) در سایت‌های لباس باید بی‌نقص و بصری باشد.',
  a2Title: '۲. ظاهر بازاری و ارزان',
  a2Desc: 'برخی از سایت‌های وردپرسی طوری طراحی شده‌اند که انگار سایت فروش قطعات صنعتی هستند، نه لباس! استفاده از قالب‌های آماده و بی‌روح باعث می‌شود حتی بهترین و باکیفیت‌ترین لباس‌های شما، ارزان و بی‌کیفیت به نظر برسند.',
  a3Title: '۳. پروسه خرید طولانی (قاتلِ فروش)',
  a3Desc: 'مشتریِ فشن تکانشی (Impulsive) خرید می‌کند. اگر برای خرید یک کلاه از او بخواهید ایمیل تایید کند، کد ملی بدهد و ۵ مرحله فرم پر کند، پشیمان می‌شود. پرداخت باید در سریع‌ترین و کم‌اصطکاک‌ترین حالت ممکن انجام شود.',
  solTag: '03 / طراحی راه‌حل',
  solTitle: 'ما برای سبکِ برندِ شما، ایده می‌دهیم.',
  solSubtitlePre: 'یک برند لباس زیر زنانه با یک برند استریت‌استایل (Streetwear) پسرانه زمین تا آسمان فرق دارد. ما قبل از طراحی، ',
  solSubtitleBold: 'استراتژی فروش شما را درک می‌کنیم:',
  c1Title: 'اگر کالکشن‌های لیمیتد (Drop) دارید...',
  c1Desc: 'سیستم‌های تایمر معکوس و زیرساختِ مقاوم در برابر هجوم ناگهانی ترافیک (Traffic Spikes) برای شما پیاده می‌کنیم تا در زمان رونمایی، سایت کِرَش نکند.',
  c2Title: 'اگر استایل‌های ترکیبی می‌فروشید...',
  c2Desc: 'قابلیت "تکمیلِ استایل" (Complete the Look) را در صفحه محصول می‌گذاریم؛ مثلاً کسی که شلوار می‌خرد، پیشنهاد خرید کمربند و کفش ستِ آن را هم ببیند.',
  c3Title: 'اگر مزون لوکس هستید...',
  c3Desc: 'از ساختار Editorial و ویدیویی (Lookbook) با مینیمال‌ترین حالتِ دکمه‌ها استفاده می‌کنیم تا لباس‌ها مانند یک ژورنال فشن خودنمایی کنند.',
  c4Title: 'اگر تنوع کالای بالایی دارید...',
  c4Desc: 'فیلترهای فوق‌پیشرفته (رنگ، سایز، جنس پارچه، فصل، نوع یقه) طراحی می‌کنیم تا کاربر از بین صدها لباس، در یک ثانیه لباس مطلوبش را پیدا کند.',
  bizBadge: 'پیش از دیدن دمو بدانید',
  bizTitlePre: '«این دمو فقط یک نمونه است؛',
  bizTitleAccent: 'استایلِ سایت شما مختصِ خودتان خواهد بود.»',
  bizP1: 'دمویی که در بخش فشن آماده کرده‌ایم، تنها نمایشی از قدرت انیمیشن‌ها، طراحی‌های نرم‌افزاری مدرن (Parallax) و روان بودن المان‌های بصری ماست.',
  bizP2H: 'ما به هیچ وجه از یک قالبِ ثابت برای همه برندها استفاده نمی‌کنیم.',
  bizP2Tail: ' سایت شما بر اساس پالت رنگی، نوع عکاسیِ مدل‌های شما، و شخصیتِ برندِ شما از صفر طراحیِ بصری (UI/UX) و برنامه‌نویسی خواهد شد.',
  qualityTitle: 'کیفیت، در جزئیات پنهان است.',
  qualityDesc: 'تفاوت لباسِ سفارشی‌دوز با لباس‌های کارخانه‌ای، در دوخت‌های ظریف و جنس پارچه است. کدنویسی اختصاصیِ ما برای شما نیز همین حکم را دارد:',
  q1Bold: 'سرعت و بهینه‌سازی تصاویر:',
  q1Tail: ' با وجود صدها عکسِ باکیفیت از لباس‌ها، سایت با الگوریتم‌های مدرن بهینه‌سازی شده و در چشم‌به‌هم‌زدنی روی موبایل لود می‌شود.',
  q2Bold: 'سبد خرید فوق‌سریع:',
  q2Tail: ' طراحی پروسه پرداخت در کمترین قدمِ ممکن، برای به حداقل رساندنِ ریزش مشتری.',
  q3Bold: 'همگام‌سازی انبار:',
  q3Tail: ' کنترل بی‌نقص موجودیِ رنگ‌ها و سایزهای مختلف، تا هرگز کالایی که موجود نیست فروخته نشود.',
  finalTag: '04 / قدم بعدی',
  finalTitlePre: 'آماده‌اید فروش آنلاین برند خود را ',
  finalTitleAccent: 'کاملاً اتوماتیک و لوکس کنید؟',
  finalDescPre: 'شما نیازی به پاسخ دادن به صدها دایرکتِ تکراری ندارید. ',
  finalDescBold: 'همین الان دموی فشن و پوشاک ما را ببینید',
  finalDescTail: ' تا با استانداردهای طراحی نرم‌افزارهای مدرنِ ما آشنا شوید. سپس برای خلق پلتفرمِ فروشِ اختصاصیِ برندتان، به ما پیام دهید.',
  finalDemoBtn: 'ورود به صفحه دمو',
  finalBackBtn: 'بازگشت به خدمات'
} : {
  seoTitle: 'Fashion & Apparel Web Design | FADAKAR',
  seoDesc: 'Bespoke fashion and boutique web development; eliminate repetitive DMs and deliver a luxury, frictionless digital shopping experience.',
  sections: [
    { id: 'why', label: 'Why Fashion Web?' },
    { id: 'advice', label: 'Fashion Advisory' },
    { id: 'solutions', label: 'Bespoke Solutions' },
    { id: 'business', label: 'Beyond The Demo' },
    { id: 'final', label: 'Next Step' }
  ],
  viewDemo: 'View Demo',
  heroBadge: 'Fashion, Apparel & Boutique Architecture',
  heroTitlePrefix: 'Your Premium Garments',
  heroTitleAccent: 'Deserve Better Than a Cheap Showcase.',
  heroP1: 'Fashion is art, emotion, and identity. When a shopper visits your store, before even looking at the price tag, they judge your brand prestige. ',
  heroHighlight: 'A flawless digital presence is the exact difference between an exclusive boutique and a discount clearance bin.',
  heroP2: ' Your website must evoke the tactile sensation of fine fabrics and walking into a modern designer showroom.',
  heroCtaPrimary: 'End Endless "Is This In Stock?" DMs',
  heroCtaSecondary: 'Explore Live Demo',
  metric1: 'Visual Identity',
  metric2: '1-Click Checkout',
  metric3: 'Auto Inventory',
  whyTag: '01 / Real Value',
  whyTitle: 'While You Sleep, Your Website Closes Sales!',
  whyP1Pre: 'The greatest operational bottleneck for apparel brands is endless social DMs: ',
  whyP1Quote: '“What is the sleeve length? Is size Large available in Black? When does it ship? Where do I transfer the money?”',
  whyP1Mid: '. This exhausting cycle drains staff and ensures that ',
  whyP1H: 'during hours when you cannot reply (especially late-night peak shopping windows), buyers abandon the impulse to purchase.',
  whyP2: 'Social media is an attractive digital showroom, but a terrible cash register! An authoritative e-commerce website lets shoppers inspect high-res photos, select size and color variants with live stock validation, pay securely, and wake up to ready-to-ship fulfillment labels.',
  adviceTag: '02 / A Friendly Advisory',
  adviceTitle: 'Why Do Some Fashion Websites Repel Shoppers?',
  adviceSubtitle: 'Fashion purchasing is emotional and impulsive. If your platform introduces any of these three barriers, it dampens purchase excitement immediately:',
  a1Title: '1. Clunky Size & Color Matrices',
  a1Desc: 'A garment often has 4 colorways and 5 sizes. If changing color forces a slow reload or doesn’t update stock availability dynamically, shoppers bounce. Apparel inventory must be visual, instantaneous, and intuitive.',
  a2Title: '2. Cheap Industrial Aesthetics',
  a2Desc: 'Generic WordPress themes often look like plumbing catalogs rather than fashion editorials. Lifeless layouts diminish the perceived value of your finest garments.',
  a3Title: '3. Exhausting Checkout Steps',
  a3Desc: 'Fashion buyers act on impulse. Demanding multi-page registration forms, repeated address inputs, and verification codes kills conversions. Checkout must be swift and frictionless.',
  solTag: '03 / Bespoke Solutions',
  solTitle: 'We Bring Strategic Ideas to Complement Your Aesthetic Brand.',
  solSubtitlePre: 'An intimate luxury boutique and an energetic streetwear label require distinct commerce architectures. Before designing, ',
  solSubtitleBold: 'we analyze your sales strategy:',
  c1Title: 'If you release limited drops...',
  c1Desc: 'We build live countdown launches and resilient infrastructure capable of absorbing massive traffic spikes without crashing.',
  c2Title: 'If you style coordinated outfits...',
  c2Desc: 'We implement "Complete the Look" modules on product pages, encouraging cross-sells like matching belts, footwear, or outerwear.',
  c3Title: 'If you operate a luxury atelier...',
  c3Desc: 'We craft editorial lookbooks with fluid video integration and minimal UI chrome, showcasing collections like high-fashion magazines.',
  c4Title: 'If you manage broad catalogs...',
  c4Desc: 'We engineer multi-layered faceted filters (hue, cut, fabric weight, season, collar) so buyers pinpoint their desired fit in seconds.',
  bizBadge: 'Before Exploring The Demo',
  bizTitlePre: '“This Demo is Purely an Example;',
  bizTitleAccent: 'Your Brand Aesthetic Will Be Exclusively Yours.”',
  bizP1: 'The demo demonstrates fluid parallax transitions, micro-interactions, and responsive layout polish.',
  bizP2H: 'We never reuse cookie-cutter templates.',
  bizP2Tail: ' Your bespoke storefront is designed from zero around your model photography, color story, and unique brand voice.',
  qualityTitle: 'Quality is Hidden in the Subtle Details.',
  qualityDesc: 'The difference between haute couture and fast-fashion lies in tailoring and textiles. Our bespoke code embodies that exact level of craftsmanship:',
  q1Bold: 'Instant Image Velocity:',
  q1Tail: ' Hundreds of high-res garment photos load instantaneously using next-gen compression algorithms.',
  q2Bold: 'Streamlined Express Checkout:',
  q2Tail: ' Designed with minimal steps to maximize impulse buying conversion.',
  q3Bold: 'Synchronized Variant Matrix:',
  q3Tail: ' Real-time inventory tracking ensuring out-of-stock sizes or colors are never erroneously sold.',
  finalTag: '04 / Next Step',
  finalTitlePre: 'Ready to Fully Automate Your Fashion Brand’s ',
  finalTitleAccent: 'Digital Sales with Luxury Style?',
  finalDescPre: 'Free your team from answering repetitive inquiries. ',
  finalDescBold: 'Explore our live fashion demo',
  finalDescTail: ' to witness modern interaction design firsthand. Then let’s build your brand’s bespoke digital flagship.',
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
  <div :dir="isRtl ? 'rtl' : 'ltr'" class="min-h-screen bg-[#050304] text-slate-200 selection:bg-[#ec4899]/30 selection:text-white" :class="isRtl ? 'font-[\'Vazirmatn\']' : 'font-sans'">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#050304]/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#ec4899]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in copy.sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none; cursor: pointer;">{{ item.label }}</button>
        </div>
        <div class="flex items-center gap-3">
          <button @click="toggleLang" class="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:bg-white/10 hover:text-white" :aria-label="locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'">
            {{ locale === 'fa' ? 'EN' : 'FA' }}
          </button>
          <NuxtLink to="/services/demos/fashion" class="rounded-lg bg-[#ec4899] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-pink-500 shadow-lg shadow-[#ec4899]/20">{{ copy.viewDemo }}</NuxtLink>
        </div>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border border-[#ec4899]/30 bg-[#ec4899]/10 px-4 py-2 text-sm font-bold text-[#ec4899]">
              {{ copy.heroBadge }}
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4.2rem] text-white">
              {{ copy.heroTitlePrefix }} <br>
              <span class="text-[#ec4899]">{{ copy.heroTitleAccent }}</span>
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              {{ copy.heroP1 }}<mark class="highlight-text font-bold text-white bg-[#ec4899]/40 rounded-md px-1.5 py-0.5">{{ copy.heroHighlight }}</mark>{{ copy.heroP2 }}
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('why')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200 shadow-xl shadow-white/10">{{ copy.heroCtaPrimary }}</button>
              <NuxtLink to="/services/demos/fashion" class="rounded-xl border border-white/20 bg-black/50 px-8 py-4 text-base font-bold text-white transition hover:bg-slate-800 backdrop-blur-sm">{{ copy.heroCtaSecondary }}</NuxtLink>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#ec4899]">01</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric1 }}</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">02</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric2 }}</span></div>
              <div class="px-6"><strong class="block text-3xl font-black text-slate-500">03</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric3 }}</span></div>
            </div>
          </div>
          
          <div class="anim-text relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0508] shadow-2xl shadow-[#ec4899]/15 group">
            <iframe src="/services/demos/fashion" class="w-full h-[500px] lg:h-[600px] border-0 bg-black pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"></iframe>
            <div class="absolute inset-0 bg-gradient-to-t from-[#050304] via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </div>
        </div>
      </section>

      <!-- Why Section -->
      <section id="why" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6">
          <div class="anim-text mb-12 text-center">
            <span class="inline-block rounded-full border border-[#ec4899]/30 bg-[#ec4899]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#ec4899]">{{ copy.whyTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.whyTitle }}</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              {{ copy.whyP1Pre }}<span class="italic text-white">{{ copy.whyP1Quote }}</span>{{ copy.whyP1Mid }}
              <mark class="highlight-text font-bold text-white bg-[#ec4899]/40 rounded-md px-1.5 py-0.5">{{ copy.whyP1H }}</mark>
            </p>
            <p>
              {{ copy.whyP2 }}
            </p>
          </div>
        </div>
      </section>

      <!-- Advisory Section -->
      <section id="advice" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5 bg-[#0a0507]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center mb-16">
            <span class="inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-black tracking-widest text-pink-400">{{ copy.adviceTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.adviceTitle }}</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              {{ copy.adviceSubtitle }}
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-3">
            <article class="anim-text group rounded-[24px] border border-pink-900/30 bg-[#050304] p-8 transition hover:border-pink-500/40">
              <h3 class="text-xl font-black text-pink-400 mb-4 flex items-center gap-3">
                {{ copy.a1Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a1Desc }}</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-pink-900/30 bg-[#050304] p-8 transition hover:border-pink-500/40">
              <h3 class="text-xl font-black text-pink-400 mb-4 flex items-center gap-3">
                {{ copy.a2Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a2Desc }}</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-pink-900/30 bg-[#050304] p-8 transition hover:border-pink-500/40">
              <h3 class="text-xl font-black text-pink-400 mb-4 flex items-center gap-3">
                {{ copy.a3Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a3Desc }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Solutions Section -->
      <section id="solutions" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-[#ec4899]/20 bg-gradient-to-b from-[#ec4899]/10 to-[#050304]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text mb-16 max-w-3xl">
            <span class="inline-block rounded-full border border-white/10 bg-[#1e293b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">{{ copy.solTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.solTitle }}</h2>
            <p class="mt-6 text-lg leading-9 text-slate-300">
              {{ copy.solSubtitlePre }}<strong>{{ copy.solSubtitleBold }}</strong>
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#ec4899]/50 transition-colors">
              <div class="text-[#ec4899] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c1Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c1Desc }}</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#ec4899]/50 transition-colors">
              <div class="text-[#ec4899] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c2Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c2Desc }}</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#ec4899]/50 transition-colors">
              <div class="text-[#ec4899] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c3Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c3Desc }}</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#ec4899]/50 transition-colors">
              <div class="text-[#ec4899] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c4Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c4Desc }}</p>
            </div>
          </div>

          <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
            <!-- Warning Card -->
            <div id="business" class="anim-text relative rounded-[24px] border border-[#ec4899]/40 bg-black/80 backdrop-blur-xl p-10 shadow-2xl shadow-[#ec4899]/10">
              <div class="text-sm font-black text-[#ec4899] mb-6 tracking-widest uppercase flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                {{ copy.bizBadge }}
              </div>
              <p class="text-3xl sm:text-4xl font-black leading-tight text-white mb-8">
                {{ copy.bizTitlePre }} <br>
                <span class="text-[#ec4899]">{{ copy.bizTitleAccent }}</span>
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-lg leading-8 text-slate-300">
                {{ copy.bizP1 }}
                <br><br>
                <mark class="highlight-text font-bold text-white bg-[#ec4899]/40 rounded-md px-1.5 py-0.5 mt-2 inline-block">{{ copy.bizP2H }}</mark>
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
                  <div class="bg-[#ec4899]/20 p-2 rounded-lg text-[#ec4899] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></div>
                  <span><strong>{{ copy.q1Bold }}</strong>{{ copy.q1Tail }}</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#ec4899]/20 p-2 rounded-lg text-[#ec4899] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg></div>
                  <span><strong>{{ copy.q2Bold }}</strong>{{ copy.q2Tail }}</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#ec4899]/20 p-2 rounded-lg text-[#ec4899] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
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
          <span class="anim-text inline-block rounded-full border border-[#ec4899]/30 bg-[#ec4899]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#ec4899]">{{ copy.finalTag }}</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            {{ copy.finalTitlePre }}
            <span class="text-[#ec4899]">{{ copy.finalTitleAccent }}</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            {{ copy.finalDescPre }}
            <strong class="text-white">{{ copy.finalDescBold }}</strong> 
            {{ copy.finalDescTail }}
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services/demos/fashion" class="flex items-center justify-center gap-2 rounded-xl bg-[#ec4899] px-10 py-4 text-lg font-black text-white transition-all hover:bg-pink-500 shadow-lg shadow-[#ec4899]/30">
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
