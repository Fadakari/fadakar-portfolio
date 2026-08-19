<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useSeoMeta({
  title: 'تجربه دیجیتال و اتوماسیون هوشمند (AI) | FADAKAR',
  description: 'طراحی مسیرهای هوشمند برای تبدیل کاربر به مشتری، اتصال هوش مصنوعی به فرآیندهای فروش و ایجاد تجربه‌ای که ربات‌ها نمی‌توانند آن را خلق کنند.'
})

const sections = [
  { id: 'why', label: 'چرا تخصص مهم است؟' },
  { id: 'advice', label: 'تله‌های هوش مصنوعی' },
  { id: 'solutions', label: 'راه‌حل‌های ما' },
  { id: 'business', label: 'مرز بین ابزار و استراتژی' },
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
  <div dir="rtl" class="min-h-screen bg-[#050307] text-slate-200 font-['Vazirmatn'] selection:bg-[#a855f7]/30 selection:text-white">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-[#050307]/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#a855f7]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none;">{{ item.label }}</button>
        </div>
        <NuxtLink to="/services" class="rounded-lg bg-[#a855f7] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-purple-500 shadow-lg shadow-[#a855f7]/20">مشاوره هوش مصنوعی</NuxtLink>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-2 text-sm font-bold text-[#a855f7]">
              طراحی تجربه دیجیتال (UX) و اتوماسیون (AI)
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4.2rem] text-white">
              همه می‌توانند یک سایت بسازند؛ <br>
              <span class="text-[#a855f7]">اما همه نمی‌توانند بفروشند.</span>
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              آینده دقیقاً این شکلی است: هر کسی می‌تواند با زدن یک دکمه در ابزارهای AI، برای خودش یک سایتِ زیبا بسازد. 
              <mark class="highlight-text font-bold text-white bg-[#a855f7]/30 rounded-md px-1.5 py-0.5">اما هوش مصنوعی نمی‌داند مشتریِ شما در ایران چه دغدغه‌ای دارد!</mark> 
              نمی‌داند چطور کاربر را به مشتری تبدیل کند، چه داده‌ای را جمع‌آوری کند و اتوماسیون را کجای کار وارد کند. اینجا، دقیقاً نقطه‌ای است که <strong>متخصصِ تجربه کاربری و استراتژیست</strong> وارد عمل می‌شود.
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('solutions')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200 shadow-xl shadow-white/10">طراحی مسیر فروش</button>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#a855f7]">UX</strong><span class="mt-2 block text-sm font-medium text-slate-400">طراحی تجربه کاربر</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">AI</strong><span class="mt-2 block text-sm font-medium text-slate-400">دستیار هوشمند</span></div>
              <div class="pl-6"><strong class="block text-3xl font-black text-slate-500">CRO</strong><span class="mt-2 block text-sm font-medium text-slate-400">نرخ تبدیل مخاطب</span></div>
            </div>
          </div>
          
          <div class="anim-text relative overflow-hidden rounded-[24px] border border-white/10 bg-[#090510] shadow-2xl shadow-[#a855f7]/15 p-1 flex items-center justify-center">
            <!-- Simulated AI/Funnel UI Graphic -->
            <div class="w-full h-[450px] lg:h-[550px] bg-[#050307] rounded-[22px] relative overflow-hidden flex flex-col items-center justify-center">
              
              <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#a855f7]/10 via-[#050307]/50 to-[#050307] pointer-events-none"></div>
              
              <div class="relative z-10 w-full max-w-sm flex flex-col gap-4 px-6">
                <!-- User node -->
                <div class="bg-black border border-white/10 p-4 rounded-xl flex items-center justify-between text-sm text-slate-300 relative">
                  <span>۱. ورود بازدیدکننده (ترافیک گوگل)</span>
                  <div class="w-2 h-2 rounded-full bg-slate-500"></div>
                  <!-- Line connecting down -->
                  <div class="absolute -bottom-4 left-1/2 w-px h-4 bg-gradient-to-b from-slate-500 to-[#a855f7]"></div>
                </div>
                
                <!-- AI processing node -->
                <div class="bg-[#100520] border border-[#a855f7]/40 p-4 rounded-xl flex items-center gap-3 text-sm text-[#a855f7] shadow-[0_0_30px_rgba(168,85,247,0.15)] relative transform hover:scale-105 transition">
                  <svg class="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  <div>
                    <strong class="block text-white">۲. سیستم هوش مصنوعی</strong>
                    <span class="text-xs opacity-80">تحلیل رفتار و نمایش پیشنهاد شخصی‌سازی شده</span>
                  </div>
                  <!-- Line connecting down -->
                  <div class="absolute -bottom-4 left-1/2 w-px h-4 bg-[#a855f7]"></div>
                </div>
                
                <!-- Conversion node -->
                <div class="bg-black border border-green-500/30 p-4 rounded-xl flex items-center justify-between text-sm text-green-400 relative">
                  <span>۳. تبدیل موفق (خرید/تماس)</span>
                  <div class="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                </div>
              </div>
              
              <!-- Background glowing orbs specific to this card -->
              <div class="absolute top-0 right-0 w-64 h-64 bg-[#a855f7]/10 rounded-full blur-[80px] pointer-events-none"></div>
              <div class="absolute bottom-0 left-0 w-64 h-64 bg-[#a855f7]/10 rounded-full blur-[80px] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Section -->
      <section id="why" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6">
          <div class="anim-text mb-12 text-center">
            <span class="inline-block rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#a855f7]">01 / ارزش استراتژیست</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">ابزارها رایگان می‌شوند؛ اما قدرتِ تصمیم‌گیری خیر.</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              به زودی ابزارهای مبتنی بر هوش مصنوعی می‌توانند با یک دستور متنی (Prompt) در ۵ دقیقه یک وب‌سایتِ زیبا برای شما خلق کنند. اما سوال اصلی اینجاست: <strong>دقیقاً باید به ابزار بگویید چه چیزی بسازد؟</strong>
            </p>
            <p>
              اگر به هر فردی یک چاقوی جراحیِ لیزری و فوق‌پیشرفته بدهید، او جراح نمی‌شود! هوش مصنوعی و اتوماسیون، چاقوی جراحیِ کسب‌وکار شما هستند. شما همچنان نیاز به متخصصی دارید که بداند 
              <mark class="highlight-text font-bold text-white bg-[#a855f7]/30 rounded-md px-1.5 py-0.5">کاربر در کجای صفحه سایتِ شما منصرف می‌شود</mark>، 
              چه فرآیندی او را خسته کرده است، و هوش مصنوعی دقیقاً در کدام مرحله باید وارد عمل شود تا جلوی خروجِ مشتری را بگیرد.
            </p>
          </div>
        </div>
      </section>

      <!-- Advisory Section -->
      <section id="advice" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5 bg-[#0a0512]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center mb-16">
            <span class="inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-1.5 text-xs font-black tracking-widest text-pink-400">02 / یک مشاوره جدی</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">تله‌های استفاده‌ی کورکورانه از تکنولوژی</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              هیجان‌زدگی در استفاده از هوش مصنوعی می‌تواند به قیمت از دست دادن مشتریان واقعی شما تمام شود. مراقب این اشتباهات باشید:
            </p>
          </div>
          
          <div class="grid gap-8 md:grid-cols-3">
            <article class="anim-text group rounded-[24px] border border-pink-900/30 bg-[#050307] p-8 transition hover:border-pink-500/40">
              <h3 class="text-xl font-black text-pink-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۱.</span> چت‌بات‌های روی اعصاب
              </h3>
              <p class="text-slate-400 leading-7">استفاده از ربات‌های پاسخگویی که هیچ‌چیز نمی‌فهمند و فقط کاربر را در یک حلقه تکراری گرفتار می‌کنند. این کار باعث می‌شود کاربر احساس کند شما برای وقت او ارزشی قائل نیستید. AI باید باهوش و راه‌گشا باشد، نه صرفاً یک منشی ماشینی.</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-pink-900/30 bg-[#050307] p-8 transition hover:border-pink-500/40">
              <h3 class="text-xl font-black text-pink-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۲.</span> اتوماسیون بی‌روح (از بین بردنِ ارتباط انسانی)
              </h3>
              <p class="text-slate-400 leading-7">گاهی اوقات پیام‌های خودکار به قدری سرد و قالبی هستند که مشتری حس می‌کند در حالِ معامله با یک سرورِ کامپیوتری است. هنر ما این است که فرآیندها را ماشینی کنیم، اما لحن و «تجربه» را کاملاً انسانی نگه داریم.</p>
            </article>
            
            <article class="anim-text group rounded-[24px] border border-pink-900/30 bg-[#050307] p-8 transition hover:border-pink-500/40">
              <h3 class="text-xl font-black text-pink-400 mb-4 flex items-center gap-3">
                <span class="text-2xl">۳.</span> طراحیِ بدون استراتژی تبدیل (CRO)
              </h3>
              <p class="text-slate-400 leading-7">هزاران نفر با تبلیغات وارد سایت می‌شوند، همه می‌گویند "چقدر سایت زیبایی است!" اما هیچ‌کس خرید نمی‌کند. دلیل آن ساده است: سایتِ شما برای «دیده شدن» طراحی شده، نه برای «فروختن». مسیر تبدیل مشتری (Funnel) در آن مهندسی نشده است.</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Solutions / Brainstorming Section -->
      <section id="solutions" class="scroll-mt-24 relative py-20 lg:py-32 border-t border-[#a855f7]/20 bg-gradient-to-b from-[#a855f7]/10 to-[#050307]">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          
          <div class="anim-text mb-16 max-w-3xl">
            <span class="inline-block rounded-full border border-white/10 bg-[#1e1b4b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">03 / طراحی مسیر فروش</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">ترکیبِ هنر روانشناسی با هوش مصنوعی</h2>
            <p class="mt-6 text-lg leading-9 text-slate-300">
              ما فقط یک قالب را کدنویسی نمی‌کنیم؛ ما مسیرِ حرکتِ چشمانِ کاربر تا رسیدنِ به دکمه‌ی خرید را طراحی می‌کنیم. خدمات ما در این بخش شامل موارد زیر است:
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#a855f7]/50 transition-colors">
              <div class="text-[#a855f7] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg></div>
              <h4 class="text-white font-bold mb-2">طراحی تجربه کاربری (UX Design)</h4>
              <p class="text-sm text-slate-400 leading-6">شناسایی موانع در سایت، مهندسیِ جایگذاری دکمه‌ها (CTA)، طراحی منوها و حذف کلیک‌های اضافه تا رسیدن به هدف.</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#a855f7]/50 transition-colors">
              <div class="text-[#a855f7] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
              <h4 class="text-white font-bold mb-2">پیاده‌سازی دستیار هوشمند (AI Agents)</h4>
              <p class="text-sm text-slate-400 leading-6">اتصال مدل‌های هوش مصنوعی (مثل GPT) به محصولاتِ شما برای ارائه مشاوره خریدِ ۲۴ ساعته به زبان طبیعی.</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#a855f7]/50 transition-colors">
              <div class="text-[#a855f7] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></div>
              <h4 class="text-white font-bold mb-2">اتوماسیونِ محتوا و بازاریابی</h4>
              <p class="text-sm text-slate-400 leading-6">سیستم‌هایی که به صورت خودکار مقالات سئو شده، ایمیل‌های پیگیری و پیامک‌های شخصی‌سازی شده بر اساس رفتار کاربر ارسال می‌کنند.</p>
            </div>
            <div class="anim-text bg-black/50 border border-white/10 p-6 rounded-2xl hover:border-[#a855f7]/50 transition-colors">
              <div class="text-[#a855f7] mb-4"><svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
              <h4 class="text-white font-bold mb-2">بهینه‌سازی نرخ تبدیل (CRO)</h4>
              <p class="text-sm text-slate-400 leading-6">نصب ابزارهای مانیتورینگِ رفتار (مثل Heatmaps)، اجرای تست‌های A/B و استخراج دیتای دقیق برای اینکه بدانیم دقیقاً چرا کاربر نمی‌خرد.</p>
            </div>
          </div>

          <div class="grid gap-16 lg:grid-cols-2 lg:items-center">
            
            <!-- Warning Card -->
            <div id="business" class="anim-text relative rounded-[24px] border border-[#a855f7]/40 bg-black/80 backdrop-blur-xl p-10 shadow-2xl shadow-[#a855f7]/10">
              <div class="text-sm font-black text-[#a855f7] mb-6 tracking-widest uppercase flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
                نکته‌ای که کسی به شما نمی‌گوید
              </div>
              <p class="text-3xl sm:text-4xl font-black leading-tight text-white mb-8">
                «ابزارها جادویی نیستند؛ <br>
                <span class="text-[#a855f7]">جادو در نحوه استفاده از آن‌هاست.</span>»
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-lg leading-8 text-slate-300">
                این روزها همه از «هوش مصنوعی» حرف می‌زنند. شرکت‌های زیادی هستند که با وعده اتصال سایت شما به AI سعی می‌کنند هزینه‌های گزافی دریافت کنند. اما اگر هوش مصنوعی در مسیرِ اصلیِ کسب‌وکار شما (کاهش هزینه‌ها یا افزایش درآمد) به درستی جای‌گذاری نشود، صرفاً یک «ویجتِ نمایشی و بی‌فایده» در سایت شما خواهد بود. 
                <br><br>
                <mark class="highlight-text font-bold text-white bg-[#a855f7]/30 rounded-md px-1.5 py-0.5 mt-2 inline-block">ما به شما نمی‌گوییم حتماً از هوش مصنوعی استفاده کنید؛</mark> ما به شما می‌گوییم "چه فرآیندی را باید سریع‌تر یا حذف کنید" و سپس ابزار مناسبِ آن را پیاده می‌کنیم.
              </p>
            </div>
            
            <div class="anim-text">
              <h2 class="text-4xl font-black leading-tight sm:text-5xl text-white">تخصصی که آینده را می‌سازد.</h2>
              <p class="mt-8 text-lg leading-9 text-slate-300">
                شما می‌توانید از امروز تصمیم بگیرید که یک «سایت سنتیِ ویترینی» داشته باشید، یا یک «پلتفرم پویا» که با داده‌ها تصمیم می‌گیرد:
              </p>
              
              <ul class="mt-8 space-y-6">
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#a855f7]/20 p-2 rounded-lg text-[#a855f7] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                  <span><strong>شتاب‌دهنده فروش:</strong> با شناسایی رفتار کاربران و ارائه‌ی پیشنهادهای درلحظه، نرخ پرش (Bounce Rate) کاهش و سبد خرید افزایش می‌یابد.</span>
                </li>
                <li class="flex items-start gap-4 text-slate-300">
                  <div class="bg-[#a855f7]/20 p-2 rounded-lg text-[#a855f7] mt-1 shrink-0"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg></div>
                  <span><strong>کاهش نیاز به پشتیبان انسانی:</strong> سیستم‌های هوشمند می‌توانند ۸۰٪ سوالات تکراری کاربران را قبل از رسیدن به تیمِ پشتیبانیِ شما حل کنند.</span>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      <!-- Final Section -->
      <section id="final" class="scroll-mt-24 relative py-24 lg:py-40 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6 text-center">
          <span class="anim-text inline-block rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#a855f7]">04 / قدم بعدی</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            آیا می‌خواهید بازدیدکننده‌ها را 
            <span class="text-[#a855f7]">هوشمندانه‌تر به مشتری تبدیل کنید؟</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            طراحی سایتِ آینده، ساختنِ صفحاتِ استاتیک نیست؛ خلقِ تجربه‌ای است که کاربر در آن احساس کند شما ذهن او را خوانده‌اید. 
            <strong class="text-white">برای مشاوره در زمینه استراتژی‌های دیجیتال و پیاده‌سازی هوش مصنوعی، با ما ارتباط بگیرید.</strong>
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services" class="flex items-center justify-center gap-2 rounded-xl bg-[#a855f7] px-10 py-4 text-lg font-black text-white transition-all hover:bg-purple-500 shadow-lg shadow-[#a855f7]/30">
              دریافت مشاوره دیجیتال
              <svg class="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </NuxtLink>
            <NuxtLink to="/services" class="flex items-center justify-center rounded-xl border border-white/20 bg-black px-10 py-4 text-lg font-black text-white transition-all hover:bg-slate-800">مشاهده سایر خدمات</NuxtLink>
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
