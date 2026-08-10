<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useSeoMeta({
  title: 'طراحی سایت فروشگاهی | FADAKAR',
  description: 'توضیحات کامل نمونه طراحی سایت فروشگاهی؛ از تجربه خرید و جست‌وجو تا ساختار قابل توسعه متناسب با کسب‌وکار.'
})

const sections = [
  { id: 'why', label: 'چرا سایت فروشگاهی؟' },
  { id: 'experience', label: 'تجربه‌ای که می‌سازیم' },
  { id: 'business', label: 'متناسب با کسب‌وکار' },
  { id: 'scope', label: 'قابلیت‌ها' },
  { id: 'final', label: 'قدم بعدی' }
]

const features = [
  ['جست‌وجوی سریع', 'کاربر به‌جای گشتن میان صدها محصول، سریع‌تر به چیزی که می‌خواهد می‌رسد.'],
  ['دسته‌بندی و فیلتر', 'محصولات بر اساس ویژگی‌های واقعی فروشگاه مرتب می‌شوند؛ نه صرفاً چند دسته‌بندی نمایشی.'],
  ['صفحه محصول', 'تصویر، قیمت، ویژگی‌ها، موجودی، توضیحات و مسیر خرید در جای درست قرار می‌گیرند.'],
  ['سبد خرید و سفارش', 'فرآیند خرید تا حد ممکن کوتاه، واضح و بدون اصطکاک طراحی می‌شود.'],
  ['موبایل‌محور', 'بخش بزرگی از مشتریان از موبایل وارد می‌شوند؛ بنابراین تجربه موبایل یک نسخه کوچک‌شده دسکتاپ نیست.'],
  ['قابل توسعه', 'اگر بعدها امکانات بیشتری لازم شود، ساختار سایت نباید شما را مجبور به بازسازی از صفر کند.']
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
  <div dir="rtl" class="min-h-screen bg-black text-slate-200 font-['Vazirmatn'] selection:bg-[#38bdf8]/30 selection:text-white">
    <!-- Header: Minimalist -->
    <header class="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <NuxtLink to="/services" class="text-xl font-black tracking-widest text-white transition hover:text-[#38bdf8]">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-8 text-sm md:flex">
          <button v-for="item in sections" :key="item.id" @click="reveal(item.id)" class="text-slate-400 transition hover:text-white font-medium" style="background:none; border: none;">{{ item.label }}</button>
        </div>
        <NuxtLink to="/services/demos/ecommerce" class="rounded-lg bg-[#38bdf8] px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-sky-300">مشاهده دمو</NuxtLink>
      </div>
    </header>

    <main class="overflow-hidden">
      <!-- Hero Section -->
      <section class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-32 lg:pt-28">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10">
          <div class="max-w-2xl">
            <div class="anim-text mb-6 inline-flex items-center gap-3 rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-2 text-sm font-bold text-[#38bdf8]">
              نمونه‌ای از طراحی فروشگاه اینترنتی
            </div>
            
            <h1 class="anim-text text-5xl font-black leading-[1.3] tracking-tight sm:text-6xl lg:text-[4rem] text-white">
              فروشگاه اینترنتی فقط یک 
              <span class="text-[#38bdf8]">ویترین آنلاین</span> نیست.
            </h1>
            
            <p class="anim-text mt-8 text-lg leading-9 text-slate-300">
              سایت فروشگاهی خوب باید کاری کند که 
              <mark class="highlight-text font-bold text-[#38bdf8] bg-gradient-to-r from-[#38bdf8]/20 to-[#38bdf8]/20 bg-no-repeat [background-position:0_100%] [background-size:0%_100%] rounded-md px-1 py-0.5">مشتری راحت‌تر محصول مناسب را پیدا کند</mark>، 
              <mark class="highlight-text font-bold text-[#38bdf8] bg-gradient-to-r from-[#38bdf8]/20 to-[#38bdf8]/20 bg-no-repeat [background-position:0_100%] [background-size:0%_100%] rounded-md px-1 py-0.5">با اطمینان تصمیم بگیرد</mark> و 
              <span class="font-bold text-white">بدون سردرگمی خریدش را کامل کند</span>. 
              ظاهر زیبا فقط شروع ماجراست.
            </p>
            
            <div class="anim-text mt-10 flex flex-wrap gap-4">
              <button @click="reveal('why')" class="rounded-xl bg-white px-8 py-4 text-base font-bold text-black transition hover:bg-gray-200">اول این بخش را بخوانید</button>
              <NuxtLink to="/services/demos/ecommerce" class="rounded-xl border border-white/20 bg-[#1e293b] px-8 py-4 text-base font-bold text-white transition hover:bg-slate-700">دیدن نمونه واقعی</NuxtLink>
            </div>
            
            <div class="anim-text mt-12 grid grid-cols-3 border-y border-white/10 py-6">
              <div><strong class="block text-3xl font-black text-[#38bdf8]">01</strong><span class="mt-2 block text-sm font-medium text-slate-400">شناخت کسب‌وکار</span></div>
              <div class="border-x border-white/10 px-6"><strong class="block text-3xl font-black text-white">02</strong><span class="mt-2 block text-sm font-medium text-slate-400">طراحی تجربه</span></div>
              <div class="pl-6"><strong class="block text-3xl font-black text-slate-500">03</strong><span class="mt-2 block text-sm font-medium text-slate-400">توسعه و رشد</span></div>
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
            <span class="inline-block rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#38bdf8]">01 / مسئله واقعی</span>
            <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">چرا یک فروشگاه به سایت نیاز دارد؟</h2>
          </div>
          
          <div class="anim-text space-y-10 text-lg leading-loose text-slate-300">
            <p>
              اگر مشتری برای دیدن محصولات، قیمت، موجودی یا راه ارتباطی با شما مجبور باشد هر بار در شبکه‌های اجتماعی جست‌وجو کند، بخشی از مسیر خرید را خودتان سخت کرده‌اید. 
              <mark class="highlight-text font-bold text-[#38bdf8] bg-gradient-to-r from-[#38bdf8]/20 to-[#38bdf8]/20 bg-no-repeat [background-position:0_100%] [background-size:0%_100%] rounded-md px-1.5 py-0.5">سایت فروشگاهی یک محل دائمی و قابل جست‌وجو برای کسب‌وکار شماست</mark>؛ جایی که مشتری می‌تواند هر زمان که خواست، اطلاعات را منظم و کامل ببیند.
            </p>
            <p>
              اما هدف ما این نیست که صرفاً یک کاتالوگ آنلاین تحویل شما بدهیم. 
              <strong class="text-white text-xl">ساختار فروشگاه باید با رفتار مشتریان شما هماهنگ باشد.</strong> 
              فروشگاه پوشاک، طلافروشی، لوازم دیجیتال، مواد غذایی و فروشگاه تخصصی هرکدام منطق متفاوتی برای معرفی و انتخاب محصول دارند.
            </p>
            
            <div class="relative mt-12 rounded-[24px] border border-[#38bdf8]/20 bg-[#1e293b] p-8 shadow-lg">
              <p class="text-xl font-bold leading-9 text-white">
                به همین دلیل، قبل از اینکه درباره رنگ، انیمیشن یا تکنولوژی صحبت کنیم، باید بفهمیم <span class="text-[#38bdf8]">مشتری شما چه چیزی می‌خواهد</span>، چگونه انتخاب می‌کند و کجا ممکن است از خرید منصرف شود.
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
              <span class="inline-block rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#38bdf8]">02 / تجربه خرید</span>
              <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">کاربر نباید برای خرید با سایت بجنگد.</h2>
              <p class="mt-6 text-lg leading-8 text-slate-400">
                <mark class="highlight-text font-bold text-[#38bdf8] bg-gradient-to-r from-[#38bdf8]/20 to-[#38bdf8]/20 bg-no-repeat [background-position:0_100%] [background-size:0%_100%] rounded-md px-1 py-0.5">هر جزء صفحه باید یک دلیل داشته باشد</mark>: کمک به پیدا کردن، مقایسه، اعتماد یا خرید.
              </p>
            </div>
            
            <div class="grid gap-4 sm:grid-cols-2">
              <article v-for="(feature, i) in features" :key="feature[0]" class="anim-text group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1e293b] p-8 transition-all hover:bg-slate-800 hover:border-white/20">
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
              <span class="inline-block rounded-full border border-white/10 bg-[#1e293b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">03 / چیزی فراتر از دمو</span>
              <h2 class="mt-6 text-4xl font-black leading-tight sm:text-5xl text-white">قرار نیست سایت شما دقیقاً شبیه این باشد.</h2>
              <p class="mt-8 text-lg leading-9 text-slate-300">
                این صفحه و دمو فقط یک سؤال را جواب می‌دهند: <strong class="text-white text-xl">«سطح کاری که می‌توانید دریافت کنید چقدر است؟»</strong>
              </p>
              <p class="mt-6 text-lg leading-9 text-slate-300">
                در پروژه واقعی، ظاهر سایت از هویت برند، محصولات، مشتریان، مدل فروش و امکانات موردنیاز شما شروع می‌شود. اگر کسب‌وکار شما رسمی و سازمانی باشد، طراحی باید همان حس را منتقل کند؛ اگر جوان و پرانرژی باشد، زبان بصری می‌تواند کاملاً متفاوت باشد.
              </p>
            </div>
            
            <div class="anim-text relative rounded-[24px] border border-[#38bdf8]/20 bg-[#1e293b] p-10 shadow-2xl">
              <div class="text-sm font-black text-[#38bdf8] mb-6 tracking-widest uppercase">یک اصل مهم</div>
              <p class="text-3xl font-black leading-tight text-white mb-8">
                «ما قالب را به کسب‌وکار شما تحمیل نمی‌کنیم؛ 
                <span class="text-[#38bdf8]">سایت را بر اساس کسب‌وکار شما طراحی می‌کنیم.</span>»
              </p>
              <div class="h-px w-full bg-white/10 mb-8"></div>
              <p class="text-base leading-8 text-slate-300">
                ممکن است بعد از شناخت کسب‌وکار شما حتی پیشنهاد کنیم <strong class="text-white">بعضی امکانات را اصلاً نسازیم</strong>؛ چون هزینه ایجاد می‌کنند اما ارزش واقعی ندارند. در مقابل، ممکن است ایده‌ای پیشنهاد کنیم که در نمونه اولیه وجود ندارد اما برای فروش شما بسیار مهم باشد.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Scope Section -->
      <section id="scope" class="scroll-mt-24 py-20 lg:py-32 border-t border-white/5">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="anim-text max-w-3xl mx-auto text-center">
            <span class="inline-block rounded-full border border-white/10 bg-[#1e293b] px-4 py-1.5 text-xs font-black tracking-widest text-slate-400">04 / قابلیت‌ها</span>
            <h2 class="mt-6 text-4xl font-black sm:text-5xl text-white">این‌ها فقط شروع کارند.</h2>
            <p class="mt-6 text-xl leading-9 text-slate-300">
              بسته به پروژه، امکانات می‌توانند از 
              <strong class="text-white">فروش ساده تا یک سیستم کامل مدیریت فروش و مشتری</strong> 
              توسعه پیدا کنند.
            </p>
          </div>
          
          <div class="anim-text mt-16 grid gap-4 md:grid-cols-3">
            <div v-for="item in ['درگاه پرداخت و سفارش آنلاین','مدیریت موجودی و قیمت','کد تخفیف و کمپین فروش','حساب کاربری و پیگیری سفارش','فیلترهای پیشرفته و مقایسه','اتصال به سرویس‌ها و APIها','پنل مدیریت اختصاصی','سئو و صفحات هدفمند','گزارش‌گیری و تحلیل رفتار']" :key="item" class="flex items-center justify-center text-center rounded-[20px] border border-white/10 bg-[#1e293b] p-6 text-base font-bold text-slate-200 transition-colors hover:bg-slate-800">
              {{ item }}
            </div>
          </div>
          
          <div class="anim-text mt-16 relative overflow-hidden rounded-[24px] bg-[#1e293b] p-10 sm:p-16 border border-[#38bdf8]/20 text-center">
            <div class="relative z-10 max-w-4xl mx-auto">
              <h3 class="text-3xl font-black text-white leading-tight">اما همه این امکانات را نباید به همه فروشگاه‌ها اضافه کرد.</h3>
              <p class="mt-6 text-lg leading-9 text-slate-300">
                یکی از تفاوت‌های طراحی اختصاصی با فروش یک قالب آماده همین است. 
                <mark class="highlight-text font-bold text-[#38bdf8] bg-gradient-to-r from-[#38bdf8]/20 to-[#38bdf8]/20 bg-no-repeat [background-position:0_100%] [background-size:0%_100%] rounded-md px-1.5 py-0.5">ما امکانات را بر اساس نیاز واقعی اضافه می‌کنیم</mark> 
                تا هم بودجه کنترل شود و هم سایت شلوغ و پیچیده نشود.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Final Section -->
      <section id="final" class="scroll-mt-24 relative py-24 lg:py-40 border-t border-white/5">
        <div class="relative mx-auto max-w-4xl px-6 text-center">
          <span class="anim-text inline-block rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#38bdf8]">05 / قدم بعدی</span>
          <h2 class="anim-text mt-8 text-4xl font-black leading-tight sm:text-6xl text-white">
            اگر فکر می‌کنید کسب‌وکارتان جای یک سایت بهتر را دارد، 
            <span class="text-[#38bdf8]">از همین‌جا شروع کنیم.</span>
          </h2>
          <p class="anim-text mx-auto mt-8 max-w-3xl text-xl leading-10 text-slate-300">
            لازم نیست از قبل دقیقاً بدانید چه امکاناتی می‌خواهید. 
            <strong class="text-white">کافی است کسب‌وکارتان، محصولات یا خدماتتان و چیزی که از سایت انتظار دارید را توضیح دهید.</strong> 
            ما بر اساس آن پیشنهاد می‌دهیم چه چیزی واقعاً لازم است و چه چیزهایی فقط هزینه اضافه هستند.
          </p>
          <div class="anim-text mt-12 flex flex-col justify-center gap-5 sm:flex-row">
            <NuxtLink to="/services/demos/ecommerce" class="flex items-center justify-center gap-2 rounded-xl bg-[#38bdf8] px-10 py-4 text-lg font-black text-black transition-all hover:bg-sky-300">
              مشاهده کامل دمو
            </NuxtLink>
            <NuxtLink to="/services" class="flex items-center justify-center rounded-xl border border-white/20 bg-[#1e293b] px-10 py-4 text-lg font-black text-white transition-all hover:bg-slate-700">بازگشت به خدمات</NuxtLink>
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
