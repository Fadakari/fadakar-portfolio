import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
import { useLocale } from '~/composables/useLocale'

const messages = {
  fa: {
    hero: {
      name: 'عرفان فداکار',
      title: 'طراحی و توسعه وب‌سایت‌های حرفه‌ای برای کسب‌وکارها',
      description: 'یک وب‌سایت خوب باید هم ظاهر درستی داشته باشد، هم درست کار کند. من روی طراحی، تجربه کاربری و توسعه فنی پروژه کار می‌کنم تا چیزی بسازیم که هم برای مخاطب جذاب باشد و هم برای کسب‌وکار شما واقعاً کاربرد داشته باشد.',
      connect: 'شروع همکاری',
    },
    about: {
      title: 'چرا همکاری با من؟',
      p1: 'خیلی از سایت‌ها از نظر ظاهری خوب به نظر می‌رسند، اما وقتی پای استفاده واقعی وسط می‌آید، مشکلاتشان شروع می‌شود؛ پیدا کردن اطلاعات سخت است، سایت کند است یا مسیر رسیدن کاربر به هدف مشخص نیست. من سعی می‌کنم از همان ابتدا این بخش‌ها را در کنار طراحی ببینم تا نتیجه فقط یک ظاهر زیبا نباشد.',
      p2: 'برخلاف بسیاری از توسعه‌دهندگان که تنها به ظاهر یا تنها به کدهای بک‌اند توجه می‌کنند، من با تسلط کامل بر هر دو بخش (Full-Stack)، سیستمی یکپارچه خلق می‌کنم. از رابط کاربری جذاب تا معماری سرورهای قدرتمند با پایتون، همه‌چیز در هماهنگی کامل توسعه می‌یابد.',
      p3: 'هدف من تحویل پروژه‌ای نیست که صرفاً کار کند؛ هدف من خلق ارزشی است که باعث رشد واقعی کسب‌وکار شما شود. بیایید با هم محصولی بسازیم که به آن افتخار کنید و رقبایتان را به چالش بکشد.'
    },
    skills: {
      title: 'ابزارهایی که با آن‌ها می‌سازم',
      description: 'هر پروژه ابزار خودش را می‌خواهد. تکنولوژی را بر اساس نیاز واقعی پروژه، سرعت، قابلیت توسعه و تجربه‌ای که قرار است برای کاربر ساخته شود انتخاب می‌کنم؛ نه صرفاً چون یک ابزار جدید و محبوب است.',
    },
    projects: {
      title: 'پروژه‌هایی که ساخته‌ام',
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
      name: 'Erfan Fadakar',
      title: 'Professional Web Design & Development for Businesses',
      description: "A good website should look and work well. I work on the design, user experience, and technical development of the project to create something that is both engaging for the audience and truly useful for your business.",
      connect: "Start a Project",
    },
    about: {
      title: 'Why Work With Me?',
      p1: "Many sites look good on the surface, but when it comes to actual use, their problems begin; Information is hard to find, the site is slow, or the user's path to the goal is not clear. I try to see these parts along with the design from the beginning so that the result is not just a pretty look.",
      p2: 'Unlike developers who focus strictly on either the frontend or the backend, I leverage a comprehensive Full-Stack perspective. From captivating user interfaces to scalable, high-performance architectures powered by Python, I ensure every layer of your product works in perfect harmony.',
      p3: 'My goal isn\'t just to deliver functional code; it\'s to create tangible value that drives real business growth. Let\'s build a digital product that you can be proud of, one that effectively challenges your competitors.',
    },
    skills: {
      title: 'The tools I build with',
      description: 'Every project needs its own tools. I choose technology based on the actual needs of the project, speed, scalability, and the experience it is going to create for the user, not just because it is a new and popular tool.',
    },
    projects: {
      title: 'Projects I have created',
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
