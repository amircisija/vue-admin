import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mirage from "../views/Mirage.vue";
import Hrm from "../views/Hrm.vue";
import Projects from "../views/Projects.vue";
import UserProfile from "../components/User/UserProfile.vue";
import MirageUserProfile from "../components/Mirage/MirageUserProfile.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/mirage",
    name: "Mirage",
    component: Mirage
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/departments",
    name: "Departments",
    component: () => import("../views/Departments")
  },
  {
    path: "/mirage-add-user",
    name: "AddMirageUser",
    component: () => import("../components/Mirage/AddMirageUser.vue")
  },
  {
    path: "/mirage/user/:id",
    name: "MirageUserProfile",
    component: MirageUserProfile,
    props: true
  },
  {
    path: "/mirage/user/edit/:id",
    name: "EditMirageUser",
    component: () => import("../components/Mirage/EditMirageUser.vue"),
    props: true
  },
  {
    path: "/hrm",
    name: "Hrm",
    component: Hrm
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
