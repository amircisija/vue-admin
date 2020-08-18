import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./assets/scss/style.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import {
  Server
} from "miragejs";

new Server({
  seeds(server) {
    server.db.loadData({
      users: [{
        gender: "female",
        name: {
          title: "Mrs",
          first: "Mona",
          last: "Oldervik"
        },
        location: {
          street: {
            number: 1458,
            name: "Bolette Brygge"
          },
          city: "Volda",
          state: "Buskerud",
          country: "Norway",
          postcode: "6658",
          coordinates: {
            latitude: "57.1643",
            longitude: "149.2949"
          },
          timezone: {
            offset: "+8:00",
            description: "Beijing, Perth, Singapore, Hong Kong"
          }
        },
        email: "mona.oldervik@example.com",
        login: {
          uuid: "ba9d21f2-612e-4e91-bfa0-fc9a6cb758fe",
          username: "angrywolf789",
          password: "nebraska",
          salt: "hj46Je08",
          md5: "6db9a246a21ef1e06ec45094b3c2a009",
          sha1: "bb2021b73503034132407c5b73fe6c9fffbf4dfc",
          sha256: "1a9ea064ed8843364c5e1ba7e1bfbe731ecc278f24fbf24ec545553e95a6601f"
        },
        dob: {
          date: "1975-03-10T14:33:10.746Z",
          age: 45
        },
        registered: {
          date: "2013-07-26T17:38:53.692Z",
          age: 7
        },
        phone: "76435985",
        cell: "49834175",
        picture: {
          large: "https://randomuser.me/api/portraits/women/40.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg"
        },
        nat: "NO"
      }]
    })
  },
  routes() {
    this.timing = 50
    this.namespace = 'api'
    this.get('/users', (schema) => {
      return schema.db.users;
    })

    this.post('/users', (schema, request) => {
      let user = JSON.parse(request.requestBody);
      console.log(user)
      return schema.db.users.insert([{
        name: {
          first: user.name.first,
          last: user.name.last
        },
      }]);
    })


  }
})

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
