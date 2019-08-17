import Vue from 'vue';
import Vuex from 'vuex';
import membership from './modules/membership';

Vue.use(Vuex);

export default new Vuex({
  modules: {
    membership
  }
});
