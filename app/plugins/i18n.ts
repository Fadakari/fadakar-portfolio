import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
import { useLocale } from '~/composables/useLocale'

const messages = {
  fa: {
    hero: {
      name: 'FADAKAR — عرفان فداکار',
      title: 'طراحی و توسعه وب‌سایت‌های حرفه‌ای برای کسب‌وکارها',
      description: 'من تنها یک برنامه‌نویس نیستم؛ شریک فنی شما برای تبدیل ایده‌ها به محصولات دیجیتال قدرتمند، زیبا و درآمدزا هستم. تخصص من ساخت پلتفرم‌هایی است که هم در نگاه اول مخاطب را مجذوب کنند و هم در زیرساخت، بی‌نقص عمل کنند.',
      connect: 'شروع همکاری',
    },
    about: {
      title: 'چرا من؟',
      p1: 'در دنیای پررقابت امروز، داشتن یک وب‌سایت معمولی کافی نیست. کسب‌وکار شما به یک پایگاه دیجیتال قدرتمند نیاز دارد که نمایانگر هویت برندتان باشد. تخصص من، طراحی و توسعه چنین محصولاتی است؛ محصولاتی که نه‌تنها زیبا هستند، بلکه با معماری اصولی، سرعت بالا و تجربه کاربری (UX) بی‌نقص، مشتریان شما را به ماندن و خرید ترغیب می‌کنند.',
      p2: 'برخلاف بسیاری از توسعه‌دهندگان که تنها به ظاهر یا تنها به کدهای بک‌اند توجه می‌کنند، من با تسلط کامل بر هر دو بخش (Full-Stack)، سیستمی یکپارچه خلق می‌کنم. از رابط کاربری جذاب با Vue.js تا معماری سرورهای قدرتمند با پایتون، همه‌چیز در هماهنگی کامل توسعه می‌یابد.',
      p3: 'هدف من تحویل پروژه‌ای نیست که صرفاً کار کند؛ هدف من خلق ارزشی است که باعث رشد واقعی کسب‌وکار شما شود. بیایید با هم محصولی بسازیم که به آن افتخار کنید و رقبایتان را به چالش بکشد.'
    },
    skills: {
      title: 'تکنولوژی‌های ساخت ارزش',
      description: 'من ابزارها را نه صرفاً برای ترند بودن، بلکه برای کارایی، امنیت و تضمین سرعت بالای پروژه‌ی شما انتخاب می‌کنم.',
    },
    projects: {
      title: 'نمونه کارهای اجرایی',
      view_details: 'مشاهده جزئیات',
      live_demo: 'مشاهده سایت',
      source_code: 'کد منبع',
      steelsara_pwa_title: 'وب‌اپلیکیشن محاسبه‌گر استیل سرا',
      steelsara_pwa_desc: 'توسعه یک اپلیکیشن پیش‌رونده (PWA) با پرفورمنس خیره‌کننده برای محاسبه دقیق مهندسی مقاطع. طراحی رابط کاربری شیشه‌ای (Glassmorphism) و بهینه‌سازی سرعت کشینگ برای تجربه‌ای کاملا مشابه اپلیکیشن‌های نیتیو موبایل.',
      menu_title: 'منوی دیجیتال بدون سرور',
      menu_desc: 'طراحی یک سیستم منوی دیجیتال فوق‌سریع و بدون نیاز به سرور (Serverless) برای یک آموزشگاه موسیقی. ترکیبی از سرعت بی‌نظیر Nuxt Nitro و سادگی کاربری برای افزایش رضایت مراجعین.',
      yazd_title: 'فروشگاه یزد موبایل',
      yazd_desc: 'بازطراحی معماری فرانت‌اند یک فروشگاه اینترنتی با تمرکز عمیق بر سئو (SEO) و بهینه‌سازی عملکرد با استفاده از قدرت React و Next.js برای افزایش نرخ تبدیل مشتری.',
      stock_title: 'پلتفرم B2B تجارت ماشین‌آلات',
      stock_desc: 'معماری و توسعه صفر تا صد یک مارکت‌پلیس قدرتمند برای تجارت ماشین‌آلات صنعتی. ایجاد یک پلتفرم یکپارچه و امن با پایتون که فرآیند خرید و فروش را برای کاربران به شدت ساده و قابل اعتماد کرد.',
      bio_title: 'پلتفرم برندینگ شخصی',
      bio_desc: 'طراحی یک پایگاه دیجیتال تعاملی برای نمایش تخصص و جذب پروژه. ترکیب قابلیت‌های SSR در Nuxt 3 برای سئو بالا، همراه با انیمیشن‌های روان GSAP برای خلق یک تجربه بصری ماندگار.',
      steelsara_seo_title: 'بهینه‌سازی و سئوی صنعتی استیل سرا',
      steelsara_seo_desc: 'اجرای استراتژی‌های پیشرفته سئو و بازطراحی معماری فرانت‌اند که منجر به افزایش چشمگیر سرعت بارگذاری و رشد فوق‌العاده رتبه‌های ارگانیک در کلمات کلیدی سخت موتورهای جستجو شد.',
    },
    contact: {
      title: 'آماده ارتقای کسب‌وکار خود هستید؟',
      subtitle: 'فرقی نمی‌کند یک ایده خام داشته باشید یا پروژه‌ای که نیازمند بازطراحی و نجات است؛ من اینجا هستم تا بهترین مسیر فنی را به شما پیشنهاد دهم. همین حالا تماس بگیرید.',
      email_me: 'ایمیل مستقیم',
      phone: 'تماس تلفنی',
      connect: 'شبکه‌های اجتماعی',
    },
  },
  en: {
    hero: {
      name: 'FADAKAR — Erfan Fadakar',
      title: 'Professional Web Design & Development for Businesses',
      description: "I'm not just a developer; I'm your technical partner in turning ideas into powerful, beautiful, and profitable digital products. My expertise lies in building platforms that captivate audiences at first glance while operating flawlessly under the hood.",
      connect: "Start a Project",
    },
    about: {
      title: 'Why Work With Me?',
      p1: 'In today\'s competitive landscape, a standard website is no longer enough. Your business demands a robust digital presence that truly reflects your brand identity. My expertise is designing and developing such products—solutions that are not only visually stunning but fundamentally engineered for speed, flawless UX, and high conversion rates.',
      p2: 'Unlike developers who focus strictly on either the frontend or the backend, I leverage a comprehensive Full-Stack perspective. From captivating user interfaces built with Vue.js to scalable, high-performance architectures powered by Python, I ensure every layer of your product works in perfect harmony.',
      p3: 'My goal isn\'t just to deliver functional code; it\'s to create tangible value that drives real business growth. Let\'s build a digital product that you can be proud of, one that effectively challenges your competitors.',
    },
    skills: {
      title: 'Technologies of Value',
      description: 'I choose tools not just because they are trendy, but for their efficiency, security, and the unparalleled performance they guarantee for your project.',
    },
    projects: {
      title: 'Featured Case Studies',
      view_details: 'View details',
      live_demo: 'Live demo',
      source_code: 'Source code',
      steelsara_pwa_title: 'Steel Sara Engineering PWA',
      steelsara_pwa_desc: 'Engineered a lightning-fast Progressive Web App (PWA) for complex engineering calculations. Designed a hardware-accelerated Glassmorphism UI and advanced caching strategies for a seamless, native-like mobile experience.',
      menu_title: 'Serverless Digital Menu',
      menu_desc: 'Designed an ultra-fast, serverless digital menu system tailored for a music academy. Combined the unmatched speed of Nuxt Nitro with an intuitive user interface to boost customer satisfaction.',
      yazd_title: 'Yazd Mobile Storefront',
      yazd_desc: 'Revamped the frontend architecture of an eCommerce storefront with a deep focus on technical SEO and performance optimization using React and Next.js to maximize conversion rates.',
      stock_title: 'B2B Machinery Marketplace',
      stock_desc: 'Architected and developed a comprehensive B2B platform for trading industrial machinery from scratch. Created a secure and unified marketplace with Python that radically simplified the trading process for end-users.',
      bio_title: 'Personal Branding Platform',
      bio_desc: 'Designed a highly interactive digital base to showcase expertise and attract clients. Leveraged Nuxt 3 SSR for maximum SEO visibility, combined with fluid GSAP animations to deliver a memorable visual experience.',
      steelsara_seo_title: 'Industrial SEO & Architecture',
      steelsara_seo_desc: 'Orchestrated advanced SEO strategies and a frontend architecture redesign that led to significantly faster load times and exceptional organic ranking growth in highly competitive search terms.',
    },
    contact: {
      title: 'Ready to Elevate Your Business?',
      subtitle: 'Whether you have a raw concept or an existing project in need of a rescue, I am here to provide the optimal technical roadmap. Reach out today.',
      email_me: 'Direct Email',
      phone: 'Phone Call',
      connect: 'Social Networks',
    },
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'fa',
    fallbackLocale: 'en',
    messages,
  })

  nuxtApp.vueApp.use(i18n)

  const { locale } = useLocale()
  i18n.global.locale.value = locale.value

  watch(locale, (nextLocale) => {
    i18n.global.locale.value = nextLocale
  })
})
