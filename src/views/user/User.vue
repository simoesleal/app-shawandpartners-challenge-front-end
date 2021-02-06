<template>
  <div id="user">
    <v-container class="mt-n16">
      <v-row no-gutters>
        <v-col cols="10" md="4">
          <BaseInput
            v-model.trim.lazy="searchField"
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
          <BaseButton :elevation="1" :fab="true" xSmall>
            <v-icon :color="'#aac173'">mdi-magnify</v-icon>
          </BaseButton>
        </v-col>
      </v-row>
    </v-container>
    <template v-if="$vuetify.breakpoint.smAndDown">
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
      <v-container class="mt-n6">
        <v-row no-gutters>
          <v-col class="ml-3">
            <v-btn fab small>
              <v-icon :color="'#5C6C54'">mdi-arrow-left-drop-circle</v-icon>
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-end mr-3">
            <v-btn fab small>
              <v-icon :color="'#5C6C54'">mdi-arrow-right-drop-circle</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template v-else>
      <v-container>
        <v-row>
          <v-col>
            <v-card>
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
                <template v-slot:item.actions="{}">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <BaseButton
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
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script>
export default {
  name: "User",

  data: () => ({
    h: 100,
    mw: 150,
    searchField: null,
    tableSearch: null,
    usersHeaderTable: [
      { text: "ID", value: "id" },
      { text: "Login", value: "login" },
      { text: "Actions", value: "actions" },
    ],
    users: [
      {
        login: "technoweenietechnoweenietechnoweenie",
        id: 21,
        node_id: "MDQ6VXNlcjIx",
        avatar_url: "https://avatars.githubusercontent.com/u/21?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/technoweenie",
        html_url: "https://github.com/technoweenie",
        followers_url: "https://api.github.com/users/technoweenie/followers",
        following_url:
          "https://api.github.com/users/technoweenie/following{/other_user}",
        gists_url: "https://api.github.com/users/technoweenie/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/technoweenie/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/technoweenie/subscriptions",
        organizations_url: "https://api.github.com/users/technoweenie/orgs",
        repos_url: "https://api.github.com/users/technoweenie/repos",
        events_url:
          "https://api.github.com/users/technoweenie/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/technoweenie/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "macournoyer",
        id: 22,
        node_id: "MDQ6VXNlcjIy",
        avatar_url: "https://avatars.githubusercontent.com/u/22?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/macournoyer",
        html_url: "https://github.com/macournoyer",
        followers_url: "https://api.github.com/users/macournoyer/followers",
        following_url:
          "https://api.github.com/users/macournoyer/following{/other_user}",
        gists_url: "https://api.github.com/users/macournoyer/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/macournoyer/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/macournoyer/subscriptions",
        organizations_url: "https://api.github.com/users/macournoyer/orgs",
        repos_url: "https://api.github.com/users/macournoyer/repos",
        events_url: "https://api.github.com/users/macournoyer/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/macournoyer/received_events",
        type: "User",
        site_admin: false,
      },
    ],
  }),
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
