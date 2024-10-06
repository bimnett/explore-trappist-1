import { createRouter, createWebHistory } from 'vue-router';
import PaintingPage from '../views/paintingPage.vue'; 
import HomeView from '../views/HomeView.vue'; 
import Mainpage from '../views/Mainpage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Mainpage, 
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
