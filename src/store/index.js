import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import axios from "axios";
// const apiLink = "https://next.json-generator.com/api/json/get/VJZuWm-Mt";



Vue.use(Vuex);
Vue.prototype.$http = axios;

let apiLink = "https://randomuser.me/api/?results=10";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state: {
    users: null,
    selectedUser: null
  },
  mutations: {
    selectUser(state, user) {
      state.selectedUser = user;
    },
    saveUsers(state, users) {
      state.users = users;
    }
  },
  getters: {
    user(state) {
      return state.selectedUser;
    },
    fullUserName(state) {
      return state.selectedUser.name.first + ' ' + state.selectedUser.name.last
    }
  },
  actions: {
    SELECT_USER({ commit }, user) {
      commit("selectUser", user)
    },
    LOAD_USERS({commit}) {
      console.log("Api Call recieved");
      axios
        .get(apiLink)
        .then(response => {
          console.log("Api Call pre commit");
          commit("saveUsers", response.data.results);
        })
    }
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
