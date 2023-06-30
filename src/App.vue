<script setup lang="ts">
import type { TMicroRouter } from './main';
import { RouterView } from 'vue-router'
import Home from './views/home.vue';
  const props = defineProps<{
    microRouter: TMicroRouter[],
  }>()
  const isLoginPage = location.pathname === "/login"
</script>

<template>
  <Home v-if="!isLoginPage" :microRouter="props.microRouter" />
  <RouterView :microRouter="props.microRouter" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
