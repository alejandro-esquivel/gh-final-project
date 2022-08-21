import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from "../views/PostView";
import AuthorView from "@/views/AuthorView";
import ContactView from "@/views/ContactView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:postId',
    name: 'post',
    component: PostView,
    props: true
  },
  {
    path: '/author',
    name: 'author',
    component: AuthorView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "active"
})

export default router
