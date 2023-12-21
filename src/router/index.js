import { createRouter, createWebHistory, RouterView } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Trans from "@/i18n/translation";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Trans.routeMiddleware,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
      ],
    },
  ],
});

export default router;
