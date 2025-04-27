import {createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/homeView.vue'
import TrendView from "@/views/trendView.vue";
import PrivateView from "@/views/privateView.vue";
import SigninView from "@/views/signinView.vue";
import SignupView from "@/views/signupView.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/signin',
    name: 'Connexion',
    component: SigninView
  },
  {
    path: '/signup',
    name: 'Inscription',
    component: SignupView
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
