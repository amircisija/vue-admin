<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }} C</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item class="navigation__link--child" v-for="(child, i) in item.children" :key="i" link>
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  <router-link :to="child.link" class="navigation__link">
                    {{
                    child.text
                    }}
                  </router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" link :to="item.link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                <router-link :to="item.link" class="navigation__link">
                  {{
                  item.text
                  }}
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">{{ appTitle }}</span>
      </v-toolbar-title>
      <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search"
        class="hidden-sm-and-down"></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
        <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-account</v-icon>
              </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Welcome Admin</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-switch v-model="message" color="purple"></v-switch>
              </v-list-item-action>
              <v-list-item-title>Enable messages</v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-action>
                <v-switch v-model="hints" color="purple"></v-switch>
              </v-list-item-action>
              <v-list-item-title>Enable hints</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>
              <v-btn
              color="primary"
              text
                @click="menu = false"
              >
                <v-icon>mdi-logout</v-icon> Logout
              </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey darken-2">Create contact</v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col class="align-center justify-space-between" cols="12">
              <v-row align="center" class="mr-0">
                <v-avatar size="40px" class="mx-3">
                  <img src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png" alt />
                </v-avatar>
                <v-text-field placeholder="Name"></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field prepend-icon="mdi-account-card-details-outline" placeholder="Company"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field placeholder="Job title"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field prepend-icon="mdi-mail" placeholder="Email"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field type="tel" prepend-icon="mdi-phone" placeholder="(000) 000 - 0000"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field prepend-icon="mdi-text" placeholder="Notes"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn text color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    props: {
      source: String
    },
    data: () => ({
      appTitle: "Admin Vue",
      dialog: false,
      drawer: null,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      items: [{
          icon: "mdi-contacts",
          text: "Dashboard",
          link: "/"
        },
        /*       {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "Hrm",
          model: false,
          children: [
            { icon: "mdi-account-group", text: "Employees", link: "/hrm" },
            { icon: "mdi-account-plus", text: "Add User", link: "/add-user" }
          ]
        }, */
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "Mirage Hrm",
          model: false,
          children: [{
              icon: "mdi-account-group",
              text: "Employees",
              link: "/mirage"
            },
            {
              icon: "mdi-account-plus",
              text: "Add User",
              link: "/mirage-add-user"
            }
          ]
        },
        {
          icon: "mdi-home-city-outline",
          text: "Departments",
          link: "/departments"
        },
        {
          icon: "mdi-home-city-outline",
          text: "Projects",
          link: "/projects"
        }
      ],
      items2: [{
          icon: "mdi-contacts",
          text: "Home",
          to: "/"
        },
        {
          icon: "mdi-history",
          text: "About",
          to: "/about"
        },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "HRM",
          model: true,
          children: [{
            icon: "mdi-plus",
            text: "Add User"
          }]
        },
        {
          icon: "mdi-chevron-up",
          "icon-alt": "mdi-chevron-down",
          text: "More",
          model: false,
          children: [{
              text: "Import"
            },
            {
              text: "Export"
            },
            {
              text: "Print"
            },
            {
              text: "Undo changes"
            },
            {
              text: "Other contacts"
            }
          ]
        },
        {
          icon: "mdi-cog",
          text: "Settings"
        },
        {
          icon: "mdi-message",
          text: "Send feedback"
        },
        {
          icon: "mdi-help-circle",
          text: "Help"
        },
        {
          icon: "mdi-cellphone-link",
          text: "App downloads"
        },
        {
          icon: "mdi-keyboard",
          text: "Go to the old version"
        }
      ]
    })
  };

</script>
<style lang="scss">
  .navigation__link {
    text-decoration: none;
    color: #7d7d7d !important;
  }

  .navigation__link--child {
    padding-left: 30px !important;
  }

  .v-toolbar {
    background: rgb(103, 58, 183);
    background: linear-gradient(90deg, rgba(103, 58, 183, 1) 0%, rgba(103, 58, 183, 1) 35%, rgba(162, 0, 255, 1) 100%);
  }

</style>
