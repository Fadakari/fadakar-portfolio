<script setup lang="ts">
import AnimatedGradientBackground from '../AnimatedGradientBackground.vue'
import { gsap } from 'gsap'

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<template>
  <section class="hero-container" id="hero">
    <div class="section-content internal-scroll">
      <h1 class="hero-name anim-stagger">{{ $t('hero.name') }}</h1>
      <p class="hero-title anim-stagger">{{ $t('hero.title') }}</p>
      <p class="hero-description anim-stagger">{{ $t('hero.description') }}</p>
    </div>

    <div @click="scrollToContact" class="contact-scroll-indicator">
      <span class="indicator-text">{{ $t('hero.connect') }}</span>
      <div class="indicator-line"></div>
    </div>
  </section>
</template>

<style scoped>
.hero-container {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 7rem 2rem 0rem;
}

.section-content {
  width: min(100%, 900px);
}

.hero-name {
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  line-height: 1.15;
  color: var(--primary-color);
  margin-bottom: 0.75rem;
  overflow-wrap: anywhere;
}

.hero-title {
  font-size: clamp(1.05rem, 3vw, 1.5rem);
  line-height: 1.45;
  color: var(--text-color);
  margin: 0 auto 1.25rem;
  max-width: 760px;
}

.hero-description {
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  line-height: 1.8;
  max-width: 600px;
  color: #94a3b8;
  margin: 0 auto;
}

.contact-scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  z-index: 10;
}

.indicator-text {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 400;
  transition: color 0.3s ease;
  user-select: none;
}

.indicator-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, var(--primary-color), transparent);
  position: relative;
  overflow: hidden;
}

.indicator-line::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 15px;
  background: #fff;
  animation: scan-down 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-scroll-indicator:hover .indicator-text {
  color: var(--primary-color);
}

@keyframes scan-down {
  0% { transform: translateY(-15px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(40px); opacity: 0; }
}

@media (max-width: 768px) {
  .hero-container {
    min-height: 100svh;
    padding: 1rem 1.25rem 6rem;
  }

  .hero-name {
    max-width: 100%;
    margin-bottom: 0.6rem;
  }

  .hero-title {
    max-width: 95%;
    margin-bottom: 1rem;
  }

  .hero-description {
    max-width: 92%;
  }

  .contact-scroll-indicator {
    bottom: 1.5rem;
  }
}

@media (max-width: 420px) {
  .hero-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .hero-name {
    font-size: clamp(1.9rem, 9vw, 2.3rem);
  }

  .hero-title {
    font-size: 1rem;
  }

  .hero-description {
    font-size: 0.9rem;
    line-height: 1.7;
  }
}
</style>
