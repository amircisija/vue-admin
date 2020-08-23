<template>
  <v-app app>
    <AppNavigation />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import AppNavigation from "@/components/AppNavigation.vue";
export default {
  name: "App",

  components: {
    HelloWorld,
    AppNavigation
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
