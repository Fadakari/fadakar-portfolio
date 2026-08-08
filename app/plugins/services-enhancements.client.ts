export default defineNuxtPlugin(() => {
  const styleId = 'services-enhancements-style'

  const serviceAdditions = {
    fa: [
      
    ],
    en: [
      
    ],
  }

  const getLocale = () => document.documentElement.lang === 'en' || document.documentElement.dir === 'ltr' ? 'en' : 'fa'

  const injectStyles = () => {
    if (document.getElementById(styleId)) return

    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      /* Search */
      .services-search{margin:0 0 2.5rem;position:relative;max-width:720px;width:100%}
      .services-search input{display:block;width:100%;height:54px;box-sizing:border-box;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.12);border-radius:.65rem;color:#fff;padding:0 3.25rem 0 1rem;font:inherit;line-height:1.4;outline:none;transition:border-color .25s,box-shadow .25s,background .25s}
      [dir="rtl"] .services-search input{padding:0 1rem 0 3.25rem}
      .services-search input::placeholder{color:#666673}
      .services-search input:focus{border-color:rgba(138,43,226,.65);background:rgba(255,255,255,.05);box-shadow:0 0 0 4px rgba(138,43,226,.08)}
      .services-search-icon{position:absolute!important;top:27px!important;right:1rem!important;left:auto!important;width:20px!important;height:20px!important;margin:0!important;display:grid!important;place-items:center!important;transform:translateY(-50%)!important;color:#8a2be2;pointer-events:none;line-height:0}
      [dir="rtl"] .services-search-icon{right:auto!important;left:1rem!important}
      .services-search-icon svg{display:block;width:20px;height:20px;overflow:visible}
      .services-search:focus-within .services-search-icon{animation:serviceSearchPulse 1.5s ease-in-out infinite}
      @keyframes serviceSearchPulse{0%,100%{transform:translateY(-50%) scale(1)}50%{transform:translateY(-50%) scale(1.08)}}
      .services-search-status{margin-top:.65rem;color:#666673;font-size:.72rem;min-height:1.1rem}

      /* No results */
      .services-no-results{grid-column:1/-1;padding:3.5rem 2rem;border:1px solid rgba(255,255,255,.1);background:#08080b;text-align:center}
      .services-no-results h3{color:#fff;font-size:1.5rem;margin:0 0 .8rem}
      .services-no-results p{color:#777783;line-height:1.8;max-width:620px;margin:0 auto 1.5rem}
      .services-no-results a{display:inline-flex;align-items:center;gap:.7rem;color:#fff;background:#8a2be2;padding:.85rem 1.1rem;border-radius:.6rem;text-decoration:none;font-weight:700;transition:transform .25s,background .25s,box-shadow .25s}
      .services-no-results a:hover{transform:translateY(-3px);background:#7023bd;box-shadow:0 12px 30px rgba(138,43,226,.25)}

      /* Reveal: cards use opacity only; other content keeps a subtle reveal. */
      .services-enhance-reveal{opacity:0;transition:opacity .7s cubic-bezier(.23,1,.32,1)}
      .services-enhance-reveal.is-visible{opacity:1}
      .services-content-reveal{opacity:0;transform:translateY(24px);transition:opacity .75s cubic-bezier(.23,1,.32,1),transform .75s cubic-bezier(.23,1,.32,1)}
      .services-content-reveal.is-visible{opacity:1;transform:none}

      /* Dynamically inserted cards need the same global styling as Vue-scoped cards. */
      .services-page .service-card{--service-accent:#8a2be2;--service-accent-soft:rgba(138,43,226,.12);position:relative;overflow:hidden;transition:background .35s,border-color .35s,box-shadow .35s;transform:none;}
      .services-page .service-card::before{content:'';position:absolute;inset:0;pointer-events:none;opacity:1;background:radial-gradient(circle at var(--mx,50%) var(--my,35%),var(--service-accent-soft),transparent 42%);transition:opacity .35s}
      .services-page .service-card:hover::before{opacity:1}
      .services-page .service-card:hover{background:linear-gradient(145deg,var(--service-accent-soft),#0e0e13);box-shadow:0 20px 45px rgba(0,0,0,.28),0 0 0 1px color-mix(in srgb,var(--service-accent) 20%,transparent);transform:translateY(-5px)}
      .services-page .service-card .service-icon{border-color:color-mix(in srgb,var(--service-accent) 55%,transparent);transition:border-color .35s,box-shadow .35s,transform .5s cubic-bezier(.23,1,.32,1)}
      .services-page .service-card .service-icon span{background:var(--service-accent);animation:serviceIconFloat 2.8s ease-in-out infinite}
      .services-page .service-card .service-icon span:nth-child(2) {
        background: color-mix(in srgb, var(--service-accent) 65%, #38bdf8);
        animation-delay: .12s;
      }
        
      .services-page .service-card .service-icon span:nth-child(3) {
        animation-delay: .24s;
      }
      .services-page .service-card:hover .service-icon{transform:rotate(45deg) scale(1.08);box-shadow:0 0 28px var(--service-accent-soft)}
      .services-page .service-card:hover .service-cta span{transform:translate(3px,-3px)}
      .services-page .service-cta span{display:inline-block;transition:transform .25s ease}
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

      /* Support / blueprint visuals become subtly alive without being noisy. */
      .services-page .support-visual{transition:transform .5s ease,filter .5s ease}
      .services-page .support-ring{animation:serviceRingFloat 5s ease-in-out infinite}
      .services-page .support-line{transform-origin:center;animation:serviceLinePulse 3.5s ease-in-out infinite}
      .services-page .support-dot{animation:serviceDotPulse 2.4s ease-in-out infinite}
      .services-page .custom-card:hover .custom-visual{transform:translateY(-5px) rotate(-1deg);filter:drop-shadow(0 18px 30px rgba(138,43,226,.16))}
      .services-page .custom-visual{transition:transform .5s cubic-bezier(.23,1,.32,1),filter .5s ease}
      .services-page .blueprint span{animation:serviceBlueprintPulse 3s ease-in-out infinite}
      .services-page .blueprint span:nth-child(2){animation-delay:.25s}.services-page .blueprint span:nth-child(3){animation-delay:.5s}.services-page .blueprint span:nth-child(4){animation-delay:.75s}
      @keyframes serviceRingFloat{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-7px) rotate(5deg)}}
      @keyframes serviceLinePulse{0%,100%{transform:scaleY(1);opacity:.55}50%{transform:scaleY(1.08);opacity:1}}
      @keyframes serviceDotPulse{0%,100%{transform:scale(1);box-shadow:0 0 0 0 rgba(138,43,226,.3)}50%{transform:scale(1.15);box-shadow:0 0 0 9px rgba(138,43,226,0)}}
      @keyframes serviceBlueprintPulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:1;transform:scale(1.03)}}

      /* Mobile: keep the decorative background inside the page instead of a fixed viewport layer. */
      .services-page{overflow:clip;isolation:isolate}
      .services-page::before{position:absolute;inset:0;height:100%;min-height:100%;pointer-events:none}
      .services-page .services-orb{position:absolute}
      @media(max-width:640px){
        .services-search{margin-bottom:2rem}
        .services-search input{height:52px;padding-top:0;padding-bottom:0}
        .services-search-icon{top:26px!important}
        .services-no-results{padding:2.5rem 1.25rem}
        .services-page .service-card:hover{transform:translateY(-2px)}
      }
      @media (prefers-reduced-motion:reduce){
        .services-enhance-reveal,.services-content-reveal{opacity:1;transform:none;transition:none}
        .service-card .service-icon span,.services-page .support-ring,.services-page .support-line,.services-page .support-dot,.services-page .blueprint span{animation:none}
        .services-search:focus-within .services-search-icon{animation:none}
      }
    `
    document.head.appendChild(style)
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

  const addServiceCard = (service: { title: string; short: string; detail: string }, index: number) => {
    const grid = document.querySelector<HTMLElement>('.services-grid')
    if (!grid || grid.querySelector(`[data-added-service="${CSS.escape(service.title)}"]`)) return

    const article = document.createElement('article')
    article.className = `service-card services-enhance-reveal ${toneFor(service.title)}`
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

  const setupSearch = () => {
    const heading = document.querySelector<HTMLElement>('.services-list-section .section-heading')
    const grid = document.querySelector<HTMLElement>('.services-grid')
    if (!heading || !grid || heading.querySelector('.services-search')) return

    const search = document.createElement('div')
    search.className = 'services-search'
    const fa = getLocale() === 'fa'
    search.innerHTML = `
      <input type="search" autocomplete="off" aria-label="${fa ? 'جستجوی خدمات' : 'Search services'}" placeholder="${fa ? 'مثلاً فروشگاه، طلافروشی، باشگاه، سئو...' : 'Try e-commerce, jewelry, gym, SEO...'}">
      <span class="services-search-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" stroke-width="1.8"/><path d="m16 16 5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>
      <div class="services-search-status" aria-live="polite"></div>
    `
    heading.appendChild(search)

    const input = search.querySelector('input') as HTMLInputElement
    const status = search.querySelector('.services-search-status') as HTMLElement
    const noResults = document.createElement('div')
    noResults.className = 'services-no-results'
    noResults.style.display = 'none'
    noResults.innerHTML = `<h3>${fa ? 'چیزی که می‌خواهید در لیست نیست؟' : 'Can’t find exactly what you need?'}</h3><p>${fa ? 'اشکالی ندارد. ایده و نیازتان را بگویید تا بر اساس همان، مسیر مناسب و پیشنهاد فنی پروژه‌تان را آماده کنیم.' : 'No problem. Tell us what you need and we will suggest the right solution and technical path for your project.'}</p><a href="https://t.me/THE_FADAKAR" target="_blank" rel="noopener noreferrer">${fa ? 'مشاوره در تلگرام' : 'Talk to us on Telegram'} <span>↗</span></a>`
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
      status.textContent = query && visible ? `${visible} ${fa ? 'خدمت مرتبط پیدا شد' : 'matching services found'}` : ''
    }
    input.addEventListener('input', filter)
  }

  let observer: IntersectionObserver | null = null
  const setupAnimations = () => {
    observer?.disconnect()
    const targets = document.querySelectorAll<HTMLElement>('.services-page .services-enhance-reveal, .services-page .services-content-reveal')
    if (!targets.length) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        } else {
          entry.target.classList.remove('is-visible')
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    targets.forEach((target) => observer!.observe(target))
  }

  const setupCardInteractions = () => {
    document.querySelectorAll<HTMLElement>('.services-page .service-card').forEach((card) => {
      if (card.dataset.interactive === 'true') return
      card.dataset.interactive = 'true'

      card.addEventListener('pointermove', (event) => {
        if (window.matchMedia('(hover: none)').matches) return
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
        card.style.setProperty('--my', `${event.clientY - rect.top}px`)
      })

      card.addEventListener('pointerleave', () => {
        card.style.removeProperty('--mx')
        card.style.removeProperty('--my')
      })
    })
  }

  const applyTones = () => {
    document.querySelectorAll<HTMLElement>('.services-page .service-card').forEach((card) => {
      const tone = toneFor(card.querySelector('h3')?.textContent || '')
      if (tone) card.classList.add(tone)
    })
  }

  const init = () => {
    if (!document.querySelector('.services-page')) return
    injectStyles()

    const locale = getLocale() as 'fa' | 'en'
    serviceAdditions[locale].forEach((service, index) => addServiceCard(service, index + 13))
    setupSearch()
    applyTones()
    setupCardInteractions()
    setupAnimations()

    requestAnimationFrame(() => setupAnimations())
  }

  const mutationObserver = new MutationObserver(() => {
    if (document.querySelector('.services-page .services-grid')) init()
  })
  mutationObserver.observe(document.documentElement, { childList: true, subtree: true })
  window.addEventListener('load', init, { once: true })
  setTimeout(init, 0)
})
