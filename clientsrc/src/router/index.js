import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Bugs from "../Pages/Bugs.vue";
// @ts-ignore
import Profile from "../Pages/Profile.vue";
import { authGuard } from "@bcwdev/auth0-vue";
// @ts-ignore
import  ActiveBug from "../Pages/ActiveBug.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Bugs",
    component: Bugs,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/bugs/:id",
    name: "ActiveBug",
    component: ActiveBug,
    beforeEnter: authGuard,
  },
  {
    path: "*",
    redirect: '/'
  },
  // FIXME Pretty Sure im going to need to add path
  // /bugs and /notes
];

const router = new VueRouter({
  routes,
});

export default router;
