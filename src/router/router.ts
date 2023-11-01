import { createRouter, createWebHistory } from "vue-router";
import Base from "../pages/Base.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "base",
      component: Base,
    },
  ],
});

export default router;
