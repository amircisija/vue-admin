<template>
  <div class="test">
    <h2>Test Page</h2>
    <transition name="fade">
      <v-overlay :value="isLoading">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
    </transition>

    <transition-group name="fade" enter-active-class="animated fadeInUp">
      <v-card
        style="max-width: 40%;"
        v-for="user in users"
        :key="user.name.first"
      >
        <v-card-title>
          <h4>{{ user.name.first }}</h4>
        </v-card-title>
      </v-card>
    </transition-group>
  </div>
</template>

<script>
import Api from "@/service/api";
import axios from "axios";
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue";
import AppNavigation from "@/components/AppNavigation.vue"; */
export default {
  name: "Test",
  data: () => ({
    users: [],
    overlay: false,
    isLoading: false,
  }),

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
<style lang="scss">
.v-sheet.v-card {
  border-radius: 4px;
  display: inline-block;
  margin: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
