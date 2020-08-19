<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn
          text
          color="deep-purple accent-4"
          class="mb-4"
          @click="handleSelectUser(user)"
          :user="user"
        >
          <v-icon color="purple darken-2" small class="mr-2">mdi-chevron-left</v-icon>Go Back
        </v-btn>
        <h2>Profile {{ user.name.first }} {{ user.name.last }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-row>
            <v-col cols="12" sm="2">
              <v-card-text>
                <v-img :src="user.picture.large" class="mb-3"></v-img>
                <v-btn
                  color="deep-purple accent-4"
                  class="white--text"
                  @click="editCurrentUser(user)"
                >
                  <v-icon color="white" small class="mr-2">mdi-account-edit</v-icon>Edit
                </v-btn>
              </v-card-text>
            </v-col>
            <v-col cols="12" sm="7">
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
              <v-row>
                <v-col cols="12" sm="6">
                  <v-card-text class="user__profile--info--wrapper">
                    <div class="text__block mb-2">
                      <h6 class="subtitle-2" color="deep-purple accent-4">
                        Date of Birth:
                        <span
                          class="user__profile--info float-right"
                        >{{ getUserDateOfBirth }}</span>
                      </h6>
                    </div>
                    <div class="text__block mb-2">
                      <h6 class="subtitle-2" color="deep-purple accent-4">
                        E-Mail:
                        <span class="user__profile--info float-right">{{ user.email }}</span>
                      </h6>
                    </div>

                    <div class="text__block mb-2">
                      <h6 class="subtitle-2" color="deep-purple accent-4">
                        Telefon:
                        <span class="user__profile--info float-right">{{ user.phone }}</span>
                      </h6>
                    </div>
                    <div class="text__block mb-2">
                      <h6 class="subtitle-2" color="deep-purple accent-4">
                        Address:
                        <span class="user__profile--info float-right">{{ getAddress }}</span>
                      </h6>
                    </div>
                  </v-card-text>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-card-text class="user__profile--info--wrapper">
                    <div class="text__block mb-2">
                      <h6 class="subtitle-2" color="deep-purple accent-4">
                        ID:
                        <span class="user__profile--info float-right">{{ user.login.uuid }}</span>
                      </h6>
                    </div>
                    <div class="text__block mb-2">
                      <h6 class="subtitle-2" color="deep-purple accent-4">
                        Username:
                        <span
                          class="user__profile--info float-right"
                        >{{ user.login.username }}</span>
                      </h6>
                    </div>

                    <div class="text__block mb-2">
                      <h6 class="subtitle-2" color="deep-purple accent-4">
                        Position:
                        <span
                          class="user__profile--info float-right"
                        >{{ getRandomProffesion }}</span>
                      </h6>
                    </div>
                    <div class="text__block mb-2">
                      <h6 class="subtitle-2" color="deep-purple accent-4">
                        Registered:
                        <span
                          class="user__profile--info float-right"
                        >{{ getUserRegistrationDate }}</span>
                      </h6>
                    </div>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" sm="3">
              <v-row>
                <v-col>
                  <v-card-text>
                    <h4 class="text-h5 text-deep-purple">User Files</h4>
                    <v-divider class="mt-2"></v-divider>
                    <user-files></user-files>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
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
      userId: this.$route.params.id
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
</style>
