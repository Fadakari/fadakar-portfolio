<script setup lang="ts">
useSeoMeta({
  title: 'طراحی سایت فروشگاهی | FADAKAR',
  description: 'توضیحات کامل نمونه طراحی سایت فروشگاهی؛ از تجربه خرید و جست‌وجو تا ساختار قابل توسعه متناسب با کسب‌وکار.'
})

const sections = [
  { id: 'why', label: 'چرا سایت فروشگاهی؟' },
  { id: 'experience', label: 'تجربه‌ای که می‌سازیم' },
  { id: 'business', label: 'متناسب با کسب‌وکار' },
  { id: 'scope', label: 'قابلیت‌ها' },
  { id: 'final', label: 'قدم بعدی' }
]

const features = [
  ['جست‌وجوی سریع', 'کاربر به‌جای گشتن میان صدها محصول، سریع‌تر به چیزی که می‌خواهد می‌رسد.'],
  ['دسته‌بندی و فیلتر', 'محصولات بر اساس ویژگی‌های واقعی فروشگاه مرتب می‌شوند؛ نه صرفاً چند دسته‌بندی نمایشی.'],
  ['صفحه محصول', 'تصویر، قیمت، ویژگی‌ها، موجودی، توضیحات و مسیر خرید در جای درست قرار می‌گیرند.'],
  ['سبد خرید و سفارش', 'فرآیند خرید تا حد ممکن کوتاه، واضح و بدون اصطکاک طراحی می‌شود.'],
  ['موبایل‌محور', 'بخش بزرگی از مشتریان از موبایل وارد می‌شوند؛ بنابراین تجربه موبایل یک نسخه کوچک‌شده دسکتاپ نیست.'],
  ['قابل توسعه', 'اگر بعدها امکانات بیشتری لازم شود، ساختار سایت نباید شما را مجبور به بازسازی از صفر کند.']
]

const reveal = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
</script>

<template>
  <div dir="rtl" class="min-h-screen bg-[#f8f8f6] text-[#171717]">
    <header class="sticky top-0 z-50 border-b border-black/10 bg-[#f8f8f6]/92 backdrop-blur-xl">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <NuxtLink to="/services" class="font-black tracking-tight">FADAKAR</NuxtLink>
        <div class="hidden items-center gap-6 text-sm text-black/55 md:flex">
          <button v-for="item in sections" :key="item.id" @click="reveal(item.id)" class="transition hover:text-black">{{ item.label }}</button>
        </div>
        <NuxtLink to="/services/demos/ecommerce" class="rounded-full bg-[#171717] px-4 py-2 text-xs font-bold text-white transition hover:-translate-y-0.5">مشاهده دمو</NuxtLink>
      </div>
    </header>

    <main>
      <section class="mx-auto max-w-6xl px-5 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div class="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-bold text-black/60">
              <span class="h-2 w-2 rounded-full bg-emerald-500" /> نمونه‌ای از طراحی فروشگاه اینترنتی
            </div>
            <h1 class="max-w-2xl text-4xl font-black leading-[1.22] tracking-tight sm:text-5xl lg:text-6xl">
              فروشگاه اینترنتی فقط یک ویترین آنلاین نیست.
            </h1>
            <p class="mt-7 max-w-xl text-base leading-8 text-black/62 sm:text-lg">
              سایت فروشگاهی خوب باید کاری کند که مشتری راحت‌تر محصول مناسب را پیدا کند، با اطمینان تصمیم بگیرد و بدون سردرگمی خریدش را کامل کند. ظاهر زیبا فقط شروع ماجراست.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <button @click="reveal('why')" class="rounded-xl bg-[#171717] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5">اول این بخش را بخوانید</button>
              <NuxtLink to="/services/demos/ecommerce" class="rounded-xl border border-black/12 bg-white px-6 py-3.5 text-sm font-bold transition hover:bg-black/[.03]">دیدن نمونه واقعی</NuxtLink>
            </div>
            <div class="mt-8 grid max-w-xl grid-cols-3 border-y border-black/10 py-5">
              <div><strong class="block text-xl font-black">01</strong><span class="mt-1 block text-xs text-black/50">شناخت کسب‌وکار</span></div>
              <div class="border-x border-black/10 px-4"><strong class="block text-xl font-black">02</strong><span class="mt-1 block text-xs text-black/50">طراحی تجربه</span></div>
              <div class="pr-4"><strong class="block text-xl font-black">03</strong><span class="mt-1 block text-xs text-black/50">توسعه و رشد</span></div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-[28px] bg-[#dedbd2] shadow-2xl shadow-black/10">
            <img src="https://images.pexels.com/photos/5632404/pexels-photo-5632404.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="نمونه فروشگاه اینترنتی" class="h-[440px] w-full object-cover lg:h-[570px]" />
            <div class="absolute bottom-5 right-5 left-5 rounded-2xl border border-white/20 bg-black/72 p-4 text-white backdrop-blur-md">
              <div class="text-xs text-white/55">نکته مهم</div>
              <div class="mt-1 text-sm font-bold leading-6">این تصویر و این طراحی، «قالب آماده» برای کسب‌وکار شما نیست؛ فقط نمونه‌ای از سطح کیفیت طراحی است.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="why" class="scroll-mt-24 border-y border-black/10 bg-white">
        <div class="mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-24">
          <div class="mb-10 max-w-2xl">
            <span class="text-xs font-black tracking-widest text-black/40">01 / مسئله واقعی</span>
            <h2 class="mt-4 text-3xl font-black leading-tight sm:text-4xl">چرا یک فروشگاه به سایت نیاز دارد؟</h2>
          </div>
          <div class="space-y-7 text-base leading-9 text-black/68 sm:text-lg">
            <p>اگر مشتری برای دیدن محصولات، قیمت، موجودی یا راه ارتباطی با شما مجبور باشد هر بار در شبکه‌های اجتماعی جست‌وجو کند، بخشی از مسیر خرید را خودتان سخت کرده‌اید. سایت فروشگاهی یک محل دائمی و قابل جست‌وجو برای کسب‌وکار شماست؛ جایی که مشتری می‌تواند هر زمان که خواست، اطلاعات را منظم و کامل ببیند.</p>
            <p>اما هدف ما این نیست که صرفاً یک کاتالوگ آنلاین تحویل شما بدهیم. ساختار فروشگاه باید با رفتار مشتریان شما هماهنگ باشد. فروشگاه پوشاک، طلافروشی، لوازم دیجیتال، مواد غذایی و فروشگاه تخصصی هرکدام منطق متفاوتی برای معرفی و انتخاب محصول دارند.</p>
            <p class="rounded-2xl border-r-4 border-black bg-[#f5f5f2] px-5 py-5 font-bold leading-8 text-black">به همین دلیل، قبل از اینکه درباره رنگ، انیمیشن یا تکنولوژی صحبت کنیم، باید بفهمیم مشتری شما چه چیزی می‌خواهد، چگونه انتخاب می‌کند و کجا ممکن است از خرید منصرف شود.</p>
          </div>
        </div>
      </section>

      <section id="experience" class="scroll-mt-24 bg-[#171717] text-white">
        <div class="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <div class="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <div class="lg:sticky lg:top-28 lg:self-start">
              <span class="text-xs font-black tracking-widest text-white/35">02 / تجربه خرید</span>
              <h2 class="mt-4 text-3xl font-black leading-tight sm:text-4xl">کاربر نباید برای خرید با سایت بجنگد.</h2>
              <p class="mt-5 text-sm leading-8 text-white/55">هر جزء صفحه باید یک دلیل داشته باشد: کمک به پیدا کردن، مقایسه، اعتماد یا خرید.</p>
            </div>
            <div class="grid gap-3 sm:grid-cols-2">
              <article v-for="(feature, i) in features" :key="feature[0]" class="rounded-2xl border border-white/10 bg-white/[.045] p-6 transition hover:-translate-y-1 hover:bg-white/[.07]">
                <div class="text-xs font-black text-white/30">0{{ i + 1 }}</div>
                <h3 class="mt-8 text-lg font-black">{{ feature[0] }}</h3>
                <p class="mt-3 text-sm leading-7 text-white/55">{{ feature[1] }}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="business" class="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div class="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span class="text-xs font-black tracking-widest text-black/35">03 / چیزی فراتر از دمو</span>
            <h2 class="mt-4 text-3xl font-black leading-tight sm:text-4xl">قرار نیست سایت شما دقیقاً شبیه این باشد.</h2>
            <p class="mt-6 text-base leading-9 text-black/65">این صفحه و دمو فقط یک سؤال را جواب می‌دهند: «سطح کاری که می‌توانید دریافت کنید چقدر است؟»</p>
            <p class="mt-4 text-base leading-9 text-black/65">در پروژه واقعی، ظاهر سایت از هویت برند، محصولات، مشتریان، مدل فروش و امکانات موردنیاز شما شروع می‌شود. اگر کسب‌وکار شما رسمی و سازمانی باشد، طراحی باید همان حس را منتقل کند؛ اگر جوان و پرانرژی باشد، زبان بصری می‌تواند کاملاً متفاوت باشد.</p>
          </div>
          <div class="rounded-3xl border border-black/10 bg-white p-7 shadow-xl shadow-black/5">
            <div class="text-xs font-black text-black/35">یک اصل مهم</div>
            <p class="mt-4 text-xl font-black leading-9">«ما قالب را به کسب‌وکار شما تحمیل نمی‌کنیم؛ سایت را بر اساس کسب‌وکار شما طراحی می‌کنیم.»</p>
            <div class="mt-7 h-px bg-black/10" />
            <p class="mt-6 text-sm leading-8 text-black/55">ممکن است بعد از شناخت کسب‌وکار شما حتی پیشنهاد کنیم بعضی امکانات را اصلاً نسازیم؛ چون هزینه ایجاد می‌کنند اما ارزش واقعی ندارند. در مقابل، ممکن است ایده‌ای پیشنهاد کنیم که در نمونه اولیه وجود ندارد اما برای فروش شما بسیار مهم باشد.</p>
          </div>
        </div>
      </section>

      <section id="scope" class="scroll-mt-24 border-y border-black/10 bg-[#f0f0ec]">
        <div class="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <div class="max-w-2xl">
            <span class="text-xs font-black tracking-widest text-black/35">04 / قابلیت‌ها</span>
            <h2 class="mt-4 text-3xl font-black sm:text-4xl">این‌ها فقط شروع کارند.</h2>
            <p class="mt-5 text-base leading-8 text-black/60">بسته به پروژه، امکانات می‌توانند از فروش ساده تا یک سیستم کامل مدیریت فروش و مشتری توسعه پیدا کنند.</p>
          </div>
          <div class="mt-10 grid gap-4 md:grid-cols-3">
            <div v-for="item in ['درگاه پرداخت و سفارش آنلاین','مدیریت موجودی و قیمت','کد تخفیف و کمپین فروش','حساب کاربری و پیگیری سفارش','فیلترهای پیشرفته و مقایسه','اتصال به سرویس‌ها و APIها','پنل مدیریت اختصاصی','سئو و صفحات هدفمند','گزارش‌گیری و تحلیل رفتار']" :key="item" class="rounded-2xl bg-white p-5 text-sm font-bold shadow-sm">{{ item }}</div>
          </div>
          <div class="mt-10 rounded-3xl bg-[#171717] p-7 text-white sm:p-9">
            <h3 class="text-xl font-black">اما همه این امکانات را نباید به همه فروشگاه‌ها اضافه کرد.</h3>
            <p class="mt-4 max-w-3xl text-sm leading-8 text-white/55">یکی از تفاوت‌های طراحی اختصاصی با فروش یک قالب آماده همین است. ما امکانات را بر اساس نیاز واقعی اضافه می‌کنیم تا هم بودجه کنترل شود و هم سایت شلوغ و پیچیده نشود.</p>
          </div>
        </div>
      </section>

      <section id="final" class="scroll-mt-24 mx-auto max-w-4xl px-5 py-20 text-center lg:py-28">
        <span class="text-xs font-black tracking-widest text-black/35">05 / قدم بعدی</span>
        <h2 class="mt-5 text-3xl font-black leading-tight sm:text-5xl">اگر فکر می‌کنید کسب‌وکارتان جای یک سایت بهتر را دارد، از همین‌جا شروع کنیم.</h2>
        <p class="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/60">لازم نیست از قبل دقیقاً بدانید چه امکاناتی می‌خواهید. کافی است کسب‌وکارتان، محصولات یا خدماتتان و چیزی که از سایت انتظار دارید را توضیح دهید. ما بر اساس آن پیشنهاد می‌دهیم چه چیزی واقعاً لازم است و چه چیزهایی فقط هزینه اضافه هستند.</p>
        <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <NuxtLink to="/services/demos/ecommerce" class="rounded-xl bg-[#171717] px-7 py-4 text-sm font-black text-white transition hover:-translate-y-0.5">مشاهده کامل دمو</NuxtLink>
          <NuxtLink to="/services" class="rounded-xl border border-black/12 bg-white px-7 py-4 text-sm font-black transition hover:bg-black/[.03]">بازگشت به خدمات</NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>
