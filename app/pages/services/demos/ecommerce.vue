<script setup lang="ts">
import { computed, ref } from 'vue'

useSeoMeta({
  title: 'دموی فروشگاه اینترنتی | FADAKAR',
  description: 'نمونه طراحی و تجربه کاربری فروشگاه اینترنتی FADAKAR.'
})

const search = ref('')
const activeCategory = ref('همه')
const cartCount = ref(2)
const showCart = ref(false)
const showSearch = ref(false)
const selectedProduct = ref<any>(null)

const categories = ['همه', 'موبایل و دیجیتال', 'لوازم خانه', 'آشپزخانه', 'پوشیدنی', 'زیبایی']

const products = [
  { id: 1, title: 'هدفون بی‌سیم نویزکنسلینگ سونی', category: 'موبایل و دیجیتال', price: '۸٬۴۹۰٬۰۰۰', oldPrice: '۹٬۲۹۰٬۰۰۰', discount: '۹٪', rating: '۴.۸', reviews: 126, image: '/assets/demo/photo-1505740420928-5e560c06d30e.avif' },
  { id: 2, title: 'ساعت هوشمند AMOLED سری Pro', category: 'موبایل و دیجیتال', price: '۶٬۷۹۰٬۰۰۰', oldPrice: '۷٬۴۰۰٬۰۰۰', discount: '۸٪', rating: '۴.۷', reviews: 84, image: '/assets/demo/photo-1523275335684-37898b6baf30.avif' },
  { id: 3, title: 'چراغ رومیزی مینیمال چوبی', category: 'لوازم خانه', price: '۲٬۱۵۰٬۰۰۰', oldPrice: '۲٬۵۰۰٬۰۰۰', discount: '۱۴٪', rating: '۴.۹', reviews: 57, image: '/assets/demo/photo-1507473885765-e6ed057f782c.avif' },
  { id: 4, title: 'اسپرسوساز خانگی نیمه‌اتوماتیک', category: 'آشپزخانه', price: '۱۲٬۹۰۰٬۰۰۰', oldPrice: '۱۴٬۲۰۰٬۰۰۰', discount: '۹٪', rating: '۴.٦', reviews: 41, image: '/assets/demo/photo-1510707577719-ae7c14805e3a.avif' },
  { id: 5, title: 'کفش روزمره سبک و راحت', category: 'پوشیدنی', price: '٣٬٤٩٠٬٠٠٠', oldPrice: '٣٬٩٠٠٬٠٠٠', discount: '١٠٪', rating: '٤.٨', reviews: 93, image: '/assets/demo/photo-1542291026-7eec264c27ff.avif' },
  { id: 6, title: 'ست مراقبت پوست روزانه', category: 'زیبایی', price: '١٬٨٩٠٬٠٠٠', oldPrice: '٢٬٢٠٠٬٠٠٠', discount: '١٤٪', rating: '⁴.⁷', reviews: 72, image: '/assets/demo/photo-1556229010-6c3f2c9ca5f8.avif' },
  { id: 7, title: 'کیبورد مکانیکی بی‌سیم', category: 'موبایل و دیجیتال', price: '⁴٬⁷⁹⁰٬⁰⁰⁰', oldPrice: '⁵٬³⁰⁰٬⁰⁰⁰', discount: '¹⁰٪', rating: '⁴.⁹', reviews: 38, image: '/assets/demo/photo-1587829741301-dc798b83add3.avif' },
  { id: 8, title: 'صندلی ارگونومیک کار و مطالعه', category: 'لوازم خانه', price: '۹٬۶۰۰٬۰۰۰', oldPrice: '۱۰٬۵۰۰٬۰۰۰', discount: '۹٪', rating: '۴.۶', reviews: 29, image: '/assets/demo/photo-1586023492125-27b2c045efd7.avif' },
]

const filteredProducts = computed(() => products.filter(product => {
  const categoryMatch = activeCategory.value === 'همه' || product.category === activeCategory.value
  const searchMatch = !search.value || product.title.includes(search.value)
  return categoryMatch && searchMatch
}))

const addToCart = () => {
  cartCount.value++
  showCart.value = true
}

const openProduct = (product: any) => {
  selectedProduct.value = product
}
</script>

<template>
  <div class="demo" dir="rtl">
    <div class="demo-notice">
      <span>این صفحه یک نمونه طراحی است؛ ظاهر نهایی هر فروشگاه متناسب با برند و کسب‌وکار شما طراحی می‌شود.</span>
      <NuxtLink to="/services">بازگشت به خدمات</NuxtLink>
    </div>

    <header class="header">
      <div class="topbar container">
        <div>ارسال رایگان برای سفارش‌های بالای ۵۰۰ هزار تومان</div>
        <div class="toplinks"><span>پشتیبانی</span><span>پیگیری سفارش</span><span>فروشنده شوید</span></div>
      </div>
      <div class="mainbar container">
        <button class="icon-btn mobile-menu" aria-label="منو">☰</button>
        <NuxtLink to="/services" class="logo"><b>بازارینو</b><small>فروشگاه آنلاین</small></NuxtLink>
        <button class="search" @click="showSearch = !showSearch">
          <span>⌕</span>
          <input v-model="search" placeholder="جستجو در هزاران محصول..." @click.stop>
          <kbd>Ctrl K</kbd>
        </button>
        <div class="actions">
          <button class="account"><span>♙</span><div><small>سلام!</small><b>ورود / ثبت‌نام</b></div></button>
          <button class="icon-action" @click="showCart = true" aria-label="سبد خرید"><span>🛒</span><i>{{ cartCount }}</i></button>
        </div>
      </div>
      <nav class="nav container">
        <button class="category-menu">☰ دسته‌بندی کالاها</button>
        <button v-for="item in categories.slice(1)" :key="item" @click="activeCategory = item">{{ item }}</button>
        <span class="nav-divider" />
        <button>پیشنهاد شگفت‌انگیز</button><button>محبوب‌ترین‌ها</button><button>مجله بازارینو</button>
      </nav>
    </header>

    <main>
      <section class="hero container">
        <div class="hero-copy">
          <span class="eyebrow">پیشنهاد ویژه این هفته</span>
          <h1>خرید خوب،<br><strong>انتخاب مطمئن.</strong></h1>
          <p>محصولات منتخب را با مقایسه راحت، اطلاعات کامل و تجربه‌ای سریع پیدا کنید.</p>
          <div class="hero-buttons"><button class="primary" @click="activeCategory = 'موبایل و دیجیتال'">مشاهده محصولات <span>←</span></button><button class="text-button">چرا بازارینو؟</button></div>
          <div class="trust"><span>✓ ضمانت اصالت کالا</span><span>✓ هفت روز ضمانت بازگشت</span><span>✓ ارسال سریع</span></div>
        </div>
        <div class="hero-image">
          <div class="floating-card"><b>تا ۲۵٪</b><span>تخفیف محصولات منتخب</span></div>
          <img class="hero-image-real" src="/assets/hero-image.png" alt="خرید آنلاین">
        </div>
      </section>

      <section class="services-strip container">
        <div><span>🚚</span><b>تحویل سریع</b><small>به سراسر کشور</small></div>
        <div><span>↩</span><b>هفت روز بازگشت</b><small>بدون دردسر</small></div>
        <div><span>✓</span><b>ضمانت اصالت</b><small>با خیال راحت بخرید</small></div>
        <div><span>◉</span><b>پشتیبانی واقعی</b><small>همیشه کنار شما</small></div>
      </section>

      <section class="container section">
        <div class="section-head"><div><span class="section-kicker">منتخب بازارینو</span><h2>پیشنهادهای امروز</h2></div><button @click="activeCategory = 'همه'">مشاهده همه ←</button></div>
        <div class="product-grid">
          <article v-for="product in filteredProducts.slice(0, 4)" :key="product.id" class="product" @click="openProduct(product)">
            <div class="product-image"><span class="discount">{{ product.discount }}</span><button class="heart" @click.stop>♡</button><img :src="product.image" :alt="product.title"></div>
            <div class="product-body"><span class="category">{{ product.category }}</span><h3>{{ product.title }}</h3><div class="rating"><b>★ {{ product.rating }}</b><span>({{ product.reviews }} نظر)</span></div><div class="price"><strong>{{ product.price }}</strong><span>تومان</span></div><del>{{ product.oldPrice }}</del></div>
          </article>
        </div>
      </section>

      <section class="promo container">
        <div class="promo-text"><span>برای خانه‌ای بهتر</span><h2>جزئیات کوچک،<br><strong>تفاوت بزرگ.</strong></h2><p>منتخب لوازم خانه و آشپزخانه برای کسانی که به کیفیت اهمیت می‌دهند.</p><button class="light-button" @click="activeCategory = 'لوازم خانه'">دیدن مجموعه</button></div>
        <img src="/assets/demo/photo-1556911220-e15b29be8c8f.avif" alt="لوازم خانه">
      </section>

      <section class="container section categories-section">
        <div class="section-head"><div><span class="section-kicker">دسته‌بندی‌ها</span><h2>چی لازم داری؟</h2></div></div>
        <div class="category-grid">
          <button v-for="(cat, index) in categories.slice(1)" :key="cat" @click="activeCategory = cat" class="category-card"><span class="cat-number">0{{ index + 1 }}</span><div><b>{{ cat }}</b><small>مشاهده محصولات ←</small></div></button>
        </div>
      </section>

      <section class="newsletter">
        <div class="container newsletter-inner"><div><span>عضویت در باشگاه مشتریان</span><h2>پیشنهادهای خوب را از دست نده.</h2></div><div class="newsletter-form"><input placeholder="شماره موبایل شما"><button>عضویت</button></div></div>
      </section>
    </main>

    <footer class="footer"><div class="container footer-grid"><div><NuxtLink to="/services" class="logo footer-logo"><b>بازارینو</b><small>نمونه طراحی فروشگاه اینترنتی</small></NuxtLink><p>یک نمونه از کیفیت و تجربه‌ای که می‌توان برای یک فروشگاه اینترنتی ساخت. ساختار، رنگ و ظاهر نهایی هر پروژه از صفر متناسب با کسب‌وکار شما طراحی می‌شود.</p></div><div><b>راهنمای خرید</b><span>نحوه ثبت سفارش</span><span>روش‌های پرداخت</span><span>ارسال و تحویل</span></div><div><b>خدمات مشتریان</b><span>پاسخ به پرسش‌ها</span><span>شرایط بازگشت</span><span>تماس با ما</span></div><div><b>درباره فروشگاه</b><span>درباره ما</span><span>مجله</span><span>همکاری با ما</span></div></div><div class="container copyright">© ۱۴۰۵ بازارینو — این صفحه صرفاً نمونه طراحی است.</div></footer>

    <Transition name="fade"><div v-if="showCart" class="overlay" @click="showCart = false"><aside class="drawer" @click.stop><div class="drawer-head"><b>سبد خرید</b><button @click="showCart = false">×</button></div><div class="drawer-empty"><span>🛒</span><h3>{{ cartCount }} کالا در سبد شماست</h3><p>این بخش در نسخه واقعی به سیستم سفارش و پرداخت متصل می‌شود.</p><button class="primary" @click="showCart = false">ادامه خرید</button></div></aside></div></Transition>
    <Transition name="fade"><div v-if="selectedProduct" class="overlay" @click="selectedProduct = null"><div class="quick-view" @click.stop><button class="close" @click="selectedProduct = null">×</button><img :src="selectedProduct.image" :alt="selectedProduct.title"><div><span class="category">{{ selectedProduct.category }}</span><h2>{{ selectedProduct.title }}</h2><div class="rating"><b>★ {{ selectedProduct.rating }}</b><span>{{ selectedProduct.reviews }} نظر</span></div><p>صفحه محصول واقعی می‌تواند مشخصات کامل، تصاویر متعدد، مقایسه، نظرات کاربران، موجودی و پیشنهادهای مرتبط را در اختیار مشتری قرار دهد.</p><strong class="big-price">{{ selectedProduct.price }} تومان</strong><button class="primary full" @click="addToCart(); selectedProduct = null">افزودن به سبد خرید</button></div></div></div></Transition>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap');
:global(body){margin:0;font-family:'Vazirmatn',sans-serif;background:#f7f8fa;color:#17191c}.demo{min-height:100vh}.container{width:min(1240px,calc(100% - 40px));margin:auto}.demo-notice{background:#111827;color:#fff;padding:10px 20px;display:flex;justify-content:center;gap:24px;font-size:12px}.demo-notice a{color:#fbbf24}.header{background:#fff;box-shadow:0 2px 12px #10182808;position:sticky;top:0;z-index:30}.topbar{height:34px;display:flex;justify-content:space-between;align-items:center;color:#7b8190;font-size:11px}.toplinks{display:flex;gap:22px}.mainbar{height:78px;display:flex;align-items:center;gap:26px}.logo{color:#17191c;text-decoration:none;display:flex;flex-direction:column;line-height:1}.logo b{font-size:25px;letter-spacing:-1px}.logo small{font-size:9px;color:#9a6a20;margin-top:6px}.search{height:46px;flex:1;border:0;background:#f3f5f7;border-radius:9px;display:flex;align-items:center;padding:0 15px;color:#8b919b;gap:10px}.search span{font-size:26px}.search input{border:0;outline:0;background:transparent;width:100%;font:inherit;font-size:13px}.search kbd{font-size:10px;background:#fff;padding:5px 8px;border-radius:5px;white-space:nowrap}.actions{display:flex;align-items:center;gap:20px}.account{display:flex;gap:8px;align-items:center;background:none;border:0;text-align:right;font-family:inherit}.account span{font-size:25px}.account div{display:flex;flex-direction:column}.account small{font-size:9px;color:#888}.account b{font-size:12px}.icon-action{position:relative;border:0;background:none;font-size:22px;cursor:pointer}.icon-action i{position:absolute;right:-8px;top:-7px;background:#d97706;color:#fff;border-radius:20px;min-width:17px;height:17px;font:10px 'Vazirmatn';display:grid;place-items:center}.nav{height:45px;display:flex;align-items:center;gap:25px;border-top:1px solid #f0f1f3;overflow:auto}.nav button{border:0;background:none;font:500 11px 'Vazirmatn';white-space:nowrap;color:#545b67;cursor:pointer}.nav .category-menu{font-weight:700;color:#17191c}.nav-divider{height:20px;width:1px;background:#e5e7eb}.hero{display:grid;grid-template-columns:44% 56%;min-height:510px;margin-top:24px;border-radius:14px;overflow:hidden;background:#efe7da}.hero-copy{padding:70px 65px 55px 35px;display:flex;flex-direction:column;justify-content:center}.eyebrow,.section-kicker{color:#a66b17;font-size:11px;font-weight:700}.hero h1{font-size:48px;line-height:1.35;letter-spacing:-2px;margin:14px 0}.hero h1 strong{color:#8b5e1a}.hero p{color:#6f7278;font-size:14px;line-height:2;max-width:430px}.hero-buttons{display:flex;align-items:center;gap:24px;margin:25px 0}.primary{background:#1b1d20;color:#fff;border:0;border-radius:8px;padding:14px 25px;font:600 12px 'Vazirmatn';cursor:pointer}.primary span{margin-right:10px}.text-button{border:0;background:none;font:500 12px 'Vazirmatn';cursor:pointer}.trust{display:flex;gap:17px;flex-wrap:wrap;color:#62666c;font-size:10px}.hero-image{position:relative;overflow:hidden}.hero-image img{width:100%;height:100%;object-fit:contain;margin-left: 3rem;}.floating-card{position:absolute;z-index:2;bottom:24px;right:24px;background:#fff;border-radius:10px;padding:15px 19px;box-shadow:0 8px 30px #0002;display:flex;flex-direction:column}.floating-card b{font-size:21px;color:#a66b17}.floating-card span{font-size:10px;color:#666}.services-strip{background:#fff;margin-top:18px;border-radius:10px;display:grid;grid-template-columns:repeat(4,1fr);padding:18px 10px}.services-strip div{display:flex;align-items:center;justify-content:center;gap:9px;border-left:1px solid #eee}.services-strip div:last-child{border:0}.services-strip span{font-size:22px;color:#9a6a20}.services-strip b{font-size:11px}.services-strip small{font-size:9px;color:#999}.section{padding:55px 0}.section-head{display:flex;align-items:end;justify-content:space-between;margin-bottom:25px}.section-head h2{font-size:24px;margin:7px 0 0;letter-spacing:-1px}.section-head button{border:0;background:none;color:#9a6a20;font:500 11px 'Vazirmatn';cursor:pointer}.product-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.product{background:#fff;border-radius:10px;padding:11px;cursor:pointer;transition:.25s;box-shadow:0 1px 4px #10182808}.product:hover{transform:translateY(-4px);box-shadow:0 10px 30px #10182812}.product-image{height:235px;background:#f5f6f7;border-radius:7px;position:relative;overflow:hidden}.product-image img{width:100%;height:100%;object-fit:cover;mix-blend-mode:multiply;transition:.4s}.product:hover .product-image img{transform:scale(1.04)}.discount{position:absolute;top:10px;right:10px;background:#b91c1c;color:#fff;border-radius:4px;padding:4px 7px;font-size:9px;z-index:2}.heart{position:absolute;top:9px;left:9px;border:0;background:#fff;border-radius:50%;width:30px;height:30px;font-size:20px;z-index:2}.product-body{padding:11px 4px 5px}.category{font-size:9px;color:#a16b20}.product h3{font-size:12px;line-height:1.8;font-weight:500;margin:5px 0}.rating{display:flex;gap:8px;align-items:center;font-size:9px;margin:8px 0}.rating b{color:#c17a19}.rating span{color:#999}.price{display:flex;gap:5px;align-items:baseline;justify-content:flex-start;margin-top:11px}.price strong{font-size:15px}.price span{font-size:9px;color:#777}.product del{font-size:9px;color:#aaa;display:block;margin-top:3px}.promo{display:grid;grid-template-columns:40% 60%;min-height:310px;background:#1e2325;border-radius:14px;overflow:hidden;color:#fff}.promo-text{padding:45px 55px;display:flex;flex-direction:column;justify-content:center}.promo-text>span{font-size:10px;color:#d6a04c}.promo h2{font-size:31px;line-height:1.45;margin:9px 0}.promo h2 strong{color:#e3b45f}.promo p{font-size:11px;line-height:2;color:#bfc3c5;max-width:330px}.promo img{width:100%;height:100%;object-fit:cover;opacity:.9}.light-button{align-self:flex-start;background:#fff;border:0;border-radius:7px;padding:11px 20px;font:600 11px 'Vazirmatn';margin-top:12px}.categories-section{padding-bottom:70px}.category-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}.category-card{background:#fff;border:0;border-radius:10px;padding:20px;text-align:right;min-height:120px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;box-shadow:0 1px 5px #10182808}.cat-number{color:#d5d8dc;font-size:24px;font-weight:800}.category-card div{display:flex;flex-direction:column;gap:6px}.category-card b{font-size:13px}.category-card small{font-size:9px;color:#a16b20}.newsletter{background:#eee8de;padding:45px 0}.newsletter-inner{display:flex;justify-content:space-between;align-items:center;gap:30px}.newsletter-inner span{font-size:10px;color:#9a6a20}.newsletter h2{margin:8px 0;font-size:25px}.newsletter-form{background:#fff;border-radius:8px;padding:5px;display:flex;width:390px}.newsletter-form input{border:0;outline:0;padding:11px;flex:1;font:11px 'Vazirmatn'}.newsletter-form button{background:#1d2022;color:#fff;border:0;border-radius:6px;padding:0 22px;font:600 11px 'Vazirmatn'}.footer{background:#191b1d;color:#aeb1b5;padding:55px 0 20px}.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:50px}.footer .logo b{color:#fff}.footer p{font-size:10px;line-height:2.2;max-width:360px}.footer-grid>div:not(:first-child){display:flex;flex-direction:column;gap:14px;font-size:10px}.footer-grid>div>b{color:#fff;margin-bottom:5px}.copyright{border-top:1px solid #2c2f32;margin-top:45px;padding-top:18px;font-size:9px}.overlay{position:fixed;inset:0;background:#0008;z-index:100;display:flex;justify-content:flex-start}.drawer{background:#fff;width:min(390px,90vw);height:100%;padding:25px;box-sizing:border-box}.drawer-head{display:flex;justify-content:space-between;font-size:15px}.drawer-head button,.close{border:0;background:none;font-size:28px;cursor:pointer}.drawer-empty{height:80%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.drawer-empty span{font-size:40px}.drawer-empty p{font-size:11px;color:#888;line-height:2}.quick-view{width:min(800px,90vw);background:#fff;border-radius:14px;margin:auto;padding:20px;display:grid;grid-template-columns:45% 55%;gap:30px;position:relative}.quick-view img{width:100%;height:380px;object-fit:cover;border-radius:10px}.quick-view h2{font-size:23px;line-height:1.7}.quick-view p{font-size:11px;color:#777;line-height:2}.big-price{display:block;font-size:19px;margin:25px 0}.full{width:100%}.close{position:absolute;top:10px;left:12px}.fade-enter-active,.fade-leave-active{transition:opacity .2s}.fade-enter-from,.fade-leave-to{opacity:0}.mobile-menu{display:none}
@media(max-width:900px){.container{width:min(100% - 24px,700px)}.topbar,.nav{display:none}.mainbar{height:66px;gap:12px}.mobile-menu{display:block;border:0;background:none;font-size:20px}.account{display:none}.logo b{font-size:21px}.search{height:42px}.search kbd{display:none}.hero{grid-template-columns:1fr;min-height:auto}.hero-copy{padding:42px 28px}.hero h1{font-size:38px}.hero-image{height:330px}.services-strip{grid-template-columns:repeat(2,1fr);gap:15px}.services-strip div:nth-child(2){border:0}.product-grid{grid-template-columns:repeat(2,1fr)}.product-image{height:210px}.promo{grid-template-columns:1fr}.promo img{height:270px}.promo-text{padding:35px}.category-grid{grid-template-columns:repeat(2,1fr)}.newsletter-inner{flex-direction:column;align-items:stretch}.newsletter-form{width:auto}.footer-grid{grid-template-columns:1fr 1fr}.quick-view{grid-template-columns:1fr}.quick-view img{height:280px}}
@media(max-width:520px){.demo-notice{font-size:9px;gap:10px}.actions{margin-right:auto}.search{min-width:0}.search input{font-size:10px}.hero h1{font-size:32px}.product-grid{gap:8px}.product-image{height:170px}.product h3{font-size:11px}.price strong{font-size:13px}.section{padding:40px 0}.footer-grid{grid-template-columns:1fr}.category-grid{grid-template-columns:1fr 1fr}}
</style>
