import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; 
import PaintingPage from '../views/paintingPage.vue'; 
import MyExoplanetsSystem from '../views/MyExoplanetsSystem.vue';
import Spacetravel from '@/views/Spacetravel.vue';

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
