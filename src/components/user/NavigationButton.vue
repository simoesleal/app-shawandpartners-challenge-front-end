<template>
  <v-container class="mt-n6 mt-md-0">
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
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavigationButton",

  computed: {
    ...mapGetters("User", ["lastUserId", "firstUserId"])
  },

  methods: {
    ...mapActions("User", ["getListOfUsers"]),

    async getPreviousDataSet() {
      let newSince;
      if (this.firstUserId < this.initialPerPage) {
        newSince = 0;
      } else {
        newSince = this.firstUserId - this.initialPerPage;
      }
      this.getListOfUsers({
        since: newSince,
        per_page: this.initialPerPage
      });
    },

    async getNextDataSet() {
      this.getListOfUsers({
        since: this.lastUserId,
        per_page: this.initialPerPage
      });
    }
  }
};
</script>

<style></style>
