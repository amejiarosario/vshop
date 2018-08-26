import Vue from 'vue';
import Router from 'vue-router';
import Marketplace from './views/Marketplace.vue';
import Checkout from './views/Checkout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'marketplace',
      component: Marketplace,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "checkout" */ './views/Checkout.vue'),
    },
  ],
});
