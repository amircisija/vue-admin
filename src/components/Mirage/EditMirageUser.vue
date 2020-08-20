<template>
  <v-container v-if="user" fluid>
    <v-row>
      <v-col>
        <v-btn text color="deep-purple accent-4" class="mb-4" @click="handleSelectUser(user)">
          <v-icon color="purple darken-2" small class="mr-2">mdi-chevron-left</v-icon>Go Back
        </v-btn>
        <h2>Profile</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-row>
            <v-col cols="12" sm="2" class="pr-0 border-right pt-0">
              <v-row>
                <v-col class="pt-0">
                  <v-card-text>
                    <v-img :src="user.picture.large" class="mb-3 rounded"></v-img>
                    <v-row>
                      <v-col cols="12" sm="12">
                        <v-card-text class="user__profile--info--wrapper">
                          <div class="text__block mb-2">
                            <h6 class="subtitle-2" color="deep-purple accent-4">Date of Birth:</h6>
                            <span class="user__profile--info">{{ getUserDateOfBirth }}</span>
                          </div>
                          <div class="text__block mb-2">
                            <h6 class="subtitle-2" color="deep-purple accent-4">E-Mail:</h6>
                            <span class="user__profile--info">{{ user.email }}</span>
                          </div>

                          <div class="text__block mb-2">
                            <h6 class="subtitle-2" color="deep-purple accent-4">Telefon:</h6>
                            <span class="user__profile--info">{{ user.phone }}</span>
                          </div>
                          <div class="text__block mb-2">
                            <h6 class="subtitle-2" color="deep-purple accent-4">Address:</h6>
                            <span class="user__profile--info">{{ getAddress }}</span>
                          </div>
                          <div class="text__block mb-2">
                            <h6 class="subtitle-2" color="deep-purple accent-4">ID:</h6>
                            <span class="user__profile--info">{{ user.id }}</span>
                          </div>
                          <div class="text__block mb-2">
                            <h6 class="subtitle-2" color="deep-purple accent-4">Username:</h6>
                            <span class="user__profile--info">{{ user.login.username }}</span>
                          </div>

                          <div class="text__block mb-2">
                            <h6 class="subtitle-2" color="deep-purple accent-4">Position:</h6>
                            <span class="user__profile--info">{{ getRandomProffesion }}</span>
                          </div>
                          <div class="text__block mb-2">
                            <h6 class="subtitle-2" color="deep-purple accent-4">Registered:</h6>
                            <span class="user__profile--info">{{ getUserRegistrationDate }}</span>
                          </div>
                        </v-card-text>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col></v-col>
              </v-row>
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
                      <v-form @submit.prevent :disabled="loading">
                        <v-row>
                          <v-col cols="12" sm="10">
                            <v-switch
                              color="success"
                              v-model="user.isActive"
                              :label="`Still works?`"
                            ></v-switch>
                          </v-col>
                          <v-col class="my-auto">
                            <v-btn
                              :loading="loading"
                              :disabled="loading"
                              color="success"
                              @click="updateUser(user)"
                            >Update User</v-btn>
                          </v-col>
                        </v-row>
                        <v-row class="mb-5">
                          <v-col cols="12">
                            <h3 class="mb-0 overline">General Information</h3>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-select :items="genderItems" v-model="user.gender" label="Gender"></v-select>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-select :items="proffesion" v-model="user.position" label="Position"></v-select>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              :counter="20"
                              v-model="user.name.first"
                              label="First name"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              :counter="20"
                              v-model="user.name.last"
                              label="Last name"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              :counter="20"
                              v-model="user.parentName"
                              label="Parent name"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field :counter="20" v-model="user.jmbg" label="JMBG" required></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field :counter="20" v-model="user.bank" label="Bank" required></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              :counter="20"
                              v-model="user.bankId"
                              label="Bank ID"
                              required
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="12">
                            <h3 class="mb-0 overline">Contact Information</h3>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field
                              :counter="20"
                              v-model="user.phone"
                              label="Telefon"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-text-field :counter="30" v-model="user.email" label="Email" required></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-text-field
                              :counter="50"
                              v-model="user.location.street.name"
                              label="Address"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-text-field
                              :counter="10"
                              v-model="user.location.street.number"
                              label="Address Number"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-text-field
                              :counter="50"
                              v-model="user.location.city"
                              label="Town"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-text-field
                              :counter="50"
                              v-model="user.location.postcode"
                              label="Postcode"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-text-field
                              :counter="50"
                              v-model="user.location.municipality"
                              label="Municipality"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-text-field
                              :counter="50"
                              v-model="user.location.country"
                              label="Country"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="8">
                            <v-select
                              :items="departments"
                              v-model="user.department"
                              label="Department"
                            ></v-select>
                          </v-col>
                          <v-col cols="12" sm="4">
                            <v-switch
                              v-model="user.travelExpenses"
                              :label="`Travel Expenses: ${user.travelExpenses.toString()}`"
                            ></v-switch>
                          </v-col>
                          <v-col class="text-right">
                            <v-btn
                              :loading="loading"
                              :disabled="loading"
                              color="success"
                              @click="updateUser(user)"
                            >Update User</v-btn>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-container>
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
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditUser",
  components: {
    UserFiles
  },
  data: function() {
    return {
      genderItems: ["male", "female", "Not specified"],
      departments: ["Sarajevo", "Tuzla"],
      loader: null,
      loading: false,
      firstname: null,
      proffesion: ["Call Agent", "Support", "Developer"],
      userId: this.$route.params.id
    };
  },
  methods: {
    handleSelectUser(user) {
      this.$router.push({ path: `/mirage/user/${this.user.id}` });
    },
    updateUser(user) {
      setTimeout(
        () => (this.loader = "loading"),
        axios.patch(`/api/users/${user.id}`, this.user),
        this.$store.dispatch("UPDATE_USER", this.user),
        200
      );
    }
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 1000);

      this.loader = null;
    }
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    user() {
      return this.users.find(v => v.id == this.$route.params.id) || {};
    },
    getRandomProffesion() {
      return this.proffesion[
        Math.floor(Math.random() * this.proffesion.length)
      ];
    },
    currentUserFullName() {
      return this.user.name.first + " " + this.user.name.last;
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
    display: block;
  }
  .user__profile--info {
    font-size: 0.875rem;
    font-weight: 400;
  }
  p {
    font-size: 0.875rem;
  }
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.border-right {
  border-right: 1px solid rgb(238, 238, 238);
}
</style>
