<template>
  <v-card>
    <v-card-text v-if="user.picture" class="mb-4">
      <div
        class="is__active--indicator"
        v-bind:class="user.isActive ? 'active__class' : 'not__active__class'"
      >
        <span></span>
      </div>

      <p class="subtitle-1 font-weight-bold text--primary">{{ getFullName }}</p>
      <v-list-item-avatar tile size="80" color="grey" class="card__avatar">
        <v-img :src="user.picture.thumbnail"></v-img>
      </v-list-item-avatar>
      <div class="mb-2">{{ user.position }}</div>

      <h4>
        Contract ends
        <span>{{ userFormatedDate }}</span>
      </h4>
    </v-card-text>
    <v-list dense v-if="user.picture">
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="purple darken-2">mdi-email-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ user.email }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="purple darken-2">mdi-cellphone</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ user.phone }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4" @click="handleSelectUser(user)">View details</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import moment from "moment";
export default {
  name: "HrmUserTest",
  props: {
    user: {
      type: Object
    }
  },
  data: () => ({
    proffesion: ["Call Agent", "Support", "Developer"],
    selectedUser: null
  }),
  methods: {
    getRandomProffesion() {
      return this.proffesion[
        Math.floor(Math.random() * this.proffesion.length)
      ];
    },
    handleSelectUser(user) {
      this.$store.dispatch("SELECT_USER", user);
      this.$router.push({ path: `/mirage/user/${this.user.id}` });
    }
  },
  computed: {
    userFormatedDate() {
      return this.user.endDate
        ? moment(this.user.endDate).format("DD.MM.YYYY")
        : "";
    },
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
    }
  }
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

.card__avatar {
  position: absolute;
  top: 0;
  right: 10px;
  border-radius: 50% !important;
}
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 0;
}
.v-icon.v-icon {
  font-size: 16px;
  user-select: none;
  margin: 0 auto;
}
.v-application .subtitle-1 {
  margin-bottom: 0;
}
.is__active--indicator {
  width: 10px;
  height: 10px;

  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin: 5px;
  border-radius: 50%;
  margin-left: 0;
}
.active__class {
  background: #8bc34a;
}
.not__active__class {
  background: #f44336;
}
</style>
