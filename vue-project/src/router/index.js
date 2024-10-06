import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Import HomeView
import PaintingPage from '../views/paintingPage.vue'; // Import PaintingPage

const routes = [
  {
    path: '/', // This path leads to HomeView
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/painting', // This path leads to PaintingPage
    name: 'Painting',
    component: PaintingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
