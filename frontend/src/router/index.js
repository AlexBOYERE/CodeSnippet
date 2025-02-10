import {createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/homeView.vue'
import TrendView from "@/views/trendView.vue";
import PrivateView from "@/views/privateView.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/trend',
    name: 'Trend',
    component: TrendView
  },
  {
    path: '/private',
    name: 'Private',
    component: PrivateView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
