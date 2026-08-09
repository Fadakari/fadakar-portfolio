export default defineNuxtPlugin(() => {
  const styleId = 'services-polish-style'

  const injectStyles = () => {
    if (document.getElementById(styleId)) return

    const style = document.createElement('style')
    style.id = styleId
    style.textContent = `
      /* FAQ: smooth open/close without changing the existing layout */
      .services-page .faq-list details p {
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        margin-top: 0;
        padding-bottom: 0 !important;
        transition: max-height .45s cubic-bezier(.23,1,.32,1), opacity .3s ease, padding-bottom .45s ease;
      }

      .services-page .faq-list details[open] p {
        max-height: 800px;
        opacity: 1;
        padding-bottom: 1.8rem !important;
      }

      .services-page .faq-list summary b {
        display: inline-block;
        transform: rotate(0deg);
        transition: transform .4s cubic-bezier(.23,1,.32,1), color .25s ease;
      }

      .services-page .faq-list details[open] summary b {
        transform: rotate(45deg);
        color: #8a2be2;
      }

      .services-page .faq-list details summary {
        transition: color .25s ease, background-color .25s ease;
      }

      .services-page .faq-list details summary:hover {
        color: #fff;
      }

      /* Keep the decorative background attached to the page, not the viewport. */
      .services-page {
        overflow: clip !important;
        isolation: isolate;
      }

      .services-page::before {
        position: absolute !important;
        inset: 0 !important;
        width: 100% !important;
        height: 100% !important;
        min-height: 100% !important;
        pointer-events: none !important;
      }

      .services-page .services-orb {
        position: absolute !important;
        max-width: 100vw;
        max-height: 100vw;
      }

      @media (max-width: 640px) {
        .services-page::before {
          background-size: 52px 52px !important;
          mask-image: linear-gradient(to bottom, black 0%, rgba(0,0,0,.75) 45%, transparent 100%) !important;
          -webkit-mask-image: linear-gradient(to bottom, black 0%, rgba(0,0,0,.75) 45%, transparent 100%) !important;
        }

        .services-page .services-orb {
          width: 78vw !important;
          height: 78vw !important;
          max-width: 78vw;
          max-height: 78vw;
          filter: blur(70px) !important;
        }

        .services-page .orb-one {
          top: 3% !important;
          right: -8% !important;
        }

        .services-page .orb-two {
          top: 52% !important;
          left: -8% !important;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .services-page .faq-list details p,
        .services-page .faq-list summary b {
          transition: none !important;
        }
      }
    `
    document.head.appendChild(style)
  }

  const setup = () => {
    if (!location.pathname.startsWith('/services')) return
    injectStyles()
  }

  nuxtApp.hook('page:finish', () => requestAnimationFrame(setup))
  requestAnimationFrame(setup)
})
