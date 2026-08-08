<template>
  <div class="gradient-bg" aria-hidden="true">
    <div class="gradients-container">
      <div v-for="n in 4" :key="n" :class="`blob color-${n}`"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

let tweens: gsap.core.Tween[] = []

onMounted(() => {
  const blobs = gsap.utils.toArray<HTMLElement>('.blob')

  const moveBlob = (blob: HTMLElement) => {
    const tween = gsap.to(blob, {
      xPercent: gsap.utils.random(-60, 60),
      yPercent: gsap.utils.random(-60, 60),
      duration: gsap.utils.random(2, 4),
      ease: 'sine.inOut',
      onComplete: () => moveBlob(blob),
    })

    tweens.push(tween)
  }

  blobs.forEach(moveBlob)
})

onUnmounted(() => {
  tweens.forEach((tween) => tween.kill())
  tweens = []
})
</script>

<style scoped>
.gradient-bg {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background: #09090b;
}

.gradients-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: blur(90px);
  opacity: 0.9;
}

.blob {
  position: absolute;
  top: 55%;
  left: 40%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  opacity: 0.65;
  will-change: transform;
  filter: blur(70px);
}

.color-1 {
  top: 30%;
  left: 40%;
  background: #ff7231;
}

.color-2 {
  top: 10%;
  left: 30%;
  background: #9b2cff;
}

.color-3 {
  top: 55%;
  left: 20%;
  background: #ff31d2;
  opacity: 0.35;
}

.color-4 {
  top: 30%;
  left: 40%;
  background: #168cff;
}
</style>
