export type Article = {
  slug: string
  category: string
  categoryEn: string
  title: string
  titleEn: string
  excerpt: string
  excerptEn: string
  date: string
  readTime: number
  accent: string
  content: string[]
  contentEn: string[]
}

export const articles: Article[] = [
  {
    slug: 'how-to-choose-right-website-architecture',
    category: 'طراحی و معماری',
    categoryEn: 'Design & Architecture',
    title: 'چطور معماری مناسب سایت را انتخاب کنیم؟',
    titleEn: 'How to choose the right website architecture',
    excerpt: 'چرا یک معماری برای همه کسب‌وکارها مناسب نیست و چطور می‌شود بدون هزینه‌تراشی، زیرساختی متناسب با رشد آینده انتخاب کرد؟',
    excerptEn: 'Why one architecture cannot fit every business, and how to choose infrastructure that supports growth without unnecessary cost.',
    date: '۱۴۰۵/۰۵/۱۸',
    readTime: 7,
    accent: '#8a2be2',
    content: [
      'انتخاب تکنولوژی نباید اولین تصمیم پروژه باشد. ابتدا باید مسئله، حجم محتوا، تعداد کاربران، مسیر رشد و نیازهای واقعی کسب‌وکار مشخص شود.',
      'برای یک سایت معرفی ساده، معماری سبک می‌تواند بهترین انتخاب اقتصادی باشد. اما محصولی که حساب کاربری، فرایندهای اختصاصی یا حجم بالای داده دارد، به ساختار متفاوتی نیاز خواهد داشت.',
      'معماری خوب یعنی به اندازه نیاز امروز ساخته شود و برای نیازهای منطقی فردا نیز مسیر رشد داشته باشد؛ نه اینکه از همان روز اول پیچیده و پرهزینه باشد.'
    ],
    contentEn: [
      'Technology should not be the first project decision. Start with the problem, content volume, users, growth path, and actual business requirements.',
      'A simple presentation website can benefit from a lightweight architecture, while a product with accounts, custom workflows, or large data volumes needs a different structure.',
      'Good architecture is built for today while leaving a sensible path for tomorrow. It should not be unnecessarily complex or expensive from day one.'
    ]
  },
  {
    slug: 'website-cost-in-iran',
    category: 'راهنمای کسب‌وکار',
    categoryEn: 'Business Guide',
    title: 'هزینه طراحی سایت دقیقاً بابت چه چیزهایی است؟',
    titleEn: 'What are you actually paying for when building a website?',
    excerpt: 'قیمت یک سایت فقط قیمت چند صفحه نیست؛ طراحی، تجربه کاربری، توسعه، سئو، زیرساخت و نگهداری همگی روی نتیجه نهایی اثر دارند.',
    excerptEn: 'A website price is not just the price of a few pages. Design, UX, development, SEO, infrastructure, and maintenance all affect the result.',
    date: '۱۴۰۵/۰۵/۱۴',
    readTime: 6,
    accent: '#38bdf8',
    content: [
      'دو سایت ممکن است از بیرون شبیه هم باشند اما از نظر کیفیت اجرا، سرعت، ساختار کد و قابلیت توسعه تفاوت زیادی داشته باشند.',
      'هزینه منطقی زمانی شکل می‌گیرد که امکانات پروژه، روش اجرا و زیرساخت با نیاز واقعی آن هماهنگ باشند. حذف بخش‌های مهم برای پایین آوردن قیمت، همیشه صرفه‌جویی نیست.',
      'بهترین پیشنهاد لزوماً گران‌ترین پیشنهاد نیست؛ بهترین پیشنهاد همان گزینه‌ای است که بیشترین بازده را نسبت به هدف و بودجه پروژه ایجاد کند.'
    ],
    contentEn: [
      'Two websites can look similar while being very different in implementation quality, speed, code structure, and ability to evolve.',
      'A sensible budget comes from matching features, implementation, and infrastructure to the real needs of the project. Cutting important foundations is not always saving money.',
      'The best proposal is not necessarily the most expensive one. It is the one that produces the strongest return for the project goal and available budget.'
    ]
  },
  {
    slug: 'technical-seo-basics',
    category: 'سئو',
    categoryEn: 'SEO',
    title: 'سئوی تکنیکال چیست و چرا از روز اول مهم است؟',
    titleEn: 'What is technical SEO and why does it matter from day one?',
    excerpt: 'سئو فقط نوشتن مقاله نیست؛ ساختار صفحات، سرعت، ایندکس شدن و تجربه کاربر پایه‌های مهم دیده‌شدن در گوگل هستند.',
    excerptEn: 'SEO is not just writing articles. Page structure, performance, indexing, and user experience form the foundation of search visibility.',
    date: '۱۴۰۵/۰۵/۱۰',
    readTime: 8,
    accent: '#22c55e',
    content: [
      'وقتی ساختار سایت از ابتدا درست طراحی شود، موتورهای جست‌وجو راحت‌تر صفحات را درک و ایندکس می‌کنند و توسعه محتوایی آینده نیز منظم‌تر خواهد بود.',
      'سرعت، متادیتا، ساختار headingها، لینک‌سازی داخلی، URLهای منطقی، داده‌های ساختاریافته و تجربه موبایل بخشی از همین پازل هستند.',
      'سئو یک قابلیت الحاقی نیست که همیشه بتوان آن را در پایان پروژه اضافه کرد. بسیاری از تصمیم‌های فنی از همان مرحله طراحی روی آن اثر می‌گذارند.'
    ],
    contentEn: [
      'When the site structure is planned correctly from the start, search engines can understand and index pages more effectively, while future content remains easier to organize.',
      'Performance, metadata, headings, internal linking, logical URLs, structured data, and mobile experience are all part of the puzzle.',
      'SEO is not merely an add-on for the end of a project. Many technical decisions made during design directly affect it.'
    ]
  },
  {
    slug: 'ui-ux-that-converts',
    category: 'UI/UX',
    categoryEn: 'UI/UX',
    title: 'UI زیبا کافی نیست؛ UX خوب چه کاری انجام می‌دهد؟',
    titleEn: 'A beautiful UI is not enough: what does good UX actually do?',
    excerpt: 'کاربر نباید برای پیدا کردن اطلاعات، خرید یا تماس با شما فکر اضافه‌ای کند. تجربه خوب یعنی مسیر درست، در زمان درست جلوی او باشد.',
    excerptEn: 'Users should not have to think unnecessarily to find information, buy, or contact you. Good UX puts the right path in front of them at the right moment.',
    date: '۱۴۰۵/۰۵/۰۶',
    readTime: 5,
    accent: '#f59e0b',
    content: [
      'رابط کاربری ظاهر محصول است، اما تجربه کاربری چیزی است که کاربر هنگام استفاده از آن احساس و تجربه می‌کند.',
      'در یک سایت فروشگاهی، پیدا کردن محصول، فهمیدن قیمت و ویژگی‌ها و رسیدن به خرید باید طبیعی باشد. در سایت شرکتی نیز کاربر باید سریع متوجه شود شرکت چه کاری انجام می‌دهد و قدم بعدی چیست.',
      'طراحی حرفه‌ای به معنای شلوغ کردن صفحه نیست؛ گاهی بهترین تصمیم حذف یک عنصر اضافه است.'
    ],
    contentEn: [
      'UI is the visible layer of a product, while UX is what the user experiences while using it.',
      'In a store, finding a product, understanding its price and features, and reaching checkout should feel natural. On a company site, the visitor should quickly understand what the company does and what to do next.',
      'Professional design does not mean adding more elements. Sometimes the best design decision is removing one.'
    ]
  },
  {
    slug: 'wordpress-vs-custom-development',
    category: 'توسعه وب',
    categoryEn: 'Web Development',
    title: 'وردپرس یا توسعه اختصاصی؟ کدام بهتر است؟',
    titleEn: 'WordPress or custom development: which is better?',
    excerpt: 'پاسخ درست برای هر پروژه متفاوت است. انتخاب باید بر اساس نیاز، بودجه، سرعت اجرا، مدیریت محتوا و آینده محصول باشد.',
    excerptEn: 'The right answer depends on the project. The decision should consider requirements, budget, delivery speed, content management, and the product roadmap.',
    date: '۱۴۰۵/۰۵/۰۲',
    readTime: 7,
    accent: '#ec4899',
    content: [
      'وردپرس برای بسیاری از سایت‌های محتوایی، شرکتی و فروشگاهی انتخاب بسیار مناسبی است؛ مخصوصاً زمانی که مدیریت محتوا و سرعت راه‌اندازی اهمیت زیادی دارد.',
      'توسعه اختصاصی زمانی ارزش بیشتری پیدا می‌کند که منطق محصول، فرایندها یا نیازهای فنی از قالب سایت‌های معمولی فراتر برود.',
      'هیچ تکنولوژی به‌خودی‌خود حرفه‌ای‌تر نیست. حرفه‌ای بودن یعنی ابزار مناسب را برای مسئله مناسب انتخاب کنیم.'
    ],
    contentEn: [
      'WordPress is an excellent choice for many content, company, and commerce websites, especially when content management and fast delivery matter.',
      'Custom development becomes more valuable when product logic, workflows, or technical requirements go beyond typical website patterns.',
      'No technology is inherently more professional. Professional work means choosing the right tool for the actual problem.'
    ]
  },
  {
    slug: 'website-speed',
    category: 'سرعت و عملکرد',
    categoryEn: 'Performance',
    title: 'چرا سرعت سایت مستقیماً روی کسب‌وکار اثر می‌گذارد؟',
    titleEn: 'Why website performance directly affects your business',
    excerpt: 'کاربر منتظر سایت شما نمی‌ماند. عملکرد خوب فقط یک ویژگی فنی نیست؛ بخشی از تجربه مشتری و اعتبار برند است.',
    excerptEn: 'Users do not wait forever. Performance is not just a technical feature; it is part of customer experience and brand credibility.',
    date: '۱۴۰۴/۱۲/۲۸',
    readTime: 6,
    accent: '#06b6d4',
    content: [
      'سرعت سایت نتیجه مجموعه‌ای از تصمیم‌هاست: تصاویر، فونت‌ها، کدهای فرانت‌اند، کش، سرور و نحوه دریافت داده‌ها همگی مهم هستند.',
      'بهینه‌سازی نباید فقط بعد از کند شدن سایت شروع شود. معماری و طراحی درست می‌توانند از ابتدا جلوی بخش بزرگی از مشکلات عملکردی را بگیرند.',
      'هدف، سریع بودن به‌عنوان یک عدد نیست؛ هدف این است که کاربر سریع و بدون اصطکاک به چیزی که برایش آمده برسد.'
    ],
    contentEn: [
      'Performance is the result of many decisions: images, fonts, frontend code, caching, servers, and data fetching all matter.',
      'Optimization should not begin only after a site becomes slow. Good architecture and design prevent many performance problems from the beginning.',
      'The goal is not simply a good speed score. The goal is helping the user reach what they came for quickly and without friction.'
    ]
  }
]

export const getArticle = (slug: string) => articles.find(article => article.slug === slug)
