<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocale } from '~/composables/useLocale'

const { locale, setLocale, isRtl } = useLocale()

const copy = computed(() => locale.value === 'fa' ? {
  seoTitle: 'سیستم دیجیتال اختصاصی کسب‌وکار | FADAKAR',
  seoDesc: 'طراحی زیرساخت و نرم‌افزار اختصاصی کسب‌وکار؛ از داشبوردهای مدیریتی و CRM تا اتوماسیون فرآیندها و اتصال به سرویس‌های پیامکی.',
  sections: [
    { id: 'why', label: 'چرا سیستم اختصاصی؟' },
    { id: 'advice', label: 'تله‌های سازمانی' },
    { id: 'solutions', label: 'امکانات سیستم' },
    { id: 'business', label: 'تفاوت ما' },
    { id: 'final', label: 'قدم بعدی' }
  ],
  consultationBtn: 'مشاوره زیرساخت',
  heroBadge: 'سیستم دیجیتال اختصاصی و اتوماسیون',
  heroTitlePrefix: 'ما برای شما «سایت» نمی‌سازیم؛',
  heroTitleAccent: 'مغز متفکر کسب‌وکارتان را طراحی می‌کنیم.',
  heroP1: 'تصور کنید همین فردا شبکه‌های اجتماعی یا غول‌های تکنولوژی، به شما یک «سایت کاملا رایگان» بدهند! آیا مشکلات شما حل می‌شود؟ قطعاً خیر. ',
  heroHighlight: 'شما فراتر از یک ویترین آنلاین، به یک «ابزارِ مدیریتِ کسب‌وکار» نیاز دارید.',
  heroP2: ' شما به سیستمی نیاز دارید که مشتری را بشناسد، انبار را کنترل کند، پیامک‌ها را خودکار بفرستد و گزارش فروش بدهد.',
  heroCtaPrimary: 'این سیستم چه کار می‌کند؟',
  metric1: 'داشبورد هوشمند',
  metric2: 'اتوماسیون کامل',
  metric3: 'یکپارچگی داده‌ها',
  cardCommandCenter: 'Command Center',
  cardSalesToday: 'فروش امروز',
  cardSalesVal: '۲۴,۵۰۰,۰۰۰',
  cardSalesUnit: 'تومان',
  cardSalesGrowth: '+۱۲٪ رشد',
  cardCrmClients: 'مشتریان فعال (CRM)',
  cardCrmVal: '۱,۲۸۴',
  cardCrmUnit: 'نفر',
  cardCrmStatus: 'متصل به پنل پیامکی',
  cardActiveAutomations: 'اتوماسیون‌های فعال',
  cardAuto1Text: 'ارسال فاکتور به واتساپ مشتری',
  cardAuto1Badge: 'در حال اجرا',
  cardAuto2Text: 'آپدیت موجودی انبار به سایت',
  cardAuto2Badge: 'خودکار',
  whyTag: '01 / ارزش پنهان',
  whyTitle: '«سایت نمایشی» دردهای پنهان سازمان را درمان نمی‌کند.',
  whyP1Pre: 'اکثر شرکت‌ها فکر می‌کنند با راه‌اندازی یک سایتِ زیبا، کارِ دیجیتال‌سازی آن‌ها تمام شده است. اما نمای جلوی سایت (ویترین) تنها ۱۰٪ از ماجراست. وقتی سفارش‌ها زیاد شوند، اگر مجبور باشید هر سفارش را دستی در اکسل وارد کنید، فاکتورها را دستی به حسابداری بفرستید و برای هر مشتری جداگانه پیامک پیگیری تایپ کنید، ',
  whyP1H: 'عملاً سایت برای شما تبدیل به یک سربارِ جدید می‌شود، نه یک ابزارِ رهایی‌بخش!',
  whyP2Pre: 'ما وارد عمل می‌شویم تا بخش پنهانِ کوه یخ را بسازیم: ',
  whyP2Bold: 'زیرساخت مدیریتی شما.',
  whyP2Tail: ' ابزاری که دقیقاً بر اساس مدلِ درآمدی و فرآیندهای شرکت شما شخصی‌سازی شده است تا وابستگی شما به خطای انسانی را به صفر برساند.',
  adviceTag: '02 / هشدار مدیریتی',
  adviceTitle: 'تله‌های نرم‌افزاری که شرکت‌ها در آن می‌افتند',
  adviceSubtitle: 'اگر کسب‌وکار شما رو به رشد است، مراقب این سه گردابِ سازمانی باشید که زمان و سرمایه شما را می‌بلعند:',
  a1Title: '۱. جزیره‌های جدا افتاده',
  a1Desc: 'استفاده از یک سایت وردپرسی، در کنار یک نرم‌افزار حسابداری مجزا، و یک پنل پیامکی جداگانه که هیچ‌کدام با هم ارتباط (API) ندارند. کارمندان شما مجبورند اطلاعات یکسان را روزی ده‌ها بار بین این جزیره‌ها کپی-پیست کنند!',
  a2Title: '۲. اتلاف منابع انسانی در کارهای تکراری',
  a2Desc: 'اگر نیروی انسانی شما هر روز وقتش را صرف پاسخ دادن به وضعیتِ سفارش، صدور فیش، یا یادآوری تمدید اشتراک می‌کند، شما در حال هدر دادنِ بودجه هستید. کامپیوترها برای انجام این کارهای تکراری در کسری از ثانیه اختراع شده‌اند.',
  a3Title: '۳. نابینایی در تصمیم‌گیری (فقدان دیتا)',
  a3Desc: 'وقتی اطلاعات مشتریان وفادار شما در دفترچه‌ها، اکسل‌ها یا دایرکت‌های اینستاگرام پراکنده است، نمی‌توانید گزارش‌گیری کنید. شما نمی‌دانید پرفروش‌ترین محصول در چه روزی از هفته به کدام گروه سنی فروخته می‌شود.',
  solTag: '03 / طراحی زیرساخت اختصاصی',
  solTitle: 'ما برای شما ابزار می‌سازیم، نه یک بنر تبلیغاتی!',
  solSubtitle: 'یک سیستم مدیریتِ کسب‌وکارِ واقعی، به صورت سفارشی توسعه پیدا می‌کند تا دقیقاً مثل چرخ‌دنده‌های ساعت با ساختار شرکت شما جفت شود:',
  c1Title: 'داشبوردهای مدیریتی و گزارش‌گیری',
  c1Desc: 'در یک صفحه تمامی شاخص‌های کلیدی (KPI)، فروش روزانه، کاربران جدید و نمودارهای رشد کسب‌وکارتان را به صورت زنده (Real-time) ببینید.',
  c2Title: 'سیستم مدیریت مشتریان (CRM)',
  c2Desc: 'مشتریانتان را به دقت دسته‌بندی کنید؛ تاریخچه خریدهایشان را ببینید، برایشان کدهای تخفیف خودکار پیامک کنید و رفتارشان را رصد کنید.',
  c3Title: 'اتوماسیون بی‌رحمانه‌ی فرآیندها',
  c3Desc: 'ثبت فاکتور، صدور حواله انبار، ارسال پیامک تشکر، پیگیری سبدهای رها شده و آپدیت وضعیت سفارشات همگی به صورت خودکار انجام خواهند شد.',
  c4Title: 'اتصال یکپارچه (API Integrations)',
  c4Desc: 'سیستم شما می‌تواند مستقیماً به تلگرام، واتساپ، نرم‌افزارهای حسابداری (مثل هلو یا سپیدار) و شرکت‌های پستی متصل شود.',
  bizBadge: 'نکته‌ای درباره تفاوت ما',
  bizTitlePre: '«ما کسب‌وکار شما را با قالب‌ها سازگار نمی‌کنیم؛',
  bizTitleAccent: 'کدها را برای کسب‌وکار شما می‌نویسیم!»',
  bizP1: 'بسیاری از نرم‌افزارهای آماده‌ی بازار، امکاناتی را به شما تحمیل می‌کنند که هرگز نیازی به آن‌ها ندارید، و در عوض قابلیتی که شدیداً به آن محتاجید را ندارند!',
  bizP2H: 'ما از قالب‌ها و پلاگین‌های قفل‌شده استفاده نمی‌کنیم.',
  bizP2Tail: ' شما به ما می‌گویید در شرکتتان کارها دقیقاً به چه شکل انجام می‌شود، و ما عیناً همان جریانِ کاری (Workflow) را به یک نرم‌افزار قدرتمند تبدیل می‌کنیم.',
  scaleTitle: 'زیرساختی که با شما بزرگ می‌شود.',
  scaleDesc: 'یکی از بزرگترین مشکلات سیستم‌های ارزان، «بن‌بستِ توسعه» است. وقتی سفارشات روزانه شما از ۱۰ به ۱۰۰۰ عدد برسد، سیستم آن‌ها نابود می‌شود. اما با معماری اختصاصی ما:',
  s1Bold: 'مقیاس‌پذیری بی‌نهایت (Scalability):',
  s1Tail: ' دیتابیس و کدهای شما طوری مهندسی می‌شوند که توان پردازشِ سنگین‌ترین ترافیک‌های مالی و کاربری را داشته باشند.',
  s2Bold: 'مالکیت کامل و استقلال:',
  s2Tail: ' شما مالکِ سورس‌کد سیستم خود خواهید بود و هیچ‌گاه اسیر محدودیت‌های سایت‌سازهای اجاره‌ای نمی‌شوید.',
  finalTag: '04 / قدم بعدی',
  finalTitlePre: 'آماده‌اید مدیریتِ کسب‌وکار خود را ',
  finalTitleAccent: 'به یک ماشینِ خودکار تبدیل کنید؟',
  finalDesc: 'ما به شما کمک می‌کنیم تا به جای درگیر شدن با کارهای تکراری روزمره، روی توسعه و رشد شرکت خود تمرکز کنید. برای بررسی فنی و استخراج نیازمندی‌های سیستم اختصاصیِ خودتان، با ما ارتباط بگیرید.',
  finalCtaPrimary: 'دریافت مشاوره فنی',
  finalCtaSecondary: 'مشاهده سایر خدمات'
} : {
  seoTitle: 'Custom Business Digital System & Automation | FADAKAR',
  seoDesc: 'Custom business software infrastructure; proprietary dashboards, CRM integration, workflow automation, and multi-service API pipelines.',
  sections: [
    { id: 'why', label: 'Why Custom System?' },
    { id: 'advice', label: 'Operational Warnings' },
    { id: 'solutions', label: 'System Features' },
    { id: 'business', label: 'Our Distinction' },
    { id: 'final', label: 'Next Step' }
  ],
  consultationBtn: 'System Advisory',
  heroBadge: 'Custom Digital Operating System & Automation',
  heroTitlePrefix: 'We Don’t Just Build You a "Website";',
  heroTitleAccent: 'We Architect the Brain of Your Business.',
  heroP1: 'Imagine if social platforms or tech giants gave you a "100% free website" tomorrow. Would that resolve your daily operational bottlenecks? Absolutely not. ',
  heroHighlight: 'Beyond an online showcase, you require an operational management engine.',
  heroP2: ' You need software that tracks customer cohorts, synchronizes inventory, dispatches automated alerts, and computes real-time profit analytics.',
  heroCtaPrimary: 'What Does This System Deliver?',
  metric1: 'Intelligent Dashboard',
  metric2: 'Full Automation',
  metric3: 'Data Integrity',
  cardCommandCenter: 'Command Center',
  cardSalesToday: 'Today’s Volume',
  cardSalesVal: '$14,250',
  cardSalesUnit: 'USD',
  cardSalesGrowth: '+12% Growth',
  cardCrmClients: 'Active CRM Clients',
  cardCrmVal: '1,284',
  cardCrmUnit: 'Accounts',
  cardCrmStatus: 'Connected to SMS Gateway',
  cardActiveAutomations: 'Active Automations',
  cardAuto1Text: 'Dispatch receipt to client WhatsApp',
  cardAuto1Badge: 'Running',
  cardAuto2Text: 'Sync warehouse inventory with storefront',
  cardAuto2Badge: 'Automated',
  whyTag: '01 / The Hidden ROI',
  whyTitle: 'A "Cosmetic Website" Never Solves Internal Operational Friction.',
  whyP1Pre: 'Most firms believe launching an attractive frontend completes their digital transformation. Yet the customer-facing interface is only 10% of reality. As order volume surges, if your team must manually enter records into Excel, mail invoices by hand, and text clients tracking IDs one-by-one, ',
  whyP1H: 'your website becomes a new operational burden rather than an empowering asset!',
  whyP2Pre: 'We build the massive submerged portion of the digital iceberg: ',
  whyP2Bold: 'your proprietary operations infrastructure.',
  whyP2Tail: ' Software calibrated around your exact revenue model and daily logistics to eliminate human error entirely.',
  adviceTag: '02 / Executive Warning',
  adviceTitle: 'Software Traps That Paralyze Growing Enterprises',
  adviceSubtitle: 'If your business is scaling, beware of these three operational quagmires that quietly drain capital and hours:',
  a1Title: '1. Disconnected Data Silos',
  a1Desc: 'Running an off-the-shelf storefront alongside isolated accounting software and a separate messaging tool with zero API communication. Employees waste hours daily manually copy-pasting data between disconnected systems.',
  a2Title: '2. Human Capital Wasted on Repetitive Tasks',
  a2Desc: 'If your staff spends hours fielding "where is my order?" inquiries, issuing manual receipts, or chasing renewals, you are burning payroll. Computers were invented to execute repetitive workflows in milliseconds.',
  a3Title: '3. Strategic Blindness (Data Starvation)',
  a3Desc: 'When customer records and transactional histories are fragmented across notebooks, spreadsheets, and social DMs, executive reporting is impossible. You cannot deduce which demographic drives peak margins.',
  solTag: '03 / Bespoke Infrastructure',
  solTitle: 'We Engineer Business Tools, Not Passive Advertising Banners!',
  solSubtitle: 'A genuine commercial operating system is developed bespoke to mesh with your organization like clockwork:',
  c1Title: 'Executive Dashboards & Reporting',
  c1Desc: 'Monitor real-time revenue, active user funnels, inventory turnover, and critical KPIs in a unified, single-screen workspace.',
  c2Title: 'Tailored CRM & Audience Segments',
  c2Desc: 'Categorize customer tiers, inspect lifecycle order histories, trigger automated loyalty perks, and track behavioral retention.',
  c3Title: 'Fierce Process Automation',
  c3Desc: 'Automated invoice generation, warehouse dispatch routing, abandoned-cart SMS triggers, and live order status pipelines run autonomously.',
  c4Title: 'Seamless API Integrations',
  c4Desc: 'Direct bidirectional webhooks connecting WhatsApp, Telegram, enterprise accounting ERPs, and courier delivery APIs.',
  bizBadge: 'Our Fundamental Difference',
  bizTitlePre: '“We Never Force Your Business Into Pre-Made Themes;',
  bizTitleAccent: 'We Write Code Exclusively For Your Business!”',
  bizP1: 'Off-the-shelf software vendors force bloated features you never touch, while lacking the exact operational workflow you desperately need.',
  bizP2H: 'We avoid locked plugins and rigid page-builders.',
  bizP2Tail: ' You describe how your company operates, and we translate that exact workflow into a robust, high-performance software system.',
  scaleTitle: 'Infrastructure Engineered to Scale Alongside You.',
  scaleDesc: 'Cheap template setups inevitably collapse when daily transactions jump from 10 to 1,000. Our custom architecture guarantees:',
  s1Bold: 'Infinite Architectural Scalability:',
  s1Tail: ' Databases and server endpoints engineered to absorb intense transactional and traffic loads with zero lag.',
  s2Bold: 'Absolute Codebase Ownership:',
  s2Tail: ' You retain complete legal and technical ownership of your source code, free from closed subscription platform restrictions.',
  finalTag: '04 / Next Step',
  finalTitlePre: 'Ready to Convert Your Daily Operations ',
  finalTitleAccent: 'Into an Automated Engine?',
  finalDesc: 'We empower your leadership team to focus on strategic growth rather than manual administrative tasks. Connect with us for a technical consultation to map out your bespoke digital system.',
  finalCtaPrimary: 'Request Technical Consultation',
  finalCtaSecondary: 'Explore All Services'
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
  <div :dir="isRtl ? 'rtl' : 'ltr'" class="min-h-screen bg-[#020617] text-slate-200 selection:bg-[#06b6d4]/30 selection:text-white" :class="isRtl ? 'font-[\'Vazirmatn\']' : 'font-sans'">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#06b6d4]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in copy.sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none; cursor: pointer;">{{ item.label }}</button>
        </div>
        <div class="flex items-center gap-3">
          <button @click="toggleLang" class="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-300 transition hover:bg-white/10 hover:text-white" :aria-label="locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'">
            {{ locale === 'fa' ? 'EN' : 'FA' }}
          </button>
          <NuxtLink to="/services" class="rounded-lg bg-[#06b6d4] px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-cyan-400 shadow-lg shadow-[#06b6d4]/20">{{ copy.consultationBtn }}</NuxtLink>
        </div>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/10 px-4 py-2 text-sm font-bold text-[#06b6d4]">
              {{ copy.heroBadge }}
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4.2rem] text-white">
              {{ copy.heroTitlePrefix }} <br>
              <span class="text-[#06b6d4]">{{ copy.heroTitleAccent }}</span>
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              {{ copy.heroP1 }}<mark class="highlight-text font-bold text-white bg-[#06b6d4]/30 rounded-md px-1.5 py-0.5">{{ copy.heroHighlight }}</mark>{{ copy.heroP2 }}
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('solutions')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200 shadow-xl shadow-white/10">{{ copy.heroCtaPrimary }}</button>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#06b6d4]">01</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric1 }}</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">02</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric2 }}</span></div>
              <div class="px-6"><strong class="block text-3xl font-black text-slate-500">03</strong><span class="mt-2 block text-sm font-medium text-slate-400">{{ copy.metric3 }}</span></div>
            </div>
          </div>
          
          <div class="anim-text relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0f172a] shadow-2xl shadow-[#06b6d4]/10 p-8 flex flex-col gap-6">
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
              <div class="flex items-center gap-3">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div class="text-xs font-bold text-[#06b6d4] uppercase tracking-widest">{{ copy.cardCommandCenter }}</div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-black/50 p-4 rounded-xl border border-white/5">
                <div class="text-slate-400 text-xs mb-1">{{ copy.cardSalesToday }}</div>
                <div class="text-2xl font-black text-white">{{ copy.cardSalesVal }} <span class="text-sm text-slate-500 font-normal">{{ copy.cardSalesUnit }}</span></div>
                <div class="text-green-400 text-xs mt-2 flex items-center gap-1"><svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> {{ copy.cardSalesGrowth }}</div>
              </div>
              <div class="bg-black/50 p-4 rounded-xl border border-white/5">
                <div class="text-slate-400 text-xs mb-1">{{ copy.cardCrmClients }}</div>
                <div class="text-2xl font-black text-white">{{ copy.cardCrmVal }} <span class="text-sm text-slate-500 font-normal">{{ copy.cardCrmUnit }}</span></div>
                <div class="text-blue-400 text-xs mt-2">{{ copy.cardCrmStatus }}</div>
              </div>
            </div>
            
            <div class="bg-black/50 p-4 rounded-xl border border-white/5 flex-1">
              <div class="text-slate-400 text-xs mb-4">{{ copy.cardActiveAutomations }}</div>
              <div class="space-y-3">
                <div class="flex items-center justify-between text-sm">
                  <span class="text-slate-300">{{ copy.cardAuto1Text }}</span>
                  <span class="text-[#06b6d4] text-xs bg-[#06b6d4]/10 px-2 py-1 rounded">{{ copy.cardAuto1Badge }}</span>
                </div>
                <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden"><div class="bg-[#06b6d4] w-3/4 h-full"></div></div>
                
                <div class="flex items-center justify-between text-sm pt-2">
                  <span class="text-slate-300">{{ copy.cardAuto2Text }}</span>
                  <span class="text-[#06b6d4] text-xs bg-[#06b6d4]/10 px-2 py-1 rounded">{{ copy.cardAuto2Badge }}</span>
                </div>
                <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden"><div class="bg-[#06b6d4] w-full h-full"></div></div>
              </div>
            </div>
            
            <div class="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 pointer-events-none"></div>
          </div>
        </div>
      </section>

      <!-- Why Section -->
      <section id="why" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6">
          <div class="anim-text mb-12 text-center">
            <span class="inline-block rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#06b6d4]">{{ copy.whyTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.whyTitle }}</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              {{ copy.whyP1Pre }}
              <mark class="highlight-text font-bold text-white bg-[#06b6d4]/30 rounded-md px-1.5 py-0.5">{{ copy.whyP1H }}</mark>
            </p>
            <p>
              {{ copy.whyP2Pre }}<strong>{{ copy.whyP2Bold }}</strong>{{ copy.whyP2Tail }}
            </p>
          </div>
        </div>
      </section>

      <!-- Advisory Section -->
      <section id="advice" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5 bg-[#050f1f]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center mb-16">
            <span class="inline-block rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-black tracking-widest text-rose-400">{{ copy.adviceTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.adviceTitle }}</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              {{ copy.adviceSubtitle }}
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-3">
            <article class="anim-text group rounded-[24px] border border-rose-900/30 bg-[#020617] p-8 transition hover:border-rose-500/40">
              <h3 class="text-xl font-black text-rose-400 mb-4 flex items-center gap-3">
                {{ copy.a1Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a1Desc }}</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-rose-900/30 bg-[#020617] p-8 transition hover:border-rose-500/40">
              <h3 class="text-xl font-black text-rose-400 mb-4 flex items-center gap-3">
                {{ copy.a2Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a2Desc }}</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-rose-900/30 bg-[#020617] p-8 transition hover:border-rose-500/40">
              <h3 class="text-xl font-black text-rose-400 mb-4 flex items-center gap-3">
                {{ copy.a3Title }}
              </h3>
              <p class="text-slate-400 leading-7">{{ copy.a3Desc }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Solutions Section -->
      <section id="solutions" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-[#06b6d4]/20 bg-gradient-to-b from-[#06b6d4]/10 to-[#020617]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text mb-16 max-w-3xl">
            <span class="inline-block rounded-full border border-white/10 bg-[#0f172a] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">{{ copy.solTag }}</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.solTitle }}</h2>
            <p class="mt-6 text-lg leading-9 text-slate-300">
              {{ copy.solSubtitle }}
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#06b6d4]/50 transition-colors">
              <div class="text-[#06b6d4] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c1Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c1Desc }}</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#06b6d4]/50 transition-colors">
              <div class="text-[#06b6d4] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c2Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c2Desc }}</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#06b6d4]/50 transition-colors">
              <div class="text-[#06b6d4] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c3Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c3Desc }}</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#06b6d4]/50 transition-colors">
              <div class="text-[#06b6d4] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg></div>
              <h4 class="text-white font-bold mb-2">{{ copy.c4Title }}</h4>
              <p class="text-sm text-slate-400 leading-6">{{ copy.c4Desc }}</p>
            </div>
          </div>

          <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
            <!-- Warning Card -->
            <div id="business" class="anim-text relative rounded-[24px] border border-[#06b6d4]/40 bg-black/80 backdrop-blur-xl p-10 shadow-2xl shadow-[#06b6d4]/10">
              <div class="text-sm font-black text-[#06b6d4] mb-6 tracking-widest uppercase flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                {{ copy.bizBadge }}
              </div>
              <p class="text-3xl sm:text-4xl font-black leading-tight text-white mb-8">
                {{ copy.bizTitlePre }} <br>
                <span class="text-[#06b6d4]">{{ copy.bizTitleAccent }}</span>
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-lg leading-8 text-slate-300">
                {{ copy.bizP1 }}
                <br><br>
                <mark class="highlight-text font-bold text-white bg-[#06b6d4]/30 rounded-md px-1.5 py-0.5 mt-2 inline-block">{{ copy.bizP2H }}</mark>
                {{ copy.bizP2Tail }}
              </p>
            </div>
            
            <div class="anim-text">
              <h2 class="text-4xl font-black leading-tight sm:text-5xl text-white">{{ copy.scaleTitle }}</h2>
              <p class="mt-8 text-lg leading-9 text-slate-300">
                {{ copy.scaleDesc }}
              </p>
              
              <ul class="mt-8 space-y-6">
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#06b6d4]/20 p-2 rounded-lg text-[#06b6d4] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg></div>
                  <span><strong>{{ copy.s1Bold }}</strong>{{ copy.s1Tail }}</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#06b6d4]/20 p-2 rounded-lg text-[#06b6d4] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                  <span><strong>{{ copy.s2Bold }}</strong>{{ copy.s2Tail }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Final Section -->
      <section id="final" class="scroll-mt-24 relative py-24 lg:py-40 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6 text-center">
          <span class="anim-text inline-block rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#06b6d4]">{{ copy.finalTag }}</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            {{ copy.finalTitlePre }}
            <span class="text-[#06b6d4]">{{ copy.finalTitleAccent }}</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            {{ copy.finalDesc }}
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services" class="flex items-center justify-center gap-2 rounded-xl bg-[#06b6d4] px-10 py-4 text-lg font-black text-black transition-all hover:bg-cyan-400 shadow-lg shadow-[#06b6d4]/30">
              {{ copy.finalCtaPrimary }}
              <svg class="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </NuxtLink>
            <NuxtLink to="/services" class="flex items-center justify-center rounded-xl border border-white/20 bg-black px-10 py-4 text-lg font-black text-white transition-all hover:bg-slate-800">{{ copy.finalCtaSecondary }}</NuxtLink>
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
