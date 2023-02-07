import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main'
import Table from '@/pages/Table'
import Layout from '@/pages/Layout'
import NotFound from '@/pages/NotFound'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/table',
    name: 'table',
    component: Table,
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
