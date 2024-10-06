import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Import HomeView
import PaintingPage from '../views/paintingPage.vue'; // Import PaintingPage
import MyExoplanetsSystem from '../views/MyExoplanetsSystem.vue';
import Spacetravel from '@/views/Spacetravel.vue';

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
  {
    path:'/MyExoplanetsSystem',
    name : 'MyExoplanetsSystem',
    component: MyExoplanetsSystem,
  },
  {
    path:'/travel',
    name : 'SpaceTravel',
    component: Spacetravel,
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
