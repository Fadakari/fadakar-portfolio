<template>
  <footer class="portfolio-footer">
    <div class="footer-container">
      <div class="footer-content">
        <p class="footer-text">
          <span class="text-fade">{{ locale === 'fa' ? 'ساخته‌شده با دقت توسط' : 'Engineered with precision by' }}</span>
          <a href="https://fadakar-dev.ir" class="brand-name">Erfan Fadakar</a>
        </p>
        <span class="footer-divider" />
        <p class="footer-copyright">
          <span class="brand-highlight">Fadakar Dev</span> &copy; 2026
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { locale } = useLocale()
</script>

<style scoped>
.portfolio-footer{width:100%;padding:2rem 1rem;background:rgba(15,23,42,.4);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-top:1px solid rgba(255,255,255,.05);position:relative;z-index:10;box-sizing:border-box}.footer-container{max-width:1200px;margin:0 auto;display:flex;justify-content:center;align-items:center}.footer-content{display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap;justify-content:center}.footer-text,.footer-copyright{font-size:.95rem;color:#94a3b8;margin:0;display:flex;align-items:center;gap:.5rem}.text-fade{opacity:.8;font-weight:300;letter-spacing:.5px}.brand-name{font-weight:700;background:linear-gradient(to right,#38bdf8,#818cf8);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;text-decoration:none;letter-spacing:1px;position:relative;display:inline-block}.brand-name::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:linear-gradient(to right,#38bdf8,#818cf8);transition:width .4s ease;border-radius:2px}.brand-name:hover{text-shadow:0 0 15px rgba(56,189,248,.5)}.brand-name:hover::after{width:100%}.footer-divider{width:5px;height:5px;background:#38bdf8;border-radius:50%;opacity:.5}.brand-highlight{color:#e2e8f0;font-weight:600;letter-spacing:.5px}@media(max-width:768px){.footer-content{flex-direction:column;gap:.8rem}.footer-divider{width:40px;height:1px;border-radius:1px}}
</style>
