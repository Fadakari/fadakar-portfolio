<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '~/components/Header.vue'

const route = useRoute()
const showServicesHeader = computed(() => route.path === '/services' || route.path.startsWith('/services/'))
</script>

<template>
  <div class="site-layout">
    <Header v-if="showServicesHeader" />
    <slot />
  </div>
</template>
