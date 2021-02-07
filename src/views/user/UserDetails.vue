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
                :items="repos"
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
import { mapState } from "vuex";
export default {
  name: "UserDetails",

  data: () => ({
    repositoriesHeaderTable: [
      { text: "ID", value: "id" },
      { text: "Repository", value: "name" },
      { text: "URL", value: "html_url" },
    ],
    tableSearch: null,
  }),

  computed: {
    ...mapState("User", ["user", "repos"]),
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

.green-border-bottom {
  border-bottom: 1px solid #64ce97;
}
</style>
