import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// styles for vue-material
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
