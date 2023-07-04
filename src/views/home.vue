<script setup lang="ts">
import { ref } from "vue";
import type { TMicroRouter } from "../main";
const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const props = defineProps<{
  microRouter: TMicroRouter[];
}>();
</script>

<template>
  <el-row class="tac">
    <el-col :span="6">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item v-for="a in props.microRouter">
          <el-link :href="'/' + a.activeRule">{{ a.name }}</el-link>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18"> <div id="container"></div></el-col>
  </el-row>
</template>

<style scoped>
.tac {
  height: 100%;
}
</style>
