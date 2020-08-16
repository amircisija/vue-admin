import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state: {
    selectedUser: {}
  },
  mutations: {
    selectUser(state, user) {
      // mutate state
      state.selectedUser = user
    }
  },
  getters: {
    user(state) {
      return state.selectedUser;
    }
  },
  actions: {
    SELECT_USER({
      commit
    }, user) {
      commit('selectUser', user)
    }
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
