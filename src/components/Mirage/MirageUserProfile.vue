<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-btn
          text
          color="deep-purple accent-4"
          class="mb-4"
          @click="handleSelectUser(user)"
          :user="user"
        >
          <v-icon color="deep-purple accent-4" small class="mr-2"
            >mdi-chevron-left</v-icon
          >Go Back
        </v-btn>
        <h2>Profile {{ user.name.first }} {{ user.name.last }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card flat>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="2"
                class="text-center border-right pr-0 pt-0"
              >
                <v-card-text>
                  <v-img :src="user.picture.large" class="mb-3 rounded"></v-img>
                  <v-btn
                    color="deep-purple accent-4"
                    class="white--text"
                    @click="editCurrentUser(user)"
                  >
                    <v-icon color="white" small class="mr-2"
                      >mdi-account-edit</v-icon
                    >Edit
                  </v-btn>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="10">
                <v-row>
                  <v-col>
                    <h4 class="mb-2 overline">
                      Profile Completion {{ progressValue }}%
                    </h4>
                    <transition name="slide-up" mode="in-out">
                      <v-progress-linear
                        color="deep-purple"
                        rounded
                        :value="progressValue"
                      ></v-progress-linear>
                    </transition>
                  </v-col>
                </v-row>
                <v-row class="mb-0 pb-0">
                  <v-col class="mb-0 pb-0">
                    <v-card-text class="mb-0 pb-0">
                      <h4 class="text-h5 text-deep-purple">
                        <v-icon color="purple darken-2">mdi-account</v-icon>
                        {{ currentUserFullName }}
                      </h4>
                      <v-divider class="mt-2"></v-divider>
                    </v-card-text>
                  </v-col>
                </v-row>
                <v-row class="py-4 my-0 px-2">
                  <v-col class="py-0 my-0 mb-0 px-5">
                    <h3 class="mb-0 overline">General Information</h3>
                  </v-col>
                </v-row>
                <v-row class="pt-0">
                  <v-col cols="12" sm="6" class="pt-0">
                    <v-card-text class="user__profile--info--wrapper pt-0">
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Date of Birth:
                          <span class="user__profile--info float-right">{{
                            getUserDateOfBirth
                          }}</span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          E-Mail:
                          <span class="user__profile--info float-right">{{
                            user.email
                          }}</span>
                        </h6>
                      </div>

                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Telefon:
                          <span class="user__profile--info float-right">{{
                            user.phone
                          }}</span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Address:
                          <span class="user__profile--info float-right">{{
                            getAddress
                          }}</span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Municipality:
                          <span class="user__profile--info float-right">{{
                            user.location.municipality
                          }}</span>
                        </h6>
                      </div>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-card-text class="user__profile--info--wrapper">
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          ID:
                          <span class="user__profile--info float-right">{{
                            user.login.uuid
                          }}</span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Username:
                          <span class="user__profile--info float-right">{{
                            user.login.username
                          }}</span>
                        </h6>
                      </div>

                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Position:
                          <span class="user__profile--info float-right">{{
                            user.position
                          }}</span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Registered:
                          <span class="user__profile--info float-right">{{
                            getUserRegistrationDate
                          }}</span>
                        </h6>
                      </div>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-card-text>
            <h4 class="text-h5 text-deep-purple">User Files</h4>
            <v-divider class="mt-2"></v-divider>
            <user-files :user="user"></user-files>
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
    UserFiles
  },
  data: function() {
    return {
      proffesion: ["Call Agent", "Support", "Developer"],
      userId: this.$route.params.id,
      progressValue: 0
    };
  },
  methods: {
    handleSelectUser(user) {
      this.$store.dispatch("DELETE_USER");
      this.$router.push({ path: "/mirage" });
    },
    editCurrentUser(user) {
      console.log("Selected User :" + JSON.stringify(user));
      this.$router.push({
        path: `/mirage/user/edit/${this.user.id}`
      });
    }
  },
  created() {
    setTimeout(() => (this.progressValue = 50), 400);
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    user() {
      return this.users.find(v => v.id == this.$route.params.id) || {};
    },
    currentUserFullName() {
      return this.$store.getters.fullUserName;
    },
    getUserDateOfBirth() {
      let dob = this.$store.getters.getUserDateOfBirth;
      return moment(String(dob)).format("DD.MM.YYYY");
    },
    getUserRegistrationDate() {
      let registrationDate = this.$store.getters.getUserRegistrationDate;
      return moment(String(registrationDate)).format("DD.MM.YYYY");
    },
    getAddress() {
      return (
        this.user.location.street.name +
        " " +
        this.user.location.street.number +
        ", " +
        this.user.location.city
      );
    },
    getRandomProffesion() {
      return this.proffesion[
        Math.floor(Math.random() * this.proffesion.length)
      ];
    }
  }
  /*   mounted() {
    return (this.currentUser = this.$store.getters.user);
  }, */
};
</script>
<style lang="scss">
.text-deep-purple {
  color: #6200ea;
}

.user__profile--info--wrapper {
  h6 {
    font-weight: 600 !important;
  }
  .user__profile--info {
    font-size: 0.875rem;
    font-weight: 400;
  }
  p {
    font-size: 0.875rem;
  }
}
.slide-up-enter-active {
  transition: all 0.2s ease;
}
.slide-up-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-up-enter,
.slide-fade-leave-to {
  transform: translateY(100vh);
  opacity: 0;
}
.v-progress-linear {
  background: transparent;
  overflow: hidden;
  position: relative;
  transition: 0.4s cubic-bezier(0.6, 0, 0.6, 1);
  width: 100%;
}
.border-right {
  border-right: 1px solid rgb(238, 238, 238);
}
</style>
