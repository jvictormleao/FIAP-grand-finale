import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import NovoChamadoView from '@/views/NovoChamadoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home/:name/:department',
      name: 'home',
      component: HomeView
    },
    {
      path: '/novochamado/:name/:department',
      name: 'novochamado',
      component: NovoChamadoView
    }
  ]
})

export default router
