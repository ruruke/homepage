import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
// Lazy-load the Contact component when needed

/**
 * Route configuration
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: About,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: {
      title: 'Contact',
      hideInNav: false
    }
  }
]

/**
 * Router instance
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update document title based on route
router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title || 'お菓子食べませんか？'}`
  next()
})

export default router
