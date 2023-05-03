import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue";
import Users from "@/views/dashboard/Users.vue"
import Main from "@/views/dashboard/Home.vue"
import About from "@/views/dashboard/About.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'main',
        component: Main,
      },
      {
        path: 'users',
        name: 'users',
        component: Users,
      },
      {
        path: 'about',
        name: 'about',
        component: About,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
