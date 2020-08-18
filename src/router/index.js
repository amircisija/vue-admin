import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Hrm from "../views/Hrm.vue";
import UserProfile from '../components/User/UserProfile.vue';
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
  },
  {
    path: "/user/:id",
    name: "UserProfile",
    component: UserProfile,
    props: true
  },
  {
    path: "/user/edit/:id",
    name: "EditUser",
    component: () => import("../components/User/EditUser.vue"),
    props: true
  },
  {
    path: "/add-user",
    name: "AddUser",
    component: () => import("../components/User/AddUser.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
