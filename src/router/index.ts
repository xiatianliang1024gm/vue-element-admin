import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/IndexView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
          meta: { title: '首页' }
        },
        {
          path: '/1',
          name: 'table',
          meta: { title: '菜单栏1' },
          redirect: '/1/table',
          children: [
            {
              path: '/1/table',
              name: 'table',
              component: () => import('../views/TableView.vue'),
              meta: { title: '子菜单1' }
            },
            {
              path: '/1/tree',
              name: 'tree',
              component: () => import('../views/TreeView.vue'),
              meta: { title: '子菜单2' }
            }
          ]
        }
      ]
    }
  ]
})

export default router
