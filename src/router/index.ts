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
          // 如果不在/的children中，布局就丢失了，只有notfound页面
          path: '/:pathMatch(.*)*',
          name: 'NotFound',
          meta: { title: 'NotFound' },
          component: () => import('../views/NotFound.vue')
        },
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
