import { createRouter, createWebHistory } from 'vue-router';
import PaintingPage from '../views/paintingPage.vue'; 
import HomeView from '../views/HomeView.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView, 
  },
  {
    path: '/painting',
    name: 'Painting',
    component: PaintingPage, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
