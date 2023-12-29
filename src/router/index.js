import { createRouter, createWebHistory, RouterView } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RedirectQuote from "@/views/RedirectQuote.vue";
import QuoteView from "@/views/QuoteView.vue";
import ExpiredView from "@/views/ExpiredView.vue";
import ShipmentView from "@/views/ShipmentView.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Trans from "@/i18n/translation";
import { useAuthStore } from "@/stores/auth";

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
        {
          path: "/:locale?/verify/quote/:customer_uuid/:access_token",
          name: "redirect-quote",
          component: RedirectQuote,
          props: true,
        },
        {
          path: "/:locale?/quote/:customer_uuid/:access_token",
          name: "quote",
          component: QuoteView,
          props: true,
        },
        {
          path: "/:locale?/quote/:customer_uuid/:access_token",
          name: "expired",
          component: ExpiredView,
          props: true,
        },
        {
          path: "/:locale?/auth/login",
          name: "login",
          component: Login,
          props: true,
        },
        {
          path: "/:locale?/auth/register",
          name: "register",
          component: Register,
          props: true,
        },
        {
          path: "/:locale?/shipment",
          name: "shipment",
          component: ShipmentView,
          props: true,
        },
      ],
    },
  ],
});

router.beforeEach(async (to) => {
  const publicPages = ["home", "login", "register"];
  const authRequired = !publicPages.includes(to.name);
  const auth = useAuthStore();

  console.log(to);

  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath; // Usar fullPath en lugar de name
    return { name: "login", params: { locale: to.params.locale } };
  }
});

export default router;
