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
        <template v-for="user in users">
          <v-col cols="12" sm="6" md="4" lg="3" :key="user.id">
            <hrm-users-test :user="user"></hrm-users-test>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
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

  created() {
    /* Api()
      .get("/users")
      .then(response => {
      console.log(response.data);
    }) */
    this.isLoading = true;
    axios.get("/api/users").then(response => {
      this.users = response.data;
      this.$store.commit("saveUsers", this.users);
      this.isLoading = false;
    });
  }
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
