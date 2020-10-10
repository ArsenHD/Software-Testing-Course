import VueRouter, { RouteConfig } from "vue-router";
import StarsListPage from "@/view/views/StarsListPage.vue";
import StarDetailPage from "@/view/views/StarDetailPage.vue";
import StarNewPage from "@/view/views/StarNewPage.vue";

const routes: Array<RouteConfig> = [
  {
      path: "/",
      component: StarsListPage
  },
  {
      path: "/stars/new",
      component: StarNewPage
  },
  {
      path: "/stars/:id",
      component: StarDetailPage
  }
];

const router = new VueRouter({
    routes
});

export default router;
