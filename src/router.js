import Vue from 'vue';
import Router from 'vue-router';
import isAuthenticated from './utils/isAuthenticated';

// LAYOUTS:
import PrivateLayout from './layouts/PrivateLayout';
import MembershipLayout from './layouts/MembershipLayout';
import DefaultLayout from './layouts/DefaultLayout';

Vue.use(Router);
Vue.component('PrivateLayout', PrivateLayout);
Vue.component('MembershipLayout', MembershipLayout);
Vue.component('DefaultLayout', DefaultLayout);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      meta: { layout: 'MembershipLayout' },
      component: () =>
        import(/* webpackChunkName: "Login" */ './views/Login/index.vue'),
      beforeEnter: (to, from, next) => (isAuthenticated() ? next('/') : next())
    },
    {
      path: '/signup',
      meta: { layout: 'MembershipLayout' },
      component: () =>
        import(/* webpackChunkName: "SignUp" */ './views/Signup/index.vue'),
      beforeEnter: (to, from, next) => (isAuthenticated() ? next('/') : next())
    },
    {
      path: '/',
      meta: { layout: 'PrivateLayout' },
      component: () =>
        import(/* webpackChunkName: "Home" */ './views/Home/index.vue'),
      beforeEnter: (to, from, next) =>
        !isAuthenticated() ? next('/login') : next()
    },
    { path: '*', redirect: '/login' }
  ]
});

export default router;
