<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useSeoMeta({
  title: 'دموی سایت خدماتی و محلی | FADAKAR',
  description: 'نمونه طراحی سایت خدماتی و محلی با تمرکز بر اعتماد، موقعیت مکانی، رزرو سریع و تبدیل بازدیدکننده به مشتری.'
})

const mobileMenu = ref(false)
const activeFaq = ref<number | null>(0)
const showBooking = ref(false)
const selectedService = ref('')

const services = [
  { title: 'سرویس و تعمیر کولر', text: 'عیب‌یابی، سرویس دوره‌ای و تعمیر انواع کولر در محل.', time: 'اعزام از ۶۰ دقیقه', image: 'https://images.unsplash.com/photo-1581092926214-ee1811eef2a8?auto=format&fit=crop&q=80&w=800' },
  { title: 'تأسیسات و لوله‌کشی', text: 'رفع نشتی، تعمیرات فوری و اجرای اصولی تأسیسات ساختمان.', time: 'پوشش مناطق مرکزی', image: '/assets/demo/photo-1505798577917-a65157d3320a.avif' },
  { title: 'برق‌کاری ساختمان', text: 'رفع خرابی برق، نصب تجهیزات و اصلاح سیم‌کشی با ضمانت کار.', time: 'بازدید در همان روز', image: '/assets/demo/photo-1621905252507-b35492cc74b4.avif' },
]

const faqs = [
  ['هزینه بازدید چطور محاسبه می‌شود؟', 'هزینه بازدید قبل از اعزام اعلام می‌شود و اگر تعمیر توسط مجموعه انجام شود، مبلغ بازدید از هزینه نهایی کسر خواهد شد.'],
  ['چقدر طول می‌کشد تعمیرکار برسد؟', 'برای درخواست‌های فوری، نزدیک‌ترین متخصص موجود به آدرس شما اختصاص داده می‌شود. زمان تقریبی حضور از همان ابتدا نمایش داده خواهد شد.'],
  ['خدمات در چه محدوده‌ای انجام می‌شود؟', 'این نمونه برای یک کسب‌وکار محلی طراحی شده و محدوده سرویس می‌تواند بر اساس شهر، محله و شعاع واقعی فعالیت شما تنظیم شود.'],
  ['آیا کار ضمانت دارد؟', 'بله. نوع و مدت ضمانت بر اساس خدمت انجام‌شده مشخص می‌شود و در پایان کار به مشتری اعلام می‌شود.'],
]

const openBooking = (service = '') => {
  selectedService.value = service
  showBooking.value = true
}

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  mobileMenu.value = false
}

let ctx: gsap.Context

onMounted(async () => {
  if (!import.meta.client) return
  await nextTick()
  gsap.registerPlugin(ScrollTrigger)
  
  ctx = gsap.context(() => {
    // Reveal up animations
    gsap.utils.toArray('.reveal').forEach((el: any) => {
      gsap.fromTo(el, 
        { y: 50, autoAlpha: 0 },
        { 
          y: 0, autoAlpha: 1, 
          duration: 0.8, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
    
    // Stagger services
    gsap.fromTo('.service-card', 
      { y: 60, autoAlpha: 0 },
      {
        y: 0, autoAlpha: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.service-grid',
          start: 'top 95%'
        }
      }
    )

    // Parallax on images
    gsap.utils.toArray('.image-frame img, .why-image img, .service-photo img').forEach((img: any) => {
      gsap.to(img, {
        y: 30,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })

    // Floating cards in hero
    gsap.to('.availability-card', {
      y: -15,
      ease: 'sine.inOut',
      duration: 3,
      yoyo: true,
      repeat: -1
    })
    gsap.to('.rating-card', {
      y: 15,
      ease: 'sine.inOut',
      duration: 3.5,
      yoyo: true,
      repeat: -1,
      delay: 0.5
    })
    gsap.to('.hero-note', {
      y: -10,
      ease: 'sine.inOut',
      duration: 4,
      yoyo: true,
      repeat: -1,
      delay: 1
    })
  })
})

onUnmounted(() => {
  if (import.meta.client) {
    ctx?.revert()
  }
})
</script>

<template>
  <div dir="rtl" class="local-demo">
    <div class="demo-ribbon">
      <span>نمونه طراحی سایت خدماتی و محلی</span>
      <NuxtLink to="/services">مشاهده خدمات FADAKAR ←</NuxtLink>
    </div>

    <header class="site-header">
      <div class="header-inner">
        <button class="menu-btn" aria-label="باز کردن منو" @click="mobileMenu = !mobileMenu">
          <span :class="{'rotate-45 translate-y-2': mobileMenu}"></span>
          <span :class="{'opacity-0': mobileMenu}"></span>
          <span :class="{'-rotate-45 -translate-y-2': mobileMenu}"></span>
        </button>
        <NuxtLink to="/services" class="brand">خدمات <strong>آرمان</strong></NuxtLink>
        <nav :class="{ open: mobileMenu }">
          <button @click="scrollTo('#services')">خدمات</button>
          <button @click="scrollTo('#why')">چرا آرمان؟</button>
          <button @click="scrollTo('#reviews')">نظر مشتریان</button>
          <button @click="scrollTo('#faq')">پرسش‌های متداول</button>
        </nav>
        <button class="header-call" @click="openBooking()"><span>۰۲۱</span> ۴۴۲۱ ۸۸۳۰</button>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <div class="location-pill reveal"><span class="pulse"></span> فعال در تهران · اعزام به محل</div>
          <p class="overline reveal">خدمات فنی، بدون دردسر</p>
          <h1 class="reveal">وقتی خانه<br><em>مشکل پیدا می‌کند،</em><br>راه‌حل باید نزدیک باشد.</h1>
          <p class="hero-text reveal">از تعمیرات فوری تا سرویس‌های دوره‌ای؛ متخصص مطمئن را پیدا کنید، زمان حضور را ببینید و درخواستتان را در کمتر از یک دقیقه ثبت کنید.</p>
          <div class="hero-actions reveal">
            <button class="primary hover-scale" @click="openBooking()">درخواست متخصص <span>←</span></button>
            <button class="secondary hover-scale" @click="scrollTo('#services')">خدمات ما را ببینید</button>
          </div>
          <div class="hero-trust reveal"><span>✓ ضمانت خدمات</span><span>✓ قیمت شفاف</span><span>✓ متخصص احراز هویت‌شده</span></div>
        </div>
        <div class="hero-visual reveal">
          <div class="image-frame"><img src="/assets/demo/photo-1581578731548-c64695cc6952.avif" alt="متخصص خدمات فنی در محل"></div>
          <div class="availability-card glass-panel"><span class="available-dot"></span><div><b>۳ متخصص</b><small>همین حالا آماده اعزام</small></div><strong>نزدیک شما</strong></div>
          <div class="rating-card glass-panel"><b>۴.۹</b><span>★★★★★</span><small>از ۳۸۶ تجربه واقعی</small></div>
          <div class="hero-note glass-panel"><span>۰۱</span><div><b>اولویت ما</b><small>حل مشکل، نه فروش خدمت اضافی</small></div></div>
        </div>
      </section>

      <section class="quick-strip reveal">
        <div>
          <div class="icon-circle">۱</div>
          <span><strong>درخواستت را ثبت کن</strong><small>نوع مشکل و آدرس را بگو</small></span>
        </div>
        <div>
          <div class="icon-circle">۲</div>
          <span><strong>متخصص مناسب انتخاب می‌شود</strong><small>بر اساس موقعیت و تخصص</small></span>
        </div>
        <div>
          <div class="icon-circle">۳</div>
          <span><strong>در محل انجام می‌شود</strong><small>با قیمت و ضمانت مشخص</small></span>
        </div>
      </section>

      <section id="services" class="section services-section">
        <div class="section-intro reveal">
          <p class="overline">برای هر مشکل، یک راه‌حل مشخص</p>
          <h2>خدماتی که مردم<br><em>واقعاً به آن نیاز دارند.</em></h2>
          <p>صفحه خدمات در سایت‌های محلی نباید فقط یک لیست باشد. باید به کاربر کمک کند مشکلش را سریع تشخیص دهد، قیمت و شرایط را بفهمد و بدون سردرگمی اقدام کند.</p>
        </div>
        <div class="service-grid">
          <article v-for="(service, index) in services" :key="service.title" class="service-card hover-card">
            <div class="service-photo">
              <img :src="service.image" :alt="service.title">
              <span class="badge">۰{{ index + 1 }}</span>
            </div>
            <div class="service-body">
              <small>{{ service.time }}</small>
              <h3>{{ service.title }}</h3>
              <p>{{ service.text }}</p>
              <button @click="openBooking(service.title)" class="text-btn">درخواست این خدمت <span>←</span></button>
            </div>
          </article>
        </div>
      </section>

      <section id="why" class="why-section">
        <div class="why-image reveal">
          <div class="image-wrapper rounded-3xl overflow-hidden shadow-2xl relative">
            <img src="/assets/demo/photo-1542013936693-884638332954.avif" alt="تیم متخصص خدمات محلی">
          </div>
          <div class="experience glass-panel dark"><b>۱۲</b><span>سال تجربه<br>در خدمت محله</span></div>
        </div>
        <div class="why-copy reveal">
          <p class="overline">چرا مشتری‌ها دوباره تماس می‌گیرند؟</p>
          <h2>اعتماد، چیزی نیست که<br><em>با یک دکمه ساخته شود.</em></h2>
          <p>برای یک کسب‌وکار محلی، سایت باید قبل از تماس تلفنی بخشی از اعتماد را بسازد. معرفی متخصص، محدوده خدمت، تجربه مشتریان، قیمت‌گذاری و مسیر ارتباطی باید کنار هم قرار بگیرند.</p>
          <div class="benefits">
            <div>
              <div class="benefit-icon">✓</div>
              <span><strong>متخصص واقعی</strong><small>پروفایل، تخصص و سابقه مشخص</small></span>
            </div>
            <div>
              <div class="benefit-icon">✓</div>
              <span><strong>قیمت‌گذاری شفاف</strong><small>بدون غافلگیری هنگام پرداخت</small></span>
            </div>
            <div>
              <div class="benefit-icon">✓</div>
              <span><strong>پیگیری ساده</strong><small>از ثبت درخواست تا پایان کار</small></span>
            </div>
          </div>
          <button class="text-link" @click="openBooking()">همین حالا درخواست بده ←</button>
        </div>
      </section>

      <section class="map-section">
        <div class="map-copy reveal">
          <p class="overline">خدمات نزدیک شما</p>
          <h2>کاربر لازم نیست<br><em>دنبال شما بگردد.</em></h2>
          <p>موقعیت و محدوده سرویس را از همان ابتدا مشخص کنید. این بخش می‌تواند به نقشه واقعی، لوکیشن شعبه‌ها، مناطق تحت پوشش و حتی زمان تقریبی رسیدن متخصص متصل شود.</p>
          <div class="area-list">
            <span class="badge hover-scale">تهران</span>
            <span class="badge hover-scale">سعادت‌آباد</span>
            <span class="badge hover-scale">پونک</span>
            <span class="badge hover-scale">مرزداران</span>
            <span class="badge hover-scale">صادقیه</span>
            <span class="badge hover-scale">جنت‌آباد</span>
          </div>
        </div>
        <div class="fake-map reveal rounded-3xl shadow-xl">
          <div class="map-grid"></div>
          <div class="road road-a"></div><div class="road road-b"></div><div class="road road-c"></div>
          <div class="map-label label-a">صادقیه</div><div class="map-label label-b">پونک</div><div class="map-label label-c">مرزداران</div>
          <div class="map-pin pin-a bounce"><i></i></div><div class="map-pin pin-b bounce" style="animation-delay: 0.2s"><i></i></div><div class="map-pin pin-c bounce" style="animation-delay: 0.4s"><i></i></div>
          <div class="you glass-panel dark">شما اینجا هستید</div>
        </div>
      </section>

      <section id="reviews" class="reviews-section section">
        <div class="section-head reveal">
          <div><p class="overline">صدای مشتریان</p><h2>قبل از تماس،<br><em>اعتماد را ببین.</em></h2></div>
          <div class="review-summary glass-panel"><b>۴.۹</b><span>★★★★★</span><small>میانگین امتیاز ۳۸۶ مشتری</small></div>
        </div>
        <div class="reviews-grid">
          <article class="review reveal hover-card">
            <div class="stars">★★★★★</div>
            <p>«همون چیزی بود که از یک سایت خدماتی انتظار دارم؛ فهمیدم چه کسی میاد، حدوداً چقدر زمان می‌بره و قبل از تماس جواب بیشتر سوال‌هام رو گرفتم.»</p>
            <footer><b>مریم احمدی</b><span>سعادت‌آباد · سرویس کولر</span></footer>
          </article>
          <article class="review featured reveal hover-scale shadow-2xl">
            <div class="stars">★★★★★</div>
            <p>«تعمیرکار سر وقت رسید و قیمت همون چیزی بود که تلفنی گفته بودند. تجربه خوبی بود و برای همین دوباره از همین مجموعه استفاده کردم.»</p>
            <footer><b>رضا کریمی</b><span>پونک · برق‌کاری</span></footer>
          </article>
          <article class="review reveal hover-card">
            <div class="stars">★★★★★</div>
            <p>«اینکه محدوده خدمات و راه ارتباطی واضح بود خیلی کمک کرد. برای کسب‌وکار محلی دقیقاً چنین سایتی لازمه.»</p>
            <footer><b>الهام رضایی</b><span>مرزداران · تأسیسات</span></footer>
          </article>
        </div>
      </section>

      <section class="process-section relative overflow-hidden">
        <!-- Soft decorative blobs -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div class="relative z-10 process-title reveal"><p class="overline">ساده‌تر از یک تماس</p><h2>از مشکل تا حل شدنش،<br><em>سه قدم.</em></h2></div>
        <div class="relative z-10 process-line">
          <div class="process-step reveal"><b>۰۱</b><span>مشکل را انتخاب کن</span><small>کاربر لازم نیست اصطلاح تخصصی بداند.</small></div>
          <div class="process-step reveal"><b>۰۲</b><span>زمان و آدرس را مشخص کن</span><small>اطلاعات لازم، کوتاه و قابل فهم.</small></div>
          <div class="process-step reveal"><b>۰۳</b><span>متخصص می‌رسد</span><small>با اطلاعات و شرایط از قبل مشخص.</small></div>
        </div>
      </section>

      <section id="faq" class="faq-section section">
        <div class="faq-title reveal">
          <p class="overline">پرسش‌های متداول</p>
          <h2>قبل از اینکه<br><em>بپرسی، جوابش اینجاست.</em></h2>
          <p>این بخش فقط برای SEO نیست؛ بخشی از تجربه کاربر است و اصطکاک قبل از تبدیل را کم می‌کند.</p>
        </div>
        <div class="faq-list reveal">
          <article v-for="(faq, index) in faqs" :key="faq[0]" :class="{ active: activeFaq === index }" class="faq-card">
            <button @click="activeFaq = activeFaq === index ? null : index">
              <b>{{ faq[0] }}</b>
              <div class="icon-box" :class="{ 'open': activeFaq === index }">
                <span></span><span></span>
              </div>
            </button>
            <transition name="slide-down">
              <div v-if="activeFaq === index" class="faq-content">
                <p>{{ faq[1] }}</p>
              </div>
            </transition>
          </article>
        </div>
      </section>

      <section class="final-cta">
        <div class="reveal">
          <p class="overline text-white/80">وقتشه کار رو ساده کنیم</p>
          <h2 class="text-white">مشکل را بگو؛<br><em>بقیه‌اش با ما.</em></h2>
          <p class="text-white/90">درخواستت را ثبت کن تا نزدیک‌ترین متخصص مناسب را به تو معرفی کنیم.</p>
        </div>
        <button class="hover-scale reveal" @click="openBooking()">درخواست متخصص <span>←</span></button>
      </section>
    </main>

    <footer class="footer">
      <div>
        <NuxtLink to="/services" class="brand">خدمات <strong>آرمان</strong></NuxtLink>
        <p>این صفحه یک نمونه طراحی برای کسب‌وکارهای خدماتی و محلی است. ساختار نهایی بر اساس مدل واقعی کسب‌وکار، شهر و مشتریان شما طراحی می‌شود.</p>
      </div>
      <div><b>خدمات</b><span>تعمیرات</span><span>تأسیسات</span><span>برق‌کاری</span></div>
      <div><b>ارتباط</b><span>۰۲۱ ۴۴۲۱ ۸۸۳۰</span><span>تهران، محدوده غرب</span><span>شنبه تا پنجشنبه · ۸ تا ۲۰</span></div>
      <div class="footer-note"><span>یک سایت خوب فقط زیبا نیست.</span><strong>کاربر را به تصمیم درست می‌رساند.</strong></div>
    </footer>

    <div class="mobile-cta">
      <button @click="openBooking()" class="shadow-lg">درخواست متخصص</button>
      <a href="tel:02144218830" class="shadow-md bg-white">تماس مستقیم</a>
    </div>

    <Transition name="modal">
      <div v-if="showBooking" class="modal-backdrop" @click.self="showBooking = false">
        <div class="booking-modal glass-panel">
          <button class="close" aria-label="بستن" @click="showBooking = false">×</button>
          <p class="overline">درخواست متخصص</p>
          <h2>{{ selectedService || 'خدمت مورد نیازت را انتخاب کن' }}</h2>
          <p>این فرم در نسخه واقعی می‌تواند به پنل مدیریت، تقویم، پیامک و سیستم پیگیری سفارش متصل شود.</p>
          <label>نام و شماره تماس<input placeholder="مثلاً علی رضایی — ۰۹۱۲..." /></label>
          <label>نوع خدمت
            <select v-model="selectedService">
              <option value="">انتخاب کنید</option>
              <option v-for="service in services" :key="service.title">{{ service.title }}</option>
            </select>
          </label>
          <button class="primary full hover-scale" @click="showBooking = false">ثبت درخواست و ادامه <span>←</span></button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap');

:global(html){scroll-behavior:smooth}
:global(body){margin:0;background:#f8fafc;color:#1e293b;font-family:'Vazirmatn',sans-serif}
*{box-sizing:border-box}

.local-demo {
  --ink:#1e293b;
  --muted:#64748b;
  --paper:#f8fafc;
  --card:#ffffff;
  --accent:#3b82f6;
  --accent-light:#eff6ff;
  --dark:#0f172a;
  --line:#e2e8f0;
  overflow:hidden;
  background:var(--paper);
  color:var(--ink);
}

button{font:inherit;cursor:pointer}
.demo-ribbon{height:38px;background:var(--dark);color:#fff;display:flex;align-items:center;justify-content:center;gap:28px;font-size:11px;font-weight:600;}
.demo-ribbon a{color:#93c5fd;text-decoration:none}

.site-header{height:88px;background:rgba(255,255,255,0.85);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:20;backdrop-filter:blur(16px)}
.header-inner{height:100%;max-width:1320px;margin:auto;padding:0 28px;display:flex;align-items:center;justify-content:space-between;gap:28px}
.brand{color:var(--ink);font-size:22px;font-weight:800;text-decoration:none;letter-spacing:-1px;white-space:nowrap}
.brand strong{color:var(--accent)}

nav{display:flex;gap:35px;margin-right:auto;margin-left:auto}
nav button{border:0;background:none;color:#475569;font-size:14px;font-weight:600;transition:color 0.2s}
nav button:hover{color:var(--accent)}

.header-call{border:2px solid #cbd5e1;background:white;border-radius:30px;padding:10px 22px;color:var(--ink);font-size:14px;font-weight:800;transition:all 0.3s;box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05)}
.header-call:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-1px);box-shadow: 0 10px 15px -3px rgba(59,130,246,0.1)}
.header-call span{color:var(--muted);margin-left:5px;font-weight:500}

.menu-btn{display:none;border:0;background:none;width:42px;height:42px;position:relative}
.menu-btn span{display:block;width:24px;height:2px;background:var(--ink);margin:6px auto;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);transform-origin:center}

.hero{max-width:1320px;margin:auto;padding:78px 28px 72px;display:grid;grid-template-columns:1fr 1fr;gap:90px;align-items:center;min-height:690px}
.location-pill{display:inline-flex;align-items:center;gap:9px;border:1px solid #bfdbfe;background:#eff6ff;border-radius:30px;padding:8px 16px;font-size:12px;font-weight:600;color:#1d4ed8;margin-bottom:28px}
.pulse,.available-dot{width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 0 4px rgba(16,185,129,0.2);animation:pulse 2s infinite}
@keyframes pulse { 0% {box-shadow:0 0 0 0 rgba(16,185,129,0.4)} 70% {box-shadow:0 0 0 6px rgba(16,185,129,0)} 100% {box-shadow:0 0 0 0 rgba(16,185,129,0)} }
@keyframes bounce { 0%, 100% {transform:translateY(0) rotate(-45deg)} 50% {transform:translateY(-10px) rotate(-45deg)} }
.bounce { animation: bounce 3s ease-in-out infinite; }

.overline{text-transform:uppercase;letter-spacing:.05em;color:var(--accent);font-size:12px;font-weight:800;margin:0 0 16px}
.hero h1{font-size:clamp(40px,5vw,70px);line-height:1.15;letter-spacing:-2px;margin:0 0 25px;font-weight:900}
.hero h1 em,.section h2 em,.why-copy h2 em,.map-copy h2 em,.final-cta h2 em,.process-title h2 em,.faq-title h2 em{font-style:normal;color:var(--accent)}
.hero-text{max-width:600px;color:var(--muted);line-height:2;font-size:17px;margin:0 0 32px}

.hero-actions{display:flex;gap:12px}
.primary,.secondary{border-radius:12px;padding:16px 24px;border:2px solid transparent;font-weight:700;font-size:14px;transition:all 0.3s;display:inline-flex;align-items:center;justify-content:center}
.primary{background:var(--accent);color:white;box-shadow:0 10px 25px -5px rgba(59,130,246,0.4)}
.primary:hover{background:#2563eb;box-shadow:0 15px 30px -5px rgba(59,130,246,0.5)}
.secondary{background:white;border-color:var(--line);color:var(--ink)}
.secondary:hover{border-color:#cbd5e1;background:#f8fafc}
.hover-scale{transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)}
.hover-scale:hover{transform:scale(1.03)}

.hero-trust{display:flex;gap:20px;flex-wrap:wrap;margin-top:32px;color:var(--muted);font-size:12px;font-weight:600}
.hero-visual{position:relative;min-height:570px;border-radius:2rem}
.image-frame{height:560px;border-radius:2rem;overflow:hidden;background:#e2e8f0;box-shadow:0 25px 50px -12px rgba(0,0,0,0.15);transform:translateZ(0)}
.image-frame img{width:100%;height:100%;object-fit:cover;display:block;}

.glass-panel{background:rgba(255,255,255,0.85);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.6);box-shadow:0 20px 40px rgba(0,0,0,0.08);border-radius:1rem}
.glass-panel.dark{background:rgba(15,23,42,0.85);border:1px solid rgba(255,255,255,0.1);color:white}

.availability-card,.rating-card,.hero-note{position:absolute;}
.availability-card{left:-40px;top:60px;padding:16px 20px;display:flex;align-items:center;gap:14px}
.availability-card small,.rating-card small{display:block;color:var(--muted);font-size:10px;margin-top:4px}
.availability-card b{font-size:14px;font-weight:800}
.availability-card strong{font-size:12px;font-weight:800;color:#10b981;border-right:1px solid var(--line);padding-right:14px}
.rating-card{right:-20px;bottom:80px;padding:18px 24px;min-width:150px}
.rating-card b{font-size:32px;display:block;font-weight:900}
.rating-card span{font-size:13px;color:#f59e0b;letter-spacing:2px}
.hero-note{right:30px;top:40px;padding:16px 20px;display:flex;gap:14px;align-items:center}
.hero-note>span{font-size:12px;color:#93c5fd;font-weight:800}
.hero-note b{display:block;font-size:13px;font-weight:700}
.hero-note small{font-size:10px;color:#94a3b8}

.quick-strip{border-top:1px solid var(--line);border-bottom:1px solid var(--line);max-width:1320px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);background:white}
.quick-strip>div{padding:30px;display:flex;gap:18px;align-items:center;border-left:1px solid var(--line)}
.quick-strip>div:last-child{border-left:0}
.icon-circle{width:36px;height:36px;border-radius:50%;background:var(--accent-light);color:var(--accent);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px}
.quick-strip strong,.quick-strip small{display:block}
.quick-strip strong{font-size:14px;font-weight:800}
.quick-strip small{font-size:11px;color:var(--muted);margin-top:4px}

.section{max-width:1320px;margin:auto;padding:120px 28px}
.services-section{display:grid;grid-template-columns:.8fr 1.2fr;gap:80px}
.section-intro{padding-top:10px}
.section h2,.why-copy h2,.map-copy h2,.process-title h2,.faq-title h2{font-size:clamp(32px,4vw,50px);line-height:1.25;letter-spacing:-1.5px;margin:0 0 24px;font-weight:900}
.section-intro>p:last-child,.why-copy>p,.map-copy>p,.faq-title>p{font-size:16px;line-height:1.9;color:var(--muted);max-width:450px}

.service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.service-card{background:var(--card);border:1px solid var(--line);border-radius:1.5rem;overflow:hidden;display:flex;flex-direction:column}
.hover-card{transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}
.hover-card:hover{transform:translateY(-8px);box-shadow:0 20px 40px -10px rgba(0,0,0,0.1);border-color:#cbd5e1}
.service-photo{height:200px;position:relative;overflow:hidden;background:#e2e8f0}
.service-photo img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s}
.hover-card:hover .service-photo img{transform:scale(1.05)}
.badge{position:absolute;right:16px;top:16px;background:rgba(255,255,255,0.9);backdrop-filter:blur(4px);padding:6px 10px;font-size:11px;font-weight:800;border-radius:8px;color:var(--ink)}
.service-body{padding:24px;flex:1;display:flex;flex-direction:column}
.service-body>small{color:var(--accent);font-size:11px;font-weight:700}
.service-body h3{font-size:18px;margin:10px 0;font-weight:800}
.service-body p{font-size:13px;line-height:1.8;color:var(--muted);flex:1;margin-bottom:20px}
.text-btn{border:0;background:none;padding:0;color:var(--accent);font-size:13px;font-weight:800;text-align:right;display:inline-flex;align-items:center;gap:6px}

.reveal{opacity:0;visibility:hidden}

.why-section{background:var(--dark);color:white;display:grid;grid-template-columns:1fr 1fr;gap:90px;padding:140px max(28px,calc((100vw - 1264px)/2));align-items:center}
.why-image{position:relative}
.image-wrapper img{width:100%;height:600px;object-fit:cover}
.experience{position:absolute;bottom:-30px;right:-30px;padding:28px;display:flex;align-items:end;gap:14px;border-radius:1.5rem}
.experience b{font-size:55px;line-height:0.8;font-weight:900}
.experience span{font-size:12px;line-height:1.6;font-weight:600}
.why-copy .overline{color:#94a3b8}
.why-copy h2{color:white}
.why-copy>p{color:#94a3b8}

.benefits{border-top:1px solid rgba(255,255,255,.1);margin-top:40px}
.benefits>div{display:flex;gap:20px;padding:22px 0;border-bottom:1px solid rgba(255,255,255,.1);align-items:center}
.benefit-icon{width:32px;height:32px;border-radius:50%;background:rgba(59,130,246,0.2);color:#60a5fa;display:flex;align-items:center;justify-content:center;font-weight:900;font-size:14px}
.benefits strong,.benefits small{display:block}
.benefits strong{font-size:15px;font-weight:800}
.benefits small{font-size:12px;color:#94a3b8;margin-top:6px}
.text-link{margin-top:35px;border:0;background:none;color:#60a5fa;font-size:14px;font-weight:800;padding:0;transition:color 0.2s}
.text-link:hover{color:#93c5fd}

.map-section{max-width:1320px;margin:auto;padding:140px 28px;display:grid;grid-template-columns:.8fr 1.2fr;gap:100px;align-items:center}
.area-list{display:flex;gap:10px;flex-wrap:wrap;margin-top:32px}
.area-list .badge{position:static;background:white;border:1px solid var(--line);color:var(--muted);box-shadow:0 2px 5px rgba(0,0,0,0.02)}
.fake-map{height:500px;position:relative;overflow:hidden;background:#e2e8f0;border:1px solid var(--line)}
.map-grid{position:absolute;inset:0;background-image:linear-gradient(#cbd5e1 1px,transparent 1px),linear-gradient(90deg,#cbd5e1 1px,transparent 1px);background-size:50px 50px;opacity:.5}
.road{position:absolute;background:#f1f5f9;border:1px solid #cbd5e1}
.road-a{width:130%;height:90px;top:150px;left:-10%;transform:rotate(-12deg)}
.road-b{height:130%;width:65px;top:-10%;right:31%;transform:rotate(19deg)}
.road-c{width:110%;height:45px;bottom:85px;left:-5%;transform:rotate(7deg)}
.map-label{position:absolute;font-size:12px;font-weight:800;color:#64748b;background:rgba(255,255,255,0.8);padding:4px 8px;border-radius:6px}
.label-a{top:90px;right:17%}.label-b{top:285px;left:19%}.label-c{bottom:115px;right:15%}
.map-pin{position:absolute;width:32px;height:32px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:var(--accent);box-shadow:0 10px 20px rgba(59,130,246,0.3)}
.map-pin i{position:absolute;width:10px;height:10px;background:white;border-radius:50%;left:11px;top:11px}
.pin-a{top:140px;right:34%}.pin-b{top:270px;left:31%}.pin-c{bottom:130px;right:21%}
.you{position:absolute;bottom:30px;left:30px;padding:12px 18px;font-size:11px;font-weight:800;border-radius:12px}

.reviews-section{padding-top:40px}
.section-head{display:flex;justify-content:space-between;align-items:end;margin-bottom:50px}
.review-summary{display:grid;grid-template-columns:auto auto;gap:6px 14px;align-items:center;padding:20px 24px;border:none}
.review-summary b{font-size:42px;font-weight:900}
.review-summary span{color:#f59e0b;letter-spacing:3px}
.review-summary small{grid-column:1 / -1;color:var(--muted);font-size:11px;font-weight:600}
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.review{padding:35px;background:white;border:1px solid var(--line);min-height:280px;display:flex;flex-direction:column;border-radius:1.5rem}
.review.featured{background:var(--dark);color:white;border-color:var(--dark);transform:translateY(-20px)}
.review.featured:hover{transform:translateY(-28px)}
.stars{color:#f59e0b;font-size:14px;letter-spacing:3px;margin-bottom:20px}
.review p{font-size:14px;line-height:2.2;color:var(--muted);flex:1;font-weight:500}
.review.featured p{color:#94a3b8}
.review footer{border-top:1px solid var(--line);padding-top:20px}
.review.featured footer{border-color:rgba(255,255,255,0.1)}
.review footer b,.review footer span{display:block}
.review footer b{font-size:13px;font-weight:800}
.review footer span{font-size:11px;color:#94a3b8;margin-top:6px}

.process-section{background:white;padding:130px max(28px,calc((100vw - 1264px)/2));border-y:1px solid var(--line)}
.process-title{text-align:center;margin-bottom:80px}
.process-line{display:grid;grid-template-columns:repeat(3,1fr);position:relative}
.process-line:before{content:'';position:absolute;top:32px;left:14%;right:14%;border-top:2px dashed #cbd5e1}
.process-step{text-align:center;position:relative}
.process-step>b{display:flex;width:64px;height:64px;border-radius:50%;background:var(--accent);color:white;align-items:center;justify-content:center;margin:0 auto 24px;font-size:16px;font-weight:900;position:relative;box-shadow:0 0 0 10px white, 0 10px 25px rgba(59,130,246,0.3)}
.process-step span{font-weight:800;font-size:18px;display:block}
.process-step small{display:block;color:var(--muted);font-size:13px;margin-top:10px}

.faq-section{display:grid;grid-template-columns:.8fr 1.2fr;gap:100px}
.faq-list{display:flex;flex-direction:column;gap:16px}
.faq-card{background:white;border:1px solid var(--line);border-radius:1.5rem;overflow:hidden;transition:all 0.3s}
.faq-card.active{border-color:var(--accent);box-shadow:0 15px 30px -10px rgba(59,130,246,0.15)}
.faq-card button{width:100%;display:flex;justify-content:space-between;align-items:center;padding:24px;border:0;background:none;color:var(--ink);cursor:pointer;text-align:right}
.faq-card button b{font-size:15px;font-weight:800}
.icon-box{width:36px;height:36px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center;position:relative;transition:all 0.3s;flex-shrink:0}
.faq-card.active .icon-box{background:var(--accent);color:white}
.icon-box span{position:absolute;width:12px;height:2px;background:currentcolor;border-radius:2px;transition:all 0.3s}
.icon-box span:last-child{transform:rotate(90deg)}
.icon-box.open span:last-child{transform:rotate(0)}
.faq-card.active .icon-box span{background:white}
.faq-content{padding:0 24px 24px;font-size:14px;line-height:2;color:var(--muted)}
.slide-down-enter-active, .slide-down-leave-active { transition: all 0.3s ease; max-height: 200px; opacity: 1; overflow: hidden; }
.slide-down-enter-from, .slide-down-leave-to { max-height: 0; opacity: 0; padding-top: 0; padding-bottom: 0; }

.final-cta{background:var(--accent);color:white;padding:100px max(28px,calc((100vw - 1264px)/2));display:flex;align-items:center;justify-content:space-between;gap:60px;margin:40px;border-radius:2rem;box-shadow:0 20px 40px -10px rgba(59,130,246,0.4)}
.final-cta .overline{color:#bfdbfe}
.final-cta h2{font-size:clamp(38px,5vw,60px);line-height:1.2;letter-spacing:-2px;margin:0 0 20px}
.final-cta h2 em{color:white}
.final-cta p:last-child{font-size:16px;opacity:.9}
.final-cta>button{background:white;color:var(--accent);border:0;border-radius:12px;padding:20px 32px;font-size:16px;font-weight:800;white-space:nowrap;box-shadow:0 10px 25px rgba(0,0,0,0.1)}

.footer{background:var(--dark);color:#f8fafc;padding:80px max(28px,calc((100vw - 1264px)/2));display:grid;grid-template-columns:1.8fr .8fr .9fr 1fr;gap:60px}
.footer .brand{color:white}
.footer p{font-size:12px;color:#94a3b8;line-height:2;margin-top:20px;max-width:350px}
.footer>div>b,.footer>div>span{display:block}
.footer>div>b{font-size:14px;margin-bottom:20px;font-weight:800}
.footer>div>span{font-size:12px;color:#94a3b8;margin:12px 0;transition:color 0.2s}
.footer>div>span:hover{color:white;cursor:pointer}
.footer-note{border-right:1px solid rgba(255,255,255,0.1);padding-right:40px;display:flex;flex-direction:column;justify-content:center}
.footer-note span{color:#94a3b8!important;font-size:12px}
.footer-note strong{font-size:20px;line-height:1.6;margin-top:10px;font-weight:900}
.mobile-cta{display:none}

.modal-backdrop{position:fixed;inset:0;background:rgba(15,23,42,0.8);backdrop-filter:blur(8px);z-index:100;display:grid;place-items:center;padding:24px}
.booking-modal{width:min(550px,100%);background:white;padding:45px;border-radius:1.5rem;position:relative;box-shadow:0 30px 80px rgba(0,0,0,0.2)}
.booking-modal h2{font-size:28px;margin:0 0 12px;font-weight:900}
.booking-modal>p:not(.overline){font-size:13px;color:var(--muted);line-height:2;margin-bottom:30px}
.close{position:absolute;left:24px;top:24px;border:0;background:none;font-size:28px;color:#94a3b8;transition:color 0.2s}
.close:hover{color:var(--ink)}
.booking-modal label{display:block;font-size:12px;font-weight:800;margin-top:24px;color:var(--ink)}
.booking-modal input,.booking-modal select{display:block;width:100%;margin-top:10px;border:2px solid var(--line);background:#f8fafc;padding:16px;border-radius:10px;font:inherit;font-size:14px;transition:border-color 0.2s}
.booking-modal input:focus,.booking-modal select:focus{outline:none;border-color:var(--accent)}
.full{width:100%;margin-top:35px}
.modal-enter-active,.modal-leave-active{transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}
.modal-enter-from,.modal-leave-to{opacity:0;transform:scale(0.95)}

@media(max-width:950px){
  nav{display:none;position:absolute;top:88px;right:0;left:0;background:rgba(255,255,255,0.95);backdrop-filter:blur(16px);padding:30px 28px;border-bottom:1px solid var(--line);flex-direction:column;gap:24px}
  nav.open{display:flex}
  .menu-btn{display:block}
  .hero{grid-template-columns:1fr;gap:50px;padding-top:55px}
  .hero-visual{min-height:480px}
  .image-frame{height:480px}
  .hero-note{right:15px}
  .availability-card{left:12px}
  .services-section,.map-section,.faq-section{grid-template-columns:1fr;gap:50px}
  .why-section{grid-template-columns:1fr;gap:50px}
  .image-wrapper img{height:480px}
  .reviews-grid{grid-template-columns:1fr}
  .review.featured{transform:none}
  .review.featured:hover{transform:translateY(-8px)}
  .footer{grid-template-columns:1fr 1fr}
  .quick-strip{grid-template-columns:1fr}
  .quick-strip>div{border-left:0;border-bottom:1px solid var(--line);padding:24px}
  .quick-strip>div:last-child{border-bottom:0}
  .section-head{align-items:start;gap:24px;flex-direction:column}
  .service-grid{grid-template-columns:1fr 1fr}
  .final-cta{flex-direction:column;text-align:center;padding:60px 30px;margin:20px}
  .process-line{gap:40px}
  .process-line:before{display:none}
}
@media(max-width:620px){
  .demo-ribbon{padding:0 16px;justify-content:space-between}
  .demo-ribbon a{font-size:10px}
  .header-inner{padding:0 20px}
  .header-call{display:none}
  .hero{padding:42px 20px 55px;min-height:auto}
  .hero h1{font-size:45px;letter-spacing:-2px}
  .hero-text{font-size:15px}
  .hero-actions{flex-direction:column}
  .hero-actions button{width:100%}
  .hero-trust{gap:12px;flex-direction:column}
  .hero-visual{min-height:390px}
  .image-frame{height:390px}
  .availability-card{top:20px;left:10px;padding:12px 16px}
  .rating-card{right:10px;bottom:40px;padding:14px 20px}
  .hero-note{display:none}
  .section{padding:80px 20px}
  .section h2,.why-copy h2,.map-copy h2,.process-title h2,.faq-title h2{font-size:38px}
  .service-grid{grid-template-columns:1fr}
  .service-photo{height:220px}
  .why-section{padding:80px 20px}
  .image-wrapper img{height:360px}
  .experience{right:10px;bottom:-20px;padding:20px}
  .map-section{padding:80px 20px}
  .fake-map{height:350px}
  .section-head{display:flex;flex-direction:column}
  .review-summary{margin-top:10px}
  .process-section{padding:80px 20px}
  .process-line{grid-template-columns:1fr;gap:35px}
  .process-step{text-align:right;display:grid;grid-template-columns:64px 1fr;column-gap:20px}
  .process-step>b{grid-row:span 2;margin:0;box-shadow:0 0 0 6px white}
  .process-step span,.process-step small{padding-top:6px;margin-top:0}
  .final-cta{margin:20px;padding:50px 20px}
  .footer{grid-template-columns:1fr;padding:60px 20px;gap:40px}
  .footer-note{border-right:0;border-top:1px solid rgba(255,255,255,0.1);padding:30px 0 0}
  .mobile-cta{display:grid;grid-template-columns:1fr 1fr;position:fixed;bottom:0;right:0;left:0;z-index:30;background:rgba(255,255,255,0.9);backdrop-filter:blur(10px);border-top:1px solid var(--line);padding:12px;gap:12px}
  .mobile-cta button,.mobile-cta a{padding:14px;text-align:center;border-radius:10px;font-size:13px;font-weight:800;text-decoration:none}
  .mobile-cta button{background:var(--accent);color:white;border:0}
  .mobile-cta a{border:2px solid #cbd5e1;color:var(--ink)}
  .booking-modal{padding:30px 20px}
}
</style>
