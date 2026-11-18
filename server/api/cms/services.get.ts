const fallbackServices = [
  {
    title: 'سایت فروشگاهی',
    titleEn: 'E-commerce website',
    short: 'فروش آنلاین محصولات از یک فروشگاه کوچک تا فروشگاه‌های بزرگ با کاتالوگ گسترده.',
    shortEn: 'Online sales from small stores to large catalogs.',
    detail: 'دسته‌بندی، جست‌وجو، فیلتر، صفحات محصول، سبد خرید، پرداخت، مدیریت سفارش و زیرساختی که متناسب با حجم فروش انتخاب می‌شود.',
    detailEn: 'Categories, search, filters, product pages, cart, checkout, orders and infrastructure chosen for actual sales volume.',
    accent: '#8a2be2',
    link: '/services/demos/ecommerce-details'
  },
  {
    title: 'سیستم دیجیتال اختصاصی کسب‌وکار',
    titleEn: 'Custom Business Digital System',
    short: 'برای کسب‌وکارهایی که فقط سایت نمی‌خواهند؛ یک سیستم هوشمند برای مدیریت، فروش و ارتباط با مشتری نیاز دارند.',
    shortEn: 'For businesses that need more than a website; a smart system to manage operations, sales and customer relationships.',
    detail: 'داشبورد اختصاصی، مدیریت مشتریان، اتوماسیون فرآیندها، اتصال به سرویس‌های مختلف، گزارش‌گیری، پنل‌های مدیریتی و ساخت زیرساختی که متناسب با مدل واقعی کسب‌وکار توسعه پیدا می‌کند.',
    detailEn: 'Custom dashboards, customer management, workflow automation, third-party integrations, analytics, admin panels and scalable infrastructure built around real business needs.',
    accent: '#06b6d4',
    link: '/services/demos/custom-system-details'
  },
  {
    title: 'تجربه دیجیتال و اتوماسیون هوشمند (AI)',
    titleEn: 'Digital Experience & AI Automation',
    short: 'طراحی مسیرهای هوشمند برای جذب مشتری، پاسخ‌گویی و رشد کسب‌وکار با کمک تکنولوژی‌های جدید.',
    shortEn: 'Smart customer funnels, conversational assistants and intelligent business growth.',
    detail: 'طراحی تجربه کاربر، اتصال هوش مصنوعی به فرآیندهای کسب‌وکار، دستیارهای هوشمند، سیستم‌های پاسخ‌گویی، تولید محتوای خودکار و بهینه‌سازی مسیر تبدیل بازدیدکننده به مشتری.',
    detailEn: 'UX architecture, connecting AI into business workflows, autonomous agents, automated customer support, and conversion rate optimization (CRO).',
    accent: '#a855f7',
    link: '/services/demos/digital-experience-details'
  },
  {
    title: 'سایت شرکتی و سازمانی',
    titleEn: 'Corporate & business website',
    short: 'برای شرکت‌هایی که می‌خواهند اعتبار، خدمات و ساختار کسب‌وکارشان را حرفه‌ای معرفی کنند.',
    shortEn: 'For companies that need to present their credibility, services and structure professionally.',
    detail: 'ساختار چندصفحه‌ای، معرفی خدمات و تیم، پروژه‌ها، مقالات، فرم‌های ارتباطی، صفحات فرود و معماری قابل توسعه.',
    detailEn: 'Multi-page structure, services, team, projects, articles, contact forms, landing pages and a scalable architecture.',
    accent: '#60a5fa',
    link: '/services/demos/corporate-details'
  },
  {
    title: 'سایت خدماتی و محلی',
    titleEn: 'Local service website',
    short: 'برای کسب‌وکارهایی که مشتری از گوگل، نقشه و جست‌وجوی محلی پیدا می‌کنند.',
    shortEn: 'For businesses that acquire customers through Google and local search.',
    detail: 'صفحات خدمات هدفمند، اطلاعات تماس، موقعیت، سوالات متداول و ساختار محتوایی مناسب برای جذب مشتری محلی.',
    detailEn: 'Targeted service pages, contact details, location, FAQs and content structure for local acquisition.',
    accent: '#8a2be2',
    link: '/services/demos/local-service-details'
  },
  {
    title: 'وب‌سایت رستوران و کافه',
    titleEn: 'Restaurant and cafe website',
    short: 'منوی آنلاین، رزرو، معرفی شعب و تجربه‌ای حرفه‌ای برای مشتریان.',
    shortEn: 'Online menu, reservations, branch introductions, and a professional experience for customers.',
    detail: 'طراحی سریع و واکنش‌گرا با دیزاین مناسب، معرفی غذاها، اطلاعات شعب، رزرو و اتصال به شبکه‌های اجتماعی.',
    detailEn: 'Fast and responsive design with appropriate design, food introduction, branch information, reservations, and connection to social networks.',
    accent: '#f59e0b',
    link: '/services/demos/restaurant-cafe-details'
  },
  {
    title: 'سایت املاک و مستغلات',
    titleEn: 'Real Estate Website',
    short: 'برای مشاوران املاک، دفاتر و مجموعه‌های فعال در خرید، فروش و اجاره.',
    shortEn: 'For agents, offices and businesses in property sales, rentals and real estate.',
    detail: 'نمایش فایل‌ها، جست‌وجو و فیلتر، صفحات منطقه و ملک، فرم درخواست و ساختاری مناسب برای جذب مشتری از گوگل.',
    detailEn: 'Listings, search and filters, property and area pages, inquiry forms and a structure built for local search.',
    accent: '#34d399',
    link: '/services/demos/real-estate-details'
  },
  {
    title: 'سایت بوتیک و مد',
    titleEn: 'Fashion & boutique',
    short: 'ویترین دیجیتال برای پوشاک، اکسسوری، کفش و برندهای فشن.',
    shortEn: 'A digital storefront for clothing, accessories, footwear and fashion brands.',
    detail: 'کالکشن‌ها، فیلتر محصولات، تصاویر حرفه‌ای، صفحات برند، فروش یا معرفی محصول و طراحی بصری متناسب با هویت برند.',
    detailEn: 'Collections, product filters, strong imagery, brand pages, product sales or presentation and visual identity.',
    accent: '#f472b6',
    link: '/services/demos/fashion-details'
  },
  {
    title: 'سایت طلافروشی و جواهرات',
    titleEn: 'Jewelry & gold store',
    short: 'طراحی لوکس و دقیق برای طلافروشی، جواهرفروشی و برندهای زیورآلات.',
    shortEn: 'A refined digital presence for jewelry stores and luxury accessory brands.',
    detail: 'نمایش محصول، کالکشن، قیمت و ویژگی‌ها، تجربه کاربری مناسب، ساختار اعتمادساز و امکان اتصال به سرویس‌های مورد نیاز کسب‌وکار.',
    detailEn: 'Collections, product presentation, pricing and features, trust-focused UX and integrations required by the business.',
    accent: '#8a2be2',
    link: ''
  },
  {
    title: 'سایت آموزشی و دوره آنلاین',
    titleEn: 'Education & Online Courses',
    short: 'برای مدرس‌ها، آموزشگاه‌ها، آکادمی‌ها و کسب‌وکارهای آموزشی.',
    shortEn: 'For teachers, academies, training centers and education businesses.',
    detail: 'معرفی دوره‌ها، مدرس‌ها، محتوای آموزشی، ثبت‌نام و معماری قابل توسعه برای امکانات آموزشی بیشتر.',
    detailEn: 'Courses, instructors, learning content, registration flows and an architecture ready for future education features.',
    accent: '#8a2be2',
    link: ''
  },
  {
    title: 'سایت باشگاه و مجموعه ورزشی',
    titleEn: 'Gym & sports website',
    short: 'برای باشگاه‌ها، مربیان، استودیوهای ورزشی و مجموعه‌های سلامت و ورزش.',
    shortEn: 'For gyms, coaches, studios and sports businesses.',
    detail: 'معرفی خدمات، برنامه‌ها، مربیان، کلاس‌ها، رزرو و تماس؛ با تمرکز روی استفاده سریع موبایل.',
    detailEn: 'Services, programs, coaches, classes, booking and contact with a mobile-first experience.',
    accent: '#8a2be2',
    link: ''
  },
  {
    title: 'سایت معرفی شخصی و رزومه',
    titleEn: 'Personal & portfolio website',
    short: 'یک حضور حرفه‌ای برای متخصصان، فریلنسرها، مدیران، هنرمندان و چهره‌های شخصی.',
    shortEn: 'A professional digital presence for specialists, freelancers, managers, artists and public figures.',
    detail: 'صفحه معرفی، رزومه، مهارت‌ها، نمونه‌کارها، لینک شبکه‌های اجتماعی، تماس و ساختار مناسب برای دیده‌شدن در گوگل.',
    detailEn: 'Profile, resume, skills, portfolio, social links, contact and a structure designed to be discoverable in search.',
    accent: '#8a2be2',
    link: ''
  },
  {
    title: 'سایت گردشگری و هواپیمایی',
    titleEn: 'Travel & aviation website',
    short: 'برای آژانس‌ها، تورها، خدمات سفر و مجموعه‌های فعال در صنعت گردشگری.',
    shortEn: 'For agencies, tours, travel services and aviation businesses.',
    detail: 'معرفی مقصد و خدمات، جست‌وجو و فرم‌های درخواست، صفحات فرود کمپین و معماری قابل توسعه برای امکانات بیشتر.',
    detailEn: 'Destinations, services, inquiry flows, campaign landing pages and an architecture ready for future features.',
    accent: '#8a2be2',
    link: ''
  },
  {
    title: 'سایت استارتاپ و SaaS',
    titleEn: 'Startup & SaaS Website',
    short: 'برای محصولاتی که باید هم‌زمان ارزش محصول، قابلیت‌ها و مسیر تبدیل را معرفی کنند.',
    shortEn: 'For products that need to explain value, capabilities and conversion paths clearly.',
    detail: 'صفحات محصول، ویژگی‌ها، قیمت‌گذاری، مستندات، صفحات فرود و ساختاری که برای رشد محصول آماده باشد.',
    detailEn: 'Product pages, features, pricing, documentation, landing pages and a structure ready for product growth.',
    accent: '#8a2be2',
    link: ''
  },
  {
    title: 'پلتفرم و وب‌اپلیکیشن اختصاصی',
    titleEn: 'Custom web platform',
    short: 'برای ایده‌هایی که دیگر یک سایت معمولی نیستند و منطق اختصاصی دارند.',
    shortEn: 'When the idea is no longer just a conventional website and needs custom logic.',
    detail: 'داشبورد، حساب کاربری، نقش‌ها، فرایندهای اختصاصی، API و زیرساختی که بر اساس نیاز واقعی محصول طراحی می‌شود.',
    detailEn: 'Dashboards, accounts, roles, custom workflows, APIs and infrastructure designed around the product.',
    accent: '#8a2be2',
    link: ''
  },
  {
    title: 'سایت هنرمند و سلبریتی',
    titleEn: 'Artist & celebrity website',
    short: 'یک وب‌سایت رسمی برای برند شخصی، آثار، اخبار، رویدادها و ارتباط با مخاطب.',
    shortEn: 'An official home for a personal brand, work, news, events and audience communication.',
    detail: 'گالری، رسانه، پروژه‌ها، رویدادها، لینک‌های رسمی و طراحی متمایز که هویت شخصی را منتقل کند.',
    detailEn: 'Gallery, media, projects, events and official links with a distinctive visual identity.',
    accent: '#8a2be2',
    link: ''
  },
  {
    title: 'سایت رسانه و مجله',
    titleEn: 'Media & Magazine Website',
    short: 'برای خبر، محتوای تخصصی، مجله آنلاین و رسانه‌های موضوعی.',
    shortEn: 'For news, specialist content, online magazines and niche media.',
    detail: 'ساختار دسته‌بندی و مقاله، جست‌وجو، آرشیو، صفحات نویسندگان و پایه فنی مناسب برای رشد محتوایی و سئو.',
    detailEn: 'Categories, articles, search, archives, author pages and a technical foundation built for content growth and SEO.',
    accent: '#8a2be2',
    link: ''
  },
  {
    title: 'بازطراحی و بهینه‌سازی سایت',
    titleEn: 'Redesign & optimization',
    short: 'اگر سایت فعلی دارید اما ظاهر، سرعت، سئو یا تجربه کاربری آن جواب نمی‌دهد.',
    shortEn: 'For existing websites that need better design, speed, SEO or UX.',
    detail: 'بررسی ساختار فعلی، شناسایی نقاط ضعف و بازطراحی مرحله‌ای بدون اینکه صرفاً ظاهر سایت را عوض کنیم و مشکل اصلی باقی بماند.',
    detailEn: 'Audit, weak-point discovery and a staged redesign that fixes the underlying problems—not just the visuals.',
    accent: '#8a2be2',
    link: ''
  }
]

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const apiKey = config.cockpitApiKey || process.env.COCKPIT_API_KEY || process.env.NUXT_COCKPIT_API_KEY || 'API-aa941dd9ef4b8aca5e553b883725951729be5dd5'

  try {
    const url = `${config.cockpitApiUrl.replace(/\/$/, '')}/content/items/services`
    const headers: Record<string, string> = {
      'Accept': 'application/json'
    }
    if (apiKey) {
      headers['api-key'] = apiKey
      headers['Authorization'] = `Bearer ${apiKey}`
    }

    const response = await $fetch<any>(url, {
      headers,
      timeout: 5000
    })

    const items = Array.isArray(response) ? response : (response?.items || response?.data || [])

    if (!items || items.length === 0) {
      console.log('ℹ [CMS Services] دیتابیس خدمات در هاست خالی بود؛ اطلاعات محلی بازگردانده شد.')
      return fallbackServices
    }

    console.log(`✓ [CMS Services] تعداد ${items.length} خدمت با موفقیت از هاست (Cockpit) دریافت شد.`)
    return items.map((item: any) => ({
      title: String(item.title || ''),
      titleEn: String(item.titleEn || item.title || ''),
      short: String(item.short || ''),
      shortEn: String(item.shortEn || ''),
      detail: String(item.detail || ''),
      detailEn: String(item.detailEn || ''),
      accent: String(item.accent || '#8a2be2'),
      link: String(item.link || '')
    }))
  } catch (error: any) {
    console.log(`ℹ [CMS Services] اتصال به هاست برقرار نشد (${error?.message || 'خطا'})؛ اطلاعات محلی استفاده شد.`)
    return fallbackServices
  }
})
