<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Profile</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-card>
          <v-card-text>
            <v-img :src="currentUser.picture.large"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-text>
            <h4>{{ currentUser.name.first }}</h4>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "UserProfile",
  data: function() {
    return {
      //id is name of the dynamic segment we created in router
      userId: this.$route.params.id,
      currentUser: null,
    };
  },
  mounted() {
    return (this.currentUser = this.$store.getters.user);
  },
};
</script>
