<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useSeoMeta({
  title: 'طراحی سایت مد و پوشاک | FADAKAR',
  description: 'طراحی سایت اختصاصی بوتیک و برندهای فشن؛ رهایی از دایرکت‌های تکراری اینستاگرام و خلق یک تجربه خرید لوکس و بدون اصطکاک.'
})

const sections = [
  { id: 'why', label: 'چرا سایت فشن؟' },
  { id: 'advice', label: 'توصیه‌های دوستانه' },
  { id: 'solutions', label: 'طراحی راه‌حل' },
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
  <div dir="rtl" class="min-h-screen bg-[#050304] text-slate-200 font-['Vazirmatn'] selection:bg-[#ec4899]/30 selection:text-white">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#050304]/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#ec4899]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none;">{{ item.label }}</button>
        </div>
        <NuxtLink to="/services/demos/fashion" class="rounded-lg bg-[#ec4899] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-pink-500 shadow-lg shadow-[#ec4899]/20">مشاهده دمو</NuxtLink>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border border-[#ec4899]/30 bg-[#ec4899]/10 px-4 py-2 text-sm font-bold text-[#ec4899]">
              درباره طراحی سایت مد، فشن و پوشاک
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4.2rem] text-white">
              لباس‌های لوکسِ شما، <br>
              <span class="text-[#ec4899]">لایق ویترینِ ارزان نیستند.</span>
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              صنعت مد یعنی زیبایی، احساس و هویت. وقتی کاربر وارد سایت شما می‌شود، قبل از اینکه به قیمت لباس نگاه کند، ناخودآگاه کل برند شما را قضاوت می‌کند. 
              <mark class="highlight-text font-bold text-white bg-[#ec4899]/40 rounded-md px-1.5 py-0.5">یک سایت بی‌نقص، دقیقاً همان تفاوتِ بین یک «مزون لوکس» و یک «حراجی ساده» است.</mark> 
              سایت شما باید همان حسِ لمسِ پارچه و قدم زدن در یک بوتیک مدرن را منتقل کند.
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('why')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200 shadow-xl shadow-white/10">پایانِ پیام‌های «موجوده؟»</button>
              <NuxtLink to="/services/demos/fashion" class="rounded-xl border border-white/20 bg-black/50 px-8 py-4 text-base font-bold text-white transition hover:bg-slate-800 backdrop-blur-sm">دیدن نمونه دمو</NuxtLink>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#ec4899]">01</strong><span class="mt-2 block text-sm font-medium text-slate-400">هویت بصری</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">02</strong><span class="mt-2 block text-sm font-medium text-slate-400">خرید تک‌کلیکی</span></div>
              <div class="pl-6"><strong class="block text-3xl font-black text-slate-500">03</strong><span class="mt-2 block text-sm font-medium text-slate-400">انبارداری خودکار</span></div>
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
            <span class="inline-block rounded-full border border-[#ec4899]/30 bg-[#ec4899]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#ec4899]">01 / ارزش واقعی سایت</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">وقتی شما خوابید، سایت شما می‌فروشد!</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              بزرگترین کابوس آنلاین‌شاپ‌های لباس، دایرکت‌های بی‌پایان اینستاگرام است: <span class="italic text-white">"قد این کار چنده؟ رنگ مشکیش سایز لارج موجوده؟ کی ارسال میشه؟ شمارتون رو میدید واریز کنم؟"</span>. 
              این روند نه‌تنها ادمین‌ها را فرسوده می‌کند، بلکه باعث می‌شود <mark class="highlight-text font-bold text-white bg-[#ec4899]/40 rounded-md px-1.5 py-0.5">در ساعاتی که شما پاسخگو نیستید (مخصوصاً شب‌ها که پیک خرید اینترنتی است)، مشتری از خرید منصرف شود.</mark>
            </p>
            <p>
              اینستاگرام ویترین جذابی برای نمایش کالکشن‌های شماست، اما صندوق‌دارِ خوبی نیست! داشتن سایت اختصاصی یعنی مشتری عکس‌ها را می‌بیند، سایز و رنگ را با خیال راحت انتخاب می‌کند، موجودی را چک می‌کند، مبلغ را می‌پردازد و شما صبح فقط لیبلی برای ارسال چاپ می‌کنید. به همین سادگی.
            </p>
          </div>
        </div>
      </section>

      <!-- Advisory Section -->
      <section id="advice" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5 bg-[#0a0507]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center mb-16">
            <span class="inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-black tracking-widest text-pink-400">02 / یک مشاوره دوستانه</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">چرا برخی از سایت‌های لباس مشتری را فراری می‌دهند؟</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              خرید در صنعت فشن، یک تصمیم «احساسی و سریع» است. اگر سایت شما یکی از این سه مانع را داشته باشد، احساسِ مشتری را کور می‌کند:
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-3">
            <article class="anim-text group rounded-[24px] border border-pink-900/30 bg-[#050304] p-8 transition hover:border-pink-500/40">
              <h3 class="text-xl font-black text-pink-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۱.</span> فاجعه‌ی انتخاب سایز و رنگ
              </h3>
              <p class="text-slate-400 leading-7">یک تیشرت ممکن است ۴ رنگ و ۵ سایز داشته باشد. اگر کاربر نتواند به راحتی رنگ را عوض کند و ببیند آیا سایز مدیوم در رنگ آبی موجود است یا نه، سایت را می‌بندد. سیستم موجودی کالا (Inventory) در سایت‌های لباس باید بی‌نقص و بصری باشد.</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-pink-900/30 bg-[#050304] p-8 transition hover:border-pink-500/40">
              <h3 class="text-xl font-black text-pink-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۲.</span> ظاهر بازاری و ارزان
              </h3>
              <p class="text-slate-400 leading-7">برخی از سایت‌های وردپرسی طوری طراحی شده‌اند که انگار سایت فروش قطعات صنعتی هستند، نه لباس! استفاده از قالب‌های آماده و بی‌روح باعث می‌شود حتی بهترین و باکیفیت‌ترین لباس‌های شما، ارزان و بی‌کیفیت به نظر برسند.</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-pink-900/30 bg-[#050304] p-8 transition hover:border-pink-500/40">
              <h3 class="text-xl font-black text-pink-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۳.</span> پروسه خرید طولانی (قاتلِ فروش)
              </h3>
              <p class="text-slate-400 leading-7">مشتریِ فشن تکانشی (Impulsive) خرید می‌کند. اگر برای خرید یک کلاه از او بخواهید ایمیل تایید کند، کد ملی بدهد و ۵ مرحله فرم پر کند، پشیمان می‌شود. پرداخت باید در سریع‌ترین و کم‌اصطکاک‌ترین حالت ممکن انجام شود.</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Solutions / Brainstorming Section -->
      <section id="solutions" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-[#ec4899]/20 bg-gradient-to-b from-[#ec4899]/10 to-[#050304]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div class="anim-text mb-16 max-w-3xl">
            <span class="inline-block rounded-full border border-white/10 bg-[#1e293b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">03 / طراحی راه‌حل</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">ما برای سبکِ برندِ شما، ایده می‌دهیم.</h2>
            <p class="mt-6 text-lg leading-9 text-slate-300">
              یک برند لباس زیر زنانه با یک برند استریت‌استایل (Streetwear) پسرانه زمین تا آسمان فرق دارد. ما قبل از طراحی، <strong>استراتژی فروش شما را درک می‌کنیم:</strong>
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#ec4899]/50 transition-colors">
              <div class="text-[#ec4899] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">اگر کالکشن‌های لیمیتد (Drop) دارید...</h4>
              <p class="text-sm text-slate-400 leading-6">سیستم‌های تایمر معکوس و زیرساختِ مقاوم در برابر هجوم ناگهانی ترافیک (Traffic Spikes) برای شما پیاده می‌کنیم تا در زمان رونمایی، سایت کِرَش نکند.</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#ec4899]/50 transition-colors">
              <div class="text-[#ec4899] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">اگر استایل‌های ترکیبی می‌فروشید...</h4>
              <p class="text-sm text-slate-400 leading-6">قابلیت "تکمیلِ استایل" (Complete the Look) را در صفحه محصول می‌گذاریم؛ مثلاً کسی که شلوار می‌خرد، پیشنهاد خرید کمربند و کفش ستِ آن را هم ببیند.</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#ec4899]/50 transition-colors">
              <div class="text-[#ec4899] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></div>
              <h4 class="text-white font-bold mb-2">اگر مزون لوکس هستید...</h4>
              <p class="text-sm text-slate-400 leading-6">از ساختار Editorial و ویدیویی (Lookbook) با مینیمال‌ترین حالتِ دکمه‌ها استفاده می‌کنیم تا لباس‌ها مانند یک ژورنال فشن خودنمایی کنند.</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#ec4899]/50 transition-colors">
              <div class="text-[#ec4899] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>
              <h4 class="text-white font-bold mb-2">اگر تنوع کالای بالایی دارید...</h4>
              <p class="text-sm text-slate-400 leading-6">فیلترهای فوق‌پیشرفته (رنگ، سایز، جنس پارچه، فصل، نوع یقه) طراحی می‌کنیم تا کاربر از بین صدها لباس، در یک ثانیه لباس مطلوبش را پیدا کند.</p>
            </div>
          </div>

          <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            <!-- Warning Card -->
            <div id="business" class="anim-text relative rounded-[24px] border border-[#ec4899]/40 bg-black/80 backdrop-blur-xl p-10 shadow-2xl shadow-[#ec4899]/10">
              <div class="text-sm font-black text-[#ec4899] mb-6 tracking-widest uppercase flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                پیش از دیدن دمو بدانید
              </div>
              <p class="text-3xl sm:text-4xl font-black leading-tight text-white mb-8">
                «این دمو فقط یک نمونه است؛ <br>
                <span class="text-[#ec4899]">استایلِ سایت شما مختصِ خودتان خواهد بود.</span>»
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-lg leading-8 text-slate-300">
                دمویی که در بخش فشن آماده کرده‌ایم، تنها نمایشی از قدرت انیمیشن‌ها، طراحی‌های نرم‌افزاری مدرن (Parallax) و روان بودن المان‌های بصری ماست.
                <br><br>
                <mark class="highlight-text font-bold text-white bg-[#ec4899]/40 rounded-md px-1.5 py-0.5 mt-2 inline-block">ما به هیچ وجه از یک قالبِ ثابت برای همه برندها استفاده نمی‌کنیم.</mark> سایت شما بر اساس پالت رنگی، نوع عکاسیِ مدل‌های شما، و شخصیتِ برندِ شما از صفر طراحیِ بصری (UI/UX) و برنامه‌نویسی خواهد شد.
              </p>
            </div>
            
            <div class="anim-text">
              <h2 class="text-4xl font-black leading-tight sm:text-5xl text-white">کیفیت، در جزئیات پنهان است.</h2>
              <p class="mt-8 text-lg leading-9 text-slate-300">
                تفاوت لباسِ سفارشی‌دوز با لباس‌های کارخانه‌ای، در دوخت‌های ظریف و جنس پارچه است. کدنویسی اختصاصیِ ما برای شما نیز همین حکم را دارد:
              </p>
              
              <ul class="mt-8 space-y-6">
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#ec4899]/20 p-2 rounded-lg text-[#ec4899] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></div>
                  <span><strong>سرعت و بهینه‌سازی تصاویر:</strong> با وجود صدها عکسِ باکیفیت از لباس‌ها، سایت با الگوریتم‌های مدرن بهینه‌سازی شده و در چشم‌به‌هم‌زدنی روی موبایل لود می‌شود.</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#ec4899]/20 p-2 rounded-lg text-[#ec4899] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg></div>
                  <span><strong>سبد خرید فوق‌سریع:</strong> طراحی پروسه پرداخت در کمترین قدمِ ممکن، برای به حداقل رساندنِ ریزش مشتری.</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#ec4899]/20 p-2 rounded-lg text-[#ec4899] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                  <span><strong>همگام‌سازی انبار:</strong> کنترل بی‌نقص موجودیِ رنگ‌ها و سایزهای مختلف، تا هرگز کالایی که موجود نیست فروخته نشود.</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Final Section -->
      <section id="final" class="scroll-mt-24 relative py-24 lg:py-40 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6 text-center">
          <span class="anim-text inline-block rounded-full border border-[#ec4899]/30 bg-[#ec4899]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#ec4899]">04 / قدم بعدی</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            آماده‌اید فروش آنلاین برند خود را 
            <span class="text-[#ec4899]">کاملاً اتوماتیک و لوکس کنید؟</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            شما نیازی به پاسخ دادن به صدها دایرکتِ تکراری ندارید. 
            <strong class="text-white">همین الان دموی فشن و پوشاک ما را ببینید</strong> 
            تا با استانداردهای طراحی نرم‌افزارهای مدرنِ ما آشنا شوید. سپس برای خلق پلتفرمِ فروشِ اختصاصیِ برندتان، به ما پیام دهید.
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services/demos/fashion" class="flex items-center justify-center gap-2 rounded-xl bg-[#ec4899] px-10 py-4 text-lg font-black text-white transition-all hover:bg-pink-500 shadow-lg shadow-[#ec4899]/30">
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
