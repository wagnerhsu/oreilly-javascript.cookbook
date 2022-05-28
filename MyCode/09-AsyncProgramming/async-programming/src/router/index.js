import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/concurrentpromise',
    component: () => import('../views/ConcurrencyView.vue'),
  },
  {
    path: '/async',
    name: 'async',
    component: () => import('../views/AsyncView.vue'),
  },
  {
    path: '/asyncgenerator',
    name: 'asyncgenerator',
    component: () => import('../views/AsyncGeneratorView.vue'),
  },
  {
    path: '/webworker',
    name: 'webworker',
    component: () => import('../views/WebWorkerView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
