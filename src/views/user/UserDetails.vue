<template>
  <div id="user-detail">
    <template v-if="$vuetify.breakpoint.smAndDown">
      <div class="mt-n12" :style="`height: ${400}px; min-width: ${100}%;`">
        <BaseSheet
          class="full-border-radius"
          :color="'white'"
          :dark="false"
          :elevation="6"
          :height="'400px'"
          :light="true"
          :outlined="false"
          :rounded="false"
          :shaped="false"
          :tile="false"
          :width="'100%'"
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
              <v-col cols="12">
                <p
                  class="text-center text-uppercase font-weight-medium"
                  :style="'color: #AAC173;'"
                >
                  {{ user.name }}
                </p>
              </v-col>
              <v-col cols="12">
                <p class="text-center">{{ user.id }}</p>
              </v-col>
              <v-col cols="12">
                <p class="text-center text-truncate">{{ user.login }}</p>
              </v-col>
              <v-col cols="12">
                <p class="text-center text-truncate">{{ user.html_url }}</p>
              </v-col>
              <v-col cols="12">
                <p class="text-center text-truncate">{{ user.created_at }}</p>
              </v-col>
            </v-row>
          </div>
        </BaseSheet>
      </div>
      <v-row class="mt-1">
        <v-col>
          <v-subheader>
            <span class="text-uppercase green-border-bottom">Repositories</span>
          </v-subheader>
        </v-col>
      </v-row>
      <div class="wrapper" :style="`height: ${150}px;`">
        <div
          v-for="(repository, index) in repositories"
          :key="index"
          class="ml-2 mr-8"
          :style="`min-width: ${100}%;`"
        >
          <BaseSheet
            class="full-border-radius"
            :color="'white'"
            :dark="false"
            :elevation="6"
            :height="'130px'"
            :light="true"
            :outlined="false"
            :rounded="false"
            :shaped="false"
            :tile="false"
            :width="'100%'"
          >
            <div>
              <v-row no-gutters class="pa-2">
                <v-col cols="12">
                  <p class="text-center">{{ repository.id }}</p>
                </v-col>
                <v-col cols="12">
                  <p class="text-center text-truncate">
                    {{ repository.name }}
                  </p>
                </v-col>
                <v-col cols="12">
                  <p class="text-center text-truncate">
                    {{ repository.html_url }}
                  </p>
                </v-col>
              </v-row>
            </div>
          </BaseSheet>
        </div>
      </div>
    </template>
    <template v-else>
      <v-container>
        <v-row>
          <v-col>
            <div
              class="mt-n12"
              :style="`height: ${320}px; min-width: ${100}%;`"
            >
              <BaseSheet
                class="full-border-radius"
                :color="'white'"
                :dark="false"
                :elevation="6"
                :height="'320px'"
                :light="true"
                :outlined="false"
                :rounded="false"
                :shaped="false"
                :tile="false"
                :width="'100%'"
              >
                <div>
                  <v-row>
                    <v-col cols="4" lg="3" xl="2">
                      <v-row no-gutters class="pa-4">
                        <v-col>
                          <v-img
                            :height="'200px'"
                            :width="'200px'"
                            :src="user.avatar_url"
                          ></v-img>
                        </v-col>
                      </v-row>
                      <v-row class="mt-n6">
                        <v-col>
                          <p
                            class="text-h6 text-uppercase font-weight-medium ml-7"
                            :style="'color: #AAC173;'"
                          >
                            {{ user.name }}
                          </p>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col>
                      <v-row>
                        <v-col cols="12">
                          <span
                            class="text-uppercase font-weight-medium mr-3"
                            :style="'color: #AAC173;'"
                            >ID
                          </span>
                        </v-col>
                        <v-col class="mt-n6" cols="12">
                          <span>{{ user.id }}</span>
                        </v-col>

                        <v-col cols="12">
                          <span
                            class="text-uppercase font-weight-medium mr-3"
                            :style="'color: #AAC173;'"
                            >Login
                          </span>
                        </v-col>
                        <v-col class="mt-n6" cols="12">
                          <span>{{ user.login }}</span>
                        </v-col>

                        <v-col cols="12">
                          <span
                            class="text-uppercase font-weight-medium mr-3"
                            :style="'color: #AAC173;'"
                            >URL
                          </span>
                        </v-col>
                        <v-col class="mt-n6" cols="12">
                          <span>{{ user.html_url }}</span>
                        </v-col>

                        <v-col cols="12">
                          <span
                            class="text-uppercase font-weight-medium mr-3"
                            :style="'color: #AAC173;'"
                            >Created at
                          </span>
                        </v-col>
                        <v-col class="mt-n6" cols="12">
                          <span>{{ user.created_at }}</span>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </div>
              </BaseSheet>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card rounded>
              <v-card-title>
                <v-col>
                  <v-subheader>
                    <span class="text-uppercase green-border-bottom"
                      >Repositories</span
                    >
                  </v-subheader>
                </v-col>
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
                :headers="repositoriesHeaderTable"
                :items="repositories"
                :item-key="'id'"
                loading-text="Searching repostories."
                :search="tableSearch"
                no-data-text="Repositories not found!"
              >
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

/* */

<script>
export default {
  name: "UserDetails",

  data: () => ({
    repositoriesHeaderTable: [
      { text: "ID", value: "id" },
      { text: "Repository", value: "name" },
      { text: "URL", value: "html_url" },
    ],
    tableSearch: null,
    user: {
      login: "simoesleal",
      id: 12055630,
      node_id: "MDQ6VXNlcjEyMDU1NjMw",
      avatar_url: "https://avatars.githubusercontent.com/u/12055630?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/simoesleal",
      html_url: "https://github.com/simoesleal",
      followers_url: "https://api.github.com/users/simoesleal/followers",
      following_url:
        "https://api.github.com/users/simoesleal/following{/other_user}",
      gists_url: "https://api.github.com/users/simoesleal/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/simoesleal/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/simoesleal/subscriptions",
      organizations_url: "https://api.github.com/users/simoesleal/orgs",
      repos_url: "https://api.github.com/users/simoesleal/repos",
      events_url: "https://api.github.com/users/simoesleal/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/simoesleal/received_events",
      type: "User",
      site_admin: false,
      name: "Antonio Simões",
      company: "Parciom",
      blog: "",
      location: "Brazil",
      email: null,
      hireable: null,
      bio: null,
      twitter_username: null,
      public_repos: 11,
      public_gists: 0,
      followers: 1,
      following: 3,
      created_at: "2015-04-21T18:39:12Z",
      updated_at: "2021-02-06T07:44:23Z",
    },

    repositories: [
      {
        id: 158817249,
        node_id: "MDEwOlJlcG9zaXRvcnkxNTg4MTcyNDk=",
        name: "DesafioJavaDev",
        full_name: "simoesleal/DesafioJavaDev",
        private: false,
        owner: {
          login: "simoesleal",
          id: 12055630,
          node_id: "MDQ6VXNlcjEyMDU1NjMw",
          avatar_url: "https://avatars.githubusercontent.com/u/12055630?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/simoesleal",
          html_url: "https://github.com/simoesleal",
          followers_url: "https://api.github.com/users/simoesleal/followers",
          following_url:
            "https://api.github.com/users/simoesleal/following{/other_user}",
          gists_url: "https://api.github.com/users/simoesleal/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/simoesleal/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/simoesleal/subscriptions",
          organizations_url: "https://api.github.com/users/simoesleal/orgs",
          repos_url: "https://api.github.com/users/simoesleal/repos",
          events_url:
            "https://api.github.com/users/simoesleal/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/simoesleal/received_events",
          type: "User",
          site_admin: false,
        },
        html_url: "https://github.com/simoesleal/DesafioJavaDev",
        description: "Desafio desenvolvedor Java Full Stack",
        fork: false,
        url: "https://api.github.com/repos/simoesleal/DesafioJavaDev",
        forks_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/forks",
        keys_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/teams",
        hooks_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/hooks",
        issue_events_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/events",
        assignees_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/branches{/branch}",
        tags_url: "https://api.github.com/repos/simoesleal/DesafioJavaDev/tags",
        blobs_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/languages",
        stargazers_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/stargazers",
        contributors_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/contributors",
        subscribers_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/subscribers",
        subscription_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/subscription",
        commits_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/merges",
        archive_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/downloads",
        issues_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/labels{/name}",
        releases_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/simoesleal/DesafioJavaDev/deployments",
        created_at: "2018-11-23T10:27:48Z",
        updated_at: "2018-11-23T10:33:45Z",
        pushed_at: "2018-11-23T10:33:43Z",
        git_url: "git://github.com/simoesleal/DesafioJavaDev.git",
        ssh_url: "git@github.com:simoesleal/DesafioJavaDev.git",
        clone_url: "https://github.com/simoesleal/DesafioJavaDev.git",
        svn_url: "https://github.com/simoesleal/DesafioJavaDev",
        homepage: null,
        size: 26,
        stargazers_count: 0,
        watchers_count: 0,
        language: "Java",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master",
      },
      {
        id: 174198439,
        node_id: "MDEwOlJlcG9zaXRvcnkxNzQxOTg0Mzk=",
        name: "Estrutura_de_Dados-Algoritmos-JavaScript",
        full_name: "simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript",
        private: false,
        owner: {
          login: "simoesleal",
          id: 12055630,
          node_id: "MDQ6VXNlcjEyMDU1NjMw",
          avatar_url: "https://avatars.githubusercontent.com/u/12055630?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/simoesleal",
          html_url: "https://github.com/simoesleal",
          followers_url: "https://api.github.com/users/simoesleal/followers",
          following_url:
            "https://api.github.com/users/simoesleal/following{/other_user}",
          gists_url: "https://api.github.com/users/simoesleal/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/simoesleal/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/simoesleal/subscriptions",
          organizations_url: "https://api.github.com/users/simoesleal/orgs",
          repos_url: "https://api.github.com/users/simoesleal/repos",
          events_url:
            "https://api.github.com/users/simoesleal/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/simoesleal/received_events",
          type: "User",
          site_admin: false,
        },
        html_url:
          "https://github.com/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript",
        description:
          "Conceitos de estrutura de dados e algoritmos em JavaScript",
        fork: false,
        url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript",
        forks_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/forks",
        keys_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/keys{/key_id}",
        collaborators_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/collaborators{/collaborator}",
        teams_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/teams",
        hooks_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/hooks",
        issue_events_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/issues/events{/number}",
        events_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/events",
        assignees_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/assignees{/user}",
        branches_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/branches{/branch}",
        tags_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/tags",
        blobs_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/git/blobs{/sha}",
        git_tags_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/git/tags{/sha}",
        git_refs_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/git/refs{/sha}",
        trees_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/git/trees{/sha}",
        statuses_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/statuses/{sha}",
        languages_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/languages",
        stargazers_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/stargazers",
        contributors_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/contributors",
        subscribers_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/subscribers",
        subscription_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/subscription",
        commits_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/commits{/sha}",
        git_commits_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/git/commits{/sha}",
        comments_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/comments{/number}",
        issue_comment_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/issues/comments{/number}",
        contents_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/contents/{+path}",
        compare_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/compare/{base}...{head}",
        merges_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/merges",
        archive_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/{archive_format}{/ref}",
        downloads_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/downloads",
        issues_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/issues{/number}",
        pulls_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/pulls{/number}",
        milestones_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/milestones{/number}",
        notifications_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/notifications{?since,all,participating}",
        labels_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/labels{/name}",
        releases_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/releases{/id}",
        deployments_url:
          "https://api.github.com/repos/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript/deployments",
        created_at: "2019-03-06T18:27:12Z",
        updated_at: "2019-03-06T18:44:28Z",
        pushed_at: "2019-03-06T18:44:26Z",
        git_url:
          "git://github.com/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript.git",
        ssh_url:
          "git@github.com:simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript.git",
        clone_url:
          "https://github.com/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript.git",
        svn_url:
          "https://github.com/simoesleal/Estrutura_de_Dados-Algoritmos-JavaScript",
        homepage: null,
        size: 6,
        stargazers_count: 0,
        watchers_count: 0,
        language: "JavaScript",
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: "master",
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

.green-border-bottom {
  border-bottom: 1px solid #64ce97;
}
</style>
