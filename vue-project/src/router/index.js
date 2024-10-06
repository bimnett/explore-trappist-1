import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpaceTravelView from "@/views/SpaceTravelView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/travel',
      name: 'travel',
      component: SpaceTravelView
    }
  ]
})

export default router
