<template>
  <div class="test">
    <h2>Test Page</h2>
    <transition name="fade">
      <v-overlay :value="isLoading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </transition>
    <v-container>
      <v-row>
        <v-col sm="6">
          <v-text-field
            v-model="user.name.first"
            @keyup.enter="addUser"
          ></v-text-field>
        </v-col>
        <v-col sm="6">
          <v-text-field
            v-model="user.name.last"
            @keyup.enter="addUser"
          ></v-text-field>
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
  </div>
</template>

<script>
import axios from "axios";
import HrmUsers from "@/components/HrmUsers";
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue";
import AppNavigation from "@/components/AppNavigation.vue"; */
export default {
  name: "Test",
  components: {
    HrmUsers,
  },
  data: () => ({
    users: [],
    overlay: false,
    user: {
      name: {
        first: null,
        last: null,
      },
    },
    isLoading: false,
  }),
  methods: {
    addUser() {
      axios.post("/api/users", this.user).then((response) => {
        this.users.push({
          name: {
            first: this.user.name.first,
            last: this.user.name.last,
          },
        });
        console.log(response.data);
      });
    },
  },
  created() {
    /* Api()
      .get("/users")
      .then(response => {
      console.log(response.data);
    }) */
    this.isLoading = true;
    axios.get("/api/users").then((response) => {
      this.users = response.data;
      this.isLoading = false;
    });
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
