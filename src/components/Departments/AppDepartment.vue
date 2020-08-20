<template>
  <v-card>{{ department.text }}</v-card>
</template>
<script>
export default {
  props: {
    department: {
      type: Object
    }
  },
  computed: {
    departments() {
      return this.$store.state.departments;
    }
  }
};
</script>
