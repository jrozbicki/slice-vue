import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './views/Login/index.vue';
import Home from './views/Home/index.vue';

// LAYOUTS:
import PrivateLayout from './layouts/PrivateLayout';
import MembershipLayout from './layouts/MembershipLayout';
import DefaultLayout from './layouts/DefaultLayout';

Vue.use(VueRouter);
Vue.component('PrivateLayout', PrivateLayout);
Vue.component('MembershipLayout', MembershipLayout);
Vue.component('DefaultLayout', DefaultLayout);

const routes = [
  { path: '/login', meta: { layout: 'MembershipLayout' }, component: Login },
  { path: '/', meta: { layout: 'PrivateLayout' }, component: Home },
  { path: '/signup', component: Home }
];

export default new VueRouter({
  routes,
  mode: 'history'
});
