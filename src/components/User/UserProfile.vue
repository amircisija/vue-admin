<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="text-h4">Profile</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-card>
          <v-card-text>
            <v-img :src="currentUser.picture.large"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="10">
        <v-card>
          <v-card-text>
            <h4 class="text-h5">{{ currentUserFullName }}</h4>
            <hr>
            <p><span>DOB</span> {{ currentUser.dob.date }}</p>
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
      userId: this.$route.params.id
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.user;
    },
    currentUserFullName() {
      return this.$store.getters.fullUserName;
    }
  }
  /*   mounted() {
    return (this.currentUser = this.$store.getters.user);
  }, */
};
</script>
