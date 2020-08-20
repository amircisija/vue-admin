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
    localUsers: null,
    selectedUser: null,
    departments: null,
  },
  mutations: {
    selectUser(state, user) {
      state.selectedUser = user;
    },
    saveUsers(state, users) {
      state.users = users;
      let cloneSheepsES6 = [...users];
      state.localUsers = cloneSheepsES6;
    },
    saveDepartments(state, departments) {
      state.departments = departments;
    },
    deleteUser(state) {
      state.selectedUser = null;
    },
    updateFirstName(state, value) {
      state.selectedUser.name.first = value;
    },
    updateLastName(state, value) {
      state.selectedUser.name.last = value;
    },
    updateUser(state, currentUser) {
      Object.assign(state.selectedUser, currentUser);
    }
  },
  getters: {
    user(state) {
      return state.selectedUser;
    },
    currentUser(state) {
      return state.selectedUser;
    },
    getUsers(state) {
      return state.users
    },
    getLocalUsers(state) {
      return state.localUsers;
    },
    fullUserName(state) {
      return state.selectedUser.name.first + ' ' + state.selectedUser.name.last
    },
    getUserDateOfBirth(state) {
      return state.selectedUser.dob.date;
    },
    getUserRegistrationDate(state) {
      return state.selectedUser.registered.date;
    }
  },
  actions: {
    SELECT_USER({
      commit
    }, user) {
      commit("selectUser", user)
    },
    DELETE_USER({
      commit
    }) {
      commit("deleteUser")
    },
    LOAD_USERS({
      commit
    }) {
      console.log("Api Call recieved");

      axios
        .get(apiLink)
        .then(response => {
          console.log("Api Call pre commit");
          commit("saveUsers", response.data.results);
        })
    },
    async UPDATE_USER({
      commit
    }, currentUser) {
      commit("updateUser", currentUser)
    },

  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
