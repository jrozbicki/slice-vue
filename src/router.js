import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './views/Login/index.vue';
import Signup from './views/Signup/index.vue';
import Home from './views/Home/index.vue';

// LAYOUTS:
import PrivateLayout from './layouts/PrivateLayout';
import MembershipLayout from './layouts/MembershipLayout';
import DefaultLayout from './layouts/DefaultLayout';

Vue.use(VueRouter);
Vue.component('PrivateLayout', PrivateLayout);
Vue.component('MembershipLayout', MembershipLayout);
Vue.component('DefaultLayout', DefaultLayout);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/login', meta: { layout: 'MembershipLayout' }, component: Login },
    {
      path: '/signup',
      meta: { layout: 'MembershipLayout' },
      component: Signup
    },
    { path: '/', meta: { layout: 'PrivateLayout' }, component: Home }
  ]
});
