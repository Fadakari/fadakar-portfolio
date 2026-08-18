<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'

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
  diet?: string
}

const categories = ['همه', 'پیشنهاد امروز', 'پیتزا', 'برگر', 'پاستا', 'غذای ایرانی', 'دریایی', 'ساندویچ', 'سالاد', 'صبحانه', 'دسر', 'نوشیدنی گرم', 'نوشیدنی سرد']
const moods = [
  { label: 'یه چیز سبک می‌خوام', tags: ['سالاد', 'صبحانه', 'سبک', 'رژیمی'], icon: '◌' },
  { label: 'خیلی گرسنه‌ام', tags: ['برگر', 'پیتزا', 'غذای ایرانی', 'پرسی', 'سیرکننده'], icon: '↗' },
  { label: 'بعد از باشگاه', tags: ['پروتئین', 'مرغ', 'گوشت', 'سالم', 'رژیمی'], icon: '💪' },
  { label: 'یه چیز خاص و جدید', tags: ['دسر', 'پاستا', 'پیتزا', 'خاص', 'ترافل'], icon: '✦' },
  { label: 'برای دو نفر', tags: ['پیتزا', 'پاستا', 'دسر', 'اشتراکی', 'دو نفره'], icon: '♡' },
  { label: 'شیرینی‌جات', tags: ['شیرین', 'دسر', 'کیک'], icon: '🍰' },
  { label: 'مناسب دیت', tags: ['خاص', 'ایتالیایی', 'لاکچری'], icon: '🍷' },
]

const quickFilters = ['تند', 'اقتصادی', 'بدون گوشت', 'نونی', 'برنجی', 'ترش', 'شیرین', 'سالم', 'سوخاری']

const items: Item[] = [
  { id: 1, name: 'برگر دودی آرمان', category: 'برگر', tags: ['برگر', 'سیرکننده', 'دودی', 'محبوب', 'نونی', 'گوشت', 'فست فود'], price: 395, rating: 4.9, time: '۱۲ دقیقه', image: '/assets/demo/photo-1568901346375-23c9450c58cd.jpg', description: 'گوشت گریل‌شده، پنیر چدار، پیاز کاراملی و سس دودی', popular: true },
  { id: 2, name: 'پیتزا ناپولیتانا', category: 'پیتزا', tags: ['پیتزا', 'دو نفره', 'ایتالیایی', 'محبوب', 'نونی', 'سالم', 'فست فود'], price: 520, rating: 4.8, time: '۱۸ دقیقه', image: '/assets/demo/photo-1574071318508-1cdbab80d002.jpg', description: 'خمیر دست‌ساز، موزارلا، ریحان تازه و گوجه سن‌مارزانو', popular: true, vegetarian: true },
  { id: 3, name: 'پاستا آلفردو قارچ', category: 'پاستا', tags: ['پاستا', 'خامه‌ای', 'گیاهی', 'بدون گوشت', 'ایتالیایی'], price: 420, rating: 4.7, time: '۱۵ دقیقه', image: '/assets/demo/photo-1473093295043-cdd812d0e601.jpg', description: 'فتوچینی تازه با سس پارمزان، قارچ و فلفل سیاه', vegetarian: true },
  { id: 4, name: 'چلو جوجه زعفرانی', category: 'غذای ایرانی', tags: ['ایرانی', 'برنج', 'برنجی', 'سیرکننده', 'زعفرانی', 'پروتئین', 'مرغ', 'سنتی'], price: 460, rating: 4.9, time: '۲۰ دقیقه', image: '/assets/demo/photo-1601050690597-df0568f70950.jpg', description: 'جوجه مزه‌دارشده، برنج ایرانی، گوجه کبابی و کره زعفرانی' },
  { id: 5, name: 'سالاد سزار گریل', category: 'سالاد', tags: ['سالاد', 'سبک', 'مرغ', 'پروتئینی', 'پروتئین', 'رژیمی', 'سالم'], price: 315, rating: 4.6, time: '۱۰ دقیقه', image: '/assets/demo/photo-1546793665-c74683f339c1.jpg', description: 'کاهو ترد، مرغ گریل، پارمزان و سس سزار خانگی' },
  { id: 6, name: 'صبحانه آرمان', category: 'صبحانه', tags: ['صبحانه', 'تخم‌مرغ', 'سبک', 'رژیمی', 'بدون گوشت', 'سالم'], price: 285, rating: 4.8, time: '۸ دقیقه', image: '/assets/demo/photo-1533089860892-a7c6f0a88666.jpg', description: 'تخم‌مرغ، نان خمیرترش، آووکادو، پنیر و سبزی تازه', vegetarian: true },
  { id: 7, name: 'چیزکیک پسته', category: 'دسر', tags: ['دسر', 'پسته', 'شیرین', 'خاص', 'کیک'], price: 245, rating: 4.9, time: '۵ دقیقه', image: '/assets/demo/photo-1565958011703-44f9829ba187.jpg', description: 'چیزکیک خامه‌ای با کرم پسته و پسته برشته', popular: true, vegetarian: true },
  { id: 8, name: 'لاته وانیل', category: 'نوشیدنی گرم', tags: ['نوشیدنی', 'قهوه', 'شیرین', 'گرم', 'کافه'], price: 185, rating: 4.7, time: '۵ دقیقه', image: '/assets/demo/photo-1541167760496-1628856ab772.jpg', description: 'اسپرسو، شیر بخار داده‌شده و وانیل طبیعی' },
  { id: 9, name: 'پیتزا ترافل', category: 'پیتزا', tags: ['پیتزا', 'خاص', 'ترافل', 'دو نفره', 'لاکچری', 'سالم', 'بدون گوشت'], price: 690, rating: 4.9, time: '۲۰ دقیقه', image: '/assets/demo/photo-1579751626657-72bc17010498.jpg', description: 'موزارلا، قارچ، روغن ترافل و پارمزان کهنه', popular: true, vegetarian: true },
  { id: 10, name: 'براونی شکلات تلخ', category: 'دسر', tags: ['دسر', 'شکلات', 'شیرین', 'کیک', 'گرم'], price: 210, rating: 4.6, time: '۵ دقیقه', image: '/assets/demo/photo-1606313564200-e75d5e30476c.jpg', description: 'براونی شکلات تلخ با مغز گردو و بستنی وانیلی' },
  { id: 11, name: 'کاپوچینو', category: 'نوشیدنی گرم', tags: ['نوشیدنی', 'قهوه', 'صبحانه', 'گرم'], price: 165, rating: 4.8, time: '۴ دقیقه', image: '/assets/demo/photo-1534778101976-62847782c213.jpg', description: 'اسپرسوی دو شات با فوم شیر مخملی' },
  { id: 12, name: 'بشقاب مزه ایرانی', category: 'غذای ایرانی', tags: ['ایرانی', 'دو نفره', 'خاص', 'اشتراکی', 'بدون گوشت', 'اقتصادی', 'سنتی'], price: 575, rating: 4.8, time: '۱۵ دقیقه', image: '/assets/demo/photo-1547592180-85f173990554.jpg', description: 'ترکیبی از کشک بادمجان، میرزا قاسمی، زیتون و نان تازه', vegetarian: true },
  { id: 13, name: 'مرغ سوخاری اسپایسی', category: 'فست فود', tags: ['تند', 'مرغ', 'سوخاری', 'پرسی', 'سیرکننده', 'فست فود'], price: 380, rating: 4.7, time: '۱۵ دقیقه', image: '/assets/demo/photo-1626082927389-6cd097cdc6ec.jpg', description: 'تکه‌های مرغ سوخاری با ادویه‌های تند مخصوص، سیب زمینی سرخ کرده', spicy: true },
  { id: 14, name: 'موخیتو کلاسیک', category: 'نوشیدنی سرد', tags: ['نوشیدنی', 'سرد', 'ترش', 'سبک', 'خنک'], price: 150, rating: 4.6, time: '۳ دقیقه', image: '/assets/demo/photo-1551538827-9c037cb4f32a.jpg', description: 'لیمو ترش تازه، نعناع، شکر و آب گازدار' },
  { id: 15, name: 'سیب‌زمینی سرخ‌کرده پنیری', category: 'پیشنهاد امروز', tags: ['اقتصادی', 'اشتراکی', 'بدون گوشت', 'فست فود', 'پنیری'], price: 220, rating: 4.5, time: '۱۰ دقیقه', image: '/assets/demo/photo-1576107232684-1279f390859f.jpg', description: 'سیب زمینی سرخ کرده با پنیر چدار آب شده و بیکن', popular: true },
  { id: 16, name: 'پاستا پستو با مرغ گریل', category: 'پاستا', tags: ['پاستا', 'ایتالیایی', 'پروتئین', 'سالم', 'مرغ'], price: 440, rating: 4.8, time: '۱۶ دقیقه', image: '/assets/demo/photo-1555949258-eb67b1ef0ceb.jpg', description: 'پنه با سس پستو ریحان خانگی، مرغ گریل شده و گوجه گیلاسی' },
  { id: 17, name: 'کباب کوبیده زعفرانی', category: 'غذای ایرانی', tags: ['ایرانی', 'کباب', 'گوشت', 'پرسی', 'برنجی', 'سنتی', 'سیرکننده'], price: 580, rating: 4.9, time: '۲۵ دقیقه', image: '/assets/demo/photo-1544025162-d76694265947.jpg', description: 'دو سیخ کباب کوبیده گوسفندی، گوجه کبابی، برنج دودی اعلا', popular: true },
  { id: 18, name: 'سالاد کینوا و آووکادو', category: 'سالاد', tags: ['سالاد', 'رژیمی', 'بدون گوشت', 'سبک', 'سالم', 'گیاهی'], price: 340, rating: 4.7, time: '۸ دقیقه', image: '/assets/demo/photo-1512621776951-a57141f2eefd.jpg', description: 'کینوا، آووکادو تازه، گوجه گیلاسی، ذرت و سس لیمو', vegetarian: true },
  { id: 19, name: 'میگوی سوخاری', category: 'دریایی', tags: ['دریایی', 'سوخاری', 'پروتئین', 'لوکس', 'خاص'], price: 620, rating: 4.8, time: '۲۰ دقیقه', image: '/assets/demo/photo-1563379926898-05f4575a45d8.jpg', description: 'میگوی تازه سوخاری شده با سس تارتار و لیمو' },
  { id: 20, name: 'اسموتی استوایی', category: 'نوشیدنی سرد', tags: ['نوشیدنی', 'سرد', 'شیرین', 'خنک', 'میوه'], price: 190, rating: 4.6, time: '۵ دقیقه', image: '/assets/demo/photo-1505252585461-04db1eb84625.jpg', description: 'ترکیب انبه، آناناس، موز و شیر نارگیل' },
  { id: 21, name: 'پیتزا پپرونی تند', category: 'پیتزا', tags: ['پیتزا', 'تند', 'گوشت', 'فست فود'], price: 480, rating: 4.8, time: '۱۵ دقیقه', image: '/assets/demo/photo-1628840042765-356cda07504e.jpg', description: 'سس گوجه تند، پپرونی، هالوپینو و موزارلا', spicy: true },
  { id: 22, name: 'املت اسفناج و قارچ', category: 'صبحانه', tags: ['صبحانه', 'تخم‌مرغ', 'گیاهی', 'بدون گوشت', 'سالم', 'پروتئین'], price: 230, rating: 4.5, time: '۱۰ دقیقه', image: '/assets/demo/photo-1540189549336-e6e99c3679fe.jpg', description: 'تخم‌مرغ، اسفناج تازه، قارچ و پنیر فتا', vegetarian: true },
  { id: 23, name: 'استیک ریب‌آی', category: 'فرنگی', tags: ['فرنگی', 'گوشت', 'پروتئین', 'لوکس', 'خاص', 'سیرکننده', 'لاکچری'], price: 1200, rating: 4.9, time: '۳۰ دقیقه', image: '/assets/demo/photo-1558030006-450675393462.jpg', description: 'استیک گوشت گوساله ۴۰۰ گرمی با سس قارچ و پوره سیب‌زمینی' },
  { id: 24, name: 'ساندویچ مرغ پستو', category: 'ساندویچ', tags: ['ساندویچ', 'نونی', 'مرغ', 'پروتئین', 'سبک'], price: 320, rating: 4.7, time: '۱۲ دقیقه', image: '/assets/demo/photo-1628191010210-a59de33e5941.jpg', description: 'سینه مرغ گریل، سس پستو، گوجه خشک و پنیر گودا در نان چاباتا' },
  { id: 25, name: 'چای ماسالا', category: 'نوشیدنی گرم', tags: ['نوشیدنی', 'گرم', 'تند', 'شیرین', 'زمستانی'], price: 170, rating: 4.8, time: '۵ دقیقه', image: '/assets/demo/photo-1576092768241-dec231879fc3.jpg', description: 'چای سیاه دم‌کرده با ادویه‌های گرم هندی و شیر' },
  { id: 26, name: 'باقلوا استانبولی با بستنی', category: 'دسر', tags: ['دسر', 'شیرین', 'سنتی', 'خاص'], price: 280, rating: 4.9, time: '۵ دقیقه', image: '/assets/demo/photo-1599321955726-e048426594af.jpg', description: 'باقلوای تازه پسته‌ای همراه با یک اسکوپ بستنی وانیلی', popular: true }
]

const query = ref('')
const category = ref('همه')
const activeMood = ref('')
const selectedQuickFilters = ref<string[]>([])
const priceMax = ref(1500)
const sort = ref('match')
const selected = ref<Item | null>(null)
const searchFocused = ref(false)
const showAll = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 36
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const normalized = (value: string) => value.toLocaleLowerCase('fa-IR').replace(/ي/g, 'ی').replace(/ك/g, 'ک')

const smartTags = computed(() => {
  const q = normalized(query.value.trim())
  if (!q) return []
  const suggestions: string[] = []
  if (/سبک|کم|رژیم|سالم/.test(q)) suggestions.push('سبک', 'رژیمی')
  if (/گرسنه|سیر|زیاد|بزرگ/.test(q)) suggestions.push('سیرکننده', 'پرسی')
  if (/شیرین|شکلات|دسر/.test(q)) suggestions.push('شیرین')
  if (/قهوه|کافه|صبح/.test(q)) suggestions.push('قهوه')
  if (/دو نفر|دونفر|اشتراک/.test(q)) suggestions.push('دو نفره')
  if (/خاص|لاکچری|متفاوت/.test(q)) suggestions.push('خاص', 'لاکچری')
  if (/گوشت|برگر/.test(q) && !/بدون/.test(q)) suggestions.push('گوشت')
  if (/بدون گوشت|گیاه|وجی/.test(q)) suggestions.push('بدون گوشت', 'گیاهی')
  if (/تند|فلفل|اسپایس/.test(q)) suggestions.push('تند')
  if (/دریایی|ماهی|میگو/.test(q)) suggestions.push('دریایی')
  if (/نون|ساندویچ/.test(q)) suggestions.push('نونی', 'ساندویچ')
  if (/سنتی|کباب|خورشت/.test(q)) suggestions.push('سنتی', 'ایرانی')
  if (/پنیری|پنیر/.test(q)) suggestions.push('پنیری')
  if (/نوشیدنی|اب|آب/.test(q)) suggestions.push('نوشیدنی')
  if (/ارزان|اقتصاد|تخفیف/.test(q)) suggestions.push('اقتصادی')
  return [...new Set(suggestions)]
})

const scored = computed(() => {
  const q = normalized(query.value.trim())
  const moodTags = moods.find(m => m.label === activeMood.value)?.tags ?? []
  
  return items
    .map(item => {
      let score = 0
      const haystack = normalized([item.name, item.category, item.description, ...item.tags].join(' '))
      
      // Strict filters
      if (category.value !== 'همه' && item.category !== category.value && !(category.value === 'پیشنهاد امروز' && item.popular)) return { item, score: -999 }
      if (item.price > priceMax.value) return { item, score: -999 }
      
      // If quick filters selected, must match ALL quick filters
      let failsQuickFilter = false
      selectedQuickFilters.value.forEach(qf => {
        if (!item.tags.includes(qf) && !haystack.includes(normalized(qf))) {
           if(qf === 'بدون گوشت' && item.vegetarian) score += 15
           else if(qf === 'تند' && item.spicy) score += 15
           else failsQuickFilter = true
        } else {
           score += 15
        }
      })
      if (failsQuickFilter) return { item, score: -999 }

      // Scoring
      if (category.value === 'پیشنهاد امروز' && item.popular) score += 20
      moodTags.forEach(tag => { if (item.tags.includes(tag) || item.category === tag) score += 15 })
      smartTags.value.forEach(tag => { if (item.tags.includes(tag)) score += 20 })
      
      if (q) {
        q.split(/\s+/).filter(Boolean).forEach(word => { 
          if (haystack.includes(word)) {
            score += item.name.toLocaleLowerCase().includes(word) ? 25 : 10 
          }
        })
      }
      
      score += item.rating * 2
      if (!q && !activeMood.value && selectedQuickFilters.value.length === 0) score += item.popular ? 8 : 0
      
      // Penalty if searched but didn't hit text or tags well
      if ((q || activeMood.value || selectedQuickFilters.value.length > 0) && score < 10) return { item, score: -999 }

      return { item, score }
    })
    .filter(x => x.score > -999)
    .sort((a, b) => sort.value === 'price' ? a.item.price - b.item.price : sort.value === 'rating' ? b.item.rating - a.item.rating : b.score - a.score)
})

const results = computed(() => showAll.value ? scored.value : scored.value.slice(0, 8))
const resultLabel = computed(() => {
  if (query.value || activeMood.value || selectedQuickFilters.value.length > 0) {
    if (scored.value.length === 0) return 'متاسفانه آیتمی با این ویژگی‌ها پیدا نشد!'
    return `${scored.value.length} انتخاب نزدیک به سلیقه‌ات`
  }
  return 'پیشنهادهای محبوب امروز'
})

function chooseMood(mood: typeof moods[number]) {
  if (activeMood.value === mood.label) {
    activeMood.value = ''
  } else {
    activeMood.value = mood.label
  }
  searchFocused.value = false
}

function toggleQuickFilter(f: string) {
  if (selectedQuickFilters.value.includes(f)) {
    selectedQuickFilters.value = selectedQuickFilters.value.filter(x => x !== f)
  } else {
    selectedQuickFilters.value.push(f)
  }
}

function clearSearch() {
  query.value = ''
  activeMood.value = ''
  category.value = 'همه'
  selectedQuickFilters.value = []
}

function scrollToMenu() {
  document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
}

watch(query, () => { if (query.value) category.value = 'همه' })
</script>

<template>
  <div dir="rtl" class="cafe-demo">
    <div class="demo-bar"><span>نمونه طراحی سایت رستوران و کافه</span><NuxtLink to="/services">مشاهده خدمات FADAKAR ←</NuxtLink></div>

    <header class="header" :class="{ 'header-scrolled': isScrolled }">
      <NuxtLink to="/services" class="logo">ARMA<span>N</span></NuxtLink>
      <nav><button @click="scrollToMenu">منو</button><button @click="document.querySelector('#story')?.scrollIntoView({behavior:'smooth'})">داستان ما</button><button @click="document.querySelector('#reserve')?.scrollIntoView({behavior:'smooth'})">رزرو میز</button></nav>
      <button class="header-cta" @click="scrollToMenu">چی میلته؟ <span>↗</span></button>
    </header>

    <main>
      <section class="hero">
        <div class="hero-image">
          <img src="/assets/demo/photo-1517248135467-4c7edcad34c4.jpg" alt="restaurant">
        </div>
        <div class="hero-overlay"></div>
        <div class="hero-content glass-hero">
          <p class="eyebrow">رستوران · کافه · تهران</p>
          <h1 style="font-size: 4rem;">طعم‌ها رو تصور کن؛<br><i>ما بهترینشو</i><br>برات میاریم...</h1>
          <p>منوی هوشمند آرمان، سلیقه و هوسِ لحظه‌ایِ تورو درک می‌کنه. به جای گشتن بین ده‌ها گزینه، فقط بگو چه حسی داری تا دقیق‌ترین پیشنهادها رو ببینی.</p>
          <button class="hero-search" @click="scrollToMenu"><span>⌕</span><b>مثلاً: «یه کباب دو نفره» یا «پاستای گیاهی»</b><em>↘</em></button>
          <div class="hero-meta"><span>۴.۹ ★ از ۲٬۸۴۰ تجربه</span><span>امروز ۱۲ تا ۲۳:۳۰</span><span>تهران، نیاوران</span></div>
        </div>
        <div class="hero-side">SCROLL<br><span>↓</span></div>
      </section>

      <section id="menu" class="discovery">
        <div class="discovery-head">
          <div><p class="eyebrow dark">منوی هوشمند</p><h2>بذار انتخابتو <i>آسون کنیم.</i></h2></div>
          <p>این جست‌وجو فقط اسم غذا رو پیدا نمی‌کنه؛ منظور تو رو می‌فهمه، گزینه‌های نامرتبط رو کنار میزاره و انتخاب‌ها رو بر اساس چیزی که گفتی مرتب می‌کنه.</p>
        </div>

        <div class="ai-search" :class="{ focused: searchFocused || query }">
          <span class="search-icon">⌕</span>
          <input v-model="query" @focus="searchFocused = true" @blur="searchFocused = false" placeholder="هرچی که میخوای رو جستجو کن..." aria-label="جستجوی هوشمند منو">
          <button v-if="query || activeMood || selectedQuickFilters.length" class="clear" @click="clearSearch">×</button>
          <span class="ai-badge">AI POWERED</span>
        </div>

        <div class="search-suggestions" v-if="query && smartTags.length">
          <span>هوش مصنوعی متوجه شد:</span>
          <span class="smart-tag" v-for="tag in smartTags" :key="tag">✓ {{ tag }}</span>
        </div>

        <div class="quick-filters">
           <button v-for="f in quickFilters" :key="f" :class="{ active: selectedQuickFilters.includes(f) }" @click="toggleQuickFilter(f)">{{ f }}</button>
        </div>

        <div class="intent-row">
          <button v-for="mood in moods" :key="mood.label" :class="{ active: activeMood === mood.label }" @click="chooseMood(mood)"><b>{{ mood.icon }}</b>{{ mood.label }}</button>
        </div>

        <div class="filters">
          <div class="category-scroll"><button v-for="c in categories" :key="c" :class="{ active: category === c }" @click="category = c">{{ c }}</button></div>
          <div class="advanced"><label class="price">محدوده قیمت تا {{ priceMax.toLocaleString('fa-IR') }} هزار <input v-model="priceMax" type="range" min="150" max="1500" step="25"></label><select v-model="sort"><option value="match">مرتبط‌ترین با سلیقه من</option><option value="rating">بیشترین امتیاز</option><option value="price">ارزان‌ترین</option></select></div>
        </div>

        <div class="result-line"><span>{{ resultLabel }}</span><small v-if="query || activeMood || selectedQuickFilters.length">بر اساس انتخاب‌های تو مرتب شده</small></div>

        <div class="menu-grid">
          <article v-for="result in results" :key="result.item.id" class="food-card" @click="selected = result.item">
            <div class="food-image"><img :src="result.item.image" :alt="result.item.name" loading="lazy"><span v-if="result.item.popular">محبوب</span><button aria-label="افزودن به علاقه‌مندی" @click.stop>♡</button></div>
            <div class="food-info"><div class="food-title"><h3>{{ result.item.name }}</h3><b>{{ result.item.price.toLocaleString('fa-IR') }}<small> هزار</small></b></div><p>{{ result.item.description }}</p><div class="food-foot"><span>★ {{ result.item.rating }}</span><span>{{ result.item.time }}</span><em v-if="result.score > 35">پیشنهاد هوش مصنوعی</em></div></div>
          </article>
        </div>
        <button v-if="scored.length > 8 && !showAll" class="load-more" @click="showAll = true">نمایش همه انتخاب‌ها <span>↓</span></button>
      </section>

      <section id="story" class="story">
        <div class="story-photo">
          <img src="/assets/demo/photo-1552566626-52f8b828add9.jpg" alt="cafe">
        </div>
        <div class="story-copy"><p class="eyebrow dark">چیزی بیشتر از یک منو</p><h2>هر غذا، یک <i>دلیل</i> دارد.</h2><p>آرمان از آشپزخانه‌ای شروع شد که قرار نبود فقط غذا بفروشد. مواد اولیه هر روز انتخاب می‌شوند، منو بر اساس فصل تغییر می‌کند و هر آیتم یک داستان کوتاه پشت خودش دارد.</p><div class="story-stats"><div><b>۱۲</b><span>سال تجربه</span></div><div><b>۳۸</b><span>آیتم منو</span></div><div><b>۲٬۸۴۰</b><span>نظر ثبت‌شده</span></div></div><button @click="scrollToMenu">منو را کشف کن ↗</button></div>
      </section>

      <section id="reserve" class="reserve">
        <div><p class="eyebrow">میزت منتظر توست</p><h2>برای امشب،<br><i>جایت را نگه داریم؟</i></h2><p>تاریخ، ساعت و تعداد نفرات را انتخاب کن. بدون تماس تلفنی، در چند ثانیه میزت رزرو می‌شود.</p></div>
        <div class="reserve-box"><label>تعداد نفرات <select><option>۲ نفر</option><option>۳ نفر</option><option>۴ نفر</option><option>۵+ نفر</option></select></label><label>زمان <select><option>۲۰:۰۰</option><option>۲۰:۳۰</option><option>۲۱:۰۰</option><option>۲۱:۳۰</option></select></label><button>رزرو میز ↗</button></div>
      </section>
    </main>

    <footer><NuxtLink to="/services" class="logo">ARMA<span>N</span></NuxtLink><span>یک تجربه خوب، از انتخاب درست شروع می‌شود.</span><span>© 2026</span></footer>

    <Transition name="modal"><div v-if="selected" class="modal-backdrop" @click.self="selected = null"><article class="modal"><button class="close" @click="selected = null">×</button><img :src="selected.image" :alt="selected.name"><div><p class="eyebrow dark">انتخاب شما</p><h2>{{ selected.name }}</h2><p>{{ selected.description }}</p><div class="modal-meta"><b>{{ selected.price.toLocaleString('fa-IR') }} هزار تومان</b><span>★ {{ selected.rating }}</span><span>{{ selected.time }}</span></div><button class="order">افزودن به سفارش ↗</button></div></article></div></Transition>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap');
:global(*){box-sizing:border-box}:global(body){margin:0;background:#f4f0e9;color:#191713;font-family:Vazirmatn,sans-serif}.cafe-demo{min-height:100vh;overflow:hidden}.demo-bar{height:36px;background:#15130f;color:#ddd8ce;display:flex;justify-content:center;gap:30px;align-items:center;font-size:11px}.demo-bar a{color:#d9a45e;text-decoration:none}
.header{position:fixed;z-index:50;top:36px;left:0;right:0;height:78px;display:flex;align-items:center;justify-content:space-between;padding:0 5vw;color:#fff;border-bottom:1px solid #ffffff28;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}
.header.header-scrolled{top:0;background:rgba(8,7,5,0.85);backdrop-filter:blur(16px);border-bottom-color:transparent;box-shadow:0 10px 30px rgba(0,0,0,0.15)}
.logo{font:700 27px Georgia,serif;letter-spacing:3px;color:inherit;text-decoration:none}.logo span{color:#d9a45e}.header nav{display:flex;gap:34px}.header nav button,.header-cta{background:none;border:0;color:inherit;font:inherit;cursor:pointer}.header-cta{border:1px solid #ffffff55;border-radius:100px;padding:10px 20px;transition:all 0.3s}.header-cta:hover{background:#ffffff15;border-color:#ffffff88}.header-cta span{color:#d9a45e}
.hero{min-height:calc(100vh - 36px);position:relative;color:#fff;display:flex;align-items:center}.hero-image,.hero-overlay{position:absolute;inset:0}.hero-image img{width:100%;height:100%;object-fit:cover}.grain{position:absolute;inset:0;opacity:.09;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E")}
.hero-overlay{background:linear-gradient(90deg,#080705f2 0%,#080705c9 45%,#08070550 100%)}
.hero-content{position:relative;z-index:2;width:min(720px,88%);margin-right:9vw;margin-top:5rem;text-shadow:0 2px 10px rgba(0,0,0,0.5)}
.glass-hero{background:rgba(20, 18, 15, 0.45);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.1);padding:50px;border-radius:2rem;box-shadow:0 25px 50px rgba(0,0,0,0.3)}
@media(max-width:600px){ .glass-hero{padding:30px 25px;border-radius:1.5rem} }
.eyebrow{font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#e7c38e;margin:0 0 22px}.eyebrow.dark{color:#9a7140}.hero h1{font-size:clamp(52px,7vw,105px);line-height:.95;margin:0 0 30px;font-weight:500;letter-spacing:-4px}.hero h1 i,h2 i{font-family:'Playfair Display',serif;color:#e3b879}.hero-content>p:not(.eyebrow){max-width:570px;line-height:2;font-size:15px;color:#e4dfd7}.hero-search{margin-top:28px;width:min(590px,100%);height:64px;border-radius:8px;border:1px solid #ffffff45;background:#ffffff15;backdrop-filter:blur(16px);display:flex;align-items:center;gap:15px;padding:0 20px;color:#fff;text-align:right;cursor:pointer;transition:all 0.3s;box-shadow:0 8px 30px rgba(0,0,0,0.2)}.hero-search:hover{background:#ffffff25;transform:translateY(-2px)}.hero-search span{font-size:26px}.hero-search b{font-weight:400;font-size:13px;flex:1;text-shadow:none}.hero-search em{color:#e3b879;font-size:22px}.hero-meta{display:flex;gap:25px;margin-top:25px;font-size:11px;color:#d2ccc1}.hero-side{position:absolute;left:4vw;bottom:45px;writing-mode:vertical-rl;font-size:9px;letter-spacing:4px;color:#ffffff80}.hero-side span{font-size:18px;color:#e3b879}
.discovery{padding:125px 7vw 110px;background:#f4f0e9}.discovery-head{display:flex;justify-content:space-between;align-items:end;gap:60px;margin-bottom:45px}.discovery-head h2,.story h2,.reserve h2{font-size:clamp(42px,5vw,72px);font-weight:500;line-height:1.05;letter-spacing:-2px;margin:0}.discovery-head>p{max-width:470px;color:#6f6a62;line-height:2;font-size:13px}
.ai-search{max-width:900px;height:74px;margin:0 auto 12px;background:#fff;border:1px solid #ded8ce;border-radius:15px;display:flex;align-items:center;padding:0 22px;gap:14px;transition:.25s;box-shadow:0 8px 30px #3327130b}.ai-search.focused{border-color:#bb8b52;box-shadow:0 10px 35px #8b5d2515}.search-icon{font-size:28px;color:#8e877b}.ai-search input{border:0;outline:0;background:none;flex:1;font:inherit;font-size:14px;color:#27231e}.ai-badge{font-size:9px;letter-spacing:1.5px;color:#fff;background:linear-gradient(45deg, #b07d43, #d9a45e);border-radius:100px;padding:7px 10px;font-weight:bold}.clear{border:0;background:#eee7dc;border-radius:50%;width:28px;height:28px;cursor:pointer;transition:all 0.2s}.clear:hover{background:#e3dacc}
.search-suggestions{max-width:900px;margin:0 auto 18px;display:flex;gap:8px;align-items:center;font-size:11px;color:#7c7569}.smart-tag{background:#e8f4e5;color:#2e6a1e;padding:4px 8px;border-radius:6px;font-weight:600}
.quick-filters{max-width:900px;margin:0 auto 20px;display:flex;gap:8px;flex-wrap:wrap;justify-content:center}.quick-filters button{border:1px solid #dcd5ca;background:#fff;border-radius:100px;padding:8px 14px;font:inherit;font-size:11px;color:#6f6a62;cursor:pointer;transition:all 0.2s}.quick-filters button:hover{border-color:#b4a999;background:#faf7f2}.quick-filters button.active{background:#4b443c;color:#fff;border-color:#4b443c}
.intent-row{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin:10px 0 45px}.intent-row button{border:1px solid #ddd5ca;background:#fffaf4;border-radius:100px;padding:11px 17px;cursor:pointer;color:#575047;font:inherit;font-size:12px;transition:.2s}.intent-row button:hover,.intent-row button.active{background:#201d18;color:#fff;border-color:#201d18;transform:translateY(-2px)}.intent-row b{margin-left:7px;color:#c38b4d}
.filters{border-top:1px solid #dcd5ca;border-bottom:1px solid #dcd5ca;padding:16px 0;display:flex;gap:20px;justify-content:space-between;align-items:center}.category-scroll{display:flex;gap:22px;overflow:auto;scrollbar-width:none}.category-scroll button{border:0;background:none;white-space:nowrap;padding:8px 0;color:#81796e;cursor:pointer;font:inherit;font-size:12px;transition:all 0.2s}.category-scroll button.active{color:#17140f;font-weight:700;border-bottom:2px solid #bb8245}.advanced{display:flex;gap:14px;align-items:center;white-space:nowrap;font-size:11px}.advanced label{display:flex;gap:7px;align-items:center}.price{color:#696158}.price input{width:75px}.advanced select{border:1px solid #d7d0c6;background:#fffaf4;border-radius:8px;padding:8px;font:inherit;font-size:11px;cursor:pointer;outline:none}
.result-line{display:flex;align-items:center;gap:14px;margin:32px 0 18px}.result-line span{font-size:13px;font-weight:700}.result-line small{font-size:10px;color:#a1784d}
.menu-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}.food-card{background:#fff;border:1px solid #e4ddd3;border-radius:12px;overflow:hidden;cursor:pointer;transition:.3s}.food-card:hover{transform:translateY(-7px);box-shadow:0 20px 45px #2c21120e}.food-image{height:235px;position:relative;overflow:hidden}.food-image img{width:100%;height:100%;object-fit:cover;transition:.5s}.food-card:hover .food-image img{transform:scale(1.06)}.food-image>span{position:absolute;top:12px;right:12px;background:#191713;color:#fff;border-radius:100px;padding:6px 10px;font-size:9px}.food-image button{position:absolute;top:11px;left:11px;border:0;background:#fffdf9d9;border-radius:50%;width:34px;height:34px;font-size:20px;cursor:pointer}.food-info{padding:17px}.food-title{display:flex;justify-content:space-between;gap:10px;align-items:start}.food-title h3{margin:0;font-size:14px}.food-title>b{font-size:13px;white-space:nowrap}.food-title small{font-size:8px;font-weight:400}.food-info p{color:#81796e;font-size:10px;line-height:1.9;min-height:39px}.food-foot{display:flex;align-items:center;gap:10px;font-size:9px;color:#8c8478;border-top:1px solid #eee8df;padding-top:11px}.food-foot span:first-child{color:#a6753e}.food-foot em{font-style:normal;color:#9c7142;margin-right:auto;background:#fff7ec;padding:3px 6px;border-radius:4px}.load-more{display:block;margin:40px auto 0;border:1px solid #2a251e;background:none;border-radius:100px;padding:13px 25px;font:inherit;font-size:11px;cursor:pointer;transition:all 0.3s}.load-more:hover{background:#1a1713;color:#fff}
.story{display:grid;grid-template-columns:1fr 1fr;background:#1b1915;color:#fff;min-height:650px}.story-photo img{width:100%;height:100%;min-height:500px;object-fit:cover;filter:saturate(.75)}.story-copy{padding:100px 8vw;display:flex;flex-direction:column;justify-content:center}.story-copy>p:not(.eyebrow){color:#bbb4a9;line-height:2;font-size:13px;max-width:500px}.story-stats{display:flex;gap:45px;margin:35px 0}.story-stats div{display:flex;flex-direction:column}.story-stats b{font:600 29px Georgia,serif;color:#dfb77c}.story-stats span{font-size:9px;color:#918b81;margin-top:5px}.story-copy button{align-self:flex-start;border:1px solid #ffffff55;background:none;color:#fff;border-radius:100px;padding:12px 22px;font:inherit;font-size:11px;cursor:pointer;transition:all 0.3s}.story-copy button:hover{background:#fff;color:#1b1915}
.reserve{padding:100px 8vw;background:#cda16b;display:flex;justify-content:space-between;gap:60px;align-items:center}.reserve .eyebrow{color:#4d3822}.reserve h2 i{color:#fff8e9}.reserve>div>p:last-child{max-width:500px;color:#604a32;font-size:12px;line-height:2}.reserve-box{background:#fffaf4;padding:20px;border-radius:14px;display:flex;gap:10px;min-width:480px;box-shadow:0 15px 40px rgba(0,0,0,0.1)}.reserve-box label{font-size:9px;color:#777;display:flex;flex-direction:column;gap:5px;flex:1}.reserve-box select{border:1px solid #ddd3c6;border-radius:8px;background:#fff;padding:11px;font:inherit;font-size:11px;cursor:pointer;outline:none}.reserve-box select:focus{border-color:#b58a55}.reserve-box button{border:0;background:#1c1915;color:#fff;border-radius:8px;padding:0 22px;font:inherit;font-size:11px;cursor:pointer;transition:all 0.3s}.reserve-box button:hover{background:#302b23}
footer{background:#15130f;color:#aaa69e;padding:35px 7vw;display:flex;align-items:center;justify-content:space-between;font-size:10px}.modal-backdrop{position:fixed;z-index:100;inset:0;background:#090806b8;backdrop-filter:blur(10px);display:grid;place-items:center;padding:20px}.modal{background:#f8f4ed;max-width:800px;width:100%;border-radius:18px;overflow:hidden;display:grid;grid-template-columns:1fr 1fr;position:relative;box-shadow:0 30px 60px rgba(0,0,0,0.3)}.modal>img{width:100%;height:100%;min-height:380px;object-fit:cover}.modal>div{padding:45px 35px}.modal h2{font-size:30px;margin:0 0 15px}.modal p:not(.eyebrow){font-size:12px;line-height:2;color:#756d63}.close{position:absolute;top:12px;left:12px;z-index:2;width:35px;height:35px;border:0;border-radius:50%;background:#ffffffdd;font-size:22px;cursor:pointer;transition:all 0.2s}.close:hover{background:#fff;transform:scale(1.1)}.modal-meta{display:flex;gap:12px;align-items:center;border-top:1px solid #ddd4c7;padding-top:20px;font-size:10px}.modal-meta b{margin-left:auto}.order{width:100%;margin-top:25px;padding:13px;border:0;border-radius:8px;background:#1b1915;color:#fff;font:inherit;font-size:11px;cursor:pointer;transition:all 0.3s}.order:hover{background:#363028}.modal-enter-active,.modal-leave-active{transition:all .3s cubic-bezier(0.4, 0, 0.2, 1)}.modal-enter-from,.modal-leave-to{opacity:0;transform:scale(0.95)}
@media(max-width:900px){.header nav{display:none}.hero-content{margin-right:7vw}.hero h1{font-size:55px}.discovery-head,.reserve{flex-direction:column;align-items:flex-start}.menu-grid{grid-template-columns:repeat(2,1fr)}.filters{align-items:flex-start;flex-direction:column}.advanced{flex-wrap:wrap}.story{grid-template-columns:1fr}.story-photo img{max-height:430px}.reserve-box{min-width:0;width:100%}}
@media(max-width:600px){.demo-bar{font-size:9px;gap:12px}.header{padding:0 5vw}.header-cta{padding:8px 12px;font-size:10px}.hero{min-height:750px}.hero-content{width:88%;margin:0 auto;padding-top:70px}.hero h1{font-size:48px;letter-spacing:-2px}.hero-search b{font-size:10px}.hero-meta{flex-wrap:wrap;gap:10px}.hero-side{display:none}.discovery{padding:75px 5vw}.discovery-head h2,.story h2,.reserve h2{font-size:43px}.discovery-head{gap:20px}.ai-search{height:62px}.ai-badge{display:none}.intent-row{justify-content:flex-start;overflow:auto;flex-wrap:nowrap;padding-bottom:5px}.menu-grid{grid-template-columns:1fr;gap:16px}.food-image{height:260px}.story-copy{padding:70px 7vw}.reserve{padding:70px 7vw}.reserve-box{flex-direction:column}.reserve-box button{height:45px}footer{flex-direction:column;gap:15px}.modal{grid-template-columns:1fr}.modal>img{height:230px;min-height:0}.modal>div{padding:25px}}
</style>
