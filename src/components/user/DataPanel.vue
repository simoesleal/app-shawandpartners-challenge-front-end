<template>
  <div v-if="$vuetify.breakpoint.smAndDown">
    <template v-if="users && users">
      <div class="wrapper" :style="`height: ${300}px;`">
        <div
          v-for="(user, index) in users"
          :key="index"
          class="ml-2 mr-8"
          :style="`min-width: ${200}px;`"
        >
          <BaseSheet
            class="full-border-radius"
            :color="'white'"
            :dark="false"
            :elevation="6"
            :height="'250px'"
            :light="true"
            :outlined="false"
            :rounded="false"
            :shaped="false"
            :tile="false"
            :width="'200px'"
          >
            <div>
              <v-row no-gutters class="pa-2">
                <v-col cols="12" class="mb-3">
                  <v-img
                    class="mx-auto"
                    :style="'border-radius: 100%;'"
                    :height="'100px'"
                    :width="'100px'"
                    :src="user.avatar_url"
                  ></v-img>
                </v-col>
                <v-col cols="6" class="d-flex">
                  <span
                    class="text-uppercase font-weight-medium mr-3"
                    :style="'color: #AAC173;'"
                    >ID
                  </span>
                </v-col>
                <v-col cols="6" class="d-flex justify-start">
                  <span>{{ user.id }}</span>
                </v-col>
                <v-col cols="6" class="d-flex">
                  <span
                    class="text-uppercase font-weight-medium mr-3"
                    :style="'color: #AAC173;'"
                    >Login
                  </span>
                </v-col>
                <v-col cols="6" class="d-flex justify-start">
                  <p class="text-truncate">{{ user.login }}</p>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col class="d-flex justify-center">
                  <BaseButton
                    @click="getDetails(user.login)"
                    :color="'#5C6C54'"
                    dark
                    :elevation="0"
                    :rounded="true"
                    small
                  >
                    Details
                    <v-icon class="ml-2" small>mdi-account-details</v-icon>
                  </BaseButton>
                </v-col>
              </v-row>
            </div>
          </BaseSheet>
        </div>
      </div>
    </template>
    <v-skeleton-loader v-else transition type="card"></v-skeleton-loader>
  </div>
  <div v-else>
    <v-container>
      <v-row>
        <v-col>
          <v-card v-if="users && users.length">
            <v-card-title>
              <v-col cols="3" class="ml-auto">
                <v-text-field
                  v-model="tableSearch"
                  :color="'#AAC173'"
                  append-icon="mdi-magnify"
                  label="Search in table"
                  hide-details
                ></v-text-field>
              </v-col>
            </v-card-title>
            <v-data-table
              :headers="usersHeaderTable"
              :items="users"
              :item-key="'id'"
              loading-text="Searching Users."
              :search="tableSearch"
              no-data-text="Users not found!"
            >
              <template v-slot:item.actions="{ item }">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <BaseButton
                      @click="getDetails(item.login)"
                      v-bind="attrs"
                      v-on="on"
                      :icon="true"
                      :elevation="2"
                      ><v-icon :color="'#AAC173'"
                        >mdi-account-details-outline</v-icon
                      ></BaseButton
                    >
                  </template>
                  <span>Details</span>
                </v-tooltip>
              </template>
            </v-data-table>
          </v-card>
          <v-skeleton-loader v-else transition type="table"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "DataPanel",

  data: () => ({
    tableSearch: null,
    usersHeaderTable: [
      { text: "ID", value: "id" },
      { text: "Login", value: "login" },
      { text: "Actions", value: "actions" }
    ]
  }),

  computed: {
    ...mapState("User", ["users"])
  },

  methods: {
    ...mapActions("User", ["getUserDetails"]),

    async getDetails(username) {
      if (await this.getUserDetails(username)) {
        this.$router.push({ name: "UserDetails" });
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.wrapper::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.wrapper {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.full-border-radius {
  border-radius: 15px;
}
</style>
