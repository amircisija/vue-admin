<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Departments</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-data-table
            :headers="headers"
            :items="departments"
            sort-by="text"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-dialog v-model="dialog" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="success" class="my-4" v-bind="attrs" v-on="on"
                      >Add new Department</v-btn
                    >
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field
                              v-model="editedItem.text"
                              label="Department name"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="editedItem.address"
                              label="Address"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-text-field
                              v-model="editedItem.municipality"
                              label="Municipality"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close"
                        >Cancel</v-btn
                      >
                      <v-btn color="blue darken-1" text @click="save"
                        >Save</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)"
                >mdi-pencil</v-icon
              >
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  name: "Departments",

  data: () => ({
    departments: [],
    department: null,
    search: "",
    dialog: false,
    headers: [
      {
        text: "Department name",
        align: "start",
        sortable: false,
        value: "text"
      },
      { text: "Address", value: "address" },
      { text: "Municipality", value: "municipality" },
      { text: "Actions", value: "actions", sortable: false }
    ],

    editedIndex: -1,
    editedItem: {
      text: "",
      address: "",
      municipality: ""
    },
    defaultItem: {
      text: "",
      address: "",
      municipality: ""
    }
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "New Department"
        : "Edit Department Details";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.departments.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.departments.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.departments.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.departments[this.editedIndex], this.editedItem);
      } else {
        this.departments.push(this.editedItem);
      }
      this.close();
    }
  },
  created() {
    /* Api()
      .get("/users")
      .then(response => {
      console.log(response.data);
    }) */
    axios.get("/api/departments").then(response => {
      this.departments = response.data;
      this.$store.commit("saveDepartments", this.departments);
      console.log(this.departments);
    });
  }
};
</script>
