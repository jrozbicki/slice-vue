import Vue from 'vue';
import App from './App.vue';
import router from './router';

// styles for vue-material
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
