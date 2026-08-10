<script setup lang="ts">
import { computed } from 'vue'

const currentSectionIndex = ref(0)
const openFaq = ref(0)
const toggleFaq = (index: number) => {
  openFaq.value = openFaq.value === index ? -1 : index
}
const { locale, isRtl } = useLocale()
const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const seoTitle = computed(() => locale.value === 'fa' ? 'خدمات طراحی سایت و توسعه وب | FADAKAR' : 'Web Design & Development Services | FADAKAR')
const seoDesc = computed(() => locale.value === 'fa' ? 'خدمات حرفه‌ای طراحی و توسعه وب‌سایت، فروشگاه اینترنتی و پلتفرم‌های اختصاصی برای رشد کسب‌وکار شما.' : 'Professional web design and development services for corporate, ecommerce, and custom platforms.')

useSeoMeta({ title: () => seoTitle.value, description: () => seoDesc.value })
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Web Design and Development",
        "provider": {
          "@type": "Person",
          "name": "Erfan Fadakar"
        },
        "serviceType": "Web Development",
        "areaServed": "Worldwide"
      })
    }
  ]
})

const copy = computed(() => locale.value === 'fa' ? {
  eyebrow: 'خدمات طراحی و توسعه وب',
  title: 'سایت خوب فقط زیبا نیست؛\nباید برای کسب‌وکار شما درست ساخته شود.',
  intro: 'از یک سایت معرفی ساده تا یک پلتفرم بزرگ سازمانی، قبل از انتخاب تکنولوژی و پلن، نیاز واقعی کسب‌وکار شما را بررسی می‌کنیم تا بودجه‌تان دقیقاً جایی خرج شود که بیشترین بازده را دارد.',
  primaryCta: 'مشاوره و سفارش در تلگرام',
  secondaryCta: 'مشاهده خدمات',
  trustTitle: 'نه سایت ارزانِ ضعیف، نه هزینه‌تراشی بی‌دلیل',
  trustText: 'قرار نیست برای یک سایت ساده، معماری پیچیده و هزینه‌های اضافه پرداخت کنید. از طرف دیگر، اگر پروژه شما واقعاً به زیرساخت حرفه‌ای، توسعه اختصاصی، امنیت، مقیاس‌پذیری یا سئوی جدی نیاز داشته باشد، آن را قربانی یک راه‌حل ارزان نمی‌کنیم. معماری را بر اساس مسئله انتخاب می‌کنیم، نه بر اساس مد روز یا ابزار خاص.',
  processTitle: 'اول مسئله را می‌فهمیم، بعد راه‌حل می‌سازیم',
  processText: 'هر پروژه می‌تواند از نظر تعداد کاربر، نوع محتوا، فروش، سئو، سرعت، مدیریت و رشد آینده متفاوت باشد. برای همین یک نسخه ثابت برای همه نداریم.',
  supportTitle: 'بعد از تحویل هم تنها نمی‌مانید',
  supportText: 'تا ۳ ماه بعد از دیپلوی، پشتیبانی کامل پروژه را در کنار شما داریم. بعد از آن هم اگر تغییر، به‌روزرسانی، رفع حادثه، ارتقای زیرساخت یا افزایش ظرفیت لازم باشد، همان مورد را با هزینه مشخص انجام می‌دهیم؛ بدون اینکه مجبور باشید قرارداد سنگین و دائمی ببندید.',
  customTitle: 'چیزی که می‌خواهید در لیست نیست؟',
  customText: 'قرار نیست پروژه شما را داخل یک پلن آماده جا بدهیم. در تلگرام ایده، نیاز و بودجه مدنظرتان را بگویید؛ برایتان یک پیشنهاد قابل فهم و در صورت نیاز یک طرح فنی کامل تهیه می‌کنیم تا دقیقاً بدانید چه چیزی قرار است تحویل بگیرید.',
  telegram: 'THE_FADAKAR',
  viewDetails: 'مشاهده جزئیات',
  start: 'شروع سفارش',
  architecture: 'معماری متناسب با پروژه',
  seo: 'سئو و عملکرد',
  ux: 'UI/UX و تجربه کاربری',
  support: 'پشتیبانی پس از تحویل',
  categoriesTitle: 'برای هر مدل کسب‌وکار، یک مسیر مناسب',
  categoriesText: 'اگر حوزه فعالیتتان را اینجا می‌بینید، یعنی می‌توانیم نیازهای رایج آن را از ابتدا در طراحی در نظر بگیریم. اگر نمی‌بینید، باز هم کافی است با ما صحبت کنید.',
  faqTitle: 'سؤالاتی که قبل از سفارش باید جوابشان را بدانید',
  faq: [
    ['آیا سایت‌های ارزان هم می‌سازید؟', 'بله؛ اگر نیاز پروژه واقعاً ساده باشد، راه‌حل ساده انتخاب می‌کنیم. کم‌هزینه بودن برای ما به معنی حذف استانداردهای ضروری نیست.'],
    ['آیا همیشه از تکنولوژی‌های پیچیده استفاده می‌کنید؟', 'خیر. تکنولوژی باید در خدمت پروژه باشد. برای یک سایت ساده ممکن است راه‌حل سبک‌تر بهترین انتخاب باشد و برای پروژه‌ای بزرگ، معماری اختصاصی ارزش بیشتری داشته باشد.'],
    ['بعد از تحویل برای پشتیبانی چه می‌شود؟', 'سه ماه پشتیبانی کامل بعد از دیپلوی دارید. بعد از آن نیز هر زمان تغییر یا خدمتی نیاز داشته باشید، همان کار را جداگانه انجام می‌دهیم.'],
    ['قبل از شروع دقیقاً می‌فهمم چه چیزی تحویل می‌گیرم؟', 'بله. قبل از اجرا، محدوده پروژه، قابلیت‌ها، مسیر اجرا و پیشنهاد معماری به شکل قابل فهم مشخص می‌شود. برای پروژه‌های جدی، مستند فنی کامل‌تر هم ارائه می‌کنیم.'],
  ],
  services: [
    { title: 'سایت فروشگاهی', short: 'فروش آنلاین محصولات از یک فروشگاه کوچک تا فروشگاه‌های بزرگ با کاتالوگ گسترده.', detail: 'دسته‌بندی، جست‌وجو، فیلتر، صفحات محصول، سبد خرید، پرداخت، مدیریت سفارش و زیرساختی که متناسب با حجم فروش انتخاب می‌شود.' },
    { title: 'سایت شرکتی و سازمانی', short: 'برای شرکت‌هایی که می‌خواهند اعتبار، خدمات و ساختار کسب‌وکارشان را حرفه‌ای معرفی کنند.', detail: 'ساختار چندصفحه‌ای، معرفی خدمات و تیم، پروژه‌ها، مقالات، فرم‌های ارتباطی، صفحات فرود و معماری قابل توسعه.' },
    { title: 'سایت خدماتی و محلی', short: 'برای کسب‌وکارهایی که مشتری از گوگل، نقشه و جست‌وجوی محلی پیدا می‌کنند.', detail: 'صفحات خدمات هدفمند، اطلاعات تماس، موقعیت، سوالات متداول و ساختار محتوایی مناسب برای جذب مشتری محلی.' },
    { "title": "وب‌سایت رستوران و کافه", "short": "منوی آنلاین، رزرو، معرفی شعب و تجربه‌ای حرفه‌ای برای مشتریان.", "detail": "طراحی سریع و واکنش‌گرا با دیزاین مناسب، معرفی غذاها، اطلاعات شعب، رزرو و اتصال به شبکه‌های اجتماعی.", "accent": "#f59e0b" },
    { title: 'سایت املاک و مستغلات', short: 'برای مشاوران املاک، دفاتر و مجموعه‌های فعال در خرید، فروش و اجاره.', detail: 'نمایش فایل‌ها، جست‌وجو و فیلتر، صفحات منطقه و ملک، فرم درخواست و ساختاری مناسب برای جذب مشتری از گوگل.' },
    { title: 'سایت بوتیک و مد', short: 'ویترین دیجیتال برای پوشاک، اکسسوری، کفش و برندهای فشن.', detail: 'کالکشن‌ها، فیلتر محصولات، تصاویر حرفه‌ای، صفحات برند، فروش یا معرفی محصول و طراحی بصری متناسب با هویت برند.' },
    { title: 'سایت طلافروشی و جواهرات', short: 'طراحی لوکس و دقیق برای طلافروشی، جواهرفروشی و برندهای زیورآلات.', detail: 'نمایش محصول، کالکشن، قیمت و ویژگی‌ها، تجربه کاربری مناسب، ساختار اعتمادساز و امکان اتصال به سرویس‌های مورد نیاز کسب‌وکار.' },
    { title: 'منوی دیجیتال کافه و رستوران', short: 'منوی سریع و موبایل‌محور برای رستوران، کافه، فست‌فود، هتل و مجموعه‌های غذایی.', detail: 'دسته‌بندی منو، تصاویر، قیمت، توضیحات، اطلاعات تماس، مسیر دسترسی و تجربه‌ای که مشتری بدون دردسر در موبایل استفاده کند.' },
    { title: 'سایت آموزشی و دوره آنلاین', short: 'برای مدرس‌ها، آموزشگاه‌ها، آکادمی‌ها و کسب‌وکارهای آموزشی.', detail: 'معرفی دوره‌ها، مدرس‌ها، محتوای آموزشی، ثبت‌نام و معماری قابل توسعه برای امکانات آموزشی بیشتر.' },
    { title: 'سایت باشگاه و مجموعه ورزشی', short: 'برای باشگاه‌ها، مربیان، استودیوهای ورزشی و مجموعه‌های سلامت و ورزش.', detail: 'معرفی خدمات، برنامه‌ها، مربیان، کلاس‌ها، رزرو و تماس؛ با تمرکز روی استفاده سریع موبایل.' },
    { title: 'سایت معرفی شخصی و رزومه', short: 'یک حضور حرفه‌ای برای متخصصان، فریلنسرها، مدیران، هنرمندان و چهره‌های شخصی.', detail: 'صفحه معرفی، رزومه، مهارت‌ها، نمونه‌کارها، لینک شبکه‌های اجتماعی، تماس و ساختار مناسب برای دیده‌شدن در گوگل.' },
    { title: 'سایت گردشگری و هواپیمایی', short: 'برای آژانس‌ها، تورها، خدمات سفر و مجموعه‌های فعال در صنعت گردشگری.', detail: 'معرفی مقصد و خدمات، جست‌وجو و فرم‌های درخواست، صفحات فرود کمپین و معماری قابل توسعه برای امکانات بیشتر.' },
    { title: 'سایت استارتاپ و SaaS', short: 'برای محصولاتی که باید هم‌زمان ارزش محصول، قابلیت‌ها و مسیر تبدیل را معرفی کنند.', detail: 'صفحات محصول، ویژگی‌ها، قیمت‌گذاری، مستندات، صفحات فرود و ساختاری که برای رشد محصول آماده باشد.' },
    { title: 'پلتفرم و وب‌اپلیکیشن اختصاصی', short: 'برای ایده‌هایی که دیگر یک سایت معمولی نیستند و منطق اختصاصی دارند.', detail: 'داشبورد، حساب کاربری، نقش‌ها، فرایندهای اختصاصی، API و زیرساختی که بر اساس نیاز واقعی محصول طراحی می‌شود.' },
    { title: 'سایت هنرمند و سلبریتی', short: 'یک وب‌سایت رسمی برای برند شخصی، آثار، اخبار، رویدادها و ارتباط با مخاطب.', detail: 'گالری، رسانه، پروژه‌ها، رویدادها، لینک‌های رسمی و طراحی متمایز که هویت شخصی را منتقل کند.' },
    { title: 'سایت رسانه و مجله', short: 'برای خبر، محتوای تخصصی، مجله آنلاین و رسانه‌های موضوعی.', detail: 'ساختار دسته‌بندی و مقاله، جست‌وجو، آرشیو، صفحات نویسندگان و پایه فنی مناسب برای رشد محتوایی و سئو.' },
    { title: 'بازطراحی و بهینه‌سازی سایت', short: 'اگر سایت فعلی دارید اما ظاهر، سرعت، سئو یا تجربه کاربری آن جواب نمی‌دهد.', detail: 'بررسی ساختار فعلی، شناسایی نقاط ضعف و بازطراحی مرحله‌ای بدون اینکه صرفاً ظاهر سایت را عوض کنیم و مشکل اصلی باقی بماند.' },
    { "title": "وب‌سایت باشگاه و مجموعه ورزشی", "short": "معرفی خدمات، برنامه‌ها، مربیان و جذب و مدیریت بهتر مشتریان.", "detail": "ساخت وب‌سایت حرفه‌ای برای باشگاه‌های ورزشی، مربیان و مجموعه‌های تناسب اندام با معرفی کلاس‌ها، برنامه‌ها، مربیان و امکانات.", "accent": "#22c55e" }
  ],
  principles: [
    ['01', 'نیازسنجی', 'اول مشخص می‌کنیم سایت دقیقاً قرار است چه مشکلی را حل کند و مشتری چه مسیری را طی کند.'],
    ['02', 'انتخاب معماری', 'بین راه‌حل‌های سبک، CMS، فریم‌ورک و توسعه اختصاصی، گزینه‌ای را انتخاب می‌کنیم که برای پروژه منطقی‌تر است.'],
    ['03', 'طراحی UI/UX', 'ظاهر فقط برای زیبا شدن نیست؛ ساختار صفحات، خوانایی، دسترسی و مسیر تبدیل کاربر از ابتدا طراحی می‌شود.'],
    ['04', 'توسعه و بهینه‌سازی', 'کد، تصاویر، فونت‌ها، ساختار صفحات، عملکرد و رفتار سایت برای تجربه سریع و پایدار بهینه می‌شوند.'],
    ['05', 'سئو تکنیکال', 'ساختار URL، متادیتا، headingها، داده‌های ساختاریافته، سرعت، crawlability و پایه‌های فنی سئو در نظر گرفته می‌شوند.'],
    ['06', 'تحویل و همراهی', 'سایت deploy می‌شود، بررسی نهایی انجام می‌گیرد و سه ماه پشتیبانی کامل بعد از تحویل در کنار شما هستیم.'],
  ]
} : {
  eyebrow: 'Web Design & Development Services',
  title: 'A good website is not only beautiful.\nIt has to be built right for your business.',
  intro: 'From a simple presentation website to a large business platform, we first understand the real requirements so your budget goes exactly where it creates the most value.',
  primaryCta: 'Consult & order on Telegram', secondaryCta: 'Explore services', trustTitle: 'Not a cheap weak website. Not unnecessary spending.',
  trustText: 'We do not add complexity to simple projects, and we do not force a cheap solution onto a project that genuinely needs serious infrastructure, scalability, security or SEO. The architecture follows the problem—not a trend or a favorite tool.',
  processTitle: 'We understand the problem before building the solution', processText: 'Every project differs in users, content, sales, SEO, performance, management and future growth. That is why we do not use one fixed recipe for everyone.',
  supportTitle: 'You are not left alone after launch', supportText: 'You receive full project support for 3 months after deployment. Afterwards, changes, updates, incident recovery, infrastructure upgrades or capacity increases are handled when you actually need them—without forcing a heavy permanent contract.',
  customTitle: 'Can’t find exactly what you need?', customText: 'We do not force your project into a ready-made package. Tell us your idea, requirements and budget on Telegram. We can prepare a clear proposal and, for serious projects, a detailed technical plan so you know exactly what you are buying.', telegram: 'THE_FADAKAR', viewDetails: 'View details', start: 'Start a project', architecture: 'Project-fit architecture', seo: 'SEO & performance', ux: 'UI/UX & usability', support: 'Post-launch support', categoriesTitle: 'A suitable path for every business', categoriesText: 'If you see your industry here, we can account for its common needs from the beginning. If not, simply talk to us.', faqTitle: 'Questions you should have answered before ordering', faq: [
    ['Do you build low-budget websites?', 'Yes. If the project is genuinely simple, we choose a simple solution. Low cost should never mean removing essential standards.'],
    ['Do you always use complex technologies?', 'No. Technology serves the project. A lightweight solution may be best for a simple website, while a large product may justify custom architecture.'],
    ['What happens after launch?', 'You get three months of full post-deployment support. Afterwards, any change or service can be requested separately when you need it.'],
    ['Will I know what I am getting before development starts?', 'Yes. Scope, features, implementation path and the proposed architecture are defined before development. Serious projects can also receive a detailed technical document.'],
  ],
  services: [
    { title: 'E-commerce website', short: 'Online sales from small stores to large catalogs.', detail: 'Categories, search, filters, product pages, cart, checkout, orders and infrastructure chosen for actual sales volume.' },
    { title: 'Corporate & business website', short: 'For companies that need to present their credibility, services and structure professionally.', detail: 'Multi-page structure, services, team, projects, articles, contact forms, landing pages and a scalable architecture.' },
    { title: 'Local service website', short: 'For businesses that acquire customers through Google and local search.', detail: 'Targeted service pages, contact details, location, FAQs and content structure for local acquisition.' },
    { "title": "Restaurant and cafe website", "short": "Online menu, reservations, branch introductions, and a professional experience for customers.", "detail": "Fast and responsive design with appropriate design, food introduction, branch information, reservations, and connection to social networks.", "accent": "#f59e0b" },
    { title: 'Real Estate Website', short: 'For agents, offices and businesses in property sales, rentals and real estate.', detail: 'Listings, search and filters, property and area pages, inquiry forms and a structure built for local search.' },
    { title: 'Fashion & boutique', short: 'A digital storefront for clothing, accessories, footwear and fashion brands.', detail: 'Collections, product filters, strong imagery, brand pages, product sales or presentation and visual identity.' },
    { title: 'Jewelry & gold store', short: 'A refined digital presence for jewelry stores and luxury accessory brands.', detail: 'Collections, product presentation, pricing and features, trust-focused UX and integrations required by the business.' },
    { title: 'Digital menu for cafe & restaurant', short: 'A fast, mobile-first menu for restaurants, cafes, fast food and food businesses.', detail: 'Menu categories, images, pricing, descriptions, contact information, location and a frictionless mobile experience.' },
    { title: 'Education & Online Courses', short: 'For teachers, academies, training centers and education businesses.', detail: 'Courses, instructors, learning content, registration flows and an architecture ready for future education features.' },
    { title: 'Gym & sports website', short: 'For gyms, coaches, studios and sports businesses.', detail: 'Services, programs, coaches, classes, booking and contact with a mobile-first experience.' },
    { title: 'Personal & portfolio website', short: 'A professional digital presence for specialists, freelancers, managers, artists and public figures.', detail: 'Profile, resume, skills, portfolio, social links, contact and a structure designed to be discoverable in search.' },
    { title: 'Travel & aviation website', short: 'For agencies, tours, travel services and aviation businesses.', detail: 'Destinations, services, inquiry flows, campaign landing pages and an architecture ready for future features.' },
    { title: 'Startup & SaaS Website', short: 'For products that need to explain value, capabilities and conversion paths clearly.', detail: 'Product pages, features, pricing, documentation, landing pages and a structure ready for product growth.' },
    { title: 'Custom web platform', short: 'When the idea is no longer just a conventional website and needs custom logic.', detail: 'Dashboards, accounts, roles, custom workflows, APIs and infrastructure designed around the product.' },
    { title: 'Artist & celebrity website', short: 'An official home for a personal brand, work, news, events and audience communication.', detail: 'Gallery, media, projects, events and official links with a distinctive visual identity.' },
    { title: 'Media & Magazine Website', short: 'For news, specialist content, online magazines and niche media.', detail: 'Categories, articles, search, archives, author pages and a technical foundation built for content growth and SEO.' },
    { title: 'Redesign & optimization', short: 'For existing websites that need better design, speed, SEO or UX.', detail: 'Audit, weak-point discovery and a staged redesign that fixes the underlying problems—not just the visuals.' },
    { "title": "Club and sports complex website", "short": "Introducing services, programs, trainers, and better customer acquisition and management.", "detail": "Creating a professional website for sports clubs, trainers, and fitness complexes by introducing classes, programs, trainers, and facilities.", "accent": "#22c55e" }
  ],
  principles: [
    ['01', 'Discovery', 'We define the actual problem the website must solve and the path the customer should take.'],
    ['02', 'Architecture', 'We choose between lightweight solutions, CMSs, frameworks and custom development based on what makes sense.'],
    ['03', 'UI/UX', 'Design is not decoration. Layout, readability, accessibility and conversion paths are planned from the start.'],
    ['04', 'Development', 'Code, assets, fonts, page structure, performance and behavior are optimized for a fast and stable experience.'],
    ['05', 'Technical SEO', 'URLs, metadata, headings, structured data, performance, crawlability and technical SEO foundations are considered.'],
    ['06', 'Launch & support', 'The site is deployed, checked and supported for three months after launch.'],
  ]
});

const telegramUrl = 'https://t.me/THE_FADAKAR';
</script>

<template>
  <Header :current-section-index="currentSectionIndex" :scroll-to-section="scrollToSection" />
  <div class="services-page" :dir="isRtl ? 'rtl' : 'ltr'">
    <div class="services-orb orb-one"></div>
    <div class="services-orb orb-two"></div>

    <main>
      <section class="services-hero">
        <div class="hero-grid"></div>
        <div class="hero-copy">
          <span class="eyebrow">{{ copy.eyebrow }}</span>
          <h1 class="hero-text">{{ copy.title }}</h1>
          <p>{{ copy.intro }}</p>
          <div class="hero-actions">
            <a class="primary-button" :href="telegramUrl" target="_blank" rel="noopener noreferrer">{{ copy.primaryCta }} <span>↗</span></a>
            <a class="secondary-button" href="#services">{{ copy.secondaryCta }}</a>
          </div>
          <div class="hero-proof">
            <span><i></i>{{ copy.architecture }}</span>
            <span><i></i>{{ copy.seo }}</span>
            <span><i></i>{{ copy.ux }}</span>
            <span><i></i>{{ copy.support }}</span>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="visual-window">
            <div class="window-bar"><span></span><span></span><span></span><b>FADAKAR / DIGITAL PRODUCT</b></div>
            <div class="visual-content">
              <div class="visual-line large"></div>
              <div class="visual-line"></div>
              <div class="visual-line short"></div>
              <div class="visual-cards"><span></span><span></span><span></span></div>
              <div class="visual-footer"><strong>01</strong><span>DISCOVER</span><span>DESIGN</span><span>BUILD</span></div>
            </div>
          </div>
          <div class="floating-badge badge-top">ARCHITECTURE<br><strong>FIT FIRST</strong></div>
          <div class="floating-badge badge-bottom">SEO · UX · SPEED<br><strong>BUILT IN</strong></div>
        </div>
      </section>

      <section class="trust-section">
        <div class="section-kicker">WHY THIS APPROACH</div>
        <div class="trust-grid">
          <div><h2>{{ copy.trustTitle }}</h2></div>
          <div><p>{{ copy.trustText }}</p></div>
        </div>
      </section>

      <section id="services" class="services-list-section">
        <div class="section-heading">
          <span class="eyebrow">SERVICES / 01</span>
          <h2>{{ copy.categoriesTitle }}</h2>
          <p>{{ copy.categoriesText }}</p>
        </div>
        <div class="services-grid">
          <article v-for="(service, index) in copy.services" :key="service.title" class="service-card">
            <div class="service-number">{{ String(index + 1).padStart(2, '0') }}</div>
            <div class="service-icon" aria-hidden="true"><span></span><span></span><span></span></div>
            <h3>{{ service.title }}</h3>
            <p class="service-short">{{ service.short }}</p>
            <p class="service-detail">{{ service.detail }}</p>
            <a :href="telegramUrl" target="_blank" rel="noopener noreferrer" class="service-cta">{{ copy.start }} <span>↗</span></a>
          </article>
        </div>
      </section>

      <section class="method-section">
        <div class="section-heading compact">
          <span class="eyebrow">PROCESS / 02</span>
          <h2>{{ copy.processTitle }}</h2>
          <p>{{ copy.processText }}</p>
        </div>
        <div class="method-grid">
          <article v-for="item in copy.principles" :key="item[0]" class="method-card">
            <span>{{ item[0] }}</span><h3>{{ item[1] }}</h3><p>{{ item[2] }}</p>
          </article>
        </div>
      </section>

      <section class="support-section">
        <div class="support-visual" aria-hidden="true">
          <div class="support-ring"><span>03</span></div>
          <div class="support-line"></div>
          <div class="support-dot"></div>
        </div>
        <div class="support-copy">
          <span class="eyebrow">AFTER LAUNCH / 03</span>
          <h2>{{ copy.supportTitle }}</h2>
          <p>{{ copy.supportText }}</p>
          <div class="support-points"><span>3 MONTHS FULL SUPPORT</span><span>CHANGES ON REQUEST</span><span>INFRASTRUCTURE GROWTH</span></div>
        </div>
      </section>

      <section class="custom-section">
        <div class="custom-card">
          <div class="custom-copy"><span class="eyebrow">CUSTOM / 04</span><h2>{{ copy.customTitle }}</h2><p>{{ copy.customText }}</p><a :href="telegramUrl" target="_blank" rel="noopener noreferrer" class="primary-button">{{ copy.primaryCta }} <span>↗</span></a></div>
          <div class="custom-visual" aria-hidden="true"><div class="blueprint"><span></span><span></span><span></span><span></span><b>YOUR<br>PROJECT</b></div></div>
        </div>
      </section>

      <section class="faq-section">
        <div class="section-heading compact"><span class="eyebrow">FAQ / 05</span><h2>{{ copy.faqTitle }}</h2></div>
        <div class="faq-list">
          <div v-for="(item, index) in copy.faq" :key="item[0]" class="faq-item" :class="{ 'is-open': openFaq === index }">
            <div class="faq-summary" @click="toggleFaq(index)">
              <span>0{{ index + 1 }}</span>{{ item[0] }}<b>+</b>
            </div>
            <div class="faq-content">
              <div>
                <p>{{ item[1] }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.services-page { min-height: 100vh;
  min-height: 100svh;
 background: #050507; color: #e8e8ed; overflow: hidden; position: relative; }
.services-page::before { content: ''; position: fixed; inset: 0; pointer-events: none; background-image: linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px); background-size: 70px 70px; mask-image: linear-gradient(to bottom, black, transparent 70%); z-index: 0; }
.services-orb {
  position: absolute;
  width: clamp(280px, 35vw, 600px);
  height: clamp(280px, 35vw, 600px);
  border-radius: 50%;
  filter: blur(100px);
  opacity: .12;
  pointer-events: none;
  z-index: 0;
  background: #7c3aed;
}
.orb-one { top: 5%; right: -15%; }.orb-two { top: 55%; left: -20%; background: #0ea5e9; }
main { position: relative; z-index: 1; }
.services-hero { min-height: 100svh; max-width: 1440px; margin: auto; padding: 9rem 6vw 6rem; display: grid; grid-template-columns: 1.05fr .95fr; gap: 5rem; align-items: center; position: relative; }
.hero-grid { position: absolute; width: 50%; height: 70%; right: 0; top: 20%; background: radial-gradient(circle at center, rgba(138,43,226,.12), transparent 62%); pointer-events: none; }
.hero-copy { position: relative; z-index: 2; max-width: 760px; }.eyebrow { color: #8a2be2; font-size: .72rem; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; display: inline-block; margin-bottom: 1.5rem; }
h1 { font-size: clamp(3rem, 6vw, 3.5rem); line-height: .98; letter-spacing: -.055em; white-space: pre-line; margin: 0 0 2rem; color: #fff; max-width: 900px; }
.hero-copy > p { max-width: 680px; color: #a7a7b4; font-size: clamp(1rem, 1.4vw, 1.2rem); line-height: 1.9; margin-bottom: 2.3rem; }
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }.primary-button,.secondary-button { display: inline-flex; align-items: center; gap: .8rem; padding: .9rem 1.25rem; border-radius: .65rem; text-decoration: none; font-weight: 700; transition: .25s ease; }.primary-button { background: #fff; color: #070709; }.primary-button:hover { transform: translateY(-3px); background: #8a2be2; color: #fff; }.secondary-button { border: 1px solid rgba(255,255,255,.14); color: #eee; }.secondary-button:hover { background: rgba(255,255,255,.06); transform: translateY(-3px); }
.hero-proof { display: flex; gap: 1.2rem; flex-wrap: wrap; margin-top: 2.4rem; color: #858592; font-size: .78rem; }.hero-proof span { display: inline-flex; gap: .45rem; align-items: center; }.hero-proof i { width: 5px; height: 5px; border-radius: 50%; background: #8a2be2; }
.hero-visual { position: relative; min-height: 520px; display: grid; place-items: center; }.visual-window { width: min(100%, 570px); aspect-ratio: 1.05/1; border: 1px solid rgba(255,255,255,.13); background: linear-gradient(145deg, rgba(255,255,255,.07), rgba(255,255,255,.015)); box-shadow: 0 40px 100px rgba(0,0,0,.45); backdrop-filter: blur(15px); transform: perspective(1200px) rotateY(-8deg) rotateX(4deg); }.window-bar { height: 48px; border-bottom: 1px solid rgba(255,255,255,.1); display: flex; align-items: center; gap: 7px; padding: 0 18px; }.window-bar span { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,.3); }.window-bar b { margin-left: auto; font-size: .55rem; letter-spacing: .15em; color: #666673; }.visual-content { padding: 55px 45px; }.visual-line { height: 9px; width: 60%; background: rgba(255,255,255,.18); margin-bottom: 14px; border-radius: 10px; }.visual-line.large { width: 88%; height: 48px; background: linear-gradient(90deg,#fff,rgba(255,255,255,.1)); }.visual-line.short { width: 42%; }.visual-cards { display: flex; gap: 12px; margin-top: 55px; }.visual-cards span { flex: 1; height: 110px; border: 1px solid rgba(255,255,255,.1); background: linear-gradient(135deg,rgba(138,43,226,.32),rgba(14,165,233,.08)); }.visual-footer { display: flex; gap: 20px; align-items: center; margin-top: 45px; font-size: .55rem; color: #666673; letter-spacing: .16em; }.visual-footer strong { color: #8a2be2; font-size: .8rem; }.floating-badge { position: absolute; padding: .8rem 1rem; border: 1px solid rgba(255,255,255,.12); background: rgba(10,10,15,.75); backdrop-filter: blur(12px); font-size: .55rem; letter-spacing: .13em; color: #737380; line-height: 1.7; }.floating-badge strong { color: #fff; }.badge-top { top: 13%; right: -2%; }.badge-bottom { bottom: 12%; left: -3%; }
.trust-section,.services-list-section,.method-section,.support-section,.faq-section { max-width: 1280px; margin: auto; padding: 9rem 6vw; }.section-kicker { font-size: .65rem; letter-spacing: .2em; color: #656570; margin-bottom: 2.5rem; }.trust-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; border-top: 1px solid rgba(255,255,255,.1); padding-top: 2rem; }.trust-grid h2,.section-heading h2,.support-copy h2,.custom-copy h2 { font-size: clamp(2.2rem,4vw,4.2rem); line-height: 1.05; letter-spacing: -.045em; color: #fff; margin: 0; }.trust-grid p,.section-heading > p,.support-copy > p,.custom-copy > p { color: #92929f; font-size: 1.05rem; line-height: 1.95; margin: .3rem 0 0; }
.section-heading { max-width: 820px; margin-bottom: 4rem; }.section-heading.compact { max-width: 850px; }.services-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.1); }.service-card { min-height: 390px; background: #08080b; padding: 2rem; position: relative; transition: background .3s, transform .3s; }.service-card:hover { background: #0e0e13; transform: translateY(-4px); z-index: 2; }.service-number { color: #555561; font-size: .7rem; letter-spacing: .12em; }.service-icon { height: 48px; width: 48px; margin: 2rem 0 1.8rem; border: 1px solid rgba(138,43,226,.45); display: flex; align-items: center; justify-content: center; gap: 4px; transform: rotate(45deg); }.service-icon span { width: 4px; height: 18px; background: #8a2be2; }.service-icon span:nth-child(2) { height: 28px; background: #38bdf8; }.service-card h3 { font-size: 1.25rem; color: #fff; margin-bottom: .8rem; }.service-short { color: #b3b3bd; line-height: 1.7; font-size: .95rem; }.service-detail { color: #6f6f7a; line-height: 1.7; font-size: .83rem; margin-top: .8rem; }.service-cta { position: absolute; bottom: 2rem; color: #a78bfa; text-decoration: none; font-size: .78rem; font-weight: 700; }.service-cta span { display: inline-block; margin-left: .4rem; transition: transform .2s; }.service-cta:hover span { transform: translate(3px,-3px); }
.method-section { border-top: 1px solid rgba(255,255,255,.08); }.method-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0; border-top: 1px solid rgba(255,255,255,.1); }.method-card { padding: 2rem 2rem 2.5rem 0; border-bottom: 1px solid rgba(255,255,255,.1); }.method-card:nth-child(3n+2),.method-card:nth-child(3n) { padding-left: 2rem; border-left: 1px solid rgba(255,255,255,.1); }.method-card span { color: #8a2be2; font-size: .7rem; }.method-card h3 { color: #fff; margin: 1.8rem 0 .7rem; font-size: 1.15rem; }.method-card p { color: #777783; line-height: 1.8; font-size: .9rem; }
.support-section { display: grid; grid-template-columns: .8fr 1.2fr; gap: 6rem; align-items: center; border-top: 1px solid rgba(255,255,255,.08); }.support-visual { height: 380px; position: relative; display: grid; place-items: center; }.support-ring { width: 230px; height: 230px; border: 1px solid rgba(138,43,226,.5); border-radius: 50%; display: grid; place-items: center; box-shadow: 0 0 80px rgba(138,43,226,.12); }.support-ring::before,.support-ring::after { content:''; position:absolute; width: 280px; height: 280px; border: 1px dashed rgba(255,255,255,.1); border-radius:50%; }.support-ring::after { width: 160px; height:160px; }.support-ring span { font-size: 4rem; color:#fff; font-weight:800; }.support-line { position:absolute; width:1px; height:100%; background:linear-gradient(transparent,rgba(138,43,226,.7),transparent); }.support-dot { position:absolute; width:9px;height:9px;border-radius:50%;background:#8a2be2; top:15%; box-shadow:0 0 20px #8a2be2; }.support-points { display:flex; flex-wrap:wrap; gap:.7rem; margin-top:2rem; }.support-points span { padding:.65rem .8rem; border:1px solid rgba(255,255,255,.1); color:#777783; font-size:.6rem; letter-spacing:.12em; }
.custom-section { max-width:1280px; margin:auto; padding:3rem 6vw 9rem; }.custom-card { border:1px solid rgba(255,255,255,.12); background:linear-gradient(135deg,rgba(255,255,255,.055),rgba(255,255,255,.01)); padding:4rem; display:grid; grid-template-columns:1fr .7fr; gap:4rem; align-items:center; }.custom-copy p { max-width:650px; margin:1.5rem 0 2rem; }.custom-visual { display:grid; place-items:center; }.blueprint { width:260px;height:260px;border:1px solid rgba(56,189,248,.35); position:relative; display:grid;place-items:center; color:#38bdf8; text-align:center; box-shadow:inset 0 0 60px rgba(56,189,248,.06); }.blueprint::before,.blueprint::after { content:''; position:absolute; background:rgba(56,189,248,.25); }.blueprint::before { width:100%;height:1px; }.blueprint::after { height:100%;width:1px; }.blueprint span { position:absolute;width:10px;height:10px;border:1px solid #38bdf8; }.blueprint span:nth-child(1){top:-5px;left:-5px}.blueprint span:nth-child(2){top:-5px;right:-5px}.blueprint span:nth-child(3){bottom:-5px;left:-5px}.blueprint span:nth-child(4){bottom:-5px;right:-5px}.blueprint b { letter-spacing:.15em;font-size:1.1rem; }
.faq-section { border-top:1px solid rgba(255,255,255,.08); padding-bottom:10rem; }
.faq-list { border-top: 1px solid rgba(255,255,255,.1); }
.faq-item { border-bottom: 1px solid rgba(255,255,255,.1); }
.faq-summary { display: grid; grid-template-columns: 50px 1fr 30px; align-items: center; gap: 1rem; padding: 1.5rem 0; cursor: pointer; color: #eee; font-size: 1.05rem; transition: color .25s ease; }
.faq-summary:hover { color: #fff; }
.faq-summary span { color: #8a2be2; font-size: .7rem; }
.faq-summary b { font-size: 1.4rem; font-weight: 400; color: #777; transition: transform .4s cubic-bezier(.23,1,.32,1), color .25s ease; display: inline-block; }
.faq-item.is-open .faq-summary b { transform: rotate(45deg); color: #8a2be2; }

/* جادوی انیمیشن نرم با CSS Grid */
.faq-content { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .4s cubic-bezier(.23,1,.32,1); }
.faq-item.is-open .faq-content { grid-template-rows: 1fr; }
.faq-content > div { overflow: hidden; }
.faq-content p { color: #7e7e8b; line-height: 1.9; max-width: 800px; padding: 0 0 1.8rem 66px; opacity: 0; transition: opacity .3s ease; margin: 0; }
.faq-item.is-open .faq-content p { opacity: 1; transition-delay: .15s; }
:dir(rtl) .service-cta span,:dir(rtl) .primary-button span { transform:scaleX(-1); }.services-page a:focus-visible,.services-page summary:focus-visible { outline:2px solid #8a2be2; outline-offset:4px; }
@media (max-width: 980px){.services-hero{grid-template-columns:1fr;min-height:auto;padding-top:9rem}.hero-visual{min-height:430px}.services-grid{grid-template-columns:repeat(2,1fr)}.method-grid{grid-template-columns:repeat(2,1fr)}.method-card:nth-child(3n+2),.method-card:nth-child(3n){padding-left:0;border-left:0}.method-card:nth-child(even){padding-left:2rem;border-left:1px solid rgba(255,255,255,.1)}.support-section{grid-template-columns:1fr}.support-visual{display:none}.custom-card{grid-template-columns:1fr}.custom-visual{display:none}  
  .hero-grid {
    width: 100%;
    background: radial-gradient(circle at center, rgba(138,43,226,.12), transparent 70%);
  }
}
@media (max-width: 640px){.services-hero,.trust-section,.services-list-section,.method-section,.support-section,.faq-section{padding-left:1.25rem;padding-right:1.25rem}.services-hero{padding-top:8rem}.services-hero h1{font-size:clamp(2.6rem,12vw,4rem)}.hero-visual{min-height:330px;margin-top:1rem}.visual-window{transform:none}.visual-content{padding:35px 25px}.visual-cards span{height:70px}.floating-badge{font-size:.45rem}.badge-top{right:0}.badge-bottom{left:0}.trust-grid{grid-template-columns:1fr;gap:2rem}.services-grid,.method-grid{grid-template-columns:1fr}.service-card{min-height:370px}.method-card,.method-card:nth-child(even){padding:1.8rem 0;border-left:0}.custom-section{padding-left:1.25rem;padding-right:1.25rem}.custom-card{padding:2rem 1.3rem}.faq-list summary{grid-template-columns:35px 1fr 20px;font-size:.95rem}.faq-list details p{padding-left:0}.hero-proof{gap:.7rem}.hero-proof span{font-size:.7rem}
  .services-orb {
    width: 280px;
    height: 280px;
    filter: blur(80px);
    opacity: .1;
  }

  .orb-one {
    top: 8%;
    right: -120px;
  }

  .orb-two {
    top: 55%;
    left: -120px;
  }
}
</style>
