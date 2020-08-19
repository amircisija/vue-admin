<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn text color="deep-purple accent-4" class="mb-4" @click="goBack()">
          <v-icon color="purple darken-2" small class="mr-2">mdi-chevron-left</v-icon>Go Back
        </v-btn>
        <h2>Add new user</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6">
        <v-text-field v-model="user.name.first" @keyup.enter="addUser"></v-text-field>
      </v-col>
      <v-col sm="6">
        <v-text-field v-model="user.name.last" @keyup.enter="addUser"></v-text-field>
      </v-col>
      <v-col sm="6">
        <v-text-field v-model="user.email" @keyup.enter="addUser"></v-text-field>
      </v-col>
      <v-col sm="6">
        <v-text-field v-model="user.phone" @keyup.enter="addUser"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
import HrmUsersTest from "@/components/Mirage/HrmUsersTest";
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue";
import AppNavigation from "@/components/AppNavigation.vue"; */
export default {
  name: "Test",
  components: {
    HrmUsersTest
  },
  data: () => ({
    users: [],
    overlay: false,
    user: {
      email: null,
      phone: null,
      name: {
        first: null,
        last: null
      }
    },
    isLoading: false
  }),
  methods: {
    addUser() {
      axios.post("/api/users", this.user).then(response => {
        this.users.push({
          email: this.user.email,
          phone: this.user.phone,
          name: {
            first: this.user.name.first,
            last: this.user.name.last
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/40.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/40.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/40.jpg"
          }
        });
        console.log(response.data);
      });
    },
    goBack() {
      this.$store.dispatch("DELETE_USER");
      this.$router.push({ path: "/test" });
    }
  }
};
</script>
