<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useSeoMeta({
  title: 'طراحی سایت املاک و مستغلات | FADAKAR',
  description: 'طراحی سایت اختصاصی دپارتمان‌های املاک؛ رهایی از رقابت در پلتفرم‌های آگهی عمومی و ایجاد یک شعبه دیجیتال معتبر.'
})

const sections = [
  { id: 'why', label: 'چرا سایت املاک؟' },
  { id: 'advice', label: 'توصیه‌های دوستانه' },
  { id: 'solutions', label: 'راه‌حل‌های اختصاصی' },
  { id: 'business', label: 'این فقط یک دمو است' },
  { id: 'final', label: 'قدم بعدی' }
]

const reveal = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)
    
    // Animate text reveals to keep attention
    const texts = gsap.utils.toArray('.anim-text')
    texts.forEach((text: any) => {
      gsap.fromTo(text, 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: text, start: 'top 85%' } }
      )
    })
    
    // Animate highlight marks to draw the eye
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
  <div dir="rtl" class="min-h-screen bg-[#050505] text-slate-200 font-['Vazirmatn'] selection:bg-[#eab308]/30 selection:text-white">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#eab308]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none;">{{ item.label }}</button>
        </div>
        <NuxtLink to="/services/demos/real-estate" class="rounded-lg bg-[#eab308] px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-yellow-400 shadow-lg shadow-[#eab308]/20">مشاهده دمو</NuxtLink>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border border-[#eab308]/30 bg-[#eab308]/10 px-4 py-2 text-sm font-bold text-[#eab308]">
              درباره طراحی سایت دپارتمان‌های املاک
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4rem] text-white">
              ملکِ چند میلیاردی را نمی‌توان <br>
              <span class="text-[#eab308]">صرفاً در اینستاگرام فروخت!</span>
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              معاملات ملکی بر پایه «اعتماد» بنا شده‌اند. وقتی مشتری می‌خواهد تمام سرمایه زندگی‌اش را سرمایه‌گذاری کند، به دنبال یک دپارتمان معتبر می‌گردد، نه یک پیج ساده. 
              <mark class="highlight-text font-bold text-black bg-[#eab308] rounded-md px-1.5 py-0.5">سایت اختصاصی املاک، شعبه‌ی VIP و دیجیتال شماست.</mark> 
              جایی که اعتبار شما در آن می‌درخشد و مشتریان با خیال راحت ملک‌های شما را بررسی می‌کنند.
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('solutions')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200 shadow-xl shadow-white/10">چه ارزش‌هایی خلق می‌کنیم؟</button>
              <NuxtLink to="/services/demos/real-estate" class="rounded-xl border border-white/20 bg-black/50 px-8 py-4 text-base font-bold text-white transition hover:bg-slate-800 backdrop-blur-sm">دیدن نمونه دمو</NuxtLink>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#eab308]">01</strong><span class="mt-2 block text-sm font-medium text-slate-400">جستجوی پیشرفته</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">02</strong><span class="mt-2 block text-sm font-medium text-slate-400">نمایش لوکس</span></div>
              <div class="pl-6"><strong class="block text-3xl font-black text-slate-500">03</strong><span class="mt-2 block text-sm font-medium text-slate-400">اعتماد سازی</span></div>
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
            <span class="inline-block rounded-full border border-[#eab308]/30 bg-[#eab308]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#eab308]">01 / ارزش واقعی سایت</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">رهایی از رقابتِ فرسایشی در پلتفرم‌های آگهی!</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              اکثر مشاورین املاک در ایران، وابستگی شدیدی به پلتفرم‌هایی مثل «دیوار» دارند. شما برای نردبان کردن آگهی هزینه می‌کنید، اما 
              <mark class="highlight-text font-bold text-black bg-[#eab308]/80 rounded-md px-1.5 py-0.5">در دیوار، آگهی شما دقیقاً در کنار ده‌ها آگهی از رقبا قرار دارد.</mark>
              یک کلیک اشتباه کافی است تا مشتری شما وارد آگهی همکارتان در یک املاک دیگر شود.
            </p>
            <p>
              داشتن سایت اختصاصی یعنی <strong>ایجاد یک محیط انحصاری</strong>. وقتی مشتری وارد سایت شما می‌شود، دیگر هیچ رقیبی در کار نیست. او فقط فایل‌های شما، مشاورین شما و برند شما را می‌بیند. سایت شما نه تنها به فایل‌هایتان ارزش بیشتری می‌بخشد، بلکه کلاس کاری آژانس شما را از یک «املاکی ساده» به یک «دپارتمان سرمایه‌گذاری ملکی» ارتقا می‌دهد.
            </p>
          </div>
        </div>
      </section>

      <!-- Advisory Section -->
      <section id="advice" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5 bg-[#0a0a05]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center mb-16">
            <span class="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-black tracking-widest text-orange-500">02 / یک مشاوره دوستانه</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">چرا برخی از سایت‌های املاک شکست می‌خورند؟</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              طراحی سایت املاک جزو پیچیده‌ترین پروژه‌های وب است. به عنوان تیم توسعه‌دهنده، توصیه می‌کنیم هرگز در این سه تله‌ی رایج نیفتید:
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-3">
            <article class="anim-text group rounded-[24px] border border-orange-900/30 bg-[#050505] p-8 transition hover:border-orange-500/40">
              <h3 class="text-xl font-black text-orange-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۱.</span> فیلترهای ضعیف و کند
              </h3>
              <p class="text-slate-400 leading-7">خریدار ملک دقیقا می‌داند چه می‌خواهد: "آپارتمان، منطقه ۱، بالای ۱۰۰ متر، زیر ۵۰ میلیارد". اگر سایت شما نتواند این فیلترها را در کسری از ثانیه و بدون رفرش شدنِ خسته‌کننده اعمال کند، مشتری فوراً سایت را می‌بندد.</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-orange-900/30 bg-[#050505] p-8 transition hover:border-orange-500/40">
              <h3 class="text-xl font-black text-orange-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۲.</span> ظاهر غیرحرفه‌ای (افت اعتماد)
              </h3>
              <p class="text-slate-400 leading-7">استفاده از قالب‌های رایگان یا سایت‌سازهای ارزان برای صنعتی که با سرمایه‌های میلیاردی سروکار دارد، یک سم مهلک است. ظاهر ارزان سایت، در ناخودآگاهِ مشتری ترجمه می‌شود به: "این آژانس اعتبار کافی برای مدیریت معامله‌ی من را ندارد."</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-orange-900/30 bg-[#050505] p-8 transition hover:border-orange-500/40">
              <h3 class="text-xl font-black text-orange-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۳.</span> غفلت از موبایل و تور مجازی
              </h3>
              <p class="text-slate-400 leading-7">بسیاری از مشتریان در حال حرکت یا استراحت با موبایل خود به دنبال ملک می‌گردند. سایتی که تصاویر را درست در موبایل نشان ندهد یا امکان تماس سریع با مشاورِ مربوطه را نداشته باشد، عملاً بی‌فایده است.</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Solutions / Brainstorming Section -->
      <section id="solutions" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-[#eab308]/20 bg-gradient-to-b from-[#eab308]/10 to-[#050505]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div class="anim-text mb-16 max-w-3xl">
            <span class="inline-block rounded-full border border-white/10 bg-[#1e293b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">03 / طراحی راه‌حل</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">ما برای دپارتمان شما «سیستم» طراحی می‌کنیم، نه فقط یک پوسته!</h2>
            <p class="mt-6 text-lg leading-9 text-slate-300">
              نیاز یک دفتر املاک محلی با یک دپارتمان بزرگِ فروش پروژه‌های پیش‌فروش کاملا متفاوت است. ما قبل از کدنویسی، <strong>سناریوی فروش شما را پیاده‌سازی می‌کنیم:</strong>
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#eab308]/50 transition-colors">
              <div class="text-[#eab308] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">اگر مشاورین متعددی دارید...</h4>
              <p class="text-sm text-slate-400 leading-6">پروفایل اختصاصی برای هر مشاور می‌سازیم تا مشتری بتواند مستقیماً فایل‌های او را ببیند و با او در واتساپ یا تلگرام ارتباط بگیرد.</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#eab308]/50 transition-colors">
              <div class="text-[#eab308] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg></div>
              <h4 class="text-white font-bold mb-2">اگر روی مناطق خاصی متمرکزید...</h4>
              <p class="text-sm text-slate-400 leading-6">جستجوی نقشه-محور (Map Search) پیاده می‌کنیم تا خریدار بتواند دقیقاً در کوچه و خیابان مورد نظرش ملک‌ها را روی نقشه پیدا کند.</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#eab308]/50 transition-colors">
              <div class="text-[#eab308] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></div>
              <h4 class="text-white font-bold mb-2">اگر در حوزه پیش‌فروش کار می‌کنید...</h4>
              <p class="text-sm text-slate-400 leading-6">صفحات لندینگ ویژه پروژه‌ها می‌سازیم که شامل درصد پیشرفت پروژه، ویدیوهای هوایی و فرم دریافت مشاوره سرمایه‌گذاری باشد.</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#eab308]/50 transition-colors">
              <div class="text-[#eab308] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>
              <h4 class="text-white font-bold mb-2">اگر فایل‌های زیادی دارید...</h4>
              <p class="text-sm text-slate-400 leading-6">دیتابیس فوق‌سریع و فیلترهای آنی (AJAX) طراحی می‌کنیم که لود شدن هزاران فایل ملکی در آن، حتی یک ثانیه هم طول نکشد.</p>
            </div>
          </div>

          <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            <!-- Warning Card -->
            <div id="business" class="anim-text relative rounded-[24px] border border-[#eab308]/40 bg-black/80 backdrop-blur-xl p-10 shadow-2xl shadow-[#eab308]/10">
              <div class="text-sm font-black text-[#eab308] mb-6 tracking-widest uppercase flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                پیش از دیدن دمو بدانید
              </div>
              <p class="text-3xl sm:text-4xl font-black leading-tight text-white mb-8">
                «این دمو فقط یک نمونه است؛ <br>
                <span class="text-[#eab308]">ما سایت شما را بر اساس کلاس کاری‌تان طراحی می‌کنیم.</span>»
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-lg leading-8 text-slate-300">
                دمویی که طراحی کرده‌ایم، صرفاً برای نمایش قدرت و سرعت در فیلتر کردن ملک‌ها (مثل انتخاب متراژ و قیمت) و روان بودنِ انیمیشن‌ها است.
                <br><br>
                <mark class="highlight-text font-bold text-black bg-[#eab308]/90 rounded-md px-1.5 py-0.5 mt-2 inline-block">دیزاین و گرافیک یک آژانس فروش ویلاهای لوکس شمال با یک دپارتمان فروش آپارتمان در تهران از زمین تا آسمان متفاوت است.</mark> سایت نهایی شما دقیقاً بر اساس پالت رنگی و هویت سازمانیِ دپارتمان شما کدنویسی خواهد شد.
              </p>
            </div>
            
            <div class="anim-text">
              <h2 class="text-4xl font-black leading-tight sm:text-5xl text-white">تضمین‌های ما به مدیریت دپارتمان</h2>
              <p class="mt-8 text-lg leading-9 text-slate-300">
                ما می‌دانیم که مدیریت املاک زمانِ درگیر شدن با مشکلات فنیِ سایت را ندارد. سایت شما را با این استانداردها تحویل می‌دهیم:
              </p>
              
              <ul class="mt-8 space-y-6">
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#eab308]/20 p-2 rounded-lg text-[#eab308] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                  <span><strong>سریع‌ترین تجربه جستجو:</strong> مشتری بدون هیچ لگی، نتایج فیلترهای پیچیده را در لحظه مشاهده می‌کند.</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#eab308]/20 p-2 rounded-lg text-[#eab308] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg></div>
                  <span><strong>امنیت اطلاعات فایل‌ها:</strong> هیچ بات و خزنده‌ای نمی‌تواند دیتابیس فایل‌های ارزشمند شما را سرقت (Scrape) کند.</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#eab308]/20 p-2 rounded-lg text-[#eab308] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></div>
                  <span><strong>پنل ادمین فوق‌ساده:</strong> مشاورین شما می‌توانند حتی با موبایل، عکس‌ها و اطلاعات ملک جدید را در کمتر از ۱ دقیقه در سایت ثبت کنند.</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Final Section -->
      <section id="final" class="scroll-mt-24 relative py-24 lg:py-40 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6 text-center">
          <span class="anim-text inline-block rounded-full border border-[#eab308]/30 bg-[#eab308]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#eab308]">04 / قدم بعدی</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            آماده‌اید اعتبار برند املاک خود را 
            <span class="text-[#eab308]">به سطح اول شهر ارتقا دهید؟</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            شما لایق سایتی هستید که مانند بهترین مشاور شما، شبانه‌روز برایتان مشتریان واقعی پیدا کند. 
            <strong class="text-white">همین الان دموی املاک ما را بررسی کنید</strong> 
            تا سرعت و گرافیک بی‌نظیر آن را از نزدیک لمس کنید. سپس برای شروع طراحیِ پلتفرم اختصاصیِ دپارتمان خود با ما تماس بگیرید.
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services/demos/real-estate" class="flex items-center justify-center gap-2 rounded-xl bg-[#eab308] px-10 py-4 text-lg font-black text-black transition-all hover:bg-yellow-400 shadow-lg shadow-[#eab308]/30">
              ورود به صفحه دمو
              <svg class="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </NuxtLink>
            <NuxtLink to="/services" class="flex items-center justify-center rounded-xl border border-white/20 bg-black px-10 py-4 text-lg font-black text-white transition-all hover:bg-slate-800">بازگشت به خدمات</NuxtLink>
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
