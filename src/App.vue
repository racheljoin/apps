<script setup lang="ts">
import type { TMicroRouter } from "./main";
import { RouterView } from "vue-router";
const props = defineProps<{
  microRouter: TMicroRouter[];
}>();
</script>

<template>
  <RouterView :microRouter="props.microRouter" />
</template>

<style scoped></style>
