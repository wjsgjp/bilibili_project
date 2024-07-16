
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import GOGO from "../views/upsearch_views.vue";
import Home from "../views/home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/up_info",
    component: GOGO,
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
