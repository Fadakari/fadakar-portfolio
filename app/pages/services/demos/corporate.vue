<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useSeoMeta({
  title: 'فراسازه | هلدینگ مهندسی و ساخت',
  description: 'ما با تکیه بر تجربه و دانش مهندسی، راهکارهایی پایدار برای پروژه‌های بزرگ زیرساختی ارائه می‌کنیم.'
})

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeStory = ref(0)

const storyImages = [
  '/assets/demo/photo-1503387762-592deb58ef4e.avif', // Design
  '/assets/demo/photo-1581094794329-c8112a89af12.avif', // Eng
  'https://images.unsplash.com/photo-1541888082470-fa4eb7890940?auto=format&fit=crop&q=80&w=1200', // Construct
  '/assets/demo/photo-1486406146926-c627a92ad1ab.avif', // Delivery
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

let ctx: gsap.Context

onMounted(async () => {
  if (!import.meta.client) return
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  
  await nextTick()
  gsap.registerPlugin(ScrollTrigger)
  
  ctx = gsap.context(() => {
    
    // 0. Global Background Fade on Scroll
    gsap.to('.global-overlay', {
      backgroundColor: 'rgba(5, 11, 20, 0.95)',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: '800px top',
        scrub: true
      }
    })
    
    gsap.to('.global-bg-img', {
      y: 50,
      scale: 1.05,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

    // 1. Hero Intro Animation
    const heroTl = gsap.timeline()
    heroTl.fromTo('.hero-title-line', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power3.out' }, '+=0.2')
          .fromTo('.hero-desc', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' }, '-=1.2')
          .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out' }, '-=1')

    // 2. Reveal Up Elements
    gsap.utils.toArray('.reveal-up').forEach((el: any) => {
      gsap.fromTo(el, 
        { y: 60, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1.5, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
    
    // 3. Stagger Grid Reveal
    gsap.utils.toArray('.stagger-grid').forEach((grid: any) => {
      const items = grid.querySelectorAll('.stagger-item')
      gsap.fromTo(items,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%'
          }
        }
      )
    })

    // 4. Counters
    gsap.utils.toArray('.counter-num').forEach((el: any) => {
      const target = parseInt(el.getAttribute('data-target'))
      const obj = { val: 0 }
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: target,
            duration: 3,
            ease: 'power3.out',
            onUpdate: () => {
              el.innerText = Math.floor(obj.val)
            }
          })
        }
      })
    })

    // 5. Storytelling Scroll Logic
    gsap.utils.toArray('.story-step').forEach((step: any, i) => {
      ScrollTrigger.create({
        trigger: step,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) activeStory.value = i
        }
      })
    })
    
  })
  
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 500)
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
    ctx?.revert()
  }
})
</script>

<template>
  <div dir="rtl" class="relative min-h-screen text-white font-['Vazirmatn'] selection:bg-[#c7923e] selection:text-white overflow-x-hidden">
    
    
    <!-- Global Background -->
    <div class="fixed inset-0 z-0">
      <img src="/assets/demo/photo-1486406146926-c627a92ad1ab.avif" alt="Corporate Building" class="global-bg-img w-full h-full object-cover origin-center" />
      <div class="global-overlay absolute inset-0 bg-[#050b14]/50 backdrop-blur-[2px]"></div>
    </div>
    <!-- Main Content Wrapper (Above fixed BG) -->
    <div class="relative z-10">
      
      <!-- Navbar -->
      <header 
        class="fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b"
        :class="[
          isScrolled ? 'bg-[#050b14]/80 backdrop-blur-xl border-white/10 shadow-lg py-4' : 'bg-transparent border-transparent py-6'
        ]"
      >
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <!-- Logo -->
          <a href="#" class="text-2xl font-black tracking-[0.2em] text-white">
            FARASAZEH
          </a>
          
          <!-- Desktop Nav -->
          <nav class="hidden lg:flex items-center gap-10">
            <ul class="flex gap-8 text-sm font-bold tracking-wide text-white/80">
              <li class="hover:text-[#c7923e] transition-colors cursor-pointer">درباره ما</li>
              <li class="hover:text-[#c7923e] transition-colors cursor-pointer">حوزه‌های فعالیت</li>
              <li class="hover:text-[#c7923e] transition-colors cursor-pointer">پروژه‌های شاخص</li>
              <li class="hover:text-[#c7923e] transition-colors cursor-pointer">مسئولیت اجتماعی</li>
            </ul>
            <a href="#" class="px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md bg-white text-[#0f172a] hover:bg-[#c7923e] hover:text-white border border-transparent">
              درخواست همکاری
            </a>
          </nav>
          
          <!-- Mobile Menu Btn -->
          <button class="lg:hidden relative bg-transparent border-transparent z-[60] w-10 h-10 flex flex-col justify-center items-center gap-1.5" @click="isMobileMenuOpen = !isMobileMenuOpen">
            <span class="block w-6 h-0.5 bg-white transition-transform duration-300 origin-center" :class="isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''"></span>
            <span class="block w-6 h-0.5 bg-white transition-opacity duration-300" :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
            <span class="block w-6 h-0.5 bg-white transition-transform duration-300 origin-center" :class="isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
          </button>
        </div>
      </header>

      <!-- Mobile Menu Overlay -->
      <transition name="fade">
        <div v-if="isMobileMenuOpen" class="fixed inset-0 bg-[#050b14]/95 backdrop-blur-2xl z-40 flex flex-col justify-center items-center">
          <ul class="flex flex-col gap-8 text-center text-2xl font-bold text-white">
            <li><a href="#" @click="isMobileMenuOpen = false" class="hover:text-[#c7923e] transition-colors">درباره ما</a></li>
            <li><a href="#" @click="isMobileMenuOpen = false" class="hover:text-[#c7923e] transition-colors">حوزه‌های فعالیت</a></li>
            <li><a href="#" @click="isMobileMenuOpen = false" class="hover:text-[#c7923e] transition-colors">پروژه‌های شاخص</a></li>
            <li><a href="#" @click="isMobileMenuOpen = false" class="text-[#c7923e]">درخواست همکاری</a></li>
          </ul>
        </div>
      </transition>

      <!-- Hero Section -->
      <section class="relative h-screen min-h-[700px] flex items-center">
        <!-- Content -->
        <div class="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-12 mt-20">
          <div class="max-w-4xl">
            <div class="flex items-center gap-4 mb-8 overflow-hidden">
              <div class="hero-title-line h-[1px] w-12 bg-[#c7923e]"></div>
              <span class="hero-title-line text-[#c7923e] font-bold tracking-widest text-sm uppercase">هلدینگ مهندسی و ساخت فراسازه</span>
            </div>
            
            <h1 class="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.1] mb-8 drop-shadow-2xl">
              <div class="py-2 my-2"><div class="hero-title-line">مهندسی آینده،</div></div>
              <div class=""><div class="hero-title-line">ساختن آنچه <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#c7923e] to-[#f3d582]">ماندگار</span> می‌ماند.</div></div>
            </h1>
            
            <p class="hero-desc text-lg md:text-2xl text-slate-200 max-w-2xl leading-relaxed mb-12 drop-shadow-md">
              ما با تکیه بر تجربه، دانش مهندسی و فناوری، راهکارهایی برای پروژه‌های بزرگ و پیچیده زیرساختی در سطح ملی و بین‌المللی ارائه می‌کنیم.
            </p>
            
            <div class="flex flex-nowrap gap-4">
              <a href="#about" class="hero-cta bg-[#c7923e] text-white px-5 py-2 text-lg text-nowrap font-bold hover:bg-[#b0802c] transition-all rounded-full shadow-lg">
                آشنایی با شرکت
              </a>
              <a href="#projects" class="hero-cta bg-white/10 backdrop-blur-md border border-white/30 text-white px-5 py-2 text-lg font-bold hover:bg-white hover:text-[#0f172a] transition-all rounded-full shadow-lg">
                مشاهده پروژه‌ها
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- About & Stats Section -->
      <section id="about" class="py-24 lg:py-40 relative">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Text -->
            <div class="reveal-up pr-0 lg:pr-10 order-2 lg:order-1">
              <h2 class="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                بیش از <span class="text-[#c7923e]">۲۵ سال</span>، <br/>ساختن برای آینده
              </h2>
              <p class="text-lg text-slate-300 leading-9 mb-6">
                از سال ۱۳۷۶ تا به امروز، فراسازه توانسته است با تکیه بر تخصص مهندسان خود، نقش مهمی در توسعه زیرساخت‌های ملی ایفا کند. نگاه ما به پروژه‌ها صرفاً ساخت‌وساز نیست؛ ما معتقدیم هر سازه، اثری است که روی نسل‌های آینده تأثیر می‌گذارد.
              </p>
              <p class="text-lg text-slate-300 leading-9">
                به همین دلیل، استفاده از متریال باکیفیت، تکنولوژی‌های نوین و رعایت سخت‌گیرانه‌ترین استانداردهای بین‌المللی (HSE) در تاروپود فراسازه نهادینه شده است.
              </p>
              
              <!-- Signature -->
              <div class="mt-12 pt-8 border-t border-white/10">
                <p class="font-bold text-white text-xl">دکتر آرش رادمنش</p>
                <p class="text-slate-400 text-sm mt-1">مدیرعامل و رئیس هیئت مدیره</p>
              </div>
            </div>
            
            <!-- Image -->
            <div class="reveal-up order-1 lg:order-2 relative">
              <div class="aspect-[4/5] overflow-hidden rounded-3xl relative z-10 shadow-2xl border border-white/10">
                <img src="/assets/demo/photo-1503387762-592deb58ef4e.avif" alt="Engineering Team" class="w-full h-full object-cover" style="mask-image: linear-gradient(to bottom, black 80%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);" />
              </div>
              <!-- Decorative Box -->
              <div class="absolute -bottom-8 -right-8 w-2/3 h-2/3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl z-0 hidden md:block"></div>
            </div>
          </div>
          
          <!-- Stats -->
          <div class="mt-32 stagger-grid grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-white/10 pt-16">
            <div class="stagger-item text-center">
              <div class="text-5xl md:text-6xl font-black text-white mb-2"><span class="counter-num" data-target="25">0</span>+</div>
              <div class="text-slate-400 font-bold uppercase tracking-wider text-sm">سال تجربه</div>
            </div>
            <div class="stagger-item text-center">
              <div class="text-5xl md:text-6xl font-black text-white mb-2"><span class="counter-num" data-target="180">0</span>+</div>
              <div class="text-slate-400 font-bold uppercase tracking-wider text-sm">پروژه موفق</div>
            </div>
            <div class="stagger-item text-center">
              <div class="text-5xl md:text-6xl font-black text-white mb-2"><span class="counter-num" data-target="42">0</span></div>
              <div class="text-slate-400 font-bold uppercase tracking-wider text-sm">پروژه سطح ملی</div>
            </div>
            <div class="stagger-item text-center">
              <div class="text-5xl md:text-6xl font-black text-white mb-2"><span class="counter-num" data-target="96">0</span>%</div>
              <div class="text-slate-400 font-bold uppercase tracking-wider text-sm">رضایت مشتریان</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services / What We Do -->
      <section class="py-24 lg:py-40">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div class="reveal-up mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div class="flex items-center gap-4 mb-4">
                <div class="h-[1px] w-12 bg-[#c7923e]"></div>
                <span class="text-[#c7923e] font-bold tracking-widest text-sm uppercase">آنچه انجام می‌دهیم</span>
              </div>
              <h2 class="text-4xl md:text-5xl font-black text-white">تخصص در مقیاس کلان</h2>
            </div>
            <p class="max-w-xl text-slate-300 text-lg leading-relaxed">
              ما در سه حوزه اصلی متمرکز هستیم تا بتوانیم پروژه‌های پیچیده را از مرحله ایده تا بهره‌برداری کامل، با بالاترین کیفیت مدیریت کنیم.
            </p>
          </div>
          
          <div class="stagger-grid grid md:grid-cols-3 gap-8">
            <!-- Service 1 -->
            <div class="stagger-item group cursor-pointer">
              <div class="relative overflow-hidden aspect-video rounded-3xl mb-6 shadow-xl border border-white/10">
                <img src="/assets/demo/photo-1581094794329-c8112a89af12.avif" alt="Design" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div class="absolute inset-0 bg-[#050b14]/50 group-hover:bg-transparent transition-colors duration-500"></div>
                <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050b14] to-transparent"></div>
                <h3 class="absolute bottom-6 right-6 text-2xl font-bold text-white">مهندسی و طراحی</h3>
              </div>
              <p class="text-slate-400 leading-relaxed group-hover:text-white transition-colors">
                طراحی مفهومی، پایه و تفصیلی با استفاده از پیشرفته‌ترین نرم‌افزارها و استانداردهای مهندسی ارزش.
              </p>
            </div>
            <!-- Service 2 -->
            <div class="stagger-item group cursor-pointer md:mt-12">
              <div class="relative overflow-hidden aspect-video rounded-3xl mb-6 shadow-xl border border-white/10">
                <img src="/assets/demo/photo-1504307651254-35680f356dfd.avif" alt="Construction" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div class="absolute inset-0 bg-[#050b14]/50 group-hover:bg-transparent transition-colors duration-500"></div>
                <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050b14] to-transparent"></div>
                <h3 class="absolute bottom-6 right-6 text-2xl font-bold text-white">اجرای پروژه‌های کلان</h3>
              </div>
              <p class="text-slate-400 leading-relaxed group-hover:text-white transition-colors">
                تأمین کالا، ساخت و راه‌اندازی پروژه‌های صنعتی، نیروگاهی و پالایشگاهی با مدیریت زمان و هزینه.
              </p>
            </div>
            <!-- Service 3 -->
            <div class="stagger-item group cursor-pointer md:mt-24">
              <div class="relative overflow-hidden aspect-video rounded-3xl mb-6 shadow-xl border border-white/10">
                <img src="/assets/demo/photo-1486406146926-c627a92ad1ab.avif" alt="Consulting" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div class="absolute inset-0 bg-[#050b14]/50 group-hover:bg-transparent transition-colors duration-500"></div>
                <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050b14] to-transparent"></div>
                <h3 class="absolute bottom-6 right-6 text-2xl font-bold text-white">توسعه زیرساخت</h3>
              </div>
              <p class="text-slate-400 leading-relaxed group-hover:text-white transition-colors">
                ارائه راهکارهای مشاوره‌ای، امکان‌سنجی و نظارت عالیه بر اجرای پروژه‌های ملی و شهری.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Scroll Storytelling Section -->
      <section class="relative hidden md:block border-y border-white/5 bg-white/5 backdrop-blur-md">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12 story-wrapper">
          
          <!-- Right Side: Content Steps -->
          <div class="story-content">
            <div class="pt-[30vh] pb-[10vh]">
              <div class="flex items-center gap-4 mb-4">
                <div class="h-[1px] w-12 bg-[#c7923e]"></div>
                <span class="text-[#c7923e] font-bold tracking-widest text-sm uppercase">متدولوژی فراسازه</span>
              </div>
              <h2 class="text-4xl md:text-5xl font-black text-white">چگونه یک پروژه را <br/>به واقعیت تبدیل می‌کنیم؟</h2>
            </div>
            
          </div>

          <!-- Left Side: Sticky Media -->
          <div class="story-media-container">
            <div class="story-image-box border border-white/10">
              <!-- Dynamic Images cross-fading based on activeStory -->
              <img 
                v-for="(img, idx) in storyImages" 
                :key="idx"
                :src="img" 
                class="absolute inset-0 w-full h-full object-cover transition-all duration-[1.5s] ease-in-out"
                :class="activeStory === idx ? 'opacity-100 scale-100 blur-none' : 'opacity-0 scale-110 blur-sm'"
                alt="Process Step"
              />
              <div class="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
          
        </div>
        <div class="grid grid-cols-5 md:grid-cols-4 gap-x-16 gap-y-0 justify-items-center px-10">
  
          <div class="story-step w-full max-w-xl">
            <h3 class="text-7xl font-black text-white/5 absolute -z-10 -mt-10">01</h3>
            <h4 class="text-4xl font-bold text-white mb-6">طراحی و امکان‌سنجی</h4>
            <p class="text-xl text-slate-300 leading-relaxed max-w-md">
              بررسی دقیق نیازها، مطالعات ژئوتکنیک و طراحی معماری و سازه با بهره‌گیری از به‌روزترین استانداردهای مهندسی جهان. هیچ قدمی بدون نقشه دقیق برداشته نمی‌شود.
            </p>
          </div>
        
          <div class="story-step w-full max-w-xl">
            <h3 class="text-7xl font-black text-white/5 absolute -z-10 -mt-10">02</h3>
            <h4 class="text-4xl font-bold text-white mb-6">مهندسی و تدارکات</h4>
            <p class="text-xl text-slate-300 leading-relaxed max-w-md">
              محاسبات پیچیده برای انتخاب بهینه‌ترین مصالح و تکنولوژی‌ها. تأمین تجهیزات حیاتی از برترین برندهای بین‌المللی با رعایت اصول مهندسی ارزش.
            </p>
          </div>
        
          <div class="story-step w-full max-w-xl">
            <h3 class="text-7xl font-black text-white/5 absolute -z-10 -mt-10">03</h3>
            <h4 class="text-4xl font-bold text-white mb-6">اجرا و ساخت</h4>
            <p class="text-xl text-slate-300 leading-relaxed max-w-md">
              پیاده‌سازی دقیق با نظارت مستمر چندلایه‌ای. رعایت کامل اصول ایمنی، بهداشت و محیط زیست (HSE) در قلب تمام کارگاه‌های فراسازه.
            </p>
          </div>
        
          <div class="story-step w-full max-w-xl">
            <h3 class="text-7xl font-black text-white/5 absolute -z-10 -mt-10">04</h3>
            <h4 class="text-4xl font-bold text-white mb-6">تحویل و بهره‌برداری</h4>
            <p class="text-xl text-slate-300 leading-relaxed max-w-md">
              راه‌اندازی، تست‌های نهایی و تحویل قطعی پروژه. ما پس از تحویل نیز با خدمات پشتیبانی و نگهداری بلندمدت در کنار کارفرمایان خود هستیم.
            </p>
          </div>
            
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-24 lg:py-40">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div class="reveal-up mb-16 text-center">
            <h2 class="text-4xl md:text-5xl font-black text-white mb-6">پروژه‌هایی که درباره ما صحبت می‌کنند</h2>
            <p class="text-lg text-slate-300 max-w-2xl mx-auto">
              کارنامه ما، مجموعه‌ای از چالش‌های مهندسی است که با موفقیت پشت سر گذاشته‌ایم.
            </p>
          </div>

          <!-- Full Width Project -->
          <div class="reveal-up relative w-full aspect-video max-h-[500px] rounded-3xl overflow-hidden group cursor-pointer mb-12 shadow-2xl border border-white/10">
            <img src="/assets/demo/photo-1545459720-aac8509eb02c.avif" alt="Bridge Project" class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-[#050b14]/30 to-transparent"></div>
            <div class="absolute bottom-8 left-8 right-8 text-white flex flex-col md:flex-row justify-between items-end">
              <div>
                <span class="text-[#c7923e] font-bold tracking-widest text-sm uppercase mb-2 block">پروژه ملی - ۱۴۰۱</span>
                <h3 class="text-3xl md:text-5xl font-black mb-4">پل معلق خاورمیانه</h3>
                <p class="text-base text-slate-300 max-w-xl hidden md:block">طراحی و اجرای یکی از بزرگترین پل‌های معلق کابلی با تکنولوژی پیش‌تنیدگی.</p>
              </div>
              <button class="mt-6 md:mt-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white px-8 py-3 font-bold hover:bg-[#c7923e] hover:border-[#c7923e] transition-colors flex items-center gap-2">
                مشاهده پروژه
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Grid Projects -->
          <div class="grid md:grid-cols-2 gap-8">
            <div class="reveal-up relative aspect-video max-h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl border border-white/10">
              <img src="/assets/demo/photo-1508450859948-4e04fabaa4ea.avif" alt="Industrial Complex" class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-[#050b14]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div class="absolute bottom-8 right-8 left-8 text-white">
                <span class="text-[#c7923e] font-bold text-sm mb-2 block">صنعتی - ۱۴۰۰</span>
                <h3 class="text-2xl font-bold mb-3">مجتمع پتروشیمی کیهان</h3>
                <div class="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100 mt-4">
                  <span class="inline-block border-b border-[#c7923e] pb-1 font-bold text-sm text-[#c7923e]">جزئیات بیشتر</span>
                </div>
              </div>
            </div>
            
            <div class="reveal-up relative aspect-video max-h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl border border-white/10">
              <img src="/assets/demo/photo-1513694203232-719a280e022f.avif" alt="Twin Towers" class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#050b14]/90 via-[#050b14]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              <div class="absolute bottom-8 right-8 left-8 text-white">
                <span class="text-[#c7923e] font-bold text-sm mb-2 block">تجاری و اداری - ۱۴۰۲</span>
                <h3 class="text-2xl font-bold mb-3">برج‌های دوقلوی آرمان</h3>
                <div class="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 opacity-0 group-hover:opacity-100 mt-4">
                  <span class="inline-block border-b border-[#c7923e] pb-1 font-bold text-sm text-[#c7923e]">جزئیات بیشتر</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-12 text-center reveal-up">
            <a href="#" class="inline-block bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 font-bold hover:bg-white hover:text-[#0f172a] transition-all rounded-full shadow-md">
              مشاهده تمامی پروژه‌ها
            </a>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="py-24 lg:py-32 border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 class="reveal-up text-3xl md:text-4xl font-black text-white mb-20">آنچه ما را متفاوت می‌کند</h2>
          
          <div class="stagger-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
            <div class="stagger-item text-center">
              <div class="w-16 h-16 mx-auto border border-[#c7923e] rounded-full flex items-center justify-center mb-6 bg-white/5">
                <div class="w-2 h-2 bg-[#c7923e] rounded-full shadow-[0_0_10px_#c7923e]"></div>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">دقت مهندسی</h3>
              <p class="text-slate-400">جزئیات برای ما همه‌چیز است. هیچ محاسبه‌ای بدون بازبینی دقیق تأیید نمی‌شود.</p>
            </div>
            
            <div class="stagger-item text-center">
              <div class="w-16 h-16 mx-auto border border-[#c7923e] rounded-full flex items-center justify-center mb-6 bg-white/5">
                <div class="w-2 h-2 bg-[#c7923e] rounded-full shadow-[0_0_10px_#c7923e]"></div>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">نوآوری در اجرا</h3>
              <p class="text-slate-400">تلفیق تجربه ریشه‌دار با جدیدترین تکنولوژی‌های روز ساخت‌وساز جهانی.</p>
            </div>
            
            <div class="stagger-item text-center">
              <div class="w-16 h-16 mx-auto border border-[#c7923e] rounded-full flex items-center justify-center mb-6 bg-white/5">
                <div class="w-2 h-2 bg-[#c7923e] rounded-full shadow-[0_0_10px_#c7923e]"></div>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">مسئولیت‌پذیری</h3>
              <p class="text-slate-400">تعهد بی‌قیدوشرط به زمان‌بندی، کیفیت و حفظ محیط زیست در تمام پروژه‌ها.</p>
            </div>
            
            <div class="stagger-item text-center">
              <div class="w-16 h-16 mx-auto border border-[#c7923e] rounded-full flex items-center justify-center mb-6 bg-white/5">
                <div class="w-2 h-2 bg-[#c7923e] rounded-full shadow-[0_0_10px_#c7923e]"></div>
              </div>
              <h3 class="text-xl font-bold text-white mb-4">شفافیت و اعتماد</h3>
              <p class="text-slate-400">ارتباط صادقانه و شفاف با کارفرمایان در تمام طول مسیر چرخه عمر پروژه.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Big CTA -->
      <section class="py-32 lg:py-48 flex items-center justify-center text-center px-6">
        <div class="relative z-20 max-w-4xl w-full p-12 md:p-20 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] reveal-up overflow-hidden">
          <!-- inner glowing highlight -->
          <div class="absolute -top-40 -right-40 w-80 h-80 bg-[#c7923e]/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 class="relative z-10 text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            پروژه بعدی شما، <br/>
            میتواند یکی از داستان‌های <span class="text-[#c7923e]">موفقیت</span> ما باشد.
          </h2>
          <div class="relative z-10 flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <a href="#" class="bg-[#c7923e] text-white px-10 py-5 text-lg font-bold hover:bg-white hover:text-[#0f172a] transition-all rounded-full shadow-[0_0_20px_rgba(199,146,62,0.4)] hover:shadow-none">
              شروع یک همکاری
            </a>
            <a href="#" class="bg-transparent border border-white/30 text-white px-10 py-5 text-lg font-bold hover:bg-white/10 transition-colors rounded-full">
              تماس با دفتر مرکزی
            </a>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="bg-[#050b14]/80 backdrop-blur-md text-slate-400 py-20 border-t border-white/10">
        <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div class="grid md:grid-cols-4 gap-12 mb-16">
            <div class="md:col-span-1">
              <h3 class="text-2xl font-black text-white tracking-[0.2em] mb-6 drop-shadow-md">FARASAZEH</h3>
              <p class="mb-6 leading-relaxed text-sm">
                هلدینگ مهندسی و ساخت فراسازه، پیشرو در ارائه راهکارهای نوین برای پروژه‌های زیرساختی و صنعتی در سطح خاورمیانه.
              </p>
            </div>
            
            <div>
              <h4 class="text-white font-bold mb-6">دسترسی سریع</h4>
              <ul class="space-y-4 text-sm">
                <li><a href="#" class="hover:text-[#c7923e] transition-colors">درباره هلدینگ</a></li>
                <li><a href="#" class="hover:text-[#c7923e] transition-colors">حوزه‌های فعالیت</a></li>
                <li><a href="#" class="hover:text-[#c7923e] transition-colors">پروژه‌های شاخص</a></li>
                <li><a href="#" class="hover:text-[#c7923e] transition-colors">تیم رهبری</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-white font-bold mb-6">ارتباط با ما</h4>
              <ul class="space-y-4 text-sm">
                <li>تهران، بلوار نلسون ماندلا، برج اداری فراسازه، طبقه ۱۲</li>
                <li class="font-sans" dir="ltr">+98 21 8888 9999</li>
                <li class="font-sans" dir="ltr">info@farasazeh.com</li>
              </ul>
            </div>
            
            <div>
              <h4 class="text-white font-bold mb-6">خبرنامه</h4>
              <p class="text-sm mb-4">برای دریافت آخرین اخبار پروژه‌ها ایمیل خود را وارد کنید.</p>
              <div class="flex rounded-full overflow-hidden border border-white/20 focus-within:border-[#c7923e] transition-colors">
                <input type="email" placeholder="آدرس ایمیل..." class="bg-white/5 px-4 py-3 w-full text-white text-sm focus:outline-none" />
                <button class="bg-[#c7923e] text-white px-6 py-3 hover:bg-white hover:text-[#0f172a] transition-colors font-bold">ثبت</button>
              </div>
            </div>
          </div>
          
          <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2026 Farasazeh Holding. All rights reserved.</p>
            <div class="flex gap-4 mt-4 md:mt-0 font-sans">
              <a href="#" class="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" class="hover:text-white transition-colors">Instagram</a>
              <a href="#" class="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  </div>
</template>

<style scoped>
/* Reset basic lists and links */
ul { list-style: none !important; margin: 0; padding: 0; }
a { text-decoration: none !important; }

/* Smooth scroll behavior */
html { scroll-behavior: smooth; }
body { -webkit-font-smoothing: antialiased; }

/* Storytelling Custom Layout */
.story-wrapper {
  display: flex;
  position: relative;
}
.story-content {
  width: 50%;
  padding-right: 3rem;
  padding-bottom: 20vh;
}
.story-step {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.story-media-container {
  width: 50%;
  position: sticky;
  top: 15vh;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}
.story-image-box {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem; /* rounded-3xl */
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

/* Transitions for Mobile Menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.demo-notice{background:#111827;color:#fff;padding:10px 20px;display:flex;justify-content:center;gap:24px;font-size:12px}.demo-notice a{color:#fbbf24}
</style>
