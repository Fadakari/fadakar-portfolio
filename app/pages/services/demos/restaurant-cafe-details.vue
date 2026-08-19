<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useSeoMeta({
  title: 'طراحی سایت رستوران و کافه | FADAKAR',
  description: 'طراحی سایت اختصاصی رستوران و کافه؛ از منوی دیجیتال هوشمند تا سیستم رزرو و سفارش بدون کمیسیون.'
})

const sections = [
  { id: 'why', label: 'چرا سایت رستوران؟' },
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
  <div dir="rtl" class="min-h-screen bg-[#070505] text-slate-200 font-['Vazirmatn'] selection:bg-[#f97316]/30 selection:text-white">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#070505]/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#f97316]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none;">{{ item.label }}</button>
        </div>
        <NuxtLink to="/services/demos/restaurant-cafe" class="rounded-lg bg-[#f97316] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-orange-500 shadow-lg shadow-[#f97316]/20">مشاهده دمو</NuxtLink>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border-[#f97316]/30 bg-[#f97316]/10 px-4 py-2 text-sm font-bold text-[#f97316] border">
              درباره طراحی سایت رستوران و کافه
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4rem] text-white">
              قبل از اینکه طعم غذای شما را بچشند، <br>
              <span class="text-[#f97316]">سایت شما را می‌بینند.</span>
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              اینستاگرام برای نشان دادن فضای رستوران عالی است، اما برای سفارش دادن، دیدن منوی کامل و رزرو میز، کاربر را خسته می‌کند. 
              <mark class="highlight-text font-bold text-light bg-[#f97316]/30 rounded-md px-1 py-0.5 text-white">سایت شما در واقع میزبان دیجیتال شماست.</mark> 
              همانطور که میزهایتان را با دقت می‌چینید، تجربه دیجیتال مشتری هم باید بی‌نقص و اشتها‌آور باشد!
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('solutions')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200 shadow-xl shadow-white/10">مشکلات شما را چگونه حل می‌کنیم؟</button>
              <NuxtLink to="/services/demos/restaurant-cafe" class="rounded-xl border border-white/20 bg-black/50 px-8 py-4 text-base font-bold text-white transition hover:bg-slate-800 backdrop-blur-sm">دیدن نمونه دمو</NuxtLink>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#f97316]">01</strong><span class="mt-2 block text-sm font-medium text-slate-400">سفارش مستقیم</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">02</strong><span class="mt-2 block text-sm font-medium text-slate-400">منوی هوشمند</span></div>
              <div class="pl-6"><strong class="block text-3xl font-black text-slate-500">03</strong><span class="mt-2 block text-sm font-medium text-slate-400">رزرو آنلاین</span></div>
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
            <span class="inline-block rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#f97316]">01 / ارزش واقعی</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">آیا پیج اینستاگرام کافی نیست؟</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              مشتری گرسنه‌ای که می‌خواهد سریعاً سفارش دهد یا کسی که می‌خواهد برای فردا شب یک میز دو نفره رزرو کند، نمی‌تواند منتظر جواب دایرکت اینستاگرام بماند. 
              <mark class="highlight-text font-bold text-light bg-[#f97316]/30 rounded-md px-1.5 py-0.5 text-white">هر ثانیه تأخیر در پاسخگویی، یعنی هدایت مشتری به سمت رستوران رقیب.</mark>
            </p>
            <p>
              سایت شما یک کارمند خستگی‌ناپذیر است؛ منو را با جزئیات کامل و مواد اولیه نشان می‌دهد، سفارش‌ها و پرداخت‌ها را ثبت می‌کند و وقت پرسنل شما را آزاد می‌کند تا به جای پاسخ دادن به تلفن‌ها (آدرس کجاست؟ تا ساعت چند باز هستید؟)، روی کیفیت پذیرایی حضوری تمرکز کنند.
            </p>
          </div>
        </div>
      </section>

      <!-- Advisory Section -->
      <section id="advice" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5 bg-[#0a0605]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center mb-16">
            <span class="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-black tracking-widest text-amber-500">02 / یک مشاوره دوستانه</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">تله‌های رایج در دنیای کافه و رستوران</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              توصیه می‌کنیم پیش از اینکه برای هر زیرساخت دیجیتالی هزینه کنید، مراقب این سه اشتباه که بودجه شما را هدر می‌دهند، باشید:
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-3">
            <article class="anim-text group rounded-[24px] border border-amber-900/30 bg-[#070505] p-8 transition hover:border-amber-500/40">
              <h3 class="text-xl font-black text-amber-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۱.</span> منوهای PDF عذاب‌آور
              </h3>
              <p class="text-slate-400 leading-7">استفاده از فایل‌های PDF سنگین یا عکسِ منو روی سایت، بدترین تجربه برای مشتری است. کاربر مجبور است روی صفحه کوچک موبایل زوم کند تا قیمت‌ها را بخواند. منو باید هوشمند، قابل جستجو و دارای فیلتر (مثلا غذاهای تند، رژیمی) باشد.</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-amber-900/30 bg-[#070505] p-8 transition hover:border-amber-500/40">
              <h3 class="text-xl font-black text-amber-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۲.</span> پرداخت کمیسیون‌های سنگین
              </h3>
              <p class="text-slate-400 leading-7">همکاری با اپلیکیشن‌های واسطه (مثل اسنپ‌فود) برای جذب مشتری جدید خوب است؛ اما چرا مشتریان وفادار و همیشگی شما باید از طریق آن‌ها سفارش دهند تا شما ۱۵٪ کمیسیون بدهید؟ سایت شما، سیستم سفارش مستقیم و بدون واسطه شماست.</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-amber-900/30 bg-[#070505] p-8 transition hover:border-amber-500/40">
              <h3 class="text-xl font-black text-amber-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۳.</span> تضاد کیفیت غذا با ظاهر سایت
              </h3>
              <p class="text-slate-400 leading-7">اگر شما یک رستوران لوکس با استیک‌های باکیفیت هستید، سایت شما نباید شبیه یک فست‌فود ارزان‌قیمت باشد. ظاهر سایتِ آماده و نامرتبط، ارزش برند شما و پولی که برای دیزاین فضای رستوران خرج کرده‌اید را زیر سوال می‌برد.</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Solutions / Brainstorming Section -->
      <section id="solutions" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-[#f97316]/20 bg-gradient-to-b from-[#f97316]/10 to-[#070505]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div class="anim-text mb-16 max-w-3xl">
            <span class="inline-block rounded-full border border-white/10 bg-[#1e293b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">03 / طراحی راه‌حل</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">ما فقط کد نمی‌نویسیم؛ گره‌های کار شما را باز می‌کنیم!</h2>
            <p class="mt-6 text-lg leading-9 text-slate-300">
              ما پیش از شروع کار، فرآیند کاری رستوران شما را آنالیز می‌کنیم تا به جای یک سایت نمایشی، <strong>راه‌حل‌هایی به شما پیشنهاد دهیم که کارتان را راحت‌تر کند:</strong>
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl">
              <div class="text-[#f97316] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">اگر همیشه صف دارید...</h4>
              <p class="text-sm text-slate-400 leading-6">برایتان سیستم نوبت‌دهی آنلاین یا رزرو میز با تقویم هوشمند می‌سازیم تا جلوی درب شلوغ نشود.</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl">
              <div class="text-[#f97316] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">اگر دلیوری بالایی دارید...</h4>
              <p class="text-sm text-slate-400 leading-6">سیستم سفارش مستقیم با قابلیت پیگیری وضعیت ارسال می‌سازیم تا کمیسیون واسطه‌ها را حذف کنید.</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl">
              <div class="text-[#f97316] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg></div>
              <h4 class="text-white font-bold mb-2">اگر کافه شلوغی هستید...</h4>
              <p class="text-sm text-slate-400 leading-6">یک QR-Code هوشمند روی میزها قرار می‌دهیم که به جای عکس، منوی زنده و فیلتردار سایت را باز کند.</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl">
              <div class="text-[#f97316] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h4 class="text-white font-bold mb-2">اگر مشتری ثابت زیاد دارید...</h4>
              <p class="text-sm text-slate-400 leading-6">باشگاه مشتریان اختصاصی پیاده می‌کنیم تا با کدهای تخفیف خودکار روی سایت، آن‌ها را به سفارش مجدد ترغیب کنید.</p>
            </div>
          </div>

          <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            <!-- Warning Card -->
            <div id="business" class="anim-text relative rounded-[24px] border border-[#f97316]/40 bg-black/80 backdrop-blur-xl p-10 shadow-2xl shadow-[#f97316]/10">
              <div class="text-sm font-black text-[#f97316] mb-6 tracking-widest uppercase flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                پیش از دیدن دمو بدانید
              </div>
              <p class="text-3xl sm:text-4xl font-black leading-tight text-white mb-8">
                «این دمو فقط یک نمونه است؛ <br>
                <span class="text-[#f97316]">شخصیت کافه شما فرق می‌کند!</span>»
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-lg leading-8 text-slate-300">
                دمویی که طراحی کرده‌ایم، صرفاً یک مثال فنی از امکاناتی مثل فیلترهای سریع (تند، گیاهی، اقتصادی) و استایل‌های مدرن است.
                <br><br>
                <mark class="highlight-text font-bold text-light bg-[#f97316]/30 rounded-md px-1.5 py-0.5 mt-2 inline-block text-white">یک سفره‌خانه سنتی با یک کافه‌ی مدرنِ موج سوم یا یک فست‌فود بیرون‌بر، از نظر بصری کاملاً متفاوت هستند.</mark> ما سایت را متناسب با هویت برند، رنگ‌ها و اتمسفر رستوران خود شما دیزاین می‌کنیم.
              </p>
            </div>
            
            <div class="anim-text">
              <h2 class="text-4xl font-black leading-tight sm:text-5xl text-white">کیفیت سایت، مانند کیفیت مواد اولیه است.</h2>
              <p class="mt-8 text-lg leading-9 text-slate-300">
                همانطور که شما برای پخت یک غذای عالی از مواد اولیه بی‌کیفیت استفاده نمی‌کنید، ما هم برای ساخت پلتفرم فروش شما از قالب‌های سنگین آماده استفاده نمی‌کنیم. کدنویسی اختصاصیِ ما یعنی:
              </p>
              
              <ul class="mt-8 space-y-6">
                <li class="flex items-start gap-4 text-slate-300">
                  <svg class="w-6 h-6 text-[#f97316] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>بارگذاری آنی منو</strong> روی ضعیف‌ترین موبایل‌ها و اینترنت‌ها.</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <svg class="w-6 h-6 text-[#f97316] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>پنل مدیریت بسیار ساده</strong> برای ادمین، تا بتواند قیمت‌ها را در کسری از ثانیه آپدیت کند یا موجودی یک غذا را صفر کند.</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <svg class="w-6 h-6 text-[#f97316] shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  <span><strong>سئوی تکنیکال</strong> برای اینکه در گوگلِ شهر خودتان دیده شوید.</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Final Section -->
      <section id="final" class="scroll-mt-24 relative py-24 lg:py-40 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6 text-center">
          <span class="anim-text inline-block rounded-full border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#f97316]">04 / قدم بعدی</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            آماده‌اید طعم یک تجربه دیجیتال لوکس را 
            <span class="text-[#f97316]">به مشتریان بچشانید؟</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            پلتفرم رستوران شما می‌تواند بزرگترین شعبه‌ی شما باشد. 
            <strong class="text-white">از دموی هوشمند رستوران و کافه دیدن کنید</strong> 
            تا ببینید جستجوی سریع و تجربه کاربری چقدر در حس کاربر تفاوت ایجاد می‌کند. سپس منوی خود را به ما بسپارید.
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services/demos/restaurant-cafe" class="flex items-center justify-center gap-2 rounded-xl bg-[#f97316] px-10 py-4 text-lg font-black text-white transition-all hover:bg-orange-500 shadow-lg shadow-[#f97316]/30">
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
