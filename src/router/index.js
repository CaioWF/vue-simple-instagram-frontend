import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'feed',
    component: () => import('../pages/feed/Feed.vue'),
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('../pages/new/New.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
