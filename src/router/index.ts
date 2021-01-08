import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    redirect: '/login'
  },
  {
    path: '/login',
    // name: 'Login',
    component: Login
  },
  {
    path: '/register',
    // name: 'Register',
    component: Register
  }
  // {
  //   path: 'register',
  //   redirect: 'register'
  // },
  // {
  //   path: 'register',
  //   component: Register
  // },
  // {
  //   path: '/tabs/',
  //   component: Tabs,
  //   children: [
  //     {
  //       path: '',
  //       redirect: '/tabs/tab1'
  //     },
  //     {
  //       path: 'tab1',
  //       component: () => import('@/views/Tab1.vue')
  //     },
  //     {
  //       path: 'tab2',
  //       component: () => import('@/views/Tab2.vue')
  //     },
  //     {
  //       path: 'tab3',
  //       component: () => import('@/views/Tab3.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
