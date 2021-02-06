<template>
  <div id="dashboard">
    <v-container class="mt-3">
      <v-row no-gutters>
        <v-col cols="10">
          <BaseInput
            v-model.trim.lazy="searchField"
            :backgroundColor="'white'"
            :color="'#aac173'"
            :dense="true"
            :label="'Search user:'"
            :placeholder="'simoesleal'"
            :rounded="true"
          >
          </BaseInput>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1">
          <BaseButton :elevation="1" :fab="true" xSmall>
            <v-icon :color="'#aac173'">mdi-magnify</v-icon>
          </BaseButton>
        </v-col>
      </v-row>
    </v-container>
    <div class="wrapper" :style="`height: ${300}px;`">
      <div
        v-for="(user, index) in users"
        :key="index"
        class="ml-2 mr-8"
        :style="`min-width: ${200}px;`"
      >
        <BaseSheet
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
                <span class="text-uppercase mr-3" :style="'color: #AAC173;'"
                  >ID
                </span>
              </v-col>
              <v-col cols="6" class="d-flex justify-start">
                <span>{{ user.id }}</span>
              </v-col>
              <v-col cols="6" class="d-flex">
                <span class="text-uppercase mr-3" :style="'color: #AAC173;'"
                  >Login
                </span>
              </v-col>
              <v-col cols="6" class="d-flex justify-start">
                <span>{{ user.login }}</span>
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
                </BaseButton>
              </v-col>
            </v-row>
          </div>
        </BaseSheet>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",

  data: () => ({
    h: 100,
    mw: 150,
    searchField: null,
    users: [
      {
        login: "technoweenie",
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
</style>
