<template>
  <div>edit {{ user }}</div>
</template>
<script>
export default {
  name: "EditMirageUser",
  computed: {
    users() {
      return this.$store.state.users;
    },
    user() {
      return this.users.find(v => v.id == this.$route.params.id) || {};
    }
  }
};
</script>
