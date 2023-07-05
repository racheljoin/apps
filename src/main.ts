import { registerMicroApps, start } from "qiankun";
import { createApp } from "vue";
import ElementPlus from "element-plus";
import { createPinia, setActivePinia } from "pinia";
import router from "./router";
import "element-plus/dist/index.css";
import "./assets/main.css";
import App from "./App.vue";
import { userStore } from "./store/user";
import { getToken } from "./api/auth";

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
const pinia = createPinia();
setActivePinia(pinia);

const app = createApp(App, { microRouter });

app.use(pinia);
app.use(router);
app.use(ElementPlus);

app.mount("#app");
registerMicroApps(microRouter, {
  beforeMount: [
    async (app) => {
      if (location.pathname !== "/login") {
        const store = userStore();
        let isAuthenticated = !!store.token;
        if (!isAuthenticated) {
          const res = await getToken();
          if (res?.data) {
            store.token = res.data;
            isAuthenticated = true;
          }
        }
        if (!isAuthenticated) {
          router.replace("/login");
        }
      } else {
        const store = userStore();
        let isAuthenticated = !!store.token;
        if (!isAuthenticated) {
          const res = await getToken();
          if (res?.data) {
            store.token = res.data;
            isAuthenticated = true;
          }
        }
        if (isAuthenticated) {
          router.replace("/");
        }
      }
      console.log("before mount", app.name);
    },
  ],
});
// 启动 qiankun
start({ sandbox: { experimentalStyleIsolation: true } });

