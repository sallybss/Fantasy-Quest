import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue'; 

const routes = [
  { path: '/', component: HomeView },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = `Fantasy Festival Quest`; 
  next();
});

export default router;