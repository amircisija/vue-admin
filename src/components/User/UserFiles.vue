<template>
  <div>
    <v-list flat>
      <v-subheader>Glavni fajlovi</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in files" :key="i">
          <v-list-item-icon>
            <v-avatar class="user__profile--avatar">
              <v-img width="60" :src="item.icon"></v-img>
            </v-avatar>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <a
                target="_blank"
                class="nuxt__file--link"
                :href="item.location"
                >{{ getRandomProffesion() }}</a
              >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
export default {
  data: () => ({
    fileNames: [
      "Lična karta",
      "Osiguranje",
      "Cips",
      "Porezna",
      "Prijava",
      "Odjava"
    ],
    files: [
      {
        icon: require("@/assets/icon_1.svg"),
        location: require("@/assets/file-1.pdf"),
        text: "File 1"
      },
      {
        icon: require("@/assets/icon_1.svg"),
        location: require("@/assets/file-3.pdf"),
        text: "File 2"
      },
      {
        icon: require("@/assets/icon_1.svg"),
        location: require("@/assets/file-3.pdf"),
        text: "File 3"
      }
    ],
    items: [
      {
        icon: "mdi-wifi",
        text: "Wifi"
      },
      {
        icon: "mdi-bluetooth",
        text: "Bluetooth"
      },
      {
        icon: "mdi-chart-donut",
        text: "Data Usage"
      }
    ],
    model: 1
  }),
  methods: {
    getRandomProffesion() {
      return this.fileNames[Math.floor(Math.random() * this.fileNames.length)];
    }
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
</style>
