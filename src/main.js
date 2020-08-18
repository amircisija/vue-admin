import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./assets/scss/style.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import { Server } from "miragejs";

new Server({
  routes() {
    this.timing = 1000
    this.get('/api/users', () => {
      return [{
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
          id: {
            name: "FN",
            value: "10037546602"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/40.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg"
          },
          nat: "NO"
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Carolyn",
            last: "Fletcher"
          },
          location: {
            street: {
              number: 1121,
              name: "Killarney Road"
            },
            city: "Dungarvan",
            state: "Kerry",
            country: "Ireland",
            postcode: 17241,
            coordinates: {
              latitude: "17.8243",
              longitude: "-71.4508"
            },
            timezone: {
              offset: "+9:00",
              description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
            }
          },
          email: "carolyn.fletcher@example.com",
          login: {
            uuid: "fd562c91-baf3-44ed-9555-1c1cabb31ae5",
            username: "tinyfrog527",
            password: "mustang1",
            salt: "YfVOTTng",
            md5: "4931a9f12bc14bb1e1d85018eb19f7fe",
            sha1: "1213891faf2bbed75c719a4a0557fffaec3d89b2",
            sha256: "fd68fab24a318dc1dc4636f410fd1eee3cdc1afc230ebc863526390edf8ad430"
          },
          dob: {
            date: "1985-08-10T23:05:02.295Z",
            age: 35
          },
          registered: {
            date: "2008-08-06T01:21:04.838Z",
            age: 12
          },
          phone: "051-982-9344",
          cell: "081-983-7323",
          id: {
            name: "PPS",
            value: "7723483T"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/85.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg"
          },
          nat: "IE"
        },
        {
          gender: "male",
          name: {
            title: "Monsieur",
            first: "Arno",
            last: "Richard"
          },
          location: {
            street: {
              number: 3032,
              name: "Rue du Village"
            },
            city: "Lutzenberg",
            state: "Basel-Stadt",
            country: "Switzerland",
            postcode: 5789,
            coordinates: {
              latitude: "-4.5061",
              longitude: "92.5659"
            },
            timezone: {
              offset: "-4:00",
              description: "Atlantic Time (Canada), Caracas, La Paz"
            }
          },
          email: "arno.richard@example.com",
          login: {
            uuid: "5eaed3f5-76ed-45c6-86bb-457c5231d44d",
            username: "orangekoala436",
            password: "christia",
            salt: "b5dfJCyV",
            md5: "e52c947b11c1d9b94e87a53ef88b40e4",
            sha1: "eefa3af749e25f8518fc5e359af8545e458adac9",
            sha256: "f2619771fd521927869ef4f64f369fe121a7f49fb1861b3c82aff160ac0009fa"
          },
          dob: {
            date: "1987-06-28T09:03:22.918Z",
            age: 33
          },
          registered: {
            date: "2013-12-17T09:08:57.865Z",
            age: 7
          },
          phone: "077 286 24 77",
          cell: "078 814 20 67",
          id: {
            name: "AVS",
            value: "756.7042.0558.90"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/65.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg"
          },
          nat: "CH"
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Aurora",
            last: "Aguilar"
          },
          location: {
            street: {
              number: 1240,
              name: "Calle de Argumosa"
            },
            city: "Gandía",
            state: "Melilla",
            country: "Spain",
            postcode: 78537,
            coordinates: {
              latitude: "3.9813",
              longitude: "-117.9457"
            },
            timezone: {
              offset: "-8:00",
              description: "Pacific Time (US & Canada)"
            }
          },
          email: "aurora.aguilar@example.com",
          login: {
            uuid: "40e01976-c387-45ca-a864-da36bbbe2740",
            username: "heavybird441",
            password: "oooooooo",
            salt: "bPiTmkg7",
            md5: "835462ca28cb0b70f57536217eb95e32",
            sha1: "23b6a89528cd7365d74391efd26f79fbc56f1419",
            sha256: "01a812af7477b42766d0cd65ccf023e21fb7018e637fbafd265fd0d0b8e5ed44"
          },
          dob: {
            date: "1946-09-04T01:25:06.007Z",
            age: 74
          },
          registered: {
            date: "2014-08-24T13:15:06.651Z",
            age: 6
          },
          phone: "954-658-074",
          cell: "631-942-368",
          id: {
            name: "DNI",
            value: "40330895-C"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/87.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/87.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/87.jpg"
          },
          nat: "ES"
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Kuzey",
            last: "Örge"
          },
          location: {
            street: {
              number: 4708,
              name: "Necatibey Cd"
            },
            city: "Kars",
            state: "Yalova",
            country: "Turkey",
            postcode: 48443,
            coordinates: {
              latitude: "21.1069",
              longitude: "104.9875"
            },
            timezone: {
              offset: "-12:00",
              description: "Eniwetok, Kwajalein"
            }
          },
          email: "kuzey.orge@example.com",
          login: {
            uuid: "b063098c-f069-4202-a154-dc0a2b321ea7",
            username: "sadswan343",
            password: "password9",
            salt: "PfAK1Kyh",
            md5: "04cdfaa8fe05aa1155889ca8750b2c0c",
            sha1: "94770e8986360657cbd6db248f2714a49bde0859",
            sha256: "d202e7f4652b5b8fe6d591811cb53200cb2f9697028ff0c2fb0fae47b63602a3"
          },
          dob: {
            date: "1981-06-21T19:22:06.119Z",
            age: 39
          },
          registered: {
            date: "2005-03-12T13:18:23.044Z",
            age: 15
          },
          phone: "(844)-268-6520",
          cell: "(203)-201-3709",
          id: {
            name: "",
            value: null
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/30.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/30.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/30.jpg"
          },
          nat: "TR"
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Nikodem",
            last: "Kvandal"
          },
          location: {
            street: {
              number: 5412,
              name: "Noreveien"
            },
            city: "Skoppum",
            state: "Telemark",
            country: "Norway",
            postcode: "3844",
            coordinates: {
              latitude: "-81.6108",
              longitude: "-43.5782"
            },
            timezone: {
              offset: "+5:45",
              description: "Kathmandu"
            }
          },
          email: "nikodem.kvandal@example.com",
          login: {
            uuid: "0be86a8e-0c75-41e6-b69d-60550cf91e08",
            username: "ticklishgorilla294",
            password: "talon",
            salt: "s5V8guva",
            md5: "fdafecbfcaf141ed7487a5fda1122b94",
            sha1: "9c6433f2274ee803d6fb6868e481ac2778a14c2a",
            sha256: "f7aeb7f3bc9730d6a2fd42b6ec36f6977dacb22b7e4853d71a7aeca4a931f7e4"
          },
          dob: {
            date: "1962-02-17T01:15:12.782Z",
            age: 58
          },
          registered: {
            date: "2006-05-22T15:26:34.121Z",
            age: 14
          },
          phone: "85245868",
          cell: "41831357",
          id: {
            name: "FN",
            value: "17026233909"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/86.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/86.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/86.jpg"
          },
          nat: "NO"
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Dave",
            last: "Garrett"
          },
          location: {
            street: {
              number: 1200,
              name: "Albert Road"
            },
            city: "Plymouth",
            state: "South Yorkshire",
            country: "United Kingdom",
            postcode: "K6 9GA",
            coordinates: {
              latitude: "79.4434",
              longitude: "-172.4022"
            },
            timezone: {
              offset: "+11:00",
              description: "Magadan, Solomon Islands, New Caledonia"
            }
          },
          email: "dave.garrett@example.com",
          login: {
            uuid: "787f6a16-9d96-41ab-94a2-4c774adb8313",
            username: "blackbear548",
            password: "harder",
            salt: "0ke7SHbN",
            md5: "372946abde0be05f3f58f9e96daabc71",
            sha1: "04048340498189ed508ff5f6a8d8ef71ad0787fa",
            sha256: "accc315b6fb5e7012c65321d1b07a8bc71e1b2a9634dd96db102a3b71388a6ea"
          },
          dob: {
            date: "1966-03-10T03:59:10.999Z",
            age: 54
          },
          registered: {
            date: "2019-01-19T14:44:23.462Z",
            age: 1
          },
          phone: "017687 09413",
          cell: "0767-423-100",
          id: {
            name: "NINO",
            value: "MS 81 30 24 M"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/88.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg"
          },
          nat: "GB"
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Elaine",
            last: "Hernandez"
          },
          location: {
            street: {
              number: 6162,
              name: "W Pecan St"
            },
            city: "Mackay",
            state: "Queensland",
            country: "Australia",
            postcode: 2712,
            coordinates: {
              latitude: "-76.5393",
              longitude: "-56.4095"
            },
            timezone: {
              offset: "+5:45",
              description: "Kathmandu"
            }
          },
          email: "elaine.hernandez@example.com",
          login: {
            uuid: "4035c0fc-3b7c-489b-8d4e-cf1550ed6353",
            username: "lazyleopard106",
            password: "coco",
            salt: "4E5SGzwN",
            md5: "16363f1c268d571c1a401c4aeb5abfad",
            sha1: "45f26e9b26bb8b7243b14e1f2bcb76c73f43f988",
            sha256: "d999c89f59408475edf8480a0515538ae89e28548244055320a96a76072cac89"
          },
          dob: {
            date: "1977-06-11T13:16:13.337Z",
            age: 43
          },
          registered: {
            date: "2013-11-12T22:05:27.521Z",
            age: 7
          },
          phone: "08-3852-7279",
          cell: "0482-301-878",
          id: {
            name: "TFN",
            value: "297742590"
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/61.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/61.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/61.jpg"
          },
          nat: "AU"
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Gabrielle",
            last: "Harcourt"
          },
          location: {
            street: {
              number: 6321,
              name: "22nd Ave"
            },
            city: "Red Rock",
            state: "Manitoba",
            country: "Canada",
            postcode: "A0E 5R3",
            coordinates: {
              latitude: "64.8591",
              longitude: "128.2149"
            },
            timezone: {
              offset: "+11:00",
              description: "Magadan, Solomon Islands, New Caledonia"
            }
          },
          email: "gabrielle.harcourt@example.com",
          login: {
            uuid: "8378dae2-2c51-458c-a569-034f10ac7f21",
            username: "silvertiger957",
            password: "hamster",
            salt: "Y0cWisza",
            md5: "57d9d1fb8e1823a90e7f6acb4cb646bc",
            sha1: "be06a68832d5b0c4882901fb86c102c885f2f473",
            sha256: "d5f86f06189dcc8d6587c5c5a5c149888e1c38eaac6396748fa27523ff2d3668"
          },
          dob: {
            date: "1987-04-07T01:00:39.793Z",
            age: 33
          },
          registered: {
            date: "2009-11-13T20:34:50.834Z",
            age: 11
          },
          phone: "552-521-1982",
          cell: "921-962-9542",
          id: {
            name: "",
            value: null
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/28.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/28.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/28.jpg"
          },
          nat: "CA"
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Liam",
            last: "Ross"
          },
          location: {
            street: {
              number: 5599,
              name: "Lakeview Ave"
            },
            city: "Dorchester",
            state: "Ontario",
            country: "Canada",
            postcode: "A7L 8X7",
            coordinates: {
              latitude: "80.9811",
              longitude: "79.1665"
            },
            timezone: {
              offset: "-7:00",
              description: "Mountain Time (US & Canada)"
            }
          },
          email: "liam.ross@example.com",
          login: {
            uuid: "80a62076-fec5-46dd-be37-05bd031454d3",
            username: "purplefish120",
            password: "warlock",
            salt: "su2LBOPV",
            md5: "7bb457acef64d75742da4267b863685d",
            sha1: "39c0a8023ae51ef58ad3a257073e817814241093",
            sha256: "d6e6d3ee91b1ec13d185d60b2aaf0e624f00be2812d4450820a4f4b6a8d12f10"
          },
          dob: {
            date: "1967-08-27T10:57:27.389Z",
            age: 53
          },
          registered: {
            date: "2004-03-26T17:56:57.359Z",
            age: 16
          },
          phone: "867-194-7427",
          cell: "243-089-8859",
          id: {
            name: "",
            value: null
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/40.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/40.jpg"
          },
          nat: "CA"
        }
      ]
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
