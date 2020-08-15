<template>
  <v-card>
    <v-card-text>
      <p class="subtitle-1 font-weight-bold text--primary">
        {{ getFullName }}
      </p>
      <v-list-item-avatar tile size="80" color="grey" class="card__avatar"
        ><v-img :src="user.picture.thumbnail"></v-img
      ></v-list-item-avatar>
      <div>{{ getRandomProffesion() }}</div>
    </v-card-text>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-icon class="text-center">
            <v-icon color="purple darken-2">fas fa-map-marker-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ getAddress }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="purple darken-2">fas fa-envelope</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ user.email }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="purple darken-2">fas fa-phone</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ user.phone }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4">
        View details
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "HrmUser",
  props: {
    user: {
      type: Object,
    },
  },
  data: () => ({
    proffesion: ["Call Agent", "Support", "Developer"],
    chosenName: "",
  }),
  methods: {
    getRandomProffesion() {
      return this.proffesion[
        Math.floor(Math.random() * this.proffesion.length)
      ];
    },
  },
  computed: {
    chosenProf() {
      return this.getRandomProffesion();
    },
    getFullName() {
      return this.user.name.first + " " + this.user.name.last;
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
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.v-card {
  border-radius: 0.5rem;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1) !important;
}
.card__avatar {
  position: absolute;
  top: 0;
  right: 10px;
}
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 5px;
}
.v-icon.v-icon {
  align-items: center;
  display: inline-flex;
  font-feature-settings: "liga";
  font-size: 16px;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  position: relative;
  text-indent: 0;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 0 auto;
}
</style>
