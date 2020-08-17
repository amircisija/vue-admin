<template>
  <v-container v-if="currentUser">
    <v-row>
      <v-col>
        <v-btn
          text
          color="deep-purple accent-4"
          class="mb-4"
          @click="handleSelectUser(currentUser)"
        >
          <v-icon color="purple darken-2" small class="mr-2"
            >fas fa-chevron-left</v-icon
          >
          Go Back
        </v-btn>
        <h2 class="text-h4">Profile</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2">
        <v-card>
          <v-img :src="currentUser.picture.large"></v-img>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-text>
            <h4 class="text-h5 text-deep-purple">
              {{ currentUserFullName }}
            </h4>
            <v-divider class="my-5"></v-divider>
            <h6 class="subtitle-2" color="deep-purple accent-4">
              <span class="user__profile--info">Date of Birth: </span>
            </h6>
            <p>{{ getUserDateOfBirth }}</p>
            <h6 class="subtitle-2">
              <span class="user__profile--info">Position: </span>
            </h6>
            <p>{{ getRandomProffesion() }}</p>
            <h6 class="subtitle-2">
              <span class="user__profile--info">Telefon: </span>
            </h6>
            <p>{{ currentUser.cell }}</p>

            <h6 class="subtitle-2">
              <span class="user__profile--info">Address: </span>
            </h6>
            <p>{{ getAddress }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-text>
            <h4 class="text-h5 text-deep-purple">User Files</h4>
            <v-divider class="my-5"></v-divider>
            <user-files></user-files>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import UserFiles from "@/components/User/UserFiles";
import moment from "moment";
export default {
  name: "UserProfile",
  components: {
    UserFiles,
  },
  data: function() {
    return {
      proffesion: ["Call Agent", "Support", "Developer"],
      //id is name of the dynamic segment we created in router
      userId: this.$route.params.id,
    };
  },
  methods: {
    handleSelectUser(currentUser) {
      console.log("Selected User :" + JSON.stringify(currentUser));
      this.$store.dispatch("DELETE_USER");
      this.$router.push({ path: "/hrm" });
    },
    getRandomProffesion() {
      return this.proffesion[
        Math.floor(Math.random() * this.proffesion.length)
      ];
    },
  },
  computed: {
    currentUser() {
      return this.$store.getters.user;
    },
    currentUserFullName() {
      return this.$store.getters.fullUserName;
    },
    getUserDateOfBirth() {
      let dob = this.$store.getters.getUserDateOfBirth;
      return moment(String(dob)).format("DD.MM.YYYY");
    },
    getAddress() {
      return (
        this.currentUser.location.street.name +
        " " +
        this.currentUser.location.street.number +
        ", " +
        this.currentUser.location.city
      );
    },
  },
  /*   mounted() {
    return (this.currentUser = this.$store.getters.user);
  }, */
};
</script>
<style lang="scss">
.user__profile--info {
  font-weight: 600;
}
.text-deep-purple {
  color: #6200ea;
}
</style>
