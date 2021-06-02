import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/main.vue";
import About from "../views/about.vue";
import Reference from "../views/reference.vue";
import Youtube from "../views/youtube.vue";
import Script from "../views/script.vue";
import Contact from "../views/contact.vue";
import Portfolio from "../views/portfolio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },{
    path: "/reference",
    name: "Reference",
    component: Reference,
  },{
    path: "/youtube",
    name: "Youtube",
    component: Youtube,
  },{
    path: "/script",
    name: "Script",
    component: Script,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },{
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
