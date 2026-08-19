<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useSeoMeta({
  title: 'طراحی سایت خدماتی و محلی | FADAKAR',
  description: 'توضیحات طراحی سایت خدمات محلی؛ راهکاری برای دیده شدن در جستجوهای گوگل و جذب مشتریان بومی و منطقه‌ای.'
})

const sections = [
  { id: 'why', label: 'چرا سایت خدماتی؟' },
  { id: 'advice', label: 'توصیه‌های دوستانه' },
  { id: 'guarantee', label: 'تضمین‌های ما' },
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
  <div dir="rtl" class="min-h-screen bg-[#050605] text-slate-200 font-['Vazirmatn'] selection:bg-[#10b981]/30 selection:text-white">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#050605]/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#10b981]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none;">{{ item.label }}</button>
        </div>
        <NuxtLink to="/services/demos/local-service" class="rounded-lg bg-[#10b981] px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-emerald-400 shadow-lg shadow-[#10b981]/20">مشاهده دمو</NuxtLink>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-2 text-sm font-bold text-[#10b981]">
              درباره طراحی سایت خدماتی و محلی (Local Business)
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4rem] text-white">
              وقتی مشتری به شما نیاز دارد، <br>
              <span class="text-[#10b981]">دقیقاً کجا دنبالتان می‌گردد؟</span>
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              فرض کنید لوله آب ترکیده، خودرو در جاده خراب شده یا کسی به دنبال یک کلینیک زیبایی در محله خودش است. 
              آنها اینستاگرام را باز نمی‌کنند؛ <mark class="highlight-text font-bold text-light bg-[#10b981]/30 rounded-md px-1 py-0.5 text-white">آنها در گوگل جستجو می‌کنند.</mark> 
              سایت خدماتی شما، قلاب شما برای گرفتن مشتریانی است که همین الان قصد خرید یا دریافت خدمات دارند.
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('advice')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200 shadow-xl shadow-white/10">نکات مهم قبل از طراحی</button>
              <NuxtLink to="/services/demos/local-service" class="rounded-xl border border-white/20 bg-black/50 px-8 py-4 text-base font-bold text-white transition hover:bg-slate-800 backdrop-blur-sm">دیدن نمونه دمو</NuxtLink>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#10b981]">01</strong><span class="mt-2 block text-sm font-medium text-slate-400">سئوی محلی (نقشه)</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">02</strong><span class="mt-2 block text-sm font-medium text-slate-400">دسترسی سریع</span></div>
              <div class="pl-6"><strong class="block text-3xl font-black text-slate-500">03</strong><span class="mt-2 block text-sm font-medium text-slate-400">تماس بی‌دردسر</span></div>
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
            <span class="inline-block rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#10b981]">01 / ایجاد حس نیاز</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">تفاوت بازدیدکننده و «مشتری واقعی» چیست؟</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              بسیاری از کسب‌وکارهای خدماتی (مثل تعمیرکاران، کلینیک‌ها، سالن‌های زیبایی، خدمات نظافت و وکلا) زمان زیادی را صرف تولید محتوا در شبکه‌های اجتماعی می‌کنند تا دیده شوند. این کار برای برندسازی عالی است، اما 
              <mark class="highlight-text font-bold text-light bg-[#10b981]/30 rounded-md px-1.5 py-0.5 text-white">فروش اصلی و پربازده زمانی اتفاق می‌افتد که کاربر خودش به دنبال شما بگردد.</mark>
            </p>
            <p>
              وقتی شما در کلماتی مثل «بهترین دندانپزشک در شیراز» یا «تعمیرات پکیج در غرب تهران» صفحه و سایتی هدفمند داشته باشید، کاربری که وارد سایت شما می‌شود دیگر نیازی به قانع شدن ندارد؛ او خودش تصمیم به خرید گرفته است و فقط به دنبال یک مجموعه قابل اعتماد می‌گردد تا تلفن را بردارد و تماس بگیرد. سایت شما، همان دلیلی است که او شما را به جای رقیبتان انتخاب می‌کند.
            </p>
          </div>
        </div>
      </section>

      <!-- Advisory Section (Replacing Mistakes) -->
      <section id="advice" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5 bg-[#0a0a05]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center mb-16">
            <span class="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-black tracking-widest text-amber-500">02 / یک مشاوره دوستانه</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">مراقب این تله‌ها باشید (حتی اگر با ما کار نمی‌کنید)</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              هدف ما تخریب دیگر روش‌ها نیست؛ اما بر اساس تجربه، کسب‌وکارهای محلی اغلب در این سه تله می‌افتند و بودجه خود را از دست می‌دهند:
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-3">
            <article class="anim-text group rounded-[24px] border border-amber-900/30 bg-[#050605] p-8 transition hover:border-amber-500/40">
              <h3 class="text-xl font-black text-amber-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۱.</span> غفلت از موبایل و سرعت
              </h3>
              <p class="text-slate-400 leading-7">بیش از ۸۰ درصد جستجوهای خدماتی محلی از طریق موبایل انجام می‌شود (در ماشین، در خیابان، یا در لحظه نیاز). اگر سایتی که می‌سازید در موبایل کند باشد یا شماره تماستان دم‌دست نباشد، کاربر به راحتی سایت را می‌بندد و سراغ لینک بعدی می‌رود.</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-amber-900/30 bg-[#050605] p-8 transition hover:border-amber-500/40">
              <h3 class="text-xl font-black text-amber-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۲.</span> سایت‌های سنگین و غیرمحلی
              </h3>
              <p class="text-slate-400 leading-7">گاهی شرکت‌ها هزینه‌های هنگفتی برای سایت‌هایی می‌کنند که انیمیشن‌های عجیب دارند، اما در سئوی محلی (Local SEO) و متصل شدن به Google Maps ضعف دارند. زیبایی به تنهایی وقتی در گوگل پیدا نشوید، زنگ تلفن شما را به صدا در نمی‌آورد.</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-amber-900/30 bg-[#050605] p-8 transition hover:border-amber-500/40">
              <h3 class="text-xl font-black text-amber-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۳.</span> پکیج‌های آماده و اجاره‌ای
              </h3>
              <p class="text-slate-400 leading-7">استفاده از سایت‌سازهای اجاره‌ای شاید برای شروع سریع خوب باشند، اما شما مالک واقعی سایت و سورس کد آن نیستید. وقتی کسب‌وکارتان رشد کند و بخواهید ساختار را تغییر دهید یا سئو را در دست بگیرید، محدودیت‌های این سرویس‌ها شما را متوقف می‌کند.</p>
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
                پیش از دیدن دمو بدانید
              </div>
              <p class="text-3xl sm:text-4xl font-black leading-tight text-white mb-8">
                «این دمو فقط یک نمونه است؛ <br>
                <span class="text-[#10b981]">هر خدمتی نیاز خاص خودش را دارد.</span>»
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-lg leading-8 text-slate-300">
                دمویی که طراحی کرده‌ایم، صرفاً یک مثال از چیدمان، سرعت و تجربه کاربری است تا بدانید خروجی کار ما چقدر روان و جذاب است. 
                <br><br>
                سایت واقعی شما، هرگز یک کپی از این دمو نخواهد بود.
                <mark class="highlight-text font-bold text-light bg-[#10b981]/30 rounded-md px-1.5 py-0.5 mt-2 inline-block text-white">یک قالیشویی، یک مرکز مشاوره و یک سالن زیبایی هر کدام زبان، لحن، و مسیر تماس کاملاً متفاوتی دارند.</mark> ما سایت را حول محور خدمات خاصِ خودِ شما می‌سازیم.
              </p>
            </div>
            
            <!-- Guarantee Section -->
            <div id="guarantee" class="anim-text">
              <span class="inline-block rounded-full border border-white/10 bg-[#1e293b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">03 / پیشنهاد ما به شما</span>
              <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">وقتی ما سایت شما را می‌سازیم...</h2>
              <p class="mt-8 text-lg leading-9 text-slate-300">
                ما سایت شما را به چشم یک ماشین تولید سرنخ (Lead) و تماس می‌بینیم، نه صرفاً یک تابلوی نقاشی:
              </p>
              
              <ul class="mt-8 space-y-8">
                <li class="flex items-start gap-5">
                  <div class="mt-1 bg-[#10b981]/20 p-3 rounded-xl text-[#10b981]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-xl">زیرساخت سئوی محلی (Local SEO)</h4>
                    <p class="text-slate-400 mt-2 leading-7">سایت شما از پایه برای جستجوهای کلمات کلیدی در شهر و محله شما بهینه می‌شود تا در نتایج مپ و سرچ بالا بیایید.</p>
                  </div>
                </li>
                <li class="flex items-start gap-5">
                  <div class="mt-1 bg-[#10b981]/20 p-3 rounded-xl text-[#10b981]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-xl">طراحی موبایل‌محورِ واقعی</h4>
                    <p class="text-slate-400 mt-2 leading-7">از آنجایی که مشتریان شما غالباً با موبایل جستجو می‌کنند، دکمه‌های تماس، رزرو و واتساپ کاملاً در دسترس و روان خواهند بود.</p>
                  </div>
                </li>
                <li class="flex items-start gap-5">
                  <div class="mt-1 bg-[#10b981]/20 p-3 rounded-xl text-[#10b981]">
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 class="text-white font-bold text-xl">سرعت بی‌رقیب</h4>
                    <p class="text-slate-400 mt-2 leading-7">به جای استفاده از پوسته‌های سنگین و کدهای مزاحم، سایت با معماری اختصاصی نوشته می‌شود تا در یک پلک‌زدن بارگذاری شود.</p>
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
          <span class="anim-text inline-block rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#10b981]">04 / قدم بعدی</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            آماده‌اید زنگ تماس کسب‌وکارتان را 
            <span class="text-[#10b981]">بیشتر به صدا درآورید؟</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            حالا که با اهمیت و حساسیت یک سایت خدماتی آشنا شدید، پیشنهاد می‌کنیم 
            <strong class="text-white">نمونه دموی ما را ببینید</strong> 
            تا با استانداردهای طراحی و تجربه کاربری (UX) آشنا شوید. سپس برای مشاوره رایگان با ما در ارتباط باشید.
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services/demos/local-service" class="flex items-center justify-center gap-2 rounded-xl bg-[#10b981] px-10 py-4 text-lg font-black text-black transition-all hover:bg-emerald-400 shadow-lg shadow-[#10b981]/30">
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
