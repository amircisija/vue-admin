<template>
  <v-container v-if="user" fluid>
    <v-row>
      <v-col>
        <v-btn text color="deep-purple accent-4" class="mb-4" @click="handleSelectUser(user)">
          <v-icon color="purple darken-2" small class="mr-2">mdi-chevron-left</v-icon>Go Back
        </v-btn>
        <h2>Create user</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-row>
            <v-col cols="12" sm="3" class="pr-0 border-right pt-0">
              <v-card-text>
                <v-img :src="url" class="rounded mb-3"></v-img>
                <v-file-input
                  @change="onFileSelected"
                  :rules="rules"
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Choose profile image"
                  prepend-icon="mdi-camera"
                  label="Profile image"
                  v-model="image"
                ></v-file-input>
              </v-card-text>
            </v-col>
            <v-col cols="12" sm="9">
              <v-row class="mb-0 pb-0">
                <v-col class="mb-0 pb-0">
                  <v-card-text class="mb-0 pb-0">
                    <v-divider class="mt-2"></v-divider>
                    <v-container>
                      <v-form @submit.prevent :disabled="loading">
                        <v-row>
                          <v-col cols="12" sm="10">
                            <v-switch
                              color="success"
                              v-model="user.isActive"
                              :label="`Active user?`"
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
                        <v-row>
                          <v-col cols="12">
                            <h3 class="mb-0 overline">General Information</h3>
                          </v-col>
                          <v-col cols="12" lg="6">
                            <v-menu v-model="menu1" :close-on-content-click="true" max-width="290">
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  :value="computedStartingDate"
                                  clearable
                                  label="Contract started"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  @click:clear="dateStarting = null"
                                ></v-text-field>
                              </template>
                              <v-date-picker v-model="user.startDate" @change="menu1 = false"></v-date-picker>
                            </v-menu>
                          </v-col>
                          <v-col cols="12" lg="6">
                            <v-menu v-model="menu2" :close-on-content-click="true" max-width="290">
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                  :value="computedEndingDate"
                                  clearable
                                  label="Contract ends"
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  @click:clear="dateEnding = null"
                                ></v-text-field>
                              </template>
                              <v-date-picker v-model="user.endDate" @change="menu2 = false"></v-date-picker>
                            </v-menu>
                          </v-col>
                        </v-row>
                        <v-row class="mb-5 rounded form__row">
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
                        <v-row class="rounded form__row">
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
                              color="success"
                              v-model="user.travelExpenses"
                              :label="
                                `Travel Expenses: ${user.travelExpenses.toString()}`
                              "
                            ></v-switch>
                          </v-col>
                          <v-col class="text-right">
                            <v-btn
                              :loading="loading"
                              :disabled="loading"
                              color="success"
                              @click="addUser(user)"
                            >Add User</v-btn>
                          </v-col>
                        </v-row>
                      </v-form>
                    </v-container>
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
import moment from "moment";
import axios from "axios";
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue";
import AppNavigation from "@/components/AppNavigation.vue"; */
export default {
  name: "Test",
  components: {},
  data: () => ({
    dateStarting: new Date().toISOString().substr(0, 10),
    dateEnding: new Date().toISOString().substr(0, 10),
    image: null,
    menu1: false,
    menu2: false,
    selectedFile: null,
    url: null,
    rules: [
      value =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!"
    ],
    genderItems: ["male", "female", "Not specified"],
    departments: ["Sarajevo", "Tuzla"],
    loader: null,
    loading: false,
    firstname: null,
    proffesion: ["Call Agent", "Support", "Developer"],
    users: [],
    overlay: false,
    user: {
      picture: {
        large: null,
        medium: null,
        thumbnail: null
      },
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      email: null,
      phone: null,
      name: {
        first: null,
        last: null
      },
      location: {
        street: {
          name: null
        }
      },
      travelExpenses: false
    },
    isLoading: false
  }),
  computed: {
    computedStartingDate() {
      return this.user.startDate
        ? moment(this.user.startDate).format("DD.MM.YYYY")
        : "";
    },
    computedEndingDate() {
      return this.user.endDate
        ? moment(this.user.endDate).format("DD.MM.YYYY")
        : "";
    }
  },
  methods: {
    onFileSelected(event) {
      console.log(event);
      this.url = URL.createObjectURL(this.image);
      this.user.picture.large = this.url;
      this.user.picture.medium = this.url;
      this.user.picture.thumbnail = this.url;
    },
    addUser() {
      axios.post("/api/users", this.user).then(response => {
        this.users.push({
          email: this.user.email,
          phone: this.user.phone,
          name: {
            first: this.user.name.first,
            last: this.user.name.last
          },
          picture: {
            large: this.user.picture.large,
            medium: this.user.picture.large,
            thumbnail: this.user.picture.large
          },
          startDate: this.user.startDate,
          endDate: this.user.endDate
        });
        console.log(response.data);
      });
    },
    goBack() {
      this.$store.dispatch("DELETE_USER");
      this.$router.push({ path: "/test" });
    }
  }
};
</script>
