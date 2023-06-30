import { registerMicroApps, start } from "qiankun";
import { createRouter, createWebHistory } from "vue-router";
import { createApp, type ComponentPublicInstance } from "vue";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import "element-plus/dist/index.css";
import "./assets/main.css";

export type TMicroRouter = {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
};

const microRouter: TMicroRouter[] = [
  {
    name: "vueApp",
    entry: "//localhost:8081",
    container: "#container",
    activeRule: "app-vue",
  },
];

const app = createApp(App, { microRouter });

app.use(router);
app.use(ElementPlus);

app.mount("#app");

registerMicroApps(microRouter);
// 启动 qiankun
start();

