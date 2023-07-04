<script setup lang="ts">
import type { TMicroRouter } from "./main";
import { RouterView } from "vue-router";
import Home from "./views/home.vue";
const props = defineProps<{
  microRouter: TMicroRouter[];
}>();
const isLoginPage = location.pathname === "/login";
</script>

<template>
  <Home v-if="!isLoginPage" :microRouter="props.microRouter" />
  <RouterView :microRouter="props.microRouter" />
</template>

<style scoped></style>
