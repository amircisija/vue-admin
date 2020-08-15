<template>
  <v-sheet>
    <v-container>
      <v-row>
        <v-col>
          <h2>{{ pageTitle }}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ut,
            adipisci molestias nisi iure porro ab nesciunt, quo ex id voluptates
            quas repudiandae quis consequuntur consectetur laborum corrupti,
            eaque odit?
          </p>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card>
            <v-card-text>
              <div>Word of the Day</div>
              <p class="display-1 text--primary">
                be•nev•o•lent
              </p>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br />
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4">
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue";
import AppNavigation from "@/components/AppNavigation.vue"; */
import axios from "axios";
const apiLink = "https://next.json-generator.com/api/json/get/VJZuWm-Mt";
export default {
  name: "Hrm",
  components: {},
  data: () => ({
    users: [],
    _pageTitle: "Hrm",
    get pageTitle() {
      return this._pageTitle;
    },
    set pageTitle(value) {
      this._pageTitle = value;
    },
  }),
  beforeCreate() {
    console.log("Before Created");
  },
  created() {
    axios
      .get(apiLink, {
        headers: {
          Authorization: "Bearer" + "Your Bearer Pssword",
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*",
        },
      })
      .then((response) => {
        this.users = response.data;
        console.log(this.users);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};
</script>
