import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: AboutView
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
