<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  // Hide the initial load screen after the first mount
  setTimeout(() => {
    isLoading.value = false
  }, 200)

  const nuxtApp = useNuxtApp()

  nuxtApp.hook('page:start', () => {
    isLoading.value = true
  })

  nuxtApp.hook('page:finish', () => {
    // Add a tiny delay to ensure smooth transition and DOM paint
    setTimeout(() => {
      isLoading.value = false
    }, 300)
  })
})
</script>

<template>
  <Transition name="fade-loading">
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-content">
        <span class="loading-text">FADAKAR</span>
        <div class="loading-bar">
          <div class="loading-progress"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: #050507;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loading-text {
  font-size: 0.75rem;
  letter-spacing: 0.35em;
  color: #fff;
  font-weight: 700;
  opacity: 0.8;
}

.loading-bar {
  width: 120px;
  height: 2px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.loading-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 30%;
  background: #8a2be2;
  box-shadow: 0 0 10px #8a2be2;
  border-radius: 4px;
  animation: loading-swipe 1s infinite ease-in-out;
}

@keyframes loading-swipe {
  0% {
    left: -30%;
    width: 30%;
  }
  50% {
    width: 50%;
  }
  100% {
    left: 100%;
    width: 30%;
  }
}

.fade-loading-enter-active,
.fade-loading-leave-active {
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-loading-enter-from,
.fade-loading-leave-to {
  opacity: 0;
}
</style>
