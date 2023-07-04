<script setup lang="ts">
import type { TMicroRouter } from "../main";

const props = defineProps<{
  microRouter: TMicroRouter[];
}>();
</script>

<template>
  <el-row class="tac">
    <el-col :span="6">
      <el-menu default-active="2" class="el-menu-vertical">
        <el-menu-item v-for="a in props.microRouter">
          <el-link :href="'/' + a.activeRule">{{ a.name }}</el-link>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18"> <div id="container"></div></el-col>
  </el-row>
</template>

<style scoped>
.tac,
.el-menu-vertical {
  height: 100%;
}
</style>
