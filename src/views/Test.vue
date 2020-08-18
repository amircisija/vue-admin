<template>
  <div class="test">
    <h2>Test Page</h2>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ut, adipisci
      molestias nisi iure porro ab nesciunt, quo ex id voluptates quas
      repudiandae quis consequuntur consectetur laborum corrupti, eaque odit?
    </p>
  </div>
</template>

<script>
import Api from "@/service/api";
import axios from "axios";
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue";
import AppNavigation from "@/components/AppNavigation.vue"; */
export default {
  name: "Test",
  data: ()=> ({
    users: []
  }),
  created() {
    /* Api()
      .get("/users")
      .then(response => {
      console.log(response.data);
    }) */
    axios.get('/api/users')
      .then(response => {
        console.log(response.data)
      })
  }
};
</script>
