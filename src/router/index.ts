import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '/1/table',
          name: 'table',
          component: () => import('../views/TableView.vue')
        }
      ]
    }
  ]
})

export default router
