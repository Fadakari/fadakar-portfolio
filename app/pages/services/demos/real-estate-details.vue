<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocale } from '~/composables/useLocale'

const { locale, setLocale, isRtl } = useLocale()

const copy = computed(() => locale.value === 'fa' ? {
  seoTitle: 'طراحی سایت املاک و مستغلات | FADAKAR',
  seoDesc: 'طراحی سایت اختصاصی دپارتمان‌های املاک؛ رهایی از رقابت در پلتفرم‌های آگهی عمومی و ایجاد یک شعبه دیجیتال معتبر.',
  sections: [
    { id: 'why', label: 'چرا سایت املاک؟' },
    { id: 'advice', label: 'توصیه‌های دوستانه' },
    { id: 'solutions', label: 'راه‌حل‌های اختصاصی' },
    { id: 'business', label: 'این فقط یک دمو است' },
    { id: 'final', label: 'قدم بعدی' }
  ],
  viewDemo: 'مشاهده دمو',
  heroBadge: 'درباره طراحی سایت دپارتمان‌های املاک',
  heroTitlePrefix: 'ملکِ چند میلیاردی را نمی‌توان',
  heroTitleAccent: 'صرفاً در اینستاگرام فروخت!',
  heroP1: 'معاملات ملکی بر پایه «اعتماد» بنا شده‌اند. وقتی مشتری می‌خواهد تمام سرمایه زندگی‌اش را سرمایه‌گذاری کند، به دنبال یک دپارتمان معتبر می‌گردد، نه یک پیج ساده. ',
  heroHighlight: 'سایت اختصاصی املاک، شعبه‌ی VIP و دیجیتال شماست.',
  heroP2: ' جایی که اعتبار شما در آن می‌درخشد و مشتریان با خیال راحت ملک‌های شما را بررسی می‌کنند.',
  heroCtaPrimary: 'چه ارزش‌هایی خلق می‌کنیم؟',
  heroCtaSecondary: 'دیدن نمونه دمو',
  metric1: 'جستجوی پیشرفته',
  metric2: 'نمایش لوکس',
  metric3: 'اعتماد سازی',
  whyTag: '01 / ارزش واقعی سایت',
  whyTitle: 'رهایی از رقابتِ فرسایشی در پلتفرم‌های آگهی!',
  whyP1Pre: 'اکثر مشاورین املاک در ایران، وابستگی شدیدی به پلتفرم‌هایی مثل «دیوار» دارند. شما برای نردبان کردن آگهی هزینه می‌کنید، اما ',
  whyP1H: 'در دیوار، آگهی شما دقیقاً در کنار ده‌ها آگهی از رقبا قرار دارد.',
  whyP1Tail: ' یک کلیک اشتباه کافی است تا مشتری شما وارد آگهی همکارتان در یک املاک دیگر شود.',
  whyP2Pre: 'داشتن سایت اختصاصی یعنی ',
  whyP2Bold: 'ایجاد یک محیط انحصاری',
  whyP2Tail: '. وقتی مشتری وارد سایت شما می‌شود، دیگر هیچ رقیبی در کار نیست. او فقط فایل‌های شما، مشاورین شما و برند شما را می‌بیند. سایت شما نه تنها به فایل‌هایتان ارزش بیشتری می‌بخشد، بلکه کلاس کاری آژانس شما را از یک «املاکی ساده» به یک «دپارتمان سرمایه‌گذاری ملکی» ارتقا می‌دهد.',
  adviceTag: '02 / یک مشاوره دوستانه',
  adviceTitle: 'چرا برخی از سایت‌های املاک شکست می‌خورند؟',
  adviceSubtitle: 'طراحی سایت املاک جزو پیچیده‌ترین پروژه‌های وب است. به عنوان تیم توسعه‌دهنده، توصیه می‌کنیم هرگز در این سه تله‌ی رایج نیفتید:',
  a1Title: '۱. فیلترهای ضعیف و کند',
  a1Desc: 'خریدار ملک دقیقا می‌داند چه می‌خواهد: "آپارتمان، منطقه ۱، بالای ۱۰۰ متر، زیر ۵۰ میلیارد". اگر سایت شما نتواند این فیلترها را در کسری از ثانیه و بدون رفرش شدنِ خسته‌کننده اعمال کند، مشتری فوراً سایت را می‌بندد.',
  a2Title: '۲. ظاهر غیرحرفه‌ای (افت اعتماد)',
  a2Desc: 'استفاده از قالب‌های رایگان یا سایت‌سازهای ارزان برای صنعتی که با سرمایه‌های میلیاردی سروکار دارد، یک سم مهلک است. ظاهر ارزان سایت، در ناخودآگاهِ مشتری ترجمه می‌شود به: "این آژانس اعتبار کافی برای مدیریت معامله‌ی من را ندارد."',
  a3Title: '۳. غفلت از موبایل و تور مجازی',
  a3Desc: 'بسیاری از مشتریان در حال حرکت یا استراحت با موبایل خود به دنبال ملک می‌گردند. سایتی که تصاویر را درست در موبایل نشان ندهد یا امکان تماس سریع با مشاورِ مربوطه را نداشته باشد، عملاً بی‌فایده است.',
  solTag: '03 / طراحی راه‌حل',
  solTitle: 'ما برای دپارتمان شما «سیستم» طراحی می‌کنیم، نه فقط یک پوسته!',
  solSubtitlePre: 'نیاز یک دفتر املاک محلی با یک دپارتمان بزرگِ فروش پروژه‌های پیش‌فروش کاملا متفاوت است. ما قبل از کدنویسی، ',
  solSubtitleBold: 'سناریوی فروش شما را پیاده‌سازی می‌کنیم:',
  c1Title: 'اگر مشاورین متعددی دارید...',
  c1Desc: 'پروفایل اختصاصی برای هر مشاور می‌سازیم تا مشتری بتواند مستقیماً فایل‌های او را ببیند و با او در واتساپ یا تلگرام ارتباط بگیرد.',
  c2Title: 'اگر روی مناطق خاصی متمرکزید...',
  c2Desc: 'جستجوی نقشه-محور (Map Search) پیاده می‌کنیم تا خریدار بتواند دقیقاً در کوچه و خیابان مورد نظرش ملک‌ها را روی نقشه پیدا کند.',
  c3Title: 'اگر در حوزه پیش‌فروش کار می‌کنید...',
  c3Desc: 'صفحات لندینگ ویژه پروژه‌ها می‌سازیم که شامل درصد پیشرفت پروژه، ویدیوهای هوایی و فرم دریافت مشاوره سرمایه‌گذاری باشد.',
  c4Title: 'اگر فایل‌های زیادی دارید...',
  c4Desc: 'دیتابیس فوق‌سریع و فیلترهای آنی (AJAX) طراحی می‌کنیم که لود شدن هزاران فایل ملکی در آن، حتی یک ثانیه هم طول نکشد.',
  bizBadge: 'پیش از دیدن دمو بدانید',
  bizTitlePre: '«این دمو فقط یک نمونه است؛',
  bizTitleAccent: 'ما سایت شما را بر اساس کلاس کاری‌تان طراحی می‌کنیم.»',
  bizP1: 'دمویی که طراحی کرده‌ایم، صرفاً برای نمایش قدرت و سرعت در فیلتر کردن ملک‌ها (مثل انتخاب متراژ و قیمت) و روان بودنِ انیمیشن‌ها است.',
  bizP2H: 'دیزاین و گرافیک یک آژانس فروش ویلاهای لوکس شمال با یک دپارتمان فروش آپارتمان در تهران از زمین تا آسمان متفاوت است.',
  bizP2Tail: ' سایت نهایی شما دقیقاً بر اساس پالت رنگی و هویت سازمانیِ دپارتمان شما کدنویسی خواهد شد.',
  guaranteeTitle: 'تضمین‌های ما به مدیریت دپارتمان',
  guaranteeDesc: 'ما می‌دانیم که مدیریت املاک زمانِ درگیر شدن با مشکلات فنیِ سایت را ندارد. سایت شما را با این استانداردها تحویل می‌دهیم:',
  g1Bold: 'سریع‌ترین تجربه جستجو:',
  g1Tail: ' مشتری بدون هیچ لگی، نتایج فیلترهای پیچیده را در لحظه مشاهده می‌کند.',
  g2Bold: 'امنیت اطلاعات فایل‌ها:',
  g2Tail: ' هیچ بات و خزنده‌ای نمی‌تواند دیتابیس فایل‌های ارزشمند شما را سرقت (Scrape) کند.',
  g3Bold: 'پنل ادمین فوق‌ساده:',
  g3Tail: ' مشاورین شما می‌توانند حتی با موبایل، عکس‌ها و اطلاعات ملک جدید را در کمتر از ۱ دقیقه در سایت ثبت کنند.',
  finalTag: '04 / قدم بعدی',
  finalTitlePre: 'آماده‌اید اعتبار برند املاک خود را ',
  finalTitleAccent: 'به سطح اول شهر ارتقا دهید؟',
  finalDescPre: 'شما لایق سایتی هستید که مانند بهترین مشاور شما، شبانه‌روز برایتان مشتریان واقعی پیدا کند. ',
  finalDescBold: 'همین الان دموی املاک ما را بررسی کنید',
  finalDescTail: ' تا سرعت و گرافیک بی‌نظیر آن را از نزدیک لمس کنید. سپس برای شروع طراحیِ پلتفرم اختصاصیِ دپارتمان خود با ما تماس بگیرید.',
  finalDemoBtn: 'ورود به صفحه دمو',
  finalBackBtn: 'بازگشت به خدمات'
} : {
  seoTitle: 'Real Estate Website Design | FADAKAR',
  seoDesc: 'Bespoke real estate department website development; break free from ad platforms and establish an exclusive, high-trust digital agency.',
  sections: [
    { id: 'why', label: 'Why Real Estate Web?' },
    { id: 'advice', label: 'Industry Advisory' },
    { id: 'solutions', label: 'Bespoke Systems' },
    { id: 'business', label: 'Beyond The Demo' },
    { id: 'final', label: 'Next Step' }
  ],
  viewDemo: 'View Demo',
  heroBadge: 'Real Estate Agency & Brokerage Architecture',
  heroTitlePrefix: 'Multi-Million Property Deals Cannot Be Closed',
  heroTitleAccent: 'Solely on Social Media Feeds.',
  heroP1: 'Real estate transactions are founded on profound trust. When buyers invest substantial capital, they look for an authoritative firm, not a casual social page. ',
  heroHighlight: 'A dedicated real estate platform is your VIP digital headquarters.',
  heroP2: ' It provides an exclusive space where your portfolio shines and serious investors explore with total confidence.',
  heroCtaPrimary: 'What Value Do We Create?',
  heroCtaSecondary: 'Explore Live Demo',
  metric1: 'Advanced Search',
  metric2: 'Luxury Showcase',
  metric3: 'Investor Trust',
  whyTag: '01 / Real Value',
  whyTitle: 'Escape the Exhausting Competition on Public Classified Boards!',
  whyP1Pre: 'Most real estate agencies rely heavily on public classified boards. You pay to bump listings, but ',
  whyP1H: 'your property is displayed directly alongside dozens of aggressive competitors.',
  whyP1Tail: ' A single stray click leads your prospective buyer straight to a competing broker.',
  whyP2Pre: 'Owning a bespoke website creates ',
  whyP2Bold: 'an exclusive, distraction-free commercial environment',
  whyP2Tail: '. When an investor arrives, there are no competitors. They see only your listings, your certified consultants, and your brand authority. It elevates your market presence from a neighborhood broker into an authoritative real estate investment department.',
  adviceTag: '02 / A Friendly Advisory',
  adviceTitle: 'Why Do So Many Real Estate Websites Fail?',
  adviceSubtitle: 'Real estate web engineering is among the most demanding domains. As software developers, we advise never falling into these three common traps:',
  a1Title: '1. Slow, Clunky Property Filters',
  a1Desc: 'Property buyers know their exact parameters: "Apartment, District 1, over 120 sqm, under budget." If your site cannot apply faceted filters instantaneously without tedious full-page reloads, buyers leave immediately.',
  a2Title: '2. Amateur Interfaces Eroding Investor Trust',
  a2Desc: 'Using generic off-the-shelf templates in an industry dealing with massive financial investments is fatal. A cheap-looking website subconsciously signals that your agency lacks institutional prestige to manage major transactions.',
  a3Title: '3. Ignoring Mobile Ergonomics & Virtual Tours',
  a3Desc: 'High-net-worth buyers browse listings while commuting or relaxing on mobile. A platform that crops property photos improperly or buries consultant WhatsApp links is commercially ineffective.',
  solTag: '03 / Bespoke Systems',
  solTitle: 'We Engineer Systems for Your Firm, Not Just Cosmetic Themes!',
  solSubtitlePre: 'A boutique suburban office and an urban pre-construction investment firm have fundamentally different workflows. Before coding, ',
  solSubtitleBold: 'we map out your commercial sales journey:',
  c1Title: 'If you have multiple specialized agents...',
  c1Desc: 'We build dedicated agent profiles with direct WhatsApp/phone inquiry routing and personalized portfolio showcases.',
  c2Title: 'If you specialize in key geographic zones...',
  c2Desc: 'We deploy interactive map-based search so buyers can explore properties street-by-street.',
  c3Title: 'If you represent pre-construction developments...',
  c3Desc: 'We craft high-conversion landing pages featuring construction timelines, aerial drone tours, and investment consultation forms.',
  c4Title: 'If you manage thousands of active listings...',
  c4Desc: 'We engineer ultra-fast AJAX databases so searching across thousands of properties loads in under a second.',
  bizBadge: 'Before Exploring The Demo',
  bizTitlePre: '“This Demo is Merely an Example;',
  bizTitleAccent: 'We Engineer Your Platform Around Your Exact Market Class.”',
  bizP1: 'The demo showcases fast AJAX filtering and fluid interaction design.',
  bizP2H: 'A luxury coastal villa brokerage and a downtown metropolitan residential firm require completely different aesthetic languages and lead funnels.',
  bizP2Tail: ' Your bespoke platform is tailored strictly around your brand palette and operational model.',
  guaranteeTitle: 'Our Guarantees to Agency Leadership',
  guaranteeDesc: 'We understand brokerage directors have zero time to debug technical glitches. We deliver your platform according to strict software standards:',
  g1Bold: 'Instantaneous Search Experience:',
  g1Tail: ' Zero lag or page refresh when toggling complex listing filters.',
  g2Bold: 'Proprietary Listing Protection:',
  g2Tail: ' Advanced security shielding your valuable database against automated scrapers.',
  g3Bold: 'Intuitive Mobile Admin:',
  g3Tail: ' Your agents can upload property photos and specifications in under 60 seconds directly from their smartphones.',
  finalTag: '04 / Next Step',
  finalTitlePre: 'Ready to Elevate Your Real Estate Brand ',
  finalTitleAccent: 'to the Top Tier?',
  finalDescPre: 'You deserve a digital platform that works around the clock like your top-performing broker, generating qualified buyer inquiries. ',
  finalDescBold: 'Explore our live real estate demo',
  finalDescTail: ' to inspect speed and visual elegance. Then let’s develop your proprietary agency platform.',
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
  <div :dir="isRtl ? 'rtl' : 'ltr'" class="min-h-screen bg-[#050505] text-slate-200 selection:bg-[#eab308]/30 selection:text-white" :class="isRtl ? 'font-[\'Vazirmatn\']' : 'font-sans'">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#eab308]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in copy.sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none; cursor: pointer;">{{ item.label }}</button>
        </div>
        <div class="flex items-center gap-3">
          <button @click="toggleLang" class="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:bg-white/10 hover:text-white" :aria-label="locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'">
            {{ locale === 'fa' ? 'EN' : 'FA' }}
          </button>
          <NuxtLink to="/services/demos/real-estate" class="rounded-lg bg-[#eab308] px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 shadow-lg shadow-[#eab308]/20">{{ copy.viewDemo }}</NuxtLink>
        </div>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border border-[#eab308]/30 bg-[#eab308]/10 px-4 py-2 text-sm font-bold text-[#eab308]">
              {{ copy.heroBadge }}
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4rem] text-white">
              {{ copy.heroTitlePrefix }} <br>
              <span class="text-[#eab308]">{{ copy.heroTitleAccent }}</span>
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              {{ copy.heroP1 }}<mark class="highlight-text font-bold text-black bg-[#eab308] rounded-md px-1.5 py-0.5">{{ copy.heroHighlight }}</mark>{{ copy.heroP2 }}
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('solutions')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200 shadow-xl shadow-white/10">{{ copy.heroCtaPrimary }}</button>
              <NuxtLink to="/services/demos/real-estate" class="rounded-xl border border-white/20 bg-black/50 px-8 py-4 text-base font-bold text-white transition hover:bg-slate-800 backdrop-blur-sm">{{ copy.heroCtaSecondary }}</NuxtLink>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#eab308]">01</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric1 }}</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">02</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric2 }}</span></div>
              <div class="px-6"><strong class="block text-3xl font-black text-slate-500">03</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric3 }}</span></div>
            </div>
          </div>
          
          <div class="anim-text relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-[#eab308]/10 group">
            <iframe src="/services/demos/real-estate" class="w-full h-[500px] lg:h-[600px] border-0 bg-black pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"></iframe>
            <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </div>
        </div>
      </section>

      <!-- Why Section -->
      <section id="why" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6">
          <div class="anim-text mb-12 text-center">
            <span class="inline-block rounded-full border border-[#eab308]/30 bg-[#eab308]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#eab308]">{{ copy.whyTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.whyTitle }}</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              {{ copy.whyP1Pre }}
              <mark class="highlight-text font-bold text-black bg-[#eab308]/80 rounded-md px-1.5 py-0.5">{{ copy.whyP1H }}</mark>
              {{ copy.whyP1Tail }}
            </p>
            <p>
              {{ copy.whyP2Pre }}<strong>{{ copy.whyP2Bold }}</strong>{{ copy.whyP2Tail }}
            </p>
          </div>
        </div>
      </section>

      <!-- Advisory Section -->
      <section id="advice" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5 bg-[#0a0a05]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center mb-16">
            <span class="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-black tracking-widest text-orange-500">{{ copy.adviceTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.adviceTitle }}</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              {{ copy.adviceSubtitle }}
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-3">
            <article class="anim-text group rounded-[24px] border border-orange-900/30 bg-[#050505] p-8 transition hover:border-orange-500/40">
              <h3 class="text-xl font-black text-orange-400 mb-4 flex items-center gap-3">
                {{ copy.a1Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a1Desc }}</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-orange-900/30 bg-[#050505] p-8 transition hover:border-orange-500/40">
              <h3 class="text-xl font-black text-orange-400 mb-4 flex items-center gap-3">
                {{ copy.a2Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a2Desc }}</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-orange-900/30 bg-[#050505] p-8 transition hover:border-orange-500/40">
              <h3 class="text-xl font-black text-orange-400 mb-4 flex items-center gap-3">
                {{ copy.a3Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a3Desc }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Solutions Section -->
      <section id="solutions" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-[#eab308]/20 bg-gradient-to-b from-[#eab308]/10 to-[#050505]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text mb-16 max-w-3xl">
            <span class="inline-block rounded-full border border-white/10 bg-[#1e293b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">{{ copy.solTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.solTitle }}</h2>
            <p class="mt-6 text-lg leading-9 text-slate-300">
              {{ copy.solSubtitlePre }}<strong>{{ copy.solSubtitleBold }}</strong>
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#eab308]/50 transition-colors">
              <div class="text-[#eab308] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c1Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c1Desc }}</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#eab308]/50 transition-colors">
              <div class="text-[#eab308] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c2Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c2Desc }}</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#eab308]/50 transition-colors">
              <div class="text-[#eab308] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c3Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c3Desc }}</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#eab308]/50 transition-colors">
              <div class="text-[#eab308] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c4Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c4Desc }}</p>
            </div>
          </div>

          <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
            <!-- Warning Card -->
            <div id="business" class="anim-text relative rounded-[24px] border border-[#eab308]/40 bg-black/80 backdrop-blur-xl p-10 shadow-2xl shadow-[#eab308]/10">
              <div class="text-sm font-black text-[#eab308] mb-6 tracking-widest uppercase flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                {{ copy.bizBadge }}
              </div>
              <p class="text-3xl sm:text-4xl font-black leading-tight text-white mb-8">
                {{ copy.bizTitlePre }} <br>
                <span class="text-[#eab308]">{{ copy.bizTitleAccent }}</span>
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-lg leading-8 text-slate-300">
                {{ copy.bizP1 }}
                <br><br>
                <mark class="highlight-text font-bold text-black bg-[#eab308]/90 rounded-md px-1.5 py-0.5 mt-2 inline-block">{{ copy.bizP2H }}</mark>
                {{ copy.bizP2Tail }}
              </p>
            </div>
            
            <div class="anim-text">
              <h2 class="text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.guaranteeTitle }}</h2>
              <p class="mt-8 text-lg leading-9 text-slate-300">
                {{ copy.guaranteeDesc }}
              </p>
              
              <ul class="mt-8 space-y-6">
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#eab308]/20 p-2 rounded-lg text-[#eab308] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                  <span><strong>{{ copy.g1Bold }}</strong>{{ copy.g1Tail }}</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#eab308]/20 p-2 rounded-lg text-[#eab308] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div>
                  <span><strong>{{ copy.g2Bold }}</strong>{{ copy.g2Tail }}</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#eab308]/20 p-2 rounded-lg text-[#eab308] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></div>
                  <span><strong>{{ copy.g3Bold }}</strong>{{ copy.g3Tail }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Final Section -->
      <section id="final" class="scroll-mt-24 relative py-24 lg:py-40 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6 text-center">
          <span class="anim-text inline-block rounded-full border border-[#eab308]/30 bg-[#eab308]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#eab308]">{{ copy.finalTag }}</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            {{ copy.finalTitlePre }}
            <span class="text-[#eab308]">{{ copy.finalTitleAccent }}</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            {{ copy.finalDescPre }}
            <strong class="text-white">{{ copy.finalDescBold }}</strong> 
            {{ copy.finalDescTail }}
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services/demos/real-estate" class="flex items-center justify-center gap-2 rounded-xl bg-[#eab308] px-10 py-4 text-lg font-black text-black transition-all hover:bg-yellow-400 shadow-lg shadow-[#eab308]/30">
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
