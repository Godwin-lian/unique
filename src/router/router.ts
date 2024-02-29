import { createRouter, createWebHistory } from "vue-router";
import Base from "../pages/Base.vue";
import SiteMap from "../pages/SiteMap.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "base",
      component: Base,
    },
    {
      path: '/sitemap.xml',
      name: 'sitemap',
      component: SiteMap,
      meta: { contentType: 'application/xml' } // Set the response content type
    },
  ],
});

export default router;
