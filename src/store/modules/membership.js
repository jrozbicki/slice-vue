import { signIn, signOut } from '../../api/membership';
import router from '../../router';

const state = {
  currentUser: null
};

const getters = {};

const actions = {
  loginAction: async (props, { email, password }) => {
    await signIn(email, password);
    router.push('/');
  },

  logoutAction: async () => {
    await signOut();
    router.push('/login');
  }
};

const mutations = {
  setCurrentUser: (state, currentUser) => (state.currentUser = currentUser)
};

export default {
  state,
  getters,
  actions,
  mutations
};
