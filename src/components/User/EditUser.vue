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
          <v-icon color="purple darken-2" small class="mr-2">mdi-chevron-left</v-icon>Go Back
        </v-btn>
        <h2>Profile</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-row>
            <v-col cols="12" sm="2">
              <v-card-text>
                <v-img :src="currentUser.picture.large" class="mb-3"></v-img>
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
                    <v-container>
                      <v-row>
                        <v-col>
                          <h3>General Information</h3>
                        </v-col>
                      </v-row>

                      <v-form @submit.prevent>
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              :counter="20"
                              v-model="currentUser.name.first"
                              label="First name"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              :counter="20"
                              v-model="currentUser.name.last"
                              label="Last name"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              :counter="30"
                              v-model="currentUser.email"
                              label="Email"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              :counter="20"
                              v-model="currentUser.phone"
                              label="Telefon"
                              required
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" sm="4">
                            <v-text-field
                              :counter="50"
                              v-model="currentUser.location.street.name"
                              label="Address"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-text-field
                              :counter="10"
                              v-model="currentUser.location.street.number"
                              label="Address Number"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-text-field
                              :counter="50"
                              v-model="currentUser.location.city"
                              label="Town"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col>
                            <v-btn @click="updateUser">Update User</v-btn>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-container>
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
                        <span class="user__profile--info float-right">{{ currentUser.email }}</span>
                      </h6>
                    </div>

                    <div class="text__block mb-2">
                      <h6 class="subtitle-2" color="deep-purple accent-4">
                        Telefon:
                        <span
                          class="user__profile--info float-right"
                        >{{ currentUser.phone }}</span>
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
                        <span class="user__profile--info float-right">{{ currentUser.id.name }}</span>
                      </h6>
                    </div>
                    <div class="text__block mb-2">
                      <h6 class="subtitle-2" color="deep-purple accent-4">
                        Username:
                        <span
                          class="user__profile--info float-right"
                        >{{ currentUser.login.username }}</span>
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
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditUser",
  components: {
    UserFiles
  },
  data: function() {
    return {
      firstname: null,
      proffesion: ["Call Agent", "Support", "Developer"],
      userId: this.$route.params.id
    };
  },
  methods: {
    updateUser(){
      this.$store.dispatch('UPDATE_USER', this.currentUser)
    },

    handleSelectUser(currentUser) {
      console.log("Selected User :" + JSON.stringify(currentUser));
      this.$router.push({ path: `/user/${this.currentUser.login.username}` });
    },
    editCurrentUser(currentUser) {
      console.log("Selected User :" + JSON.stringify(currentUser));
      this.$router.push({
        path: `/user/edit/${this.currentUser.login.username}`
      });
    }
  },
  computed: {
    ...mapGetters(["currentUser"]),
    firstName: {
      get() {
        return this.$store.state.selectedUser.name.first;
      },
      set(value) {
        this.$store.commit("updateFirstName", value);
      }
    },
    lastName: {
      get() {
        return this.$store.state.selectedUser.name.last;
      },
      set(value) {
        this.$store.commit("updateLastName", value);
      }
    },
    getRandomProffesion() {
      return this.proffesion[
        Math.floor(Math.random() * this.proffesion.length)
      ];
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
        this.currentUser.location.street.name +
        " " +
        this.currentUser.location.street.number +
        ", " +
        this.currentUser.location.city
      );
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
