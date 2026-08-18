<script setup lang="ts">
import { computed, ref, watch } from 'vue'

useSeoMeta({
  title: 'دموی سایت رستوران و کافه | FADAKAR',
  description: 'نمونه طراحی سایت رستوران و کافه با جست‌وجوی هوشمند، فیلتر هدفمند، پیشنهاد شخصی و تجربه سفارش سریع.'
})

type Item = {
  id: number
  name: string
  category: string
  tags: string[]
  price: number
  rating: number
  time: string
  image: string
  description: string
  spicy?: boolean
  popular?: boolean
  vegetarian?: boolean
}

const categories = ['همه', 'پیشنهاد امروز', 'برگر', 'پیتزا', 'پاستا', 'غذای ایرانی', 'سالاد', 'صبحانه', 'دسر', 'نوشیدنی']
const moods = [
  { label: 'یه چیز سبک می‌خوام', tags: ['سالاد', 'صبحانه', 'نوشیدنی'], icon: '◌' },
  { label: 'خیلی گرسنه‌ام', tags: ['برگر', 'پیتزا', 'غذای ایرانی'], icon: '↗' },
  { label: 'یه چیز خاص', tags: ['دسر', 'پاستا', 'پیتزا'], icon: '✦' },
  { label: 'برای دو نفر', tags: ['پیتزا', 'پاستا', 'دسر'], icon: '♡' },
]

const items: Item[] = [
  { id: 1, name: 'برگر دودی آرمان', category: 'برگر', tags: ['برگر', 'سیرکننده', 'دودی', 'محبوب'], price: 395, rating: 4.9, time: '۱۲ دقیقه', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=85&w=1000', description: 'گوشت گریل‌شده، پنیر چدار، پیاز کاراملی و سس دودی', popular: true },
  { id: 2, name: 'پیتزا ناپولیتانا', category: 'پیتزا', tags: ['پیتزا', 'دو نفره', 'ایتالیایی', 'محبوب'], price: 520, rating: 4.8, time: '۱۸ دقیقه', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=85&w=1000', description: 'خمیر دست‌ساز، موزارلا، ریحان تازه و گوجه سن‌مارزانو', popular: true },
  { id: 3, name: 'پاستا آلفردو قارچ', category: 'پاستا', tags: ['پاستا', 'خامه‌ای', 'گیاهی'], price: 420, rating: 4.7, time: '۱۵ دقیقه', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=85&w=1000', description: 'فتوچینی تازه با سس پارمزان، قارچ و فلفل سیاه', vegetarian: true },
  { id: 4, name: 'چلو جوجه زعفرانی', category: 'غذای ایرانی', tags: ['ایرانی', 'برنج', 'سیرکننده', 'زعفرانی'], price: 460, rating: 4.9, time: '۲۰ دقیقه', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=85&w=1000', description: 'جوجه مزه‌دارشده، برنج ایرانی، گوجه کبابی و کره زعفرانی' },
  { id: 5, name: 'سالاد سزار گریل', category: 'سالاد', tags: ['سالاد', 'سبک', 'مرغ', 'پروتئینی'], price: 315, rating: 4.6, time: '۱۰ دقیقه', image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=85&w=1000', description: 'کاهو ترد، مرغ گریل، پارمزان و سس سزار خانگی' },
  { id: 6, name: 'صبحانه آرمان', category: 'صبحانه', tags: ['صبحانه', 'تخم‌مرغ', 'سبک'], price: 285, rating: 4.8, time: '۸ دقیقه', image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=85&w=1000', description: 'تخم‌مرغ، نان خمیرترش، آووکادو، پنیر و سبزی تازه', vegetarian: true },
  { id: 7, name: 'چیزکیک پسته', category: 'دسر', tags: ['دسر', 'پسته', 'شیرین', 'خاص'], price: 245, rating: 4.9, time: '۵ دقیقه', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=85&w=1000', description: 'چیزکیک خامه‌ای با کرم پسته و پسته برشته', popular: true, vegetarian: true },
  { id: 8, name: 'لاته وانیل', category: 'نوشیدنی', tags: ['نوشیدنی', 'قهوه', 'شیرین'], price: 185, rating: 4.7, time: '۵ دقیقه', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=85&w=1000', description: 'اسپرسو، شیر بخار داده‌شده و وانیل طبیعی' },
  { id: 9, name: 'پیتزا ترافل', category: 'پیتزا', tags: ['پیتزا', 'خاص', 'ترافل', 'دو نفره'], price: 690, rating: 4.9, time: '۲۰ دقیقه', image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=85&w=1000', description: 'موزارلا، قارچ، روغن ترافل و پارمزان کهنه', popular: true, vegetarian: true },
  { id: 10, name: 'براونی شکلات تلخ', category: 'دسر', tags: ['دسر', 'شکلات', 'شیرین'], price: 210, rating: 4.6, time: '۵ دقیقه', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=85&w=1000', description: 'براونی شکلات تلخ با مغز گردو و بستنی وانیلی' },
  { id: 11, name: 'کاپوچینو', category: 'نوشیدنی', tags: ['نوشیدنی', 'قهوه', 'صبحانه'], price: 165, rating: 4.8, time: '۴ دقیقه', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=85&w=1000', description: 'اسپرسوی دو شات با فوم شیر مخملی' },
  { id: 12, name: 'بشقاب مزه ایرانی', category: 'غذای ایرانی', tags: ['ایرانی', 'دو نفره', 'خاص', 'اشتراکی'], price: 575, rating: 4.8, time: '۱۵ دقیقه', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=85&w=1000', description: 'ترکیبی از کشک بادمجان، میرزا قاسمی، زیتون و نان تازه' },
]

const query = ref('')
const category = ref('همه')
const activeMood = ref('')
const priceMax = ref(800)
const vegetarian = ref(false)
const sort = ref('match')
const selected = ref<Item | null>(null)
const searchFocused = ref(false)
const showAll = ref(false)

const normalized = (value: string) => value.toLocaleLowerCase('fa-IR').replace(/ي/g, 'ی').replace(/ك/g, 'ک')

const smartTags = computed(() => {
  const q = normalized(query.value.trim())
  if (!q) return []
  const suggestions: string[] = []
  if (/سبک|کم|رژیم|سالم/.test(q)) suggestions.push('سبک')
  if (/گرسنه|سیر|زیاد/.test(q)) suggestions.push('سیرکننده')
  if (/شیرین|شکلات|دسر/.test(q)) suggestions.push('شیرین')
  if (/قهوه|کافه|صبح/.test(q)) suggestions.push('قهوه')
  if (/دو نفر|دونفر|اشتراک/.test(q)) suggestions.push('دو نفره')
  if (/خاص|لاکچری|متفاوت/.test(q)) suggestions.push('خاص')
  return [...new Set(suggestions)]
})

const scored = computed(() => {
  const q = normalized(query.value.trim())
  const moodTags = moods.find(m => m.label === activeMood.value)?.tags ?? []
  return items
    .map(item => {
      let score = 0
      const haystack = normalized([item.name, item.category, item.description, ...item.tags].join(' '))
      if (category.value !== 'همه' && item.category !== category.value && !(category.value === 'پیشنهاد امروز' && item.popular)) return { item, score: -999 }
      if (item.price > priceMax.value || (vegetarian.value && !item.vegetarian)) return { item, score: -999 }
      if (category.value === 'پیشنهاد امروز' && item.popular) score += 20
      moodTags.forEach(tag => { if (item.tags.includes(tag) || item.category === tag) score += 12 })
      smartTags.value.forEach(tag => { if (item.tags.includes(tag)) score += 15 })
      if (q) {
        q.split(/\s+/).filter(Boolean).forEach(word => { if (haystack.includes(word)) score += item.name.toLocaleLowerCase().includes(word) ? 20 : 8 })
      }
      score += item.rating * 2
      if (!q && !activeMood.value) score += item.popular ? 8 : 0
      return { item, score }
    })
    .filter(x => x.score > -999)
    .sort((a, b) => sort.value === 'price' ? a.item.price - b.item.price : sort.value === 'rating' ? b.item.rating - a.item.rating : b.score - a.score)
})

const results = computed(() => showAll.value ? scored.value : scored.value.slice(0, 8))
const resultLabel = computed(() => query.value || activeMood.value ? `${scored.value.length} انتخاب نزدیک به سلیقه‌ات` : 'پیشنهادهای محبوب امروز')

function chooseMood(mood: typeof moods[number]) {
  activeMood.value = mood.label
  searchFocused.value = false
}
function clearSearch() {
  query.value = ''
  activeMood.value = ''
  category.value = 'همه'
}
function scrollToMenu() {
  document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
}
watch(query, () => { if (query.value) category.value = 'همه' })
</script>

<template>
  <div dir="rtl" class="cafe-demo">
    <div class="demo-bar"><span>نمونه طراحی سایت رستوران و کافه</span><NuxtLink to="/services">مشاهده خدمات FADAKAR ←</NuxtLink></div>

    <header class="header">
      <NuxtLink to="/services" class="logo">ARMA<span>N</span></NuxtLink>
      <nav><button @click="scrollToMenu">منو</button><button @click="document.querySelector('#story')?.scrollIntoView({behavior:'smooth'})">داستان ما</button><button @click="document.querySelector('#reserve')?.scrollIntoView({behavior:'smooth'})">رزرو میز</button></nav>
      <button class="header-cta" @click="scrollToMenu">چی میلته؟ <span>↗</span></button>
    </header>

    <main>
      <section class="hero">
        <div class="hero-image"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=90&w=1800" alt="فضای رستوران آرمان"><div class="grain"></div></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <p class="eyebrow">رستوران · کافه · تهران</p>
          <h1>غذا را<br><i>پیدا نکن.</i><br>پیدایت کند.</h1>
          <p>به جای گشتن بین ده‌ها آیتم، فقط بگو الان چه چیزی می‌خواهی. منوی آرمان از روی سلیقه، حال‌وهوا و محدودیت‌هایت، انتخاب را برایت کوچک می‌کند.</p>
          <button class="hero-search" @click="scrollToMenu"><span>⌕</span><b>مثلاً: «یه چیز سبک ولی خوشمزه می‌خوام»</b><em>↘</em></button>
          <div class="hero-meta"><span>۴.۹ ★ از ۲٬۸۴۰ تجربه</span><span>امروز ۱۲ تا ۲۳:۳۰</span><span>تهران، نیاوران</span></div>
        </div>
        <div class="hero-side">SCROLL<br><span>↓</span></div>
      </section>

      <section id="menu" class="discovery">
        <div class="discovery-head">
          <div><p class="eyebrow dark">منوی زنده</p><h2>بذار انتخابت را <i>آسان کنیم.</i></h2></div>
          <p>جست‌وجو فقط اسم غذا را پیدا نمی‌کند؛ منظور تو را می‌فهمد، گزینه‌های نامرتبط را کنار می‌گذارد و انتخاب‌ها را بر اساس چیزی که گفتی مرتب می‌کند.</p>
        </div>

        <div class="ai-search" :class="{ focused: searchFocused }">
          <span class="search-icon">⌕</span>
          <input v-model="query" @focus="searchFocused = true" placeholder="مثلاً: «یه غذای سبک بدون گوشت، زیر ۳۵۰»" aria-label="جستجوی هوشمند منو">
          <button v-if="query" class="clear" @click="clearSearch">×</button>
          <span class="ai-badge">SMART MENU</span>
        </div>

        <div class="intent-row">
          <button v-for="mood in moods" :key="mood.label" :class="{ active: activeMood === mood.label }" @click="chooseMood(mood)"><b>{{ mood.icon }}</b>{{ mood.label }}</button>
        </div>

        <div class="filters">
          <div class="category-scroll"><button v-for="c in categories" :key="c" :class="{ active: category === c }" @click="category = c">{{ c }}</button></div>
          <div class="advanced"><label><input v-model="vegetarian" type="checkbox"> گیاهی</label><label class="price">تا {{ priceMax.toLocaleString('fa-IR') }} هزار <input v-model="priceMax" type="range" min="150" max="800" step="25"></label><select v-model="sort"><option value="match">مرتبط‌ترین</option><option value="rating">بیشترین امتیاز</option><option value="price">ارزان‌ترین</option></select></div>
        </div>

        <div class="result-line"><span>{{ resultLabel }}</span><small v-if="query || activeMood">بر اساس انتخاب‌های تو مرتب شده</small></div>

        <div class="menu-grid">
          <article v-for="result in results" :key="result.item.id" class="food-card" @click="selected = result.item">
            <div class="food-image"><img :src="result.item.image" :alt="result.item.name" loading="lazy"><span v-if="result.item.popular">محبوب</span><button aria-label="افزودن به علاقه‌مندی" @click.stop>♡</button></div>
            <div class="food-info"><div class="food-title"><h3>{{ result.item.name }}</h3><b>{{ result.item.price.toLocaleString('fa-IR') }}<small> هزار</small></b></div><p>{{ result.item.description }}</p><div class="food-foot"><span>★ {{ result.item.rating }}</span><span>{{ result.item.time }}</span><em v-if="result.score > 35">انتخاب پیشنهادی</em></div></div>
          </article>
        </div>
        <button v-if="scored.length > 8 && !showAll" class="load-more" @click="showAll = true">نمایش همه انتخاب‌ها <span>↓</span></button>
      </section>

      <section id="story" class="story">
        <div class="story-photo"><img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=90&w=1200" alt="آشپزخانه رستوران"></div>
        <div class="story-copy"><p class="eyebrow dark">چیزی بیشتر از یک منو</p><h2>هر غذا، یک <i>دلیل</i> دارد.</h2><p>آرمان از آشپزخانه‌ای شروع شد که قرار نبود فقط غذا بفروشد. مواد اولیه هر روز انتخاب می‌شوند، منو بر اساس فصل تغییر می‌کند و هر آیتم یک داستان کوتاه پشت خودش دارد.</p><div class="story-stats"><div><b>۱۲</b><span>سال تجربه</span></div><div><b>۳۸</b><span>آیتم منو</span></div><div><b>۲٬۸۴۰</b><span>نظر ثبت‌شده</span></div></div><button @click="scrollToMenu">منو را کشف کن ↗</button></div>
      </section>

      <section id="reserve" class="reserve">
        <div><p class="eyebrow">میزت منتظر توست</p><h2>برای امشب،<br><i>جایت را نگه داریم؟</i></h2><p>تاریخ، ساعت و تعداد نفرات را انتخاب کن. بدون تماس تلفنی، در چند ثانیه میزت رزرو می‌شود.</p></div>
        <div class="reserve-box"><label>تعداد نفرات <select><option>۲ نفر</option><option>۳ نفر</option><option>۴ نفر</option><option>۵+ نفر</option></select></label><label>زمان <select><option>۲۰:۰۰</option><option>۲۰:۳۰</option><option>۲۱:۰۰</option><option>۲۱:۳۰</option></select></label><button>رزرو میز ↗</button></div>
      </section>
    </main>

    <footer><NuxtLink to="/services" class="logo">ARMA<span>N</span></NuxtLink><span>یک تجربه خوب، از انتخاب درست شروع می‌شود.</span><span>© 2026</span></footer>

    <Transition name="modal"><div v-if="selected" class="modal-backdrop" @click.self="selected = null"><article class="modal"><button class="close" @click="selected = null">×</button><img :src="selected.image" :alt="selected.name"><div><p class="eyebrow dark">پیشنهاد امروز</p><h2>{{ selected.name }}</h2><p>{{ selected.description }}</p><div class="modal-meta"><b>{{ selected.price.toLocaleString('fa-IR') }} هزار تومان</b><span>★ {{ selected.rating }}</span><span>{{ selected.time }}</span></div><button class="order">افزودن به سفارش ↗</button></div></article></div></Transition>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap');
:global(*){box-sizing:border-box}:global(body){margin:0;background:#f4f0e9;color:#191713;font-family:Vazirmatn,sans-serif}.cafe-demo{min-height:100vh;overflow:hidden}.demo-bar{height:36px;background:#15130f;color:#ddd8ce;display:flex;justify-content:center;gap:30px;align-items:center;font-size:11px}.demo-bar a{color:#d9a45e;text-decoration:none}.header{position:absolute;z-index:5;top:36px;left:0;right:0;height:78px;display:flex;align-items:center;justify-content:space-between;padding:0 5vw;color:#fff;border-bottom:1px solid #ffffff28}.logo{font:700 27px Georgia,serif;letter-spacing:3px;color:inherit;text-decoration:none}.logo span{color:#d9a45e}.header nav{display:flex;gap:34px}.header nav button,.header-cta{background:none;border:0;color:inherit;font:inherit;cursor:pointer}.header-cta{border:1px solid #ffffff55;border-radius:100px;padding:10px 20px}.header-cta span{color:#d9a45e}.hero{min-height:calc(100vh - 36px);position:relative;color:#fff;display:flex;align-items:center}.hero-image,.hero-overlay{position:absolute;inset:0}.hero-image img{width:100%;height:100%;object-fit:cover}.grain{position:absolute;inset:0;opacity:.09;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E")}.hero-overlay{background:linear-gradient(90deg,#080705df 0%,#080705b8 48%,#08070540 100%)}.hero-content{position:relative;z-index:2;width:min(720px,88%);margin-right:9vw}.eyebrow{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#e7c38e;margin:0 0 22px}.eyebrow.dark{color:#9a7140}.hero h1{font-size:clamp(52px,7vw,105px);line-height:.95;margin:0 0 30px;font-weight:500;letter-spacing:-4px}.hero h1 i,h2 i{font-family:'Playfair Display',serif;color:#e3b879}.hero-content>p:not(.eyebrow){max-width:570px;line-height:2;font-size:15px;color:#e4dfd7}.hero-search{margin-top:28px;width:min(590px,100%);height:64px;border-radius:8px;border:1px solid #ffffff45;background:#ffffff12;backdrop-filter:blur(16px);display:flex;align-items:center;gap:15px;padding:0 20px;color:#fff;text-align:right;cursor:pointer}.hero-search span{font-size:26px}.hero-search b{font-weight:400;font-size:13px;flex:1}.hero-search em{color:#e3b879;font-size:22px}.hero-meta{display:flex;gap:25px;margin-top:25px;font-size:11px;color:#d2ccc1}.hero-side{position:absolute;left:4vw;bottom:45px;writing-mode:vertical-rl;font-size:9px;letter-spacing:4px;color:#ffffff80}.hero-side span{font-size:18px;color:#e3b879}.discovery{padding:125px 7vw 110px;background:#f4f0e9}.discovery-head{display:flex;justify-content:space-between;align-items:end;gap:60px;margin-bottom:45px}.discovery-head h2,.story h2,.reserve h2{font-size:clamp(42px,5vw,72px);font-weight:500;line-height:1.05;letter-spacing:-2px;margin:0}.discovery-head>p{max-width:470px;color:#6f6a62;line-height:2;font-size:13px}.ai-search{max-width:900px;height:74px;margin:0 auto 18px;background:#fff;border:1px solid #ded8ce;border-radius:15px;display:flex;align-items:center;padding:0 22px;gap:14px;transition:.25s;box-shadow:0 8px 30px #3327130b}.ai-search.focused{border-color:#bb8b52;box-shadow:0 10px 35px #8b5d2515}.search-icon{font-size:28px;color:#8e877b}.ai-search input{border:0;outline:0;background:none;flex:1;font:inherit;font-size:14px;color:#27231e}.ai-badge{font-size:9px;letter-spacing:1.5px;color:#9c7448;border:1px solid #dec9ae;border-radius:100px;padding:7px 10px}.clear{border:0;background:#eee7dc;border-radius:50%;width:28px;height:28px;cursor:pointer}.intent-row{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin:20px 0 45px}.intent-row button{border:1px solid #ddd5ca;background:#fffaf4;border-radius:100px;padding:11px 17px;cursor:pointer;color:#575047;font:inherit;font-size:12px;transition:.2s}.intent-row button:hover,.intent-row button.active{background:#201d18;color:#fff;border-color:#201d18;transform:translateY(-2px)}.intent-row b{margin-left:7px;color:#c38b4d}.filters{border-top:1px solid #dcd5ca;border-bottom:1px solid #dcd5ca;padding:16px 0;display:flex;gap:20px;justify-content:space-between;align-items:center}.category-scroll{display:flex;gap:22px;overflow:auto;scrollbar-width:none}.category-scroll button{border:0;background:none;white-space:nowrap;padding:8px 0;color:#81796e;cursor:pointer;font:inherit;font-size:12px}.category-scroll button.active{color:#17140f;font-weight:700;border-bottom:2px solid #bb8245}.advanced{display:flex;gap:14px;align-items:center;white-space:nowrap;font-size:11px}.advanced label{display:flex;gap:7px;align-items:center}.price{color:#696158}.price input{width:75px}.advanced select{border:1px solid #d7d0c6;background:#fffaf4;border-radius:8px;padding:8px;font:inherit;font-size:11px}.result-line{display:flex;align-items:center;gap:14px;margin:32px 0 18px}.result-line span{font-size:13px;font-weight:700}.result-line small{font-size:10px;color:#a1784d}.menu-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}.food-card{background:#fff;border:1px solid #e4ddd3;border-radius:12px;overflow:hidden;cursor:pointer;transition:.3s}.food-card:hover{transform:translateY(-7px);box-shadow:0 20px 45px #2c21120e}.food-image{height:235px;position:relative;overflow:hidden}.food-image img{width:100%;height:100%;object-fit:cover;transition:.5s}.food-card:hover .food-image img{transform:scale(1.06)}.food-image>span{position:absolute;top:12px;right:12px;background:#191713;color:#fff;border-radius:100px;padding:6px 10px;font-size:9px}.food-image button{position:absolute;top:11px;left:11px;border:0;background:#fffdf9d9;border-radius:50%;width:34px;height:34px;font-size:20px;cursor:pointer}.food-info{padding:17px}.food-title{display:flex;justify-content:space-between;gap:10px;align-items:start}.food-title h3{margin:0;font-size:14px}.food-title>b{font-size:13px;white-space:nowrap}.food-title small{font-size:8px;font-weight:400}.food-info p{color:#81796e;font-size:10px;line-height:1.9;min-height:39px}.food-foot{display:flex;align-items:center;gap:10px;font-size:9px;color:#8c8478;border-top:1px solid #eee8df;padding-top:11px}.food-foot span:first-child{color:#a6753e}.food-foot em{font-style:normal;color:#9c7142;margin-right:auto}.load-more{display:block;margin:40px auto 0;border:1px solid #2a251e;background:none;border-radius:100px;padding:13px 25px;font:inherit;font-size:11px;cursor:pointer}.story{display:grid;grid-template-columns:1fr 1fr;background:#1b1915;color:#fff;min-height:650px}.story-photo img{width:100%;height:100%;min-height:500px;object-fit:cover;filter:saturate(.75)}.story-copy{padding:100px 8vw;display:flex;flex-direction:column;justify-content:center}.story-copy>p:not(.eyebrow){color:#bbb4a9;line-height:2;font-size:13px;max-width:500px}.story-stats{display:flex;gap:45px;margin:35px 0}.story-stats div{display:flex;flex-direction:column}.story-stats b{font:600 29px Georgia,serif;color:#dfb77c}.story-stats span{font-size:9px;color:#918b81;margin-top:5px}.story-copy button{align-self:flex-start;border:1px solid #ffffff55;background:none;color:#fff;border-radius:100px;padding:12px 22px;font:inherit;font-size:11px;cursor:pointer}.reserve{padding:100px 8vw;background:#cda16b;display:flex;justify-content:space-between;gap:60px;align-items:center}.reserve .eyebrow{color:#4d3822}.reserve h2 i{color:#fff8e9}.reserve>div>p:last-child{max-width:500px;color:#604a32;font-size:12px;line-height:2}.reserve-box{background:#fffaf4;padding:20px;border-radius:14px;display:flex;gap:10px;min-width:480px}.reserve-box label{font-size:9px;color:#777;display:flex;flex-direction:column;gap:5px;flex:1}.reserve-box select{border:1px solid #ddd3c6;border-radius:8px;background:#fff;padding:11px;font:inherit;font-size:11px}.reserve-box button{border:0;background:#1c1915;color:#fff;border-radius:8px;padding:0 22px;font:inherit;font-size:11px;cursor:pointer}footer{background:#15130f;color:#aaa69e;padding:35px 7vw;display:flex;align-items:center;justify-content:space-between;font-size:10px}.modal-backdrop{position:fixed;z-index:20;inset:0;background:#090806b8;backdrop-filter:blur(10px);display:grid;place-items:center;padding:20px}.modal{background:#f8f4ed;max-width:800px;width:100%;border-radius:18px;overflow:hidden;display:grid;grid-template-columns:1fr 1fr;position:relative}.modal>img{width:100%;height:100%;min-height:380px;object-fit:cover}.modal>div{padding:45px 35px}.modal h2{font-size:30px;margin:0 0 15px}.modal p:not(.eyebrow){font-size:12px;line-height:2;color:#756d63}.close{position:absolute;top:12px;left:12px;z-index:2;width:35px;height:35px;border:0;border-radius:50%;background:#ffffffdd;font-size:22px;cursor:pointer}.modal-meta{display:flex;gap:12px;align-items:center;border-top:1px solid #ddd4c7;padding-top:20px;font-size:10px}.modal-meta b{margin-left:auto}.order{width:100%;margin-top:25px;padding:13px;border:0;border-radius:8px;background:#1b1915;color:#fff;font:inherit;font-size:11px;cursor:pointer}.modal-enter-active,.modal-leave-active{transition:.25s}.modal-enter-from,.modal-leave-to{opacity:0}@media(max-width:900px){.header nav{display:none}.hero-content{margin-right:7vw}.hero h1{font-size:55px}.discovery-head,.reserve{flex-direction:column;align-items:flex-start}.menu-grid{grid-template-columns:repeat(2,1fr)}.filters{align-items:flex-start;flex-direction:column}.advanced{flex-wrap:wrap}.story{grid-template-columns:1fr}.story-photo img{max-height:430px}.reserve-box{min-width:0;width:100%}}@media(max-width:600px){.demo-bar{font-size:9px;gap:12px}.header{padding:0 5vw}.header-cta{padding:8px 12px;font-size:10px}.hero{min-height:750px}.hero-content{width:88%;margin:0 auto;padding-top:70px}.hero h1{font-size:48px;letter-spacing:-2px}.hero-search b{font-size:10px}.hero-meta{flex-wrap:wrap;gap:10px}.hero-side{display:none}.discovery{padding:75px 5vw}.discovery-head h2,.story h2,.reserve h2{font-size:43px}.discovery-head{gap:20px}.ai-search{height:62px}.ai-badge{display:none}.intent-row{justify-content:flex-start;overflow:auto;flex-wrap:nowrap;padding-bottom:5px}.menu-grid{grid-template-columns:1fr;gap:16px}.food-image{height:260px}.story-copy{padding:70px 7vw}.reserve{padding:70px 7vw}.reserve-box{flex-direction:column}.reserve-box button{height:45px}footer{flex-direction:column;gap:15px}.modal{grid-template-columns:1fr}.modal>img{height:230px;min-height:0}.modal>div{padding:25px}}
</style>
