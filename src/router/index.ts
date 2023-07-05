import { getToken } from "../api/auth";
import { userStore } from "../store/user";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/:subAppCode+",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      strict: true,
      component: () => import("../views/login.vue"),
    },
  ],
});

router.beforeEach(async (from, to) => {
  if (from.name !== "Login") {
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
      return { name: "Login", path: "/login" };
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
      return {
        name: "Home",
      };
    }
  }
});
export default router;

