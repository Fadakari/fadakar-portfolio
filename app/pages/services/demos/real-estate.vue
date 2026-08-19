<script setup lang="ts">
import { computed, ref } from 'vue'

useSeoMeta({
  title: 'دموی سایت املاک و مستغلات | FADAKAR',
  description: 'نمونه طراحی سایت املاک ایرانی با جست‌وجوی هوشمند، فایلینگ اختصاصی، مقایسه ملک و ثبت درخواست خرید، رهن و اجاره.'
})

type Property = {
  id: number
  code: string
  title: string
  area: string
  district: string
  city: string
  deal: 'خرید' | 'رهن و اجاره'
  type: string
  price: number
  deposit?: number
  rent?: number
  size: number
  rooms: number
  year: number
  floor: string
  features: string[]
  image: string
  updated: string
  verified?: boolean
  exclusive?: boolean
  description: string
}

const properties: Property[] = [
  { id: 1, code: 'A-2841', title: 'آپارتمان نوساز و خوش‌نقشه', area: 'فرمانیه', district: 'منطقه ۱', city: 'تهران', deal: 'خرید', type: 'آپارتمان', price: 48500000000, size: 128, rooms: 2, year: 1404, floor: 'طبقه ۵ از ۷', features: ['پارکینگ', 'آسانسور', 'انباری', 'بالکن'], image: '/assets/demo/photo-1486406146926-c627a92ad1ab.avif', updated: 'امروز، ۰۹:۴۲', verified: true, exclusive: true, description: 'واحد دوخوابه با نورگیری عالی، لابی شیک و دسترسی سریع به خیابان‌های اصلی منطقه.' },
  { id: 2, code: 'A-2718', title: 'واحد مدرن با ویوی باز', area: 'نیاوران', district: 'منطقه ۱', city: 'تهران', deal: 'خرید', type: 'آپارتمان', price: 62900000000, size: 156, rooms: 3, year: 1402, floor: 'طبقه ۸ از ۱۰', features: ['پارکینگ', 'آسانسور', 'لابی', 'روف‌گاردن'], image: '/assets/demo/photo-1503387762-592deb58ef4e.avif', updated: 'امروز، ۰۸:۱۵', verified: true, description: 'سه‌خوابه خوش‌ساخت با چشم‌انداز باز، سالن بزرگ و امکانات کامل ساختمان.' },
  { id: 3, code: 'R-9132', title: 'رهن کامل، نورگیر و آرام', area: 'پاسداران', district: 'منطقه ۴', city: 'تهران', deal: 'رهن و اجاره', deposit: 1800000000, rent: 0, size: 105, rooms: 2, year: 1399, floor: 'طبقه ۳ از ۵', features: ['پارکینگ', 'آسانسور', 'انباری'], image: '/assets/demo/photo-1508450859948-4e04fabaa4ea.avif', updated: '۲ ساعت پیش', verified: true, description: 'رهن کامل یک واحد دوخوابه در ساختمان کم‌واحد، مناسب خانواده و دارای پارکینگ.' },
  { id: 4, code: 'R-9064', title: 'آپارتمان دوخوابه برای خانواده', area: 'سعادت‌آباد', district: 'منطقه ۲', city: 'تهران', deal: 'رهن و اجاره', deposit: 900000000, rent: 35000000, size: 118, rooms: 2, year: 1400, floor: 'طبقه ۴ از ۶', features: ['پارکینگ', 'آسانسور', 'بالکن', 'انباری'], image: '/assets/demo/photo-1504307651254-35680f356dfd.avif', updated: 'امروز، ۰۷:۵۸', verified: true, description: 'واحد تمیز و آماده سکونت در کوچه‌ای آرام با دسترسی مناسب به بلوار اصلی.' },
  { id: 5, code: 'A-2650', title: 'پنت‌هاوس مینیمال با تراس بزرگ', area: 'زعفرانیه', district: 'منطقه ۱', city: 'تهران', deal: 'خرید', type: 'پنت‌هاوس', price: 118000000000, size: 235, rooms: 3, year: 1403, floor: 'طبقه ۱۰', features: ['پارکینگ', 'آسانسور', 'تراس', 'روف‌گاردن'], image: '/assets/demo/photo-1486406146926-c627a92ad1ab.avif', updated: 'دیروز، ۱۸:۲۰', verified: true, exclusive: true, description: 'ملک شاخص با تراس قابل استفاده، نور طبیعی فراوان و مشاعات ممتاز.' },
  { id: 6, code: 'R-8920', title: 'واحد جمع‌وجور نزدیک مترو', area: 'یوسف‌آباد', district: 'منطقه ۶', city: 'تهران', deal: 'رهن و اجاره', deposit: 450000000, rent: 18000000, size: 72, rooms: 1, year: 1398, floor: 'طبقه ۲ از ۴', features: ['آسانسور', 'انباری'], image: '/assets/demo/photo-1508450859948-4e04fabaa4ea.avif', updated: 'امروز، ۰۶:۴۳', description: 'گزینه اقتصادی و خوش‌دسترسی برای یک یا دو نفر، نزدیک ایستگاه مترو و خدمات روزمره.' },
  { id: 7, code: 'A-2514', title: 'ویلای مدرن شهرک غرب', area: 'شهرک غرب', district: 'منطقه ۲', city: 'تهران', deal: 'خرید', type: 'ویلا', price: 89000000000, size: 310, rooms: 4, year: 1401, floor: 'دو طبقه', features: ['پارکینگ', 'حیاط', 'تراس', 'استخر'], image: '/assets/demo/photo-1503387762-592deb58ef4e.avif', updated: '۲ روز پیش', verified: true, description: 'ویلای شهری با حیاط خصوصی، چهار اتاق خواب و فضای مناسب برای خانواده پرجمعیت.' },
  { id: 8, code: 'C-1842', title: 'دفتر اداری آماده بهره‌برداری', area: 'ونک', district: 'منطقه ۳', city: 'تهران', deal: 'خرید', type: 'اداری', price: 37200000000, size: 96, rooms: 3, year: 1397, floor: 'طبقه ۶ از ۸', features: ['پارکینگ', 'آسانسور', 'لابی'], image: '/assets/demo/photo-1504307651254-35680f356dfd.avif', updated: '۳ ساعت پیش', verified: true, description: 'دفتر سه‌اتاقه با دسترسی مناسب، لابی اداری و پارکینگ سندی.' },
]

const deals = ['همه', 'خرید', 'رهن و اجاره']
const types = ['همه', 'آپارتمان', 'پنت‌هاوس', 'ویلا', 'اداری']
const districts = ['همه مناطق', 'منطقه ۱', 'منطقه ۲', 'منطقه ۳', 'منطقه ۴', 'منطقه ۶']
const quickNeeds = ['پارکینگ', 'آسانسور', 'انباری', 'بالکن', 'نوساز', 'دوخوابه', 'سه‌خوابه']

const deal = ref('همه')
const district = ref('همه مناطق')
const type = ref('همه')
const query = ref('')
const budget = ref(120000000000)
const selectedNeeds = ref<string[]>([])
const selectedProperty = ref<Property | null>(null)
const compare = ref<Property[]>([])
const showRequest = ref(false)
const showAll = ref(false)
const requestDeal = ref('خرید')
const requestArea = ref('منطقه ۱')
const requestBudget = ref('تا ۵۰ میلیارد')
const scrolled = ref(false)

const normalize = (value: string) => value.toLocaleLowerCase('fa-IR').replace(/ي/g, 'ی').replace(/ك/g, 'ک')

const filtered = computed(() => {
  const q = normalize(query.value.trim())
  return properties.filter(property => {
    const haystack = normalize([property.title, property.area, property.district, property.type, property.description, ...property.features].join(' '))
    const dealMatch = deal.value === 'همه' || property.deal === deal.value
    const districtMatch = district.value === 'همه مناطق' || property.district === district.value
    const typeMatch = type.value === 'همه' || property.type === type.value
    const queryMatch = !q || haystack.includes(q)
    const budgetMatch = property.deal === 'خرید' ? property.price <= budget.value : (property.deposit ?? 0) <= Math.max(2000000000, budget.value / 30)
    const needsMatch = selectedNeeds.value.every(need => {
      if (need === 'دوخوابه') return property.rooms === 2
      if (need === 'سه‌خوابه') return property.rooms >= 3
      if (need === 'نوساز') return property.year >= 1402
      return property.features.includes(need)
    })
    return dealMatch && districtMatch && typeMatch && queryMatch && budgetMatch && needsMatch
  })
})

const visibleProperties = computed(() => showAll.value ? filtered.value : filtered.value.slice(0, 6))
const matchingCount = computed(() => filtered.value.length)

const formatMoney = (value: number) => {
  if (value >= 1000000000) return `${(value / 1000000000).toLocaleString('fa-IR', { maximumFractionDigits: 1 })} میلیارد`
  return `${(value / 1000000).toLocaleString('fa-IR')} میلیون`
}

const priceLabel = (property: Property) => {
  if (property.deal === 'خرید') return `${formatMoney(property.price)} تومان`
  if (!property.rent) return `رهن ${formatMoney(property.deposit ?? 0)}`
  return `رهن ${formatMoney(property.deposit ?? 0)} + ${formatMoney(property.rent)} اجاره`
}

const scrollTo = (selector: string) => document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })

const toggleNeed = (need: string) => {
  selectedNeeds.value = selectedNeeds.value.includes(need)
    ? selectedNeeds.value.filter(item => item !== need)
    : [...selectedNeeds.value, need]
}

const clearFilters = () => {
  deal.value = 'همه'
  district.value = 'همه مناطق'
  type.value = 'همه'
  query.value = ''
  selectedNeeds.value = []
  budget.value = 120000000000
}

const toggleCompare = (property: Property) => {
  if (compare.value.some(item => item.id === property.id)) {
    compare.value = compare.value.filter(item => item.id !== property.id)
    return
  }
  if (compare.value.length < 3) compare.value = [...compare.value, property]
}

const submitRequest = () => {
  showRequest.value = false
  requestDeal.value = 'خرید'
  requestArea.value = 'منطقه ۱'
  requestBudget.value = 'تا ۵۰ میلیارد'
}

if (import.meta.client) {
  window.addEventListener('scroll', () => { scrolled.value = window.scrollY > 40 })
}
</script>

<template>
  <div dir="rtl" class="estate-demo">
    <div class="demo-bar"><span>نمونه طراحی سایت املاک و مستغلات</span><NuxtLink to="/services">مشاهده خدمات FADAKAR ←</NuxtLink></div>

    <header class="header" :class="{ scrolled }">
      <NuxtLink to="/services" class="brand"><span>خانه</span>یار <small>املاک و مستغلات</small></NuxtLink>
      <nav><button @click="scrollTo('#listings')">فایل‌ها</button><button @click="scrollTo('#matching')">درخواست ملک</button><button @click="scrollTo('#process')">چطور کار می‌کند؟</button><button @click="scrollTo('#contact')">تماس با ما</button></nav>
      <button class="header-cta" @click="showRequest = true">ملک می‌خواهم <span>↗</span></button>
    </header>

    <main>
      <section class="hero">
        <div class="hero-bg"><img src="/assets/demo/photo-1486406146926-c627a92ad1ab.avif" alt="ساختمان مدرن"></div>
        <div class="hero-shade"></div>
        <div class="hero-content">
          <div class="eyebrow"><span></span> دفتر تخصصی املاک شمال تهران</div>
          <h1>ملک مناسب،<br><em>با اطلاعات درست</em><br>پیدا می‌شود.</h1>
          <p>فایل‌های واقعی و به‌روز را ببین، با چند فیلتر ملک مناسب خودت را پیدا کن و اگر گزینه‌ای مطابق خواسته‌ات نبود، درخواستت را ثبت کن تا مشاور برایت فایل مناسب پیدا کند.</p>
          <div class="hero-stats"><span><b>۲۴۰+</b> فایل فعال</span><span><b>۱۸ سال</b> تجربه</span><span><b>۴.۹</b> رضایت مشتری</span></div>
        </div>
        <div class="hero-search">
          <div class="deal-tabs"><button v-for="item in deals" :key="item" :class="{ active: deal === item }" @click="deal = item">{{ item }}</button></div>
          <div class="search-row">
            <label><small>محله یا کد فایل</small><div><span>⌕</span><input v-model="query" placeholder="مثلاً نیاوران یا A-2841"></div></label>
            <label><small>منطقه</small><select v-model="district"><option v-for="item in districts" :key="item">{{ item }}</option></select></label>
            <label><small>نوع ملک</small><select v-model="type"><option v-for="item in types" :key="item">{{ item }}</option></select></label>
            <button class="search-btn" @click="scrollTo('#listings')">جست‌وجوی فایل‌ها <span>←</span></button>
          </div>
          <div class="quick-needs"><span>امکانات:</span><button v-for="need in quickNeeds" :key="need" :class="{ active: selectedNeeds.includes(need) }" @click="toggleNeed(need)">{{ need }}</button></div>
        </div>
        <button class="scroll-hint" @click="scrollTo('#listings')">فایل‌های جدید <span>↓</span></button>
      </section>

      <section class="trust-row">
        <div><b>✓</b><span><strong>فایل تأییدشده</strong><small>اطلاعات و تصاویر توسط دفتر بررسی شده</small></span></div>
        <div><b>↻</b><span><strong>آخرین بروزرسانی مشخص</strong><small>می‌دانید هر فایل چه زمانی بررسی شده</small></span></div>
        <div><b>♢</b><span><strong>مشاوره قبل از بازدید</strong><small>قبل از رفتن، اطلاعات ملک را کامل ببینید</small></span></div>
      </section>

      <section id="listings" class="listings section">
        <div class="section-head">
          <div><p class="eyebrow dark">فایل‌های منتخب دفتر</p><h2>ملک‌هایی که ارزش <em>دیدن</em> دارند.</h2><p>فایل‌های این صفحه نمونه‌اند؛ در پروژه واقعی، مشاور می‌تواند از پنل اختصاصی خودش ملک‌ها، قیمت، تصاویر، وضعیت و اطلاعات بازدید را مدیریت کند.</p></div>
          <div class="result-count"><b>{{ matchingCount.toLocaleString('fa-IR') }}</b><span>فایل منطبق با فیلترها</span></div>
        </div>

        <div class="listing-tools">
          <div class="active-filters"><button v-if="deal !== 'همه'" @click="deal = 'همه'">{{ deal }} ×</button><button v-if="district !== 'همه مناطق'" @click="district = 'همه مناطق'">{{ district }} ×</button><button v-if="type !== 'همه'" @click="type = 'همه'">{{ type }} ×</button><button v-for="need in selectedNeeds" :key="need" @click="toggleNeed(need)">{{ need }} ×</button><button v-if="deal !== 'همه' || district !== 'همه مناطق' || type !== 'همه' || selectedNeeds.length || query" class="clear" @click="clearFilters">پاک کردن همه</button></div>
          <label class="budget">حداکثر قیمت خرید <input v-model="budget" type="range" min="10000000000" max="120000000000" step="5000000000"></label>
        </div>

        <div class="property-grid">
          <article v-for="property in visibleProperties" :key="property.id" class="property-card" @click="selectedProperty = property">
            <div class="property-image"><img :src="property.image" :alt="property.title" loading="lazy"><div class="image-tags"><span v-if="property.verified" class="verified">✓ تأیید شده</span><span v-if="property.exclusive" class="exclusive">فایل اختصاصی</span></div><button class="compare-btn" :class="{ active: compare.some(item => item.id === property.id) }" @click.stop="toggleCompare(property)">{{ compare.some(item => item.id === property.id) ? '✓ مقایسه' : '+ مقایسه' }}</button></div>
            <div class="property-body"><div class="property-top"><span>{{ property.code }}</span><small>{{ property.updated }}</small></div><h3>{{ property.title }}</h3><p class="location">⌖ {{ property.area }} · {{ property.district }}</p><div class="property-specs"><span>{{ property.size.toLocaleString('fa-IR') }} متر</span><span>{{ property.rooms.toLocaleString('fa-IR') }} خواب</span><span>{{ property.year.toLocaleString('fa-IR') }}</span></div><div class="feature-list"><span v-for="feature in property.features.slice(0, 3)" :key="feature">{{ feature }}</span></div><div class="property-price"><strong>{{ priceLabel(property) }}</strong><span>مشاهده جزئیات ←</span></div></div>
          </article>
        </div>
        <div v-if="visibleProperties.length === 0" class="empty"><b>فایل منطبق پیدا نشد.</b><span>فیلترها را کمی بازتر کن یا درخواست ملک ثبت کن تا مشاور برایت جست‌وجو کند.</span><button @click="clearFilters">حذف فیلترها</button></div>
        <button v-if="filtered.length > 6 && !showAll" class="more-btn" @click="showAll = true">نمایش همه فایل‌ها <span>↓</span></button>
      </section>

      <section id="matching" class="matching">
        <div class="matching-inner section">
          <div class="matching-copy"><p class="eyebrow">سرویس ویژه دفتر</p><h2>فایل مناسب پیدا نشد؟<br><em>درخواستت را بسپار به ما.</em></h2><p>این بخش همان جایی است که سایت از یک ویترین ساده به ابزار فروش تبدیل می‌شود. مشتری مشخصات ملک مورد نظرش را ثبت می‌کند و مشاور از پنل، درخواست‌های جدید را می‌بیند و فایل‌های مناسب خودش را به او پیشنهاد می‌دهد.</p><div class="matching-points"><span>✓ درخواست‌های مشتری یکجا</span><span>✓ تطبیق با فایل‌های موجود</span><span>✓ امکان پیگیری وضعیت هر درخواست</span></div><button class="matching-btn" @click="showRequest = true">ثبت درخواست ملک <span>↗</span></button></div>
          <div class="request-preview">
            <div class="preview-head"><span class="live-dot"></span><b>درخواست جدید مشتری</b><small>همین الان</small></div>
            <div class="request-profile"><div class="avatar">م</div><div><b>محمد رضایی</b><span>خریدار · بودجه تا ۵۰ میلیارد</span></div><strong>جدید</strong></div>
            <div class="request-chips"><span>منطقه ۱</span><span>آپارتمان</span><span>۲ یا ۳ خواب</span><span>پارکینگ</span></div>
            <div class="match-meter"><div><span>تطبیق با فایل‌های دفتر</span><b>۸۷٪</b></div><div class="meter"><i></i></div></div>
            <div class="matched-files"><span>۳ فایل مناسب</span><button @click="scrollTo('#listings')">مشاهده و ارسال برای مشتری ←</button></div>
          </div>
        </div>
      </section>

      <section id="process" class="process section">
        <div class="section-head"><div><p class="eyebrow dark">یک سایت املاک فقط آگهی نیست</p><h2>از اولین جست‌وجو تا <em>بازدید.</em></h2></div></div>
        <div class="steps"><div><span>۰۱</span><b>جست‌وجوی دقیق</b><p>کاربر بر اساس معامله، منطقه، بودجه، متراژ، خواب و امکانات فایل‌ها را محدود می‌کند.</p></div><div><span>۰۲</span><b>مشاهده اطلاعات کامل</b><p>تصاویر، مشخصات، کد فایل، زمان بروزرسانی و وضعیت تأیید قبل از تماس در اختیار مشتری است.</p></div><div><span>۰۳</span><b>درخواست بازدید</b><p>کاربر بدون تماس‌های متعدد، درخواست بازدید یا تماس با مشاور را ثبت می‌کند.</p></div><div><span>۰۴</span><b>پیگیری توسط دفتر</b><p>در نسخه واقعی، سرنخ‌ها و درخواست‌ها در پنل مدیریت ثبت و قابل پیگیری هستند.</p></div></div>
      </section>

      <section class="agency-panel section">
        <div><p class="eyebrow dark">برای خودِ بنگاه</p><h2>فایل‌هایتان را از<br><em>گوشی و دفترچه جدا کنید.</em></h2><p>پنل اختصاصی می‌تواند فایل‌های خرید، فروش و رهن را مدیریت کند؛ وضعیت هر ملک، آخرین قیمت، تصاویر، کد فایل، مشتری‌های مرتبط و زمان پیگیری همه در یک جا ثبت می‌شوند.</p></div>
        <div class="dashboard-mock"><div class="dash-top"><b>داشبورد خانه‌یار</b><span>امروز، ۲۸ مرداد</span></div><div class="dash-stats"><div><small>فایل فعال</small><b>۲۴۰</b><i>+۱۲ این هفته</i></div><div><small>درخواست جدید</small><b>۱۸</b><i>+۵ امروز</i></div><div><small>بازدید برنامه‌ریزی‌شده</small><b>۷</b><i>۳ مورد امروز</i></div></div><div class="dash-list"><div><span>A-2841</span><b>آپارتمان فرمانیه</b><em>در انتظار بازدید</em></div><div><span>R-9132</span><b>رهن کامل پاسداران</b><em>مشتری منطبق پیدا شد</em></div><div><span>A-2718</span><b>واحد مدرن نیاوران</b><em>آخرین بروزرسانی: امروز</em></div></div></div>
      </section>

      <section id="contact" class="contact"><div class="section"><p class="eyebrow">دفتر املاک خانه‌یار</p><h2>ملک بعدی‌ات، شاید<br><em>همین‌جا باشد.</em></h2><p>تهران، نیاوران · همه‌روزه ۹ تا ۲۱</p><div><button @click="showRequest = true">درخواست مشاوره <span>↗</span></button><a href="tel:02100000000">۰۲۱ · ۰۰۰۰ ۰۰۰۰</a></div></div></section>
    </main>

    <footer><NuxtLink to="/services" class="brand"><span>خانه</span>یار</NuxtLink><span>یک معامله خوب، از اطلاعات درست شروع می‌شود.</span><span>© ۱۴۰۵</span></footer>

    <Transition name="modal"><div v-if="selectedProperty" class="modal-backdrop" @click.self="selectedProperty = null"><article class="property-modal"><button class="close" @click="selectedProperty = null">×</button><img :src="selectedProperty.image" :alt="selectedProperty.title"><div class="modal-content"><div class="property-top"><span>{{ selectedProperty.code }}</span><small>{{ selectedProperty.updated }}</small></div><p class="eyebrow dark">{{ selectedProperty.deal }} · {{ selectedProperty.type }}</p><h2>{{ selectedProperty.title }}</h2><p class="modal-location">⌖ {{ selectedProperty.area }} · {{ selectedProperty.district }}</p><div class="modal-specs"><b>{{ selectedProperty.size }} متر</b><span>{{ selectedProperty.rooms }} خواب</span><span>ساخت {{ selectedProperty.year }}</span><span>{{ selectedProperty.floor }}</span></div><p>{{ selectedProperty.description }}</p><div class="modal-features"><span v-for="feature in selectedProperty.features" :key="feature">✓ {{ feature }}</span></div><strong class="modal-price">{{ priceLabel(selectedProperty) }}</strong><button class="modal-cta" @click="showRequest = true; selectedProperty = null">درخواست بازدید از این ملک ↗</button></div></article></div></Transition>

    <Transition name="modal"><div v-if="showRequest" class="modal-backdrop" @click.self="showRequest = false"><article class="request-modal"><button class="close" @click="showRequest = false">×</button><p class="eyebrow dark">درخواست ملک</p><h2>دقیقاً دنبال چه ملکی هستی؟</h2><p>مشاورهای دفتر بعد از ثبت درخواست، فایل‌های منطبق را بررسی می‌کنند.</p><div class="form-grid"><label>نوع معامله<select v-model="requestDeal"><option>خرید</option><option>رهن و اجاره</option></select></label><label>منطقه مورد نظر<select v-model="requestArea"><option>منطقه ۱</option><option>منطقه ۲</option><option>منطقه ۳</option><option>منطقه ۴</option><option>منطقه ۶</option></select></label><label>بودجه<select v-model="requestBudget"><option>تا ۲۰ میلیارد</option><option>تا ۵۰ میلیارد</option><option>تا ۸۰ میلیارد</option><option>بیش از ۸۰ میلیارد</option></select></label><label>تعداد خواب<select><option>فرقی ندارد</option><option>۱ خواب</option><option>۲ خواب</option><option>۳ خواب</option><option>۴ خواب به بالا</option></select></label></div><label class="form-note">توضیحات بیشتر<textarea placeholder="مثلاً نورگیر باشد، پارکینگ سندی داشته باشد، نزدیک مترو باشد..."></textarea></label><button class="submit-request" @click="submitRequest">ثبت درخواست و دریافت فایل‌های منطبق <span>←</span></button></article></div></Transition>

    <div v-if="compare.length" class="compare-bar"><div><b>{{ compare.length }} ملک</b><span>برای مقایسه انتخاب شده</span></div><div class="compare-names"><span v-for="item in compare" :key="item.id">{{ item.title }}</span></div><button @click="selectedProperty = compare[0]">مقایسه سریع ←</button><button class="compare-clear" @click="compare = []">×</button></div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap');
:global(*){box-sizing:border-box}:global(html){scroll-behavior:smooth}:global(body){margin:0;background:#f4f1ea;color:#18211d;font-family:Vazirmatn,sans-serif}.estate-demo{min-height:100vh;overflow:hidden;background:#f4f1ea}.demo-bar{height:36px;background:#12201b;color:#dfe6e0;display:flex;justify-content:center;align-items:center;gap:30px;font-size:10px}.demo-bar a{color:#d6b477;text-decoration:none}.header{position:fixed;top:36px;z-index:50;left:0;right:0;height:76px;padding:0 5vw;display:flex;align-items:center;justify-content:space-between;color:#fff;border-bottom:1px solid #ffffff20;transition:.3s}.header.scrolled{top:0;background:#10201bdd;backdrop-filter:blur(18px);border-bottom-color:transparent;box-shadow:0 15px 35px #07130e30}.brand{color:inherit;text-decoration:none;font:700 25px Georgia,serif;letter-spacing:1px;position:relative}.brand span{color:#d7b16e}.brand small{display:block;font:400 8px Vazirmatn,sans-serif;letter-spacing:0;color:#ffffff80;margin-top:-2px}.header nav{display:flex;gap:30px}.header nav button,.header-cta{border:0;background:none;color:inherit;font:inherit;font-size:11px;cursor:pointer}.header-cta{border:1px solid #ffffff50;border-radius:100px;padding:10px 18px}.header-cta span{color:#d8b270}.hero{min-height:calc(100vh - 36px);position:relative;color:#fff;display:flex;align-items:center;padding:130px 7vw 90px}.hero-bg,.hero-shade{position:absolute;inset:0}.hero-bg img{width:100%;height:100%;object-fit:cover;filter:saturate(.7)}.hero-shade{background:linear-gradient(90deg,#08100cf4 0%,#08100cd9 42%,#08100c62 100%)}.hero-content{position:relative;z-index:2;width:min(620px,90%);margin-right:3vw}.eyebrow{font-size:10px;letter-spacing:1.8px;text-transform:uppercase;color:#d8b270;margin:0 0 20px}.eyebrow span{display:inline-block;width:7px;height:7px;border-radius:50%;background:#d8b270;margin-left:7px}.hero h1{font-size:clamp(48px,6vw,86px);line-height:1.02;letter-spacing:-4px;font-weight:500;margin:0 0 28px}.hero h1 em,.section h2 em,.matching h2 em,.agency-panel h2 em,.contact h2 em{font-family:'Playfair Display',serif;color:#d8b270}.hero-content>p:not(.eyebrow){font-size:13px;line-height:2.15;color:#d4d9d5;max-width:570px}.hero-stats{display:flex;gap:28px;margin-top:35px;font-size:9px;color:#aeb9b3}.hero-stats span{display:flex;flex-direction:column;gap:5px}.hero-stats b{font-size:18px;color:#fff}.hero-search{position:absolute;z-index:4;right:7vw;bottom:50px;width:min(820px,75vw);background:#faf9f5;color:#1b241f;border-radius:16px;padding:13px;box-shadow:0 25px 70px #0007}.deal-tabs{display:flex;gap:4px;border-bottom:1px solid #e7e1d7;padding:0 4px}.deal-tabs button{border:0;background:none;padding:10px 17px;font:inherit;font-size:11px;color:#817b70;cursor:pointer}.deal-tabs button.active{color:#16221d;font-weight:700;border-bottom:2px solid #bd9457}.search-row{display:grid;grid-template-columns:1.7fr 1fr 1fr auto;gap:10px;padding:14px 4px 10px}.search-row label{display:block;font-size:9px;color:#8a8378}.search-row label>div,.search-row select{height:45px;margin-top:5px;border:1px solid #ded8ce;background:#fff;border-radius:9px;display:flex;align-items:center;padding:0 12px;font:inherit}.search-row input{border:0;outline:0;width:100%;font:inherit;font-size:11px}.search-row label>div span{font-size:20px;color:#a28a68;margin-left:7px}.search-row select{width:100%;cursor:pointer;color:#343a35}.search-btn{align-self:end;height:45px;border:0;background:#193229;color:#fff;border-radius:9px;padding:0 18px;font:inherit;font-size:11px;cursor:pointer}.search-btn span{color:#d8b270;margin-right:5px}.quick-needs{display:flex;align-items:center;gap:7px;flex-wrap:wrap;padding:2px 5px 3px;font-size:9px;color:#958d82}.quick-needs button{border:1px solid #e2dcd2;background:#fff;border-radius:100px;padding:5px 9px;font:inherit;color:#6f695f;cursor:pointer}.quick-needs button.active{background:#193229;color:#fff;border-color:#193229}.scroll-hint{position:absolute;z-index:3;left:4vw;bottom:45px;border:0;background:none;color:#ffffff80;font:inherit;font-size:9px;cursor:pointer}.scroll-hint span{display:block;text-align:center;color:#d8b270;font-size:18px;margin-top:7px}.trust-row{background:#fff;display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid #e7e1d8}.trust-row>div{padding:25px 7vw;display:flex;gap:12px;align-items:center;border-left:1px solid #ece7df}.trust-row>div:last-child{border-left:0}.trust-row b{width:34px;height:34px;border-radius:50%;background:#edf1eb;color:#496452;display:grid;place-items:center}.trust-row span{display:flex;flex-direction:column;gap:3px}.trust-row strong{font-size:11px}.trust-row small{font-size:9px;color:#8b8479}.section{padding:105px 7vw}.section-head{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:42px}.section-head>div:first-child{max-width:680px}.section h2{font-size:clamp(38px,4.5vw,64px);line-height:1.05;letter-spacing:-2px;font-weight:500;margin:0}.section-head>div>p:last-child{font-size:11px;line-height:2;color:#7b766e;max-width:620px;margin:18px 0 0}.eyebrow.dark{color:#8d7049}.result-count{background:#fff;border:1px solid #e4ded5;border-radius:12px;padding:16px 22px;min-width:145px}.result-count b{font-size:25px;display:block}.result-count span{font-size:9px;color:#8c857b}.listing-tools{border-top:1px solid #ddd6cc;border-bottom:1px solid #ddd6cc;padding:12px 0;display:flex;justify-content:space-between;gap:20px;align-items:center;margin-bottom:28px}.active-filters{display:flex;gap:7px;flex-wrap:wrap}.active-filters button{border:1px solid #d8d0c5;background:#fff;border-radius:100px;padding:6px 10px;font:inherit;font-size:9px;color:#555c56;cursor:pointer}.active-filters .clear{border:0;background:none;color:#a06f38}.budget{font-size:9px;white-space:nowrap;color:#706a60;display:flex;align-items:center;gap:8px}.budget input{width:120px}.property-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.property-card{background:#fff;border:1px solid #e3ddd4;border-radius:14px;overflow:hidden;cursor:pointer;transition:.3s}.property-card:hover{transform:translateY(-6px);box-shadow:0 22px 50px #2b332d14}.property-image{height:235px;position:relative;overflow:hidden;background:#ddd}.property-image img{width:100%;height:100%;object-fit:cover;transition:.5s}.property-card:hover .property-image img{transform:scale(1.045)}.image-tags{position:absolute;top:12px;right:12px;display:flex;gap:6px;flex-wrap:wrap}.image-tags span{padding:6px 9px;border-radius:100px;font-size:8px;background:#ffffffea;color:#243129}.image-tags .exclusive{background:#193229;color:#fff}.compare-btn{position:absolute;left:12px;top:12px;border:1px solid #ffffffaa;background:#ffffffdc;color:#253029;border-radius:100px;padding:7px 10px;font:inherit;font-size:8px;cursor:pointer}.compare-btn.active{background:#d8b270;border-color:#d8b270;color:#15221c}.property-body{padding:17px}.property-top{display:flex;justify-content:space-between;align-items:center;color:#a09a91;font-size:8px}.property-top span{font-weight:700;letter-spacing:1px}.property-body h3{font-size:14px;margin:9px 0 5px}.location{font-size:9px;color:#827b72;margin:0 0 14px}.property-specs{display:flex;gap:15px;border-top:1px solid #eee9e2;border-bottom:1px solid #eee9e2;padding:11px 0;font-size:9px;color:#69655e}.feature-list{display:flex;gap:5px;margin:12px 0}.feature-list span{background:#f4f2ed;border-radius:5px;padding:5px 7px;font-size:8px;color:#777168}.property-price{display:flex;justify-content:space-between;align-items:end;gap:8px}.property-price strong{font-size:11px;color:#193229}.property-price span{font-size:8px;color:#9a7140}.empty{padding:60px 20px;text-align:center;background:#fff;border:1px dashed #d6cec2;border-radius:14px;display:flex;flex-direction:column;gap:10px}.empty b{font-size:15px}.empty span{font-size:10px;color:#8a847a}.empty button,.more-btn{border:1px solid #193229;background:none;border-radius:100px;padding:11px 20px;font:inherit;font-size:10px;cursor:pointer;margin:auto}.more-btn{display:block;margin:38px auto 0}.matching{background:#152b23;color:#fff;position:relative;overflow:hidden}.matching:before{content:'';position:absolute;width:500px;height:500px;border:1px solid #ffffff12;border-radius:50%;left:-180px;top:-120px}.matching-inner{display:grid;grid-template-columns:1fr 460px;gap:100px;align-items:center}.matching-copy>p:not(.eyebrow){color:#b8c3bd;line-height:2;font-size:12px;max-width:650px}.matching h2{font-size:clamp(40px,4.5vw,66px);font-weight:500;line-height:1.05;margin:0 0 25px;letter-spacing:-2px}.matching-points{display:flex;flex-wrap:wrap;gap:8px;margin:25px 0}.matching-points span{font-size:9px;color:#d2d9d4;background:#ffffff0c;border:1px solid #ffffff18;padding:7px 9px;border-radius:100px}.matching-btn{border:0;background:#d8b270;color:#15221c;border-radius:8px;padding:13px 18px;font:inherit;font-size:10px;cursor:pointer}.matching-btn span{margin-right:6px}.request-preview{background:#f8f6f0;color:#1d2822;border-radius:17px;padding:22px;box-shadow:0 30px 70px #0004;transform:rotate(-1deg)}.preview-head{display:flex;align-items:center;gap:8px;border-bottom:1px solid #e4ded4;padding-bottom:15px;font-size:10px}.preview-head small{margin-right:auto;color:#9c958b}.live-dot{width:7px;height:7px;border-radius:50%;background:#5e9a69;box-shadow:0 0 0 5px #5e9a6920}.request-profile{display:flex;align-items:center;gap:10px;padding:18px 0}.avatar{width:40px;height:40px;border-radius:50%;background:#d8b270;display:grid;place-items:center;font-weight:700}.request-profile div{display:flex;flex-direction:column;gap:3px}.request-profile div span{font-size:8px;color:#8b857b}.request-profile>strong{margin-right:auto;background:#e6f0e5;color:#3f7047;border-radius:100px;padding:5px 8px;font-size:8px}.request-chips{display:flex;flex-wrap:wrap;gap:6px}.request-chips span{background:#efede7;padding:6px 8px;border-radius:6px;font-size:8px}.match-meter{margin-top:22px}.match-meter>div:first-child{display:flex;justify-content:space-between;font-size:9px}.match-meter b{color:#4e7d5a}.meter{height:7px;background:#e6e1d9;border-radius:100px;margin-top:8px;overflow:hidden}.meter i{display:block;width:87%;height:100%;background:#5d8765;border-radius:inherit}.matched-files{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #e6e0d6;margin-top:20px;padding-top:15px}.matched-files span{font-size:9px;font-weight:700}.matched-files button{border:0;background:none;color:#8e6335;font:inherit;font-size:9px;cursor:pointer}.process{background:#f9f7f2}.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border-top:1px solid #d9d2c7}.steps>div{padding:25px 25px 10px;border-left:1px solid #d9d2c7}.steps>div:last-child{border-left:0}.steps span{font:600 12px Georgia,serif;color:#a27a49}.steps b{display:block;font-size:14px;margin:24px 0 9px}.steps p{font-size:10px;color:#80796f;line-height:2}.agency-panel{display:grid;grid-template-columns:.8fr 1.2fr;gap:80px;align-items:center;background:#e7dfd1}.agency-panel>div:first-child>p:not(.eyebrow){font-size:11px;line-height:2;color:#70695f;max-width:500px}.dashboard-mock{background:#12231d;color:#e6ece8;border-radius:16px;padding:20px;box-shadow:0 25px 60px #2b211510}.dash-top{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ffffff12;padding-bottom:14px;font-size:10px}.dash-top span{font-size:8px;color:#83938a}.dash-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:15px 0}.dash-stats>div{background:#ffffff08;border:1px solid #ffffff0c;border-radius:8px;padding:13px}.dash-stats small{display:block;color:#9cacA4;font-size:8px}.dash-stats b{display:block;font-size:21px;margin:8px 0}.dash-stats i{font-style:normal;color:#88aa8e;font-size:7px}.dash-list{background:#fff;color:#26332d;border-radius:10px;overflow:hidden}.dash-list>div{display:grid;grid-template-columns:65px 1fr 110px;gap:10px;align-items:center;padding:12px;border-bottom:1px solid #eee8df;font-size:8px}.dash-list>div:last-child{border-bottom:0}.dash-list span{color:#9b7448}.dash-list em{font-style:normal;color:#6b856f}.contact{background:#cda86f;color:#18211d;text-align:center}.contact .section{padding-top:90px;padding-bottom:90px}.contact h2{font-size:clamp(45px,6vw,80px);line-height:1;letter-spacing:-3px;font-weight:500;margin:0 0 20px}.contact h2 em{color:#fff8ea}.contact .section>p:not(.eyebrow){font-size:10px;color:#5f4b31}.contact .section>div{display:flex;justify-content:center;align-items:center;gap:15px;margin-top:30px}.contact button{border:0;background:#17271f;color:#fff;border-radius:8px;padding:13px 20px;font:inherit;font-size:10px;cursor:pointer}.contact a{color:#4f3b27;text-decoration:none;font-size:10px}.contact span{color:#d8b270;margin-right:6px}footer{background:#10201b;color:#9eaaa3;padding:30px 7vw;display:flex;align-items:center;justify-content:space-between;font-size:9px}footer .brand{font-size:22px;color:#fff}.modal-backdrop{position:fixed;z-index:100;inset:0;background:#07100cc7;backdrop-filter:blur(10px);display:grid;place-items:center;padding:20px}.property-modal{width:min(880px,100%);background:#f8f5ee;border-radius:18px;overflow:hidden;display:grid;grid-template-columns:1fr 1fr;position:relative;box-shadow:0 35px 90px #0007}.property-modal>img{width:100%;height:100%;min-height:480px;object-fit:cover}.modal-content{padding:35px}.modal-content h2{font-size:30px;line-height:1.1;margin:8px 0}.modal-location{font-size:10px;color:#777168}.modal-specs{display:flex;flex-wrap:wrap;gap:12px;border-top:1px solid #ddd6cb;border-bottom:1px solid #ddd6cb;padding:15px 0;margin:20px 0;font-size:9px}.modal-content>p:not(.eyebrow):not(.modal-location){font-size:11px;line-height:2;color:#6e685f}.modal-features{display:flex;flex-wrap:wrap;gap:7px}.modal-features span{font-size:8px;background:#ebe7df;padding:7px;border-radius:6px}.modal-price{display:block;color:#193229;font-size:14px;margin-top:22px}.modal-cta,.submit-request{width:100%;margin-top:20px;border:0;background:#193229;color:#fff;border-radius:8px;padding:13px;font:inherit;font-size:10px;cursor:pointer}.request-modal{width:min(610px,100%);background:#f8f5ee;border-radius:18px;padding:38px;position:relative}.request-modal h2{font-size:30px;line-height:1.1;margin:0 0 10px}.request-modal>p:not(.eyebrow){font-size:10px;color:#777168;line-height:2}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:25px}.form-grid label,.form-note{font-size:9px;color:#6e675d}.form-grid select,.form-note textarea{display:block;width:100%;margin-top:6px;border:1px solid #dcd4c8;background:#fff;border-radius:8px;padding:11px;font:inherit;font-size:10px;outline:0}.form-note{display:block;margin-top:12px}.form-note textarea{min-height:90px;resize:vertical}.close{position:absolute;top:12px;left:12px;width:34px;height:34px;border:0;border-radius:50%;background:#fff;font-size:22px;cursor:pointer}.compare-bar{position:fixed;z-index:80;bottom:20px;left:50%;transform:translateX(-50%);width:min(850px,92vw);background:#142820;color:#fff;border:1px solid #ffffff16;border-radius:14px;padding:12px 15px;display:flex;align-items:center;gap:14px;box-shadow:0 20px 50px #0005}.compare-bar>div:first-child{display:flex;flex-direction:column;white-space:nowrap}.compare-bar>div:first-child b{font-size:11px}.compare-bar>div:first-child span{font-size:8px;color:#9eaaa3}.compare-names{display:flex;gap:6px;flex:1;overflow:hidden}.compare-names span{background:#ffffff0b;border:1px solid #ffffff12;border-radius:7px;padding:6px 8px;font-size:8px;white-space:nowrap}.compare-bar>button{border:0;background:#d8b270;color:#15221c;border-radius:7px;padding:9px 12px;font:inherit;font-size:9px;cursor:pointer;white-space:nowrap}.compare-bar .compare-clear{background:none;color:#fff;font-size:18px;padding:4px}.modal-enter-active,.modal-leave-active{transition:.25s}.modal-enter-from,.modal-leave-to{opacity:0}.modal-enter-from .property-modal,.modal-enter-from .request-modal,.modal-leave-to .property-modal,.modal-leave-to .request-modal{transform:scale(.96)}
@media(max-width:1050px){.hero-search{position:relative;right:auto;bottom:auto;width:100%;margin-top:45px}.hero{display:block;padding-top:160px}.hero-content{margin-right:0}.hero-bg{position:absolute}.hero-search{z-index:5}.property-grid{grid-template-columns:repeat(2,1fr)}.matching-inner,.agency-panel{grid-template-columns:1fr;gap:45px}.steps{grid-template-columns:repeat(2,1fr)}.steps>div:nth-child(2){border-left:0}.steps>div:nth-child(3){border-top:1px solid #d9d2c7}.steps>div:nth-child(4){border-top:1px solid #d9d2c7}}
@media(max-width:700px){.demo-bar{gap:12px;font-size:8px}.header{padding:0 5vw}.header nav{display:none}.header-cta{padding:9px 12px;font-size:9px}.hero{min-height:auto;padding:145px 5vw 45px}.hero h1{font-size:48px;letter-spacing:-2px}.hero-content{width:100%}.hero-stats{gap:16px}.hero-search{margin-top:35px;padding:10px}.search-row{grid-template-columns:1fr 1fr}.search-row label:first-child{grid-column:1/-1}.search-btn{grid-column:1/-1}.quick-needs{overflow:auto;flex-wrap:nowrap;padding-bottom:6px}.scroll-hint{display:none}.trust-row{grid-template-columns:1fr}.trust-row>div{border-left:0;border-bottom:1px solid #ece7df;padding:17px 5vw}.section{padding:75px 5vw}.section-head{display:block}.result-count{margin-top:20px;display:inline-block}.listing-tools{display:block}.budget{margin-top:12px}.property-grid{grid-template-columns:1fr}.property-image{height:250px}.matching-inner{padding-top:70px;padding-bottom:70px}.matching h2{font-size:44px}.request-preview{transform:none}.steps{grid-template-columns:1fr}.steps>div{border-left:0!important;border-bottom:1px solid #d9d2c7}.agency-panel{padding-top:70px;padding-bottom:70px}.dash-stats{grid-template-columns:1fr 1fr}.dash-stats>div:last-child{grid-column:1/-1}.dash-list>div{grid-template-columns:55px 1fr}.dash-list em{display:none}.contact .section>div{flex-direction:column}.property-modal{grid-template-columns:1fr;max-height:90vh;overflow:auto}.property-modal>img{height:230px;min-height:0}.modal-content{padding:25px}.request-modal{padding:30px 22px;max-height:90vh;overflow:auto}.form-grid{grid-template-columns:1fr}.compare-bar{bottom:10px}.compare-names{display:none}footer{flex-direction:column;gap:12px;text-align:center}}
</style>