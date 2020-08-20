<template>
  <div>
    <v-tabs v-model="tab" class="mb-5" color="deep-purple">
      <v-tab v-for="item in items2" :key="item.tab">{{ item.tab }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items2" :key="item.tab">
        <v-alert
          border="left"
          colored-border
          color="deep-purple accent-4"
          elevation="2"
          v-if="!files.length"
        >Seems like there are no files!</v-alert>
        <div v-else>
          <p v-for="(item, i) in files" :key="i" class="file__paragraph">
            <span class="file__dot"></span>
            <a
              class="file__link"
              :href="require(`@/assets/${item.name}`)"
              target="_blank"
            >{{ item.name }}</a>
          </p>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    tab: null,
    items2: [
      { tab: "Main files", content: "Tab 1 Content" },
      { tab: "Applications", content: "Tab 2 Content" },
      { tab: "Withdrawals", content: "Tab 3 Content" },
      { tab: "Other", content: "Tab 4 Content" }
    ],
    fileNames: [
      "Lična karta",
      "Osiguranje",
      "Cips",
      "Porezna",
      "Prijava",
      "Odjava"
    ],
    files: [],
    model: 1
  }),
  computed: {
    users() {
      return this.$store.state.users;
    },
    user() {
      return this.users.find(v => v.id == this.$route.params.id) || {};
    }
  },
  methods: {
    getRandomProffesion() {
      return this.fileNames[Math.floor(Math.random() * this.fileNames.length)];
    }
  },
  created() {
    axios
      .get(`/api/files?userId=${this.user.id}`, { data: this.user })
      .then(response => {
        this.files = response.data.files;
        console.log("This User ID is: " + this.user.id);
      })
      .catch(error => console.log(error));
  }
};
</script>
<style lang="scss" scoped>
.v-list-item__icon {
  align-self: flex-start;
  margin: 5px 0;
  margin-right: 0;
}
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 5px;
}
.v-list-item {
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  letter-spacing: normal;
  min-height: auto !important;
  outline: none;
  padding: 0 16px;
  position: relative;
  text-decoration: none;
}
.user__profile--avatar {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
  border: 1px solid red;
  height: 20px !important;
  min-width: 20px !important;
  width: 20px !important;
  .v-image__image {
    width: 20px;
  }
}
.nuxt__file--link {
  text-decoration: none;
  color: #7d7d7d !important;
}
.v-list-item__content {
  align-items: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  overflow: hidden;
  padding: 0;
}
.file__paragraph:hover .file__dot {
  background: #4337cc;
}
.file__dot {
  background: #7367f0;
  width: 12px !important;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 15px;
  top: 0px;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.file__link {
  color: #212121;
  text-decoration: none;
  font-weight: 400;
}
</style>
