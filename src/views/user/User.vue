<template>
  <div id="user">
    <!-- COMMON LAYOUT -->
    <v-container class="mt-n16">
      <v-row no-gutters>
        <v-col cols="10" md="4">
          <BaseInput
            v-model.lazy.trim="searchField"
            :backgroundColor="'white'"
            :color="'#aac173'"
            :clearable="true"
            :dense="true"
            :label="'Search user:'"
            :placeholder="'simoesleal'"
            :rounded="true"
          >
          </BaseInput>
        </v-col>
        <v-spacer v-if="$vuetify.breakpoint.smAndDown"></v-spacer>
        <v-col cols="1">
          <BaseButton
            @click="setUserByUsername()"
            :elevation="1"
            :fab="true"
            xSmall
          >
            <v-icon :color="'#aac173'">mdi-magnify</v-icon>
          </BaseButton>
        </v-col>
      </v-row>
    </v-container>

    <!-- MOBILE LAYOUT -->
    <template v-if="$vuetify.breakpoint.smAndDown">
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
    </template>

    <!-- DESKTOP LAYOUT -->
    <template v-else>
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
            <v-skeleton-loader
              v-else
              transition
              type="table"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </v-container>
    </template>

    <v-container v-if="users && users.length > 1" class="mt-n6 mt-md-0">
      <v-row no-gutters>
        <v-col class="ml-3">
          <v-btn
            @click="getPreviousDataSet()"
            fab
            small
            :disabled="firstUserId > 1 ? false : true"
          >
            <v-icon :color="'#5C6C54'">mdi-arrow-left-drop-circle</v-icon>
          </v-btn>
        </v-col>
        <v-col class="d-flex justify-center">
          <p class="text-h5" :style="'color: #5C6C54;'">
            {{ firstUserId }} to {{ lastUserId }}
          </p>
        </v-col>
        <v-col class="d-flex justify-end mr-3">
          <v-btn @click="getNextDataSet()" fab small>
            <v-icon :color="'#5C6C54'">mdi-arrow-right-drop-circle</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "User",

  data: () => ({
    initialSince: 0,
    initialPerPage: 100,
    h: 100,
    mw: 150,
    searchField: null,
    tableSearch: null,
    usersHeaderTable: [
      { text: "ID", value: "id" },
      { text: "Login", value: "login" },
      { text: "Actions", value: "actions" },
    ],
  }),

  computed: {
    ...mapState("User", ["users"]),
    ...mapGetters("User", ["lastUserId", "firstUserId"]),
  },

  methods: {
    ...mapActions("User", [
      "getListOfUsers",
      "getUser",
      "getUserDetails",
      "resetStore",
    ]),

    async getDetails(username) {
      if (await this.getUserDetails(username)) {
        this.$router.push({ name: "UserDetails" });
      }
    },

    async setUserByUsername() {
      if (this.searchField && this.searchField.length) {
        await this.getUser(this.searchField);
      } else {
        await this.getListOfUsers({
          since: this.initialSince,
          per_page: this.initialPerPage,
        });
      }
    },

    async getPreviousDataSet() {
      let newSince;
      if (this.firstUserId < this.initialPerPage) {
        newSince = 0;
      } else {
        newSince = this.firstUserId - this.initialPerPage;
      }
      this.getListOfUsers({
        since: newSince,
        per_page: this.initialPerPage,
      });
    },

    async getNextDataSet() {
      this.getListOfUsers({
        since: this.lastUserId,
        per_page: this.initialPerPage,
      });
    },
  },

  created() {
    if (!this.users || this.users.length === 0) {
      this.getListOfUsers({
        since: this.initialSince,
        per_page: this.initialPerPage,
      });
    } else if (this.users.length === 1) {
      this.resetStore();
      this.getListOfUsers({
        since: this.initialSince,
        per_page: this.initialPerPage,
      });
    }
  },
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
