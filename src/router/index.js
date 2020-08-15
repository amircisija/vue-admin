import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hrm from "../views/Hrm.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/hrm",
    name: "Hrm",
    component: Hrm
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* component: () => import("../views/Hrm.vue") */
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
