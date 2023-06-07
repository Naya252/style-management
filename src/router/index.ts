import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'style',
      redirect: '/meta',
      component: HomeView,
      children: [
        { path: 'meta', name: 'meta', component: () => import('../views/MetaData.vue') },
        {
          path: 'theme',
          name: 'theme',
          component: () => import('../views/ThemeSetting.vue')
        }
      ]
    }
  ]
})

export default router
