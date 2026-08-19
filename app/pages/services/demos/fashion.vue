<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

useSeoMeta({
  title: 'دموی سایت بوتیک و مد | FADAKAR',
  description: 'نمونه طراحی سایت بوتیک و مد با تجربه بصری editorial، تایپوگرافی سینمایی، انیمیشن اسکرول و معرفی کالکشن.'
})

const activeChapter = ref(0)
const showLook = ref(false)
const lookTitle = ref('')
const revealed = ref<HTMLElement[]>([])
const isScrolled = ref(false)
const heroMedia = ref<HTMLElement | null>(null)
const mainHeader = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | undefined

const reveal = (event: Event) => {
  const target = event.target as HTMLElement
  target.classList.add('is-visible')
}

const openLook = (title: string) => {
  lookTitle.value = title
  showLook.value = true
}

const closeLook = () => { showLook.value = false }

const handleScroll = () => {
  const y = window.scrollY
  isScrolled.value = y > 10
  
  if (mainHeader.value) {
    mainHeader.value.style.top = '0px'
  }
  
  if (heroMedia.value) {
    heroMedia.value.style.transform = `translate3d(0, ${y * 0.75}px, 0)`
    heroMedia.value.style.opacity = `${1 - y * 0.0015}`
    heroMedia.value.style.filter = `blur(${y * 0.015}px)`
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      } else {
        entry.target.classList.remove('is-visible')
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' })

  document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => observer?.observe(el))

  const chapterObserver = new IntersectionObserver((entries) => {
    const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
    if (visible) activeChapter.value = Number((visible.target as HTMLElement).dataset.chapter || 0)
  }, { threshold: [0.2, 0.45, 0.7] })

  document.querySelectorAll<HTMLElement>('[data-chapter]').forEach((el) => chapterObserver.observe(el))

  onUnmounted(() => {
    chapterObserver.disconnect()
    window.removeEventListener('scroll', handleScroll)
  })
})

onUnmounted(() => observer?.disconnect())

const chapters = ['01', '02', '03', '04']
const looks = [
  { label: 'SILHOUETTE 01', title: 'The Red Line', image: 'https://images.unsplash.com/photo-1733322991133-2de13aa12c57?auto=format&fit=crop&fm=jpg&q=80&w=2200', note: 'حرکت پارچه، فرم اغراق‌شده و قرمز به‌عنوان تنها ضربه رنگ.' },
  { label: 'SILHOUETTE 02', title: 'Quiet Geometry', image: 'https://www.zkipster.com/hubfs/Fashion%20Month%20September%202024%206.jpg', note: 'خطوط تمیز، فضای خالی و نسبت‌های معماری برای یک هویت مینیمال.' },
  { label: 'SILHOUETTE 03', title: 'Soft Power', image: 'https://boycott-magazine.com/wp-content/uploads/2025/02/kiki-xue-boycott-magazine-24.jpg', note: 'ترکیب tailoring و volume برای شخصیتی که آرام نیست.' },
  { label: 'SILHOUETTE 04', title: 'Liquid Light', image: 'https://www.duelmagazine.com/wp-content/uploads/2021/02/ARYA-SHIRAZI.jpg', note: 'بافت براق، بدن و نور به‌عنوان بخشی از composition.' },
]

const scrollToChapter = (index: number) => {
  document.querySelector(`[data-chapter="${index}"]`)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}
</script>

<template>
  <div class="fashion-demo" dir="rtl">
    

    <header ref="mainHeader" class="header" :class="{ 'header-scrolled': isScrolled }">
      <NuxtLink to="/services" class="wordmark">ATELIER<span>/</span>F</NuxtLink>
      <nav><a href="#manifesto">MANIFESTO</a><a href="#collection">COLLECTION</a><a href="#studio">STUDIO</a></nav>
      <button class="index-btn" @click="openLook('LOOK INDEX')">INDEX <span>↗</span></button>
    </header>

    <aside class="chapter-rail">
      <button v-for="(chapter, index) in chapters" :key="chapter" :class="{ active: activeChapter === index }" @click="scrollToChapter(index)">
        <span>{{ chapter }}</span>
      </button>
    </aside>

    <main>
      <section id="manifesto" data-chapter="0" class="hero-chapter chapter">
        <div ref="heroMedia" class="hero-media" style="will-change: transform, opacity;"><img src="https://images.unsplash.com/photo-1733322991133-2de13aa12c57?auto=format&fit=crop&fm=jpg&q=80&w=2600" alt="مدل روی ران‌وی"><div class="hero-vignette"></div><div class="scanlines"></div></div>
        <div class="hero-copy">
          <p class="kicker reveal">ATELIER / F · DIGITAL LOOKBOOK 2026</p>
          <h1 class="hero-title reveal">WEAR<br><em>THE</em><br>UNEXPECTED.</h1>
          <p class="hero-sub reveal">وب‌سایتی که برای مد ساخته شده، نباید فقط لباس‌ها را نشان دهد. باید <b>حسِ برند</b> را قبل از اینکه کاربر چیزی بخواند منتقل کند.</p>
          <button class="scroll-cta reveal" @click="document.querySelector('#collection')?.scrollIntoView({ behavior: 'smooth' })">ENTER THE COLLECTION <span>↓</span></button>
        </div>
        <div class="hero-meta reveal"><span>PARIS · MILAN · TEHRAN</span><span>FW / 26</span></div>
      </section>

      <section id="collection" data-chapter="1" class="collection-intro chapter dark-chapter">
        <div class="black-wash"></div>
        <div class="chapter-number reveal">01 / THE COLLECTION</div>
        <div class="collection-title">
          <p class="kicker reveal">THE NEW SILHOUETTE</p>
          <h2 class="mega reveal">FORM<br>FOLLOWS<br><em>ATTITUDE.</em></h2>
          <p class="body-copy reveal">در یک وب‌سایت مد، هر اسکرول باید مثل عبور از یک صفحه مجله باشد؛ یک قاب، یک حس، یک نگاه تازه. برای همین تصاویر، فاصله‌ها، تایپوگرافی و حرکت در این دمو بخشی از هویت برند هستند، نه تزئینات اضافه.</p>
        </div>
        <div class="floating-caption reveal"><span>COLLECTION / 26</span><b>NO. 001</b></div>
      </section>

      <section class="look-grid chapter cream-chapter" data-chapter="2">
        <div class="look-heading reveal"><p class="kicker dark">02 / LOOK INDEX</p><h2>FOUR<br><em>WAYS</em><br>TO BE SEEN.</h2></div>
        <article v-for="look in looks" :key="look.title" class="look-card reveal" @click="openLook(look.title)">
          <div class="look-number">{{ look.label }}</div>
          <img :src="look.image" :alt="look.title" loading="lazy">
          <div class="look-overlay"><span>OPEN LOOK</span><b>{{ look.title }}</b><small>{{ look.note }}</small></div>
        </article>
      </section>

      <section class="editorial-split chapter dark-chapter" data-chapter="3">
        <div class="editorial-image reveal"><img src="https://www.duelmagazine.com/wp-content/uploads/2021/02/ARYA-SHIRAZI.jpg" alt="ادیتوریال مد"><div class="image-counter">03 / 04</div></div>
        <div class="editorial-copy">
          <p class="kicker reveal">EDITORIAL / 03</p>
          <h2 class="mega small reveal">LESS<br><em>PRODUCT.</em><br>MORE<br>WORLD.</h2>
          <div class="copy-line reveal"></div>
          <p class="body-copy light reveal">هدف این صفحه فروش فوری نیست. هدف، ساختن تصویری است که مشتری، قبل از دیدن قیمت و ویژگی‌ها، متوجه شود این برند چه نگرشی دارد. سپس محصول در همان جهان بصری دیده می‌شود.</p>
          <div class="manifesto-list reveal"><span>01 / Typography</span><span>02 / Motion</span><span>03 / Art Direction</span><span>04 / Brand Atmosphere</span></div>
        </div>
      </section>

      <section id="studio" class="studio-chapter chapter cream-chapter" data-chapter="4">
        <div class="studio-marquee" aria-hidden="true"><span>THE STUDIO · THE STUDIO · THE STUDIO · </span><span>THE STUDIO · THE STUDIO · THE STUDIO · </span></div>
        <div class="studio-content">
          <p class="kicker dark reveal">04 / THE STUDIO</p>
          <h2 class="mega dark reveal">A BRAND<br>DESERVES<br><em>ITS OWN SPACE.</em></h2>
          <p class="body-copy dark-text reveal">بوتیک، مزون، برند پوشاک و مجموعه مد هرکدام باید فضای دیجیتال متفاوت خودشان را داشته باشند. این دمو فقط یک نمونه از کیفیت اجرای ماست؛ نه قالبی که قرار است دقیقاً به شما تحویل داده شود.</p>
          <div class="studio-grid">
            <div class="studio-card reveal"><span>01</span><b>Creative Direction</b><small>هدایت هنری متناسب با شخصیت برند</small></div>
            <div class="studio-card reveal"><span>02</span><b>Editorial UX</b><small>روایت بصری با اسکرول و ریتم</small></div>
            <div class="studio-card reveal"><span>03</span><b>Digital Craft</b><small>کدنویسی تمیز و انیمیشن‌های دقیق</small></div>
          </div>
        </div>
      </section>

      <section class="closing-chapter chapter">
        <div class="closing-bg"><img src="https://www.zkipster.com/hubfs/Fashion%20Month%20September%202024%206.jpg" alt="فشن شو"></div>
        <div class="closing-shade"></div>
        <div class="closing-copy">
          <p class="kicker reveal">THE FINAL FRAME</p>
          <h2 class="mega reveal">MAKE THEM<br><em>REMEMBER</em><br>THE LOOK.</h2>
          <p class="body-copy light reveal">یک سایت مد قرار نیست شبیه سایت همه باشد. قرار است وقتی کاربر از آن خارج شد، هنوز تصویر برند شما را در ذهنش داشته باشد.</p>
          <NuxtLink to="/services" class="final-link reveal">DISCUSS YOUR BRAND <span>↗</span></NuxtLink>
        </div>
      </section>
    </main>

    <footer><NuxtLink to="/services" class="wordmark">ATELIER<span>/</span>F</NuxtLink><span>Fashion / Editorial / Digital Experience</span><span>© 2026</span></footer>

    <Transition name="modal"><div v-if="showLook" class="modal-backdrop" @click.self="closeLook"><article class="look-modal"><button class="close" @click="closeLook">×</button><div class="modal-image"><img :src="looks.find(item => item.title === lookTitle)?.image || looks[0].image" :alt="lookTitle"></div><div class="modal-copy"><p class="kicker dark">LOOK INDEX</p><h2>{{ lookTitle }}</h2><p>این بخش می‌تواند در پروژه واقعی به lookbook، داستان هر استایل، ویدئوی معرفی، جزئیات پارچه و کالکشن‌های فصل متصل شود.</p><button @click="closeLook">CLOSE LOOK ↗</button></div></article></div></Transition>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap');
:global(*){box-sizing:border-box}:global(html){scroll-behavior:smooth}:global(body){margin:0;background:#0a0a0a;color:#f2eee7;font-family:'DM Sans',Arial,sans-serif}.fashion-demo{min-height:100vh;background:#0a0a0a;overflow:hidden}.demo-bar{height:34px;background:#050505;color:#b7b2aa;display:flex;align-items:center;justify-content:center;gap:26px;font-size:9px;letter-spacing:.5px}.demo-bar a{color:#d9b36d;text-decoration:none}.header{position:fixed;z-index:60;left:0;right:0;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 4vw;border-bottom:1px solid #ffffff18;transition:height .4s, padding .4s, background .4s, border-color .4s, backdrop-filter .4s}.header.header-scrolled{height:95px;padding-bottom:15px;background:linear-gradient(180deg, rgba(8, 4, 4, 0.8) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0) 100%);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);-webkit-mask-image:linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%);mask-image:linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%);border-bottom-color:transparent;}.wordmark{font:700 24px Georgia,serif;letter-spacing:2px;color:#f4efe7;text-decoration:none}.wordmark span{color:#d6a95e}.header nav{display:flex;gap:25px}.header nav a{color:#d8d3ca;text-decoration:none;font-size:9px;letter-spacing:2px}.index-btn{border:1px solid #ffffff33;background:#ffffff08;color:#fff;border-radius:999px;padding:9px 14px;font:inherit;font-size:9px;cursor:pointer}.index-btn span{color:#d6a95e}.chapter-rail{position:fixed;z-index:55;left:25px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:8px}.chapter-rail button{width:30px;height:30px;border:0;background:none;color:#777;font-size:8px;cursor:pointer;position:relative}.chapter-rail button:after{content:'';position:absolute;left:0;top:50%;width:4px;height:4px;border-radius:50%;background:#777;transform:translateY(-50%);transition:.3s}.chapter-rail button.active{color:#fff}.chapter-rail button.active:after{width:20px;border-radius:0;background:#d8b06a}.chapter{position:relative;min-height:100vh;overflow:hidden}.hero-chapter{display:flex;align-items:center;padding:10vh 10vw}.hero-media,.hero-vignette,.scanlines{position:absolute;inset:0}.hero-media img{width:100%;height:100%;object-fit:cover;object-position:center 25%;filter:contrast(1.05) saturate(.85);animation:slowZoom 18s ease-in-out infinite alternate}.hero-vignette{background:linear-gradient(0deg,#090909 0%,#090909 10%,transparent 65%),radial-gradient(circle at 62% 48%,transparent 0%,#05050545 52%,#050505ef 100%),linear-gradient(90deg,#050505e8 0%,#05050570 47%,#05050520 100%)}.scanlines{opacity:.08;background:repeating-linear-gradient(180deg,transparent 0,transparent 3px,#fff 4px);mix-blend-mode:soft-light}.hero-copy{position:relative;z-index:3;max-width:100%}.kicker{font-size:9px;letter-spacing:2.6px;color:#d8b06a;margin:0 0 24px;text-transform:uppercase}.hero-title,.mega{font-family:'Playfair Display',serif;font-size:clamp(65px,10vw,145px);line-height:.83;letter-spacing:-5px;font-weight:500;margin:0}.hero-title em,.mega em{font-style:italic;color:#d9b16b}.hero-sub{max-width:560px;font-size:13px;line-height:2;color:#d3cec7;margin:35px 0 25px}.hero-sub b{color:#fff}.scroll-cta{border:1px solid #ffffff40;background:#ffffff08;color:#fff;padding:12px 18px;font:inherit;font-size:9px;letter-spacing:1px;cursor:pointer}.scroll-cta span{color:#d9b16b;margin-right:14px}.hero-meta{position:absolute;z-index:3;right:4vw;bottom:28px;left:4vw;display:flex;justify-content:space-between;font-size:8px;letter-spacing:2px;color:#b8b2a9}.dark-chapter{background:#090909;color:#f4efe7}.black-wash{position:absolute;inset:0;background:radial-gradient(circle at 75% 35%,#2e25181b,transparent 35%),linear-gradient(180deg,#0000,#000 95%)}.chapter-number{position:absolute;top:8vh;left:6vw;font-size:8px;letter-spacing:2px;color:#777}.collection-intro{display:flex;align-items:center;padding:10vw 9vw}.collection-title{position:relative;z-index:2;max-width:1000px}.collection-title .body-copy{max-width:470px;margin-top:45px}.body-copy{font-size:12px;line-height:2;color:#928e87}.light{color:#b7b2aa}.cream-chapter{background:#ebe6de;color:#151515}.look-grid{padding:11vw 7vw;display:grid;grid-template-columns:1fr 1fr;gap:0 18px}.look-heading{grid-column:1/-1;padding-bottom:90px}.look-heading h2{font-family:'Playfair Display',serif;font-size:clamp(50px,8vw,105px);line-height:.85;letter-spacing:-4px;font-weight:500;margin:0}.look-heading em{font-style:italic}.look-card{position:relative;height:58vh;overflow:hidden;cursor:pointer;margin-bottom:18px;background:#111}.look-card:nth-child(odd){margin-top:90px}.look-card img{width:100%;height:100%;object-fit:cover;transition:transform 1.2s cubic-bezier(.16,1,.3,1);filter:saturate(.78)}.look-card:hover img{transform:scale(1.055)}.look-number{position:absolute;z-index:2;top:18px;left:18px;font-size:8px;letter-spacing:2px;color:#fff;text-shadow:0 2px 8px #000}.look-overlay{position:absolute;z-index:3;inset:auto 0 0;padding:35px;background:linear-gradient(transparent,#000d);display:flex;flex-direction:column;gap:7px;transform:translateY(12px);transition:.6s}.look-card:hover .look-overlay{transform:translateY(0)}.look-overlay span{font-size:8px;letter-spacing:2px;color:#d8b06a}.look-overlay b{font:500 28px 'Playfair Display',serif}.look-overlay small{font-size:10px;line-height:1.8;color:#d2ccc4;max-width:85%}.editorial-split{display:grid;grid-template-columns:1.1fr .9fr;min-height:100vh}.editorial-image{position:relative;min-height:700px;overflow:hidden}.editorial-image img{width:100%;height:100%;object-fit:cover;filter:saturate(.75)}.image-counter{position:absolute;top:24px;left:24px;font-size:9px;letter-spacing:2px;color:#fff}.editorial-copy{padding:11vw 7vw;display:flex;flex-direction:column;justify-content:center;background:#0d0d0d}.mega.small{font-size:clamp(55px,7vw,100px)}.copy-line{height:1px;background:#ffffff20;width:70%;margin:40px 0}.manifesto-list{display:flex;flex-direction:column;gap:10px;margin-top:35px}.manifesto-list span{font-size:9px;letter-spacing:1.5px;color:#817c74}.studio-chapter{padding:13vw 8vw 10vw;position:relative}.studio-marquee{position:absolute;top:5vh;left:-5vw;right:-5vw;overflow:hidden;white-space:nowrap;font-size:8vw;font-family:'Playfair Display',serif;color:#d8b06a18;transform:rotate(-4deg);pointer-events:none}.studio-marquee span{display:inline-block;animation:marquee 18s linear infinite}.studio-content{position:relative;z-index:2}.mega.dark{color:#141414}.dark-text{color:#666159;max-width:630px;margin-top:35px}.studio-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:80px}.studio-card{border-top:1px solid #b8b0a5;padding:18px 4px}.studio-card span{font-size:9px;color:#a57d47}.studio-card b{display:block;font-size:15px;margin:18px 0 6px}.studio-card small{font-size:9px;color:#777168;line-height:1.8}.closing-chapter{display:flex;align-items:center;padding:11vw 10vw}.closing-bg,.closing-shade{position:absolute;inset:0}.closing-bg img{width:100%;height:100%;object-fit:cover;object-position:center}.closing-shade{background:linear-gradient(90deg,#020202f4 0%,#0202029a 55%,#02020235 100%)}.closing-copy{position:relative;z-index:2;max-width:850px}.final-link{display:inline-flex;margin-top:35px;border-bottom:1px solid #d8b06a;padding-bottom:7px;color:#fff;text-decoration:none;font-size:9px;letter-spacing:2px}.final-link span{color:#d8b06a;margin-right:12px}footer{background:#050505;border-top:1px solid #ffffff12;padding:26px 5vw;display:flex;justify-content:space-between;align-items:center;color:#79756e;font-size:8px}.modal-backdrop{position:fixed;z-index:100;inset:0;background:#000d;backdrop-filter:blur(16px);display:grid;place-items:center;padding:20px}.look-modal{width:min(900px,100%);background:#efebe3;color:#151515;display:grid;grid-template-columns:1fr 1fr;position:relative}.modal-image{height:650px;overflow:hidden}.modal-image img{width:100%;height:100%;object-fit:cover}.modal-copy{padding:60px 45px;display:flex;flex-direction:column;justify-content:center}.modal-copy h2{font:500 44px 'Playfair Display',serif;margin:0 0 20px}.modal-copy p:not(.kicker){font-size:11px;line-height:2;color:#6f6961}.modal-copy button{align-self:flex-start;margin-top:30px;border:1px solid #222;background:none;padding:12px 18px;font:inherit;font-size:8px;letter-spacing:1px;cursor:pointer}.close{position:absolute;z-index:2;top:12px;left:12px;width:36px;height:36px;border:0;border-radius:50%;background:#fff;font-size:20px;cursor:pointer}.reveal{opacity:0;transform:translateY(46px);transition:opacity .95s cubic-bezier(.16,1,.3,1),transform 1.1s cubic-bezier(.16,1,.3,1)}.reveal.is-visible{opacity:1;transform:none}.reveal:nth-child(2){transition-delay:.07s}.reveal:nth-child(3){transition-delay:.14s}.reveal:nth-child(4){transition-delay:.21s}@keyframes slowZoom{0%{transform:scale(1)}100%{transform:scale(1.08)}}@keyframes marquee{to{transform:translateX(-100%)}}.modal-enter-active,.modal-leave-active{transition:.3s}.modal-enter-from,.modal-leave-to{opacity:0}@media(max-width:900px){.chapter-rail{display:none}.header nav{display:none}.hero-chapter{padding:18vh 7vw 12vh}.hero-title,.mega{font-size:clamp(55px,14vw,90px)}.look-grid{grid-template-columns:1fr}.look-card:nth-child(odd){margin-top:0}.look-card{height:68vh}.editorial-split{grid-template-columns:1fr}.editorial-image{min-height:65vh}.studio-grid{grid-template-columns:1fr}.look-modal{grid-template-columns:1fr}.modal-image{height:48vh}.modal-copy{padding:30px}.hero-meta{font-size:7px}}@media(max-width:600px){.demo-bar{font-size:8px}.header{padding:0 5vw}.index-btn{padding:8px 11px}.hero-chapter{padding:15vh 6vw 10vh}.hero-title{font-size:15vw}.hero-sub{font-size:11px}.collection-intro{padding:22vw 7vw}.look-grid{padding:22vw 5vw}.look-card{height:62vh}.look-overlay{transform:none}.editorial-copy{padding:18vw 7vw}.studio-chapter{padding:22vw 7vw}.closing-chapter{padding:22vw 7vw;min-height:85vh}.closing-copy .mega{font-size:17vw}footer{flex-direction:column;gap:14px;text-align:center}}
</style>