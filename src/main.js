import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Login from './views/Login/index.vue';
import Home from './views/Home/index.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
