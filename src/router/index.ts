import { getToken } from "../api/auth";
import { userStore } from "../store/user";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      strict: true,
      component: () => import("../views/login.vue"),
    },
    {
      path: "/",
      name: "Home",
      component: () => import("../views/home.vue"),
    },
    {
      path: "/:subAppCode/*",
      component: () => import("../views/auth.vue"),
    },
  ],
});
router.beforeEach(async (from, to) => {
  const store = userStore();
  let isAuthenticated = !!store.token;
  if (!isAuthenticated) {
    const res = await getToken();
    if (res.response.status === 200) {
      store.token = res.response.data;
      isAuthenticated = true;
    }
  }
  if (from.name !== "Login" && !isAuthenticated) {
    return { name: "Login", path: "/login" };
  }
});
export default router;

