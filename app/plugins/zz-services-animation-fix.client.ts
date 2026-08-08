export default defineNuxtPlugin((nuxtApp) => {
  const styleId = 'services-independent-animation-fix'

  const injectFixStyles = () => {
    if (document.getElementById(styleId)) return
    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      /* Sections themselves stay static; their contents reveal independently. */
      .services-page main > section.services-enhance-reveal{opacity:1!important;transform:none!important;transition:none!important}
      .services-independent-reveal{opacity:0;transition:opacity .75s cubic-bezier(.23,1,.32,1),transform .75s cubic-bezier(.23,1,.32,1)}
      .services-independent-reveal.is-visible{opacity:1;transform:none}
      @media (prefers-reduced-motion:reduce){.services-independent-reveal{opacity:1;transform:none;transition:none}}
    `
    document.head.appendChild(style)
  }

  let observer: IntersectionObserver | null = null

  const setup = () => {
    if (!location.pathname.startsWith('/services')) return
    injectFixStyles()

    observer?.disconnect()
    const targets = document.querySelectorAll<HTMLElement>([
      '.services-hero .hero-copy',
      '.services-hero .hero-visual',
      '.trust-grid > div',
      '.services-list-section .section-heading',
      '.method-section .section-heading',
      '.method-section .method-card',
      '.support-section .support-visual',
      '.support-section .support-copy',
      '.custom-card .custom-copy',
      '.custom-card .custom-visual',
      '.faq-section .section-heading',
      '.faq-section .faq-list details',
    ].join(','))

    if (!targets.length) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement
        if (entry.isIntersecting) element.classList.add('is-visible')
        else element.classList.remove('is-visible')
      })
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' })

    targets.forEach((element, index) => {
      element.classList.add('services-independent-reveal')
      if (element.classList.contains('service-card') || element.classList.contains('method-card')) {
        element.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`
      }
      observer!.observe(element)
    })
  }

  nuxtApp.hook('page:finish', () => requestAnimationFrame(setup))
  requestAnimationFrame(setup)
})
