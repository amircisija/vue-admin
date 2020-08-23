import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./assets/scss/style.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import {
  Server,
  Model,
  belongsTo,
  hasMany
} from "miragejs";

new Server({
  models: {
    user: Model.extend({
      files: hasMany()
    }),

    files: Model.extend({
      user: belongsTo()
    })
  },

  seeds(server) {
    server.db.loadData({
      files: [{
          name: "file-1.pdf",
          userId: 4
        },
        {
          name: "file-2.pdf",
          userId: 4
        },
        {
          name: "file-3.pdf",
          userId: 4
        },
        {
          name: "file-4.pdf",
          userId: 1
        }
      ],
      departments: [{
          text: "Sarajevo",
          address: "Test Address 99",
          municipality: "New City"
        },
        {
          text: "Tuzla",
          address: "Test Address 19",
          municipality: "Old City"
        }
      ],
      users: [{
          gender: "female",
          name: {
            title: "Mrs",
            first: "Mona",
            last: "Oldervik"
          },
          startDate: new Date().toISOString().substr(0, 10),
          endDate: new Date().toISOString().substr(0, 10),
          parentName: "",
          jmbg: "1007979181947",
          position: "Call Agent",
          bank: "Sparkasse",
          bankId: "154304999684120",
          travelExpenses: true,
          department: "Tuzla",
          location: {
            street: {
              number: 1458,
              name: "Bolette Brygge"
            },
            city: "Volda",
            country: "Norway",
            postcode: "6658",
            municipality: "Kingston",
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
            date: "2020-08-10T17:38:53.692Z",
            age: 7
          },
          phone: "76435985",
          cell: "49834175",
          picture: {
            large: "https://randomuser.me/api/portraits/women/40.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg"
          },
          nat: "NO",
          isActive: true
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Hugh",
            last: "Russell"
          },
          parentName: "",
          startDate: new Date().toISOString().substr(0, 10),
          endDate: "2020-08-26",
          jmbg: "1007979181947",
          position: "Call Agent",
          bank: "Sparkasse",
          bankId: "154304999684120",
          travelExpenses: true,
          department: "Sarajevo",
          location: {
            street: {
              number: 1492,
              name: "Victoria Street"
            },
            city: "Derby",

            country: "United Kingdom",
            postcode: "D9J 7NN",
            municipality: "Boston Hights",
            coordinates: {
              latitude: "7.6025",
              longitude: "-14.4795"
            },
            timezone: {
              offset: "-7:00",
              description: "Mountain Time (US & Canada)"
            }
          },
          email: "hugh.russell@example.com",
          login: {
            uuid: "6c32f4f4-50e9-4fe5-a4e2-ca3f252af3f9",
            username: "tinydog825",
            password: "darrell",
            salt: "uc5K04w6",
            md5: "073e881c8dc0a829ac4b450d22bd076c",
            sha1: "a6fdd59d670e7a08d5066b86936005e9dd6d8f1e",
            sha256: "bd69afa2d6d4e38acd138b0b3f1fa8ea6ed06c54a5aed59dbe21d752166b5631"
          },
          dob: {
            date: "1979-09-08T07:27:19.539Z",
            age: 41
          },
          registered: {
            date: "2006-01-14T23:54:17.768Z",
            age: 14
          },
          phone: "016977 49847",
          cell: "0790-703-668",

          picture: {
            large: "https://randomuser.me/api/portraits/men/98.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/98.jpg"
          },
          nat: "GB",
          isActive: true
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Cailane",
            last: "Araújo"
          },
          parentName: "",
          startDate: new Date().toISOString().substr(0, 10),
          endDate: "2020-09-26",
          jmbg: "1007979181947",
          position: "Call Agent",
          bank: "Sparkasse",
          bankId: "154304999684120",
          travelExpenses: true,
          department: "Sarajevo",
          location: {
            street: {
              number: 1997,
              name: "Avenida da Legalidade"
            },
            city: "Santos",

            country: "Brazil",
            postcode: 31969,
            municipality: "Sao Paolo",
            coordinates: {
              latitude: "-3.1291",
              longitude: "141.7888"
            },
            timezone: {
              offset: "-8:00",
              description: "Pacific Time (US & Canada)"
            }
          },
          email: "cailane.araujo@example.com",
          login: {
            uuid: "1fa5a410-9aa5-4b1e-b5dc-cfdeb009eb4d",
            username: "tinyleopard559",
            password: "murray",
            salt: "UAlHE7kA",
            md5: "a690eb42bb4ad21e78e3cc4d9388aae9",
            sha1: "5591f8f1d6049a812e8af1658376b7b24329e511",
            sha256: "b431bb2b046c28a6d5ef103b814eb6afe2651875ae8703a5c5b556545181d258"
          },
          dob: {
            date: "1959-12-25T19:36:21.099Z",
            age: 61
          },
          registered: {
            date: "2007-05-28T23:20:18.386Z",
            age: 13
          },
          phone: "(46) 9227-6181",
          cell: "(90) 2877-9858",

          picture: {
            large: "https://randomuser.me/api/portraits/women/6.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg"
          },
          nat: "BR",
          isActive: true
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Erico",
            last: "Ferreira"
          },
          startDate: new Date().toISOString().substr(0, 10),
          endDate: "2020-10-13",
          parentName: "TESTTT",
          jmbg: "1007979181947",
          position: "Call Agent",
          bank: "Sparkasse",
          bankId: "154304999684120",
          travelExpenses: true,
          department: "Sarajevo",
          location: {
            street: {
              number: 921,
              name: "Rua José Bonifácio "
            },
            city: "Jaboatão dos Guararapes",

            country: "Brazil",
            postcode: 36932,
            municipality: "San Pedro MS",
            coordinates: {
              latitude: "-8.2811",
              longitude: "156.1637"
            },
            timezone: {
              offset: "-4:00",
              description: "Atlantic Time (Canada), Caracas, La Paz"
            }
          },
          email: "erico.ferreira@example.com",
          login: {
            uuid: "be1c15a9-e5b8-40cf-ab4d-8191eb474bcb",
            username: "blackdog475",
            password: "smoke1",
            salt: "IsKOZ6AH",
            md5: "d2edccee5447bb29a44d092e395fe601",
            sha1: "f284c2b93edefaf8e4cf00a69bd27da9a6563f6e",
            sha256: "eccbf53804a3a46ad1572e71544a03eae9194b04bf4c61982f74eb102b6eec01"
          },
          dob: {
            date: "1962-06-26T18:38:05.631Z",
            age: 58
          },
          registered: {
            date: "2018-06-10T14:42:16.993Z",
            age: 2
          },
          phone: "(23) 5397-3444",
          cell: null,

          picture: {
            large: "https://randomuser.me/api/portraits/men/35.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/35.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/35.jpg"
          },
          nat: "BR",
          isActive: false
        }
      ]
    });
  },
  routes() {
    this.passthrough();
    this.timing = 200;

    this.resource("users");
    this.resource("files");

    // Users Get
    this.get("/api/users", schema => {
      return schema.db.users;
    });

    this.get("/api/files", (schema, request) => {
      const {
        queryParams: {
          userId
        }
      } = request;

      return schema.files.where({
        userId
      });
    });

    // Create new user
    this.post("/api/users", (schema, request) => {
      let user = JSON.parse(request.requestBody);
      console.log(user);
      return schema.db.users.insert([{
        name: {
          first: user.name.first,
          last: user.name.last
        },

        picture: {
          large: "https://randomuser.me/api/portraits/women/40.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg"
        }
      }]);
    });

    this.patch("/api/users/:id", (schema, request) => {
      let user = JSON.parse(request.requestBody);
      console.log(user);
      return schema.db.users.update(user.id, user);
    });

    // Users Get
    this.get("/api/departments", schema => {
      return schema.db.departments;
    });
  }
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
