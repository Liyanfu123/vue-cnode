import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Comment from "../views/comment/Comment";
import Login from "../views/login/Login";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home
  // },
  {
    //嵌套式路由  方法二
    path:"/", // 子路由
    component: Comment,   //父路由
    children:[
      {
        path:"",
        name:"Home",    // 子路由
        component:Home
      }
    ]
  },
  {
    //嵌套式路由  方法二
    path:"/detail", // 子路由
    component: Comment,   //父路由
    children:[
      {
        path:"",
        name:"detail",    // 子路由
        component:() => import("../views/detail/Detail")
      }
    ]
  },
  {
    //登录页面路由
    path:"/login",
    name:Login,
    component: () => import("../views/login/Login")
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
