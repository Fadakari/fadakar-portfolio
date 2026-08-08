export default defineNuxtPlugin((nuxtApp) => {
  const styleId = 'services-enhancements-style'
  const serviceAdditions = {
    fa: [
      { title: 'سایت املاک و مستغلات', short: 'برای مشاوران املاک، دفاتر و مجموعه‌های فعال در خرید، فروش و اجاره.', detail: 'نمایش فایل‌ها، جست‌وجو و فیلتر، صفحات منطقه و ملک، فرم درخواست و ساختاری مناسب برای جذب مشتری از گوگل.' },
      { title: 'سایت آموزشی و دوره آنلاین', short: 'برای مدرس‌ها، آموزشگاه‌ها، آکادمی‌ها و کسب‌وکارهای آموزشی.', detail: 'معرفی دوره‌ها، مدرس‌ها، محتوای آموزشی، ثبت‌نام و معماری قابل توسعه برای امکانات آموزشی بیشتر.' },
      { title: 'سایت رسانه و مجله', short: 'برای خبر، محتوای تخصصی، مجله آنلاین و رسانه‌های موضوعی.', detail: 'ساختار دسته‌بندی و مقاله، جست‌وجو، آرشیو، صفحات نویسندگان و پایه فنی مناسب برای رشد محتوایی و سئو.' },
      { title: 'سایت استارتاپ و SaaS', short: 'برای محصولاتی که باید هم‌زمان ارزش محصول، قابلیت‌ها و مسیر تبدیل را معرفی کنند.', detail: 'صفحات محصول، ویژگی‌ها، قیمت‌گذاری، مستندات، صفحات فرود و ساختاری که برای رشد محصول آماده باشد.' },
    ],
    en: [
      { title: 'Real Estate Website', short: 'For agents, offices and businesses in property sales, rentals and real estate.', detail: 'Listings, search and filters, property and area pages, inquiry forms and a structure built for local search.' },
      { title: 'Education & Online Courses', short: 'For teachers, academies, training centers and education businesses.', detail: 'Courses, instructors, learning content, registration flows and an architecture ready for future education features.' },
      { title: 'Media & Magazine Website', short: 'For news, specialist content, online magazines and niche media.', detail: 'Categories, articles, search, archives, author pages and a technical foundation built for content growth and SEO.' },
      { title: 'Startup & SaaS Website', short: 'For products that need to explain value, capabilities and conversion paths clearly.', detail: 'Product pages, features, pricing, documentation, landing pages and a structure ready for product growth.' },
    ],
  }

  const getLocale = () => document.documentElement.lang === 'en' || document.documentElement.dir === 'ltr' ? 'en' : 'fa'

  const injectStyles = () => {
    if (document.getElementById(styleId)) return
    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      .services-search{margin:0 0 2.5rem;position:relative;max-width:720px}
      .services-search input{width:100%;box-sizing:border-box;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.12);border-radius:.65rem;color:#fff;padding:1rem 3rem 1rem 1rem;font:inherit;outline:none;transition:border-color .25s,box-shadow .25s,background .25s}
      [dir="rtl"] .services-search input{padding:1rem 1rem 1rem 3rem}
      .services-search input::placeholder{color:#666673}
      .services-search input:focus{border-color:rgba(138,43,226,.65);background:rgba(255,255,255,.05);box-shadow:0 0 0 4px rgba(138,43,226,.08)}
      .services-search-icon{position:absolute;top:50%;right:1rem;transform:translateY(-50%);width:20px;height:20px;color:#8a2be2;pointer-events:none}
      [dir="rtl"] .services-search-icon{right:auto;left:1rem}
      .services-search-icon svg{width:100%;height:100%;overflow:visible}
      .services-search-icon circle,.services-search-icon path{transition:stroke .25s}
      .services-search:focus-within .services-search-icon{animation:serviceSearchPulse 1.5s ease-in-out infinite}
      @keyframes serviceSearchPulse{0%,100%{transform:translateY(-50%) scale(1)}50%{transform:translateY(-50%) scale(1.08)}}
      .services-search-status{margin-top:.65rem;color:#666673;font-size:.72rem;min-height:1.1rem}
      .services-no-results{grid-column:1/-1;padding:3.5rem 2rem;border:1px solid rgba(255,255,255,.1);background:#08080b;text-align:center}
      .services-no-results h3{color:#fff;font-size:1.5rem;margin:0 0 .8rem}
      .services-no-results p{color:#777783;line-height:1.8;max-width:620px;margin:0 auto 1.5rem}
      .services-no-results a{display:inline-flex;align-items:center;gap:.7rem;color:#fff;background:#8a2be2;padding:.85rem 1.1rem;border-radius:.6rem;text-decoration:none;font-weight:700;transition:transform .25s,background .25s}
      .services-no-results a:hover{transform:translateY(-3px);background:#7023bd}
      .services-enhance-reveal{opacity:0;transform:translateY(34px) scale(.985);transition:opacity .8s cubic-bezier(.23,1,.32,1),transform .8s cubic-bezier(.23,1,.32,1)}
      .services-enhance-reveal.is-visible{opacity:1;transform:none}
      .services-enhance-reveal.service-card{transform:translateY(42px) scale(.98)}
      .services-enhance-reveal.service-card.is-visible{transform:none}
      .service-card{--service-accent:#8a2be2;--service-accent-soft:rgba(138,43,226,.12)}
      .service-card:hover{background:linear-gradient(145deg,var(--service-accent-soft),#0e0e13)}
      .service-card .service-icon{border-color:color-mix(in srgb,var(--service-accent) 55%,transparent);transition:border-color .35s,box-shadow .35s,transform .5s cubic-bezier(.23,1,.32,1)}
      .service-card .service-icon span{background:var(--service-accent);animation:serviceIconFloat 2.8s ease-in-out infinite}
      .service-card .service-icon span:nth-child(2){background:color-mix(in srgb,var(--service-accent) 65%,#38bdf8);animation-delay:.12s}
      .service-card .service-icon span:nth-child(3){animation-delay:.24s}
      .service-card:hover .service-icon{transform:rotate(45deg) scale(1.08);box-shadow:0 0 28px var(--service-accent-soft)}
      @keyframes serviceIconFloat{0%,100%{transform:scaleY(.82)}50%{transform:scaleY(1.08)}}
      .service-card.service-tone-luxury{--service-accent:#d4af37;--service-accent-soft:rgba(212,175,55,.11)}
      .service-card.service-tone-food{--service-accent:#f97316;--service-accent-soft:rgba(249,115,22,.10)}
      .service-card.service-tone-fashion{--service-accent:#f472b6;--service-accent-soft:rgba(244,114,182,.10)}
      .service-card.service-tone-sport{--service-accent:#22c55e;--service-accent-soft:rgba(34,197,94,.10)}
      .service-card.service-tone-travel{--service-accent:#38bdf8;--service-accent-soft:rgba(56,189,248,.10)}
      .service-card.service-tone-business{--service-accent:#60a5fa;--service-accent-soft:rgba(96,165,250,.10)}
      .service-card.service-tone-media{--service-accent:#f59e0b;--service-accent-soft:rgba(245,158,11,.10)}
      .service-card.service-tone-realestate{--service-accent:#34d399;--service-accent-soft:rgba(52,211,153,.10)}
      .service-card.service-tone-education{--service-accent:#a78bfa;--service-accent-soft:rgba(167,139,250,.10)}
      .service-card.service-tone-saas{--service-accent:#06b6d4;--service-accent-soft:rgba(6,182,212,.10)}
      @media (prefers-reduced-motion:reduce){.services-enhance-reveal,.services-enhance-reveal.service-card{opacity:1;transform:none;transition:none}.service-card .service-icon span{animation:none}.services-search:focus-within .services-search-icon{animation:none}}
      @media(max-width:640px){.services-search{margin-bottom:2rem}.services-search input{padding-top:.9rem;padding-bottom:.9rem}.services-no-results{padding:2.5rem 1.25rem}}
    `
    document.head.appendChild(style)
  }

  const addServiceCard = (service: { title: string; short: string; detail: string }, index: number) => {
    const grid = document.querySelector<HTMLElement>('.services-grid')
    if (!grid || grid.querySelector(`[data-added-service="${CSS.escape(service.title)}"]`)) return
    const article = document.createElement('article')
    article.className = 'service-card services-enhance-reveal'
    article.dataset.addedService = service.title
    article.innerHTML = `
      <div class="service-number">${String(index + 1).padStart(2, '0')}</div>
      <div class="service-icon" aria-hidden="true"><span></span><span></span><span></span></div>
      <h3></h3><p class="service-short"></p><p class="service-detail"></p>
      <a href="https://t.me/THE_FADAKAR" target="_blank" rel="noopener noreferrer" class="service-cta">${getLocale() === 'fa' ? 'شروع سفارش' : 'Start a project'} <span>↗</span></a>
    `
    article.querySelector('h3')!.textContent = service.title
    article.querySelector('.service-short')!.textContent = service.short
    article.querySelector('.service-detail')!.textContent = service.detail
    grid.appendChild(article)
  }

  const toneFor = (title: string) => {
    const value = title.toLowerCase()
    if (/طلا|جواهر|jewelry|gold/.test(value)) return 'service-tone-luxury'
    if (/رستوران|منوی|غذا|restaurant|food|menu/.test(value)) return 'service-tone-food'
    if (/بوتیک|مد|fashion|boutique/.test(value)) return 'service-tone-fashion'
    if (/باشگاه|ورزش|gym|sport/.test(value)) return 'service-tone-sport'
    if (/گردشگری|هواپیمایی|travel|aviation/.test(value)) return 'service-tone-travel'
    if (/شرکتی|سازمانی|business|corporate/.test(value)) return 'service-tone-business'
    if (/رسانه|مجله|media|magazine/.test(value)) return 'service-tone-media'
    if (/املاک|real estate/.test(value)) return 'service-tone-realestate'
    if (/آموزش|دوره|education|course/.test(value)) return 'service-tone-education'
    if (/saas|استارتاپ|startup/.test(value)) return 'service-tone-saas'
    return ''
  }

  const setupSearch = () => {
    const heading = document.querySelector<HTMLElement>('.services-list-section .section-heading')
    const grid = document.querySelector<HTMLElement>('.services-grid')
    if (!heading || !grid || heading.querySelector('.services-search')) return

    const search = document.createElement('div')
    search.className = 'services-search'
    search.innerHTML = `
      <input type="search" autocomplete="off" aria-label="${getLocale() === 'fa' ? 'جستجوی خدمات' : 'Search services'}" placeholder="${getLocale() === 'fa' ? 'مثلاً فروشگاه، طلافروشی، باشگاه، سئو...' : 'Try e-commerce, jewelry, gym, SEO...'}">
      <span class="services-search-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>
      <div class="services-search-status" aria-live="polite"></div>
    `
    heading.appendChild(search)

    const input = search.querySelector('input') as HTMLInputElement
    const status = search.querySelector('.services-search-status') as HTMLElement
    const noResults = document.createElement('div')
    noResults.className = 'services-no-results'
    noResults.style.display = 'none'
    noResults.innerHTML = `<h3>${getLocale() === 'fa' ? 'چیزی که می‌خواهید در لیست نیست؟' : 'Can’t find exactly what you need?'}</h3><p>${getLocale() === 'fa' ? 'اشکالی ندارد. ایده و نیازتان را بگویید تا بر اساس همان، مسیر مناسب و پیشنهاد فنی پروژه‌تان را آماده کنیم.' : 'No problem. Tell us what you need and we will suggest the right solution and technical path for your project.'}</p><a href="https://t.me/THE_FADAKAR" target="_blank" rel="noopener noreferrer">${getLocale() === 'fa' ? 'مشاوره در تلگرام' : 'Talk to us on Telegram'} <span>↗</span></a>`
    grid.appendChild(noResults)

    const filter = () => {
      const query = input.value.trim().toLocaleLowerCase()
      const cards = Array.from(grid.querySelectorAll<HTMLElement>('.service-card'))
      let visible = 0
      cards.forEach((card) => {
        const text = card.textContent?.toLocaleLowerCase() || ''
        const match = !query || text.includes(query)
        card.style.display = match ? '' : 'none'
        if (match) visible++
      })
      noResults.style.display = visible ? 'none' : ''
      status.textContent = query && visible ? `${visible} ${getLocale() === 'fa' ? 'خدمت مرتبط پیدا شد' : 'matching services found'}` : ''
    }
    input.addEventListener('input', filter)
  }

  let observer: IntersectionObserver | null = null
  const setupAnimations = () => {
    observer?.disconnect()
    const targets = document.querySelectorAll<HTMLElement>('.services-page main > section, .services-page .service-card, .services-page .method-card, .services-page .faq-list details, .services-page .custom-card')
    if (!targets.length) return
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement
        if (entry.isIntersecting) {
          target.classList.add('services-enhance-reveal', 'is-visible')
        } else {
          target.classList.remove('is-visible')
        }
      })
    }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' })
    targets.forEach((target) => observer!.observe(target))
  }

  const enhance = async () => {
    if (!location.pathname.startsWith('/services')) return
    injectStyles()
    await nextTick()
    setupSearch()
    const locale = getLocale()
    const additions = serviceAdditions[locale]
    const existingCount = document.querySelectorAll('.services-grid .service-card').length
    additions.forEach((service, index) => addServiceCard(service, existingCount + index))
    document.querySelectorAll<HTMLElement>('.service-card').forEach((card) => {
      const tone = toneFor(card.querySelector('h3')?.textContent || '')
      if (tone) card.classList.add(tone)
    })
    setupAnimations()
  }

  nuxtApp.hook('page:finish', enhance)
  if (import.meta.client) {
    requestAnimationFrame(enhance)
  }
})
