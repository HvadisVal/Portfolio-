import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactMe.vue')
    },
    {
      path: '/logo',
      name: 'logo',
      component: () => import('../views/Logos.vue')
    },
    {
      path: '/ux',
      name: 'ux',
      component: () => import('../views/UxView.vue')
    },
    {
      path: '/poster',
      name: 'poster',
      component: () => import('../views/Poster.vue')
    },
    {
      path: '/bcards',
      name: 'bcards',
      component: () => import('../views/BusinessCards.vue')
    },
    {
      path: '/art',
      name: 'art',
      component: () => import('../views/ArtView.vue')
    }
    
  ]
})

export default router