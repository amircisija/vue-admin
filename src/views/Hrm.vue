<template>
  <v-sheet class="page__wrapper--sheet">
    <v-container>
      <v-row>
        <v-col>
          <h2>{{ pageTitle }}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ut,
            adipisci molestias nisi iure porro ab nesciunt, quo ex id voluptates
            quas repudiandae quis consequuntur consectetur laborum corrupti,
            eaque odit?
          </p>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <template v-for="user in users">
          <v-col cols="12" sm="6" md="4" lg="3" :key="user.id.value">
            <hrm-users :user="user"></hrm-users>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue";
import AppNavigation from "@/components/AppNavigation.vue"; */
import { mapState } from "vuex";
// const apiLink = "https://next.json-generator.com/api/json/get/VJZuWm-Mt";
// const apiLink = "https://randomuser.me/api/?results=10";
import HrmUsers from "@/components/HrmUsers";
export default {
  name: "Hrm",
  components: {
    HrmUsers
  },
  data: () => ({
    user: null,
    _pageTitle: "Hrm",
    get pageTitle() {
      return this._pageTitle;
    },
    set pageTitle(value) {
      this._pageTitle = value;
    }
  }),
  beforeCreate() {
    console.log("Before Created");
  },
  computed: mapState(["users"]),
  created() {
    console.log("Created - Sending Api Request");
    const newLocal = "LOAD_USERS";
    this.$store.dispatch(newLocal);

    /*     axios
      .get(apiLink)
      .then((response) => {
        this.users = response.data.results;
        console.log(this.users);
      })
      .catch(function(error) {
        console.log(error);
      });  */
  }
};
</script>
