import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'usuarios',
      component: () => import('../views/UsuariosView.vue')
    },
    {
      path: '/grafica',
      name: 'grafica',
      component: () => import('../views/GraficaView.vue')
    },
  ]
})

export default router
