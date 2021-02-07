import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "user",
    component: () =>
      import(/* webpackChunkName: "main" */ "../components/layout/TheMain.vue"),
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "main" */ "../views/Dashboard.vue")
      },
      {
        path: "user",
        component: () =>
          import(
            /* webpackChunkName: "user" */ "../views/user/UserWrapper.vue"
          ),
        children: [
          {
            path: "",
            name: "User",
            component: () =>
              import(/* webpackChunkName: "user" */ "../views/user/User.vue")
          },
          {
            path: "details",
            name: "UserDetails",
            component: () =>
              import(
                /* webpackChunkName: "user" */ "../views/user/UserDetails.vue"
              )
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
