<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-btn
          text
          color="deep-purple accent-4"
          class="mb-4"
          @click="handleSelectUser()"
          :user="user"
        >
          <v-icon color="deep-purple accent-4" small class="mr-2"
            >mdi-chevron-left</v-icon
          >Go back
        </v-btn>
        <h2>Profile {{ user.name.first }} {{ user.name.last }}</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card flat>
          <v-container fluid>
            <v-row>
              <v-col
                cols="12"
                sm="2"
                class="text-center border-right pr-0 pt-0"
              >
                <v-card-text>
                  <v-img :src="user.picture.large" class="mb-3 rounded"></v-img>

                  <h4 class="mb-2 overline">
                    Profile Completion {{ progressValue }}%
                  </h4>
                  <transition name="slide-up" mode="in-out">
                    <v-progress-linear
                      color="green darken-1"
                      rounded
                      :value="progressValue"
                    ></v-progress-linear>
                  </transition>
                  <v-divider class="mb-5"></v-divider>
                  <v-btn
                    color="deep-purple accent-4"
                    class="white--text"
                    text
                    @click="editCurrentUser(user)"
                  >
                    <v-icon color="deep-purple accent-4" small class="mr-2"
                      >mdi-account-edit</v-icon
                    >Edit User
                  </v-btn>
                </v-card-text>
              </v-col>
              <v-col cols="12" sm="10">
                <v-row>
                  <v-col cols="12" sm="4">
                    <v-alert
                      transition="scale-transition"
                      v-if="getDifferenceFromDates"
                      border="bottom"
                      colored-border
                      dense
                      :type="alertType"
                      elevation="2"
                    >
                      Users Contract ends in
                      {{ getDifferenceFromDates }} days
                    </v-alert>
                  </v-col>
                </v-row>
                <v-row class="mb-0 py-0">
                  <v-col class="mb-0 py-0">
                    <v-card-text class="mb-0 py-0">
                      <h4 class="text-h5">{{ currentUserFullName }}</h4>
                      <v-divider class="mt-2"></v-divider>
                    </v-card-text>
                  </v-col>
                </v-row>

                <v-row class="pt-0">
                  <v-col cols="12" sm="6">
                    <v-card-text class="user__profile--info--wrapper">
                      <h3 class="mb-0 overline">General Information</h3>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          RID
                          <span class="user__profile--info float-right">
                            {{ user.rid }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Registered
                          <span class="user__profile--info float-right">
                            {{ getUserRegistrationDate }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Contract started
                          <span class="user__profile--info float-right">
                            {{ computedStartingDate }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Contract ends
                          <span class="user__profile--info float-right">
                            {{ computedEndingDate }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Position
                          <span class="user__profile--info float-right">
                            {{ user.position }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Bank
                          <span class="user__profile--info float-right">
                            {{ user.bank }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Bank ID
                          <span class="user__profile--info float-right">
                            {{ user.bankId }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Travel expenses
                          <span class="user__profile--info float-right">
                            {{ user.travelExpenses ? "Yes" : "No" }}
                          </span>
                        </h6>
                      </div>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-card-text class="user__profile--info--wrapper">
                      <h3 class="mb-0 overline">Personal Information</h3>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Date of Birth:
                          <span class="user__profile--info float-right">
                            {{ getUserDateOfBirth }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Name of Parent:
                          <span class="user__profile--info float-right">
                            {{ user.parentName }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          JMBG
                          <span class="user__profile--info float-right">
                            {{ user.jmbg }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          E-Mail:
                          <span class="user__profile--info float-right">
                            {{ user.email }}
                          </span>
                        </h6>
                      </div>

                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Telefon:
                          <span class="user__profile--info float-right">
                            {{ user.phone }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Address:
                          <span class="user__profile--info float-right">
                            {{ getAddress }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          Municipality:
                          <span class="user__profile--info float-right">
                            {{ user.location.municipality }}
                          </span>
                        </h6>
                      </div>
                      <div class="text__block mb-2">
                        <h6 class="subtitle-2" color="deep-purple accent-4">
                          City:
                          <span class="user__profile--info float-right">
                            {{ user.location.city }}
                          </span>
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
            <h4 class="text-h5">User Files</h4>
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
      progressValue: 0,
      alertType: ""
    };
  },
  methods: {
    handleSelectUser() {
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
    computedStartingDate() {
      return this.user.startDate
        ? moment(this.user.startDate).format("DD.MM.YYYY")
        : "";
    },
    computedEndingDate() {
      return this.user.endDate
        ? moment(this.user.endDate).format("DD.MM.YYYY")
        : "";
    },
    getDifferenceFromDates() {
      const dateB = moment(this.user.startDate);
      const dateC = moment(this.user.endDate);
      let difference = dateB.diff(dateC, "days");

      difference = Math.abs(difference);
      if (difference < 5) {
        this.alertType = "error";
        return difference;
      }
      if (difference < 30) {
        this.alertType = "warning";
        return difference;
      }
      if (difference > 30) {
        this.alertType = "success";
        return difference;
      }

      return difference;
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
        this.user.location.street.name + " " + this.user.location.street.number
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
