<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h2>Projects</h2>
        <h3 class="mb-0 overline">Projects overview</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <template v-for="project in projects">
            <v-col cols="12" sm="6" md="4" lg="3" :key="project.id">
             {{ project.text}} - {{project.description }}
            </v-col>
          </template>
        </v-row>
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
    projects: [],
    overlay: false,
    user: {
      email: null,
      phone: null,
      name: {
        first: null,
        last: null
      }
    }
  }),

  created() {
    axios
      .get("/api/projects")
      .then(response => {
        this.projects = response.data;
        this.$store.commit("saveProjects", this.projects);
      })
      .catch(error => console.log(error));
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
