<template>
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
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchField",

  data: () => ({
    searchField: null
  }),

  methods: {
    ...mapActions("User", ["getListOfUsers", "getUser"]),
    async setUserByUsername() {
      if (this.searchField && this.searchField.length) {
        await this.getUser(this.searchField);
      } else {
        await this.getListOfUsers({
          since: this.initialSince,
          per_page: this.initialPerPage
        });
      }
    }
  }
};
</script>

<style></style>
