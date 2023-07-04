<script setup lang="ts">
import type { TMicroRouter } from "../main";
const props = defineProps<{
  microRouter: TMicroRouter[];
}>();
</script>

<template>
  <div v-for="a in props.microRouter">
    <el-link :href="'/' + a.activeRule">{{ a.name }}</el-link>
  </div>
  <div id="container"></div>
</template>

<style scoped></style>
