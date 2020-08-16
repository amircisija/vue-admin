<template>
  <div>
    <h1>User with id {{ userId }}</h1>
    <h5>{{ currentUser }}</h5>
  </div>
</template>
<script>
export default {
  name: "UserProfile",
  data: function() {
    return {
      //id is name of the dynamic segment we created in router
      userId: this.$route.params.id,
      currentUser: null,
    };
  },
  computed: {
    user() {},
  },
  mounted() {
    return (this.currentUser = this.$store.getters.user);
  },
};
</script>
