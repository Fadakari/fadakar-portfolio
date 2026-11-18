<template>
  <section id="community" class="community-section" :dir="isRtl ? 'rtl' : 'ltr'" :class="{ 'rtl-mode': isRtl }">
    <div class="section-content internal-scroll">
      <div class="container">
        <h2 class="section-title anim-stagger">{{ copy.title }}</h2>
        <p class="section-subtitle anim-stagger">
          {{ copy.subtitle }}
        </p>

        <div class="community-grid">
          <!-- Main Channel Card (Highlighted) -->
          <div class="community-card highlight-card anim-stagger">
            <div class="card-icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.664 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ copy.channelTitle }}</h3>
              <p class="card-text">
                {{ copy.channelText }}
              </p>
            </div>
            <a href="https://t.me/fadakardev" target="_blank" rel="noopener noreferrer" class="cta-button primary-cta">
              {{ copy.channelCta }}
            </a>
          </div>

          <div class="sub-cards">
            <!-- Clients Group -->
            <div class="community-card anim-stagger">
              <div class="card-icon small-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.664 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <h3 class="card-title">{{ copy.clientsTitle }}</h3>
              <p class="card-text">
                {{ copy.clientsText }}
              </p>
              <a href="https://t.me/askingfadakar" target="_blank" rel="noopener noreferrer" class="cta-button">
                {{ copy.clientsCta }}
              </a>
            </div>

            <!-- Devs Group -->
            <div class="community-card anim-stagger">
              <div class="card-icon small-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.664 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <h3 class="card-title">{{ copy.devsTitle }}</h3>
              <p class="card-text">
                {{ copy.devsText }}
              </p>
              <a href="https://t.me/fadakargroup" target="_blank" rel="noopener noreferrer" class="cta-button">
                {{ copy.devsCta }}
              </a>
            </div>

            <!-- Instagram -->
            <div class="community-card anim-stagger">
              <div class="card-icon small-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>
              <h3 class="card-title">{{ copy.instaTitle }}</h3>
              <p class="card-text">
                {{ copy.instaText }}
              </p>
              <a href="https://instagram.com/fadakardev" target="_blank" rel="noopener noreferrer" class="cta-button">
                {{ copy.instaCta }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useLocale } from '~/composables/useLocale'

const { locale, isRtl } = useLocale()

const copy = computed(() => locale.value === 'fa' ? {
  title: 'فراتر از یک سایت',
  subtitle: 'در کنار ارائه خدمات توسعه و طراحی وب، یک فضای محتوایی و ارتباطی برای صاحبان کسب‌وکار، کارفرماها و توسعه‌دهنده‌ها ساخته‌ایم.',
  channelTitle: 'کانال Fadakar Dev',
  channelText: 'برای مطالب فنی، تجربه‌های توسعه، نکات کاربردی، معرفی پروژه‌ها و چیزهایی که در مسیر ساخت محصولات دیجیتال یاد می‌گیریم.',
  channelCta: 'ورود به کانال',
  clientsTitle: 'گروه کارفرماها',
  clientsText: 'اگر درباره خدمات، انتخاب تکنولوژی، هزینه، روند اجرای پروژه یا مناسب بودن یک راهکار سؤال دارید، اینجا بپرسید.',
  clientsCta: 'عضویت در گروه',
  devsTitle: 'گروه توسعه‌دهنده‌ها',
  devsText: 'فضایی برای بحث‌های فنی، تکنولوژی، توسعه نرم‌افزار، اشتراک تجربه‌های کاری و شبکه‌سازی.',
  devsCta: 'عضویت در گروه',
  instaTitle: 'اینستاگرام',
  instaText: 'محتوای تصویری، ارتباطات کوتاه‌تر و نگاهی به پشت صحنه زندگی یک توسعه‌دهنده.',
  instaCta: 'مشاهده صفحه'
} : {
  title: 'Beyond Just a Website',
  subtitle: 'Alongside web design and development services, we have built a collaborative community and knowledge hub for business owners, clients, and developers.',
  channelTitle: 'Fadakar Dev Channel',
  channelText: 'Technical insights, development workflows, practical architectural tips, project showcases, and lessons learned while building digital products.',
  channelCta: 'Join Telegram Channel',
  clientsTitle: 'Clients Community',
  clientsText: 'Have questions about services, technology stack, project pricing, development timelines, or solution viability? Ask here.',
  clientsCta: 'Join Clients Group',
  devsTitle: 'Developers Group',
  devsText: 'A collaborative space for technical discussions, software engineering, architecture debates, sharing real-world experiences, and networking.',
  devsCta: 'Join Devs Group',
  instaTitle: 'Instagram',
  instaText: 'Visual content, concise industry highlights, and an authentic behind-the-scenes look into modern web engineering.',
  instaCta: 'View Profile'
})
</script>

<style scoped>
.section-content {
  width: 100%;
  padding: 8rem 2rem;
  position: relative;
  z-index: 2;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  color: white;
  margin-bottom: 1rem;
  text-align: center;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 4rem auto;
  text-align: center;
  line-height: 1.8;
}

.community-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.community-card {
  background-color: var(--card-bg-color);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2.5rem;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.community-card:hover {
  transform: translateY(-5px);
  border-color: rgba(56, 189, 248, 0.3);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
}

.highlight-card {
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95));
  border: 1px solid rgba(56, 189, 248, 0.2);
}

.highlight-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 100% 0%, rgba(56, 189, 248, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
}

.highlight-card .card-icon {
  background: rgba(56, 189, 248, 0.1);
  padding: 1.5rem;
  border-radius: 20px;
  flex-shrink: 0;
}

.small-icon {
  margin-bottom: 1.5rem;
  justify-content: flex-start;
}

.card-content {
  flex: 1;
}

.card-title {
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 800;
}

.sub-cards .card-title {
  font-size: 1.25rem;
}

.card-text {
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.highlight-card .card-text {
  margin-bottom: 0;
  font-size: 1.1rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
}

.cta-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.primary-cta {
  background-color: var(--primary-color);
  color: #000;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  flex-shrink: 0;
  margin-top: 0;
}

.primary-cta:hover {
  background-color: #7dd3fc;
  box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2);
}

.sub-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 992px) {
  .highlight-card {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
  .highlight-card .card-icon {
    margin-bottom: 1rem;
  }
  
  .sub-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .section-content {
    padding: 5rem 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .sub-cards {
    grid-template-columns: 1fr;
  }
}

/* RTL Support adjustments */
.rtl-mode .highlight-card::before {
  background: radial-gradient(circle at 0% 0%, rgba(56, 189, 248, 0.1) 0%, transparent 50%);
}
</style>
