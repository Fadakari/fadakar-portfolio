<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

useSeoMeta({
  title: 'دموی سایت خدماتی و محلی | FADAKAR',
  description: 'نمونه طراحی سایت خدماتی و محلی با تمرکز بر اعتماد، موقعیت مکانی، رزرو سریع و تبدیل بازدیدکننده به مشتری.'
})

const mobileMenu = ref(false)
const activeFaq = ref<number | null>(0)
const showBooking = ref(false)
const selectedService = ref('')

const services = [
  { title: 'سرویس و تعمیر کولر', text: 'عیب‌یابی، سرویس دوره‌ای و تعمیر انواع کولر در محل.', time: 'اعزام از ۶۰ دقیقه', image: '/assets/demo/photo-1497366811353-6870744d04b2.avif' },
  { title: 'تأسیسات و لوله‌کشی', text: 'رفع نشتی، تعمیرات فوری و اجرای اصولی تأسیسات ساختمان.', time: 'پوشش مناطق مرکزی', image: '/assets/demo/photo-1581578731548-c64695cc6952.avif' },
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

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible')
    })
  }, { threshold: 0.12 })

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  onUnmounted(() => observer.disconnect())
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
        <button class="menu-btn" aria-label="باز کردن منو" @click="mobileMenu = !mobileMenu"><span></span><span></span></button>
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
          <div class="location-pill"><span class="pulse"></span> فعال در تهران · اعزام به محل</div>
          <p class="overline">خدمات فنی، بدون دردسر</p>
          <h1>وقتی خانه<br><em>مشکل پیدا می‌کند،</em><br>راه‌حل باید نزدیک باشد.</h1>
          <p class="hero-text">از تعمیرات فوری تا سرویس‌های دوره‌ای؛ متخصص مطمئن را پیدا کنید، زمان حضور را ببینید و درخواستتان را در کمتر از یک دقیقه ثبت کنید.</p>
          <div class="hero-actions">
            <button class="primary" @click="openBooking()">درخواست متخصص <span>←</span></button>
            <button class="secondary" @click="scrollTo('#services')">خدمات ما را ببینید</button>
          </div>
          <div class="hero-trust"><span>✓ ضمانت خدمات</span><span>✓ قیمت شفاف</span><span>✓ متخصص احراز هویت‌شده</span></div>
        </div>
        <div class="hero-visual">
          <div class="image-frame"><img src="/assets/demo/photo-1581578731548-c64695cc6952.avif" alt="متخصص خدمات فنی در محل"></div>
          <div class="availability-card"><span class="available-dot"></span><div><b>۳ متخصص</b><small>همین حالا آماده اعزام</small></div><strong>نزدیک شما</strong></div>
          <div class="rating-card"><b>۴.۹</b><span>★★★★★</span><small>از ۳۸۶ تجربه واقعی</small></div>
          <div class="hero-note"><span>۰۱</span><div><b>اولویت ما</b><small>حل مشکل، نه فروش خدمت اضافی</small></div></div>
        </div>
      </section>

      <section class="quick-strip">
        <div><b>۱</b><span><strong>درخواستت را ثبت کن</strong><small>نوع مشکل و آدرس را بگو</small></span></div>
        <div><b>۲</b><span><strong>متخصص مناسب انتخاب می‌شود</strong><small>بر اساس موقعیت و تخصص</small></span></div>
        <div><b>۳</b><span><strong>در محل انجام می‌شود</strong><small>با قیمت و ضمانت مشخص</small></span></div>
      </section>

      <section id="services" class="section services-section">
        <div class="section-intro reveal"><p class="overline">برای هر مشکل، یک راه‌حل مشخص</p><h2>خدماتی که مردم<br><em>واقعاً به آن نیاز دارند.</em></h2><p>صفحه خدمات در سایت‌های محلی نباید فقط یک لیست باشد. باید به کاربر کمک کند مشکلش را سریع تشخیص دهد، قیمت و شرایط را بفهمد و بدون سردرگمی اقدام کند.</p></div>
        <div class="service-grid">
          <article v-for="(service, index) in services" :key="service.title" class="service-card reveal">
            <div class="service-photo"><img :src="service.image" :alt="service.title"><span>۰{{ index + 1 }}</span></div>
            <div class="service-body"><small>{{ service.time }}</small><h3>{{ service.title }}</h3><p>{{ service.text }}</p><button @click="openBooking(service.title)">درخواست این خدمت <span>←</span></button></div>
          </article>
        </div>
      </section>

      <section id="why" class="why-section">
        <div class="why-image reveal"><img src="/assets/demo/photo-1556761175-b413da4baf72.avif" alt="تیم متخصص خدمات محلی"><div class="experience"><b>۱۲</b><span>سال تجربه<br>در خدمت محله</span></div></div>
        <div class="why-copy reveal"><p class="overline">چرا مشتری‌ها دوباره تماس می‌گیرند؟</p><h2>اعتماد، چیزی نیست که<br><em>با یک دکمه ساخته شود.</em></h2><p>برای یک کسب‌وکار محلی، سایت باید قبل از تماس تلفنی بخشی از اعتماد را بسازد. معرفی متخصص، محدوده خدمت، تجربه مشتریان، قیمت‌گذاری و مسیر ارتباطی باید کنار هم قرار بگیرند.</p><div class="benefits"><div><b>۰۱</b><span><strong>متخصص واقعی</strong><small>پروفایل، تخصص و سابقه مشخص</small></span></div><div><b>۰۲</b><span><strong>قیمت‌گذاری شفاف</strong><small>بدون غافلگیری هنگام پرداخت</small></span></div><div><b>۰۳</b><span><strong>پیگیری ساده</strong><small>از ثبت درخواست تا پایان کار</small></span></div></div><button class="text-link" @click="openBooking()">همین حالا درخواست بده ←</button></div>
      </section>

      <section class="map-section">
        <div class="map-copy reveal"><p class="overline">خدمات نزدیک شما</p><h2>کاربر لازم نیست<br><em>دنبال شما بگردد.</em></h2><p>موقعیت و محدوده سرویس را از همان ابتدا مشخص کنید. این بخش می‌تواند به نقشه واقعی، لوکیشن شعبه‌ها، مناطق تحت پوشش و حتی زمان تقریبی رسیدن متخصص متصل شود.</p><div class="area-list"><span>تهران</span><span>سعادت‌آباد</span><span>پونک</span><span>مرزداران</span><span>صادقیه</span><span>جنت‌آباد</span></div></div>
        <div class="fake-map reveal"><div class="map-grid"></div><div class="road road-a"></div><div class="road road-b"></div><div class="road road-c"></div><div class="map-label label-a">صادقیه</div><div class="map-label label-b">پونک</div><div class="map-label label-c">مرزداران</div><div class="map-pin pin-a"><i></i></div><div class="map-pin pin-b"><i></i></div><div class="map-pin pin-c"><i></i></div><div class="you">شما اینجا هستید</div></div>
      </section>

      <section id="reviews" class="reviews-section section">
        <div class="section-head reveal"><div><p class="overline">صدای مشتریان</p><h2>قبل از تماس،<br><em>اعتماد را ببین.</em></h2></div><div class="review-summary"><b>۴.۹</b><span>★★★★★</span><small>میانگین امتیاز ۳۸۶ مشتری</small></div></div>
        <div class="reviews-grid">
          <article class="review reveal"><div class="stars">★★★★★</div><p>«همون چیزی بود که از یک سایت خدماتی انتظار دارم؛ فهمیدم چه کسی میاد، حدوداً چقدر زمان می‌بره و قبل از تماس جواب بیشتر سوال‌هام رو گرفتم.»</p><footer><b>مریم احمدی</b><span>سعادت‌آباد · سرویس کولر</span></footer></article>
          <article class="review featured reveal"><div class="stars">★★★★★</div><p>«تعمیرکار سر وقت رسید و قیمت همون چیزی بود که تلفنی گفته بودند. تجربه خوبی بود و برای همین دوباره از همین مجموعه استفاده کردم.»</p><footer><b>رضا کریمی</b><span>پونک · برق‌کاری</span></footer></article>
          <article class="review reveal"><div class="stars">★★★★★</div><p>«اینکه محدوده خدمات و راه ارتباطی واضح بود خیلی کمک کرد. برای کسب‌وکار محلی دقیقاً چنین سایتی لازمه.»</p><footer><b>الهام رضایی</b><span>مرزداران · تأسیسات</span></footer></article>
        </div>
      </section>

      <section class="process-section">
        <div class="process-title reveal"><p class="overline">ساده‌تر از یک تماس</p><h2>از مشکل تا حل شدنش،<br><em>سه قدم.</em></h2></div>
        <div class="process-line"><div class="process-step reveal"><b>۰۱</b><span>مشکل را انتخاب کن</span><small>کاربر لازم نیست اصطلاح تخصصی بداند.</small></div><div class="process-step reveal"><b>۰۲</b><span>زمان و آدرس را مشخص کن</span><small>اطلاعات لازم، کوتاه و قابل فهم.</small></div><div class="process-step reveal"><b>۰۳</b><span>متخصص می‌رسد</span><small>با اطلاعات و شرایط از قبل مشخص.</small></div></div>
      </section>

      <section id="faq" class="faq-section section">
        <div class="faq-title reveal"><p class="overline">پرسش‌های متداول</p><h2>قبل از اینکه<br><em>بپرسی، جوابش اینجاست.</em></h2><p>این بخش فقط برای SEO نیست؛ بخشی از تجربه کاربر است و اصطکاک قبل از تبدیل را کم می‌کند.</p></div>
        <div class="faq-list reveal"><article v-for="(faq, index) in faqs" :key="faq[0]" :class="{ active: activeFaq === index }"><button @click="activeFaq = activeFaq === index ? null : index"><span>۰{{ index + 1 }}</span><b>{{ faq[0] }}</b><i>{{ activeFaq === index ? '−' : '+' }}</i></button><p v-if="activeFaq === index">{{ faq[1] }}</p></article></div>
      </section>

      <section class="final-cta">
        <div><p class="overline">وقتشه کار رو ساده کنیم</p><h2>مشکل را بگو؛<br><em>بقیه‌اش با ما.</em></h2><p>درخواستت را ثبت کن تا نزدیک‌ترین متخصص مناسب را به تو معرفی کنیم.</p></div><button @click="openBooking()">درخواست متخصص <span>←</span></button></section>
    </main>

    <footer class="footer"><div><NuxtLink to="/services" class="brand">خدمات <strong>آرمان</strong></NuxtLink><p>این صفحه یک نمونه طراحی برای کسب‌وکارهای خدماتی و محلی است. ساختار نهایی بر اساس مدل واقعی کسب‌وکار، شهر و مشتریان شما طراحی می‌شود.</p></div><div><b>خدمات</b><span>تعمیرات</span><span>تأسیسات</span><span>برق‌کاری</span></div><div><b>ارتباط</b><span>۰۲۱ ۴۴۲۱ ۸۸۳۰</span><span>تهران، محدوده غرب</span><span>شنبه تا پنجشنبه · ۸ تا ۲۰</span></div><div class="footer-note"><span>یک سایت خوب فقط زیبا نیست.</span><strong>کاربر را به تصمیم درست می‌رساند.</strong></div></footer>

    <div class="mobile-cta"><button @click="openBooking()">درخواست متخصص</button><a href="tel:02144218830">تماس مستقیم</a></div>

    <Transition name="modal"><div v-if="showBooking" class="modal-backdrop" @click.self="showBooking = false"><div class="booking-modal"><button class="close" aria-label="بستن" @click="showBooking = false">×</button><p class="overline">درخواست متخصص</p><h2>{{ selectedService || 'خدمت مورد نیازت را انتخاب کن' }}</h2><p>این فرم در نسخه واقعی می‌تواند به پنل مدیریت، تقویم، پیامک و سیستم پیگیری سفارش متصل شود.</p><label>نام و شماره تماس<input placeholder="مثلاً علی رضایی — ۰۹۱۲..." /></label><label>نوع خدمت<select v-model="selectedService"><option value="">انتخاب کنید</option><option v-for="service in services" :key="service.title">{{ service.title }}</option></select></label><button class="primary full" @click="showBooking = false">ثبت درخواست و ادامه <span>←</span></button></div></div></Transition>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800;900&display=swap');

:global(html){scroll-behavior:smooth}
:global(body){margin:0;background:#f4f0e8;color:#24231f;font-family:'Vazirmatn',sans-serif}
*{box-sizing:border-box}
.local-demo{--ink:#24231f;--muted:#716f68;--paper:#f4f0e8;--card:#fffdf8;--accent:#d46b35;--dark:#1f2d28;--line:#d8d1c4;overflow:hidden;background:var(--paper);color:var(--ink)}
button{font:inherit;cursor:pointer}.demo-ribbon{height:34px;background:#24231f;color:#f8f4eb;display:flex;align-items:center;justify-content:center;gap:28px;font-size:11px}.demo-ribbon a{color:#f3c69f;text-decoration:none}.site-header{height:82px;background:rgba(244,240,232,.94);border-bottom:1px solid var(--line);position:sticky;top:0;z-index:20;backdrop-filter:blur(10px)}.header-inner{height:100%;max-width:1320px;margin:auto;padding:0 28px;display:flex;align-items:center;justify-content:space-between;gap:28px}.brand{color:var(--ink);font-size:19px;text-decoration:none;letter-spacing:-.6px;white-space:nowrap}.brand strong{color:var(--accent)}nav{display:flex;gap:30px;margin-right:auto;margin-left:auto}nav button{border:0;background:none;color:#5c5951;font-size:13px}nav button:hover{color:var(--accent)}.header-call{border:1px solid #c8c0b1;background:transparent;border-radius:30px;padding:10px 18px;color:var(--ink);font-size:12px}.header-call span{color:var(--muted);margin-left:5px}.menu-btn{display:none;border:0;background:none;width:42px;height:42px}.menu-btn span{display:block;width:20px;height:2px;background:var(--ink);margin:5px auto}
.hero{max-width:1320px;margin:auto;padding:78px 28px 72px;display:grid;grid-template-columns:1.02fr .98fr;gap:90px;align-items:center;min-height:690px}.location-pill{display:inline-flex;align-items:center;gap:9px;border:1px solid #d2c9b9;background:#eee9df;border-radius:30px;padding:8px 14px;font-size:11px;color:#615d55;margin-bottom:24px}.pulse,.available-dot{width:7px;height:7px;border-radius:50%;background:#5d9a62;box-shadow:0 0 0 4px rgba(93,154,98,.12)}.overline{text-transform:uppercase;letter-spacing:.09em;color:var(--accent);font-size:11px;font-weight:800;margin:0 0 14px}.hero h1{font-size:clamp(43px,5.3vw,76px);line-height:1.16;letter-spacing:-3px;margin:0 0 25px;font-weight:900}.hero h1 em,.section h2 em,.why-copy h2 em,.map-copy h2 em,.final-cta h2 em,.process-title h2 em,.faq-title h2 em{font-style:normal;color:var(--accent)}.hero-text{max-width:600px;color:#68655e;line-height:2;font-size:16px;margin:0 0 28px}.hero-actions{display:flex;gap:10px}.primary,.secondary{border-radius:8px;padding:13px 20px;border:1px solid transparent;font-weight:700;font-size:13px}.primary{background:var(--accent);color:white;box-shadow:0 8px 24px rgba(212,107,53,.18)}.primary:hover{transform:translateY(-2px)}.secondary{background:transparent;border-color:#cfc6b7;color:var(--ink)}.hero-actions span,.service-body button span,.final-cta button span{margin-right:10px}.hero-trust{display:flex;gap:18px;flex-wrap:wrap;margin-top:28px;color:#7a766d;font-size:11px}.hero-visual{position:relative;min-height:570px}.image-frame{height:560px;border-radius:4px;overflow:hidden;background:#d9d0c1}.image-frame img{width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.82)}.availability-card,.rating-card,.hero-note{position:absolute;background:rgba(255,253,248,.96);border:1px solid rgba(36,35,31,.1);box-shadow:0 16px 40px rgba(38,32,25,.12)}.availability-card{left:-42px;top:44px;padding:14px 16px;display:flex;align-items:center;gap:11px;border-radius:5px}.availability-card small,.rating-card small{display:block;color:#7b776e;font-size:9px;margin-top:4px}.availability-card b{font-size:12px}.availability-card strong{font-size:10px;color:#5e8c62;border-right:1px solid #ddd5c9;padding-right:10px}.rating-card{right:-25px;bottom:72px;padding:15px 18px;border-radius:5px;min-width:135px}.rating-card b{font-size:28px;display:block}.rating-card span{font-size:11px;color:#d58a4d;letter-spacing:2px}.hero-note{right:32px;top:30px;background:#24231f;color:white;padding:15px 17px;display:flex;gap:12px;align-items:center}.hero-note>span{font-size:10px;color:#e0a06f}.hero-note b{display:block;font-size:11px}.hero-note small{font-size:9px;color:#bcb7ad}
.quick-strip{border-top:1px solid var(--line);border-bottom:1px solid var(--line);max-width:1320px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr)}.quick-strip>div{padding:24px 28px;display:flex;gap:16px;align-items:center;border-left:1px solid var(--line)}.quick-strip>div:last-child{border-left:0}.quick-strip b{font-size:11px;color:var(--accent)}.quick-strip strong,.quick-strip small{display:block}.quick-strip strong{font-size:13px}.quick-strip small{font-size:10px;color:#817c72;margin-top:4px}
.section{max-width:1320px;margin:auto;padding:120px 28px}.services-section{display:grid;grid-template-columns:.72fr 1.28fr;gap:70px}.section-intro{padding-top:8px}.section h2,.why-copy h2,.map-copy h2,.process-title h2,.faq-title h2{font-size:clamp(34px,4vw,55px);line-height:1.3;letter-spacing:-2px;margin:0 0 20px}.section-intro>p:last-child,.why-copy>p,.map-copy>p,.faq-title>p{font-size:14px;line-height:2.2;color:var(--muted);max-width:430px}.service-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.service-card{background:var(--card);border:1px solid #ded6c9}.service-photo{height:215px;position:relative;overflow:hidden}.service-photo img{width:100%;height:100%;object-fit:cover;filter:saturate(.78)}.service-photo span{position:absolute;right:12px;top:12px;background:#fffdf8;padding:6px 8px;font-size:9px}.service-body{padding:18px}.service-body>small{color:var(--accent);font-size:9px}.service-body h3{font-size:16px;margin:8px 0}.service-body p{font-size:11px;line-height:1.9;color:var(--muted);min-height:64px}.service-body button{border:0;background:none;padding:0;color:var(--ink);font-size:11px;font-weight:800}.reveal{opacity:0;transform:translateY(28px);transition:opacity .75s ease,transform .75s ease}.reveal.is-visible{opacity:1;transform:none}
.why-section{background:var(--dark);color:#f5f0e7;display:grid;grid-template-columns:1fr 1fr;gap:80px;padding:120px max(28px,calc((100vw - 1264px)/2));align-items:center}.why-image{position:relative}.why-image>img{display:block;width:100%;height:600px;object-fit:cover;filter:saturate(.7);opacity:.9}.experience{position:absolute;bottom:-24px;right:-24px;background:var(--accent);padding:20px 24px;display:flex;align-items:end;gap:11px}.experience b{font-size:45px;line-height:.8}.experience span{font-size:10px;line-height:1.8}.why-copy .overline{color:#e49b70}.why-copy h2{color:white}.why-copy>p{color:#c3c0b8}.benefits{border-top:1px solid rgba(255,255,255,.14);margin-top:35px}.benefits>div{display:flex;gap:18px;padding:17px 0;border-bottom:1px solid rgba(255,255,255,.14)}.benefits b{color:#d9956b;font-size:10px}.benefits strong,.benefits small{display:block}.benefits strong{font-size:12px}.benefits small{font-size:10px;color:#9f9c95;margin-top:4px}.text-link{margin-top:25px;border:0;background:none;color:#f0b58d;font-size:12px;font-weight:800;padding:0}
.map-section{max-width:1320px;margin:auto;padding:120px 28px;display:grid;grid-template-columns:.75fr 1.25fr;gap:90px;align-items:center}.area-list{display:flex;gap:7px;flex-wrap:wrap;margin-top:28px}.area-list span{border:1px solid #d4ccbe;padding:7px 11px;border-radius:3px;font-size:10px;color:#6c685f}.fake-map{height:460px;position:relative;overflow:hidden;background:#ded9cb;border:1px solid #c9c0b1}.map-grid{position:absolute;inset:0;background-image:linear-gradient(#c8c2b5 1px,transparent 1px),linear-gradient(90deg,#c8c2b5 1px,transparent 1px);background-size:45px 45px;opacity:.45}.road{position:absolute;background:#f7f2e8;border:1px solid #d0c8b9}.road-a{width:130%;height:80px;top:150px;left:-10%;transform:rotate(-12deg)}.road-b{height:130%;width:54px;top:-10%;right:31%;transform:rotate(19deg)}.road-c{width:110%;height:35px;bottom:85px;left:-5%;transform:rotate(7deg)}.map-label{position:absolute;font-size:10px;color:#7d786d}.label-a{top:90px;right:17%}.label-b{top:265px;left:19%}.label-c{bottom:105px;right:15%}.map-pin{position:absolute;width:28px;height:28px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:var(--accent);box-shadow:0 8px 18px rgba(212,107,53,.28)}.map-pin i{position:absolute;width:8px;height:8px;background:white;border-radius:50%;left:10px;top:10px}.pin-a{top:130px;right:34%}.pin-b{top:250px;left:31%}.pin-c{bottom:120px;right:21%}.you{position:absolute;bottom:25px;left:25px;background:#24231f;color:#fff;padding:9px 13px;font-size:9px}
.reviews-section{padding-top:40px}.section-head{display:flex;justify-content:space-between;align-items:end;margin-bottom:45px}.review-summary{display:grid;grid-template-columns:auto auto;gap:4px 10px;align-items:center}.review-summary b{font-size:36px}.review-summary span{color:#d58a4d;letter-spacing:2px}.review-summary small{grid-column:1 / -1;color:#817c72;font-size:9px}.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.review{padding:28px;background:#fffdf8;border:1px solid #ded6c9;min-height:250px;display:flex;flex-direction:column}.review.featured{background:#24231f;color:white;border-color:#24231f;transform:translateY(-18px)}.stars{color:#d58a4d;font-size:12px;letter-spacing:2px}.review p{font-size:13px;line-height:2.2;color:#66625b;flex:1}.review.featured p{color:#ddd8cf}.review footer{border-top:1px solid #e1dbd1;padding-top:14px}.review.featured footer{border-color:#48453f}.review footer b,.review footer span{display:block}.review footer b{font-size:11px}.review footer span{font-size:9px;color:#918b82;margin-top:4px}
.process-section{background:#e9e3d8;padding:110px max(28px,calc((100vw - 1264px)/2))}.process-title{text-align:center;margin-bottom:65px}.process-title .overline{margin-bottom:12px}.process-line{display:grid;grid-template-columns:repeat(3,1fr);position:relative}.process-line:before{content:'';position:absolute;top:24px;left:14%;right:14%;border-top:1px dashed #c2b8a7}.process-step{text-align:center;position:relative}.process-step>b{display:flex;width:48px;height:48px;border-radius:50%;background:#24231f;color:white;align-items:center;justify-content:center;margin:0 auto 18px;font-size:10px;position:relative}.process-step span{font-weight:800;font-size:14px;display:block}.process-step small{display:block;color:#777269;font-size:10px;margin-top:8px}
.faq-section{display:grid;grid-template-columns:.75fr 1.25fr;gap:100px}.faq-list{border-top:1px solid var(--line)}.faq-list article{border-bottom:1px solid var(--line)}.faq-list button{width:100%;display:grid;grid-template-columns:35px 1fr 25px;align-items:center;gap:12px;text-align:right;padding:20px 0;border:0;background:none;color:var(--ink)}.faq-list button span{font-size:9px;color:var(--accent)}.faq-list button b{font-size:13px}.faq-list button i{font-style:normal;font-size:20px;color:#817b71}.faq-list p{font-size:11px;line-height:2.1;color:var(--muted);padding:0 47px 20px 30px;margin:0}
.final-cta{background:var(--accent);color:white;padding:80px max(28px,calc((100vw - 1264px)/2));display:flex;align-items:center;justify-content:space-between;gap:50px}.final-cta .overline{color:#f7d1b9}.final-cta h2{font-size:clamp(42px,5vw,65px);line-height:1.2;letter-spacing:-2px;margin:0 0 16px}.final-cta h2 em{color:white}.final-cta p:last-child{font-size:13px;opacity:.85}.final-cta>button{background:white;color:var(--ink);border:0;border-radius:6px;padding:17px 25px;font-size:13px;font-weight:800;white-space:nowrap}
.footer{background:#24231f;color:#f5f0e7;padding:65px max(28px,calc((100vw - 1264px)/2));display:grid;grid-template-columns:1.6fr .8fr .9fr 1fr;gap:50px}.footer .brand{color:white}.footer p{font-size:10px;color:#aaa59b;line-height:2;margin-top:17px;max-width:330px}.footer>div>b,.footer>div>span{display:block}.footer>div>b{font-size:11px;margin-bottom:15px}.footer>div>span{font-size:10px;color:#aaa59b;margin:9px 0}.footer-note{border-right:1px solid #48453f;padding-right:30px;display:flex;flex-direction:column;justify-content:center}.footer-note span{color:#aaa59b!important}.footer-note strong{font-size:17px;line-height:1.8;margin-top:8px}.mobile-cta{display:none}
.modal-backdrop{position:fixed;inset:0;background:rgba(22,20,17,.68);z-index:50;display:grid;place-items:center;padding:20px}.booking-modal{width:min(500px,100%);background:#fffdf8;padding:35px;border-radius:8px;position:relative;box-shadow:0 30px 80px rgba(0,0,0,.25)}.booking-modal h2{font-size:26px;margin:0 0 10px}.booking-modal>p:not(.overline){font-size:11px;color:var(--muted);line-height:2}.close{position:absolute;left:18px;top:15px;border:0;background:none;font-size:25px;color:#777}.booking-modal label{display:block;font-size:10px;font-weight:800;margin-top:18px}.booking-modal input,.booking-modal select{display:block;width:100%;margin-top:7px;border:1px solid #d5ccbd;background:white;padding:12px;border-radius:5px;font:inherit;font-size:11px}.full{width:100%;margin-top:20px}.modal-enter-active,.modal-leave-active{transition:opacity .25s}.modal-enter-from,.modal-leave-to{opacity:0}
@media(max-width:950px){nav{display:none;position:absolute;top:82px;right:0;left:0;background:var(--paper);padding:20px 28px;border-bottom:1px solid var(--line);flex-direction:column;gap:18px}nav.open{display:flex}.menu-btn{display:block}.hero{grid-template-columns:1fr;gap:45px;padding-top:55px}.hero-visual{min-height:480px}.image-frame{height:480px}.hero-note{right:15px}.availability-card{left:12px}.services-section,.map-section,.faq-section{grid-template-columns:1fr}.why-section{grid-template-columns:1fr;gap:45px}.why-image>img{height:480px}.reviews-grid{grid-template-columns:1fr}.review.featured{transform:none}.footer{grid-template-columns:1fr 1fr}.quick-strip{grid-template-columns:1fr}.quick-strip>div{border-left:0;border-bottom:1px solid var(--line)}.quick-strip>div:last-child{border-bottom:0}.section-head{align-items:start;gap:20px}.service-grid{grid-template-columns:1fr 1fr}.final-cta{display:block}.final-cta button{margin-top:25px}.process-line{gap:30px}.process-line:before{display:none}}
@media(max-width:620px){.demo-ribbon{padding:0 12px;justify-content:space-between}.demo-ribbon a{font-size:9px}.header-inner{padding:0 16px}.header-call{display:none}.hero{padding:42px 18px 55px;min-height:auto}.hero h1{font-size:43px;letter-spacing:-2px}.hero-text{font-size:13px}.hero-actions{flex-direction:column}.hero-actions button{width:100%}.hero-trust{gap:9px;flex-direction:column}.hero-visual{min-height:390px}.image-frame{height:390px}.availability-card{top:15px;left:5px}.rating-card{right:5px;bottom:35px}.hero-note{display:none}.quick-strip>div{padding:18px}.section{padding:75px 18px}.section h2,.why-copy h2,.map-copy h2,.process-title h2,.faq-title h2{font-size:36px}.service-grid{grid-template-columns:1fr}.service-photo{height:220px}.why-section{padding:75px 18px}.why-image>img{height:360px}.experience{right:0}.map-section{padding:75px 18px}.fake-map{height:350px}.section-head{display:block}.review-summary{margin-top:25px}.process-section{padding:75px 18px}.process-line{grid-template-columns:1fr;gap:25px}.process-step{text-align:right;display:grid;grid-template-columns:55px 1fr;column-gap:14px}.process-step>b{grid-row:span 2;margin:0}.process-step span,.process-step small{padding-top:4px}.faq-section{gap:45px}.final-cta{padding:65px 18px}.footer{grid-template-columns:1fr;padding:50px 18px;gap:28px}.footer-note{border-right:0;border-top:1px solid #48453f;padding:25px 0 0}.mobile-cta{display:grid;grid-template-columns:1fr 1fr;position:fixed;bottom:0;right:0;left:0;z-index:30;background:#fffdf8;border-top:1px solid var(--line);padding:9px;gap:8px}.mobile-cta button,.mobile-cta a{padding:12px;text-align:center;border-radius:5px;font-size:11px;font-weight:800;text-decoration:none}.mobile-cta button{background:var(--accent);color:white;border:0}.mobile-cta a{border:1px solid #d3cabc;color:var(--ink)}.booking-modal{padding:28px 20px}}
</style>
