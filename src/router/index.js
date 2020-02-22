import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Gallery from "../views/Gallery.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import A from "../views/A.vue";
import B from "../views/B.vue";
import C from "../views/C.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
    children: [
      {
        path: "a",
        name: "a",
        component: A
      },
      {
        path: "b",
        name: "b",
        component: B
      },
      {
        path: "c",
        name: "c",
        component: C
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
